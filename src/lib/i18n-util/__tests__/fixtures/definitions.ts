import path from 'path';
import unionBy from 'lodash.unionby';
import differenceBy from 'lodash.differenceby';

import type { IDefinition } from '../../../definition/types';
import { JsonYamlDefinitionItem } from '../../../adaptors/json-yaml';
import { VueDefinitionItem } from '../../../adaptors/vue/vue-definition';
import { filterMap } from '../../../util/array';

export const definitionsJY = [
  new JsonYamlDefinitionItem({
    value: 'hello',
    path: ['message', 'hi'],
    locale: 'ja',
    source: 'src/lib/i18n-util/__tests__/fixtures/def.json',
    origin: 'json-yaml',
    sourceScope: 'general',
    blockIndex: 0,
    rootIsArray: false,
  }),
  new JsonYamlDefinitionItem({
    value: 'something',
    path: ['message', 'hello'],
    locale: 'de',
    source: 'src/lib/i18n-util/__tests__/fixtures/def-de.json',
    origin: 'json-yaml',
    blockIndex: 0,
    sourceScope: 'locale',
    rootIsArray: false,
  }),
];

export const definitionsV = [
  new VueDefinitionItem({
    value: 'hello',
    path: ['message', 'hi'],
    locale: 'en',
    source:
      'src/lib/i18n-util/__tests__/fixtures/definition-match-single-scoped-src.vue',
    origin: 'vue',
    blockIndex: 10,
    sourceScope: 'locale',
    link: './src/lib/i18n-util/__tests__/fixtures/def-en.yaml',
  }),
  new VueDefinitionItem({
    value: 'Hello i18n in SFC!',
    path: ['message', 'hello'],
    locale: 'en',
    source:
      'src/lib/i18n-util/__tests__/fixtures/definition-match-single-scoped-src.vue',
    origin: 'vue',
    blockIndex: 10,
    sourceScope: 'locale',
    link: './src/lib/i18n-util/__tests__/fixtures/def-en.yaml',
  }),
].map((i) => {
  i.link = path.join(process.cwd(), i.link!);
  return i;
});

export const definitions = [...definitionsJY, ...definitionsV];
export const fullDefinitions = [
  ...definitions,
  ...definitionsJY.map((item) =>
    item.copy({ locale: { ja: 'de', de: 'ja' }[item.locale as 'ja' | 'de'] }),
  ),
];

export const definitionsMissingJY = [
  new JsonYamlDefinitionItem({
    value: null,
    path: ['message', 'hi'],
    locale: 'de',
    origin: 'json-yaml',
  }),
  new JsonYamlDefinitionItem({
    value: null,
    path: ['message', 'hello'],
    locale: 'ja',
    origin: 'json-yaml',
  }),
];

export const definitionsMissingV = [];

export const definitionsMissing = [
  ...definitionsMissingJY,
  ...definitionsMissingV,
] as IDefinition.Item[];

export const patchDefinitionsJY = [
  new JsonYamlDefinitionItem({
    value: 'bazing',
    path: ['message', 'hi'],
    locale: 'ja',
    source: 'src/lib/i18n-util/__tests__/fixtures/def.json',
    origin: 'json-yaml',
    blockIndex: 0,
    rootIsArray: false,
  }),
];

export const patchDefinitionsV = [
  new VueDefinitionItem({
    value: 'bazing2',
    path: ['message', 'hi'],
    locale: 'en',
    source:
      'src/lib/i18n-util/__tests__/fixtures/definition-match-single-scoped-src.vue',
    origin: 'vue',
    blockIndex: 10,
  }),
];

export const patchDefinitions = [...patchDefinitionsJY, ...patchDefinitionsV];

export const patchExpectedJY = unionBy(
  patchDefinitionsJY,
  definitionsJY.filter((item) =>
    patchDefinitionsJY.map((i) => i.source).includes(item.source),
  ),
  (i) => i.localeTokenHash,
);

export const patchExpectedV = unionBy(
  patchDefinitionsV,
  definitionsV.filter((item) =>
    patchDefinitionsV.map((i) => i.source).includes(item.source),
  ),
  (i) => i.localeTokenHash,
);

export const dropDefinitionsJY = [
  new JsonYamlDefinitionItem({
    path: ['message', 'hi'],
    locale: 'ja',
    source: 'src/lib/i18n-util/__tests__/fixtures/def.json',
    origin: 'json-yaml',
  }),
  new JsonYamlDefinitionItem({
    path: ['message', 'hello'],
    locale: 'de',
    source: 'src/lib/i18n-util/__tests__/fixtures/def-de.json',
    origin: 'json-yaml',
  }),
];

export const dropDefinitionsV = [
  new VueDefinitionItem({
    path: ['message', 'hi'],
    locale: 'en',
    source:
      'src/lib/i18n-util/__tests__/fixtures/definition-match-single-scoped-src.vue',
    origin: 'vue',
  }),
];

export const dropDefinitions = [...dropDefinitionsJY, ...dropDefinitionsV];

export const dropExpectedJY = differenceBy(
  definitionsJY,
  dropDefinitionsJY,
  (i) => i.localeTokenHash,
);

export const dropExpectedV = differenceBy(
  definitionsV,
  dropDefinitionsV,
  (i) => i.localeTokenHash,
);

export const addLocaleDefinitionsJY = definitionsJY.map((d) =>
  d.copy({ locale: 'fr' }),
);

export const addLocaleDefinitionsV = [] as IDefinition.Item[];

export const addLocaleExpectedJY = unionBy(
  addLocaleDefinitionsJY,
  definitionsJY.filter((item) =>
    addLocaleDefinitionsJY.map((i) => i.source).includes(item.source),
  ),
  (i) => i.localeTokenHash,
);

export const addLocaleExpectedV = unionBy(
  addLocaleDefinitionsV,
  definitionsV.filter((item) =>
    addLocaleDefinitionsV.map((i) => i.source).includes(item.source),
  ),
  (i) => i.localeTokenHash,
);

export const removeLocaleDefinitionsJY = definitionsJY.filter(
  (d) => d.locale === 'en',
);

export const removeLocaleDefinitionsV = definitionsV.filter(
  (d) => d.locale === 'en',
);

export const removeLocaleExpectedJY = definitionsJY.filter(
  (d) => d.locale !== 'en',
);

export const removeLocaleExpectedV = definitionsV.filter(
  (d) => d.locale !== 'en',
);

export const clearLocaleDefinitionsJY = filterMap(
  definitionsJY,
  (item) => item.locale === 'en',
  (item) => item.copy({ value: null }),
);

export const clearLocaleDefinitionsV = filterMap(
  definitionsV,
  (item) => item.locale === 'en',
  (item) => item.copy({ value: null }),
);

export const clearLocaleExpectedJY = unionBy(
  clearLocaleDefinitionsJY,
  definitionsJY,
  (i) => i.localeTokenHash,
);

export const clearLocaleExpectedV = unionBy(
  clearLocaleDefinitionsV,
  definitionsV,
  (i) => i.localeTokenHash,
);
