import getErrorByCode, { HttpError, NetworkError } from '../sdk-client/errors'
import type {
  ConcurrentModificationMiddlewareOptions,
  Middleware,
  MiddlewareRequest,
  MiddlewareResponse,
  Next,
  JsonObject,
  QueryParam,
  HttpErrorType,
  ClientRequest,
} from '../types/sdk.d'
import parseHeaders from './parse-header'

function calcDelayDuration(
  retryCount: number,
  retryDelay: number,
  maxRetries: number,
  backoff: boolean,
  maxDelay: number
): number {
  if (backoff)
    return retryCount !== 0 // do not increase if it's the first retry
      ? Math.min(
          Math.round((Math.random() + 1) * retryDelay * 2 ** retryCount),
          maxDelay
        )
      : retryDelay
  return retryDelay
}

function maskAuthData(
  request: ClientRequest,
  maskSensitiveHeaderData: boolean | undefined
) {
  if (maskSensitiveHeaderData) {
    if (request && request.headers && request.headers.authorization)
      request.headers.authorization = 'Bearer ********'
    if (request && request.headers && request.headers.Authorization)
      request.headers.Authorization = 'Bearer ********'
  }
}

function createError({
  statusCode,
  message,
  ...rest
}: JsonObject<any>): HttpErrorType {
  let errorMessage = message || 'Unexpected non-JSON error response'
  if (statusCode === 404)
    errorMessage = `URI not found: ${rest.originalRequest.uri}`

  const ResponseError = getErrorByCode(statusCode)
  if (ResponseError) return new ResponseError(errorMessage, rest)
  return new HttpError(statusCode, errorMessage, rest)
}

export default function createConcurrentModificationMiddleware(
  options: ConcurrentModificationMiddlewareOptions
): Middleware {
  return (next: Next): Next =>
    (request: MiddlewareRequest, response: MiddlewareResponse) => {
      // check if it's not a 409 error return early
      // if (!response?.error || response.error.statusCode !== 409) {
      //   next(request, response); return
      // }

      const nextRequest = {
        ...request,
        headers: {
          ...request.headers,
        },
      }

      const _options = { ...response.request, ...options }
      const {
        host,
        timeout,
        enableRetry,
        fetch: fetchFunction,
        fetchOptions,
        retryConfig: {
          maxRetries = 10,
          backoff = true,
          retryDelay = 200,
          maxDelay = Infinity,
        } = {},
        getAbortController,
        maskSensitiveHeaderData,
        includeResponseHeaders,
        includeOriginalRequest,
        includeRequestInErrorResponse,
      } = _options
      // const { maxRetries, backoff, retryDelay, maxDelay } = retryConfig

      let abortController: AbortController
      if (timeout || getAbortController)
        abortController =
          (getAbortController ? getAbortController() : null) ||
          new AbortController()

      const url =
        (host ?? nextRequest.baseUri).replace(/\/$/, '') + nextRequest.uri
      // const url = host.replace(/\/$/, '') + request.uri
      const requestHeader: JsonObject<QueryParam> = { ...nextRequest.headers }

      // Unset the content-type header if explicitly asked to (passing `null` as value).
      if (requestHeader['Content-Type'] === null) {
        delete requestHeader['Content-Type']
      }
      if (
        !Object.prototype.hasOwnProperty.call(requestHeader, 'Content-Type') ||
        !Object.prototype.hasOwnProperty.call(requestHeader, 'content-type')
      ) {
        requestHeader['Content-Type'] = 'application/json'
      }

      let retryCount = 0
      function executeFetch() {
        let timer: ReturnType<typeof setTimeout>
        if (timeout) {
          timer = setTimeout(() => {
            abortController.abort()
          }, timeout)
        }

        // console.log(response, '------------------------>')
        /** extract the currentVersion from error body and update request */
        const version = response.error.body.errors[0].currentVersion
        const body =
          typeof fetchOptions.body == 'string'
            ? { ...JSON.parse(fetchOptions.body), version }
            : fetchOptions.body

        fetchOptions.body = JSON.stringify(body)
        fetchFunction(url, fetchOptions)
          .then(
            (res: Response) => {
              if (res.ok) {
                if (fetchOptions.method === 'HEAD') {
                  next(request, {
                    ...response,
                    statusCode: res.status,
                  })
                  return
                }

                res.text().then((result) => {
                  // Try to parse the response as JSON
                  let parsed
                  try {
                    parsed = result.length > 0 ? JSON.parse(result) : {}
                  } catch (err) {
                    if (enableRetry && retryCount < maxRetries) {
                      setTimeout(
                        executeFetch,
                        calcDelayDuration(
                          retryCount,
                          retryDelay,
                          maxRetries,
                          backoff,
                          maxDelay
                        )
                      )
                      retryCount += 1
                      return
                    }
                    parsed = result
                  }

                  const parsedResponse: any = {
                    ...response,
                    body: parsed,
                    error: undefined,
                    statusCode: res.status,
                  }

                  if (includeResponseHeaders)
                    parsedResponse.headers = parseHeaders(res.headers)

                  if (includeOriginalRequest) {
                    parsedResponse.request = {
                      ...fetchOptions,
                    }
                    maskAuthData(
                      parsedResponse.request,
                      maskSensitiveHeaderData
                    )
                  }
                  next(request, parsedResponse)
                })
                return
              }

              res.text().then((text: any) => {
                // Try to parse the error response as JSON
                let parsed
                try {
                  parsed = JSON.parse(text)
                } catch (error) {
                  parsed = text
                }

                const error: HttpErrorType = createError({
                  statusCode: res.status,
                  ...(includeRequestInErrorResponse
                    ? { originalRequest: request }
                    : {}),
                  retryCount,
                  headers: parseHeaders(res.headers),
                  ...(typeof parsed === 'object'
                    ? { message: parsed.message, body: parsed }
                    : { message: parsed, body: parsed }),
                })

                maskAuthData(error.originalRequest, maskSensitiveHeaderData)
                // Let the final resolver to reject the promise
                const parsedResponse = {
                  ...response,
                  error,
                  statusCode: res.status,
                }

                next(request, parsedResponse)
              })
            },
            (e: Error) => {
              if (enableRetry)
                if (retryCount < maxRetries) {
                  setTimeout(
                    executeFetch,
                    calcDelayDuration(
                      retryCount,
                      retryDelay,
                      maxRetries,
                      backoff,
                      maxDelay
                    )
                  )
                  retryCount += 1
                  return
                }

              const error = new NetworkError(e.message, {
                ...(includeRequestInErrorResponse
                  ? { originalRequest: request }
                  : {}),
                retryCount,
              })
              maskAuthData(error.originalRequest, maskSensitiveHeaderData)
              next(request, { ...response, error, statusCode: 0 })
            }
          )
          .finally(() => {
            clearTimeout(timer)
          })
      }
      executeFetch()
    }
}
