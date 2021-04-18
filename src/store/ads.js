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
    async createAd ({ commit }, { title, description, promo, image }) {
      commit('clearError')
      commit('setLoading', true)
      try {
        const uid = this.getters.user.id
        const newAd = new Ad(
          uid,
          title,
          description,
          promo
        )
        const ad = await firebase.database().ref('ads').push(newAd)
        // const imageExt = image.name.slice(image.name.lastIndexOf('.'))
        const upload = await firebase.storage().ref(`ads/${ad.key}`).put(image)
        const src = await upload.ref.getDownloadURL()
        await firebase.database().ref('ads').child(ad.key).update({ src })
        commit('createAd', {
          ...newAd,
          id: ad.key,
          src
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
