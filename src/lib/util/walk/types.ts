/**
 * Types for functions of walk module.
 *
 * These types are more concrete compared to the abstract types.
 *
 * These types should be used by classes / concretions in this or other
 * components.
 */

import { DeepObject } from '../../../types';
import { IPath } from './types-abstract';

export * from './types-abstract';

export type IQueueItem = [Record<string, any>, IPath];
export type I_Index = number;

/**
 * Nested object storing info on which path has been seen first by entry at
 * which index
 */
export type IOrigin = DeepObject<I_Index>;

interface IDeepWalkHookOptionsBase<V extends any = any> {
  key: string;
  value: V;
  path: IPath;
}

export type IDeepWalkHookOptions<
  O extends object = object,
  V extends any = any
> = IDeepWalkHookOptionsBase<V> & O;

export type IMergeDeepOptions = Omit<
  IDeepWalkHookOptions<{
    index: I_Index;
    source: DeepObject;
  }>,
  'key'
>;

export type IMergeDeepBranchFunc = (params: IMergeDeepOptions) => any;

export type IMergeDeepIsBranchFunc = (params: IMergeDeepOptions) => boolean;

export interface IMergeDeepAssignFuncParams extends IMergeDeepOptions {
  origin: IOrigin;
}

export type IMergeDeepAssignFunc = (
  params: IMergeDeepAssignFuncParams,
) => any | void | never;

export interface IMergeDeepMergeFuncParams extends IMergeDeepOptions {
  oldValue: any;
  origin: IOrigin;
}

export type IMergeDeepMergeFunc = (
  params: IMergeDeepMergeFuncParams,
) => any | void | never;
