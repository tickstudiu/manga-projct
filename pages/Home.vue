<template>
  <div class="home">

    <!-- new book -->
    <div class="flex justify-between items-baseline mb-6">
      <h2>new books</h2>
      <nuxt-link to="/books?type=new" class="hover:underline">
        more
      </nuxt-link>
    </div>

    <!-- books list -->
    <template v-if="!isLoading">
      <BookCard
        class="mb-3"
        v-for="book in books"
        :key="book.title"
        :book="book"
      />
    </template>
    <template v-else> ...loading </template>

    <hr class="my-6" />

    <!-- all chapters order by dec -->
    <div class="flex justify-between items-baseline mb-6">
      <h2>last updated chapters</h2>
    </div>

    <!-- chapters list -->
    <template v-if="!isLoading">
      <ChapterCard
        class="mb-3"
        v-for="(chapter, index) in chapters"
        :key="index"
        :chapter="chapter"
      />
    </template>
    <template v-else>...loading</template>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
import BookCard from '@/components/books/BookCard.vue'
import ChapterCard from '@/components/chapters/ChapterCard.vue'
export default Vue.extend({
  components: {
    BookCard,
    ChapterCard,
  },

  async fetch() {
    await this.$store.dispatch('home/fetch')
  },

  computed: {
    ...mapState('home', ['isLoading', 'chapters', 'books']),
  },
})
</script>
