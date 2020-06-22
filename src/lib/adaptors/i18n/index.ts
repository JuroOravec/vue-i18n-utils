import isObject from 'lodash.isobject';
import merge from 'lodash.merge';

import type { AnyObj } from '../../../types';
import type { I_Item } from '../../item/types';
import type { IAdaptorJsonYaml } from '../json-yaml/types';
import {
  JsonYamlAdaptor,
  JsonYamlContentGroup,
  FileSystem,
} from '../json-yaml/index';
import { DefinitionArray, DefinitionItem } from '../../definition';
import { mergeDeepWith } from '../../util/walk';
import { ItemArray, Item } from '../../item';
import { UsageItem } from '../../usage';
import { IContentGroup } from '../../content-group';
import { safeWrite } from '../../util/fs';

export type ExportItem<T extends I_Item.Item = I_Item.Item> = T & {
  $i18n: 'definition' | 'usage' | 'item';
  $data: I_Item.Item;
};

export class I18nItemArray extends DefinitionArray {
  static fromObjects<T extends I_Item.Item, CtorOpts extends object = object>(
    objs: AnyObj[],
    options: I_Item.FromObjectOptions<T> & CtorOpts,
  ) {
    const { itemClass, usageItemClass } = merge({}, this.defaults, options);
    const deserObjs = objs.map(
      (obj) =>
        mergeDeepWith(
          {
            onBranch: ({ value }) => {
              const itemType = value['$i18n'];
              if (!itemType) return value;
              const klass =
                itemType === 'definition'
                  ? itemClass
                  : itemType === 'usage'
                  ? usageItemClass
                  : itemType === 'item'
                  ? Item
                  : null;
              if (klass !== null) return new klass(value['$data']);
              throw Error(
                `Unknown item type set for property '$i18n': '${itemType}'`,
              );
            },
            // Treat Item or ItemArray as values
            isBranch: ({ value }) =>
              isObject(value) &&
              !(value instanceof Item || value instanceof ItemArray),
          },
          obj,
        ).value,
    );
    return super.fromObjects<T, CtorOpts>(deserObjs, options) as ItemArray<T>;
  }

  /**
   * Prepare items for export by I18nAdaptor
   */
  static exportItems<T extends I_Item.Item>(items: T[], target: string) {
    return items.map((item, i) => {
      const itemType =
        item instanceof DefinitionItem
          ? 'definition'
          : item instanceof UsageItem
          ? 'usage'
          : item instanceof Item
          ? 'item'
          : null;
      if (!itemType) {
        throw Error(
          `Export items must be instances of 'Item', got ${item} instead.`,
        );
      }
      const itemCopy = item.copy({
        source: target,
        sourceScope: undefined,
      } as any);
      Object.defineProperties(itemCopy, {
        $i18n: { enumerable: true, writable: false, value: itemType },
        $data: {
          enumerable: true,
          writable: false,
          value: { ...item },
        },
        toJSON: {
          enumerable: true,
          writable: false,
          value: function () {
            const { $i18n, $data } = this;
            return { $i18n, $data };
          },
        },
      });
      return itemCopy;
    }) as T[];
  }

  static get defaults() {
    return {
      ...super.defaults,
      usageItemClass: UsageItem,
    };
  }
}

// Do not consider file content if we are writing to an existing file
export class I18nContentGroup extends JsonYamlContentGroup {
  static fromFile(filepath: string, options: IContentGroup.CtorOptions = {}) {
    return new this({ ...options, filepath, content: '' });
  }
}

export class I18nAdaptor extends JsonYamlAdaptor {
  writer(
    items: I_Item.Item[],
    options: IAdaptorJsonYaml.WriterOptions & { asArray?: boolean } = {},
  ) {
    const parsedOptions = merge({}, this.constructor.defaults, options);
    const {
      simple = true,
      throwOnDuplicate = false,
      asArray = false,
      abortOnError,
    } = parsedOptions;

    // Exporting as array doesn't require most of the writing logic, so bypass
    // it and export items straight out.
    if (asArray) {
      const defsByFilepaths = this._groupBySource(items as any[]);
      safeWrite(options, (fileSys) => {
        for (const [filepath, data] of Object.entries(defsByFilepaths)) {
          const preppedData = simple ? data.map((i) => i.value) : data;
          const serContent = this._serialize(
            filepath,
            preppedData,
            parsedOptions,
          );
          this._write(filepath, serContent, {
            fs: fileSys as FileSystem,
            abortOnError,
          });
        }
      });
      return;
    }

    return super.writer(items as any, {
      ...options,
      simple,
      throwOnDuplicate,
      fileMatchLocale: undefined,
    });
  }
  static get defaults() {
    return {
      ...super.defaults,
      itemArrayClass: I18nItemArray,
      contentGroupClass: I18nContentGroup,
    };
  }
}
