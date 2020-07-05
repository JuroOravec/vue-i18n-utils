import type { IDefinition } from '../../definition/types';
import type { I_Item } from '../../item/types';
import type { IUsage } from '../../usage/types';
import type { I_I18nUtil } from '../types';
import { definitions } from './fixtures/definitions';
import { usageMatch, usageNoMatch, usageMatchSubset } from './fixtures/usage';
import { ItemArray } from '../../item';
import {
  simple,
  expanded,
  expandedMerged,
} from './fixtures/definition-objects';

export interface LoaderCond {
  description: string;
  items: I_Item.Item[];
  files?: string[];
  objects?: any[];
  options?: I_I18nUtil.ResolvePathsOptions & I_Item.FromObjectOptions;
  throws?: boolean;
}

export interface DefLoaderCond extends LoaderCond {
  items: IDefinition.Item[];
  options?: LoaderCond['options'] & I_I18nUtil.DefinitionOptions;
}

export interface UseLoaderCond extends LoaderCond {
  items: IUsage.Item[];
  options?: LoaderCond['options'] & I_I18nUtil.UsageOptions;
}

export const definitionConditions: DefLoaderCond[] = [
  {
    description: 'empty',
    items: [],
    files: [],
    objects: [],
  },
  {
    description: 'invalid sources',
    items: [],
    files: ['some-nonsense.path', module.filename],
    objects: [[], null, 22],
    throws: true,
  },
  {
    description: 'valid sources that do not produce any items',
    items: [],
    files: ['./fixtures/usage-empty.vue'].map((p) => require.resolve(p)),
    objects: [{ some: { path: {} } }, {}],
    throws: false,
  },
  {
    description: 'valid sources',
    items: definitions,
    files: ItemArray.uniqProp(definitions, 'source'),
  },
  {
    description: 'valid sources (simple object)',
    items: definitions,
    files: ItemArray.uniqProp(definitions, 'source'),
    objects: [simple],
  },
  {
    description: 'valid sources (expanded object)',
    items: definitions,
    objects: [expanded],
  },
  {
    description: 'valid sources (merged items object)',
    items: definitions,
    objects: [expandedMerged],
    options: {
      throwOnDuplicate: false,
    },
  },
  {
    description: 'mixed multiple valid and valid-empty sources',
    items: definitions,
    files: [
      './fixtures/usage-empty.vue',
      ...ItemArray.uniqProp(definitions, 'source'),
    ],
    objects: [
      { en: { message: { hello: '', hi: '' } } },
      { ja: simple.ja, de: simple.de },
      {},
    ],
  },
];

export const usageConditions: UseLoaderCond[] = [
  {
    description: 'empty',
    items: [],
    files: [],
    objects: [],
    options: {},
    throws: false,
  },
  {
    description: 'invalid sources',
    items: [],
    files: ['some-nonsense.path', module.filename],
    objects: [null, 22],
    throws: true,
  },
  {
    description: 'valid sources that do not produce any items',
    items: [],
    files: ['./fixtures/usage-empty.vue'].map((p) => require.resolve(p)),
    objects: [{ some: { path: {} } }, {}],
  },
  {
    description: 'valid sources',
    items: usageMatch,
    files: ItemArray.uniqProp(usageMatch, 'source'),
  },
  {
    description: 'valid sources (from objects)',
    items: usageMatch.map((item) => item.copy({ locale: 'test' })),
    objects: [
      { test: { message: { hello: '' } } },
      { test: { message: { hi: '' } } },
      { test: { message: { hello: '', hi: '' } } },
      {},
    ],
    options: { throwOnDuplicate: false },
  },
  {
    description: 'mixed multiple valid and valid-empty sources',
    items: [...usageMatch, ...usageNoMatch, ...usageMatchSubset],
    files: [
      './fixtures/usage-empty.vue',
      ...ItemArray.uniqProp(
        [...usageMatch, ...usageNoMatch, ...usageMatchSubset],
        'source',
      ),
    ],
  },
  {
    description: 'mixed multiple valid and valid-empty sources (from objects)',
    items: [...usageMatch, ...usageNoMatch, ...usageMatchSubset].map((item) =>
      item.copy({ locale: '*' }),
    ),
    objects: [
      { message: { hello: '' } },
      { message: { hi: '' } },
      { message: { hi: '' } },
      { message: { hi: '' } },
      { message: { hello: '', hi: '' } },
      { message: { a: '', b: '', c: '', d: '', e: '' } },
      { message: { c: '', d: '' } },
    ],
    options: {
      locale: '*',
      throwOnDuplicate: false,
    },
  },
];
