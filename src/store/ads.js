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
  },
  actions: {
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
