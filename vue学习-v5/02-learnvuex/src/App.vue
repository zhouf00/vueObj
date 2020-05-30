<template>
  <div id="app">
    <h2>-----{{message}}----------</h2>
    <h2>{{$store.state.counter}}</h2>
    <button @click="addition">+</button>
    <button @click="subtraction">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addStudent">添加学习</button>

    <h2>-----App内容:modules中的内容----------</h2>
    <h2>{{$store.state.a.name}}</h2>
    <button @click="updateName">修改名字</button>
    <h2>{{$store.getters.fullname}}</h2>
    <h2>{{$store.getters.fullname2}}</h2>
    <button @click="asyncUpdateName">异步修改</button>
    
    <h2>-----App内容:info对象的内容是否是响应式的----------</h2>
    <h2>{{$store.state.info}}</h2>
    <button @click="updateInfo">修改信息</button>

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
  import {INCREMENT} from './store/mutations_types'
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
        this.$store.commit(INCREMENT)
      },
      subtraction() {
        this.$store.commit('decrement')
      },
      // mutations的方法传参数
      addCount (count) {
        // 1.普通提交风格
        // this.$store.commit('incrementCount', count)
        // 2.mutation风格
        this.$store.commit({
          type: 'incrementCount',
          count: count
        })
      },
      addStudent () {
        const stu = {id:114, name:'alan', age:30}
        this.$store.commit('addStudent',stu)
      },
      updateInfo () {
        // this.$store.commit({
        //   type:'updateInfo'
        // })
        // this.$store.dispatch('aUpdateInfo', {
        //   message: '我是携带信息',
        //   success:  () => {
        //     console.log('里面已经完成了');
        //   }
        // })
        this.$store.dispatch('aUpdateInfo', '我是携带的信息')
        .then(res => {
          console.log('里面完成了提交');
          console.log(res)
          
        })
      },
      updateName () {
        this.$store.commit('updateName', 'lisi')
      },
      asyncUpdateName() {
        this.$store.dispatch('aUpdateName')
      }
    },
    computed:{
    
    }
  }
</script>

<style>

</style>
