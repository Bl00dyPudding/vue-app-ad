<template>
  <v-row justify="center">
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
          Edit
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Edit Ad</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-layout row>
              <v-flex xs10 offset-xs1>
                <v-text-field
                  id="title"
                  name="title"
                  label="Title"
                  type="text"
                  v-model="editedTitle"
                  required
                  :rules="[v => !!v || 'Title is required']"
                ></v-text-field>
                <v-text-field
                    id="description"
                    name="description"
                    label="Description"
                    type="text"
                    v-model="editedDescription"
                    required
                    multi-line
                    :rules="[v => !!v || 'Description is required']"
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
          >
            Close
          </v-btn>
          <v-btn
            color="accent"
            text
            @click="onSave"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: 'EditAdModal',
  props: ['ad'],
  data () {
    return {
      dialog: false,
      editedTitle: this.ad.title,
      editedDescription: this.ad.description
    }
  },
  methods: {
    onClose () {
      this.dialog = false
      this.editedTitle = this.ad.title
      this.editedDescription = this.ad.description
    },
    onSave () {
      if (this.editedDescription !== '' && this.editedTitle !== '') {
        this.$store.dispatch('updateAd', {
          id: this.ad.id,
          title: this.editedTitle,
          description: this.editedDescription
        })
        this.dialog = false
      }
    }
  }
}
</script>

<style scoped>

</style>
