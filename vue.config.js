// vue.config.js
const path = require('path');


// 窗口自适应配置
// // 引入等比适配插件
// const px2rem = require('postcss-px2rem')
// // 配置基本大小
// const postcss = px2rem({
//   // 基准大小 baseSize，需要和rem.js中相同
//   remUnit: 75
// });


// 更换图标
module.exports = {
  pwa: {
    iconPaths: {
      favicon32: 'favicon.ico',
      favicon16: 'favicon.ico',
      appleTouchIcon: 'favicon.ico',
      maskIcon: 'favicon.ico',
      msTileImage: 'favicon.ico'
    }
  },

  // 使用等比适配插件
  css: {
    loaderOptions: {
      css: {},
      postcss: {
        // 这是rem适配的配置  注意： remUnit在这里要根据lib-flexible的规则来配制，如果您的设计稿是750px的，用75就刚刚好。
        plugins: [
          require('postcss-px2rem')({
            /* // remUnit: 54切记与flexible.js中判断语句保持一致1:10
              function refreshRem() {
               //获取屏幕宽度
               var width = docEl.getBoundingClientRect().width;
               if (width / dpr > 540) {
                 //这里当屏幕宽度大于540时，宽度写死为540了，所以要想电脑端也能通过rem自适应,替换成 width = width * dpr;
                 width = 540 * dpr;
               }
             
               var rem = width / 10;
               docEl.style.fontSize = rem + 'px';
               flexible.rem = win.rem = rem;
             } */
            remUnit: 37.5
            // remPrecision: 8//换算的rem保留几位小数点
          })
        ]
      }
    }
  },

  // lintOnSave: true,
  // css: {
  //   loaderOptions: {
  //     postcss: {
  //       plugins: [
  //         postcss
  //       ]
  //     }
  //   }
  // },







  // chainWebpack: config => {
  //   config.module
  //     .rule('css')
  //     .test(/\.css$/)
  //     .oneOf('vue')
  //     .resourceQuery(/\?vue/)
  //     .use('px2rem')
  //     .loader('px2rem-loader')
  //     .options({
  //       remUnit: 75
  //     })
  // },

  // *1.对接后端
  configureWebpack: {
    serve: {
      proxy: {
        "/api": {
          target: "https://www.easy-mock.com/mock/5bc75b55dc36971c160cad1b/sheets", // 目标代理接口地址
          secure: false,
          changeOrigin: true, // 开启代理，在本地创建一个虚拟服务端 (是否开启跨域)
          // ws: true, // 是否启用websockets
          pathRewrite: {
            //规定请求地址以什么作为开头
            "^/api": "/"
          }
        }

      }
    }
  }


};
