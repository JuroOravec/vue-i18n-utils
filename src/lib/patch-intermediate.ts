import isObject from 'lodash.isobject';
import intersectionWith from 'lodash.intersectionwith';
import merge from 'lodash.merge';

import type {
  IPatchIntermediate,
  IPatchIntermediateOptions as Options,
  PTPB,
  PTP,
  TPB,
  TP,
} from './patch-intermediate-type';
import type { DefaultProps, AsObject, AnyObj } from '../types';
import { deepWalk, DeepObject } from './walk';
import { ExtractItem } from './extract-item';

export class PatchIntermediate<
  Params extends PTPB = PTP,
  T extends TPB = Params extends infer X ? DefaultProps<AsObject<X>, TP> : never
> implements IPatchIntermediate {
  constructor(
    public i18nUtil: T['i18nUtil'],
    public sourceExtracts: ExtractItem[],
    public options: Options<T>,
  ) {}

  toTargetsByExtracts(extracts: ExtractItem[], options: Options<T> = {}) {
    const extractPairs: [ExtractItem, ExtractItem][] = [];
    intersectionWith(extracts, this.sourceExtracts, (item1, item2) => {
      if (item1.localeTokenHash() === item2.localeTokenHash()) {
        extractPairs.push([item1, item2]);
        return true;
      }
      return false;
    });
    const updatedExtracts = extractPairs.map(
      ([targetExtract, sourceExtract]) => {
        const klass = targetExtract.constructor as typeof ExtractItem;
        const extractCopy = new klass(targetExtract);
        extractCopy.value = sourceExtract.value;
        return extractCopy;
      },
    );
    const parsedOpts = this.effectiveOptions(options);
    this.i18nUtil.patch(updatedExtracts, parsedOpts);
  }

  toTargetsByObjects(objects: DeepObject[], options: Options<T> = {}) {
    const extracts: ExtractItem[] = [];
    objects.forEach((obj) =>
      deepWalk(
        {
          onLeaf: ({ value }) => extracts.push(value),
          // Treat ExtractItem entries as values
          isBranch: ({ value }) =>
            isObject(value) && !(value instanceof ExtractItem),
        },
        obj,
      ),
    );
    this.toTargetsByExtracts(extracts, options);
  }

  toTargetsByFiles(paths: string[], options: Options<T> = {}) {
    const extracts = this.i18nUtil.extract(paths, options);
    this.toTargetsByExtracts(extracts, options);
  }

  effectiveOptions<O extends AnyObj>(options: O = {} as O) {
    return merge({}, this.options, options);
  }
}
