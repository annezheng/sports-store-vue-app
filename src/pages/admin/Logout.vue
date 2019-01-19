<template>
  <q-page padding>
    <!-- content -->
  </q-page>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions('auth', ["logout"]),
  },
  created () {
    this.logout()
    this.$router.replace({name: 'store'})
  }
}
</script>
