/**
 * Hash string
 */
export function hashString(str: string) {
  const len = str.length;
  let hash = 0;
  if (len <= 0) return hash;
  let index = 0;
  while (index < len) {
    hash = ((hash << 5) - hash + str.charCodeAt(index++)) | 0;
  }
  return hash;
}

/**
 * Hash an array of strings based on its content.
 */
export function hashStringArray(arr: string[]) {
  return arr.map(hashString).reduce((agg, val) => agg ^ val, 0);
}
