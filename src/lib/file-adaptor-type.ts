/**
 * Interfaces used by ValidatorIntermediate.
 *
 * These types should be used by classes / concretions.
 */

import type { IFileAdaptorCollectionBase } from './file-adaptor-type-base';
import type { AnyFunc, AnyObj, DefaultProps, AsObject } from '../types';

/**
 * Parser function
 */
export type IParser = AnyFunc;

/**
 * Writer function
 */
export type IWriter = AnyFunc;

/**
 * Patcher function
 */
export type IPatcher = AnyFunc;

/**
 * Type used as name
 */
export type IName = string;

/**
 * Base types passed to subclasses / subdependencies.
 *
 * In other words, if there's a subdependency (class or instance of another
 * class injected into constructor) to which types are passed for inferrence,
 * these types describe what those passed types must extend.
 */
export interface TypeParamsBase {
  parser?: IParser;
  writer?: IWriter;
  patcher?: IPatcher;
  options?: AnyObj;
}

/**
 * Default specification of the base types passed to subclasses /
 * subdependencies.
 *
 * In other words, if there's a subdependency (class or instance of another
 * class injected into constructor) to which types are passed for inferrence,
 * these are the types that will be passed by default.
 *
 * These types must extends the types defined in TypeParamBase.
 */
export interface TypeParams extends TypeParamsBase {
  parser?: IParser;
  writer?: IWriter;
  patcher?: IPatcher;
  options?: AnyObj;
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

export interface IFileAdaptorItemMethods<
  Params extends PTPB = PTP,
  T extends TPB = Params extends infer X ? DefaultProps<AsObject<X>, TP> : never
> {
  parser?: T['parser'];
  writer?: T['writer'];
  patcher?: T['patcher'];
}

/**
 * Interface of a single entry containing methods for interacting with specific
 * file type.
 */
export interface IFileAdaptorItem<
  Params extends PTPB = PTP,
  T extends TPB = Params extends infer X ? DefaultProps<AsObject<X>, TP> : never
> {
  patterns: RegExp[];
  methods: IFileAdaptorItemMethods<T>;
  options?: T['options'];
}

/**
 * File Adaptor
 */
export type IFileAdaptor<
  Params extends PTPB = PTP,
  T extends TPB = Params extends infer X ? DefaultProps<AsObject<X>, TP> : never
> = Omit<IFileAdaptorItem<T>, 'patterns' | 'options'>;

/**
 * Extension of FileAdaptorItem which also contains name property
 */
export interface INamedFileAdaptorItem<
  Params extends PTPB = PTP,
  T extends TPB = Params extends infer X ? DefaultProps<AsObject<X>, TP> : never
> extends IFileAdaptorItem<T> {
  name: IName;
}

/**
 * Mapping of name to IOCollectionItem
 */
export type IFileAdaptorMap<
  Params extends PTPB = PTP,
  T extends TPB = Params extends infer X ? DefaultProps<AsObject<X>, TP> : never
> = Map<IName, IFileAdaptorItem<T>>;

/**
 * Item format passed to FileAdaptorCollection constructor that will be
 * translated to FileAdaptorItem object
 */
interface ICollectionArg<
  Params extends PTPB = PTP,
  T extends TPB = Params extends infer X ? DefaultProps<AsObject<X>, TP> : never
> {
  patterns: (IFileAdaptorItem<T>['patterns'][0] | string)[];
  methods: IFileAdaptorItemMethods<T>;
  options?: IFileAdaptorItem<T>['options'];
}

/**
 * Constructor options object
 */
export interface IFACCtorOptions<
  Params extends PTPB = PTP,
  T extends TPB = Params extends infer X ? DefaultProps<AsObject<X>, TP> : never
> {
  collection?:
    | { [key in IName]: ICollectionArg<T> }
    | Map<IName, ICollectionArg<T>>;
}

export interface ISetOptions<
  Params extends PTPB = PTP,
  T extends TPB = Params extends infer X ? DefaultProps<AsObject<X>, TP> : never
> {
  name: IName;
  patterns: (string | RegExp)[];
  options?: AnyObj;
  methods: IFileAdaptor<T> | IFileAdaptorItemMethods<T>;
}

export interface IFileAdaptorCollection<
  Params extends PTPB = PTP,
  T extends TPB = Params extends infer X ? DefaultProps<AsObject<X>, TP> : never
> extends IFileAdaptorCollectionBase {
  get: (name: IName) => IFileAdaptorItem<T> | undefined;
  has: (name: IName) => boolean;
  add: (options: ISetOptions<T>) => void;
  resolve: (query: string) => INamedFileAdaptorItem<T> | undefined;
  delete: (name: IName) => void;
}
