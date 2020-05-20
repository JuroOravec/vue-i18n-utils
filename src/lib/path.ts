import path from 'path';

/**
 * Return directory name or file name without extension.
 */
export function pathStem(p: string) {
  return path.parse(p).name;
}

/**
 * Check if two paths are siblings (in the same directory).
 */
export function pathsAreSiblings(p1: string, p2: string) {
  const [dir1, dir2] = [p1, p2].map((p) => path.dirname(path.resolve(p)));
  return dir1 === dir2;
}

/**
 * Check if first path is parent of the second path.
 *
 * In other words, whether second path is directly under first path.
 */
export function pathIsParent(p1: string, p2: string) {
  return pathsAreSiblings(p1, path.dirname(p2));
}
