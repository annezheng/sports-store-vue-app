<template>
  <q-page padding>
    <q-toolbar glossy>
      <q-toolbar-title class="q-title">
        Administration
      </q-toolbar-title>
      <q-btn flat :to="{name: 'products'}" :color="$route.name === 'products' ? '' : 'grey-9'">Products</q-btn>
      <q-btn flat :to="{name: 'orders'}" :color="$route.name === 'orders' ? '' : 'grey-9'">Orders</q-btn>
      <q-btn flat :to="{name: 'logout'}" :color="$route.name === 'logout' ? '' : 'grey-9'">Log Out</q-btn>
    </q-toolbar>
    <router-view />
  </q-page>
</template>

<script>
import ProductsAdmin from './ProductsAdmin.vue'
import OrderAdmin from './OrderAdmin.vue'
export default {
  components: {
    ProductsAdmin,
    OrderAdmin
  }
}
</script>

