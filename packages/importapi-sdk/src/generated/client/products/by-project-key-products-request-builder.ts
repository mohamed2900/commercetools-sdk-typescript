/**
 * Code generated by [commercetools RMF-Codegen](https://github.com/commercetools/rmf-codegen). DO NOT EDIT.
 * Please don't change this file manually but run `rmf-codegen generate raml_file_path -o output_path -t typescript_client` to update it.
 * For more information about the commercetools platform APIs, visit https://docs.commercetools.com/.
 */
import { executeRequest } from '../../shared/utils/common-types'
import { ByProjectKeyProductsImportContainersRequestBuilder } from '../import-containers/by-project-key-products-import-containers-request-builder'
import { ByProjectKeyProductsImportSinkKeyByImportSinkKeyRequestBuilder } from './by-project-key-products-import-sink-key-by-import-sink-key-request-builder'
/**
 **/
export class ByProjectKeyProductsRequestBuilder {
  constructor(
    protected readonly args: {
      pathArgs: {
        projectKey: string
      }
      executeRequest: executeRequest
      baseUri?: string
    }
  ) {}
  public importContainers(): ByProjectKeyProductsImportContainersRequestBuilder {
    return new ByProjectKeyProductsImportContainersRequestBuilder({
      pathArgs: {
        ...this.args.pathArgs,
      },
      executeRequest: this.args.executeRequest,
      baseUri: this.args.baseUri,
    })
  }

  /**
   * @deprecated
   **/
  public importSinkKeyWithImportSinkKeyValue(childPathArgs: {
    importSinkKey: string
  }): ByProjectKeyProductsImportSinkKeyByImportSinkKeyRequestBuilder {
    return new ByProjectKeyProductsImportSinkKeyByImportSinkKeyRequestBuilder({
      pathArgs: {
        ...this.args.pathArgs,
        ...childPathArgs,
      },
      executeRequest: this.args.executeRequest,
      baseUri: this.args.baseUri,
    })
  }
}
