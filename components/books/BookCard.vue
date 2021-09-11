<template>
  <div class="border p-3 cursor-pointer" @click="bookUrl">
    <h6>{{ book.title }}</h6>
    <p>status: {{ book.status }}</p>
    <p>author: {{ book.authors }}</p>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { BookItem } from '@/types/book'
export default Vue.extend({
  props: {
    book: {
      type: Object,
      default: null,
    } as PropOptions<BookItem>,
  },

  methods: {
    bookUrl() {
      this.$router.push(`/books/${this.book.id}`)
    },
  },
})
</script>
