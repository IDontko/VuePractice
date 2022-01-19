import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import user from '../components/User'

// 通过vue.use(插件)，安装插件
Vue.use(Router)

const originalPush  =Router.prototype.push
Router.prototype.push = function push(location){
  return originalPush.call(this, location).catch (err => err)
}

const About = () => import('../components/About')
const Home = () => import('../components/HOME')
const HomeNew = () => import('../components/HomeNews')
const HomeMsg = () => import('../components/HomeMessage')
const profile = () => import('../components/profile')
export default new Router({
  // 配置路由和组件之间的关系
  routes: [
    {
      path:'',
      redirect: '/home'
    },
    {
      path: '/helloworld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'HOME',
      component: Home,
      children:[
        {
          path: '',
          redirect: 'news'
        },
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
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      // 动态路径 '/user/:userId'
      path: '/user/:userId',
      name: 'user',
      component: user
    },
    {
      path: '/profile',
      component: profile
    }
  ], 
  // 路由模式
  mode: 'history',
  //设置链接激活时候的类名
  linkActiveClass : 'active'
})
