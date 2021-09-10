<template>
  <div class="search">
    search
    <p>{{ $route.params.type }}</p>
    <p>{{ $route.params.value }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  middleware: ['search']
})
</script>
