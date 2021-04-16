<template>
  <v-list subheader two-line>
    <v-subheader>Pages</v-subheader>
    <v-list-item-group>
      <v-list-item
        v-for="(link, i) in links"
        :key="i"
        :to="link.url"
      >
        <v-icon v-text="link.icon" left></v-icon>
        <v-list-item-content>
          <v-list-item-title v-text="link.title"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
    <v-subheader>Theme settings</v-subheader>
    <v-list-item-group multiple>
      <v-list-item @change="$vuetify.theme.isDark = !$vuetify.theme.isDark">
        <v-list-item-action>
          <v-checkbox
            :input-value="$vuetify.theme.isDark"
            color="primary"
          ></v-checkbox>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Dark mode</v-list-item-title>
          <v-list-item-subtitle>Current mode: {{ isDark }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>

<script>
export default {
  name: 'Drawer',
  props: {
    links: {
      type: Array
    }
  },
  computed: {
    isDark () {
      return this.$vuetify.theme.isDark ? 'Dark' : 'Light'
    }
  }
}
</script>

<style scoped>

</style>
