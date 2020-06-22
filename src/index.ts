import { I18nUtil } from './lib/i18n-util';

export * from './lib/i18n-util';
export * from './lib/resolver';
export * from './lib/adaptors';
export * from './lib/collection';
export { Schemator } from './lib/schemator';
export { Validator } from './lib/validator';
export { UsageItem } from './lib/usage';
export { Item, ItemArray, isItem } from './lib/item';
export { DefinitionItem, DefinitionArray } from './lib/definition';
export { PathFormatter } from './lib/path-formatter';
export { ContentGroup } from './lib/content-group';
export { ContentBlock } from './lib/content-block';
export { ContentFormatter } from './lib/content-formatter';

/**
 * Instance of I18nUtil.
 */
export const i18nUtil = new I18nUtil();
