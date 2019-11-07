#!/usr/bin/env node

process.title = 'xiangxin-vue-cli';

require('commander')
.version(require('../package').version)
.usage('<command> [options]')
.command('generate name', '快速创建模板，简写 g, 创建name文件夹,例如：xiangxin-vue-cli g name')
.parse(process.argv)

require('./generate');