<template>
  <div class="border p-3 cursor-pointer" @click="chapterUrl">
    <h6 class="mb-3">{{ chapter.name }}</h6>
    <p :class="{'mb-3': showBook}">view: {{ chapter.view }}</p>
    <div class="flex gap-3" v-if="showBook">
      <p>book:</p>
      <ChapterBook :id="chapter.bookId" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { ChapterItem } from '@/types/chapter'
import ChapterBook from '@/components/chapters/ChapterBook.vue'
export default Vue.extend({
  components: {
    ChapterBook
  },

  props: {
    chapter: {
      type: Object,
      default: null,
    } as PropOptions<ChapterItem>,
    showBook: {
      type: Boolean,
      default: false
    } as PropOptions<boolean>
  },

  methods: {
    chapterUrl() {
      this.$router.push(`/chapters/${this.chapter.id}`)
    },
  },
})
</script>
