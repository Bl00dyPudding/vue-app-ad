<template>
  <v-app>
    <v-navigation-drawer app v-model="drawer">
      <v-drawer :links="links" :isUserLoggedIn="isUserLoggedIn" :logOut="logOut"></v-drawer>
    </v-navigation-drawer>
    <v-app-bar app>
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title @click="goHome" class="pointer">Vue-App-Ad</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          text
          v-for="(link, i) in links"
          :key="i"
          :to="link.url"
        >
          <v-icon left>{{ link.icon }}</v-icon>
          {{ link.title }}
        </v-btn>
        <v-btn
          text
          v-if="isUserLoggedIn"
          @click="logOut"
        >
          <v-icon left>mdi-exit-to-app</v-icon>
          Log out
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
    <template v-if="error">
      <v-snackbar
        :timeout="5000"
        :multi-line="true"
        color="error"
        max-width="300"
        :value="true"
        @input="closeError"
      >
        <v-row class="pa-1 justify-center align-center">
          <v-flex xs10 class="text-center">
            {{ error }}
          </v-flex>
          <v-btn @click.native="closeError" text>Close</v-btn>
        </v-row>
      </v-snackbar>
    </template>
  </v-app>
</template>

<script>
import vDrawer from './components/Drawer'
export default {
  name: 'App',
  components: {
    vDrawer
  },
  data: () => ({
    drawer: false,
    snackbar: true
  }),
  methods: {
    goHome () {
      if (this.$route.path !== '/') this.$router.push('/')
    },
    closeError () {
      this.$store.dispatch('clearError')
    },
    logOut () {
      this.goHome()
      this.$store.dispatch('logOut')
    }
  },
  computed: {
    error () {
      return this.$store.getters.error
    },
    isUserLoggedIn () {
      return this.$store.getters.isUserLoggedIn
    },
    links () {
      if (this.isUserLoggedIn) {
        return [
          { title: 'Orders', icon: 'mdi-bookmark', url: '/orders' },
          { title: 'New ad', icon: 'mdi-note-plus', url: '/new' },
          { title: 'My ads', icon: 'mdi-clipboard-list', url: '/list' }
        ]
      }
      return [
        { title: 'Login', icon: 'mdi-account-lock', url: '/login' },
        { title: 'Registration', icon: 'mdi-face', url: '/registration' }
      ]
    }
  }
}
</script>

<style scoped>
  .pointer {
    cursor: pointer;
  }
</style>
