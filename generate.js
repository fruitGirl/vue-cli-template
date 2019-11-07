const fs = require('fs-extra')
const chalk = require('chalk')
const path = require('path')

exports.run = function(name) {
  const pageDir = path.join(process.cwd(), `./${name}`);
  fs.pathExists(pageDir, (existsErr, exists) => {
    if (existsErr) {
      console.log(chalk.red(existsErr))
      return;
    }

    if (exists) {
      console.log(chalk.red('文件夹已存在，请更换名称'))
    } else {
      fs.copy(
        path.join(__dirname, './template'), 
        pageDir, 
        copyErr => {
          if (copyErr) {
            console.log(copyErr)
            return;
          }
          console.log(chalk.gray(`${pageDir} 创建成功`))
        }
      )
    }
  });
}