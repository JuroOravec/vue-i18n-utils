import type { AnyObj } from '../../types';
import type { I_I18nUtil } from './types';
import type { IDefinition } from '../definition/types';
import type { IUsage } from '../usage/types';
import type { I_Item } from '../item/types';
import { ItemArray } from '../item';
import { DefinitionItem, DefinitionArray } from '../definition';
import { UsageItem } from '../usage';

type DefItem = IDefinition.Item;
type UseItem = IUsage.Item;

export class LoaderBase<
  T extends I_I18nUtil.I18nUtil,
  R extends any,
  I extends I_Item.Item,
  CTX extends I_I18nUtil.Loader = I_I18nUtil.Loader
> {
  i18nUtil: T;
  callback: (items: I[], ctx: CTX, ...args: any[]) => R;

  constructor(options: {
    i18nUtil: T;
    callback: (items: I[], ctx: CTX, ...args: any[]) => R;
  }) {
    const { i18nUtil, callback } = options || {};
    this.i18nUtil = i18nUtil;
    this.callback = callback;
  }

  loadFromItems(items: I_Item.ItemArrayLike<I>) {
    return this.callback([...items], this as any);
  }

  loadFromObjects(
    objects: AnyObj[],
    options: I_Item.FromObjectOptions<I> = {},
  ) {
    const items = ItemArray.fromObjects<I>(objects, options);
    return this.callback([...items], this as any);
  }
}

export class DefinitionLoader<
  T extends I_I18nUtil.I18nUtil = I_I18nUtil.I18nUtil,
  R extends any = any
> extends LoaderBase<T, R, DefItem, I_I18nUtil.DefinitionLoader<T, R>>
  implements I_I18nUtil.DefinitionLoader<T, R> {
  loadFromFiles(
    paths: any[],
    options: I_I18nUtil.DefinitionOptions & I_I18nUtil.ResolvePathsOptions = {},
  ) {
    const filepaths = this.i18nUtil.resolvePaths(paths, options);
    const defs = this.i18nUtil.definitions(filepaths, options);
    return this.callback(defs, this as any);
  }
  loadFromObjects(
    objects: AnyObj[],
    options: I_Item.FromObjectOptions<DefItem> = {},
  ) {
    return super.loadFromObjects(objects, {
      ...DefinitionArray.defaults,
      itemClass: DefinitionItem as any,
      ...options,
    });
  }
}

export class UsageLoader<
  T extends I_I18nUtil.I18nUtil = I_I18nUtil.I18nUtil,
  R extends any = any
> extends LoaderBase<T, R, UseItem, I_I18nUtil.UsageLoader<T, R>>
  implements I_I18nUtil.UsageLoader<T, R> {
  loadFromFiles(
    paths: any[],
    options: I_I18nUtil.UsageOptions & I_I18nUtil.ResolvePathsOptions = {},
  ) {
    const filepaths = this.i18nUtil.resolvePaths(paths, options);
    const usage = this.i18nUtil.usage(filepaths, options);
    return this.callback(usage, this as any);
  }
  loadFromObjects(
    objects: AnyObj[],
    options: I_Item.FromObjectOptions<UsageItem> = {},
  ) {
    return super.loadFromObjects(objects, {
      itemClass: UsageItem as any,
      ...options,
    });
  }
}
