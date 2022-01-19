<template>
  <div id="app">
    
    <img src="./assets/logo.png">
    
    <!-- router- link 默认渲染成<a> replace 标签 -->
    <router-link to="/home" replace>首页</router-link>
    <!-- tag 改变默认的类型 -->
    <router-link to="/helloworld" tag="button" replace>helloworld</router-link>
    <router-link to="/about" replace>关于</router-link>
    <router-link :to="'/user/'+userId" replace>用户</router-link>
    <router-view/>
    <!-- router-view 表示渲染的内容的位置  在路由切换的时候，表示挂载的组件 -->
    <div @click="linkHome">首页</div>
    <div @click="linkAbout">关于</div>
    <button @click="linkProfile">档案</button>
    
    
    
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      userId: 'lisi'
    }
  },
  methods: {
    linkHome(){
      // 通过代码来操作路由
      this.$router.push('/home')
      console.log("link home")
    },
    linkAbout(){
      this.$router.push('/about')
      console.log("linke about")
    },
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
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
