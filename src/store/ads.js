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
    ads: [
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
        title: 'Title',
        description: 'Hello',
        id: 123,
        promo: false
      },
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
        title: 'Title',
        description: 'Hello',
        id: 1234,
        promo: true
      },
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
        title: 'Title',
        description: 'Hello',
        id: 12345,
        promo: false
      },
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
        title: 'Title',
        description: 'Hello',
        id: 123456,
        promo: true
      }
    ]
  },
  mutations: {
    createAd (state, payload) {
      state.ads.push(payload)
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
