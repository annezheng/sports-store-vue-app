<template>
    <div>
      <div class="column q-my-md" v-for="c in categories" v-bind:key="c">
          <q-btn
            push
            class="full-width"
            @click="setCurrentCategory(c)"
            :color="c == currentCategory ? 'primary' : 'secondary'">
              {{ c }}
          </q-btn>
      </div>
    </div>
</template>

<script>
import { mapState, mapGetters, mapActions} from "vuex";
export default {
  computed: {
    ...mapState('products', ["currentCategory"]),
    ...mapGetters('products', ["categories"])
  },
  methods: {
    ...mapActions('products', ["setCurrentCategory"])
  }
}
</script>

