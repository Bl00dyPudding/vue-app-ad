import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import firebase from 'firebase'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyDj4DbaHvPIg9tkrVQ9AXXIg6TzN0FLeNw',
      authDomain: 'vue-app-ad-1eae1.firebaseapp.com',
      projectId: 'vue-app-ad-1eae1',
      storageBucket: 'vue-app-ad-1eae1.appspot.com',
      messagingSenderId: '675180406355',
      appId: '1:675180406355:web:fda8e01b440488a8b348a6'
    })
  }
}).$mount('#app')
