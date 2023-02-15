**Api changes**

<details>
<summary>Added Resource(s)</summary>

- added resource `/{projectKey}/as-associate`
- added resource `/{projectKey}/associate-roles`
- added resource `/{projectKey}/as-associate/{associateId}`
- added resource `/{projectKey}/as-associate/{associateId}/business-units`
- added resource `/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}`
- added resource `/{projectKey}/as-associate/{associateId}/business-units/key={key}`
- added resource `/{projectKey}/as-associate/{associateId}/business-units/{ID}`
- added resource `/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/carts`
- added resource `/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/orders`
- added resource `/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/quotes`
- added resource `/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/quote-requests`
- added resource `/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/carts/replicate`
- added resource `/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/carts/key={key}`
- added resource `/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/carts/{ID}`
- added resource `/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/orders/quotes`
- added resource `/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/orders/order-number={orderNumber}`
- added resource `/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/orders/{ID}`
- added resource `/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/quotes/key={key}`
- added resource `/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/quotes/{ID}`
- added resource `/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/quote-requests/key={key}`
- added resource `/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/quote-requests/{ID}`
- added resource `/{projectKey}/associate-roles/key={key}`
- added resource `/{projectKey}/associate-roles/{ID}`
</details>

<details>
<summary>Changed Type(s)</summary>

- :warning: changed type `AssociateRole` from type `string` to `BaseResource`
</details>

<details>
<summary>Added Type(s)</summary>

- added type `AssociateRoleDraft`
- added type `AssociateRoleKeyReference`
- added type `AssociateRolePagedQueryResponse`
- added type `AssociateRoleReference`
- added type `AssociateRoleResourceIdentifier`
- added type `AssociateRoleUpdate`
- added type `AssociateRoleUpdateAction`
- added type `BusinessUnitPermission`
- added type `CartPermission`
- added type `OrderPermission`
- added type `Permission`
- added type `QuotePermission`
- added type `QuoteRequestPermission`
- added type `AssociateRoleAddPermissionAction`
- added type `AssociateRoleChangeBuyerAssignableAction`
- added type `AssociateRoleRemovePermissionAction`
- added type `AssociateRoleSetCustomFieldAction`
- added type `AssociateRoleSetCustomTypeAction`
- added type `AssociateRoleSetNameAction`
- added type `AssociateRoleSetPermissionsAction`
- added type `AssociateRoleAssignment`
- added type `AssociateRoleAssignmentDraft`
- added type `AssociateRoleDeprecated`
- added type `AssociateRoleBuyerAssignableChangedMessage`
- added type `AssociateRoleCreatedMessage`
- added type `AssociateRoleDeletedMessage`
- added type `AssociateRoleNameChangedMessage`
- added type `AssociateRolePermissionAddedMessage`
- added type `AssociateRolePermissionRemovedMessage`
- added type `AssociateRolePermissionsSetMessage`
- added type `OrderPurchaseOrderNumberSetMessage`
- added type `AssociateRoleBuyerAssignableChangedMessagePayload`
- added type `AssociateRoleCreatedMessagePayload`
- added type `AssociateRoleDeletedMessagePayload`
- added type `AssociateRoleNameChangedMessagePayload`
- added type `AssociateRolePermissionAddedMessagePayload`
- added type `AssociateRolePermissionRemovedMessagePayload`
- added type `AssociateRolePermissionsSetMessagePayload`
- added type `OrderPurchaseOrderNumberSetMessagePayload`
- added type `StagedOrderSetPurchaseOrderNumberAction`
- added type `OrderSetPurchaseOrderNumberAction`
</details>

<details>
<summary>Added Enum(s)</summary>

- added enum `associate-role` to type `ReferenceTypeId`
- added enum `associate-role` to type `MessageSubscriptionResourceTypeId`
- added enum `associate-role` to type `ResourceTypeId`
</details>

<details>
<summary>Changed Property(s)</summary>

- :warning: changed property `roles` of type `Associate` from type `AssociateRole[]` to `AssociateRoleDeprecated[]`
- :warning: changed property `roles` of type `AssociateDraft` from type `AssociateRole[]` to `AssociateRoleDeprecated[]`
- :warning: changed property `stores` of type `BusinessUnitDraft` from type `StoreKeyReference[]` to `StoreResourceIdentifier[]`
- :warning: changed property `stores` of type `CompanyDraft` from type `StoreKeyReference[]` to `StoreResourceIdentifier[]`
- :warning: changed property `stores` of type `DivisionDraft` from type `StoreKeyReference[]` to `StoreResourceIdentifier[]`
</details>

<details>
<summary>Required Property(s)</summary>

- changed property `roles` of type `AssociateDraft` to be optional
</details>

<details>
<summary>Added Property(s)</summary>

- added property `associateRoleAssignments` to type `Associate`
- added property `associateRoleAssignments` to type `AssociateDraft`
- added property `oldValue` to type `StandalonePriceValueChangedMessage`
- added property `oldValue` to type `StandalonePriceValueChangedMessagePayload`
- added property `purchaseOrderNumber` to type `StagedOrder`
- added property `purchaseOrderNumber` to type `Order`
- added property `purchaseOrderNumber` to type `OrderFromCartDraft`
- added property `purchaseOrderNumber` to type `QuoteRequest`
- added property `purchaseOrderNumber` to type `QuoteRequestDraft`
- added property `purchaseOrderNumber` to type `Quote`
- added property `purchaseOrderNumber` to type `StagedQuote`
</details>

<details>
<summary>Added Method(s)</summary>

- added method `apiRoot.withProjectKey().associateRoles().get()`
- added method `apiRoot.withProjectKey().associateRoles().post()`
- added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().businessUnits().get()`
- added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().businessUnits().post()`
- added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().businessUnits().withKey().get()`
- added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().businessUnits().withKey().post()`
- added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().businessUnits().withId().get()`
- added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().businessUnits().withId().post()`
- added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().carts().get()`
- added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().carts().post()`
- added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().orders().get()`
- added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().orders().post()`
- added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().quotes().get()`
- added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().quoteRequests().get()`
- added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().quoteRequests().post()`
- added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().carts().replicate().post()`
- added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().carts().withKey().get()`
- added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().carts().withKey().post()`
- added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().carts().withKey().delete()`
- added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().carts().withId().get()`
- added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().carts().withId().post()`
- added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().carts().withId().delete()`
- added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().orders().orderQuote().post()`
- added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().orders().withOrderNumber().get()`
- added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().orders().withOrderNumber().post()`
- added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().orders().withId().get()`
- added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().orders().withId().post()`
- added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().quotes().withKey().get()`
- added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().quotes().withKey().post()`
- added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().quotes().withId().get()`
- added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().quotes().withId().post()`
- added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().quoteRequests().withKey().get()`
- added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().quoteRequests().withKey().post()`
- added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().quoteRequests().withId().get()`
- added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().quoteRequests().withId().post()`
- added method `apiRoot.withProjectKey().associateRoles().withKey().get()`
- added method `apiRoot.withProjectKey().associateRoles().withKey().post()`
- added method `apiRoot.withProjectKey().associateRoles().withKey().delete()`
- added method `apiRoot.withProjectKey().associateRoles().withId().get()`
- added method `apiRoot.withProjectKey().associateRoles().withId().post()`
- added method `apiRoot.withProjectKey().associateRoles().withId().delete()`
</details>
