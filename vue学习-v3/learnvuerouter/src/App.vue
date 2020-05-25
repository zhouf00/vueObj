<template>
  <div id="app">
     <router-link to="/home" tag='button' replace>首页</router-link>
     <router-link to="/about" tag='button' replace>关于</router-link>
     <router-link :to="'/user/' + userid" tag='button' replace>用户</router-link>
     <!-- <button @click="homeClick">首页</button>
     <button @click="aboutClick">关于</button> -->
     <router-view></router-view>
    <!-- <img src="./assets/logo.png"> -->
    <!-- <router-view/> -->
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      userid: 'tianle'
    }
  },
  methods:{
    // 通过命令的方式修改路由 vue-router
    homeClick () {
      this.$router.push('/home')
    },
    aboutClick () {
      this.$router.push('/about')
    }
  }
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
  .active{
    color: #f00;
  }
</style>
