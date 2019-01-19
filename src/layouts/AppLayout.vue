<template>
  <q-layout view="hHh Lpr lFr">
    <q-layout-header>
      <q-toolbar
      color="secondary"
      glossy
      >
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title class="uppercase">
          <router-link to="/" tag="span">Sports Store</router-link>
          <div slot="subtitle">Running on Quasar v{{ $q.version }}</div>
        </q-toolbar-title>
        <cart-summary />
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer
      v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null"
    >
      <q-list
        no-border
        inset-delimiter
      >
        <q-list-header>Menu</q-list-header>
        <q-item to="/" exact>
          <q-item-side icon="home" />
          <q-item-main label="Store"/>
        </q-item>
        <q-collapsible
          icon="supervisor_account" 
          label="Admin"
          to="/admin"
          exact
        >
          <q-item to="/login" v-if="!auth">
            <q-item-side icon="input" />
            <q-item-main label="Log In"/>
          </q-item>
          <q-item to="/admin/products">
            <q-item-side icon="store" />
            <q-item-main label="Products"/>
          </q-item>
          <q-item to="/admin/orders">
            <q-item-side icon="add_shopping_cart" />
            <q-item-main label="Orders"/>
          </q-item>
          <q-item to="/logout" v-if="auth">
            <q-item-side icon="exit_to_app" />
            <q-item-main label="Log Out"/>
          </q-item>
        </q-collapsible>

        <q-item to="/cart">
          <q-item-side icon="shopping_cart" />
          <q-item-main label="Cart"/>
        </q-item>
        <q-item @click.native="openURL('https://quasar-framework.org/guide/')">
          <q-item-side icon="code" />
          <q-item-main label="Quasar" />
        </q-item>
      </q-list>
    </q-layout-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'
import ProductList from "components/ProductList";
import CategoryControls from "../components/CategoryControls";
import CartSummary from "../components/CartSummary";
import { mapState } from 'vuex'
export default {
  name: 'Store',
  components: { ProductList, CategoryControls, CartSummary },
  data () {
    return {
      leftDrawerOpen: true
    }
  },
  computed: {
    ...mapState('auth', {auth: 'authenticated'})
  },
  methods: {
    openURL
  }
}
</script>
