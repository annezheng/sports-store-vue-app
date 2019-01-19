<template>
    <q-item class="row justify-center">
      <q-item-side left >
        <q-select
          stack-label="Select page size"
          inverted
          color="primary"
          separator
          v-model="selectPageSize"
          :options="options"
        />
      </q-item-side>
      <q-item-main >
      </q-item-main>
      <q-item-side right class="q-mt-sm">
        <q-pagination
          v-model="page"
          :min="1"
          :max="pageCount"
          :max-pages="5"
          boundary-links
        />
      </q-item-side>
    </q-item>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex"
export default {
  data () {
    return {
      options: [
        {
          label: '4 per page',
          value: 4
        },
        {
          label: '8 per page',
          value: 8
        },
        {
          label: '12 per page',
          value: 12
        }
      ]
    }
  },
  computed: {
    selectPageSize: {
      get () {
        return this.pageSize
      },
      set (val) {
        this.setPageSize(val)
      }
    },
    page: {
      get () {
        return this.currentPage
      },
      set (val) {
        this.setCurrentPage(val)
      }
    },
    ...mapState('products', ['currentPage']),
    ...mapGetters('products', ['pageCount', 'pageSize']),
    pageNumbers() {
        return [...Array(this.pageCount + 1).keys()].slice(1)
    }
  },
  methods: {
    ...mapActions('products', ['setCurrentPage', 'setPageSize'])
  }
}
</script>
