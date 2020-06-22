/**
 * Abstract types for DefinitionItem.
 *
 * These types have limited resolution and do not include any types that could
 * cause circular reference.
 *
 * These types should be used by interfaces of other components to avoid
 * circular imports.
 */

import type { RequiredProps } from '../../types';
import type { AI_Item } from '../item/types-abstract';

export namespace AIDefinition {
  export interface CtorOptions
    extends RequiredProps<AI_Item.CtorOptions, 'locale'> {
    sourceScope?: 'general' | 'locale';
    path: string[];
  }

  export interface Item
    extends RequiredProps<
      AI_Item.Item,
      'locale' | 'source' | 'origin' | 'path'
    > {
    sourceScope?: 'general' | 'locale';
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
