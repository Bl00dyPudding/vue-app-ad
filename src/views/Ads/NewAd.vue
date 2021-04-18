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
        <v-file-input
          v-model="image"
          label="Select Image File..."
          accept="image/*"
          @change="readImage"
        ></v-file-input>
      </v-flex>
    </v-layout>
    <v-layout row v-if="src">
      <v-flex xs10 offset-xs1>
        <v-img
          :lazy-src="src"
          max-height="100"
          :src="src"
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
          :disabled="!valid || !image || loading"
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
    promo: false,
    image: null,
    src: null
  }),
  methods: {
    createAd () {
      if (this.$refs.form.validate() && this.image) {
        const ad = {
          title: this.title,
          description: this.description,
          promo: this.promo,
          image: this.image
        }

        this.$store.dispatch('createAd', ad)
          .then(() => {
            this.$router.push('/list')
          })
          .catch(() => {})
      }
    },
    readImage () {
      const reader = new FileReader()
      reader.onload = () => {
        this.src = reader.result
      }
      reader.readAsDataURL(this.image)
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
