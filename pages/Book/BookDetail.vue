<template>
  <div class="book-detail" v-if="!isError">
    <!-- book detail -->
    <ImageRender
        class="mb-3"
        :image="book.cover"
      />
    <h6 class="mb-3">{{ book.title }}</h6>
    <div class="flex flex-wrap gap-3 mb-3">
      <p>categories:</p>
      <BookCategory v-for="item in book.categories" :key="item" :id="item" />
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

    <hr class="my-6" />

    <h6 class="mb-3">chapters</h6>

    <!-- chapters list -->
    <template v-if="!isLoading && chapters.length">
      <ChapterCard
        class="mb-6"
        v-for="(chapter, index) in chapters"
        :key="index"
        :chapter="chapter"
      />
    </template>
    <template v-else-if="!chapters.length && !isLoading"> empty </template>
    <template v-else> loading... </template>

    <!-- pagination -->
    <Pagination
      @next="changePage((Number($route.query.page) || 1) + 1)"
      @prev="changePage((Number($route.query.page) || 1) - 1)"
    />
  </div>
  <div class="book-detail" v-else>
    <!-- todo -->
    <p class="text-center">error</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
import ImageRender from '@/components/ImageRender.vue'
import BookCategory from '@/components/books/BookCategory.vue'
import BookTag from '@/components/books/BookTag.vue'
import ChapterCard from '@/components/chapters/ChapterCard.vue'
import BookAuthor from '@/components/books/BookAuthor.vue'
import BookStatus from '@/components/books/BookStatus.vue'
import Pagination from '@/components/Pagination.vue'
export default Vue.extend({
  components: {
    BookCategory,
    BookTag,
    BookAuthor,
    ChapterCard,
    Pagination,
    BookStatus,
    ImageRender
  },

  async fetch() {
    await this.$store.dispatch('view/bookDetail/fetch', {
      id: this.$route.params.book_id,
      page: this.$route.query.page
    })
  },

  computed: {
    ...mapState('view/bookDetail', ['isLoading', 'isError', 'book', 'chapters']),
  },

  methods: {
    async changePage(newPage: any) {
      await this.$router.push({
        path: this.$route.path,
        query: {
          ...this.$route.query,
          page: newPage.toString(),
        },
      })

      this.$fetch()
    },
  },
})
</script>

<style lang="sass" scoped>
.book-detail
  @apply py-6 px-4
</style>
