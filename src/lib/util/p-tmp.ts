import { file as tmpFile, FileResult, FileOptions } from 'tmp';

export function file(options: FileOptions = {}): Promise<FileResult> {
  return new Promise((resolve, reject) => {
    tmpFile(options, (err, name, fd, removeCallback) =>
      err ? reject(err) : resolve({ name, fd, removeCallback }),
    );
  });
}
