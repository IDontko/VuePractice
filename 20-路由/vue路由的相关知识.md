**路由的介绍**
<!-- router- link 默认渲染成<a> replace 标签 -->
    <router-link to="/home" replace>首页</router-link>
<!-- tag 改变默认的类型 -->
    <router-link to="/helloworld" tag="button" replace>helloworld</router-link>
// 通过代码来操作路由, $router在所有组件中都存在
    this.$router.push('/home')

    // 路由模式
  mode: 'history', 
  "hash" | "history" | "abstract"
  hash: 使用 URL hash 值来作路由。支持所有浏览器，包括不支持 HTML5 History Api 的浏览器。

    history: 依赖 HTML5 History API 和服务器配置。查看 HTML5 History 模式。
    
    abstract: 支持所有 JavaScript 运行环境，如 Node.js 服务器端。如果发现没有浏览器的 API，路由会自动强制进入这个模式。

  //设置链接激活时候的类名
  linkActiveClass : 'active'

<router-view>  <!-- router-view 表示渲染的内容的位置  在路由切换的时候，表示挂载的组件 -->
  动态路由：

  