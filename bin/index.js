#!/usr/bin/env node

const { program } = require('../dist/bin');

if (require.main === module) {
  program.parse(process.argv);
}
