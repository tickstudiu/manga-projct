<template>
  <div class="category">
    Category
    <!-- http://localhost:8080/category?value=category -->
    <p>{{ $route.query.value }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
})
</script>
