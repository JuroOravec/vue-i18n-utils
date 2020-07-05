export default function toParams<
  T extends { [key: string]: any },
  K extends string = 'description'
>(objects: T[], options: { descriptionKey?: K } = {}): [T[K], Omit<T, K>][] {
  const { descriptionKey = 'description' } = options;

  return objects.map((obj) => {
    const { [descriptionKey]: key, ...params } = obj;
    return [key, params] as [T[K], Omit<T, K>];
  });
}
