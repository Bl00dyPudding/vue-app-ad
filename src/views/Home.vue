<template>
  <v-container>
    <template v-if="loading">
      <v-container fluid>
        <v-sheet
          :color="`grey ${this.$vuetify.theme.isDark ? 'darken-2' : 'lighten-4'}`"
          class="pa-3"
        >
          <v-skeleton-loader
            class="mx-auto"
            max-width="300"
            type="card"
          ></v-skeleton-loader>
        </v-sheet>
      </v-container>
    </template>
    <template v-else>
      <v-container fliud>
        <v-layout row>
          <v-flex xs12>
            <v-carousel>
              <v-carousel-item
                reverse-transition="fade-transition"
                transition="fade-transition"
                v-for="(item, i) in promoAds"
                :key="i"
                :src="item.src"
              >
                <div class="carousel-button">
                  {{ item.title }}
                  <v-btn
                    color="primary"
                    :to="'/ad/' + item.id"
                  >Open</v-btn>
                </div>
              </v-carousel-item>
            </v-carousel>
          </v-flex>
        </v-layout>
      </v-container>
      <v-container grid-list-lg>
        <v-layout row wrap>
          <v-flex
            xs12
            sm6
            md3
            v-for="(item, i) in ads"
            :key="i"
          >
            <v-card class="mx-auto" max-width="400">
              <v-img
                class="white--text align-end"
                height="200px"
                :src="item.src"
              >
                <v-card-title>{{ item.title }}</v-card-title>
              </v-img>
              <v-card-subtitle class="pb-0"></v-card-subtitle>
              <v-card-text class="text--primary">
                <div>{{ item.description }}</div>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="primary"
                  text
                  :to="'/ad/' + item.id">
                  Open
                </v-btn>
                <buy-modal :ad="item"></buy-modal>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </template>
  </v-container>
</template>

<script>
import buyModal from '@/views/Ads/BuyModal'
export default {
  name: 'Home',
  data: () => ({
    //
  }),
  computed: {
    promoAds () {
      return this.$store.getters.promoAds
    },
    ads () {
      return this.$store.getters.ads
    },
    loading () {
      return this.$store.getters.loading
    }
  },
  components: {
    buyModal
  }
}
</script>

<style scoped>
 .carousel-button {
   position: absolute;
   bottom: 50px;
   left: 50%;
   transform: translate(-50%, 0);
   min-width: 200px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   padding: 10px;
   background: rgba(0, 0, 0, 0.3);
 }
</style>
