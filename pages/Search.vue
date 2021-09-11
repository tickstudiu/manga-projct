<template>
  <div class="search">
    search
    <!-- http://localhost:8080/search?type=tag&value=title -->
    <p>{{ $route.query.type }}</p>
    <p>{{ $route.query.value }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({  
})
</script>
