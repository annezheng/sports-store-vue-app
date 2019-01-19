<template>
  <q-page class="q-mx-auto" style="max-width: 680px;">
    <h4 class="text-center text-secondary text-bold">Your Order</h4>
    <div class="q-pa-sm bg-grey-3">
      <q-field :error="$v.order.name.$error" error-label="This field is required.">
        <q-input name="name" type="text" v-model="order.name" float-label="Name"  @blur="$v.order.name.$touch" />
      </q-field>
      <q-field :error="$v.order.email.$error" error-label="Please enter a valid email address.">
        <q-input name="email" type="email" v-model="order.email" float-label="Email"  @blur="$v.order.email.$touch" />
      </q-field>
      <q-field :error="$v.order.address.$error" error-label="This field is required.">
        <q-input name="address" type="text" v-model="order.address" float-label="Address"  @blur="$v.order.address.$touch" />
      </q-field>
      <q-field :error="$v.order.city.$error" error-label="This field is required.">
        <q-input name="city" type="text" v-model="order.city" float-label="City"  @blur="$v.order.city.$touch" />
      </q-field>
      <q-field :error="$v.order.zip.$error" error-label="This field is required.">
        <q-input name="zip" type="text" v-model="order.zip" float-label="Zip"  @blur="$v.order.zip.$touch" />
      </q-field>
    </div>
    <div class="text-center q-mt-md">
        <q-btn to="/cart" color="primary" class="q-ma-xs">
            Back
        </q-btn>
        <q-btn color="secondary" class="q-ma-xs" v-on:click="submitOrder">
            Place Order
        </q-btn>
    </div>
  </q-page>
</template>

<script>
import { required, email } from "vuelidate/lib/validators";
import { mapActions } from "vuex";
export default {
  data () {
    return {
      order: {
        name: null,
        email: null,
        address: null,
        city: null,
        zip: null
      }
    }
  },
  validations: {
    order: {
      name: { required },
      email: { required, email },
      address: { required },
      city: { required },
      zip: { required }
    }
  },
  methods: {
    ...mapActions('order', ['storeOrder']),
    ...mapActions('cart', ['clearCartData']),

    async submitOrder () {
      this.$v.$touch()
      if (this.$v.$error) {
        this.$q.notify('Please review fields again.')
        return
      }
      let orderId = await this.storeOrder(this.order);
      this.clearCartData();
      this.$router.push(`/thanks/${orderId}`);
    }
  }
}
</script>

