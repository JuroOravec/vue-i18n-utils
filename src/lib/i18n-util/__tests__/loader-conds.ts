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
  items: I_Item.Item[];
  files?: string[];
  objects?: any[];
  options?: I_I18nUtil.ResolvePathsOptions & I_Item.FromObjectOptions;
  throws?: boolean;
}

export type LoaderParam = [string, LoaderCond];

export interface DefLoaderCond extends LoaderCond {
  items: IDefinition.Item[];
  options?: LoaderCond['options'] & I_I18nUtil.DefinitionOptions;
}
export type DefLoaderParam = [string, DefLoaderCond];

export interface UseLoaderCond extends LoaderCond {
  items: IUsage.Item[];
  options?: LoaderCond['options'] & I_I18nUtil.UsageOptions;
}
export type UseLoaderParam = [string, UseLoaderCond];

export const definitionConditions: DefLoaderParam[] = [
  [
    'empty',
    {
      items: [],
      files: [],
      objects: [],
    },
  ],
  [
    'invalid sources',
    {
      items: [],
      files: ['some-nonsense.path', module.filename],
      objects: [[], null, 22],
      throws: true,
    },
  ],
  [
    'valid sources that do not produce any items',
    {
      items: [],
      files: ['./fixtures/usage-empty.vue'].map((p) => require.resolve(p)),
      objects: [{ some: { path: {} } }, {}],
      throws: false,
    },
  ],
  [
    'valid sources',
    {
      items: definitions,
      files: ItemArray.uniqProp(definitions, 'source'),
    },
  ],
  [
    'valid sources (simple object)',
    {
      items: definitions,
      files: ItemArray.uniqProp(definitions, 'source'),
      objects: [simple],
    },
  ],
  [
    'valid sources (expanded object)',
    {
      items: definitions,
      objects: [expanded],
    },
  ],
  [
    'valid sources (merged items object)',
    {
      items: definitions,
      objects: [expandedMerged],
      options: {
        throwOnDuplicate: false,
      },
    },
  ],
  [
    'mixed multiple valid and valid-empty sources',
    {
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
  ],
];

export const usageConditions: UseLoaderParam[] = [
  [
    'empty',
    {
      items: [],
      files: [],
      objects: [],
      options: {},
      throws: false,
    },
  ],
  [
    'invalid sources',
    {
      items: [],
      files: ['some-nonsense.path', module.filename],
      objects: [null, 22],
      throws: true,
    },
  ],
  [
    'valid sources that do not produce any items',
    {
      items: [],
      files: ['./fixtures/usage-empty.vue'].map((p) => require.resolve(p)),
      objects: [{ some: { path: {} } }, {}],
    },
  ],
  [
    'valid sources',
    {
      items: usageMatch,
      files: ItemArray.uniqProp(usageMatch, 'source'),
    },
  ],
  [
    'valid sources (from objects)',
    {
      items: usageMatch.map((item) => item.copy({ locale: 'test' })),
      objects: [
        { test: { message: { hello: '' } } },
        { test: { message: { hi: '' } } },
        { test: { message: { hello: '', hi: '' } } },
        {},
      ],
      options: { throwOnDuplicate: false },
    },
  ],
  [
    'mixed multiple valid and valid-empty sources',
    {
      items: [...usageMatch, ...usageNoMatch, ...usageMatchSubset],
      files: [
        './fixtures/usage-empty.vue',
        ...ItemArray.uniqProp(
          [...usageMatch, ...usageNoMatch, ...usageMatchSubset],
          'source',
        ),
      ],
    },
  ],
  [
    'mixed multiple valid and valid-empty sources (from objects)',
    {
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
  ],
];
