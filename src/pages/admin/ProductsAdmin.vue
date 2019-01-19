<template>
  <q-page>
    <q-btn to="/admin/products/create" color="secondary" class="q-ma-md float-right">
        Create Product
    </q-btn>
    <table class="q-pa-md " style="min-width: 100%;">
      <thead>
        <th>ID</th><th>Name</th><th>Category</th>
        <th class="text-center">Price</th><th></th>
      </thead>
      <tbody>
        <tr v-for="p in products" v-bind:key="p.id">
          <td class="text-center">{{ p.id }}</td>
          <td class="text-center">{{ p.name }}</td>
          <td class="text-center">{{ p.category }}</td>
          <td class="text-center">{{ p.price | currency }}</td>
          <td class="text-center">
            <q-btn dense color="negative" class="q-mx-xs q-px-sm" v-on:click="handleRemove(p)">Delete</q-btn>
            <q-btn dense color="warning" class="q-my-xs q-mx-xs q-px-sm" v-on:click="handleEdit(p)">Edit</q-btn>
          </td>
        </tr>
      </tbody>
    </table>
    <page-controls />
  </q-page>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
import PageControls from "../../components/PageControls";
export default {
  components: { PageControls },
  computed: {
    ...mapGetters('products', {products: "processedProducts"})
  },
  methods: {
    ...mapActions('products', ["removeProduct"]),
    handleEdit (product) {
      this.$router.push(`/admin/products/edit/${product.id}`);
    },
    handleRemove (product) {
      this.$q.dialog({
        title: 'Confirm',
        message: 'Are you sure you want to delete this product?',
        ok: 'Yes',
        cancel: 'No'
      }).then(() => {
        this.removeProduct(product)
      })
    }
  }
}
</script>

<style>
  tr > td {
    background-color: lightblue;
    padding: 0.5em 0;
  }

</style>
