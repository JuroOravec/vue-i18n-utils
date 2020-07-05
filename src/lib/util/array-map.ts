export class ArrayMap<K extends any = any, V extends any = any> extends Map<
  K,
  V[]
> {
  getOrCreate(key: K): V[] {
    if (!super.has(key)) {
      const arr = [] as V[];
      super.set(key, arr);
      return arr;
    }
    return super.get(key) || [];
  }

  push(key: K, value: V, ...values: V[]): this {
    if (!super.has(key)) super.set(key, []);
    const arr = super.get(key) || [];
    arr.push(value, ...values);
    return this;
  }

  static groupBy<K extends any = any, V extends any = any>(
    list: V[] | IterableIterator<V>,
    iteratee: (x: V) => K,
  ): ArrayMap<K, V> {
    const map = new ArrayMap<K, V>();
    for (const item of list) {
      const key = iteratee(item);
      map.push(key, item);
    }
    return map;
  }
}
