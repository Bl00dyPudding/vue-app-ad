import firebase from 'firebase'

class Order {
  constructor (name, phone, adId, done = false, id = null) {
    this.name = name
    this.phone = phone
    this.adId = adId
    this.done = done
    this.id = id
  }
}

export default {
  state: {
    orders: []
  },
  mutations: {
    loadOrder (state, payload) {
      state.orders = payload
    }
  },
  actions: {
    async createOrder ({ commit }, { adId, ownerId, name, phone }) {
      const order = new Order(name, phone, adId)
      commit('clearError')
      try {
        await firebase.database().ref(`/users/${ownerId}/orders`).push(order)
      } catch (err) {
        commit('setError', err.message)
        throw err
      }
    },
    async fetchOrders ({ commit, getters }) {
      commit('setLoading', true)
      commit('clearError')
      try {
        const fbValue = await firebase.database().ref(`/users/${getters.user.id}/orders`).once('value')
        const orders = fbValue.val()
        const resultOrders = []
        Object.keys(orders).forEach(key => {
          const order = orders[key]
          order.id = key
          resultOrders.push(order)
        })
        commit('loadOrder', resultOrders)
        commit('setLoading', false)
      } catch (err) {
        commit('setLoading', false)
        commit('setError', err.message)
        throw err
      }
    },
    async markOrderDone ({ commit, getters }, id) {
      commit('clearError')
      try {
        await firebase.database().ref(`/users/${getters.user.id}/orders`).child(id).update({
          done: true
        })
      } catch (err) {
        commit('setError', err.message)
        throw err
      }
    }
  },
  getters: {
    orders (state, getters) {
      return getters.undoneOrders.concat(getters.doneOrders)
    },
    undoneOrders (state) {
      return state.orders.filter(order => !order.done)
    },
    doneOrders (state) {
      return state.orders.filter(order => order.done)
    }
  }
}
