**Api changes**

<details>
<summary>Added Method(s)</summary>

- added method `apiRoot.withProjectKey().products().search().post()`
- added method `apiRoot.withProjectKey().products().search().head()`
</details>

<details>
<summary>Changed MethodResponseBody(s)</summary>

- :warning: changed response body for `200: application/json` of method `get /{projectKey}/in-store/key={storeKey}/cart-discounts` from type `CartDiscount` to `CartDiscountPagedQueryResponse`
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

- added property `productsNew` to type `SearchIndexingConfiguration`
</details>

<details>
<summary>Added Resource(s)</summary>

- added resource `/{projectKey}/products/search`
</details>

<details>
<summary>Added Type(s)</summary>

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
