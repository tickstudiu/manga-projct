<template>
  <div v-if="loading">loading...</div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      loading: false,
    }
  },

  methods: {
    start() {
      this.loading = true
    },
    finish() {
      this.loading = false
    },
  },
})
</script>
