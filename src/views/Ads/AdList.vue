<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 v-if="!loading && myAds.length !== 0">
        <v-card
          class="elevation-8 mt-5 pa-5"
          v-for="ad in myAds"
          :key="ad.id"
        >
          <v-layout row>
            <v-avatar
              class="ma-3"
              size="125"
            >
              <v-img :src="ad.src"></v-img>
            </v-avatar>
            <v-flex row>
              <v-card-text>
                <h2 class="text--primary">{{ ad.title }}</h2>
                <p>{{ ad.description }}</p>
              </v-card-text>
              <v-card-actions class="ml-auto">
                <v-btn
                  class="info mr-3"
                  :to="'/ad/' + ad.id"
                >Open</v-btn>
              </v-card-actions>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
      <v-flex xs12 class="text-center" v-else-if="!loading && myAds.length === 0">
        You have no ads.
      </v-flex>
      <v-sheet
        :color="`grey ${this.$vuetify.theme.isDark ? 'darken-2' : 'lighten-4'}`"
        class="pa-3"
        v-else
      >
        <v-skeleton-loader
          class="mx-auto"
          max-width="300"
          type="card"
        ></v-skeleton-loader>
      </v-sheet>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'AdList',
  data: () => ({
    //
  }),
  computed: {
    myAds () {
      return this.$store.getters.myAds
    },
    loading () {
      return this.$store.getters.loading
    }
  }
}
</script>

<style scoped>

</style>
