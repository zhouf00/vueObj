<template>
  <div>
    <h2>我是用户界面</h2>
    <p>我是用户相关内容</p>
    <h2>{{userid}}</h2>
  </div>
</template>

<script>
  export default {
    name: 'User',
    computed: {
      userid () {
        // 拿到路由的id
        return this.$route.params.userid
      }
    }
  }
  
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>