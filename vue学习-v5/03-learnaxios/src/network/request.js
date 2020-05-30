import axios from 'axios'

// 正解的promise
export function request (config) {
  // 1. 创建axios实例
  const instance = axios.create({
    baseURL: 'http://10.100.93.60:8000',
    timeout: 5000
  })

  // 2. axios的拦截器
  // 2.1 请求拦截的作用
  instance.interceptors.request.use(config => {
    // console.log(config);
    // 2.1.1 比如config中的一些信息不符合服务器的要求

    // 2.1.2 比如每次发送网络请求时，都希望在界面显示一个请求的图标

    // 2.1.3 某些网络请求(比如登录(token))，必须携带一些特殊的信息
    return config
  }, err => {
    console.log(err);
  })

  // 2.2 响应拦截
  instance.interceptors.response.use(res => {
    console.log(res);
    return res.data
  }, err => {
    console.log(err);
    
  })
  
  // 3. 发送真正的网络请求
  return instance(config)
}

// 回调函数的方式 
// export function request (config, success, failure) {
//   const instance = axios.create({
//     baseURL: 'http://10.100.93.60:8000',
//     timeout: 5000
//   })
//   // 发送真正折网络请求
//   instance(config)
//   .then(res => {
//     // console.log(res);
//     res = 'abc'
//     success(res)
//   })
//   .catch(err => {
//     console.log(err);
//     failure(err)
//   })
// }

// export function request (config) {
//   return new Promise((resolve, reject) => {
//     const instance = axios.create({
//       baseURL: 'http://10.100.93.60:8000',
//       timeout: 5000
//     })
//     // 发送真正折网络请求
//     instance(config)
//     .then(res => {
//       resolve(res)
//     })
//     .catch(err => {
//       reject(err)
//     })
//   })
// }
