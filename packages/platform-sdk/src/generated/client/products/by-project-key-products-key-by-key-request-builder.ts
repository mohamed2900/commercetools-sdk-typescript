/**
 * Code generated by [commercetools RMF-Codegen](https://github.com/commercetools/rmf-codegen). DO NOT EDIT.
 * Please don't change this file manually but run `rmf-codegen generate raml_file_path -o output_path -t typescript_client` to update it.
 * For more information about the commercetools platform APIs, visit https://docs.commercetools.com/.
 */
import { Product, ProductUpdate } from '../../models/product'
import { executeRequest, QueryParam } from '../../shared/utils/common-types'
import { ApiRequest } from '../../shared/utils/requests-utils'
import { ByProjectKeyProductsKeyByKeyProductSelectionsRequestBuilder } from '../product-selections/by-project-key-products-key-by-key-product-selections-request-builder'
/**
 **/
export class ByProjectKeyProductsKeyByKeyRequestBuilder {
  constructor(
    protected readonly args: {
      pathArgs: {
        projectKey: string
        key: string
      }
      executeRequest: executeRequest
      baseUri?: string
    }
  ) {}
  public productSelections(): ByProjectKeyProductsKeyByKeyProductSelectionsRequestBuilder {
    return new ByProjectKeyProductsKeyByKeyProductSelectionsRequestBuilder({
      pathArgs: {
        ...this.args.pathArgs,
      },
      executeRequest: this.args.executeRequest,
      baseUri: this.args.baseUri,
    })
  }

  public get(methodArgs?: {
    queryArgs?: {
      priceCurrency?: string
      priceCountry?: string
      priceCustomerGroup?: string
      priceChannel?: string
      localeProjection?: string
      storeProjection?: string
      expand?: string | string[]
      [key: string]: QueryParam
    }
    headers?: {
      [key: string]: string | string[]
    }
  }): ApiRequest<Product> {
    return new ApiRequest<Product>(
      {
        baseUri: this.args.baseUri,
        method: 'GET',
        uriTemplate: '/{projectKey}/products/key={key}',
        pathVariables: this.args.pathArgs,
        headers: {
          ...methodArgs?.headers,
        },
        queryParams: methodArgs?.queryArgs,
      },
      this.args.executeRequest
    )
  }
  /**
   *	Check if a Product exists with a specified `key`. Responds with a `200 OK` status if the Product exists or `404 Not Found` otherwise.
   */
  public head(methodArgs?: {
    headers?: {
      [key: string]: string | string[]
    }
  }): ApiRequest<void> {
    return new ApiRequest<void>(
      {
        baseUri: this.args.baseUri,
        method: 'HEAD',
        uriTemplate: '/{projectKey}/products/key={key}',
        pathVariables: this.args.pathArgs,
        headers: {
          ...methodArgs?.headers,
        },
      },
      this.args.executeRequest
    )
  }
  public post(methodArgs: {
    queryArgs?: {
      priceCurrency?: string
      priceCountry?: string
      priceCustomerGroup?: string
      priceChannel?: string
      localeProjection?: string
      storeProjection?: string
      expand?: string | string[]
      [key: string]: QueryParam
    }
    body: ProductUpdate
    headers?: {
      [key: string]: string | string[]
    }
  }): ApiRequest<Product> {
    return new ApiRequest<Product>(
      {
        baseUri: this.args.baseUri,
        method: 'POST',
        uriTemplate: '/{projectKey}/products/key={key}',
        pathVariables: this.args.pathArgs,
        headers: {
          'Content-Type': 'application/json',
          ...methodArgs?.headers,
        },
        queryParams: methodArgs?.queryArgs,
        body: methodArgs?.body,
      },
      this.args.executeRequest
    )
  }
  /**
   *	Produces the [ProductDeletedMessage](/message-types#productdeletedmessage).
   */
  public delete(methodArgs: {
    queryArgs: {
      priceCurrency?: string
      priceCountry?: string
      priceCustomerGroup?: string
      priceChannel?: string
      localeProjection?: string
      storeProjection?: string
      version: number
      expand?: string | string[]
      [key: string]: QueryParam
    }
    headers?: {
      [key: string]: string | string[]
    }
  }): ApiRequest<Product> {
    return new ApiRequest<Product>(
      {
        baseUri: this.args.baseUri,
        method: 'DELETE',
        uriTemplate: '/{projectKey}/products/key={key}',
        pathVariables: this.args.pathArgs,
        headers: {
          ...methodArgs?.headers,
        },
        queryParams: methodArgs?.queryArgs,
      },
      this.args.executeRequest
    )
  }
}
