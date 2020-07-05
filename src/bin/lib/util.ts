import pick from 'lodash.pick';
import intersection from 'lodash.intersection';

import type { AnyObj } from '../../types';

export function collect(value: any, previous: any[]) {
  return [...previous, value];
}

export function intersectionObject(baseOpts: object, ...opts: object[]) {
  return pick(baseOpts, intersection(...opts.map((o) => Object.keys(o))));
}

export function splitObject<T extends AnyObj, K extends string>(
  obj: T,
  keys: K[],
) {
  const objWithKeys = {} as { [Key in K]: T };
  const objWithoutKeys = {} as Omit<T, K>;

  for (const [key, val] of Object.entries(obj)) {
    const assignee = keys.includes(key as K) ? objWithKeys : objWithoutKeys;
    (assignee as any)[key] = val;
  }

  return [objWithKeys, objWithoutKeys] as const;
}
