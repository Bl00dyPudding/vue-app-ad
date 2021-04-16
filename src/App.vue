<template>
  <v-app>
    <v-navigation-drawer app></v-navigation-drawer>
    <v-app-bar app>
      <v-btn @click="$vuetify.theme.isDark = !$vuetify.theme.isDark">
        {{ isDark }}
      </v-btn>
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
    //
  }),
  computed: {
    isDark () {
      return this.$vuetify.theme.isDark ? 'Light' : 'Dark'
    }
  }
}
</script>
