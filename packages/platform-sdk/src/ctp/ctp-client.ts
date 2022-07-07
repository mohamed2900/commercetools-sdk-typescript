import {ApiRoot, ClientResponse, Middleware} from './../generated/index'

export function createApiBuilderFromCtpClient(
  ctpClient: any,
  baseUri?: string
): ApiRoot {
  return new ApiRoot({
    executeRequest: ctpClient.execute,
    baseUri: baseUri,
  })
}

export function createConcurrentModificationMiddleware(maxRetries: number = 3): Middleware
{
  return (request, executor) => {
    let retryCount = 0
    function retry(response: ClientResponse): Promise<ClientResponse> {
      if (response.statusCode == 409 && retryCount < maxRetries) {
        request.body = {...request.body, version: response.body.errors[0].currentVersion} // modify version
        retryCount++
        return executor(request).then(retry)
      }
      return Promise.resolve(response)
    }

    return executor(request).then(retry)
  }
}
