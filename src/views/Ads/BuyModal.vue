<template>
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Buy
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Buy</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-layout row>
              <v-flex xs10 offset-xs1>
                <v-text-field
                  id="name"
                  name="name"
                  label="Your name"
                  type="text"
                  required
                  v-model="name"
                  :rules="[v => !!v || 'Name is required']"
                ></v-text-field>
                <v-text-field
                  id="phone"
                  name="phone"
                  label="Your phone"
                  type="text"
                  required
                  v-model="phone"
                  :rules="[v => !!v || 'Phone is required']"
                ></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="onClose"
            :disabled="localLoading"
          >
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="onBuy"
            :disabled="localLoading"
            :loading="localLoading"
          >
            Buy
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
export default {
  name: 'BuyModal',
  props: ['ad'],
  data () {
    return {
      dialog: false,
      name: '',
      phone: '',
      localLoading: false
    }
  },
  methods: {
    onClose () {
      this.name = ''
      this.phone = ''
      this.dialog = false
    },
    onBuy () {
      if (this.name !== '' && this.phone !== '') {
        this.localLoading = true
        this.$store.dispatch('createOrder', {
          adId: this.ad.id,
          ownerId: this.ad.ownerId,
          name: this.name,
          phone: this.phone
        }).finally(() => {
          this.onClose()
          this.localLoading = false
        })
      }
    }
  }
}
</script>

<style scoped>

</style>
