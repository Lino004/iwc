import { login, getUser } from '@/api/admin/user'

function initialState () {
  return {
    user: null
  }
}

const state = initialState()

const namespaced = true

const mutations = {
  SET_USER: (state, val) => {
    state.user = val
  }
}

const actions = {
  login: async ({ commit, dispatch }, payload) => {
    const resLogin = (await login(payload.email, payload.password)).data.data
    commit('SET_TOKEN', resLogin.user.token, { root: true })
    await dispatch('getUser')
  },
  getUser: async ({ commit }) => {
    const resUser = (await getUser()).data.data.currentAdmin
    commit('SET_USER', resUser)
  }
}

const getters = {
}

export default {
  namespaced,
  state,
  mutations,
  actions,
  getters
}
