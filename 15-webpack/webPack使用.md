***webpack
  是一个模块化的打包工具，支持我们代码中写模块化。将模块化的代码中的js打包到一个js文件中，引入时会非常方便

**** webpack打包命令
    webpack src/main.js dist/bundle.js

**** 前端项目初始化命令
    npm init  初始化项目，会生成package.json, package.json是用来放前端引入的一些包。类似于 pom文件
    webpack.config.js 文件，可以放webpack 入口和出口的命令，直接使用webpack 就可以了

**** 局部安装webpack
    npm install webpack --save-dev 

**** webpack中loader
  loader适用过程：
    1.通过npm安装需要使用的loader
    2.在webpack.config.js 的modules里进行配置

