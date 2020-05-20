import glob from 'glob';
import merge from 'lodash.merge';
import path from 'path';

import type { AnyObj } from '../types';
import debug from './debug';

/**
 * Path resolver interface
 */
export interface IPathResolver {
  resolve: (paths: any[], options?: AnyObj) => string[];
}

/**
 * `NullPathResolver`'s constructor options object
 */
export interface NullPathResolverCtorOptions {
  cwd?: string;
}

/**
 * Options for `NullPathResolver`'s `resolve` method
 */
export interface NullResolveOption extends NullPathResolverCtorOptions {}

/**
 * Path resolver that simply returns the paths back.
 */
export class NullPathResolver implements IPathResolver {
  constructor(public options: PathResolverCtorOptions = {}) {}

  resolve(paths: string[], options: ResolveOption = {}) {
    debug('[null-path-resolver] Resolving paths.');
    debug('[null-path-resolver] Done resolving paths.');
    return paths;
  }
}

/**
 * `PathResolver`'s constructor options object
 */
export interface PathResolverCtorOptions {
  cwd?: string;
}

/**
 * Options for `PathResolver`'s `resolve` method
 */
export interface ResolveOption extends PathResolverCtorOptions {}

/**
 * Path resolver that resolves the path to current working directory (CWD).
 *
 * CWD can be overriden by providing `cwd` property to constructor or
 * `resolver` options.
 */
export class PathResolver implements IPathResolver {
  constructor(public options: PathResolverCtorOptions = {}) {}

  resolve(paths: string[], options: ResolveOption = {}) {
    const { cwd } = merge({}, PathResolver.defaults, this.options, options);

    debug('[path-resolver] Resolving paths.');
    const filepaths = paths.map((p) => path.resolve(cwd, p));
    debug('[path-resolver] Done resolving paths.');
    return filepaths;
  }

  static get defaults() {
    return {
      cwd: process.cwd(),
    };
  }
}

/**
 * `GlobPathResolver`'s constructor options object
 */
export interface GlobPathResolverCtorOptions extends glob.IOptions {}

/**
 * Options for `GlobPathResolver`'s `resolve` method
 */
export interface GlobResolveOption extends glob.IOptions {}

/**
 * Path resolver that resolves the path as a glob.
 *
 * Glob options can be passed to constructor or `resolver` options.
 */
export class GlobPathResolver implements IPathResolver {
  constructor(public options: GlobPathResolverCtorOptions = {}) {}

  resolve(globs: string[], options: GlobResolveOption = {}) {
    const { cwd } = merge({}, GlobPathResolver.defaults, this.options, options);

    const globPattern = GlobPathResolver.join(globs);
    debug(`[glob-path-resolver] Resolving paths for pattern ${globPattern}.`);
    const filepaths = glob
      .sync(globPattern, { nodir: true, ...options })
      .map((p) => path.resolve(cwd, p));
    debug(
      '[glob-path-resolver] Done resolving paths. Found ' +
        `${filepaths.length} files for glob '${globPattern}'.`,
    );
    return filepaths;
  }

  /**
   * Join globs into a single pattern
   */
  static join(globs: string[]) {
    return `{${globs.join(',')},}`;
  }

  static get defaults() {
    return {
      cwd: process.cwd(),
    };
  }
}
