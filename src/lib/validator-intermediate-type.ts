/**
 * Interfaces used by ValidatorIntermediate.
 *
 * These types should be used by classes / concretions.
 */

import type { IValidatorIntermediateBase } from './validator-intermediate-type-base';
import type { I_I18nUtilBase } from './i18n-util-type-base';
import type { DeepObject } from './walk';
import type { ExtractItem } from './extract-item';
import type { AnyObj, DefaultProps, AsObject } from '../types';

/**
 * Base types passed to subclasses / subdependencies.
 *
 * In other words, if there's a subdependency (class or instance of another
 * class injected into constructor) to which types are passed for inferrence,
 * these types describe what those passed types must extend.
 */
export interface TypeParamsBase<I18n extends I_I18nUtilBase = I_I18nUtilBase> {
  i18nUtil: I18n;
  schemaGenOptions: AnyObj;
  validatorOptions: AnyObj;
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
  schemaGenOptions: AnyObj;
  validatorOptions: AnyObj;
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
 * Options object passed to ValidatorIntermediate
 *
 * The options are passed to SchemaGenerator and Validator
 */
export interface IValidatorIntermediateOptions<
  Params extends PTPB = PTP,
  T extends TPB = Params extends infer X ? DefaultProps<AsObject<X>, TP> : never
> {
  schema?: T['schemaGenOptions'];
  validator?: T['validatorOptions'];
}

/**
 * ValidatorIntermediate interface
 */
export interface IValidatorIntermediate<
  Params extends PTPB = PTP,
  T extends TPB = Params extends infer X ? DefaultProps<AsObject<X>, TP> : never
> extends IValidatorIntermediateBase {
  i18nUtil: T['i18nUtil'];
  data: any;

  againstSchema: (
    schema: any,
    options: IValidatorIntermediateOptions<T>,
  ) => ReturnType<T['i18nUtil']['validator']['validate']>;

  againstSchemaFromObjects: (
    objects: DeepObject[],
    options: IValidatorIntermediateOptions<T>,
  ) => ReturnType<T['i18nUtil']['validator']['validate']>;

  againstSchemaFromExtracts: (
    extracts: ExtractItem[],
    options: IValidatorIntermediateOptions<T>,
  ) => ReturnType<T['i18nUtil']['validator']['validate']>;

  againstSchemaFromFiles: (
    paths: Parameters<T['i18nUtil']['extract']>[0],
    options: IValidatorIntermediateOptions<T>,
  ) => ReturnType<T['i18nUtil']['validator']['validate']>;
}
