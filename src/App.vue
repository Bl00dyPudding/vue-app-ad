<template>
  <v-app>
    <v-navigation-drawer app v-model="drawer">
      <v-drawer :links="links"></v-drawer>
    </v-navigation-drawer>
    <v-app-bar app>
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title>Vue-App-Ad</v-toolbar-title>
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
      </v-toolbar-items>
    </v-app-bar>
    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import vDrawer from './Drawer'
export default {
  name: 'App',
  components: {
    vDrawer
  },
  data: () => ({
    drawer: false,
    links: [
      { title: 'Login', icon: 'mdi-account-lock', url: '/login' },
      { title: 'Registration', icon: 'mdi-face', url: '/registration' },
      { title: 'Orders', icon: 'mdi-bookmark', url: '/orders' },
      { title: 'New ad', icon: 'mdi-note-plus', url: '/new' },
      { title: 'My ads', icon: 'mdi-clipboard-list', url: '/list' }
    ]
  })
}
</script>
