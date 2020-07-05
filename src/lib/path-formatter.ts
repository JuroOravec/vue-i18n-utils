import path from 'path';

export namespace IPathFormatter {
  export interface CtorOptions {
    localePattern?: RegExp;
  }

  export interface PathFormatter {
    localePattern: RegExp;
    /**
     * Detect locale from path
     */
    localeFromPath: (path: string) => string | null | Promise<string | null>;

    /**
     * Replace path while keeping the locale.
     */
    changePath: (p: string, newPath: string) => string | Promise<string>;

    /**
     * Replace locale while keeping the rest of the path.
     */
    changeLocale: (p: string, newLocale: string) => string | Promise<string>;
  }
}

/**
 * Class that formats and prepares for writing parts of (or whole) ContentGroup
 */
export class PathFormatter implements IPathFormatter.PathFormatter {
  localePattern: RegExp;

  constructor(options: IPathFormatter.CtorOptions = {}) {
    // Default match last 2 letters of file name (not ext) that are either
    // standalone or prefixed with dash, e.g.:
    // - 'en' in 'hello-en.json'
    // - 'en' in 'en.json'
    // - no match in 'helloen.json'
    // - no match in 'helloen'
    this.localePattern =
      options.localePattern ?? /(?<=-|^|\/|\\)(?<locale>.{2})(?=\.[^.]+$)/iu;
  }

  localeFromPath(path: string): string | null {
    const match = path.match(this.localePattern);
    return match ? (match.groups ? match.groups.locale : match[0]) : match;
  }

  changePath(p: string, newPath: string): string {
    const locale = this.localeFromPath(p);

    if (locale === null) throw Error(`No locale detected in '${p}'`);

    return this.changeLocale(newPath, locale);
  }

  changeLocale(p: string, newLocale: string): string {
    if (!newLocale) throw Error(`Invalid locale '${newLocale}'`);

    const oldLocale = this.localeFromPath(p);

    // We can use the regexp to do the replace
    if (oldLocale) {
      return p.replace(this.localePattern, newLocale);
    }

    // Else add the new locale as a name suffix
    const parsedPath = path.parse(p);

    return path.format({
      ...parsedPath,
      base: parsedPath.name + '-' + newLocale + parsedPath.ext,
    });
  }
}
