<template>
  <div class="book-list">
    <!-- search form -->
    <form @submit.prevent="onSubmit" class="flex gap-6">
      <input
        type="text"
        placeholder="search"
        class="flex-1 border"
        v-model="keyword"
      />
      <button class="border px-3">submit</button>
      <select v-model="type">
        <option value="" disabled>select one</option>
        <option
          v-for="(status, index) in Object.values(searchStatus)"
          :key="index"
          :value="status"
        >
          {{ status }}
        </option>
      </select>
    </form>

    <!-- header -->
    <header class="mb-6">
      <h2>books</h2>
    </header>

    <!-- filter tab -->
    <div class="mb-6">
      <div class="flex justify-between">
        <h4>filter</h4>
        <button
          class="border px-3"
          @click="toggleFilter = !toggleFilter"
          @keydown="toggleFilter = !toggleFilter"
          :disabled="isLoading"
        >
          <template v-if="!isLoading"> toggle </template>
          <template v-else> loading... </template>
        </button>
      </div>

      <div v-if="toggleFilter">
        <div>
          <h6>type</h6>
          <ul class="grid grid-cols-3">
            <li
              class="item"
              :class="{ active: queryType === 'new' }"
              @click.prevent="changeType('new')"
            >
              new
            </li>
            <li
              class="item"
              :class="{ active: queryType === 'top-view' }"
              @click.prevent="changeType('top-view')"
            >
              top view
            </li>
          </ul>
        </div>

        <div>
          <h6>category</h6>
          <ul class="grid grid-cols-3">
            <li
              v-for="item in categories"
              :key="item.category"
              class="item"
              :class="{ active: queryCategory === item.category }"
              @click.prevent="changeCategory(item)"
            >
              {{ item.category }}
            </li>
          </ul>
        </div>

        <div>
          <h6>status</h6>
          <ul class="grid grid-cols-3">
            <li
              v-for="item in status"
              :key="item.status"
              class="item"
              :class="{ active: queryStatus === item.status }"
              @click.prevent="changeStatus(item)"
            >
              {{ item.status }}
            </li>
          </ul>
        </div>

        <div>
          <h6>tags</h6>
          <ul class="grid grid-cols-3">
            <li
              v-for="item in tags"
              :key="item.tag"
              class="item"
              :class="{ active: queryTag === item.tag }"
              @click.prevent="changeTag(item)"
            >
              {{ item.tag }}
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- book list -->
    <template v-if="!isLoading">
      <BookCard
        class="mb-3"
        v-for="book in books"
        :key="book.title"
        :book="book"
      />
    </template>
    <template v-else> loading... </template>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
import BookCard from '@/components/books/BookCard.vue'
import { searchStatus } from '@/enums/searchTypes'
export default Vue.extend({
  components: {
    BookCard,
  },

  data() {
    return {
      searchStatus,
      type: '',
      keyword: '',
      toggleFilter: false,
    }
  },

  async fetch() {
    await this.$store.dispatch('bookList/fetch')
  },

  computed: {
    ...mapState('bookList', [
      'isLoading',
      'books',
      'tags',
      'status',
      'categories',
    ]),

    queryType(): string {
      return this.$route.query.type?.toString() || 'new'
    },

    queryCategory(): string {
      return this.$route.query.category?.toString() || 'all'
    },

    queryTag(): string {
      return this.$route.query.tag?.toString() || 'all'
    },

    queryStatus(): string {
      return this.$route.query.status?.toString() || 'all'
    },
  },

  methods: {
    onSubmit() {
      window.location.href = `/search?type=${this.status}&value=${this.keyword}`
    },

    changeType(value: string) {
      this.$router.push({
        path: this.$route.path,
        query: {
          ...this.$route.query,
          type: value.toString(),
        },
      })
    },

    changeTag(value: any) {
      this.$router.push({
        path: this.$route.path,
        query: {
          ...this.$route.query,
          tag: value.tag.toString(),
        },
      })
    },
    
    changeCategory(value: any) {
      this.$router.push({
        path: this.$route.path,
        query: {
          ...this.$route.query,
          category: value.category.toString(),
        },
      })
    },

    changeStatus(value: any) {
      this.$router.push({
        path: this.$route.path,
        query: {
          ...this.$route.query,
          status: value.status.toString(),
        },
      })
    },
  },
})
</script>

<style lang="sass" scoped>
.item
  &:not(.active):hover
    @apply underline
  &.active
    @apply underline
</style>
