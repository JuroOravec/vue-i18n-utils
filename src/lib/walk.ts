/**
 * Object leaf node traversal functions that provide access to the path
 */

import isObject from 'lodash.isobject';
import { AnyFunc, AnyObj } from '../types';

export type Path = string[];
export type DeepObject<T = any> = {
  [key: string]: T extends infer X ? DeepObject<X> | T : never;
};
export type QueueItem = [Object, Path];
export type Index = number;

/**
 * Nested object storing info on which path has been seen first by entry at
 * which index
 */
export type Origin = DeepObject<Index>;

/**
 * Given an object and a path as list of strings, creates an object path
 * (e.g. obj.x.y.z) or retrieves the value if the path already exists.
 */
export function createObjectPath<T extends DeepObject>(
  obj: T,
  path: Path,
  options: { overwrite?: boolean } = {},
) {
  const { overwrite = false } = options;
  return path.reduce((ancestor, key, i) => {
    if (!ancestor.hasOwnProperty(key)) ancestor[key] = {};
    const argIsObject = isObject(ancestor[key]);
    if (!argIsObject) {
      if (!overwrite) {
        throw Error(
          `Key '${key}' at path index ${i} already exists with non-object ` +
            `value '${ancestor[key]}'`,
        );
      }
      ancestor[key] = {};
    }
    return ancestor[key];
  }, obj as DeepObject);
}

/**
 * Call a function `fn` on leaf nodes of given object. Supplied function is
 * called with leaf node key, value, ancestral path, and any other arguments
 * that were passed to the deepWalkLeaf function.
 */
export function deepWalk(
  params: {
    onBranch?: AnyFunc;
    onLeaf?: AnyFunc;
    args?: AnyObj;
    isBranch?: (params: AnyObj) => boolean;
  },
  obj: DeepObject,
) {
  const {
    onBranch,
    onLeaf,
    args = {},
    isBranch = ({ value }) => isObject(value),
  } = params;
  if (!(obj && isObject(obj))) {
    throw Error(`deepWalkLeaf expects an object, got ${typeof obj} instead`);
  }
  const initialPath: Path = [];
  const walkQueue: QueueItem[] = [[obj, initialPath]];
  while (walkQueue.length) {
    let [currObj, currPath] = walkQueue.pop() as QueueItem;
    Object.entries(currObj).forEach(([key, value]) => {
      if (isBranch({ key, value, path: currPath, ...args })) {
        // Use value from branch fn if it is provided and if it returns
        // sth other than undefined.
        const currVal =
          (onBranch
            ? onBranch({ key, value, path: currPath, ...args })
            : value) ?? value;
        walkQueue.push([currVal, [...currPath, key]]);
        return;
      }
      if (onLeaf) onLeaf({ key, value, path: currPath, ...args });
    });
  }
}

export interface AssignFuncParams {
  value: any;
  path: Path;
  index: Index;
  source: DeepObject;
  origin: Index;
}

export type AssignFunc = (params: AssignFuncParams) => any | void | never;

export interface MergeFuncParams extends AssignFuncParams {
  oldValue: any;
}

export type MergeFunc = (params: MergeFuncParams) => any | void | never;

/**
 * Merges objects and calls function `fn` if a value has already been assigned
 * to the given key before. Function `fn` is passed in the old value, new
 * value, and ancestral path (including the current key). The returned value is
 * assigned to the merged object.
 *
 * Object merger with similar implementation as Ramda's mergeDeepWith, except
 * the evaluating function is additionally provided with the full path to the
 * current values, index of the evaluated object, reference to the object, and
 * origin object.
 *
 * Origin object keeps track of what object first populated which key
 * (including nested keys), and stores their indices as values.
 */

/**
 * Walks objects and merges values on the leaf nodes.
 *
 * Calls function `fn` on each node of each object, passing in
 * the old value, new value, and ancestral path (including the current key),
 * and assigning the result to the merged object.
 *
 * The old value is `undefined` if a node with current path hasn't been
 * accessed before on another object, otherwise it's the previously-assigned
 * value.
 *
 * 2 additional arguments are passed to `fn`, the index of the currently
 * processed object and its reference, for introspection.
 */
export function mergeDeepWith<T extends DeepObject>(
  options: {
    onAssign?: AssignFunc;
    onMerge?: MergeFunc;
    onBranch?: AnyFunc;
    isBranch?: (val: any) => boolean;
  } = {},
  ...objects: T[]
) {
  const {
    onAssign = (({ value }) => value) as AssignFunc,
    onMerge = (({ value }) => value) as MergeFunc,
    onBranch,
    isBranch,
  } = options;

  const result = {} as T;
  // Stores info on which value comes from which object
  const origin = {} as Origin;
  const cachedPaths = {} as { [key: string]: DeepObject };
  const pathDelim = '.';

  objects.forEach((obj, index) => {
    deepWalk({ onLeaf, onBranch, isBranch, args: { index, source: obj } }, obj);
  });
  return { value: result, origin };

  function onLeaf(params: {
    key: string;
    value: any;
    path: Path;
    index: Index;
    source: DeepObject;
  }) {
    const { key, value, path, index, source } = params;
    // Create path to parent
    const pathHash = path.join(pathDelim);
    let parent = cachedPaths[pathHash] || createObjectPath(result, path);
    if (!cachedPaths[pathHash]) cachedPaths[pathHash] = parent;

    const oldValue = parent[key];
    const fullPath = [...path, key];

    const originObjParent = createObjectPath(origin, path);
    if (originObjParent[key] === undefined) {
      // This is the first time we came over this path.
      // Store info on where we've seen this key first.
      originObjParent[key] = index;
    }
    const fnArgs = {
      value,
      path: fullPath,
      index,
      source,
      origin: originObjParent[key],
    };
    const newValue =
      oldValue === undefined
        ? onAssign(fnArgs)
        : onMerge({ ...fnArgs, oldValue });
    parent[key] = newValue;
    return newValue;
  }
}
