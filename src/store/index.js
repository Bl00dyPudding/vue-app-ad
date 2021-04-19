import Vue from 'vue'
import Vuex from 'vuex'
import ads from '@/store/ads'
import user from '@/store/user'
import orders from '@/store/orders'
import common from '@/store/common'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  getters: {
  },
  modules: {
    common,
    ads,
    user,
    orders
  }
})
