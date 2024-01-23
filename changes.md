**Api changes**

<details>
<summary>Added Method(s)</summary>

- added method `apiRoot.withProjectKey().products().search().post()`
- added method `apiRoot.withProjectKey().products().search().head()`
</details>

<details>
<summary>Removed Type(s)</summary>

- :warning: removed type `NotEnabledError`
- :warning: removed type `GraphQLNotEnabledError`
</details>

<details>
<summary>Added Type(s)</summary>

- added type `ApprovalFlowSetCustomFieldAction`
- added type `ApprovalFlowSetCustomTypeAction`
- added type `CartDiscountCreatedMessage`
- added type `CartDiscountDeletedMessage`
- added type `CartDiscountStoreAddedMessage`
- added type `CartDiscountStoreRemovedMessage`
- added type `CartDiscountStoresSetMessage`
- added type `CartDiscountCreatedMessagePayload`
- added type `CartDiscountDeletedMessagePayload`
- added type `CartDiscountStoreAddedMessagePayload`
- added type `CartDiscountStoreRemovedMessagePayload`
- added type `CartDiscountStoresSetMessagePayload`
- added type `ProductPagedSearchResponse`
- added type `ProductSearchAndExpression`
- added type `ProductSearchAnyValue`
- added type `ProductSearchAttributeType`
- added type `ProductSearchCompoundExpression`
- added type `ProductSearchDateRangeExpression`
- added type `ProductSearchDateRangeValue`
- added type `ProductSearchDateTimeRangeExpression`
- added type `ProductSearchDateTimeRangeValue`
- added type `ProductSearchErrorResponse`
- added type `ProductSearchExactExpression`
- added type `ProductSearchExistsExpression`
- added type `ProductSearchExistsValue`
- added type `ProductSearchFilterExpression`
- added type `ProductSearchFullTextExpression`
- added type `ProductSearchFullTextValue`
- added type `ProductSearchHit`
- added type `ProductSearchLongRangeExpression`
- added type `ProductSearchLongRangeValue`
- added type `ProductSearchMatchType`
- added type `ProductSearchMatchingVariant`
- added type `ProductSearchNotExpression`
- added type `ProductSearchNumberRangeExpression`
- added type `ProductSearchNumberRangeValue`
- added type `ProductSearchOrExpression`
- added type `ProductSearchPrefixExpression`
- added type `ProductSearchProjectionParams`
- added type `ProductSearchQuery`
- added type `ProductSearchQueryExpression`
- added type `ProductSearchQueryExpressionValue`
- added type `ProductSearchRequest`
- added type `ProductSearchSortMode`
- added type `ProductSearchSortOrder`
- added type `ProductSearchSorting`
- added type `ProductSearchSuggestionCompletionExpression`
- added type `ProductSearchSuggestionCompletionExpressionValue`
- added type `ProductSearchSuggestionExpression`
- added type `ProductSearchSuggestionExpressionValue`
- added type `ProductSearchTimeRangeExpression`
- added type `ProductSearchTimeRangeValue`
- added type `ProductSearchWildCardExpression`
- added type `ProductSearchFacetBucketResult`
- added type `ProductSearchFacetCountExpression`
- added type `ProductSearchFacetCountValue`
- added type `ProductSearchFacetDistinctBucketSortBy`
- added type `ProductSearchFacetDistinctBucketSortExpression`
- added type `ProductSearchFacetDistinctExpression`
- added type `ProductSearchFacetDistinctStartsWith`
- added type `ProductSearchFacetDistinctValue`
- added type `ProductSearchFacetEnumCount`
- added type `ProductSearchFacetEnumScope`
- added type `ProductSearchFacetExpression`
- added type `ProductSearchFacetRangesExpression`
- added type `ProductSearchFacetRangesFacetRange`
- added type `ProductSearchFacetRangesValue`
- added type `ProductSearchFacetResult`
- added type `ProductSearchFacetResultBucket`
- added type `ProductSearchFacetResultCount`
- added type `ProductSearchFacetResultExpression`
- added type `ProductSearchFacetScope`
- added type `ProductSearchStatus`
- added type `ProjectChangeProductSearchStatusAction`
</details>

<details>
<summary>Changed MethodResponseBody(s)</summary>

- :warning: changed response body for `200: application/json` of method `get /{projectKey}/in-store/key={storeKey}/cart-discounts` from type `CartDiscount` to `CartDiscountPagedQueryResponse`
</details>

<details>
<summary>Added Enum(s)</summary>

- added enum `associate-role` to type `AttributeReferenceTypeId`
- added enum `business-unit` to type `AttributeReferenceTypeId`
- added enum `cart-discount` to type `AttributeReferenceTypeId`
- added enum `approval-flow` to type `CustomFieldReferenceValue`
- added enum `approval-flow` to type `ResourceTypeId`
</details>

<details>
<summary>Added QueryParameter(s)</summary>

- added query parameter `expand` to method `get /{projectKey}/in-store/key={storeKey}/cart-discounts`
- added query parameter `sort` to method `get /{projectKey}/in-store/key={storeKey}/cart-discounts`
- added query parameter `limit` to method `get /{projectKey}/in-store/key={storeKey}/cart-discounts`
- added query parameter `offset` to method `get /{projectKey}/in-store/key={storeKey}/cart-discounts`
- added query parameter `withTotal` to method `get /{projectKey}/in-store/key={storeKey}/cart-discounts`
- added query parameter `where` to method `get /{projectKey}/in-store/key={storeKey}/cart-discounts`
- added query parameter `/^var[.][a-zA-Z0-9]+$/` to method `get /{projectKey}/in-store/key={storeKey}/cart-discounts`
- added query parameter `expand` to method `post /{projectKey}/in-store/key={storeKey}/cart-discounts`
</details>

<details>
<summary>Added Property(s)</summary>

- added property `custom` to type `ApprovalFlow`
- added property `productsNew` to type `SearchIndexingConfiguration`
</details>

<details>
<summary>Added Resource(s)</summary>

- added resource `/{projectKey}/products/search`
</details>

**History changes**

<details>
<summary>Removed Type(s)</summary>

- :warning: removed type `ChannelRole`
- :warning: removed type `StateRole`
- :warning: removed type `StateType`
</details>

<details>
<summary>Added Type(s)</summary>

- added type `AttributeLocalizedEnumValue`
- added type `AttributePlainEnumValue`
- added type `ChannelRoleEnum`
- added type `StateRoleEnum`
- added type `StateTypeEnum`
</details>

<details>
<summary>Removed Property(s)</summary>

- :warning: removed property `previousValue` from type `AddAddressChange`
- :warning: removed property `previousValue` from type `AddLocationChange`
- :warning: removed property `nextValue` from type `RemoveLocationChange`
- :warning: removed property `nextValue` from type `RemoveTaxRateChange`
</details>

<details>
<summary>Changed Property(s)</summary>

- :warning: changed property `previousValue` of type `AddChannelRolesChange` from type `ChannelRole[]` to `ChannelRoleEnum[]`
- :warning: changed property `nextValue` of type `AddChannelRolesChange` from type `ChannelRole[]` to `ChannelRoleEnum[]`
- :warning: changed property `nextValue` of type `AddLocalizedEnumValueChange` from type `LocalizedEnumValue` to `AttributeLocalizedEnumValue`
- :warning: changed property `nextValue` of type `AddPlainEnumValueChange` from type `EnumValue` to `AttributePlainEnumValue`
- :warning: changed property `previousValue` of type `AddStateRolesChange` from type `StateRole[]` to `StateRoleEnum[]`
- :warning: changed property `nextValue` of type `AddStateRolesChange` from type `StateRole[]` to `StateRoleEnum[]`
- :warning: changed property `previousValue` of type `ChangeStateTypeChange` from type `StateType` to `StateTypeEnum`
- :warning: changed property `nextValue` of type `ChangeStateTypeChange` from type `StateType` to `StateTypeEnum`
- :warning: changed property `previousValue` of type `RemoveChannelRolesChange` from type `ChannelRole[]` to `ChannelRoleEnum[]`
- :warning: changed property `nextValue` of type `RemoveChannelRolesChange` from type `ChannelRole[]` to `ChannelRoleEnum[]`
- :warning: changed property `previousValue` of type `RemoveStateRolesChange` from type `StateRole[]` to `StateRoleEnum[]`
- :warning: changed property `nextValue` of type `RemoveStateRolesChange` from type `StateRole[]` to `StateRoleEnum[]`
- :warning: changed property `previousValue` of type `SetChannelRolesChange` from type `ChannelRole[]` to `ChannelRoleEnum[]`
- :warning: changed property `nextValue` of type `SetChannelRolesChange` from type `ChannelRole[]` to `ChannelRoleEnum[]`
- :warning: changed property `previousValue` of type `SetStateRolesChange` from type `StateRole[]` to `StateRoleEnum[]`
- :warning: changed property `nextValue` of type `SetStateRolesChange` from type `StateRole[]` to `StateRoleEnum[]`
</details>
