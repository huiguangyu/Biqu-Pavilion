import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: '我的书架',
    isTabs: true
  },
  mutations: {
    setTitle(state, data) {
      state.title = data
    },
    isTabSet(state, data) {
      state.isTabs = data
    }
  },
  actions: {}
})
