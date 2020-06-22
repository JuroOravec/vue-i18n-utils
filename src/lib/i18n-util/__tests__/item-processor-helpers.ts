import { DefinitionItem } from '../../definition';
import { Item } from '../../item';
import {
  KeyStatsEntry,
  ItemProcessor,
  LoadedItemProcessor,
} from '../item-processor';
import { definitions } from './fixtures/definitions';

export function validateArr(arr: any[], expected: any[]) {
  expect(arr).toBeDefined();
  expect(Array.isArray(arr)).toBeTruthy();
  expect(arr).toHaveLength(expected.length);
}

export function validateTypedArr(
  arr: any[],
  expected: any[],
  type:
    | 'string'
    | 'number'
    | 'object'
    | 'null'
    | 'undefined'
    | 'function'
    | 'symbol',
) {
  validateArr(arr, expected);
  for (const item of arr) {
    expect(typeof item).toBe(type);
    expect(expected).toContain(item);
  }
}

export function validateItems(
  definitions: Item[],
  expected: Item[],
  klass: typeof Item = DefinitionItem,
) {
  validateArr(definitions, expected);
  const expectedIds = expected.map((def) => def.localeTokenHash);
  for (const def of definitions) {
    expect(def).toBeInstanceOf(klass);
    expect(expectedIds).toContain(def.localeTokenHash);
  }
}

export function validateKeys(keys: KeyStatsEntry[], expected: KeyStatsEntry[]) {
  validateArr(keys, expected);
  const expectedPaths = expected.map((key) => key.path);
  for (const key of keys) {
    expect(key).toBeInstanceOf(KeyStatsEntry);
    expect(expectedPaths).toContainEqual(key.path);
  }
}

export function createItemProcessor(
  klass: typeof ItemProcessor = ItemProcessor,
) {
  return new klass();
}

export function createLoadedItemProcessor(
  klass: typeof ItemProcessor = ItemProcessor,
  loadedKlass: typeof LoadedItemProcessor = LoadedItemProcessor,
) {
  const i18nUtil = createItemProcessor(klass);
  const loadedI18nUtil = new loadedKlass({
    ...i18nUtil,
    i18nUtil: i18nUtil as any,
    definitions: definitions,
  });
  return loadedI18nUtil;
}
