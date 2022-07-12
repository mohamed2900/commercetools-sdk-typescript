/**
 * Code generated by [commercetools RMF-Codegen](https://github.com/commercetools/rmf-codegen). DO NOT EDIT.
 * Please don't change this file manually but run `rmf-codegen generate raml_file_path -o output_path -t typescript_client` to update it.
 * For more information about the commercetools platform APIs, visit https://docs.commercetools.com/.
 */

import {
  CustomLineItem,
  DirectDiscount,
  InventoryMode,
  LineItem,
  RoundingMode,
  ShippingInfo,
  ShippingRateInput,
  TaxCalculationMode,
  TaxedPrice,
  TaxMode,
} from './cart'
import {
  Address,
  BaseResource,
  CreatedBy,
  LastModifiedBy,
  TypedMoney,
} from './common'
import { CustomerReference } from './customer'
import { CustomerGroupReference } from './customer-group'
import { PaymentInfo } from './order'
import { QuoteRequestReference } from './quote-request'
import {
  StagedQuoteReference,
  StagedQuoteResourceIdentifier,
} from './staged-quote'
import { StoreKeyReference } from './store'
import {
  CustomFields,
  CustomFieldsDraft,
  FieldContainer,
  TypeResourceIdentifier,
} from './type'

export interface Quote extends BaseResource {
  /**
   *	Unique identifier of the Quote.
   *
   *
   */
  readonly id: string
  /**
   *	Current version of the Quote.
   *
   *
   */
  readonly version: number
  /**
   *	User-defined unique identifier of the Quote.
   *
   *
   */
  readonly key?: string
  /**
   *	Date and time (UTC) the Quote was initially created.
   *
   *
   */
  readonly createdAt: string
  /**
   *	Date and time (UTC) the Quote was last updated.
   *
   *
   */
  readonly lastModifiedAt: string
  /**
   *	Present on resources created after 1 February 2019 except for [events not tracked](/client-logging#events-tracked).
   *
   *
   */
  readonly lastModifiedBy?: LastModifiedBy
  /**
   *	Present on resources created after 1 February 2019 except for [events not tracked](/client-logging#events-tracked).
   *
   *
   */
  readonly createdBy?: CreatedBy
  /**
   *	The Quote Request related to this Quote.
   *
   *
   */
  readonly quoteRequest: QuoteRequestReference
  /**
   *	The Staged Quote related to this Quote.
   *
   *
   */
  readonly stagedQuote: StagedQuoteReference
  /**
   *	The [Buyer](/../api/quotes-overview#buyer) who requested this Quote.
   *
   *
   */
  readonly customer?: CustomerReference
  /**
   *	Set automatically when `customer` is set and the Customer is a member of a Customer Group.
   *	Used for Product Variant price selection.
   *
   *
   */
  readonly customerGroup?: CustomerGroupReference
  /**
   *	Expiration date for the Quote.
   *
   *
   */
  readonly validTo?: string
  /**
   *	The text message included in the offer from the [Seller](/../api/quotes-overview#seller).
   *
   *
   */
  readonly sellerComment?: string
  /**
   *	The Store to which the [Buyer](/../api/quotes-overview#buyer) belongs.
   *
   *
   */
  readonly store?: StoreKeyReference
  /**
   *	The Line Items for which the Quote is requested.
   *
   *
   */
  readonly lineItems: LineItem[]
  /**
   *	The Custom Line Items for which the Quote is requested.
   *
   *
   */
  readonly customLineItems: CustomLineItem[]
  /**
   *	The sum of all `totalPrice` fields of the `lineItems` and `customLineItems`, as well as the `price` field of `shippingInfo` (if it exists).
   *	`totalPrice` may or may not include the taxes: it depends on the taxRate.includedInPrice property of each price.
   *
   *
   */
  readonly totalPrice: TypedMoney
  /**
   *	Not set until the shipping address is set.
   *	Will be set automatically in the `Platform` TaxMode.
   *	For the `External` tax mode it will be set  as soon as the external tax rates for all line items, custom line items, and shipping in the cart are set.
   *
   */
  readonly taxedPrice?: TaxedPrice
  /**
   *	Used to determine the eligible [ShippingMethods](ctp:api:type:ShippingMethod)
   *	and rates as well as the tax rate of the Line Items.
   *
   *
   */
  readonly shippingAddress?: Address
  /**
   *	The address used for invoicing.
   *
   *
   */
  readonly billingAddress?: Address
  /**
   *	The inventory mode of the Cart referenced in the [QuoteRequestDraft](ctp:api:type:QuoteRequestDraft).
   *
   *
   */
  readonly inventoryMode?: InventoryMode
  /**
   *	The tax mode of the Cart referenced in the [QuoteRequestDraft](ctp:api:type:QuoteRequestDraft).
   *
   *
   */
  readonly taxMode: TaxMode
  /**
   *	When calculating taxes for `taxedPrice`, the selected mode is used for rounding.
   *
   *
   */
  readonly taxRoundingMode: RoundingMode
  /**
   *	When calculating taxes for `taxedPrice`, the selected mode is used for calculating the price with `LineItemLevel` (horizontally) or `UnitPriceLevel` (vertically) calculation mode.
   *
   */
  readonly taxCalculationMode: TaxCalculationMode
  /**
   *	Used for Product Variant price selection.
   *
   *
   */
  readonly country?: string
  /**
   *	Set automatically once the [ShippingMethod](ctp:api:type:ShippingMethod) is set.
   *
   *
   */
  readonly shippingInfo?: ShippingInfo
  /**
   *	Log of payment transactions related to this quote.
   *
   *
   */
  readonly paymentInfo?: PaymentInfo
  /**
   *	Used to select a [ShippingRatePriceTier](ctp:api:type:ShippingRatePriceTier).
   *
   *
   */
  readonly shippingRateInput?: ShippingRateInput
  /**
   *	Contains addresses for carts with multiple shipping addresses.
   *	Line items reference these addresses under their `shippingDetails`.
   *	The addresses captured here are not used to determine eligible shipping methods or the applicable tax rate.
   *	Only the cart's `shippingAddress` is used for this.
   *
   *
   */
  readonly itemShippingAddresses?: Address[]
  /**
   *	Discounts only valid for this Quote, those cannot be associated to any other Cart or Order.
   *
   *
   */
  readonly directDiscounts?: DirectDiscount[]
  /**
   *	Custom Fields of this Quote.
   *
   *
   */
  readonly custom?: CustomFields
}
export interface QuoteDraft {
  /**
   *	The StagedQuote from which this Quote is created.
   *
   */
  readonly stagedQuote: StagedQuoteResourceIdentifier
  /**
   *	Current version of the StagedQuote.
   *
   *
   */
  readonly stagedQuoteVersion: number
  /**
   *	User-defined unique identifier for the Quote.
   *
   *
   */
  readonly key?: string
  /**
   *	[Custom Fields](/../api/projects/custom-fields) to be added to the Quote.
   *
   *	- If specified, the Custom Fields are merged with the Custom Fields on the referenced [StagedQuote](/../api/projects/staged-quotes#stagedquote) and added to the Quote.
   *	- If empty, the Custom Fields on the referenced [StagedQuote](/../api/projects/staged-quotes#stagedquote) are added to the Quote automatically.
   *
   *
   */
  readonly custom?: CustomFieldsDraft
}
/**
 *	[PagedQueryResult](/../api/general-concepts#pagedqueryresult) with results containing an array of [Quote](ctp:api:type:Quote).
 *
 */
export interface QuotePagedQueryResponse {
  /**
   *	Number of [results requested](/../api/general-concepts#limit).
   *
   *
   */
  readonly limit: number
  /**
   *	Number of [elements skipped](/../api/general-concepts#offset).
   *
   *
   */
  readonly offset: number
  /**
   *	Actual number of results returned.
   *
   *
   */
  readonly count: number
  /**
   *	Total number of results matching the query.
   *	This number is an estimation that is not [strongly consistent](/../api/general-concepts#strong-consistency).
   *	This field is returned by default.
   *	For improved performance, calculating this field can be deactivated by using the query parameter `withTotal=false`.
   *	When the results are filtered with a [Query Predicate](/../api/predicates/query), `total` is subject to a [limit](/../api/limits#queries).
   *
   *
   */
  readonly total?: number
  /**
   *	Quotes matching the query.
   *
   *
   */
  readonly results: Quote[]
}
/**
 *	[Reference](ctp:api:type:Reference) to a [Quote](ctp:api:type:Quote).
 *
 */
export interface QuoteReference {
  readonly typeId: 'quote'
  /**
   *	Unique ID of the referenced resource.
   *
   *
   */
  readonly id: string
  /**
   *	Contains the representation of the expanded Quote.
   *	Only present in responses to requests with [Reference Expansion](/../api/general-concepts#reference-expansion) for Quote.
   *
   *
   */
  readonly obj?: Quote
}
/**
 *	[ResourceIdentifier](ctp:api:type:ResourceIdentifier) to a [Quote](ctp:api:type:Quote).
 *
 */
export interface QuoteResourceIdentifier {
  readonly typeId: 'quote'
  /**
   *	Unique identifier of the referenced resource. Required if `key` is absent.
   *
   *
   */
  readonly id?: string
  /**
   *	User-defined unique identifier of the referenced resource. Required if `id` is absent.
   *
   *
   */
  readonly key?: string
}
/**
 *	Predefined states tracking the status of the Quote.
 *
 */
export type QuoteState =
  | 'Accepted'
  | 'Declined'
  | 'Failed'
  | 'Pending'
  | 'Withdrawn'
export interface QuoteUpdate {
  /**
   *
   */
  readonly version: number
  /**
   *
   */
  readonly actions: QuoteUpdateAction[]
}
export type QuoteUpdateAction =
  | QuoteChangeQuoteStateAction
  | QuoteSetCustomFieldAction
  | QuoteSetCustomTypeAction
export interface QuoteChangeQuoteStateAction {
  readonly action: 'changeQuoteState'
  /**
   *	The new quote state to be set for the Quote.
   *
   */
  readonly quoteState: QuoteState
}
export interface QuoteSetCustomFieldAction {
  readonly action: 'setCustomField'
  /**
   *	Name of the [Custom Field](/../api/projects/custom-fields).
   *
   *
   */
  readonly name: string
  /**
   *	If `value` is absent or `null`, this field will be removed if it exists.
   *	Trying to remove a field that does not exist will fail with an [InvalidOperation](/../api/errors#general-400-invalid-operation) error.
   *	If `value` is provided, it is set for the field defined by `name`.
   *
   *
   */
  readonly value?: any
}
export interface QuoteSetCustomTypeAction {
  readonly action: 'setCustomType'
  /**
   *	Defines the [Type](ctp:api:type:Type) that extends the Quote with [Custom Fields](/../api/projects/custom-fields).
   *	If absent, any existing Type and Custom Fields are removed from the Quote.
   *
   *
   */
  readonly type?: TypeResourceIdentifier
  /**
   *	Sets the [Custom Fields](/../api/projects/custom-fields) fields for the Quote.
   *
   *
   */
  readonly fields?: FieldContainer
}
