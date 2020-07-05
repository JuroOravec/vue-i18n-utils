import merge from 'lodash.merge';
import path from 'path';

import type { IResolver } from './types';
import {
  pathResolverDebug,
  nullPathResolverDebug,
  globPathResolverDebug,
  cwdPathResolverDebug,
} from '../util/debug';
import { Resolver } from './resolver';
import pGlob from '../util/p-glob';

export abstract class AbstractPathResolver extends Resolver
  implements IResolver.Resolver {
  static get defaults() {
    return {
      ...super.defaults,
      logger: pathResolverDebug,
    };
  }
}

/**
 * Path resolver that simply returns paths back.
 */
export class NullPathResolver extends AbstractPathResolver
  implements IResolver.Path.Null.Resolver {
  constructor(public options: IResolver.Path.Null.CtorOptions = {}) {
    super(options);
  }

  resolve<T extends string>(paths: T[], options = {}): T[] {
    this.logger('Resolving paths.');
    this.logger('Done resolving paths.');
    return paths;
  }

  static get defaults() {
    return {
      ...super.defaults,
      logger: nullPathResolverDebug,
    };
  }
}

/**
 * Path resolver that resolves paths to current working directory (CWD).
 *
 * CWD can be overriden by providing `cwd` property to constructor or
 * `resolver` options.
 */
export class CwdPathResolver extends AbstractPathResolver
  implements IResolver.Path.Cwd.Resolver {
  constructor(public options: IResolver.Path.Cwd.CtorOptions = {}) {
    super(options);
  }

  resolve(
    paths: string[],
    options: IResolver.Path.Cwd.ResolveOptions = {},
  ): string[] {
    const { cwd } = merge({}, CwdPathResolver.defaults, this.options, options);

    this.logger('Resolving paths.');

    const filepaths = paths.map((p) => path.resolve(cwd, p));

    this.logger('Done resolving paths.');

    return filepaths;
  }

  static get defaults() {
    return {
      ...super.defaults,
      cwd: process.cwd(),
      logger: cwdPathResolverDebug,
    };
  }
}

/**
 * Path resolver that resolves paths as globs, relative to current working
 * directory.
 *
 * Glob options can be passed to constructor or `resolver` options.
 */
export class GlobPathResolver extends AbstractPathResolver
  implements IResolver.Path.Glob.Resolver {
  constructor(public options: IResolver.Path.Glob.CtorOptions = {}) {
    super(options);
  }

  async resolve(
    globs: string[],
    options: IResolver.Path.Glob.ResolveOptions = {},
  ): Promise<string[]> {
    const opts = merge({}, GlobPathResolver.defaults, this.options, options);
    const { cwd } = opts;

    const globPattern = GlobPathResolver.join(globs);
    this.logger(`Resolving paths for pattern ${globPattern}.`);

    const filepaths = (
      await pGlob(globPattern, { nodir: true, ...opts })
    ).map((p) => path.resolve(cwd, p));

    this.logger(
      'Done resolving paths. Found ' +
        `${filepaths.length} files for glob '${globPattern}'.`,
    );

    return filepaths;
  }

  /**
   * Join globs into a single pattern
   */
  static join(globs: string[]): string {
    return `{${globs.join(',')},}`;
  }

  static get defaults() {
    return {
      ...super.defaults,
      cwd: process.cwd(),
      logger: globPathResolverDebug,
    };
  }
}
