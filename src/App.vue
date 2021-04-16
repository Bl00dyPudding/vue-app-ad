<template>
  <v-app>
    <v-navigation-drawer app v-model="drawer">
      <v-btn @click="$vuetify.theme.isDark = !$vuetify.theme.isDark">{{ isDark }}</v-btn>
    </v-navigation-drawer>
    <v-app-bar app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
    <v-footer app></v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  components: {

  },
  data: () => ({
    drawer: false
  }),
  computed: {
    isDark () {
      return this.$vuetify.theme.isDark ? 'Light' : 'Dark'
    }
  }
}
</script>
