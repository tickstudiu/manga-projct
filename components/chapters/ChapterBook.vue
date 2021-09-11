<template>
  <div class="border px-3" v-if="!$fetchState.pending">{{ item.title }}</div>
  <div class="border px-3" v-else>loading...</div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { BookItem } from '@/types/book'
export default Vue.extend({
  props: {
    id: {
      type: Number,
      default: null,
    } as PropOptions<number>,
  },

  data() {
    return {
      item: {} as BookItem,
    }
  },

  async fetch() {
    const res = await this.$services.book.byId({ id: this.id })

    this.$nextTick(() => {
      this.item = res
    })
  },
})
</script>
