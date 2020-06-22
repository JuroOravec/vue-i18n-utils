/**
 * Map and keep only unique mapped values in single iteration.
 */
export function mapUniq<T extends any, R extends any>(
  arr: T[],
  mapFn: (arg: T) => R = (x) => (x as any) as R,
  uniqFn: (arg: R) => any = (x) => x,
) {
  const cache = new Set();
  const res = [];
  for (const item of arr) {
    const mapped = mapFn(item);
    const uniqVal = uniqFn(mapped);
    if (cache.has(uniqVal)) continue;
    cache.add(uniqVal);
    res.push(mapped);
  }
  return res;
}

/**
 * Keep unique values and map them in single iteration.
 */
export function uniqMap<T extends any, R extends any>(
  arr: T[],
  uniqFn: (arg: T) => any = (x) => x,
  mapFn: (arg: T) => R = (x) => (x as any) as R,
) {
  const cache = new Set();
  const res = [];
  for (const item of arr) {
    const uniqVal = uniqFn(item);
    if (cache.has(uniqVal)) continue;
    cache.add(uniqVal);
    const mapped = mapFn(item);
    res.push(mapped);
  }
  return res;
}

/**
 * Map and filter mapped values in single iteration.
 */
export function mapFilter<T extends any, R extends any>(
  arr: T[],
  mapFn: (arg: T) => R = (x) => (x as any) as R,
  filterFn: (arg: R) => any = (x) => x,
) {
  const res = [];
  for (const item of arr) {
    const mapped = mapFn(item);
    if (filterFn(mapped)) res.push(mapped);
  }
  return res;
}

/**
 * Filter followed by map in single iteration.
 */
export function filterMap<T extends any, R extends any>(
  arr: T[],
  filterFn: (arg: T) => any = (x) => x,
  mapFn: (arg: T) => R = (x) => (x as any) as R,
) {
  const res: R[] = [];
  for (const item of arr) {
    if (filterFn(item)) res.push(mapFn(item));
  }
  return res;
}

/**
 * Map, filter mapped values, and keep only unique mapped values in single
 * iteration.
 */
export function mapFilterUniq<T extends any, R extends any>(
  arr: T[],
  mapFn: (arg: T) => R = (x) => (x as any) as R,
  filterFn: (arg: R) => any = (x) => x,
  uniqFn: (arg: R) => any = (x) => x,
) {
  const cache = new Set();
  return mapFilter(arr, mapFn, (item) => {
    if (!filterFn(item)) return;
    const uniqVal = uniqFn(item);
    if (cache.has(uniqVal)) return;
    cache.add(uniqVal);
    return true;
  });
}

/**
 * Keep only unique values, filter them, and map what remains in single
 * iteration.
 */
export function uniqFilterMap<T extends any, R extends any>(
  arr: T[],
  filterFn: (arg: T) => any = (x) => x,
  uniqFn: (arg: T) => any = (x) => x,
  mapFn: (arg: T) => R = (x) => (x as any) as R,
) {
  const cache = new Set();
  return filterMap(
    arr,
    (item) => {
      if (!filterFn(item)) return;
      const uniqVal = uniqFn(item);
      if (cache.has(uniqVal)) return;
      cache.add(uniqVal);
      return true;
    },
    mapFn,
  );
}

/**
 * Like Array.prototype.find but on match returns value returned by predicate.
 */
export function findMap<T extends any, R extends any>(
  arr: T[],
  predicate: (arg: T) => R = (x) => (x as any) as R,
) {
  for (const item of arr) {
    const res = predicate(item);
    if (res) return res;
  }
}
