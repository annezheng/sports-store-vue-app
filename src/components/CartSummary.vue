<template>
  <div class="float-right">
      <small>
          Your cart:
          <span v-if="itemCount > 0">
              {{ itemCount }} item(s) {{ totalPrice | currency }}
          </span>
          <span v-else>
              (empty)
          </span>
      </small>
      <q-btn to="/cart" v-bind:disabled="itemCount == 0" round dense color="primary" icon="shopping_cart" class="q-ml-sm"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
      ...mapGetters('cart', [
        'itemCount',
        'totalPrice'
      ])
  }

}
</script>

