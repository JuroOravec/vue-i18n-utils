import path from 'path';

import type { IResolver } from '../types';
import { CwdPathResolver, GlobPathResolver, NullPathResolver } from '..';

// TODO Add tests for LocaleResolver
// TODO Add tests for KeyResolver
// TODO Add tests for ValueResolver
describe('PathResolver', () => {
  const resolvers = [
    [NullPathResolver.name, NullPathResolver, {}],
    [CwdPathResolver.name, CwdPathResolver, { cwd: 'some/path' }],
    [GlobPathResolver.name, GlobPathResolver, { cwd: 'some/path' }],
  ] as [string, new (...args: any[]) => IResolver.PathResolver, object][];

  describe.each(resolvers)(
    `common (subclass %s)`,
    (className, klass, options) => {
      test('can instantiate', () => {
        const pathResolver = new klass();
        expect(pathResolver).toBeTruthy();
        expect(pathResolver.resolve).toBeTruthy();
      });

      test('can pass args at instantiation', () => {
        const emptyPathResolver = new klass({});
        expect(emptyPathResolver.options).toEqual({});
        const nonemptyPathResolver = new klass(options);
        expect(nonemptyPathResolver.options).toEqual(options);
      });

      test('can pass args at resolve', async () => {
        const pathResolver = new klass();
        await pathResolver.resolve([], options);
      });

      test('passing empty array returns empty array', async () => {
        const pathResolver = new klass(options);
        const paths = await pathResolver.resolve([]);
        expect(paths).toBeTruthy();
        expect(paths).toHaveLength(0);
      });
    },
  );

  // Note that although this is tested with the PathResolver, this should be
  // applicable to each subclass
  test('args passed to resolve method override those from instantiation', async () => {
    const dummyPaths = ['a', 'b', 'c'];
    const dummyCwd = '/this/super/cool/path';
    const pathResolver = new CwdPathResolver({ cwd: 'bonjour' });
    const paths = await pathResolver.resolve(dummyPaths, { cwd: dummyCwd });
    const expectePaths = dummyPaths.map((p) => path.resolve(dummyCwd, p));
    expect(paths).toBeTruthy();
    expect(paths).toHaveLength(expectePaths.length);
    expect(paths).toEqual(expectePaths);
  });

  describe('NullPathResolver', () => {
    test('returns given paths', async () => {
      const dummyPaths = ['a', 'b', 'c'];
      const pathResolver = new NullPathResolver();
      const paths = await pathResolver.resolve(dummyPaths);
      expect(paths).toBeTruthy();
      expect(paths).toHaveLength(dummyPaths.length);
      expect(paths).toEqual(dummyPaths);
    });
  });

  describe('CwdPathResolver', () => {
    const dummyPaths = ['../some.thing', '/a/n/o/t/h/e/r/thi.ng', './path'];

    test('resolves given paths relative to process.cwd by default', async () => {
      const pathResolver = new CwdPathResolver();
      const paths = await pathResolver.resolve(dummyPaths);
      const expectePaths = dummyPaths.map((p) =>
        path.resolve(process.cwd(), p),
      );
      expect(paths).toBeTruthy();
      expect(paths).toHaveLength(expectePaths.length);
      expect(paths).toEqual(expectePaths);
    });

    test('resolves given paths relative to a specified cwd if given in option', async () => {
      const dummyCwd = '/this/super/cool/path';
      const pathResolver = new CwdPathResolver();
      const paths = await pathResolver.resolve(dummyPaths, { cwd: dummyCwd });
      const expectePaths = dummyPaths.map((p) => path.resolve(dummyCwd, p));
      expect(paths).toBeTruthy();
      expect(paths).toHaveLength(expectePaths.length);
      expect(paths).toEqual(expectePaths);
    });
  });
});
