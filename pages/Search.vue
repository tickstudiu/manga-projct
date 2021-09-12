<template>
  <div class="search">
    <!-- search form -->
    <form @submit.prevent="onSubmit" class="flex gap-6 mb-6">
      <input
        type="text"
        placeholder="search"
        class="flex-1 border"
        v-model="keyword"
      />
      <button class="border px-3">submit</button>
    </form>

    <!-- book list -->
    <template v-if="!isLoading && books.length">
      <BookCard
        class="mb-6"
        v-for="book in books"
        :key="book.title"
        :book="book"
      />
    </template>
    <template v-else-if="!books.length && !isLoading"> empty </template>
    <template v-else> loading... </template>

    <!-- pagination -->
    <Pagination
      @next="changePage((Number($route.query.page) || 1) + 1)"
      @prev="changePage((Number($route.query.page) || 1) - 1)"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
import BookCard from '@/components/books/BookCard.vue'
export default Vue.extend({
  components: {
    BookCard,
  },

  data() {
    return {
      keyword: this.$route.query.value || '',
    }
  },

  async fetch() {
    await this.$store.dispatch('view/search/fetch', this.$route.query)
  },

  computed: {
    ...mapState('view/search', ['isLoading', 'books']),
  },

  methods: {
    async onSubmit() {
      await this.$router.push({
        path: this.$route.path,
        query: {
          ...this.$route.query,
          value: this.keyword,
        },
      })

      this.$fetch()
    },

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
.search
  @apply py-6 px-4
</style>
