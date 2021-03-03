#! /usr/bin/env node

const program = require('commander');
const { logPackageVersion } = require('../src/utils');

logPackageVersion();

program
    .usage('<command> [options]')
    .command('create [name]', 'create a project')
    .parse(process.argv);
