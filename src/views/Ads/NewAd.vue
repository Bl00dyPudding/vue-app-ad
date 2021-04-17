<template>
  <v-container>
    <v-layout row>
      <v-flex xs10 offset-xs1>
        <v-form v-model="valid" validation ref="form" class="mt-3">
          <v-text-field
            id="title"
            name="title"
            label="Title"
            type="text"
            v-model="title"
            required
            :rules="[v => !!v || 'Title is required']"
          ></v-text-field>
          <v-text-field
            id="description"
            name="description"
            label="Description"
            type="text"
            v-model="description"
            required
            multi-line
            :rules="[v => !!v || 'Description is required']"
          ></v-text-field>
        </v-form>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs10 offset-xs1>
        <v-btn color="blue-grey" class="ma-2 white--text">
          Upload
          <v-icon right dark>mdi-cloud-upload</v-icon>
        </v-btn>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs10 offset-xs1>
        <v-img
          lazy-src="https://picsum.photos/id/11/10/6"
          max-height="150"
          max-width="250"
          src="https://picsum.photos/id/11/500/300"
        ></v-img>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs10 offset-xs1>
        <v-switch
          v-model="promo"
          :label="promo ? 'Promo!' : 'Promo?'"
        ></v-switch>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs10 offset-xs1>
        <v-btn
          :disabled="!valid || loading"
          class="success"
          @click="createAd"
          :loading="loading"
        >
          Create
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'NewAd',
  data: () => ({
    valid: false,
    title: '',
    description: '',
    promo: false
  }),
  methods: {
    createAd () {
      if (this.$refs.form.validate()) {
        const ad = {
          title: this.title,
          description: this.description,
          promo: this.promo,
          src: 'https://picsum.photos/id/11/500/300'
        }

        this.$store.dispatch('createAd', ad)
          .then(() => {
            this.$router.push('/list')
          })
          .catch(() => {})
      }
    }
  },
  computed: {
    loading () {
      return this.$store.getters.loading
    }
  }
}
</script>

<style scoped>

</style>
