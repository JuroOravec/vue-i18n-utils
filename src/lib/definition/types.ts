/**
 * Types for DefinitionItem.
 *
 * These types are more concrete compared to the abstract types.
 *
 * These types should be used by classes / concretions in this or other
 * components.
 */

import type { RequiredProps } from '../../types';
import type { IPath } from '../util/walk/types-abstract';
import type { AI_Item } from '../item/types-abstract';
import type { AIDefinition } from './types-abstract';

export * from './types-abstract';

export namespace IDefinition {
  export interface CtorOptions
    extends RequiredProps<AI_Item.CtorOptions, 'locale'>,
      AIDefinition.CtorOptions {
    path: IPath;
  }

  export type Item = AIDefinition.Item;

  export type ItemArray = AIDefinition.ItemArray;

  export type ItemList = AIDefinition.ItemList;

  export type ItemArrayLike = AIDefinition.ItemArrayLike;
}
