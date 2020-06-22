/**
 * Types for PathResolver.
 *
 * These types are more concrete compared to the abstract types.
 *
 * These types should be used by classes / concretions in this or other
 * components.
 */
import { AI_Item } from './types-abstract';

export * from './types-abstract';

export namespace I_Item {
  export type HashType = AI_Item.HashType;

  export type Item = AI_Item.Item;

  export type CtorOptions = AI_Item.CtorOptions;

  export type ItemArray<T extends Item = Item> = AI_Item.ItemArray<T>;

  export type ItemList<T extends Item = Item> = AI_Item.ItemList<T>;

  export type ItemArrayLike<T extends Item = Item> = AI_Item.ItemArrayLike<T>;

  export type FilterByOptions = AI_Item.FilterByOptions;

  export type DifferenceOptions = AI_Item.DifferenceOptions;

  export type UnionOptions = AI_Item.UnionOptions;

  export type IntersectionOptions = AI_Item.IntersectionOptions;

  export type UpdateByOptions<
    T extends Item = Item,
    T2 extends Item = Item
  > = AI_Item.UpdateByOptions<T, T2>;

  export type UpdatePropOptions<
    T extends Item = Item
  > = AI_Item.UpdatePropOptions<T>;

  export type UpdateOptions<
    T extends Item = Item,
    T2 extends Item = Item
  > = AI_Item.UpdateOptions<T, T2>;

  export type UpdateReturn<
    T extends Item = Item,
    T2 extends Item = Item
  > = AI_Item.UpdateReturn<T, T2>;

  export type ItemsByLocaleOptions = AI_Item.ItemsByLocaleOptions;

  export type FilterByValueOptions = AI_Item.FilterByValueOptions;

  export type FilterByLocaleOptions = AI_Item.FilterByLocaleOptions;

  export type FilterByPathOptions = AI_Item.FilterByPathOptions;

  export type FilterMissingOptions = AI_Item.FilterMissingOptions;

  export type FromObjectOptions<
    T extends Item = Item
  > = AI_Item.FromObjectOptions<T>;

  export type ToObjectOptions = AI_Item.ToObjectOptions;

  export type ToObjectResultSimple = AI_Item.ToObjectResultSimple;
  export type ToObjectResultSimpleMerged = AI_Item.ToObjectResultSimpleMerged;
  export type ToObjectResultExpanded<
    T extends Item = Item
  > = AI_Item.ToObjectResultExpanded<T>;
  export type ToObjectResultExpandedMerged<
    T extends Item = Item
  > = AI_Item.ToObjectResultExpandedMerged<T>;

  export type ToObjectResultAny<
    T extends Item = Item
  > = AI_Item.ToObjectResultAny<T>;

  export type ToObjectResult<
    IsSimple extends any = false,
    IsMerged extends any = false,
    T extends Item = Item
  > = AI_Item.ToObjectResult<IsSimple, IsMerged, T>;
}
