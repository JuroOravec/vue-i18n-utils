import type { Cmd } from './types';

export function applyOutputOptions(
  cmd: Cmd,
  options: { required?: boolean; desc?: string } = {},
) {
  const {
    required = false,
    desc = 'Output file where data is written.',
  } = options;

  const optsMethod = required ? 'requiredOption' : 'option';
  cmd[optsMethod]('-o --output <file>', desc);
}
