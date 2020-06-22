/**
 * Types for UsageItem.
 *
 * These types are more concrete compared to the abstract types.
 *
 * These types should be used by classes / concretions in this or other
 * components.
 */

import type { IPath } from '../util/walk/types-abstract';
import type { AIUsage } from './types-abstract';

export * from './types-abstract';

export namespace IUsage {
  export interface CtorOptions extends AIUsage.CtorOptions {
    path: IPath;
  }

  export interface Item extends AIUsage.Item {
    /**
     * Create a new instance with copied values.
     */
    copy: (newValuesObj?: Partial<CtorOptions>) => Item;
  }

  export interface ItemArray extends AIUsage.ItemArray {
    [Symbol.iterator]: () => IterableIterator<Item>;
  }

  export type ItemList = ItemArray | Item[];

  export type ItemArrayLike = ItemList | IterableIterator<Item>;
}
