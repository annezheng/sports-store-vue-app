<template>
  <q-page padding>
    <q-checkbox v-model="showShipped" label="Show Shipped Orders" color="secondary" class="q-mb-md"/>
    <table class="q-py-md" style="min-width: 100%;">
      <thead >
        <tr>
          <th>ID</th><th>Name</th><th>City, Zip</th>
          <th class="text-center">Total</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="!displayOrders || displayOrders.length === 0">
          <td colspan="5" class="text-center">There are no orders</td>
        </tr>
        <tr v-for="o in displayOrders" v-bind:key="o.id">
          <td class="text-center">{{ o.id }}</td>
          <td class="text-center">{{ o.name }}</td>
          <td class="text-center">{{ `${o.city}, ${o.zip}` }}</td>
          <td class="text-center">{{ getTotal(o) | currency }}</td>
          <td class="text-center">
            <q-btn dense class="q-px-sm" color="warning" v-on:click="shipOrder(o)">
              {{ o.shipped ? 'Shipped' : 'Not Shipped' }}
            </q-btn>
          </td>
        </tr>
      </tbody>
    </table>
  </q-page>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  data() {
    return {
      showShipped: true
    }
  },
  computed: {
    ...mapState('order', ['orders']),
    displayOrders () {
      return this.showShipped ? this.orders : this.orders.filter(o => o.shipped !== true);
    }
  },
  methods: {
    ...mapMutations('order', ["changeOrderShipped"]),
    ...mapActions('order', ["getOrders", "updateOrder"]),
    getTotal (order) {
      if (order.cartLines != null && order.cartLines.length > 0) {
          return order.cartLines.reduce((total, line) =>
              total + (line.quantity * line.product.price), 0)
      } else {
          return 0;
      }
    },
    shipOrder (order) {
      this.updateOrder(order);
    }
  },
  created () {
    this.getOrders();
  }
}
</script>
