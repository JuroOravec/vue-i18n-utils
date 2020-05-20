/**
 * Interfaces used by ValidatorIntermediate.
 *
 * These types should be used by classes / concretions.
 */

import type glob from 'glob';

import type { AnyObj, DefaultProps, AsObject } from '../types';
import type { IFileAdaptorCollection } from './file-adaptor-type';
import type { FileAdaptorCollection } from './file-adaptor';
import type { ExtractItem, LocaleExtractsOptions } from './extract-item';
import type { DeepObject } from './walk';
import type { IValidator, Validator } from './validator';
import type { IPathResolver, GlobPathResolver } from './path-resolver';
import type { I_I18nUtilBase } from './i18n-util-type-base';
import type { IValidatorIntermediateBase } from './validator-intermediate-type-base';
import type { ISchemaGenerator, SchemaGenerator } from './schema-generator';
import type { IPatchIntermediateBase } from './patch-intermediate-type-base';
import type { IPatchIntermediate } from './patch-intermediate-type';
import type { IValidatorIntermediate } from './validator-intermediate-type';

/**
 * Function used by I18nUtil as parsers in FileAdaptorCollection
 */
export type IParser<T extends AnyObj = AnyObj> = (
  filepaths: string[],
  options: T,
) => ExtractItem[];

/**
 * Function used by I18nUtil as writer in FileAdaptorCollection
 */
export type IWriter<T extends AnyObj = AnyObj> = (
  writeEntries: {
    path: string;
    data: any;
  }[],
  options: T,
) => void;

/**
 * Function used by I18nUtil as writer in FileAdaptorCollection
 */
export type IPatcher<T extends AnyObj = AnyObj> = (
  extracts: ExtractItem[],
  options: T,
) => any;

/**
 * Base types passed to subclasses / subdependencies.
 *
 * In other words, if there's a subdependency (class or instance of another
 * class injected into constructor) to which types are passed for inferrence,
 * these types describe what those passed types must extend.
 */
export interface TypeParamsBase<
  A extends IFileAdaptorCollection = IFileAdaptorCollection<{
    parser: IParser;
    writer: IWriter;
    patcher: IPatcher;
  }>,
  SG extends ISchemaGenerator = ISchemaGenerator,
  V extends IValidator = IValidator,
  PR extends IPathResolver = IPathResolver,
  PI extends IPatchIntermediateBase = IPatchIntermediateBase,
  VI extends IValidatorIntermediateBase = IValidatorIntermediateBase
> {
  adaptors: A;
  adaptorsOptions: AnyObj;
  pathResolver: PR;
  pathResolverOptions: AnyObj;
  schemaGen: SG;
  schemaGenOptions: AnyObj;
  validator: V;
  validatorOptions: AnyObj;
  patchIntermediate: PI;
  validatorIntermediate: VI;
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
  A extends IFileAdaptorCollection<{
    parser: IParser;
    writer: IWriter;
    patcher: IPatcher;
  }> = FileAdaptorCollection<{
    parser: IParser;
    writer: IWriter;
    patcher: IPatcher;
  }>,
  SG extends TypeParamsBase['schemaGen'] = SchemaGenerator,
  V extends TypeParamsBase['validator'] = Validator,
  PR extends TypeParamsBase['pathResolver'] = GlobPathResolver,
  PI extends TypeParamsBase['patchIntermediate'] = IPatchIntermediate,
  VI extends TypeParamsBase['validatorIntermediate'] = IValidatorIntermediate
> extends TPB {
  adaptors: A;
  adaptorsOptions: AnyObj;
  pathResolver: PR;
  pathResolverOptions: glob.IOptions;
  schemaGen: SG;
  schemaGenOptions: AnyObj;
  validator: V;
  validatorOptions: AnyObj;
  patchIntermediate: PI;
  validatorIntermediate: VI;
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
 * Options object passed to I18nUtil constructor
 */
export interface I_I18nUtilCtorOptions<
  Params extends PTPB = PTP,
  T extends TPB = Params extends infer X ? DefaultProps<AsObject<X>, TP> : never
> {
  schemaGenerator?: T['schemaGen'];
  schemaOptions?: T['schemaGenOptions'];
  pathResolver?: T['pathResolver'];
  pathResolverOptions?: T['pathResolverOptions'];
  adaptors?: T['adaptors'];
  adaptorsOptions?: T['adaptorsOptions'];
  validator?: T['validator'];
  validatorOptions?: T['validatorOptions'];
}

/**
 * Options object for method `extract` or methods that call it
 */
export interface IExtractOptions<
  Params extends PTPB = PTP,
  T extends TPB = Params extends infer X ? DefaultProps<AsObject<X>, TP> : never
> {
  pathResolver?: T['pathResolverOptions'];
  adaptor?: T['adaptorsOptions'];
}

/**
 * Options object for method `write` or methods that call it
 */
export interface IWriteOptions<
  Params extends PTPB = PTP,
  T extends TPB = Params extends infer X ? DefaultProps<AsObject<X>, TP> : never
> {
  adaptor?: T['adaptorsOptions'];
}

/**
 * Options object for method `patch` or methods that call it
 */
export interface IPatchOptions<
  Params extends PTPB = PTP,
  T extends TPB = Params extends infer X ? DefaultProps<AsObject<X>, TP> : never
> {
  adaptor?: T['adaptorsOptions'];
}

/**
 * Options object for method `master` or methods that call it
 */
export interface IMasterOptions<
  Params extends PTPB = PTP,
  T extends TPB = Params extends infer X ? DefaultProps<AsObject<X>, TP> : never
> extends LocaleExtractsOptions, IExtractOptions<T> {
  simple?: boolean;
  merged?: boolean;
}

export type IMasterResultSimple = DeepObject<string>;
export type IMasterResultSimpleMerged = DeepObject<
  { locale: string; value: string }[]
>;
export type IMasterResultExpanded = DeepObject<ExtractItem>;
export type IMasterResultExpandedMerged = DeepObject<
  { locale: string; value: ExtractItem }[]
>;

/**
 * Union of simple and expanded MasterResult types
 */
export type IMasterResultAny =
  | IMasterResultSimple
  | IMasterResultSimpleMerged
  | IMasterResultExpanded
  | IMasterResultExpandedMerged;

/**
 * Result type of the method `master`.
 *
 * Depending on whether option `simple` is `true` or `false`, object with
 * different properties is returned.
 */
export type IMasterResult<
  IsSimple extends any = false,
  IsMerged extends any = false
> = IsSimple extends true
  ? IsMerged extends true
    ? IMasterResultSimpleMerged
    : IMasterResultSimple
  : IsMerged extends true
  ? IMasterResultExpandedMerged
  : IMasterResultExpanded;

export type ISchemaOptions<
  Params extends PTPB = PTP,
  T extends TPB = Params extends infer X ? DefaultProps<AsObject<X>, TP> : never
> = IMasterOptions<T> & T['schemaGenOptions'];

export interface IValidateOptions<
  Params extends PTPB = PTP,
  T extends TPB = Params extends infer X ? DefaultProps<AsObject<X>, TP> : never
> extends IMasterOptions<T> {
  locale?: string;
}

type VoidOrList<T> = T extends void ? void : T[];

export interface I_I18nUtil<
  Params extends PTPB = PTP,
  T extends TPB = Params extends infer X ? DefaultProps<AsObject<X>, TP> : never
> extends I_I18nUtilBase {
  adaptors: T['adaptors'];
  schemaGenerator: T['schemaGen'];
  validator: T['validator'];
  pathResolver: T['pathResolver'];
  options: AnyObj;

  addFileAdaptor(
    params: Parameters<T['adaptors']['add']>[0],
  ): ReturnType<T['adaptors']['add']> | void;

  addFileAdaptors(
    paramsList: Parameters<T['adaptors']['add']>[0][],
  ): VoidOrList<ReturnType<T['adaptors']['add']>> | void;

  removeFileAdaptor(
    name: Parameters<T['adaptors']['delete']>[0],
  ): ReturnType<T['adaptors']['delete']> | void;

  removeFileAdaptors(
    names: Parameters<T['adaptors']['delete']>[0][],
  ): VoidOrList<ReturnType<T['adaptors']['delete']>> | void;

  extract(paths: any[], options: AnyObj): ExtractItem[];

  write(writeEntries: any[], options: AnyObj): void;

  patch(extracts: ExtractItem[], options: AnyObj): void;

  patchFromFiles(paths: any[], options: AnyObj): IPatchIntermediateBase;

  patchFromExtracts(
    extracts: ExtractItem[],
    options: AnyObj,
  ): IPatchIntermediateBase;

  patchFromObjects(
    objects: DeepObject[],
    options: AnyObj,
  ): IPatchIntermediateBase;

  master(paths: any[], options: AnyObj): IMasterResultAny;

  masterFromExtracts(
    extracts: ExtractItem[],
    options: AnyObj,
  ): IMasterResultAny;

  masterFromObjects(objects: DeepObject[], options: AnyObj): IMasterResultAny;

  locale(globs: any[], locale: string, options: AnyObj): IMasterResultAny;

  localeFromExtracts(
    extracts: ExtractItem[],
    locale: string,
    options: AnyObj,
  ): AnyObj;

  localeFromObjects(
    objects: DeepObject[],
    locale: string,
    options: AnyObj,
  ): AnyObj;

  schema(globs: any[], options: AnyObj): AnyObj;

  schemaFromExtracts(extracts: ExtractItem[], options: AnyObj): AnyObj;

  schemaFromObjects(objects: DeepObject[], options: AnyObj): AnyObj;

  validate(data: AnyObj[], schema: AnyObj, options: AnyObj): void;

  validateFromFiles(paths: any[], options: AnyObj): IValidatorIntermediateBase;

  validateFromExtracts(
    extracts: ExtractItem[],
    options: AnyObj,
  ): IValidatorIntermediateBase;

  validateFromObjects(
    objects: DeepObject[],
    options: AnyObj,
  ): IValidatorIntermediateBase;
}
