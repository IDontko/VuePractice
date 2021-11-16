### webpack
  是一个模块化的打包工具，支持我们代码中写模块化。将模块化的代码中的js打包到一个js文件中，引入时会非常方便

#### webpack打包命令
    webpack src/main.js dist/bundle.js

#### 前端项目初始化命令


    npm init  初始化项目，会生成package.json, package.json是用来放前端引入的一些包。类似于 pom文件
    webpack.config.js 文件，可以放webpack 入口和出口的命令，直接使用webpack 就可以了

#### 局部安装webpack

    - npm install webpack --save-dev 

#### webpack中loader
  loader适用过程：
- 通过npm安装需要使用的loader
- 在webpack.config.js 的modules里进行配置

#### 安装Vue 
npm install vue
添加 vue - loader 
`{
        test: /\.vue$/,
        loader: 'vue-loader'
      }
`
#### plugins 插件
 plugins: [
    // 请确保引入这个插件！
    new VueLoaderPlugin(),
    new webpack.BannerPlugin('最终版权归gy所有')
  ]
  **html-webpack-plugin** 将html打包入dist文件夹中
   **uglifyjs-webpack-plugin@1.1.1** 将js代码压缩
   **webpack-dev-server** 本地建立一个node服务器，方便修改代码时候调试
   **webpack-merge** 将配置文件合并