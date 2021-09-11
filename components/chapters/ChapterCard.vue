<template>
  <div class="border p-3 cursor-pointer" @click="chapterUrl">
    <h6>{{chapter.name}}</h6>
    <p>view: {{chapter.view}}</p>
    <p>bookId: {{chapter.bookId}}</p>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { ChapterItem } from '@/types/chapter'
export default Vue.extend({
  props: {
    chapter: {
      type: Object,
      default: null,
    } as PropOptions<ChapterItem>,
  },

  methods: {
    chapterUrl() {
      this.$router.push(`/chapters/${this.chapter.id}`)
    },
  },
})
</script>