/**
 * Code generated by [commercetools RMF-Codegen](https://github.com/commercetools/rmf-codegen). DO NOT EDIT.
 * Please don't change this file manually but run `rmf-codegen generate raml_file_path -o output_path -t typescript_client` to update it.
 * For more information about the commercetools platform APIs, visit https://docs.commercetools.com/.
 */

import { ChannelReference, ChannelResourceIdentifier } from './channel'
import {
  BaseResource,
  CentPrecisionMoney,
  CreatedBy,
  LastModifiedBy,
  LocalizedString,
  Money,
  Reference,
  TypedMoney,
  TypedMoneyDraft,
} from './common'
import { ProductReference, ProductResourceIdentifier } from './product'
import { StoreKeyReference, StoreResourceIdentifier } from './store'
import {
  CustomFields,
  CustomFieldsDraft,
  FieldContainer,
  TypeResourceIdentifier,
} from './type'

export interface CartDiscount extends BaseResource {
  /**
   *	Unique identifier of the CartDiscount.
   *
   */
  readonly id: string
  /**
   *	Current version of the CartDiscount.
   *
   *
   */
  readonly version: number
  /**
   *	Date and time (UTC) for the CartDiscount was initially created.
   *
   *
   */
  readonly createdAt: string
  /**
   *	Date and time (UTC) for the CartDiscount was last updated.
   *
   *
   */
  readonly lastModifiedAt: string
  /**
   *	Present on resources updated after 1 February 2019 except for [events not tracked](/../api/general-concepts#events-tracked).
   *
   *
   */
  readonly lastModifiedBy?: LastModifiedBy
  /**
   *	Present on resources created after 1 February 2019 except for [events not tracked](/../api/general-concepts#events-tracked).
   *
   *
   */
  readonly createdBy?: CreatedBy
  /**
   *	Name of the CartDiscount.
   *
   *
   */
  readonly name: LocalizedString
  /**
   *	User-defined unique identifier of the CartDiscount.
   *
   *
   */
  readonly key?: string
  /**
   *	Description of the CartDiscount.
   *
   *
   */
  readonly description?: LocalizedString
  /**
   *	Effect of the CartDiscount on the `target`.
   *
   *
   */
  readonly value: CartDiscountValue
  /**
   *	Valid [Cart Predicate](/../api/projects/predicates#cart-predicates).
   *
   *
   */
  readonly cartPredicate: string
  /**
   *	Segment of the Cart that is discounted.
   *
   *	Empty, if the `value` is `giftLineItem`.
   *
   *
   */
  readonly target?: CartDiscountTarget
  /**
   *	Value between `0` and `1`.
   *	All matching CartDiscounts are applied to a Cart in the order defined by this field.
   *	A Discount with a higher sortOrder is prioritized.
   *	The sort order is unambiguous among all CartDiscounts.
   *
   *
   */
  readonly sortOrder: string
  /**
   *	- If a value exists, the Cart Discount applies on [Carts](ctp:api:type:Cart) having a [Store](ctp:api:type:Store) matching any Store defined for this field.
   *	- If empty, the Cart Discount applies on all [Carts](ctp:api:type:Cart), irrespective of a Store.
   *
   *
   */
  readonly stores: StoreKeyReference[]
  /**
   *	Indicates if the CartDiscount is active and can be applied to the Cart.
   *
   *
   */
  readonly isActive: boolean
  /**
   *	Date and time (UTC) from which the Discount is effective.
   *
   *
   */
  readonly validFrom?: string
  /**
   *	Date and time (UTC) until which the Discount is effective.
   *
   *
   */
  readonly validUntil?: string
  /**
   *	Indicates if the Discount is used in connection with a [DiscountCode](ctp:api:type:DiscountCode).
   *
   *
   */
  readonly requiresDiscountCode: boolean
  /**
   *	References of all resources that are addressed in the predicate.
   *	The API generates this array from the predicate.
   *
   *
   */
  readonly references: Reference[]
  /**
   *	Indicates whether the application of the CartDiscount causes other discounts to be ignored.
   *
   *
   */
  readonly stackingMode: StackingMode
  /**
   *	Custom Fields of the CartDiscount.
   *
   *
   */
  readonly custom?: CustomFields
}
export interface CartDiscountDraft {
  /**
   *	Name of the CartDiscount.
   *
   *
   */
  readonly name: LocalizedString
  /**
   *	User-defined unique identifier for the CartDiscount.
   *
   *
   */
  readonly key?: string
  /**
   *	Description of the CartDiscount.
   *
   *
   */
  readonly description?: LocalizedString
  /**
   *	Effect of the CartDiscount on the `target`.
   *
   *
   */
  readonly value: CartDiscountValueDraft
  /**
   *	Valid [Cart Predicate](/../api/projects/predicates#cart-predicates).
   *
   *
   */
  readonly cartPredicate: string
  /**
   *	Segment of the Cart that will be discounted.
   *
   *	Must not be set if the `value` is `giftLineItem`.
   *
   *
   */
  readonly target?: CartDiscountTarget
  /**
   *	Value between `0` and `1`.
   *	A Discount with a higher sortOrder is prioritized.
   *	The sort order must be unambiguous among all CartDiscounts.
   *
   *
   */
  readonly sortOrder: string
  /**
   *	- If defined, the Cart Discount applies on [Carts](ctp:api:type:Cart) having a [Store](ctp:api:type:Store) matching any Store defined for this field.
   *	- If not defined, the Cart Discount applies on all Carts, irrespective of a Store.
   *
   *	If the referenced Stores exceed the [limit](/../api/limits#cart-discounts-stores), a [MaxStoreReferencesReached](ctp:api:type:MaxStoreReferencesReachedError) error is returned.
   *
   *	If the referenced Stores exceed the [limit](/../api/limits#cart-discounts) for Cart Discounts that do not require a Discount Code, a [StoreCartDiscountsLimitReached](ctp:api:type:StoreCartDiscountsLimitReachedError) error is returned.
   *
   *
   */
  readonly stores?: StoreResourceIdentifier[]
  /**
   *	Only active Discounts can be applied to the Cart.
   *	If the [limit](/../api/limits#cart-discounts) for active Cart Discounts is reached, a [MaxCartDiscountsReached](ctp:api:type:MaxCartDiscountsReachedError) error is returned.
   *
   *
   */
  readonly isActive?: boolean
  /**
   *	Date and time (UTC) from which the Discount is effective.
   *
   *
   */
  readonly validFrom?: string
  /**
   *	Date and time (UTC) until which the Discount is effective.
   *
   *
   */
  readonly validUntil?: string
  /**
   *	States whether the Discount can only be used in a connection with a [DiscountCode](ctp:api:type:DiscountCode).
   *
   *
   */
  readonly requiresDiscountCode?: boolean
  /**
   *	Specifies whether the application of this discount causes the following discounts to be ignored.
   *
   *
   */
  readonly stackingMode?: StackingMode
  /**
   *	Custom Fields of the CartDiscount.
   *
   *
   */
  readonly custom?: CustomFieldsDraft
}
/**
 *	[PagedQueryResult](/../api/general-concepts#pagedqueryresult) with `results` containing an array of [CartDiscount](ctp:api:type:CartDiscount).
 *
 */
export interface CartDiscountPagedQueryResponse {
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
   *	[CartDiscounts](ctp:api:type:CartDiscount) matching the query.
   *
   *
   */
  readonly results: CartDiscount[]
}
/**
 *	[Reference](ctp:api:type:Reference) to a [CartDiscount](ctp:api:type:CartDiscount).
 *
 */
export interface CartDiscountReference {
  readonly typeId: 'cart-discount'
  /**
   *	Unique identifier of the referenced [CartDiscount](ctp:api:type:CartDiscount).
   *
   *
   */
  readonly id: string
  /**
   *	Contains the representation of the expanded CartDiscount. Only present in responses to requests with [Reference Expansion](/../api/general-concepts#reference-expansion) for CartDiscounts.
   *
   *
   */
  readonly obj?: CartDiscount
}
/**
 *	[ResourceIdentifier](ctp:api:type:ResourceIdentifier) to a [CartDiscount](ctp:api:type:CartDiscount). Either `id` or `key` is required. If both are set, an [InvalidJsonInput](/../api/errors#invalidjsoninput) error is returned.
 *
 */
export interface CartDiscountResourceIdentifier {
  readonly typeId: 'cart-discount'
  /**
   *	Unique identifier of the referenced [CartDiscount](ctp:api:type:CartDiscount). Required if `key` is absent.
   *
   *
   */
  readonly id?: string
  /**
   *	User-defined unique identifier of the referenced [CartDiscount](ctp:api:type:CartDiscount). Required if `id` is absent.
   *
   *
   */
  readonly key?: string
}
export type CartDiscountTarget =
  | CartDiscountCustomLineItemsTarget
  | CartDiscountLineItemsTarget
  | CartDiscountShippingCostTarget
  | CartDiscountTotalPriceTarget
  | MultiBuyCustomLineItemsTarget
  | MultiBuyLineItemsTarget
/**
 *	Discount is applied to [CustomLineItems](ctp:api:type:CustomLineItem) matching the `predicate`.
 *
 */
export interface CartDiscountCustomLineItemsTarget {
  readonly type: 'customLineItems'
  /**
   *	Valid [CustomLineItem target predicate](/../api/projects/predicates#customlineitem-field-identifiers).
   *
   *
   */
  readonly predicate: string
}
/**
 *	Discount is applied to [LineItems](ctp:api:type:LineItem) matching the `predicate`.
 *
 */
export interface CartDiscountLineItemsTarget {
  readonly type: 'lineItems'
  /**
   *	Valid [LineItem target predicate](/../api/projects/predicates#lineitem-field-identifiers).
   *
   *
   */
  readonly predicate: string
}
/**
 *	Discount is applied to the shipping costs of the [Cart](ctp:api:type:Cart).
 *
 */
export interface CartDiscountShippingCostTarget {
  readonly type: 'shipping'
}
/**
 *	Discount is applied to the total price of the [Cart](ctp:api:type:Cart).
 *
 */
export interface CartDiscountTotalPriceTarget {
  readonly type: 'totalPrice'
}
export interface CartDiscountUpdate {
  /**
   *	Expected version of the CartDiscount on which the changes should be applied.
   *	If the expected version does not match the actual version, a [ConcurrentModification](ctp:api:type:ConcurrentModificationError) error will be returned.
   *
   *
   */
  readonly version: number
  /**
   *	Update actions to be performed on the CartDiscount.
   *
   *
   */
  readonly actions: CartDiscountUpdateAction[]
}
export type CartDiscountUpdateAction =
  | CartDiscountAddStoreAction
  | CartDiscountChangeCartPredicateAction
  | CartDiscountChangeIsActiveAction
  | CartDiscountChangeNameAction
  | CartDiscountChangeRequiresDiscountCodeAction
  | CartDiscountChangeSortOrderAction
  | CartDiscountChangeStackingModeAction
  | CartDiscountChangeTargetAction
  | CartDiscountChangeValueAction
  | CartDiscountRemoveStoreAction
  | CartDiscountSetCustomFieldAction
  | CartDiscountSetCustomTypeAction
  | CartDiscountSetDescriptionAction
  | CartDiscountSetKeyAction
  | CartDiscountSetStoresAction
  | CartDiscountSetValidFromAction
  | CartDiscountSetValidFromAndUntilAction
  | CartDiscountSetValidUntilAction
export type CartDiscountValue =
  | CartDiscountValueAbsolute
  | CartDiscountValueFixed
  | CartDiscountValueGiftLineItem
  | CartDiscountValueRelative
/**
 *	Discounts the [CartDiscountTarget](ctp:api:type:CartDiscountTarget) by an absolute amount (not allowed for [MultiBuyLineItemsTarget](ctp:api:type:MultiBuyLineItemsTarget) and [MultiBuyCustomLineItemsTarget](ctp:api:type:MultiBuyCustomLineItemsTarget)).
 *
 */
export interface CartDiscountValueAbsolute {
  readonly type: 'absolute'
  /**
   *	Cent precision money values in different currencies.
   *
   *
   */
  readonly money: CentPrecisionMoney[]
}
export type CartDiscountValueDraft =
  | CartDiscountValueAbsoluteDraft
  | CartDiscountValueFixedDraft
  | CartDiscountValueGiftLineItemDraft
  | CartDiscountValueRelativeDraft
export interface CartDiscountValueAbsoluteDraft {
  readonly type: 'absolute'
  /**
   *	Money values in different currencies.
   *	An absolute Cart Discount will match a price only if the array contains a value with the same currency. For example, if it contains 10€ and 15$, the matching € price will be decreased by 10€ and the matching $ price will be decreased by 15$. If the array has multiple values of the same currency, the API returns an [InvalidOperation](ctp:api:type:InvalidOperationError) error.
   *
   *	If the array is empty, the discount does not apply.
   *
   *
   */
  readonly money: Money[]
}
/**
 *	Sets the [DiscountedLineItemPrice](ctp:api:type:DiscountedLineItemPrice) of the [CartDiscountLineItemsTarget](ctp:api:type:CartDiscountLineItemsTarget) or [CartDiscountCustomLineItemsTarget](ctp:api:type:CartDiscountCustomLineItemsTarget) to the value specified in the `money` field, if it is lower than the current Line Item price for the same currency. If the Line Item price is already discounted to a price equal to or lower than the respective price in the `money` field, this Discount is not applied. If the `quantity` of the Line Item eligible for the Discount is greater than `1`, the fixed price discount is only applied to the Line Item portion for which the `money` value is lesser than their current price.
 *
 */
export interface CartDiscountValueFixed {
  readonly type: 'fixed'
  /**
   *	Money values in [cent precision](ctp:api:type:CentPrecisionMoney) or [high precision](ctp:api:type:HighPrecisionMoney) of different currencies.
   *
   *
   */
  readonly money: TypedMoney[]
}
/**
 *	Sets the [DiscountedLineItemPrice](ctp:api:type:DiscountedLineItemPrice) of the [CartDiscountLineItemsTarget](ctp:api:type:CartDiscountLineItemsTarget) or [CartDiscountCustomLineItemsTarget](ctp:api:type:CartDiscountCustomLineItemsTarget) to the value specified in the `money` field, if it is lower than the current Line Item price for the same currency. If the Line Item price is already discounted to a price equal to or lower than the respective price in the `money` field, this Discount is not applied.
 *
 */
export interface CartDiscountValueFixedDraft {
  readonly type: 'fixed'
  /**
   *	Money values provided either in [cent precision](ctp:api:type:Money) or [high precision](ctp:api:type:HighPrecisionMoneyDraft) for different currencies.
   *	A fixed Cart Discount will match a price only if the array contains a value with the same currency. For example, if it contains 10€ and 15$, the matching € price will be discounted by 10€ and the matching $ price will be discounted to 15$. If the array has multiple values of the same currency, the API returns an [InvalidOperation](ctp:api:type:InvalidOperationError) error.
   *
   *	If the array is empty, the discount does not apply.
   *
   *
   */
  readonly money: TypedMoneyDraft[]
}
export interface CartDiscountValueGiftLineItem {
  readonly type: 'giftLineItem'
  /**
   *	Reference to a Product.
   *
   *
   */
  readonly product: ProductReference
  /**
   *	[ProductVariant](ctp:api:type:ProductVariant) of the Product.
   *
   *
   */
  readonly variantId: number
  /**
   *	Channel must have the [ChannelRoleEnum](ctp:api:type:ChannelRoleEnum) `InventorySupply`.
   *
   *
   */
  readonly supplyChannel?: ChannelReference
  /**
   *	Channel must have the [ChannelRoleEnum](ctp:api:type:ChannelRoleEnum) `ProductDistribution`.
   *
   *
   */
  readonly distributionChannel?: ChannelReference
}
/**
 *	Can only be used in a [CartDiscountDraft](ctp:api:type:CartDiscountDraft) with no `target` specified.
 *	Hence, this type can not be used in the [Change Value](ctp:api:type:CartDiscountChangeValueAction) update action.
 *
 */
export interface CartDiscountValueGiftLineItemDraft {
  readonly type: 'giftLineItem'
  /**
   *	ResourceIdentifier of a Product.
   *
   *
   */
  readonly product: ProductResourceIdentifier
  /**
   *	[ProductVariant](ctp:api:type:ProductVariant) of the Product.
   *
   *
   */
  readonly variantId: number
  /**
   *	Channel must have the role `InventorySupply`.
   *
   *
   */
  readonly supplyChannel?: ChannelResourceIdentifier
  /**
   *	Channel must have the role `ProductDistribution`.
   *
   *
   */
  readonly distributionChannel?: ChannelResourceIdentifier
}
/**
 *	Discounts the [CartDiscountTarget](ctp:api:type:CartDiscountTarget) relative to its price.
 *
 */
export interface CartDiscountValueRelative {
  readonly type: 'relative'
  /**
   *	Fraction (per ten thousand) the price is reduced by. For example, `1000` will result in a 10% price reduction.
   *
   *
   */
  readonly permyriad: number
}
export interface CartDiscountValueRelativeDraft {
  readonly type: 'relative'
  /**
   *	Fraction (per ten thousand) the price is reduced by. For example, `1000` will result in a 10% price reduction.
   *
   *
   */
  readonly permyriad: number
}
/**
 *	This Discount target is similar to `MultiBuyLineItems`, but is applied on Custom Line Items instead of Line Items.
 *
 */
export interface MultiBuyCustomLineItemsTarget {
  readonly type: 'multiBuyCustomLineItems'
  /**
   *	Valid [CustomLineItems target predicate](/../api/projects/predicates#customlineitem-field-identifiers). The Discount will be applied to Custom Line Items that are matched by the predicate.
   *
   *
   */
  readonly predicate: string
  /**
   *	Number of Custom Line Items to be present in order to trigger an application of this Discount.
   *
   *
   */
  readonly triggerQuantity: number
  /**
   *	Number of Custom Line Items that are discounted per application of this Discount.
   *	It must be less than or equal to the `triggerQuantity`.
   *
   *
   */
  readonly discountedQuantity: number
  /**
   *	Maximum number of times this Discount can be applied.
   *	Do not set if the Discount should be applied an unlimited number of times.
   *
   *
   */
  readonly maxOccurrence?: number
  /**
   *	Discounts particular Line Items only according to the SelectionMode.
   *
   *
   */
  readonly selectionMode: SelectionMode
}
export interface MultiBuyLineItemsTarget {
  readonly type: 'multiBuyLineItems'
  /**
   *	Valid [LineItem target predicate](/../api/projects/predicates#lineitem-field-identifiers). The Discount will be applied to Line Items that are matched by the predicate.
   *
   *
   */
  readonly predicate: string
  /**
   *	Number of Line Items to be present in order to trigger an application of this Discount.
   *
   *
   */
  readonly triggerQuantity: number
  /**
   *	Number of Line Items that are discounted per application of this Discount.
   *	It must be less than or equal to the `triggerQuantity`.
   *
   *
   */
  readonly discountedQuantity: number
  /**
   *	Maximum number of times this Discount can be applied.
   *	Do not set if the Discount should be applied an unlimited number of times.
   *
   *
   */
  readonly maxOccurrence?: number
  /**
   *	Discounts particular Line Items only according to the SelectionMode.
   *
   *
   */
  readonly selectionMode: SelectionMode
}
/**
 *	Defines which matching items are to be discounted.
 *
 */
export type SelectionMode = 'Cheapest' | 'MostExpensive' | string
/**
 *	Describes how the Cart Discount interacts with other Discounts.
 *
 */
export type StackingMode = 'Stacking' | 'StopAfterThisDiscount' | string
/**
 *	If a referenced Store does not exist, a [ReferencedResourceNotFound](ctp:api:type:ReferencedResourceNotFoundError) error is returned.
 *
 *	This action generates a [CartDiscountStoreAdded](ctp:api:type:CartDiscountStoreAddedMessage) Message.
 *
 */
export interface CartDiscountAddStoreAction {
  readonly action: 'addStore'
  /**
   *	[Store](ctp:api:type:Store) to add.
   *
   *	A failed update can return the following errors:
   *
   *	- If the referenced Stores exceed the [limit](/../api/limits#cart-discounts-stores), a [MaxStoreReferencesReached](ctp:api:type:MaxStoreReferencesReachedError) error is returned.
   *	- If the referenced Stores exceed the [limit](/../api/limits#cart-discounts) for Cart Discounts that do not require a Discount Code, a [StoreCartDiscountsLimitReached](ctp:api:type:StoreCartDiscountsLimitReachedError) error is returned.
   *
   *
   */
  readonly store: StoreResourceIdentifier
}
export interface CartDiscountChangeCartPredicateAction {
  readonly action: 'changeCartPredicate'
  /**
   *	New value to set.
   *
   *
   */
  readonly cartPredicate: string
}
export interface CartDiscountChangeIsActiveAction {
  readonly action: 'changeIsActive'
  /**
   *	New value to set.
   *	If set to `true`, the Discount will be applied to the Cart.
   *
   *	If the limit for active Cart Discounts is reached, a [MaxCartDiscountsReached](ctp:api:type:MaxCartDiscountsReachedError) error is returned.
   *
   *
   */
  readonly isActive: boolean
}
export interface CartDiscountChangeNameAction {
  readonly action: 'changeName'
  /**
   *	New value to set.
   *
   *
   */
  readonly name: LocalizedString
}
export interface CartDiscountChangeRequiresDiscountCodeAction {
  readonly action: 'changeRequiresDiscountCode'
  /**
   *	New value to set.
   *	If set to `true`, the Discount can only be used in connection with a [DiscountCode](ctp:api:type:DiscountCode).
   *
   *
   */
  readonly requiresDiscountCode: boolean
}
export interface CartDiscountChangeSortOrderAction {
  readonly action: 'changeSortOrder'
  /**
   *	New value to set (between `0` and `1`).
   *	A Discount with a higher sortOrder is prioritized.
   *
   *
   */
  readonly sortOrder: string
}
export interface CartDiscountChangeStackingModeAction {
  readonly action: 'changeStackingMode'
  /**
   *	New value to set.
   *
   *
   */
  readonly stackingMode: StackingMode
}
export interface CartDiscountChangeTargetAction {
  readonly action: 'changeTarget'
  /**
   *	New value to set.
   *
   *
   */
  readonly target: CartDiscountTarget
}
/**
 *	Changes the [CartDiscountValue](ctp:api:type:CartDiscountValue) for [relative](ctp:api:type:CartDiscountValueRelative), [absolute](ctp:api:type:CartDiscountValueAbsolute) and [fixed price](ctp:api:type:CartDiscountValueFixed) CartDiscounts.
 *	Changing to [Gift Line Item](ctp:api:type:CartDiscountValueGiftLineItem) is not supported.
 *
 */
export interface CartDiscountChangeValueAction {
  readonly action: 'changeValue'
  /**
   *	New value to set.
   *	When trying to set a [CartDiscountValueGiftLineItemDraft](ctp:api:type:CartDiscountValueGiftLineItemDraft) an [InvalidInput](ctp:api:type:InvalidInputError) error is returned.
   *
   *
   */
  readonly value: CartDiscountValueDraft
}
/**
 *	If a referenced Store does not exist, a [ReferencedResourceNotFound](ctp:api:type:ReferencedResourceNotFoundError) error is returned.
 *
 *	This action generates a [CartDiscountStoreRemoved](ctp:api:type:CartDiscountStoreRemovedMessage) Message.
 *
 */
export interface CartDiscountRemoveStoreAction {
  readonly action: 'removeStore'
  /**
   *	[Store](ctp:api:type:Store) to remove.
   *
   *
   */
  readonly store: StoreResourceIdentifier
}
export interface CartDiscountSetCustomFieldAction {
  readonly action: 'setCustomField'
  /**
   *	Name of the [Custom Field](/../api/projects/custom-fields).
   *
   *
   */
  readonly name: string
  /**
   *	If `value` is absent or `null`, this field will be removed if it exists.
   *	Removing a field that does not exist returns an [InvalidOperation](ctp:api:type:InvalidOperationError) error.
   *	If `value` is provided, it is set for the field defined by `name`.
   *
   *
   */
  readonly value?: any
}
export interface CartDiscountSetCustomTypeAction {
  readonly action: 'setCustomType'
  /**
   *	Defines the [Type](ctp:api:type:Type) that extends the CartDiscount with [Custom Fields](/../api/projects/custom-fields).
   *	If absent, any existing Type and Custom Fields are removed from the CartDiscount.
   *
   *
   */
  readonly type?: TypeResourceIdentifier
  /**
   *	Sets the [Custom Fields](/../api/projects/custom-fields) fields for the CartDiscount.
   *
   *
   */
  readonly fields?: FieldContainer
}
export interface CartDiscountSetDescriptionAction {
  readonly action: 'setDescription'
  /**
   *	Value to set. If empty, any existing value will be removed.
   *
   *
   */
  readonly description?: LocalizedString
}
export interface CartDiscountSetKeyAction {
  readonly action: 'setKey'
  /**
   *	Value to set. If empty, any existing value will be removed.
   *
   *
   */
  readonly key?: string
}
/**
 *	If a referenced Store does not exist, a [ReferencedResourceNotFound](ctp:api:type:ReferencedResourceNotFoundError) error is returned.
 *
 *	This action generates a [CartDiscountStoresSet](ctp:api:type:CartDiscountStoresSetMessage) Message.
 *
 */
export interface CartDiscountSetStoresAction {
  readonly action: 'setStores'
  /**
   *	[Stores](ctp:api:type:Store) to set.
   *	Overrides the current list of Stores.
   *	If empty, any existing values will be removed.
   *
   *	A failed update can return the following errors:
   *
   *	- If the referenced Stores exceed the [limit](/../api/limits#cart-discounts-stores), a [MaxStoreReferencesReached](ctp:api:type:MaxStoreReferencesReachedError) error is returned.
   *	- If the referenced Stores exceed the [limit](/../api/limits#cart-discounts) for Cart Discounts that do not require a Discount Code, a [StoreCartDiscountsLimitReached](ctp:api:type:StoreCartDiscountsLimitReachedError) error is returned.
   *
   *
   */
  readonly stores?: StoreResourceIdentifier[]
}
export interface CartDiscountSetValidFromAction {
  readonly action: 'setValidFrom'
  /**
   *	Value to set.
   *	If empty, any existing value will be removed.
   *
   *
   */
  readonly validFrom?: string
}
export interface CartDiscountSetValidFromAndUntilAction {
  readonly action: 'setValidFromAndUntil'
  /**
   *	Value to set.
   *	If empty, any existing value will be removed.
   *
   *
   */
  readonly validFrom?: string
  /**
   *	Value to set.
   *	If empty, any existing value will be removed.
   *
   *
   */
  readonly validUntil?: string
}
export interface CartDiscountSetValidUntilAction {
  readonly action: 'setValidUntil'
  /**
   *	Value to set.
   *	If empty, any existing value will be removed.
   *
   *
   */
  readonly validUntil?: string
}
