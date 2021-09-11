<template>
  <div class="flex justify-between">
    <button
      class="border px-3"
      @click="$emit('prev')"
      @keydown="$emit('prev')"
      :disabled="
        Number(this.$route.query.page) === 1 || !this.$route.query.page
      "
    >
      prev
    </button>
    <button class="border px-3" @click="$emit('next')" @keydown="$emit('next')">
      next
    </button>
  </div>
</template>
