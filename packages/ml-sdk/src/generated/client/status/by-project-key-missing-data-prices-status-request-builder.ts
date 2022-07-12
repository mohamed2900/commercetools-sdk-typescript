/**
 * Code generated by [commercetools RMF-Codegen](https://github.com/commercetools/rmf-codegen). DO NOT EDIT.
 * Please don't change this file manually but run `rmf-codegen generate raml_file_path -o output_path -t typescript_client` to update it.
 * For more information about the commercetools platform APIs, visit https://docs.commercetools.com/.
 */
import { executeRequest } from '../../shared/utils/common-types'
import { ByProjectKeyMissingDataPricesStatusByTaskIdRequestBuilder } from './by-project-key-missing-data-prices-status-by-task-id-request-builder'
/**
 **/
export class ByProjectKeyMissingDataPricesStatusRequestBuilder {
  constructor(
    protected readonly args: {
      pathArgs: {
        projectKey: string
      }
      executeRequest: executeRequest
      baseUri?: string
    }
  ) {}
  public withTaskId(childPathArgs: {
    taskId: string
  }): ByProjectKeyMissingDataPricesStatusByTaskIdRequestBuilder {
    return new ByProjectKeyMissingDataPricesStatusByTaskIdRequestBuilder({
      pathArgs: {
        ...this.args.pathArgs,
        ...childPathArgs,
      },
      executeRequest: this.args.executeRequest,
      baseUri: this.args.baseUri,
    })
  }
}
