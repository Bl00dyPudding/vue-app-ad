<template>
  <v-container>
    <v-layout row v-if="!loading && orders.length !== 0">
      <v-flex xs12>
        <v-list>
          <v-list-item
            v-for="order in orders"
            :key="order.id"
          >
            <v-list-item-action>
              <v-checkbox
                :input-value="order.done"
                color="primary"
                @click.stop="markAsDone(order)"
                :disabled="order.done"
              ></v-checkbox>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ order.name }}</v-list-item-title>
              <v-list-item-subtitle>{{ order.phone }}</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-icon>
              <v-btn
                :to="'/ad/' + order.adId"
                class="primary"
              >Open</v-btn>
            </v-list-item-icon>
          </v-list-item>
        </v-list>
      </v-flex>
    </v-layout>
    <v-layout row v-else-if="!loading && orders.length === 0">
      <v-flex xs12 class="text-center">
        You have no orders.
      </v-flex>
    </v-layout>
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

  </v-container>
</template>

<script>
export default {
  name: 'Orders',
  data: () => ({
    //
  }),
  methods: {
    markAsDone (order) {
      this.$store.dispatch('markOrderDone', order.id)
        .then(() => {
          order.done = true
        })
        .catch(() => {})
    }
  },
  computed: {
    loading () {
      return this.$store.getters.loading
    },
    orders () {
      return this.$store.getters.orders
    }
  },
  created () {
    this.$store.dispatch('fetchOrders')
  }
}
</script>

<style scoped>

</style>
