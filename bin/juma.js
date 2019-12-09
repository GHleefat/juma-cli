#!/usr/bin/env node
//console.log("juma");

const program = require('commander');

program.version(require('../package').version)
    .usage('<command> [options]')
    .command('add', 'add a new template')
    .command('delete', 'delete a template')
    .command('list', 'list all the templates')
    .command('init', 'generate a new project from a template')
    .command('minit', 'generate a test project from jest-demo')

program.parse(process.argv)