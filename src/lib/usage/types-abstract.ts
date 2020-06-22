/**
 * Types for UsageItem.
 *
 * These types are more concrete compared to the abstract types.
 *
 * These types should be used by classes / concretions in this or other
 * components.
 */

import type { RequiredProps } from '../../types';
import type { AI_Item } from '../item/types-abstract';

export namespace AIUsage {
  export interface CtorOptions extends AI_Item.CtorOptions {
    path: string[];
  }

  export interface Item
    extends RequiredProps<AI_Item.Item, 'source' | 'origin' | 'path'> {
    /**
     * Create a new instance with copied values.
     */
    copy: (newValuesObj?: Partial<CtorOptions>) => Item;
  }

  export interface ItemArray extends AI_Item.ItemArray<Item> {
    [Symbol.iterator]: () => IterableIterator<Item>;
  }

  export type ItemList = ItemArray | Item[];

  export type ItemArrayLike = ItemList | IterableIterator<Item>;
}
