<template>
  <v-container>
    <v-layout row>
      <v-flex xs12>
        <v-card
          class="mx-auto my-12"
          max-width="374"
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
            <v-btn
              color="deep-purple lighten-2"
              text
            >
              Edit
            </v-btn>
            <v-btn
              color="deep-purple lighten-2"
            >
              Buy
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Ad',
  props: {
    id: {
      type: String
    }
  },
  computed: {
    adById () {
      return this.$store.getters.adById(+this.id)
    }
  },
  data: () => ({
    //
  })
}
</script>

<style scoped>

</style>
