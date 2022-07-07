import { ApiRoot, ClientResponse, Middleware } from './../generated/index'
import { Client } from '@commercetools/sdk-client-v2'

export function createApiBuilderFromCtpClient(
  ctpClient: Client | any,
  baseUri?: string,
  middlewares?: Middleware[]
): ApiRoot {
  return new ApiRoot({
    executeRequest: ctpClient.execute,
    baseUri: baseUri,
    middlewares: middlewares,
  })
}

export function createConcurrentModificationMiddleware(
  maxRetries: number = 3
): Middleware {
  return (request, executor) => {
    let retryCount = 0
    function retry(response: ClientResponse): Promise<ClientResponse> {
      if (response.statusCode == 409 && retryCount < maxRetries) {
        request.body = {
          ...request.body,
          version: response.body.errors[0].currentVersion,
        } // modify version
        retryCount++
        return executor(request).then(retry)
      }
      return Promise.resolve(response)
    }

    return executor(request).then(retry)
  }
}
