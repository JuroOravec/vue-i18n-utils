import glob, { IOptions } from 'glob';

export default function pGlob(
  pattern: string,
  options: IOptions,
): Promise<string[]> {
  return new Promise((resolve, reject) => {
    glob(pattern, options, (err, res) => (err ? reject(err) : resolve(res)));
  });
}
