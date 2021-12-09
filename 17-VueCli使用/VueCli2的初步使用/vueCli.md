### 必须安装Node8.9或者以上的版本
#### 安装脚手架
    npm install -g @vue/cli
##### 拉取2.x模板（旧版本）
    npm install -g @vue/cli-init
    
**vue cli2初始化项目**
    vue init webpack my-project

**vue runtimeonly 和 vue compiler区别** 
vue compiler : vue显示过程 template -> ast -> redner -> vdom ->ui
vue runtimeonly : redner -> vdom ->ui
vue runtimeonly更轻量级
**是否使用esLint** 
index.js中 useEslint属性来判断是否开启esLint
