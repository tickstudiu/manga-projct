<template>
  <div class="home">
    <!-- search form -->
    <form @submit.prevent="onSubmit" class="flex gap-6">
      <input type="text" placeholder="search" class="flex-1 border" v-model="keyword"/>
      <button class="border px-3">submit</button>
      <client-only>
        <select v-model="status">
          <option value="" disabled>select one</option>
          <option v-for="(status, index) in Object.values(searchStatus)" :key="index" :value="status">{{status}}</option>
        </select>
      </client-only>
    </form>

    <!-- new book -->
    <div class="flex justify-between items-baseline">
      <h2>new books</h2>
      <nuxt-link to="/" class="hover:underline"> more </nuxt-link>
    </div>
    <div>
      <BookCard class="mb-3"/>
      <BookCard class="mb-3"/>
      <BookCard class="mb-3"/>
    </div>

    <hr class="my-6"/>

    <!-- all chapters order by dec -->
    <div class="flex justify-between items-baseline">
      <h2>last updated chapters</h2>
      <nuxt-link to="/" class="hover:underline"> more </nuxt-link>
    </div>
    <div>
      <BookCard class="mb-3"/>
      <BookCard class="mb-3"/>
      <BookCard class="mb-3"/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import BookCard from '@/components/books/BookCard.vue'
import {searchStatus} from '@/enums/searchTypes'
export default Vue.extend({
  components: {
    BookCard,
  },

  data(){
    return {
      searchStatus,
      status: '',
      keyword: '',
    }
  },

  methods: {
    onSubmit() {
      window.location.href = `/search?type=${this.status}&value=${this.keyword}`
    }
  }
})
</script>
