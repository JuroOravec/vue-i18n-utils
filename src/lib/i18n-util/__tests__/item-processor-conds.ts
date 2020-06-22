import flatten = require('lodash.flatten');

import type { I_I18nUtil } from '../types';
import type { IDefinition } from '../../definition/types';
import type { IUsage } from '../../usage/types';
import { definitions, definitionsMissing } from './fixtures/definitions';
import {
  usageNoMatch,
  usageMatch,
  usageMatchSuperset,
  usageMatchSubset,
  usageSomeMatch,
} from './fixtures/usage';
import { uniqMap, mapUniq } from '../../util/array';
import { DefinitionItem } from '../../definition';
import { UsageItem } from '../../usage';
import { ItemArray } from '../../item';
import { KeyStats, KeyStatsEntry } from '../item-processor';
import { ItemProcessor, LoadedItemProcessor } from '../item-processor';
import {
  createItemProcessor,
  createLoadedItemProcessor,
} from './item-processor-helpers';
import { LoadedI18nUtil, I18nUtil } from '..';

/**
 * For each uniq path of unused UsageItem and each locale,
 * create DefinitionItem
 */
function missingDefs(usage: IUsage.Item[], locales: string[]) {
  return flatten([
    ...uniqMap(
      usage,
      (item) => item.pathHash,
      (item) =>
        locales.map(
          (locale) => new DefinitionItem({ path: item.path, locale }),
        ),
    ),
  ]);
}
/**
 * For each uniq path of undefined DefinitionItem and each locale,
 * create DefinitionItem
 */
function missingUsage(defs: IDefinition.Item[]) {
  return uniqMap(
    defs,
    (item) => item.pathHash,
    (item) => new UsageItem({ path: item.path }),
  );
}

function getKeys(defs: IDefinition.Item[] = [], usage: IUsage.Item[] = []) {
  return uniqMap(
    [...defs, ...usage],
    (item) => item.pathHash,
    (item) => new KeyStatsEntry({ path: item.path }),
  );
}

export type InstanceCondition = [
  string,
  typeof I18nUtil | typeof LoadedI18nUtil,
  () => I18nUtil | LoadedI18nUtil,
];

export const instanceConditions = [
  [ItemProcessor.name, ItemProcessor, createItemProcessor],
  [LoadedItemProcessor.name, LoadedI18nUtil, createLoadedItemProcessor],
  [I18nUtil.name, I18nUtil, () => createItemProcessor(I18nUtil)],
  [
    LoadedI18nUtil.name,
    LoadedI18nUtil,
    () => createLoadedItemProcessor(I18nUtil, LoadedI18nUtil),
  ],
] as InstanceCondition[];

export type ItemProcessorConditionData = {
  /**
   * Definition items used in the particular test
   */
  definitions: IDefinition.Item[];
  /**
   * Usage items used in the particular test
   */
  usage: IUsage.Item[];
  /**
   * Files from which Usage items can be extracted to be used in the
   * particular test (extracted items are expected to be the same as in
   * `usage` property).
   */
  usageInputFiles: IUsage.Item['source'][];
  /**
   * Expected result of `usageAnalyze` method to be used in the
   * particular test.
   */
  analysis: ReturnType<I_I18nUtil.I18nUtil['usageAnalyze']>;
  /**
   * Whether `usageValidate` should throw or not.
   */
  valid: boolean;
  /**
   * Expected result of `stats` method to be used in the
   * particular test.
   */
  stats: KeyStats;
};

export type ItemProcessorCondition = [string, ItemProcessorConditionData];

export const conditions: ItemProcessorCondition[] = [
  [
    'all empty on empty usage and definitions',
    {
      definitions: [],
      usage: [],
      usageInputFiles: [],
      analysis: {
        definitions: {
          missing: [],
          unused: [],
          used: [],
          duplicates: new Map(),
        },
        usage: { defined: [], undefined: [], missing: [] },
      },
      valid: true,
      stats: {
        locales: [],
        usage: [],
        definitions: [],
        keys: [],
        keysUnused: [],
        keysUndefined: [],
        keysIssues: [],
        usageDefined: [],
        usageUndefined: [],
        usageMissing: [],
        usageFiles: [],
        definitionsUsed: [],
        definitionsUnused: [],
        definitionsMissing: [],
        definitionsFiles: [],
      },
    },
  ],
  [
    'empty usage on empty usage',
    {
      definitions: definitions,
      usage: [],
      usageInputFiles: ['./fixtures/usage-empty.vue'].map((p) =>
        require.resolve(p),
      ),
      analysis: {
        definitions: {
          used: [],
          unused: definitions,
          missing: definitionsMissing,
          duplicates: new Map(),
        },
        usage: {
          defined: [],
          undefined: [],
          missing: missingUsage(definitions),
        },
      },
      valid: false,
      stats: {
        locales: ItemArray.uniqProp(definitions, 'locale'),
        usage: [],
        definitions: definitions,
        keys: getKeys(definitions),
        keysUnused: getKeys(definitions),
        keysUndefined: [],
        keysIssues: getKeys(
          // unused
          definitions,
        ),
        usageDefined: [],
        usageUndefined: [],
        usageMissing: missingUsage(definitions),
        usageFiles: [],
        definitionsUsed: [],
        definitionsUnused: definitions,
        definitionsMissing: definitionsMissing,
        definitionsFiles: ItemArray.uniqProp(definitions, 'source'),
      },
    },
  ],
  [
    'empty definitions on empty definitions',
    {
      definitions: [],
      usage: usageNoMatch,
      usageInputFiles: mapUniq(usageNoMatch, (i) => i.source),
      analysis: {
        definitions: {
          missing: missingDefs(usageNoMatch, []),
          unused: [],
          used: [],
          duplicates: new Map(),
        },
        usage: { defined: [], undefined: usageNoMatch, missing: [] },
      },
      valid: false,
      stats: {
        locales: [],
        usage: usageNoMatch,
        definitions: [],
        keys: getKeys([], usageNoMatch),
        keysUnused: [],
        keysUndefined: getKeys([], usageNoMatch),
        keysIssues: getKeys(
          [],
          // undefined
          usageNoMatch,
        ),
        usageDefined: [],
        usageUndefined: usageNoMatch,
        usageMissing: [],
        usageFiles: ItemArray.uniqProp(usageNoMatch, 'source'),
        definitionsUsed: [],
        definitionsUnused: [],
        definitionsMissing: missingDefs(usageNoMatch, []),
        definitionsFiles: [],
      },
    },
  ],
  [
    'empty match on no overlap',
    {
      definitions: definitions,
      usage: usageNoMatch,
      usageInputFiles: mapUniq(usageNoMatch, (i) => i.source),
      analysis: {
        definitions: {
          used: [],
          unused: definitions,
          missing: [
            // missing based on usage items
            ...missingDefs(
              usageNoMatch,
              ItemArray.uniqProp(definitions, 'locale'),
            ),
            // missing def locale variants based on def items
            ...definitionsMissing,
          ],
          duplicates: new Map(),
        },
        usage: {
          defined: [],
          undefined: usageNoMatch,
          missing: missingUsage(definitions),
        },
      },
      valid: false,
      stats: {
        locales: ItemArray.uniqProp(definitions, 'locale'),
        usage: usageNoMatch,
        definitions: definitions,
        keys: getKeys(definitions, usageNoMatch),
        keysUnused: getKeys(definitions),
        keysUndefined: getKeys([], usageNoMatch),
        keysIssues: getKeys(
          // unused
          definitions,
          // undefined
          usageNoMatch,
        ),
        usageDefined: [],
        usageUndefined: usageNoMatch,
        usageMissing: missingUsage(definitions),
        usageFiles: ItemArray.uniqProp(usageNoMatch, 'source'),
        definitionsUsed: [],
        definitionsUnused: definitions,
        definitionsMissing: [
          // missing based on usage items
          ...missingDefs(
            usageNoMatch,
            ItemArray.uniqProp(definitions, 'locale'),
          ),
          // missing def locale variants based on def items
          ...definitionsMissing,
        ],
        definitionsFiles: ItemArray.uniqProp(definitions, 'source'),
      },
    },
  ],
  [
    'correct items on definitions subset of usage',
    {
      definitions: definitions,
      usage: usageMatchSuperset,
      usageInputFiles: mapUniq(usageMatchSuperset, (i) => i.source),
      analysis: {
        definitions: {
          used: definitions,
          unused: [],
          missing: [
            ...missingDefs(
              usageNoMatch,
              ItemArray.uniqProp(definitions, 'locale'),
            ),
            ...definitionsMissing,
          ],
          duplicates: new Map(),
        },
        usage: {
          defined: usageMatch,
          undefined: usageNoMatch,
          missing: [],
        },
      },
      valid: false,
      stats: {
        locales: ItemArray.uniqProp(definitions, 'locale'),
        usage: usageMatchSuperset,
        definitions: definitions,
        keys: getKeys(definitions, usageMatchSuperset),
        keysUnused: [],
        keysUndefined: getKeys([], usageNoMatch),
        keysIssues: getKeys(
          // missing based on usage items
          [
            ...missingDefs(
              usageNoMatch,
              ItemArray.uniqProp(definitions, 'locale'),
            ),
            // missing def locale variants based on def items
            ...definitionsMissing,
          ],
          // undefined
          usageNoMatch,
        ),
        usageDefined: usageMatch,
        usageUndefined: usageNoMatch,
        usageMissing: [],
        usageFiles: ItemArray.uniqProp(usageMatchSuperset, 'source'),
        definitionsUsed: definitions,
        definitionsUnused: [],
        definitionsMissing: [
          ...missingDefs(
            usageNoMatch,
            ItemArray.uniqProp(definitions, 'locale'),
          ),
          ...definitionsMissing,
        ],
        definitionsFiles: ItemArray.uniqProp(definitions, 'source'),
      },
    },
  ],
  [
    'correct items on usage subset of definitions',
    {
      definitions: definitions,
      usage: usageMatchSubset,
      usageInputFiles: mapUniq(usageMatchSubset, (i) => i.source),
      analysis: {
        definitions: {
          used: definitions.filter(
            (i) => i.path[0] === 'message' && i.path[1] === 'hi',
          ),
          unused: definitions.filter(
            (i) => !(i.path[0] === 'message' && i.path[1] === 'hi'),
          ),
          missing: [
            ...missingDefs([], ItemArray.uniqProp(definitions, 'locale')),
            ...definitionsMissing,
          ],
          duplicates: new Map(),
        },
        usage: {
          defined: usageMatchSubset,
          undefined: [],
          missing: missingUsage(
            definitions.filter(
              (i) => !(i.path[0] === 'message' && i.path[1] === 'hi'),
            ),
          ),
        },
      },
      valid: false,
      stats: {
        locales: ItemArray.uniqProp(definitions, 'locale'),
        usage: usageMatchSubset,
        definitions: definitions,
        keys: getKeys(definitions, usageMatchSubset),
        keysUnused: getKeys(
          definitions.filter(
            (i) => !(i.path[0] === 'message' && i.path[1] === 'hi'),
          ),
        ),
        keysUndefined: [],
        keysIssues: getKeys([
          // unused
          ...definitions.filter(
            (i) => !(i.path[0] === 'message' && i.path[1] === 'hi'),
          ),
          // missing based on usage items
          ...missingDefs([], ItemArray.uniqProp(definitions, 'locale')),
          // missing def locale variants based on def items
          ...definitionsMissing,
        ]),
        usageDefined: usageMatchSubset,
        usageUndefined: [],
        usageMissing: missingUsage(
          definitions.filter(
            (i) => !(i.path[0] === 'message' && i.path[1] === 'hi'),
          ),
        ),
        usageFiles: ItemArray.uniqProp(usageMatchSubset, 'source'),
        definitionsUsed: definitions.filter(
          (i) => i.path[0] === 'message' && i.path[1] === 'hi',
        ),
        definitionsUnused: definitions.filter(
          (i) => !(i.path[0] === 'message' && i.path[1] === 'hi'),
        ),
        definitionsMissing: [
          ...missingDefs([], ItemArray.uniqProp(definitions, 'locale')),
          ...definitionsMissing,
        ],
        definitionsFiles: ItemArray.uniqProp(definitions, 'source'),
      },
    },
  ],
  [
    'correct items on some overlap',
    {
      definitions: definitions,
      usage: usageSomeMatch,
      usageInputFiles: mapUniq(usageSomeMatch, (i) => i.source),
      analysis: {
        definitions: {
          used: definitions.filter(
            (i) => i.path[0] === 'message' && i.path[1] === 'hi',
          ),
          unused: definitions.filter(
            (i) => !(i.path[0] === 'message' && i.path[1] === 'hi'),
          ),
          missing: [
            ...missingDefs(
              usageNoMatch,
              ItemArray.uniqProp(definitions, 'locale'),
            ),
            ...definitionsMissing,
          ],
          duplicates: new Map(),
        },
        usage: {
          defined: usageMatchSubset,
          undefined: usageNoMatch,
          missing: missingUsage(
            definitions.filter(
              (i) => !(i.path[0] === 'message' && i.path[1] === 'hi'),
            ),
          ),
        },
      },
      valid: false,
      stats: {
        locales: ItemArray.uniqProp(definitions, 'locale'),
        usage: usageSomeMatch,
        definitions: definitions,
        keys: getKeys(definitions, usageSomeMatch),
        keysUnused: getKeys(
          definitions.filter(
            (i) => !(i.path[0] === 'message' && i.path[1] === 'hi'),
          ),
        ),
        keysUndefined: getKeys([], usageNoMatch),
        keysIssues: getKeys(
          [
            // unused
            ...definitions.filter(
              (i) => !(i.path[0] === 'message' && i.path[1] === 'hi'),
            ),
            // missing based on usage items
            ...missingDefs(
              usageNoMatch,
              ItemArray.uniqProp(definitions, 'locale'),
            ),
            // missing def locale variants based on def items
            ...definitionsMissing,
          ],
          // undefined
          usageNoMatch,
        ),
        usageDefined: usageMatchSubset,
        usageUndefined: usageNoMatch,
        usageMissing: missingUsage(
          definitions.filter(
            (i) => !(i.path[0] === 'message' && i.path[1] === 'hi'),
          ),
        ),
        usageFiles: ItemArray.uniqProp(usageSomeMatch, 'source'),
        definitionsUsed: definitions.filter(
          (i) => i.path[0] === 'message' && i.path[1] === 'hi',
        ),
        definitionsUnused: definitions.filter(
          (i) => !(i.path[0] === 'message' && i.path[1] === 'hi'),
        ),
        definitionsMissing: [
          ...missingDefs(
            usageNoMatch,
            ItemArray.uniqProp(definitions, 'locale'),
          ),
          ...definitionsMissing,
        ],
        definitionsFiles: ItemArray.uniqProp(definitions, 'source'),
      },
    },
  ],
];
