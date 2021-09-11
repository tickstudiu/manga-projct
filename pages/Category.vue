<template>
  <div class="search">
    Category
    <p>{{ $route.params.category }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  middleware: ['category']
})
</script>
