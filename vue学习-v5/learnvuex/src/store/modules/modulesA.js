export default {
  state: {
    name: 'zhangsan'
  },
  mutations: {
    updateName (state, payload) {
      state.name = payload
    }
  },
  actions: {
    // aUpdateName (context) {
    //   setTimeout(() => {
    //     context.commit('updateName', 'wangwu')
    //   }, 1000)
    // }
    aUpdateName ({state, commit, rootState}) {
      // 对象的解构
      setTimeout(() => {
        commit('updateName', rootState.counter)
      }, 1000)
    }
  },
  getters: {
    fullname (state) {
      return state.name + '-lisi'
    },
    fullname2 (state, getters, rootState) {
      // 可以传入父目录的变量
      return getters.fullname + rootState.info.name
    }
  }
}