<template>
  <v-app>
    <v-navigation-drawer app v-model="drawer">
      <v-drawer></v-drawer>
    </v-navigation-drawer>
    <v-app-bar app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Vue-App-Ad</v-toolbar-title>
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
    drawer: null
  })
}
</script>
