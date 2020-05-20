/**
 * Base types, or the abstraction of interfaces. These types have limited
 * resolution and do not include any types that could cause circular reference.
 *
 * These types should be used by interfaces of other classes.
 */

import type { AnyObj } from '../types';

export interface IFileAdaptorCollectionBase {
  collection: Map<any, any>;
  options: AnyObj;

  get: (name: string) => any;

  has: (name: string) => boolean;

  add: (options: any) => any;

  delete: (name: string) => void;

  resolve: (query: string) => any;
}
