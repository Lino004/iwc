import { get } from '@/api/public/siteInfo'

function initialState () {
  return {
    siteInfo: null
  }
}

const state = initialState()

const namespaced = true

const mutations = {
  SET_SITE_INFO: (state, val) => {
    state.siteInfo = val
  }
}

const actions = {
  getSiteInfo: async ({ commit }) => {
    try {
      const res = (await get()).data.data
      commit('SET_SITE_INFO', res)
    } catch (error) {
      //
    }
  }
}

const getters = {
  siteInfo: (state) => state.siteInfo
}

export default {
  namespaced,
  state,
  mutations,
  actions,
  getters
}
