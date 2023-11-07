import { deepEqual } from 'fast-equals'
import { buildBaseAttributesActions } from './utils/common-actions'
import createBuildArrayActions, {
  ADD_ACTIONS,
  CHANGE_ACTIONS,
} from './utils/create-build-array-actions'
import { getDeltaValue } from './utils/diffpatcher'
import extractMatchingPairs from './utils/extract-matching-pairs'

const REGEX_NUMBER = new RegExp(/^\d+$/)
const REGEX_UNDERSCORE_NUMBER = new RegExp(/^_\d+$/)
const getIsChangedOperation = (key) => REGEX_NUMBER.test(key)
const getIsRemovedOperation = (key) => REGEX_UNDERSCORE_NUMBER.test(key)

export const baseActionsList = [
  { action: 'changeKey', key: 'key' },
  { action: 'changeName', key: 'name' },
  { action: 'setDescription', key: 'description' },
]

export function actionsMapBase(
  diff,
  oldObj,
  newObj,
  config: { shouldOmitEmptyString?: boolean } = {}
) {
  return buildBaseAttributesActions({
    actions: baseActionsList,
    diff,
    oldObj,
    newObj,
    shouldOmitEmptyString: config.shouldOmitEmptyString,
  })
}

function actionsMapEnums(
  fieldName,
  attributeType,
  attributeDiff,
  previous,
  next
) {
  const addEnumActionName =
    attributeType === 'Enum' ? 'addEnumValue' : 'addLocalizedEnumValue'
  const changeEnumValueLabelActionName =
    attributeType === 'Enum'
      ? 'changeEnumValueLabel'
      : 'changeLocalizedEnumValueLabel'
  const changeEnumOrderActionName =
    attributeType === 'Enum'
      ? 'changeEnumValueOrder'
      : 'changeLocalizedEnumValueOrder'
  const buildArrayActions = createBuildArrayActions('values', {
    [ADD_ACTIONS]: (newEnum) => ({
      fieldName,
      action: addEnumActionName,
      value: newEnum,
    }),
    [CHANGE_ACTIONS]: (oldEnum, newEnum) => {
      const oldEnumInNext = next.values.find(
        (nextEnum) => nextEnum.key === oldEnum.key
      )

      // These `changeActions` would impose a nested structure among
      // the accumulated `updateActions` generated by `buildArrayActions`
      // In the end; we have to flatten the structure before we pass it back
      // to the client.
      const changeActions = []
      if (oldEnumInNext) {
        // If the enum value is changed, we need to change the order first
        const isKeyChanged = oldEnum.key !== newEnum.key

        // check if the label is changed
        const foundPreviousEnum = previous.values.find(
          (previousEnum) => previousEnum.key === newEnum.key
        )
        const isLabelEqual = deepEqual(foundPreviousEnum.label, newEnum.label)

        if (isKeyChanged) {
          // these actions is then flatten in the end
          changeActions.push({
            fieldName,
            action: changeEnumOrderActionName,
            value: newEnum,
          })
        }

        if (!isLabelEqual) {
          changeActions.push({
            fieldName,
            action: changeEnumValueLabelActionName,
            value: newEnum,
          })
        }
      } else {
        changeActions.push({
          fieldName,
          action: addEnumActionName,
          value: newEnum,
        })
      }
      return changeActions
    },
  })

  const actions = []
  // following lists are necessary to ensure that when we change the
  // order of enumValues, we generate one updateAction instead of one at a time.
  let newEnumValuesOrder = []

  buildArrayActions(attributeDiff, previous, next)
    .flat()
    .forEach((updateAction) => {
      if (updateAction.action === changeEnumOrderActionName) {
        newEnumValuesOrder = next.values.map((enumValue) => enumValue.key)
      } else actions.push(updateAction)
    })

  return [
    ...actions,
    ...(newEnumValuesOrder.length > 0
      ? [
          {
            fieldName,
            action: changeEnumOrderActionName,
            keys: newEnumValuesOrder,
          },
        ]
      : []),
  ]
}

export function actionsMapFieldDefinitions(
  fieldDefinitionsDiff: { [key: string]: any },
  previous,
  next,
  diffPaths
) {
  const actions = []
  fieldDefinitionsDiff &&
    Object.entries(fieldDefinitionsDiff).forEach(([diffKey, diffValue]) => {
      const extractedPairs = extractMatchingPairs(
        diffPaths,
        diffKey,
        previous,
        next
      )

      if (getIsChangedOperation(diffKey)) {
        if (Array.isArray(diffValue)) {
          const deltaValue = getDeltaValue(diffValue)
          if (deltaValue.name) {
            actions.push({
              action: 'addFieldDefinition',
              fieldDefinition: deltaValue,
            })
          }
        } else if (diffValue.label) {
          actions.push({
            action: 'changeLabel',
            label: extractedPairs.newObj.label,
            fieldName: extractedPairs.oldObj.name,
          })
        } else if (diffValue.inputHint) {
          actions.push({
            action: 'changeInputHint',
            inputHint: extractedPairs.newObj.inputHint,
            fieldName: extractedPairs.oldObj.name,
          })
        } else if (diffValue?.type?.values) {
          actions.push(
            ...actionsMapEnums(
              extractedPairs.oldObj.name,
              extractedPairs.oldObj.type.name,
              diffValue.type,
              extractedPairs.oldObj.type,
              extractedPairs.newObj.type
            )
          )
        }
      } else if (getIsRemovedOperation(diffKey)) {
        if (Array.isArray(diffValue)) {
          if (diffValue.length === 3 && diffValue[2] === 3) {
            actions.push({
              action: 'changeFieldDefinitionOrder',
              fieldNames: next.map((n) => n.name),
            })
          } else {
            const deltaValue = getDeltaValue(diffValue)
            if (deltaValue === undefined && diffValue[0].name)
              actions.push({
                action: 'removeFieldDefinition',
                fieldName: diffValue[0].name,
              })
          }
        }
      }
    })

  // Make sure to execute removeActions before creating new ones
  // in order to prevent any eventual removal of `addAction`.
  // List of `removeActions` can be found here
  // https://docs.commercetools.com/http-api-projects-types.html#change-key

  return actions.sort((a, b) => {
    if (
      a.action === 'removeFieldDefinition' &&
      a.action === 'removeFieldDefinition'
    ) {
      return (a.fieldName as string).localeCompare(b.fieldName)
    } else if (a.action === 'removeFieldDefinition') {
      return -1
    } else if (b.action === 'removeFieldDefinition') {
      return -1
    }
    return 0
  })
}
