import type { I_I18nUtil } from '../types';
import { UsageItem } from '../../usage';
import { ItemProcessorConditionData } from './item-processor-conds';
import {
  validateItems,
  validateTypedArr,
  validateKeys,
} from './item-processor-helpers';

export function testUsageAnalyze(
  fn: { call: () => ReturnType<I_I18nUtil.ItemProcessor['usageAnalyze']> },
  expected: ItemProcessorConditionData['analysis'],
) {
  test('result', () => {
    expect(fn.call()).toBeDefined();
    expect(fn.call().definitions).toBeDefined();
    expect(fn.call().usage).toBeDefined();
  });
  test('result.definitions.missing', () =>
    validateItems(fn.call().definitions.missing, expected.definitions.missing));
  test('result.definitions.unused', () =>
    validateItems(fn.call().definitions.unused, expected.definitions.unused));
  test('result.definitions.used', () =>
    validateItems(fn.call().definitions.used, expected.definitions.used));
  test('result.usage.missing', () =>
    validateItems(fn.call().usage.missing, expected.usage.missing, UsageItem));
  test('result.usage.defined', () =>
    validateItems(fn.call().usage.defined, expected.usage.defined, UsageItem));
  test('result.usage.undefined', () =>
    validateItems(
      fn.call().usage.undefined,
      expected.usage.undefined,
      UsageItem,
    ));
}

export function testUsageValidate(
  fn: { call: () => void },
  valid: ItemProcessorConditionData['valid'],
) {
  test(valid ? 'does not throw' : 'throws', () => {
    if (valid) return expect(fn.call).not.toThrow();
    return expect(fn.call).toThrow();
  });
}

export function testStats(
  fn: { call: () => ReturnType<I_I18nUtil.ItemProcessor['stats']> },
  expected: ItemProcessorConditionData['stats'],
) {
  test('result', () => expect(fn.call()).toBeDefined());
  test('result.definitions', () =>
    validateItems(fn.call().definitions, expected.definitions));
  test('result.definitionsUsed', () =>
    validateItems(fn.call().definitionsUsed, expected.definitionsUsed));
  test('result.definitionsUnused', () =>
    validateItems(fn.call().definitionsUnused, expected.definitionsUnused));
  test('result.definitionsMissing', () =>
    validateItems(fn.call().definitionsMissing, expected.definitionsMissing));
  test('result.definitionsFiles', () =>
    validateTypedArr(
      fn.call().definitionsFiles,
      expected.definitionsFiles,
      'string',
    ));

  test('result.usage', () =>
    validateItems(fn.call().usage, expected.usage, UsageItem));
  test('result.usageDefined', () =>
    validateItems(fn.call().usageDefined, expected.usageDefined, UsageItem));
  test('result.usageUndefined', () =>
    validateItems(
      fn.call().usageUndefined,
      expected.usageUndefined,
      UsageItem,
    ));
  test('result.usageMissing', () =>
    validateItems(fn.call().usageMissing, expected.usageMissing, UsageItem));
  test('result.usageFiles', () =>
    validateTypedArr(fn.call().usageFiles, expected.usageFiles, 'string'));

  test('result.keys', () => validateKeys(fn.call().keys, expected.keys));
  test('result.keysIssues', () =>
    validateKeys(fn.call().keysIssues, expected.keysIssues));

  test('result.keysUndefined', () =>
    validateKeys(fn.call().keysUndefined, expected.keysUndefined));
  test('result.keysUnused', () =>
    validateKeys(fn.call().keysUnused, expected.keysUnused));
}
