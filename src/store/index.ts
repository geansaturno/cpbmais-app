import Vue from 'vue'
import Vuex from 'vuex'
import menu from '@/data/menu'

import {
  ApolloClient,
  InMemoryCache,
  gql
} from '@apollo/client'

const apolloClient = new ApolloClient({
  uri: 'http://localhost:3050/',
  cache: new InMemoryCache()
})

Vue.use(Vuex)

export const state = {
  menu,
  meditations: []
}

export default new Vuex.Store({
  state,
  mutations: {
    setMeditations (state, meditations) {
      state.meditations = meditations
    }
  },
  actions: {
    async getMeditations (context) {
      const request = await apolloClient.query({
        query: gql`
          {
            meditations {
              title
              id
              description
              img
            }
          }
        `
      })

      context.commit('setMeditations', request.data.meditations)

      return context.state.meditations
    }
  },
  modules: {
  }
})
