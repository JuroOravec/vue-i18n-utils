/**
 * Interfaces used by PatchIntermediate.
 *
 * These types should be used by classes / concretions.
 */

import type { I_I18nUtilBase } from './i18n-util-type-base';
import type { IPatchIntermediateBase } from './patch-intermediate-type-base';
import type { ExtractItem } from './extract-item';
import type { DeepObject } from './walk';
import type { DefaultProps, AsObject } from '../types';

/**
 * Base types passed to subclasses / subdependencies.
 *
 * In other words, if there's a subdependency (class or instance of another
 * class injected into constructor) to which types are passed for inferrence,
 * these types describe what those passed types must extend.
 */
export interface TypeParamsBase<I18n extends I_I18nUtilBase = I_I18nUtilBase> {
  i18nUtil: I18n;
}

/**
 * Default specification of the base types passed to subclasses /
 * subdependencies.
 *
 * In other words, if there's a subdependency (class or instance of another
 * class injected into constructor) to which types are passed for inferrence,
 * these are the types that will be passed by default.
 *
 * These types must extends the types defined in TypeParamsBase.
 */
export interface TypeParams<
  // I18nUtil imports this class, so we refer to its base interface only
  I18n extends TypeParamsBase['i18nUtil'] = I_I18nUtilBase
> extends TPB {
  i18nUtil: I18n;
}

/**
 * Shorthand for TypeParamsBase
 */
export type TPB = TypeParamsBase;

/**
 * Shorthand for partial TypeParamsBase
 */
export type PTPB = Partial<TPB>;

/**
 * Shorthand for TypeParams
 */
export type TP = TypeParams;

/**
 * Shorthand for partial TypeParams
 */
export type PTP = Partial<TP>;

/**
 * Options object passed to PatchIntermediate
 */
export type IPatchIntermediateOptions<
  Params extends PTPB = PTP,
  T extends TPB = Params extends infer X ? DefaultProps<AsObject<X>, TP> : never
> = Parameters<T['i18nUtil']['patch']>[1];

/**
 * PatchIntermediate interface
 */
export interface IPatchIntermediate<
  Params extends PTPB = PTP,
  T extends TPB = Params extends infer X ? DefaultProps<AsObject<X>, TP> : never
> extends IPatchIntermediateBase {
  i18nUtil: T['i18nUtil'];
  sourceExtracts: ExtractItem[];
  options: IPatchIntermediateOptions<T>;

  toTargetsByExtracts: (
    extracts: ExtractItem[],
    options: IPatchIntermediateOptions<T>,
  ) => ReturnType<T['i18nUtil']['patch']>;

  toTargetsByObjects: (
    objects: DeepObject[],
    options: IPatchIntermediateOptions<T>,
  ) => ReturnType<T['i18nUtil']['patch']>;

  toTargetsByFiles: (
    paths: Parameters<T['i18nUtil']['extract']>[0],
    options: IPatchIntermediateOptions<T>,
  ) => ReturnType<T['i18nUtil']['patch']>;
}
