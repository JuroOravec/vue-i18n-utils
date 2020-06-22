import type { IDefinition } from '../../definition/types';
import { DefinitionItem, DefinitionArray } from '../../definition';

export interface IVueDefinitionItem extends IDefinition.Item {
  link?: string;
}

export class VueDefinitionItem extends DefinitionItem
  implements IVueDefinitionItem {
  link?: string;

  constructor({ link, ...rest }: IDefinition.CtorOptions & { link?: string }) {
    super(rest);
    this.link = link;
  }
}

/**
 * Container class for holding DefinitionItem data.
 */
export class VueDefinitionArray extends DefinitionArray
  implements IDefinition.ItemArray {
  static get defaults() {
    return {
      ...super.defaults,
      itemClass: VueDefinitionItem,
    };
  }
}
