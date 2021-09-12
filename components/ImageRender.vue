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
export default Vue.extend({
  props: {
    image: {
      type: Object,
      default: null,
    } as PropOptions<any>,
  },

  data() {
    return {
      isLoading: true,
    }
  },

  computed: {
    thumbnail(): any {
      return {
        url: this.image?.pageUrl,
        alt: this.image?.alt || 'iamge',
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
