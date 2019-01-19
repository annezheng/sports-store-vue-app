<template>
  <tr>
    <td>
      <q-input
        type="number"
        v-model="qvalue"
        @blur="$v.qvalue.$touch"
        @input="sendChangeEvent"
        :error="$v.qvalue.$error"
        class="q-mx-sm"
      />
    </td>
    <td class="text-center">{{ line.product.name }}</td>
    <td class="text-center">
        {{ line.product.price | currency }}
    </td>
    <td class="text-center">
        {{ (line.quantity * line.product.price) | currency }}
    </td>
    <td class="text-center">
      <q-btn dense color="negative" label="remove" @click="sendRemoveEvent">
      </q-btn>
    </td>
  </tr>
</template>

<script>
import { required, minValue, between } from 'vuelidate/lib/validators'

export default {
  props: ["line"],
  data () {
    return {
      qvalue: this.line.quantity
    }
  },
  validations: {
    qvalue: {
      minValue: minValue(1)
    }
  },
  methods: {
    sendChangeEvent() {
      console.log(this.qvalue)
      this.$v.$touch()
      if (this.$v.$error) {
        this.$q.notify({
          icon: 'warning',
          color: 'negative',
          timeout: 2000,
          message: 'Quantity must be positive numbers.'
        })
        return
      }
      this.$emit("quantity", Number(this.qvalue));
    },
    sendRemoveEvent() {
      console.log('emit remove', this.line)
      this.$emit("remove", this.line);
    }
  }
}
</script>

