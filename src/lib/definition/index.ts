import merge from 'lodash.merge';

import type { IDefinition } from './types';
import type { IPath } from '../util/walk/types';
import { Item, ItemArray } from '../item';

export interface DefinitionItem {
  constructor: typeof DefinitionItem;
}
export class DefinitionItem extends Item implements IDefinition.Item {
  path: IPath;
  locale: string;
  source: string;
  sourceScope?: 'locale' | 'general';
  origin: string;

  constructor(options: IDefinition.CtorOptions) {
    const { path, value, source, sourceScope, origin, locale, ...rest } = merge(
      {},
      DefinitionItem.defaults,
      options,
    );
    super({ ...rest, value, source, origin, locale });
    this.value = value;
    this.locale = locale;
    this.path = path?.slice() || [];
    this.sourceScope = sourceScope;
    this.source = source;
    this.origin = origin;
  }

  copy(newValuesObj: Partial<IDefinition.CtorOptions> = {}) {
    return super.copy(newValuesObj) as IDefinition.Item;
  }

  static get defaults() {
    return {
      source: '',
      origin: '',
    };
  }
}

/**
 * Container class for holding DefinitionItem data.
 */
export class DefinitionArray extends ItemArray<IDefinition.Item>
  implements IDefinition.ItemArray {
  static get defaults() {
    return {
      ...super.defaults,
      itemClass: DefinitionItem,
    };
  }
}
