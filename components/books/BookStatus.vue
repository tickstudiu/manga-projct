<template>
  <div class="border px-3" v-if="!isLoading">{{ getStatus(id).status }}</div>
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
    await this.$store.dispatch('status/fetch')
  },

  computed: {
    ...mapState('status', ['isLoading']),
    ...mapGetters('status', ['getStatus'])
  }
})
</script>
