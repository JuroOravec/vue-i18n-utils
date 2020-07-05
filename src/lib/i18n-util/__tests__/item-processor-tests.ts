import type { I_I18nUtil } from '../types';
import { UsageItem } from '../../usage';
import { ItemProcessorCondition } from './item-processor-conds';
import {
  validateItems,
  validateTypedArr,
  validateKeys,
} from './item-processor-helpers';

export function testUsageAnalyze(
  fn: { call: () => ReturnType<I_I18nUtil.ItemProcessor['usageAnalyze']> },
  expected: Exclude<ItemProcessorCondition['analysis'], Promise<any>>,
) {
  test('result', async () => {
    const result = await fn.call();

    expect(result).toBeDefined();
    expect(result.definitions).toBeDefined();
    expect(result.usage).toBeDefined();

    validateItems(result.definitions.missing, expected.definitions.missing);
    validateItems(result.definitions.unused, expected.definitions.unused);
    validateItems(result.definitions.used, expected.definitions.used);

    validateItems(result.usage.missing, expected.usage.missing, UsageItem);
    validateItems(result.usage.defined, expected.usage.defined, UsageItem);
    validateItems(result.usage.undefined, expected.usage.undefined, UsageItem);
  });
}

export function testUsageValidate(
  fn: { call: () => void | Promise<void> },
  throws: ItemProcessorCondition['throws'],
) {
  test(throws ? 'throws' : 'does not throw', async () => {
    let res;

    // Note: expect(...).resolves/rejects don't work with this result
    // so has to be done manually
    try {
      res = await fn.call();
      if (throws) fail('Expected to fail');
    } catch (e) {
      if (!throws) fail(e);
      return;
    }

    expect(res).toBe(undefined);
  });
}

export function testStats(
  fn: {
    call: () =>
      | ReturnType<I_I18nUtil.ItemProcessor['stats']>
      | Promise<ReturnType<I_I18nUtil.ItemProcessor['stats']>>;
  },
  expected: ItemProcessorCondition['stats'],
) {
  test('result', async () => {
    const result = await fn.call();

    expect(result).toBeDefined();

    validateItems(result.definitions, expected.definitions);
    validateItems(result.definitionsUsed, expected.definitionsUsed);
    validateItems(result.definitionsUnused, expected.definitionsUnused);
    validateItems(result.definitionsMissing, expected.definitionsMissing);
    validateTypedArr(
      result.definitionsFiles,
      expected.definitionsFiles,
      'string',
    );

    validateItems(result.usage, expected.usage, UsageItem);
    validateItems(result.usageDefined, expected.usageDefined, UsageItem);
    validateItems(result.usageUndefined, expected.usageUndefined, UsageItem);
    validateItems(result.usageMissing, expected.usageMissing, UsageItem);
    validateTypedArr(result.usageFiles, expected.usageFiles, 'string');

    validateKeys(result.keys, expected.keys);
    validateKeys(result.keysIssues, expected.keysIssues);
    validateKeys(result.keysUndefined, expected.keysUndefined);
    validateKeys(result.keysUnused, expected.keysUnused);
  });
}
