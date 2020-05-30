import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import moduleA from './modules/modulesA'


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
    ],
    info:{
      name: 'kobe',
      age: 40,
      heigt: 1.98
    }
  },
  mutations,
  actions,
  getters,
  modules: {
    // 划分模块
    a: moduleA
    
  }

})

// 3. 导出store独享
export default store