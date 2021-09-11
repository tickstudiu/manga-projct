<template>
  <div class="border px-3" v-if="!$fetchState.pending">{{ item.author }}</div>
  <div class="border px-3" v-else>loading...</div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { AuthorItem } from '@/types/author'
export default Vue.extend({
  props: {
    id: {
      type: Number,
      default: null,
    } as PropOptions<number>,
  },

  data() {
    return {
      item: {} as AuthorItem,
    }
  },

  async fetch() {
    const res = await this.$services.author.byId({ id: this.id })

    this.$nextTick(() => {
      this.item = res
    })
  },
})
</script>
