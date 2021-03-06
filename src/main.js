import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import db from './db'
import firebase from 'firebase'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  created () {
    firebase.initializeApp(db)

    firebase.auth().onAuthStateChanged(user => {
      if (user) this.$store.dispatch('autoLogIn', user)
    })

    this.$store.dispatch('getAds')
  }
}).$mount('#app')
