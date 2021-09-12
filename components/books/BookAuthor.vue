<template>
  <div class="border px-3" v-if="!isLoading">{{ getAuthor(id).author }}</div>
  <div class="border px-3" v-else>loading...</div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { mapState, mapGetters } from 'vuex'
export default Vue.extend({
  props: {
    id: {
      type: Number,
      default: null,
    } as PropOptions<number>,
  },

  async fetch() {
    await this.$store.dispatch('author/fetch')
  },

  computed: {
    ...mapState('author', ['isLoading']),
    ...mapGetters('author', ['getAuthor'])
  }
})
</script>
