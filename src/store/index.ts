import Vue from 'vue'
import Vuex from 'vuex'
import menu from '@/data/menu'
import axios from 'axios'

import {
  ApolloClient,
  InMemoryCache,
  gql
} from '@apollo/client'
import { Meditations, Reading } from '@/custom-types'

const apolloClient = new ApolloClient({
  uri: 'http://localhost:3050/',
  cache: new InMemoryCache()
})

Vue.use(Vuex)

export const state = {
  menu,
  meditations: [] as Meditations[]
}

export default new Vuex.Store({
  state,
  getters: {
    getMeditationById: (state) => (id: string) => {
      return state.meditations.find(meditation => meditation.id === id)
    }
  },
  mutations: {
    setMeditations (state, meditations: Meditations[]) {
      if (meditations.length) {
        state.meditations = meditations
      }
    },
    addMeditationIfNotExist (state, meditation: Meditations) {
      if (!state.meditations.find(stateMeditation => stateMeditation.id === meditation.id)) {
        state.meditations.push(meditation)
      }
    }
  },
  actions: {
    async getMeditations (context) :Promise<void> {
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
    },
    async getDayReading (_, readingId: string): Promise<Reading[]> {
      const request = await apolloClient.query({
        query: gql`
        query($readingId: String, $date: String){
          getReading(
            readingId: $readingId
            date: $date
          ) {
            title
            verse
            day
            content
          }
        }
        `,
        variables: {
          date: '15/06/2021',
          readingId
        }
      })

      return request.data.getReading
    },
    async fetchMeditations (context):Promise<void> {
      const meditationsIdRequest = await axios.get('//localhost:3000/meditations')

      if (meditationsIdRequest.data) {
        const meditationsId = meditationsIdRequest.data as string[]
        const meditationsPromise = await Promise.all(meditationsId.map(id => axios.get(`//localhost:3000/meditations/${id}`)))

        const meditations = meditationsPromise.reduce((meditationsCollection, response) => {
          if (response.data) {
            meditationsCollection.push(response.data)
          }

          return meditationsCollection
        }, [] as Meditations[])

        context.commit('setMeditations', meditations)
      }
    },
    async fetchMeditationById (context, id) {
      const meditationRequest = await axios.get(`//localhost:3000/meditations/${id}`)

      if (meditationRequest.data) {
        context.commit('addMeditationIfNotExist', meditationRequest.data)
      }
    }
  }
})
