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
            src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
          ></v-img>
          <v-card-title>Cafe Badilico</v-card-title>
          <v-card-text>
              Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.
          </v-card-text>
          <v-divider class="mx-4"></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="deep-purple lighten-2"
              text
            >
              Reserve
            </v-btn>
            <v-btn
              color="deep-purple lighten-2"
            >
              Reserve
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
  data: () => ({
    //
  })
}
</script>

<style scoped>

</style>
