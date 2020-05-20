import xmlParser from 'fast-xml-parser';
import flattenDeep from 'lodash.flattendeep';
import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

import type { AnyObj } from '../types';
import type { IParser } from './i18n-util-type';
import theDebug from './debug';
import { ExtractItem, extractFromObject } from './extract-item';
import { FileAdaptorCollection } from './file-adaptor';

const debug = (msg: string) => theDebug(`[file-adaptor-vue] ${msg}`);

export interface Options {
  parsers?: FileAdaptorCollection;
}

const defaultParsers = new FileAdaptorCollection({
  collection: {
    json: {
      patterns: [/json/iu],
      methods: {
        parser: (data, opts) => JSON.parse(data, opts),
      },
    },
    yaml: {
      patterns: [/ya?ml/iu],
      methods: {
        parser: (data, opts) => yaml.safeLoad(data, opts),
      },
    },
  },
});

/**
 * Normalize i18n block from xmlParser.
 *
 * Returns copy of the original block.
 *
 * Fetches block content if the block has `src` attribute and filepath is given
 */
function readBlocks(filepath: string): { [key: string]: any }[] {
  debug(`Reading file '${filepath}'`);
  const content = fs.readFileSync(filepath, 'utf-8');
  const { i18n } = xmlParser.parse(content, {
    ignoreAttributes: false,
  });
  // i18n can be an array if multiple blocks are defined.
  // Return empty array if i18n is undefined.
  const i18nArr = Array.isArray(i18n) ? i18n : i18n ? [i18n] : [];
  // If the XML tag didn't have any attributes, it is returned as a bare
  // string, so wrap those
  return i18nArr.map((i18nItem) =>
    typeof i18nItem === 'string' ? { '#text': i18nItem } : i18nItem,
  );
}

function normalizeBlock<T extends AnyObj>(
  block: T,
  { filepath }: { filepath?: string },
) {
  debug(`Normalizing block from '${filepath}'`);
  const text =
    block['#text'] ||
    (block['@_src'] && filepath
      ? fs.readFileSync(path.resolve(filepath, block['@_src']), 'utf-8')
      : block['#text']);
  return {
    ...block,
    '#text': text,
    source: filepath,
  } as T & { '#text': string; source: string };
}

function parseBlock<T extends AnyObj>(
  block: T,
  { parsers = defaultParsers }: { parsers?: FileAdaptorCollection } = {},
) {
  debug(`Parsing file '${block.path}'`);
  const lang = block['@_lang'] ?? 'json';
  const textBlock = block['#text'] ?? block;
  const {
    methods: { parser },
  } = parsers.resolve(lang)!;
  const parsedContent = parser!(textBlock);
  const contentByLocales = block['@_locale']
    ? { [block['@_locale']]: parsedContent }
    : parsedContent;
  return Object.entries(contentByLocales).map(
    ([locale, content]: [string, any]) => {
      return { ...block, value: content, locale };
    },
  );
}

/**
 * Extracts and merges data from i18n tags (<i18n></i18n>) from files specified
 * by the glob patterns.
 *
 * Returns two objects:
 * - `value` - the object with merged values
 * - `origin` - same object as `value`, but its values are objects describing
 *   which file and i18n tag supplied to given value
 *
 * Throws if multiple objects parsed from globbed files try to define the same
 * property. In other words, each value must have a unique path (e.g.
 * obj.x.y.z).
 */
export const parserVue = function (
  filepaths: string[],
  options: Options = {},
): ExtractItem[] {
  const { parsers = defaultParsers } = options;
  const nestedFragments = filepaths.map((filepath) =>
    readBlocks(filepath)
      .map((block) => normalizeBlock(block, { filepath }))
      .map((block) => parseBlock(block, { parsers }))
      .map((blocksByLocales, blockIndex) =>
        blocksByLocales.map((block) =>
          extractFromObject(block.value, { ...block, blockIndex }),
        ),
      ),
  );
  return flattenDeep(nestedFragments);
} as IParser<Options>;
