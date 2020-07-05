import merge from 'lodash.merge';

import type { IPath } from '../util/walk/types';
import type { IUsage } from './types';
import { Item } from '../item';

export class UsageItem extends Item implements IUsage.Item {
  path: IPath;
  source: string;
  origin: string;

  constructor(options: IUsage.CtorOptions) {
    const { path, source, origin, ...rest } = merge(
      {},
      UsageItem.defaults,
      options,
    );
    super({ ...rest, source, origin });
    this.path = path.slice();
    this.source = source;
    this.origin = origin;
  }

  copy(newValuesObj: Partial<IUsage.CtorOptions> = {}): IUsage.Item {
    return super.copy(newValuesObj) as IUsage.Item;
  }

  static get defaults() {
    return {
      source: '',
      origin: '',
    };
  }
}
