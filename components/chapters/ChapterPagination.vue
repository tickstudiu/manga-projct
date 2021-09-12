<template>
  <div class="flex justify-between">
    <button
      class="border px-3"
      @click="$emit('prev')"
      @keydown="$emit('prev')"
      :disabled="disabledNext"
    >
      prev
    </button>
    <button class="border px-3" @click="$emit('next')" @keydown="$emit('next')">
      next
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    disabledNext: {
      type: Boolean,
      default: false,
    },
  },
})
</script>
