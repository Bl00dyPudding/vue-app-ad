import firebase from 'firebase'

class Ad {
  constructor (ownerId, title, description, promo = false, src = null, id = null) {
    this.ownerId = ownerId
    this.title = title
    this.description = description
    this.promo = promo
    this.src = src
    this.id = id
  }
}

export default {
  state: {
    ads: []
  },
  mutations: {
    createAd (state, payload) {
      state.ads.push(payload)
    },
    loadAds (state, payload) {
      state.ads = payload
    }
  },
  actions: {
    async createAd ({ commit }, { title, description, promo, src }) {
      commit('clearError')
      commit('setLoading', true)
      const uid = this.getters.user.id
      try {
        const newAd = new Ad(
          uid,
          title,
          description,
          promo,
          src
        )
        const ad = await firebase.database().ref('ads').push(newAd)
        commit('createAd', {
          ...newAd,
          id: ad.key
        })
        commit('setLoading', false)
      } catch (err) {
        commit('setError', err.message)
        commit('setLoading', false)
        throw err
      }
    },
    async getAds ({ commit }) {
      commit('clearError')
      commit('setLoading', true)
      try {
        const fbValue = await firebase.database().ref('ads').once('value')
        const ads = fbValue.val()
        const resultAds = []
        Object.keys(ads).forEach(key => {
          const ad = ads[key]
          ad.id = key
          resultAds.push(ad)
        })
        commit('setLoading', false)
        commit('loadAds', resultAds)
      } catch (err) {
        commit('setError')
        commit('setLoading', false)
        throw err
      }
    }
  },
  getters: {
    ads (state) {
      return state.ads
    },
    promoAds (state) {
      return state.ads.filter(ad => ad.promo)
    },
    myAds (state) {
      return state.ads
    },
    adById (state) {
      return adId => state.ads.find(ad => ad.id === adId)
    }
  }
}
