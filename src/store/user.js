import firebase from 'firebase'

class User {
  constructor (id) {
    this.id = id
  }
}

export default {
  state: {
    user: null
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload.id.user.uid
    }
  },
  actions: {
    async registerUser ({ commit }, { email, password }) {
      commit('clearError')
      commit('setLoading', true)
      try {
        const user = await firebase.auth().createUserWithEmailAndPassword(email, password)
        commit('setLoading', false)
        commit('setUser', new User(user))
      } catch (err) {
        commit('setLoading', false)
        commit('setError', err.message)
        throw err
      }
    }
  },
  getters: {
    user (state) {
      return state.user
    }
  }
}
