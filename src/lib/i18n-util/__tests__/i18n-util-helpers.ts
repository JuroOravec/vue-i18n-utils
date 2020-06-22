import type { IAdaptorCollection } from './../../collection/types';
import type { I_I18nUtil } from '../types';
import { I18nUtil, LoadedI18nUtil } from '..';
import { definitions } from './fixtures/definitions';
import { InstanceParam } from './i18n-util-conds';

export type Spies = Required<
  { [key in keyof IAdaptorCollection.ItemMethods]: jest.SpyInstance }
>;
export type AdaptorSpies = Map<string, Spies>;

export function spyOnAdaptors(adaptors: IAdaptorCollection.Collection) {
  const adaptorSpies = new Map() as AdaptorSpies;
  for (const [key, val] of Array.from(adaptors.collection)) {
    const spies = {} as Spies;
    spies.parser = jest.spyOn(val.methods, 'parser');
    spies.writer = jest.spyOn(val.methods, 'writer');
    spies.remover = jest.spyOn(val.methods, 'remover');
    spies.usageAnalyzer = jest.spyOn(val.methods, 'usageAnalyzer');
    adaptorSpies.set(key, spies);
  }
  return adaptorSpies;
}

export function parametrizeInstance(
  params: InstanceParam[],
  fn: (
    name: string,
    instance: () => I_I18nUtil.I18nUtil | I_I18nUtil.LoadedI18nUtil,
    spies: () => AdaptorSpies,
  ) => void,
) {
  describe.each(params)('%s', (name, klass, setup) => {
    let i18nUtil: I18nUtil | LoadedI18nUtil;
    let adaptorSpies: AdaptorSpies;

    const getInstance = () => i18nUtil;
    const getAdaptorSpies = () => adaptorSpies;

    beforeAll(() => {
      i18nUtil = setup();
      adaptorSpies = spyOnAdaptors(i18nUtil.adaptors);
    });

    beforeEach(() => {
      if (i18nUtil instanceof LoadedI18nUtil) {
        i18nUtil.loaded.items = [...definitions];
      }

      for (const spies of Array.from(adaptorSpies.values())) {
        for (const [key, method] of Object.entries(spies)) {
          method!.mockClear();
          if (['writer', 'remover'].includes(key)) {
            method!.mockImplementation(() => undefined);
          }
        }
      }
    });
    fn(name, getInstance, getAdaptorSpies);
  });
}

export function validateAdaptorCalls(
  adaptorSpies: AdaptorSpies,
  expected: {
    writer?: number | null | { [key: string]: number | null };
    parser?: number | null | { [key: string]: number | null };
    remover?: number | null | { [key: string]: number | null };
    usageAnalyzer?: number | null | { [key: string]: number | null };
  } = {},
) {
  const checkCalledTimes = (spy: any, calls: null | number) => {
    if (calls !== null) {
      calls ? expect(spy).toBeCalled() : expect(spy).not.toBeCalled();
      if (calls) expect(spy).toBeCalledTimes(calls ?? 0);
    }
  };

  const getCalls = (
    name: string,
    val?: number | null | { [key: string]: number | null },
  ): number | null => {
    if (typeof val === 'number' || val === null) {
      return val as number | null;
    }
    if (val === undefined) return 0;
    return val[name] !== undefined ? val[name] : 0;
  };

  for (const [name, spies] of Array.from(adaptorSpies)) {
    const { writer, parser, remover, usageAnalyzer } = spies;

    checkCalledTimes(writer, getCalls(name, expected.writer));
    checkCalledTimes(parser, getCalls(name, expected.parser));
    checkCalledTimes(remover, getCalls(name, expected.remover));
    checkCalledTimes(
      usageAnalyzer,
      getCalls(name, expected.usageAnalyzer ?? 0),
    );
  }
}

export function forEachAdaptor(
  adaptorSpies: AdaptorSpies,
  fn: (spies: Spies) => void,
) {
  for (const spies of Array.from(adaptorSpies.values())) {
    fn(spies);
  }
}
