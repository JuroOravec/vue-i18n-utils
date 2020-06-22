import { Cmd } from './types';

export function parseUnknownArgs(args: string[]) {
  const known = [] as string[];
  const unknown = [] as [string, any][];

  const camelcase = (flag: string) =>
    flag
      .split('-')
      .reduce((str, word) => str + word[0].toUpperCase() + word.slice(1));

  let isValue = false;
  let unknownArg: any[] | null = null;
  for (const arg of args) {
    if (isValue) {
      unknownArg!.push(arg);
      unknown.push(unknownArg as [string, any]);
      unknownArg = null;
      isValue = false;
      continue;
    }
    if (arg.startsWith('--no-')) {
      unknown.push([camelcase(arg.slice(5)), false]);
      continue;
    }
    if (arg.startsWith('--yes-')) {
      unknown.push([camelcase(arg.slice(6)), true]);
      continue;
    }
    if (arg.startsWith('--')) {
      unknownArg = [camelcase(arg.slice(2))];
      isValue = true;
      continue;
    }
    known.push(arg);
  }
  return { known, unknown };
}

export function applyOptions(
  cmd: Cmd,
  appliers: (
    | [(cmd: Cmd, options?: any) => void]
    | [(cmd: Cmd, options?: any) => void, any]
  )[],
) {
  for (const [applier, options] of appliers) {
    applier(cmd, options);
  }
}
