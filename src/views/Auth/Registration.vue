<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md6>
        <v-card class="elevation-8">
          <v-card-text>
            <v-form v-model="valid" validation ref="form">
              <v-text-field
                id="email"
                name="email"
                label="Email"
                type="email"
                v-model="email"
                :rules="emailRules"
                required
              ></v-text-field>
              <v-text-field
                id="password"
                name="password"
                label="Password"
                type="password"
                v-model="password"
                :counter="6"
                :rules="passwordRules"
                required
              ></v-text-field>
              <v-text-field
                id="password-confirm"
                name="password-confirm"
                label="Password confirm"
                type="password"
                v-model="passwordConfirm"
                :counter="6"
                :rules="passwordConfirmRules"
                required
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              @click="onSubmit"
              :disabled="!valid"
            >Create account</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Registration',
  data () {
    return {
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
      password: '',
      passwordRules: [
        v => !!v || 'Password is required',
        v => v.length >= 6 || 'Password must be equal or more than 6 characters'
      ],
      passwordConfirm: '',
      passwordConfirmRules: [
        v => !!v || 'Password confirm is required',
        v => v === this.password || 'Passwords must be equal'
      ],
      valid: false
    }
  },
  methods: {
    onSubmit () {
      if (this.$refs.form.validate()) {
        const user = {
          email: this.email,
          password: this.password
        }
        console.log(user)
      }
    }
  }
}
</script>

<style scoped>

</style>
