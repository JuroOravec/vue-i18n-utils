import { Option } from 'commander';
import zip from 'lodash.zip';

import type { I_Item } from '../../lib/item/types';
import type { Cmd } from './types';

export function parseVariadicArg(
  program: Cmd,
  args: string[],
  flags: string[],
  options: {
    cmd?: Cmd;
    cmdName?: string;
    option?: Option;
    requiredArgCount?: number;
    optionalArgCount?: number;
  } = {},
) {
  const {
    cmd = program,
    cmdName,
    option = {},
    requiredArgCount = 1,
    optionalArgCount = 0,
  } = options;
  cmd._name;
  const cmdPos = cmdName ? (program.rawArgs as string[]).indexOf(cmdName) : 0;
  const parsedArgs = [] as string[][];
  const argsToRemove = [] as string[];
  let argEntry = null as string[] | null;

  for (const arg of program.rawArgs.slice(cmdPos + 1)) {
    if (argEntry) {
      // The first option arg is covered by commander
      if (argEntry.length === 0) {
        argEntry!.push(arg);
        continue;
      }

      // Add first N args that are required. These are the ones that are
      // incorrectly included among the positional args.
      if (argEntry.length > 0 && argEntry.length < requiredArgCount) {
        argEntry!.push(arg);
        argsToRemove.push(arg);
        continue;
      }

      // Process last M args that are optional. These too are incorrectly
      // included among the positional args.
      // We assume the optional arg was not provided and that there are no more
      // optional args to be assigned to this option if the arg starts with '-'
      // (e.g. -o / --option / --).
      if (
        argEntry.length > 0 &&
        argEntry.length < requiredArgCount + optionalArgCount &&
        !arg.startsWith('-')
      ) {
        argEntry!.push(arg);
        argsToRemove.push(arg);
        continue;
      }

      // If we got all the way here, we came to the end of the arg group
      // (optional args were terminated by '--' or different option)
      parsedArgs.push(argEntry);
      argEntry = null;
      // Fall through to check if the option that terminated this sequence is
      // the option we respond to.
    }
    if (flags.includes(arg)) {
      argEntry = [];
      continue;
    }
  }
  // If input sequence finished while adding optional args, the last arg
  // group was not added.
  if (argEntry) {
    // If the sequence ended before providing all required args, throw.
    if (argEntry.length < requiredArgCount) cmd.optionMissingArgument(option);
    else parsedArgs.push(argEntry as string[]);
  }

  const newArgs = [];
  for (const arg of args) {
    if (!argsToRemove.length) {
      newArgs.push(arg);
      continue;
    }
    const removeIndex = argsToRemove.indexOf(arg);
    if (removeIndex !== -1) argsToRemove.splice(removeIndex, 1);
    else newArgs.push(arg);
  }
  return { remainArgs: newArgs, parsedArgs };
}

export function processVariadicArgs<T extends I_Item.Item>(
  items: I_Item.ItemArrayLike<T>,
  argGroups: string[][],
  options: {
    resolvers?: ((items: T[], values: string[]) => any[])[];
  },
) {
  const itemsCopy = [...items];
  const { resolvers = [] } = options;

  return argGroups.map((argGroup) => {
    const args = zip(
      argGroup,
      resolvers,
      argGroup.map((_) => new Map()),
    ) as [string, typeof resolvers[0], Map<string, any>][];

    const resolvedArgs = args.map(([rawVal, resolver, cache]) => {
      if (rawVal === undefined) return [];
      if (cache.has(rawVal)) return cache.get(rawVal);
      const vals = resolver(itemsCopy, [rawVal]);
      cache.set(rawVal, vals);
      return vals;
    }) as any[][];

    return resolvedArgs;
  });
}
