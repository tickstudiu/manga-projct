<template>
  <div class="border px-3" v-if="!isLoading">{{ getTag(id).tag }}</div>
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
    await this.$store.dispatch('tag/fetch')
  },

  computed: {
    ...mapState('tag', ['isLoading']),
    ...mapGetters('tag', ['getTag'])
  }
})
</script>
