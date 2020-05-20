import { AsObject, DefaultProps } from '../types';
import {
  IFileAdaptorCollection,
  IFileAdaptorMap,
  INamedFileAdaptorItem,
  IName,
  IFileAdaptorItem,
  IFACCtorOptions,
  PTP,
  PTPB,
  TPB,
  TP,
  ISetOptions,
} from './file-adaptor-type';

/**
 * Lower-level-ish API for managing parsers and writers.
 */
export class FileAdaptorCollection<
  Params extends PTPB = PTP,
  T extends TPB = Params extends infer X ? DefaultProps<AsObject<X>, TP> : never
> implements IFileAdaptorCollection {
  collection: IFileAdaptorMap<T> = new Map();

  constructor(public options: IFACCtorOptions<T> = {}) {
    const { collection = {} } = options;

    const entries = collection.entries
      ? (collection as IFileAdaptorMap<T>).entries()
      : (Object.entries(collection) as [IName, IFileAdaptorItem<T>][]);

    for (const [name, data] of entries) {
      this.set({ name, ...data });
    }
  }

  get(name: IName) {
    return this.collection.get(name);
  }

  has(name: IName) {
    return this.collection.has(name);
  }

  add(params: ISetOptions<T>) {
    if (this.has(params.name)) {
      throw Error(`Parser '${params.name}' is already registered`);
    }
    return this.set(params);
  }

  set(params: ISetOptions<T>) {
    const { name, patterns, ...rest } = params;
    this.collection.set(name, {
      patterns: patterns.map((p) => new RegExp(p)),
      ...rest,
    } as IFileAdaptorItem<T>);
  }

  delete(name: IName) {
    if (this.has(name) === undefined) {
      throw Error(`No parser registered with name '${name}'`);
    }
    this.unset(name);
  }

  unset(name: IName) {
    this.collection.delete(name);
  }

  resolve(query: string) {
    for (const [name, { patterns, ...rest }] of this.collection.entries()) {
      for (const pattern of patterns) {
        if (pattern.test(query)) {
          return { name, patterns, ...rest } as INamedFileAdaptorItem<T>;
        }
      }
    }
  }
}
