<template>
  <q-page>
    <h4 class="text-center text-bold" v-bind:class="themeClass">
        {{ editMode ? "Edit Product" : "Create a Product" }}
    </h4>
    <div class="q-pa-sm bg-grey-3">
      <q-field v-if="editMode">
        <q-input name="ID" type="text" v-model="product.id" float-label="ID (Not Editable)" disable />
      </q-field>
      <q-field :error="$v.product.name.$error" error-label="Please enter a value.">
        <q-input name="name" type="text" v-model="product.name" float-label="Name" @blur="$v.product.name.$touch" />
      </q-field>
      <q-field :error="$v.product.description.$error" error-label="Please enter a value.">
        <q-input name="description" type="text" v-model="product.description" float-label="Description"  @blur="$v.product.description.$touch" />
      </q-field>
      <q-field :error="$v.product.category.$error" error-label="Please enter a value.">
        <q-select
          float-label="Category"
          v-model="productCategory"
          :options="categoryOptions"
          @blur="$v.product.category.$touch"
          @input="selectChange"
        />
      </q-field>
      <q-field :error="$v.product.price.$error" error-label="Please enter a value.">
        <q-input name="price" type="number" v-model.number="product.price" float-label="Price"  @blur="$v.product.price.$touch" :step="0.01" prefix="$"/>
      </q-field>
    </div>
    <div class="text-center q-mt-md">
      <q-btn to="/admin/products" color="primary" class="q-ma-xs">
        Cancel
      </q-btn>
      <q-btn :color="editMode? 'warning': 'secondary'" class="q-ma-xs" v-on:click="handleSave">
        {{editMode ? 'Save Changes' : 'Create Product'}}
      </q-btn>
    </div>
  </q-page>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import { mapActions, mapState, mapGetters } from "vuex";
export default {
  data () {
    return {
      product: {},
      showAlert: false,
      productCategory: ''
    }
  },
  validations: {
    product: {
        name: { required },
        description: { required },
        category: { required },
        price: { required }
    }
  },
  computed: {
    ...mapState('products', ["categoriesData"]),
    ...mapGetters('products', ['productById']),
    editMode () {
      return this.$route.params["op"] === 'edit'
    },
    themeClass() {
        return this.editMode ? "text-primary" : "text-secondary";
    },
    categoryOptions () {
      let options = []
      this.categoriesData.forEach(c => {
        options.push({
          label: c,
          value: c
        })
      })
      return options
    }
  },
  methods: {
    selectChange (val) {
      this.product.category = val;
    },
    ...mapActions('products', ["updateProduct", "addProduct"]),
    async handleSave () {
      this.$v.$touch();
      if (this.$v.$error) {
        console.log(this.$v.$error)
        this.$q.notify({
          message: 'Please review fields again.',
          position: 'top',
          type: 'negative',
          closeBtn: true
        })
        return
      }
      if (this.editMode) {
        await this.updateProduct(this.product);
      } else {
        await this.addProduct(this.product);
      }
      this.$router.push("/admin/products");
    }
  },
  created () {
    if (this.editMode) {
      if (this.categoriesData.length === 0) {
        this.$router.push("/admin/products");
      } else {
        Object.assign(this.product, this.productById(this.$route.params["id"]))
      }
    }
    this.productCategory = this.product.category;
  }
}
</script>

<style>

</style>
