/**
 * Object leaf node traversal functions that provide access to the path
 */

import isObject from 'lodash.isobject';

import type { AnyObj, DeepObject } from '../../../types';
import type {
  IPath,
  IDeepWalkHookOptions,
  IQueueItem,
  IMergeDeepAssignFunc,
  IMergeDeepMergeFunc,
  IMergeDeepBranchFunc,
  IMergeDeepIsBranchFunc,
  IOrigin,
} from './types';

/**
 * Given an object and a path as a list of strings, creates an object path
 * (e.g. obj.x.y.z) or retrieves the value if the path already exists.
 */
export function createObjectPath<T extends DeepObject>(
  obj: T,
  path: IPath,
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
 * Walks objects and calls hooks on following events:
 * - `isBranch` - Checks whether current node is a branch node. Return value
 *   decides whether the current node is a branch.
 * - `onBranch` - called on branch node. Return value is walked.
 * - `onLeaf` - called on leaf node. Return value is ignored.
 *
 * The functions are called with an object with following properties:
 * - `key` - key of the current node
 * - `value` - value of the node
 * - `path` - path to the parent node (`key` is not part of the `path`)
 *
 * Additional arguments to be passed to each function can be specified
 * with an object assigned to the `args` prop.
 */
export function deepWalk<
  A extends AnyObj = AnyObj,
  B extends any = AnyObj,
  L extends any = any
>(
  params: {
    onBranch?: (options: IDeepWalkHookOptions<A, B>) => any;
    onLeaf?: (options: IDeepWalkHookOptions<A, L>) => void;
    isBranch?: (params: IDeepWalkHookOptions<A, B | L>) => boolean;
    args?: A;
  },
  obj: object,
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
  const initialPath: IPath = [];
  const walkQueue: IQueueItem[] = [[obj, initialPath]];
  while (walkQueue.length) {
    const [currObj, currPath] = walkQueue.pop() as IQueueItem;
    Object.entries(currObj).forEach(([key, value]) => {
      const currArgs = {
        key,
        value,
        path: currPath,
        ...args,
      } as IDeepWalkHookOptions<A>;
      if (isBranch(currArgs)) {
        // Use value from branch fn if it is provided and if it returns
        // sth other than undefined.
        const currVal = (onBranch ? onBranch(currArgs) : value) ?? value;
        walkQueue.push([currVal, [...currPath, key]]);
        return;
      }
      if (onLeaf) onLeaf(currArgs);
    });
  }
}

/**
 * Walks objects and merges values on the leaf nodes. Returns an object with
 * two properties:
 * - `value` - the new object with the merged values.
 * - `origin` - object with the same structure with the indices of first
 *   occurence instead of values
 *
 * The function is inspired by Ramda's mergeDeepWith, with the difference that
 * this function allows user to tap into hooks that are called on:
 * - `isBranch` - checking whether current node is a branch node
 * - `onBranch` - branch node
 * - `onAssign` - assignment to leaf node (AKA if old value is `undefined`)
 * - `onMerge` - merge to leaf node (AKA old values is not `undefined`)
 *
 * `onAssign` is called with object with following properties:
 * - `value` - value that is being assigned
 * - `path` - list of strings representing the nested object path
 * - `index` - 0-based index, the position of the parent object (where the
 *   function was called) within the list of objects that are to be merged.
 * - `source` - the parent object where the function was called.
 * - `origin` - index position where a value for the given path was first
 *   observed. If this is the first time the value is observed,
 *   `origin` === `index`.
 *
 * The return value of `onAssign` will be assigned to a newly created nested
 * object at the given path.
 *
 * `onMerge` is called with all the above, plus following properties:
 * - `oldValue` - value that has been previously assigned to the path.
 *
 * The return value of `onAssign` will be assigned to a newly created nested
 * object at the given path.
 *
 * Hooks `onBranch` and `isBranch` are the same as defined in `deepWalk`
 */
export function mergeDeepWith<T extends DeepObject>(
  options: {
    onAssign?: IMergeDeepAssignFunc;
    onMerge?: IMergeDeepMergeFunc;
    onBranch?: IMergeDeepBranchFunc;
    isBranch?: IMergeDeepIsBranchFunc;
  } = {},
  ...objects: T[]
) {
  const {
    onAssign = ({ value }) => value,
    onMerge = ({ value }) => value,
    onBranch,
    isBranch,
  } = options;

  const result = {} as T;
  // Stores info on which value comes from which object
  const origin = {} as IOrigin;
  const cachedPaths = {} as { [key: string]: DeepObject };
  const pathDelim = '.';

  const onLeaf = (
    params: IDeepWalkHookOptions<{ index: number; source: T }>,
  ) => {
    const { key, value, path, index, source } = params;
    // Create path to parent
    const pathHash = path.join(pathDelim);
    const parent = cachedPaths[pathHash] || createObjectPath(result, path);
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
  };

  objects.forEach((obj, index) => {
    deepWalk(
      { onLeaf, onBranch, isBranch, args: { index, source: obj as T } },
      obj,
    );
  });
  return { value: result, origin };
}
