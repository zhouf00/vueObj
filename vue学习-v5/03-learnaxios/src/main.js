import Vue from 'vue'
import App from './App'
import router from './router'

import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

//使用全局的axios和对应的配置在进行网络请求
// axios.defaults.baseURL = 'http://10.100.93.60:8000'
// axios.defaults.timeout = 5000

// axios({
//   url: '/api/blog',
//   // 专门针对get请求的参数拼接
//   params: {
//     type: 'pop',
//     page: 1
//   }
// }).then(res => {
//   console.log(res);
// })

// // axios发送并发请求
// axios.all([axios({
//   url: '/api/'
// }), axios({
//   url: '/api/blog'
// })])
// .then(res => {
//   console.log(res);
  
// })

// 4. 创建对应的axios的实例
// const instance1 = axios.create({
//   baseURL: 'http://10.100.93.60:8000',
//   timeout: 5000
// })

// instance1({
//   url: '/api'
// }).then(res => {
//   console.log(res);
// })

// const instance2 = axios.create({
//   baseURL: 'http://10.100.93.60:8000',
//   timeout: 5000
// })

// instance1({
//   url: '/api/blog'
// }).then(res => {
//   console.log(res);
// })

// 5. 封装request模块
import {request} from './network/request'

// 回调函数的方式
// request({
//   url:'/api',
// }, res => {
//   console.log(res);
// }, err => {
//   console.log(err);
// })

// Promise方式
request({
  url:'/api',
}).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
})