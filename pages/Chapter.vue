<template>
  <div class="search">
    Chapter
    <p>{{ $route.params.category }}</p>
    <p>{{ $route.params.project_id }}</p>
    <p>{{ $route.params.chapter_id }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  middleware: ['category']
})
</script>
