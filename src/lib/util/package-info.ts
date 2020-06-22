import readPkgUp from 'read-pkg-up';

export const { packageJson: { name = '', version = '' } = {} } =
  readPkgUp.sync({ cwd: module.filename }) || {};
