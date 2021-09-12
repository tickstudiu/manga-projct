<template>
  <div class="border p-3 cursor-pointer" @click="bookUrl">
    <h6 class="mb-3">{{ book.title }}</h6>
    <div class="flex flex-wrap gap-3 mb-3">
      <p>categories:</p>
      <BookCategory v-for="item in book.categories" :key="item" :id="item"/>
    </div>
    <div class="flex flex-wrap gap-3 mb-3">
      <p>status:</p>
      <BookStatus v-for="item in book.status" :key="item" :id="item" />
    </div>
    <div class="flex flex-wrap gap-3 mb-3">
      <p>tags:</p>
      <BookTag v-for="item in book.tags" :key="item" :id="item" />
    </div>
    <div class="flex flex-wrap gap-3">
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
import BookStatus from '@/components/books/BookStatus.vue'
export default Vue.extend({
  components: {
    BookCategory,
    BookTag,
    BookAuthor,
    BookStatus
  },

  props: {
    book: {
      type: Object,
      default: null,
    } as PropOptions<BookItem>,
  },

  methods: {
    bookUrl() {
      window.location.href = `/books/${this.book.id}`
    },
  },
})
</script>
