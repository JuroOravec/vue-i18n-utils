export function applyMixins(derivedCtor: any, baseCtors: any[]) {
  baseCtors.forEach((baseCtor) => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
      Object.defineProperty(
        derivedCtor.prototype,
        name,
        Object.getOwnPropertyDescriptor(baseCtor.prototype, name)!,
      );
    });
  });
}

export function applyStaticMixins(derivedCtor: any, baseCtors: any[]) {
  baseCtors.forEach((baseCtor) => {
    class DummyClass {}
    const defaultClassProps = Object.getOwnPropertyNames(DummyClass);
    Object.getOwnPropertyNames(baseCtor)
      .filter((name) => !defaultClassProps.includes(name))
      .forEach((name) => {
        Object.defineProperty(
          derivedCtor,
          name,
          Object.getOwnPropertyDescriptor(baseCtor, name)!,
        );
      });
  });
}
