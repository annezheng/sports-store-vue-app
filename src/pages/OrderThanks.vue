<template>
  <q-page padding class="text-center">
    <h3 class="text-secondary text-bold">Thanks!</h3>
    <p class="q-title">Thanks for placing your order, it is #{{orderId}}.</p>
    <p class="q-title">We'll ship your goods as soon as possible.</p>
    <q-btn to="/" color="primary">Return to Store</q-btn>
  </q-page>
</template>

<script>
export default {
  computed: {
    orderId () {
      return this.$route.params.id
    }
  }
}
</script>

