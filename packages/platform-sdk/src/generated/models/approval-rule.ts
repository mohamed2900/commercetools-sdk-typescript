/**
 * Code generated by [commercetools RMF-Codegen](https://github.com/commercetools/rmf-codegen). DO NOT EDIT.
 * Please don't change this file manually but run `rmf-codegen generate raml_file_path -o output_path -t typescript_client` to update it.
 * For more information about the commercetools platform APIs, visit https://docs.commercetools.com/.
 */

import {
  AssociateRoleKeyReference,
  AssociateRoleResourceIdentifier,
} from './associate-role'
import { BusinessUnitKeyReference } from './business-unit'
import { BaseResource, CreatedBy, LastModifiedBy } from './common'

export interface ApprovalRule extends BaseResource {
  /**
   *	Unique identifier of the Approval Rule.
   *
   *
   */
  readonly id: string
  /**
   *	Current version of the Approval Rule.
   *
   *
   */
  readonly version: number
  /**
   *	Date and time (UTC) the Approval Rule was initially created.
   *
   *
   */
  readonly createdAt: string
  /**
   *	Present on resources created after 1 February 2019 except for [events not tracked](/general-concepts#events-tracked).
   *
   *
   */
  readonly createdBy?: CreatedBy
  /**
   *	Date and time (UTC) the Approval Rule was last updated.
   *
   *
   */
  readonly lastModifiedAt: string
  /**
   *	Present on resources created after 1 February 2019 except for [events not tracked](/general-concepts#events-tracked).
   *
   *
   */
  readonly lastModifiedBy?: LastModifiedBy
  /**
   *	User-defined unique identifier of the Approval Rule. Must be unique within a [Business Unit](ctp:api:type:BusinessUnit).
   *
   *
   */
  readonly key?: string
  /**
   *	Name of the Approval Rule.
   *
   *
   */
  readonly name: string
  /**
   *	Description of the Approval Rule.
   *
   *
   */
  readonly description?: string
  /**
   *	Indicates whether the Approval Rule should be matched against [Orders](ctp:api:type:Order) or not.
   *
   *
   */
  readonly status: ApprovalRuleStatus
  /**
   *	The [Order Predicate](/../api/projects/predicates#order-predicates) describing the [Orders](ctp:api:type:Order) the Approval Rule should match against.
   *
   *
   */
  readonly predicate: string
  /**
   *	The hierarchy of approvers within the Approval Rule.
   *
   *
   */
  readonly approvers: ApproverHierarchy
  /**
   *	The [Associate Roles](ctp:api:type:AssociateRole) customers must hold for their Order to require approval.
   *
   *
   */
  readonly requesters: RuleRequester[]
  /**
   *	The [Business Unit](ctp:api:type:BusinessUnit) the Approval Rule belongs to.
   *
   *
   */
  readonly businessUnit: BusinessUnitKeyReference
}
export interface ApprovalRuleDraft {
  /**
   *	User-defined unique identifier of the Approval Rule. Uniqueness is enforced within the Business Unit.
   *
   *
   */
  readonly key?: string
  /**
   *	Name of the Approval Rule.
   *
   *
   */
  readonly name: string
  /**
   *	Description of the Approval Rule.
   *
   *
   */
  readonly description?: string
  /**
   *	Indicates whether the Approval Rule should be matched against [Orders](ctp:api:type:Order) or not.
   *
   *
   */
  readonly status: ApprovalRuleStatus
  /**
   *	The [predicate](/../api/predicates/predicate-operators) describing the [Orders](ctp:api:type:Order) the Approval Rule should match against.
   *
   *
   */
  readonly predicate: string
  /**
   *	The hierarchy of approvers within the Approval Rule.
   *
   *
   */
  readonly approvers: ApproverHierarchyDraft
  /**
   *	The [Associate Roles](ctp:api:type:AssociateRole) customers must hold for their Order to require approval.
   *
   *
   */
  readonly requesters: RuleRequesterDraft[]
}
/**
 *	[PagedQueryResult](/../api/general-concepts#pagedqueryresult) with results containing an array of [ApprovalRule](ctp:api:type:ApprovalRule).
 *
 */
export interface ApprovalRulePagedQueryResponse {
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
   *	Approval Rules matching the query.
   *
   *
   */
  readonly results: ApprovalRule[]
}
/**
 *	Indicates whether the Approval Rule should be matched against [Orders](ctp:api:type:Order) or not.
 *
 */
export type ApprovalRuleStatus = 'Active' | 'Inactive' | string
export interface ApprovalRuleUpdate {
  /**
   *	Expected version of the [ApprovalRule](ctp:api:type:ApprovalRule) to which the changes should be applied.
   *	If the expected version does not match the actual version, a [ConcurrentModification](ctp:api:type:ConcurrentModificationError) error will be returned.
   *
   *
   */
  readonly version: number
  /**
   *	Update actions to be performed on the [ApprovalRule](ctp:api:type:ApprovalRule).
   *
   *
   */
  readonly actions: ApprovalRuleUpdateAction[]
}
export type ApprovalRuleUpdateAction =
  | ApprovalRuleSetApproversAction
  | ApprovalRuleSetDescriptionAction
  | ApprovalRuleSetKeyAction
  | ApprovalRuleSetNameAction
  | ApprovalRuleSetPredicateAction
  | ApprovalRuleSetRequestersAction
  | ApprovalRuleSetStatusAction
/**
 *	Setting the approvers for an [Approval Rule](ctp:api:type:ApprovalRule) generates an [ApprovalRuleApproversSet](ctp:api:type:ApprovalRuleApproversSetMessage) Message.
 *
 */
export interface ApprovalRuleSetApproversAction {
  readonly action: 'setApprovers'
  /**
   *	New approvers to set for the Approval Rule.
   *
   *
   */
  readonly approvers: ApproverHierarchyDraft
}
/**
 *	Setting the description for an [Approval Rule](ctp:api:type:ApprovalRule) generates an [ApprovalRuleDescriptionSet](ctp:api:type:ApprovalRuleDescriptionSetMessage) Message.
 *
 */
export interface ApprovalRuleSetDescriptionAction {
  readonly action: 'setDescription'
  /**
   *	New description to set for the Approval Rule.
   *
   */
  readonly description?: string
}
/**
 *	Setting the key for an [Approval Rule](ctp:api:type:ApprovalRule) generates an [ApprovalRuleKeySet](ctp:api:type:ApprovalRuleKeySetMessage) Message.
 *
 */
export interface ApprovalRuleSetKeyAction {
  readonly action: 'setKey'
  /**
   *	Value to set. Must be unique within a Business Unit. If empty, any existing value will be removed.
   *
   *
   */
  readonly key?: string
}
/**
 *	Setting the name for an [Approval Rule](ctp:api:type:ApprovalRule) generates an [ApprovalRuleNameSet](ctp:api:type:ApprovalRuleNameSetMessage) Message.
 *
 */
export interface ApprovalRuleSetNameAction {
  readonly action: 'setName'
  /**
   *	New name to set for the Approval Rule.
   *
   */
  readonly name: string
}
/**
 *	Setting the [Order Predicate](/../api/projects/predicates#order-predicates) for an [Approval Rule](ctp:api:type:ApprovalRule) generates an [ApprovalRulePredicateSet](ctp:api:type:ApprovalRulePredicateSetMessage) Message.
 *
 */
export interface ApprovalRuleSetPredicateAction {
  readonly action: 'setPredicate'
  /**
   *	A valid [Order Predicate](/../api/projects/predicates#order-predicates) to set for the Approval Rule.
   *
   */
  readonly predicate: string
}
/**
 *	Sets the requesters for an [Approval Rule](ctp:api:type:ApprovalRule) generates an [ApprovalRuleRequestersSet](ctp:api:type:ApprovalRuleRequestersSetMessage) Message.
 *
 */
export interface ApprovalRuleSetRequestersAction {
  readonly action: 'setRequesters'
  /**
   *	New requesters to set for the Approval Rule.
   *
   *
   */
  readonly requesters: RuleRequesterDraft[]
}
/**
 *	Setting the status for an [Approval Rule](ctp:api:type:ApprovalRule) generates an [ApprovalRuleStatusSet](ctp:api:type:ApprovalRuleStatusSetMessage) Message.
 *
 */
export interface ApprovalRuleSetStatusAction {
  readonly action: 'setStatus'
  /**
   *	New status to set for the Approval Rule.
   *
   */
  readonly status: ApprovalRuleStatus
}
export interface ApproverConjunction {
  /**
   *	All of the nested disjunctions must be approved in order for the conjunction to be considered approved.
   *
   *
   */
  readonly and: ApproverDisjunction[]
}
export interface ApproverConjunctionDraft {
  /**
   *	All of the nested disjunctions must be approved in order for the conjunction to be considered approved.
   *	The total count of approvers across the nested disjunctions must not exceed 10.
   *
   *
   */
  readonly and: ApproverDisjunctionDraft[]
}
export interface ApproverDisjunction {
  /**
   *	Any of the nested approvers must approve in order for the disjunction to be considered approved.
   *
   *
   */
  readonly or: RuleApprover[]
}
export interface ApproverDisjunctionDraft {
  /**
   *	Any of the nested approvers must approve in order for the disjunction to be considered approved.
   *
   *
   */
  readonly or: RuleApproverDraft[]
}
/**
 *	Describes the order in which [Associates](ctp:api:type:Associate) can approve the matched [Order](ctp:api:type:Order).
 *
 */
export interface ApproverHierarchy {
  /**
   *	All of the nested conjunctions must be approved in order for the hierarchy to be considered approved.
   *
   *
   */
  readonly tiers: ApproverConjunction[]
}
/**
 *	Describes the sequence in which [Associates](ctp:api:type:Associate) can approve an [Order](ctp:api:type:Order).
 *
 */
export interface ApproverHierarchyDraft {
  /**
   *	Nested conjunctions representing tiers of approvers in a hierarchy.
   *
   *
   */
  readonly tiers: ApproverConjunctionDraft[]
}
export interface RuleApprover {
  /**
   *	The Associate Role that is allowed to approve at a given stage in the approval process.
   *
   *
   */
  readonly associateRole: AssociateRoleKeyReference
}
export interface RuleApproverDraft {
  /**
   *	Any Associate with this Role can approve.
   *
   *
   */
  readonly associateRole: AssociateRoleResourceIdentifier
}
export interface RuleRequester {
  /**
   *	The [Associate Role](ctp:api:type:AssociateRole) that an [Associate](ctp:api:type) must hold for the Approval Rule to apply to the Orders they create.
   *
   *
   */
  readonly associateRole: AssociateRoleKeyReference
}
export interface RuleRequesterDraft {
  /**
   *	The [Associate Role](ctp:api:type:AssociateRole) that an [Associate](ctp:api:type) must hold for the Approval Rule to apply to the Orders they create.
   *
   *
   */
  readonly associateRole: AssociateRoleResourceIdentifier
}
