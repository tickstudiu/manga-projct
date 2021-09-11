<template>
  <div class="border px-3" v-if="!$fetchState.pending">{{ item.tag }}</div>
  <div class="border px-3" v-else>loading...</div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { TagItem } from '@/types/tag'
export default Vue.extend({
  props: {
    id: {
      type: Number,
      default: null,
    } as PropOptions<number>,
  },

  data() {
    return {
      item: {} as TagItem,
    }
  },

  async fetch() {
    const res = await this.$services.tag.byId({ id: this.id })

    this.$nextTick(() => {
      this.item = res
    })
  },
})
</script>
