<template>
  <div class="error">
    <h1 class="text-center mb-6">{{ error.statusCode }} !!</h1>
    <p class="text-center link"><nuxt-link to="/">back to home</nuxt-link></p>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'

export default Vue.extend({

  props: {
    error: {
      type: Object,
      default: () => ({}),
    } as PropOptions<Object>,
  },
})
</script>

<style lang="sass" scoped>
.error
  @apply py-6 px-4
</style>
