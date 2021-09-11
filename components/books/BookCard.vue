<template>
  <div class="border p-3 cursor-pointer" @click="bookUrl">
    <h6 class="mb-3">{{ book.title }}</h6>
    <div class="flex gap-3 mb-3">
      <p>categories:</p>
      <BookCategory v-for="item in book.categories" :key="item" :id="item"/>
    </div>
    <div class="flex gap-3 mb-3">
      <p>tags:</p>
      <BookTag v-for="item in book.tags" :key="item" :id="item" />
    </div>
    <div class="flex gap-3">
      <p>authors:</p>
      <BookAuthor v-for="item in book.authors" :key="item" :id="item" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { BookItem } from '@/types/book'
import BookCategory from '@/components/books/BookCategory.vue'
import BookTag from '@/components/books/BookTag.vue'
import BookAuthor from '@/components/books/BookAuthor.vue'
export default Vue.extend({
  components: {
    BookCategory,
    BookTag,
    BookAuthor
  },

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
