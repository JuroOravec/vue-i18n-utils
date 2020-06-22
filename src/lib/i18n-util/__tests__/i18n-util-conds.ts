import { I18nUtil, LoadedI18nUtil } from '..';
import { definitions } from './fixtures/definitions';

export type InstanceParam = [
  string,
  typeof I18nUtil | typeof LoadedI18nUtil,
  () => I18nUtil | LoadedI18nUtil,
];

export function createI18nUtil() {
  return new I18nUtil();
}

export function createLoadedI18nUtil() {
  const i18nUtil = createI18nUtil();
  const loadedI18nUtil = new LoadedI18nUtil({
    ...i18nUtil,
    i18nUtil,
    definitions: definitions,
  });
  return loadedI18nUtil;
}

export const conditions: InstanceParam[] = [
  [I18nUtil.name, I18nUtil, createI18nUtil],
  [LoadedI18nUtil.name, LoadedI18nUtil, createLoadedI18nUtil],
];
