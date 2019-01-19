<template>
    <q-list separator class="q-mt-md" dark highlight >
      <q-item multiline v-for="p in products" v-bind:key="p.id"  >
        <q-item-main >
          <q-item-tile label>{{p.name}}</q-item-tile>
          <q-item-tile sublabel text-color="primary">
            <span>{{ p.description }}</span>
          </q-item-tile>
        </q-item-main>
        <q-item-side right>
          <q-item-tile stamp text-color="secondary">
            <q-chip color="secondary">
              {{ p.price | currency }}
            </q-chip>
          </q-item-tile>
          <q-item-tile>
            <q-btn glossy class="q-px-md" dense color="primary" text-color="grey-3" label="Add to cart" @click="handleProductAdd(p)"/>
          </q-item-tile>
        </q-item-side>
      </q-item>
      <PageControls />
    </q-list>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
import PageControls from "./PageControls";
export default {
  components: { PageControls },
  computed: {
    ...mapGetters('products', {products: "processedProducts"})
  },
  // filters: {
  //     currency(value) {
  //         return new Intl.NumberFormat("en-US",
  //             { style: "currency", currency: "USD" }).format(value);
  //     }
  // },
  methods: {
    ...mapMutations('cart', ["addProduct"]),
    handleProductAdd(p){
      this.addProduct(p)
      this.$router.push({name: 'cart'})
    }
  }
}
</script>

