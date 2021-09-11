<template>
  <div class="chapter">
    Chapter
    <p>{{ $route.params.book_id }}</p>
    <p>{{ $route.params.chapter_id }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
})
</script>
