const url = 'http://localhost:8081';
const path = require("path");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  devServer: {
    port: 8080,
    // open: true, // 自动开启浏览器
    compress: false, // 开启压缩
    overlay: {
      warnings: true,
      errors: true
    }, // 错误、警告在页面弹出
    // 代理
    proxy: {
      '/api': {
        target: url, // target host
        // ws: true, // proxy websockets
        changeOrigin: true, // 允许websockets跨域
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  chainWebpack: config => {
     // 配置别名和全局变量
     config.resolve.alias
     .set("@", resolve("src"))
     .set("@components", resolve("src/components"));
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
      //警告 webpack 的性能提示
      Object.assign(config, {
        performance: {
          hints:'warning',
          //入口起点的最大体积
          maxEntrypointSize: 3000000,
          //生成文件的最大体积
          maxAssetSize: 3000000,
          //只给出 js 文件的性能提示
          assetFilter: function(assetFilename) {
            return assetFilename.endsWith('.js');
          }
        }
      });
      config.plugins.push(
        new UglifyJsPlugin({
          uglifyOptions: {
            warnings: false,
            compress: {
              drop_debugger: false,
              drop_console: true,
              pure_funcs: ['console.log'] // 移除console
            },
          },
          sourceMap: false,
          parallel: true,
        })
      );
    } else {
      // 为开发环境修改配置...
    }
  },
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false,
  // 第三方插件配置
  pluginOptions: {}
};

