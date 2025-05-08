const store = Vuex.createStore({
  state() {
    return { count: 0 }
  },
  mutations: {
    increment(state) {
      state.count++
    }
  }
})


export default store