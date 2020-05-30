// 常量设置
import {INCREMENT} from './mutations_types'

export default {
  // 方法，不使用异步操作
  [INCREMENT] (state) {
    state.counter++
  },
  decrement (state) {
    state.counter--
  },
  incrementCount (state, count) {
    state.counter += count
  },
  addStudent (state, stu) {
    state.students.push(stu)
  },
  updateInfo (state) {
    state.info.name = 'codewhyaa'

    // 响应式方法
    Vue.set(state.info, 'address', '洛杉机')
    Vue.delete(state.info, 'age')
  }
}