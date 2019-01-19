<template>
    <q-page padding>
        <h4 class="text-center text-secondary text-bold">Your Cart</h4>
        <table class="q-pa-md" style="min-width: 100%;">
            <thead >
                <tr>
                <th>Quantity</th>
                <th>Product</th>
                <th >Price</th>
                <th >Subtotal</th>
                </tr>
            </thead>
            <tbody>
                <tr v-if="lines.length == 0">
                    <td colspan="4" class="text-center">
                        Your cart is empty
                    </td>
                </tr>
                <cart-line v-for="line in lines" v-bind:key="line.product.id" 
                    v-bind:line="line"
                    v-on:quantity="handleQuantityChange(line, $event)"
                    v-on:remove="remove" />
            </tbody>
            <tfoot v-if="lines.length > 0">
                <tr class="text-green text-bold">
                    <td colspan="3" class="text-right q-pr-md" >Total:</td>
                    <td class="text-center" >
                        {{ totalPrice | currency }}
                    </td>
                </tr>
            </tfoot>
        </table>
        <div class="row justify-center q-mt-lg">
          <q-btn to="/" color="primary" class="q-ma-xs">
              Continue Shopping
          </q-btn>
          <q-btn to="/checkout" color="secondary" class="q-ma-xs"
                  v-bind:disabled="lines.length == 0">
              Checkout
          </q-btn>
        </div>
  </q-page>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";
import CartLine from "../components/ShoppingCartLine";
export default {
  components: { CartLine },
  computed: {
    ...mapState({ lines: state => state.cart.lines }),
    ...mapGetters({  totalPrice : "cart/totalPrice"  })
  },
  methods: {
    ...mapMutations('cart', {
      change: "changeQuantity",
      remove: "removeProduct"
    }),
    handleQuantityChange(line, $event) {
        this.change({ line, quantity: $event});
    }
  }

}
</script>
