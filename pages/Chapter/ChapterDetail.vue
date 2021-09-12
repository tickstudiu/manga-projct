<template>
  <div class="chapter-detail">
    <!-- chapter detail -->
    <h3 class="mb-3">
      {{ book.title }}
    </h3>
    <p class="mb-3">chapter {{ chapter.ep }} : {{ chapter.name }}</p>

    <!-- image list -->
    <template v-if="!isLoading">
      <ImageRender
        class="mb-3"
        v-for="(page, index) in chapter.pages"
        :key="index"
        :page="page"
      />
    </template>
    <template v-else> loading... </template>

    <!-- pagination -->
    <ChapterPagination
      :disabled-next="$route.params.chapter_id === '1'"
      @next="changeChapter(Number($route.params.chapter_id) + 1)"
      @prev="changeChapter(Number($route.params.chapter_id) - 1)"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
import ImageRender from '@/components/ImageRender.vue'
import ChapterPagination from '@/components/chapters/ChapterPagination.vue'
export default Vue.extend({
  components: {
    ImageRender,
    ChapterPagination,
  },

  async fetch() {
    await this.$store.dispatch('chapterDetail/fetch', {
      chapterId: this.$route.params.chapter_id,
      bookId: this.$route.params.book_id,
    })
  },

  computed: {
    ...mapState('chapterDetail', ['isLoading', 'chapter', 'book']),
  },

  methods: {
    changeChapter(newChapter: any) {
      window.location.href = `/books/${this.$route.params.book_id}/${newChapter}`
    },
  },
})
</script>

<style lang="sass" scoped>
.chapter-detail
  @apply py-6 px-4
</style>
