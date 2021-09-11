<template>
  <div class="border px-3" v-if="!$fetchState.pending">{{ item.category }}</div>
  <div class="border px-3" v-else>loading...</div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { CategoryItem } from '@/types/category'
export default Vue.extend({
  props: {
    id: {
      type: Number,
      default: null,
    } as PropOptions<number>,
  },

  data() {
    return {
      item: {} as CategoryItem,
    }
  },

  async fetch() {
    const res = await this.$services.category.byId({ id: this.id })

    this.$nextTick(() => {
      this.item = res
    })
  },
})
</script>
