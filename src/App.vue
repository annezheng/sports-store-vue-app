<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: 'App',
  methods: {
    ...mapActions('products', ["getData"]),
    ...mapActions('cart', ["initializeCart"])
  },
  created() {
    this.getData();
    this.initializeCart(this.$store);
  }
}
</script>

<style>
</style>
