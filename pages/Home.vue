<template>
  <div class="home">
    <!-- search form -->
    <form @submit.prevent="onSubmit" class="flex gap-6">
      <input
        type="text"
        placeholder="search"
        class="flex-1 border"
        v-model="keyword"
      />
      <button class="border px-3">submit</button>
      <client-only>
        <select v-model="status">
          <option value="" disabled>select one</option>
          <option
            v-for="(status, index) in Object.values(searchStatus)"
            :key="index"
            :value="status"
          >
            {{ status }}
          </option>
        </select>
      </client-only>
    </form>

    <!-- new book -->
    <div class="flex justify-between items-baseline">
      <h2>new books</h2>
      <nuxt-link to="/books?filter=new" class="hover:underline">
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
    <div class="flex justify-between items-baseline">
      <h2>last updated chapters</h2>
      <nuxt-link to="/chapters?filter=last-updated" class="hover:underline">
        more
      </nuxt-link>
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
import { searchStatus } from '@/enums/searchTypes'
export default Vue.extend({
  components: {
    BookCard,
    ChapterCard,
  },

  data() {
    return {
      searchStatus,
      status: '',
      keyword: '',
    }
  },

  async fetch() {
    await this.$store.dispatch('home/fetch')
  },

  computed: {
    ...mapState('home', ['isLoading', 'chapters', 'books']),
  },

  methods: {
    onSubmit() {
      window.location.href = `/search?type=${this.status}&value=${this.keyword}`
    },
  },
})
</script>
