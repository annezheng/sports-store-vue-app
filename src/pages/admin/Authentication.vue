<template>
  <q-page class="q-mx-auto" style="max-width: 680px;">
      <h4 class="bg-primary text-white text-center q-pa-sm">
          Administration
      </h4>
      <transition
        enter-active-class="animated flipInX"
        leave-active-class="animated flipOutX"
        appear
      >
        <q-alert
          v-if="showFailureMessage"
          type="negative"
          :actions="[{ label: 'Snooze', icon: 'alarm', handler: () => { showFailureMessage = false } }]"
        >
          Authentication Failed. Please try again.
        </q-alert>
      </transition>
      <div class="column q-pa-sm bg-grey-3">
        <q-field :error="$v.username.$error" error-label="Please enter a value.">
          <q-input name="username" type="text" v-model="username" float-label="Username"  @blur="$v.username.$touch" />
        </q-field>
        <q-field :error="$v.password.$error" error-label="Password must be at least 4 characters.">
          <q-input name="password" type="password" v-model="password" float-label="Password"  @blur="$v.password.$touch" />
        </q-field>
      </div>
      <div class="text-center">
        <q-btn color="secondary" class="q-ma-xs" v-on:click="handleAuth">
            Log In
        </q-btn>
      </div>
  </q-page>
</template>

<script>
import { required, minLength } from "vuelidate/lib/validators";
import { mapActions, mapState } from "vuex";

export default {
  data () {
    return {
      username: 'admin',
      password: 'admin',
      showFailureMessage: false
    }
  },
  computed: {
    ...mapState('auth', ['authenticated']),
  },
  validations: {
    username: { required },
    password: { required, minLength: minLength(4) }
  },
  methods: {
    ...mapActions('auth', ['authenticate']),
    async handleAuth () {
      this.$v.$touch()
      if (this.$v.$error) {
        console.log(this.$v.$error)
        this.$q.notify('Please review fields again.')
        return
      }
      await this.authenticate({
        name: this.username,
        password: this.password
      });
      if (this.authenticated) {
        this.$router.push({name: 'products'});
      } else {
        this.showFailureMessage = true;
      }
    }
  }
}
</script>

