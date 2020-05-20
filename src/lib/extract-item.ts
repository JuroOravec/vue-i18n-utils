import cloneDeep from 'lodash.clonedeep';
import merge from 'lodash.merge';

import { Path, Index, mergeDeepWith } from './walk';
import type { AnyObj } from '../types';
import { createObjectPath } from './walk';
import { hashStringArray } from './hash';

export interface LocaleExtractsOptions {
  includeMissing?: boolean;
  missingValue?: any;
}

export interface IExtractItem {
  /**
   * Value contained by this instance, extracted from an object.
   */
  value: any;
  /**
   * Object path (obj.a.b.c) to the value.
   */
  path: Path;
  /**
   * Locale of the value stored by this instance.
   */
  locale: string;
  /**
   * Path to the file where the ExtractItem content originates from.
   */
  source: string;
  /**
   * If the parsed source file contained multiple content blocks (e.g. think
   * of XML with multiple tags, or JSON with array as top-level item),
   * blockIndex is the index of the content block from which the content
   * originates.
   */
  blockIndex: Index;
  /**
   * Identifier of the entity that created the ExtractItem instance.
   *
   * Since `blockIndex` may differ based on how the source was parsed,
   * this serves to distinguish if same `blockIndex` values are indeed
   * comparable.
   */
  origin: string;
}

export interface ExtractItemCtorOptions {
  value: any;
  path: Path;
  locale: string;
  source?: string;
  blockIndex?: Index;
  origin?: string;
}

export class ExtractItem implements IExtractItem {
  value: any;
  path: Path;
  locale: string;
  source: string;
  blockIndex: Index;
  origin: string;

  constructor({
    value,
    path,
    locale,
    source = '',
    blockIndex = 0,
    origin = '',
  }: ExtractItemCtorOptions) {
    this.value = value;
    this.path = path.slice();
    this.locale = locale;
    this.source = source;
    this.origin = origin;
    this.blockIndex = blockIndex;
  }

  /**
   * Hash of the path.
   */
  pathHash() {
    return hashStringArray(this.path);
  }

  /**
   * Hash of the properties that uniquely identify the item within the
   * translations object.
   *
   * The locale token considers following:
   * - Locale
   * - Message path
   */
  localeTokenHash() {
    return hashStringArray([this.locale, this.pathHash().toString()]);
  }

  /**
   * Hash of the properties that uniquely identify the source of the item.
   *
   * The source considers following:
   * - Item source file
   * - Entity that parsed the source file
   * - Content block within the source file
   */
  sourceHash() {
    return hashStringArray([
      this.source,
      this.origin,
      this.blockIndex.toString(),
    ]);
  }

  /**
   * Hash of the properties that uniquely identify the position of the item.
   *
   * The position considers following:
   * - Item source file
   * - Entity that parsed the source file
   * - Content block within the source file
   * - Path to the value within the parsed object
   */
  positionHash() {
    return hashStringArray([
      this.source,
      this.origin,
      this.blockIndex.toString(),
      this.pathHash().toString(),
    ]);
  }

  /**
   * Hash of the properties that uniquely identify the item.
   *
   * The ID considers following:
   * - Item source file
   * - Entity that parsed the source file
   * - Content block within the source file
   * - Locale of the value
   * - Path to the value within the parsed object
   */
  idHash() {
    return hashStringArray([
      this.source,
      this.origin,
      this.blockIndex.toString(),
      this.pathHash().toString(),
      this.locale,
    ]);
  }

  static defaults() {
    return {
      includeMissing: false,
      missingValue: null,
    };
  }
}

export function extractFromObject(
  obj: AnyObj,
  params: {
    locale: string;
    source?: string;
    blockIndex?: number;
    origin?: string;
  },
) {
  const { locale, source: filepath, origin, blockIndex } = params;
  const items: ExtractItem[] = [];
  mergeDeepWith(
    {
      onAssign: ({ value, path }) =>
        items.push(
          new ExtractItem({
            value,
            locale,
            path,
            source: filepath,
            origin,
            blockIndex,
          }),
        ),
    },
    obj,
  ).value;
  return items;
}

export function filterByLocale(
  extracts: ExtractItem[],
  locale: string,
  options: LocaleExtractsOptions = {},
) {
  const { includeMissing, missingValue } = merge(
    {},
    ExtractItem.defaults,
    options,
  );

  // Parse the extracts to construct a list of all keys, but with locale's
  // value where possible, or null if not
  const localeExtractsMap: Map<number, ExtractItem> = new Map();
  for (const extract of extracts) {
    const pathId = extract.pathHash();
    // Capture all items matching the locale
    if (extract.locale === locale) {
      localeExtractsMap.set(pathId, extract);
      continue;
    }
    // In case the locale is missing some entries which are present in other
    // locales, add the item from the other locale, and remove its value to
    // make it clear that the value is missing.
    if (includeMissing && !localeExtractsMap.has(pathId)) {
      const extractCopy = new ExtractItem(extract);
      extractCopy.value = missingValue;
      extractCopy.locale = locale;
      localeExtractsMap.set(pathId, extractCopy);
    }
  }
  return Array.from(localeExtractsMap.values());
}

export function objectFromExtracts(
  extracts: ExtractItem[],
  template: object = {},
) {
  const obj = cloneDeep(template);
  // Build the nested objects based on the items' paths
  extracts.forEach((item) => {
    const parentPath = item.path.slice(0, -1);
    const parent = createObjectPath(obj, [item.locale, ...parentPath]);
    const [key] = item.path.slice(-1);
    parent[key] = item;
  });
  return obj;
}
