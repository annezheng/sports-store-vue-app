<template>
  <q-page padding>
    <div class="row">
        <div class="col-xs-12 col-sm-3 bg-grey-3 q-pa-md">
            <CategoryControls />
            <q-toggle
              v-model="showSearchBar"
              color="primary"
              label="Show Search"
              class="q-ma-md"
            />
        </div>
        <div class="col-xs-12 col-sm-9 bg-grey-9 q-pa-md">
            <Search />
            <ProductList />
        </div>
    </div>
  </q-page>
</template>

<style>
</style>

<script>
import ProductList from "../components/ProductList";
import CategoryControls from "../components/CategoryControls";
import Search from "../components/Search";

import { mapState, mapMutations } from "vuex";

export default {
  name: 'store',
  components: { ProductList, CategoryControls, Search },
  computed: {
    ...mapState('products', ['showSearch']),
    showSearchBar: {
      get () {
        return this.showSearch
      },
      set (val) {
        this.setShowSearch(val)
      }
    },
  },
  methods: {
    ...mapMutations('products', ["setShowSearch"])
  }
}
</script>
