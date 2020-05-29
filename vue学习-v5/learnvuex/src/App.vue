<template>
  <div id="app">
    <h2>-----{{message}}----------</h2>
    <h2>{{$store.state.counter}}</h2>
    <button @click="addition">+</button>
    <button @click="subtraction">-</button>
    <button @click="addCount(5)">+5</button>

    <h2>-----App内容:getters相关信息----------</h2>
    <p>{{$store.getters.powerCounter}}</p>
    <p>{{$store.getters.more20stu}}</p>
    <p>{{$store.getters.more20stuLength}}</p>
    <p>{{$store.getters.moreAgeStu(29)}}</p>

    <h2>-----hello Vuex内容----------</h2>
    <hello-vuex/>
  </div>
</template>

<script>
  import HelloVuex from './components/HelloVuex'
  export default {
    name: 'App',
    components:{
      HelloVuex
    },
    data () {
      return {
        message: '我是APP组件',
        counter:0
      }
    },
    methods: {
      // 返回store里的mutations的方法
      addition(){
        this.$store.commit('increment')
      },
      subtraction() {
        this.$store.commit('decrement')
      },
      // mutations的方法传参数
      addCount (count) {
        this.$store.commit('incrementCount', count)
      }
    },
    computed:{
    
    }
  }
</script>

<style>

</style>
