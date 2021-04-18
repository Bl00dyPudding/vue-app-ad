<template>
  <v-container>
    <v-layout row>
      <v-flex xs12>
        <v-card
          class="mx-auto my-12"
          max-width="374"
          v-if="!loading"
        >
          <v-img
            height="250"
            :src="adById.src"
          ></v-img>
          <v-card-title>{{ adById.title }}</v-card-title>
          <v-card-text>
              {{ adById.description }}
          </v-card-text>
          <v-divider class="mx-4"></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>
            <edit-ad-modal :ad="adById" v-if="isOwner"></edit-ad-modal>
            <v-btn
              color="deep-purple lighten-2"
            >
              Buy
            </v-btn>
          </v-card-actions>
        </v-card>
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
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import editAdModal from './EditAdModal'

export default {
  name: 'Ad',
  props: {
    id: {
      type: String
    }
  },
  computed: {
    adById () {
      return this.$store.getters.adById(this.id)
    },
    loading () {
      return this.$store.getters.loading
    },
    isOwner () {
      return this.adById.ownerId === this.$store.getters.user?.id
    }
  },
  data: () => ({
    //
  }),
  components: {
    editAdModal
  }
}
</script>

<style scoped>

</style>
