<template>
  <div class="chapter-list">
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

  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { searchStatus } from '@/enums/searchTypes'
export default Vue.extend({  
  data() {
    return {
      searchStatus,
      status: '',
      keyword: '',
    }
  },

  methods: {
    onSubmit() {
      window.location.href = `/search?type=${this.status}&value=${this.keyword}`
    },
  },
})
</script>
