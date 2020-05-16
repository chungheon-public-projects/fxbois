import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
  },
  mutations: {
    setUser(state, payload){
      state.user = payload.user
    },
  },
  actions: {
  },
  getters: {
    getUser: state => {
      return state.user
    },
  },
  modules: {
  }
})
