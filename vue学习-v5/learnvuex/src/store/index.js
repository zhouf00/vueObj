import Vue from 'vue'
import Vuex from 'vuex'

// 1. 安装插件
Vue.use(Vuex)

// 2. 创建对象
const store = new Vuex.Store({
  state: {
    // 保存状态
    counter:1000,
    age: 18,
    students:[
      {id: 110, name: 'why', age: 18},
      {id: 111, name: 'kobe', age: 24},
      {id: 112, name: 'james', age: 30},
      {id: 113, name: 'curry', age: 20},
    ]
  },
  mutations:{
    // 方法
    increment (state) {
      state.counter++
    },
    decrement (state) {
      state.counter--
    },
    incrementCount (state, count) {
      state.counter += count
    }
  },
  actions: {
    // 异步操作
  },
  getters: {
    // 类计算属性
    powerCounter(state){
      return state.counter * state.counter
    },
    more20stu (state) {
      return state.students.filter(s => s.age > 20)
    },
    more20stuLength(state, getters) {
      return getters.more20stu.length
    },
    moreAgeStu (state) {
      // return function (age) {
      //   return state.students.filter(s => s.age > age)
      // }
      return  age => {
        return state.students.filter(s => s.age > age)
      }
    }
  },
  modules: {
    // 划分模块
  }

})

// 3. 导出store独享
export default store