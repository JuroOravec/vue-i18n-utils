import { Command, CommandOptions } from 'commander';

import type { Cmd } from './lib/types';
import { version } from '../lib/util/package-info';
import { createPatchCmd } from './patch';
import { createDropCmd } from './drop';
import { createListCmd } from './list';
import { createExportCmd } from './export';
import { createLocaleCmd } from './locale';
import { createSchemaCmd } from './schema';
import { createValidateCmd } from './validate';

const commands = [
  [createDropCmd],
  [createPatchCmd],
  [createListCmd, { isDefault: true }],
  [createExportCmd],
  [createLocaleCmd],
  [createSchemaCmd],
  [createValidateCmd],
] as (
  | [(parent: Cmd, options: CommandOptions) => Cmd, CommandOptions]
  | [(parent: Cmd, options: CommandOptions) => Cmd]
)[];

export const program = new Command()
  .version(version)
  .name('i18n-util')
  .allowUnknownOption();
commands.forEach(([createCmd, opts = {}]) => createCmd(program, opts));

if (require.main === module) {
  program.parse(process.argv);
}
