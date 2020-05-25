<template>
  <div>
    <h2>我是首页</h2>
    <p>我是首页内容</p>
    <router-link to="/home/new">新闻</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'Home'
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>