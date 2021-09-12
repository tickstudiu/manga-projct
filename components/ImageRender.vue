<template>
  <div>
    <img
      :src="thumbnail.url"
      :alt="thumbnail.alt"
      class="border p-3"
      :class="{ hidden: isLoading }"
      @load="onImgLoaded"
    />
    <div v-if="isLoading" class="border p-3 text-center">loading...</div>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { PageItem } from '@/types/chapter'
export default Vue.extend({
  props: {
    page: {
      type: Object,
      default: null,
    } as PropOptions<PageItem>,
  },

  data() {
    return {
      isLoading: true,
    }
  },

  computed: {
    thumbnail(): any {
      return {
        url: this.page?.pageUrl,
        alt: this.page?.alt || 'iamge',
      }
    },
  },

  methods: {
    onImgLoaded() {
      this.isLoading = false
    },
  },
})
</script>
