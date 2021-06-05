import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import publicGeneral from './public/genral'
import adminUser from './admin/user'

Vue.use(Vuex)

function initialState () {
  return {
    token: null
  }
}

const state = initialState()

export default new Vuex.Store({
  state,
  mutations: {
    SET_TOKEN: (state, val) => {
      state.token = val
    }
  },
  actions: {
  },
  getters: {
    token: state => state.token
  },
  modules: {
    publicGeneral,
    adminUser
  },
  plugins: [createPersistedState({
    paths: ['token'],
    key: 'iwc'
  })]
})
