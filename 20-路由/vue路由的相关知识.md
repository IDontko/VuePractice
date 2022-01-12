**路由的介绍**
<!-- router- link 默认渲染成<a> replace 标签 -->
    <router-link to="/home" replace>首页</router-link>
<!-- tag 改变默认的类型 -->
    <router-link to="/helloworld" tag="button" replace>helloworld</router-link>
// 通过代码来操作路由, $router在所有组件中都存在
    this.$router.push('/home')

//路由模式

```
mode: 'history', 
  "hash" | "history" | "abstract"
  hash: 使用 URL hash 值来作路由。支持所有浏览器，包括不支持 HTML5 History Api 的浏览器。
```

history: 依赖 HTML5 History API 和服务器配置。查看 HTML5 History 模式。

abstract: 支持所有 JavaScript 运行环境，如 Node.js 服务器端。如果发现没有浏览器的 API，路由会自动强制进入这个模式。

  //设置链接激活时候的类名
  linkActiveClass : 'active'

#### **router-view**

router-view 表示渲染的内容的位置  在路由切换的时候，表示挂载的组件 .

#### 动态路由

动态构建路由 例如 user/zhangsan , user/lisi

```javascript
{
      // 动态路径 '/user/:userId'
      path: '/user/:userId',
      name: 'user',
      component: user
},
```

```javascript
 computed: {
        userId() {
            console.log(this.$route.params)
            return this.$route.params.userId
        }
    }
```

#### 路由的懒加载

把不同路由对应的组件分割成不同的代码块，然后当路由被访问的时候才加载对应组件，这样更高效。

写法：

```javascript
 component: () => import('../components/About')
```

#### 嵌套路由的使用

可以在路由js下，写children

```javascript
 {
      path: '/home',
      name: 'HOME',
      component: Home,
      children:[
        {
          path: 'news',
          component: HomeNew
        },
        {
          path: 'msg',
          component: HomeMsg
        },
      ]
    },
```

#### 参数的传递

* params的类型： 一般传递参数
* query的类型: 通过query参数进行传递对象

```javascript
linkProfile(){
      this.$router.push({
        path: '/profile',
        query: {
          name: 'zhangsan',
          age : 12,
          height: '1.88'
        }
      })
    }
```

#### $router和$route 区别

* $router对象是全局路由的实例，是router构造方法的实例
* $route对象表示当前的路由信息，包含了当前url解析得到的信息，包含当前路径，参数,query对象。

#### 导航守卫

[vue官方文档]: https://router.vuejs.org/zh/guide/advanced/navigation-guards.html

#### keep-alive

避免组件被频繁创建

```
<keep-alive>
	<!-- 匹配到的组件会被缓存-->
	<router-view/>
	
</keep-alive>
```



