<template>
  <div class="chapter-detail" v-if="!isError">
    <!-- chapter detail -->
    <template v-if="!isLoading">
      <h3 class="mb-3">
        {{ book.title }}
      </h3>
      <p class="mb-3">chapter {{ chapter.ep }} : {{ chapter.name }}</p>
    </template>
    <template v-else> loading ... </template>

    <!-- image list -->
    <template
      v-if="!isLoading && chapter.pages && chapter.pages.length"
    >
      <ImageRender
        class="mb-3"
        v-for="(page, index) in chapter.pages"
        :key="index"
        :image="page"
      />
    </template>
    <template v-else-if="!isLoading && !chapter.pages">
      empty
    </template>
    <template v-else> loading... </template>

    <!-- pagination -->
    <ChapterPagination
      :disabled-next="$route.params.chapter_id === '1'"
      @next="changeChapter(Number($route.params.chapter_id) + 1)"
      @prev="changeChapter(Number($route.params.chapter_id) - 1)"
    />
  </div>
  <div class="chapter-detail" v-else>
    <!-- todo -->
    <p class="text-center">error</p>
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
    await this.$store.dispatch('view/chapterDetail/fetch', {
      chapterId: this.$route.params.chapter_id,
      bookId: this.$route.params.book_id,
    })
  },

  computed: {
    ...mapState('view/chapterDetail', ['isLoading', 'chapter', 'book', 'isError']),
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
