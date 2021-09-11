<template>
  <div>
    {{ error.statusCode }} !! page
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
