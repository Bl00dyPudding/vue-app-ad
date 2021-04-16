<template>
  <v-container>
    <v-layout row>
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
  </v-container>
</template>

<script>
export default {
  name: 'Orders',
  data: () => ({
    orders: [
      {
        id: 123,
        adId: 321,
        name: 'Vasya',
        phone: '1234567890',
        done: true
      }
    ]
  }),
  methods: {
    markAsDone (order) {
      order.done = true
    }
  }
}
</script>

<style scoped>

</style>
