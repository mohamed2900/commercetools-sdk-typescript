import type {
  SyncAction,
  SyncActionConfig,
  ActionGroup,
  UpdateAction,
} from '@commercetools/sdk-client-v2'
import createBuildActions from './utils/create-build-actions'
import createMapActionGroup from './utils/create-map-action-group'
import * as productActions from './product-actions'
import * as diffpatcher from './utils/diffpatcher'
import findMatchingPairs from './utils/find-matching-pairs'
import copyEmptyArrayProps from './utils/copy-empty-array-props'

const actionGroups = [
  'base',
  'meta',
  'references',
  'prices',
  'pricesCustom',
  'attributes',
  'images',
  'variants',
  'categories',
  'categoryOrderHints',
]

function createProductMapActions(
  mapActionGroup: Function,
  syncActionConfig?: SyncActionConfig
): (diff: any, newObj: any, oldObj: any, options: any) => Array<UpdateAction> {
  return function doMapActions(
    diff: any,
    newObj: any,
    oldObj: any,
    options: any = {}
  ): Array<UpdateAction> {
    const allActions = []
    const { sameForAllAttributeNames, enableDiscounted } = options
    const { publish, staged } = newObj

    const variantHashMap = findMatchingPairs(
      diff.variants,
      oldObj.variants,
      newObj.variants
    )

    allActions.push(
      mapActionGroup(
        'attributes',
        (): Array<UpdateAction> =>
          productActions.actionsMapAttributes(
            diff,
            oldObj,
            newObj,
            sameForAllAttributeNames || [],
            variantHashMap
          )
      )
    )

    allActions.push(
      mapActionGroup(
        'variants',
        (): Array<UpdateAction> =>
          productActions.actionsMapAddVariants(diff, oldObj, newObj)
      )
    )

    allActions.push(productActions.actionsMapMasterVariant(oldObj, newObj))

    allActions.push(
      mapActionGroup(
        'variants',
        (): Array<UpdateAction> =>
          productActions.actionsMapRemoveVariants(diff, oldObj, newObj)
      )
    )

    allActions.push(
      mapActionGroup(
        'base',
        (): Array<UpdateAction> =>
          productActions.actionsMapBase(diff, oldObj, newObj, syncActionConfig)
      )
    )

    allActions.push(
      mapActionGroup(
        'meta',
        (): Array<UpdateAction> =>
          productActions.actionsMapMeta(diff, oldObj, newObj)
      )
    )

    allActions.push(
      mapActionGroup(
        'references',
        (): Array<UpdateAction> =>
          productActions.actionsMapReferences(diff, oldObj, newObj)
      )
    )

    allActions.push(
      mapActionGroup(
        'images',
        (): Array<UpdateAction> =>
          productActions.actionsMapImages(diff, oldObj, newObj, variantHashMap)
      )
    )

    allActions.push(
      mapActionGroup(
        'pricesCustom',
        (): Array<UpdateAction> =>
          productActions.actionsMapPricesCustom(
            diff,
            oldObj,
            newObj,
            variantHashMap
          )
      )
    )

    allActions.push(
      mapActionGroup(
        'prices',
        (): Array<UpdateAction> =>
          productActions.actionsMapPrices(
            diff,
            oldObj,
            newObj,
            variantHashMap,
            enableDiscounted
          )
      )
    )

    allActions.push(
      mapActionGroup(
        'categories',
        (): Array<UpdateAction> => productActions.actionsMapCategories(diff)
      )
    )

    allActions.push(
      mapActionGroup(
        'categories',
        (): Array<UpdateAction> =>
          productActions.actionsMapCategoryOrderHints(diff)
      )
    )

    allActions.push(
      mapActionGroup(
        'assets',
        (): Array<UpdateAction> =>
          productActions.actionsMapAssets(diff, oldObj, newObj, variantHashMap)
      )
    )

    if (publish === true || staged === false)
      return allActions.flat().map((action) => ({ ...action, staged: false }))

    return allActions.flat()
  }
}

function moveMasterVariantsIntoVariants(before: any, now: any): Array<Object> {
  const [beforeCopy, nowCopy] = copyEmptyArrayProps(before, now)
  const move = (obj: any): any => ({
    ...obj,
    masterVariant: undefined,
    variants: [obj.masterVariant, ...(obj.variants || [])],
  })
  const hasMasterVariant = (obj: any): any => obj && obj.masterVariant

  return [
    hasMasterVariant(beforeCopy) ? move(beforeCopy) : beforeCopy,
    hasMasterVariant(nowCopy) ? move(nowCopy) : nowCopy,
  ]
}

export default (
  actionGroupList?: Array<ActionGroup>,
  syncActionConfig?: SyncActionConfig
): SyncAction => {
  const mapActionGroup = createMapActionGroup(actionGroupList)
  const doMapActions = createProductMapActions(mapActionGroup, syncActionConfig)

  const buildActions = createBuildActions(
    diffpatcher.diff,
    doMapActions,
    moveMasterVariantsIntoVariants
  )

  return { buildActions }
}

export { actionGroups }
