#!/usr/bin/env node

const program = require('commander')
const generate = require('../generate')

program
  .command('generate <name>')
  .description('快速创建vue模板脚手架')
  .alias('g')
  .action(function(name) {
    generate.run(name)
  });
  program.parse(process.argv)