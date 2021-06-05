import Vue from 'vue'
import Vuex from 'vuex'
import menu from '@/data/menu'

Vue.use(Vuex)

export const state = {
  menu
}

export default new Vuex.Store({
  state,
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
