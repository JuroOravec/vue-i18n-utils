import { DefinitionItem } from '../../definition';

export const enDefinitions = [
  new DefinitionItem({
    path: ['message', 'hi'],
    locale: 'en',
    value: 'hello',
  }),
  new DefinitionItem({
    path: ['message', 'hello'],
    locale: 'en',
    value: 'Hello i18n in SFC!',
  }),
];

export const jaDefinitions = [
  new DefinitionItem({
    path: ['message', 'hi'],
    locale: 'ja',
    value: 'hello',
  }),
];

export const definitions = [...enDefinitions, ...jaDefinitions];
