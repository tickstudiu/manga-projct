<template>
  <div class="home">
    <!-- search form -->
    <form @submit.prevent="onSubmit" class="flex gap-6">
      <input type="text" placeholder="search" class="flex-1 border"/>
      <button class="border px-3">submit</button>
      <client-only>
        <select>
          <option value="value">filter type</option>
        </select>
      </client-only>
    </form>

    <!-- new book -->
    <div class="flex justify-between items-baseline">
      <h2>new book</h2>
      <nuxt-link to="/" class="hover:underline"> more </nuxt-link>
    </div>
    <div>
      <BookCard class="mb-3"/>
      <BookCard class="mb-3"/>
      <BookCard class="mb-3"/>
    </div>

    <hr />

    <!-- all chapters order by dec -->
    <div class="flex justify-between items-baseline">
      <h2>chapters</h2>
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
export default Vue.extend({
  components: {
    BookCard,
  },

  methods: {
    onSubmit() {
      console.log('test')
    }
  }
})
</script>
