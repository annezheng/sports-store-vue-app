<template>
  <div v-if="showSearch" class="row q-my-sm">
    <q-search
      :value="searchTerm"
      :debounce="600"
      placeholder="Enter search term..."
      @input="doSearch"
      clearable
      class="col q-mx-md"
      dark
    />
    <q-btn color="primary" class="col-auto q-mx-md q-px-md" @click="handleClose">Close</q-btn>
  </div>
</template>

<script>
import { mapMutations, mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState('products', ['showSearch', 'searchTerm']),
  },
  methods: {
    ...mapMutations('products', ["setShowSearch"]),
    ...mapActions('products', ["search", 'clearSearchTerm']),
    doSearch($event) {
      this.search($event)
    },
    handleClose() {
      this.clearSearchTerm();
      this.setShowSearch(false);
    }
  }
}
</script>

