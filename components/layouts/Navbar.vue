<template>
  <div class="flex justify-between bg-gray-200 py-3 px-4">
    <main>
      <nuxt-link
        v-for="item in menu"
        :key="item.name"
        :to="item.link"
        class="link"
      >
        {{ item.name }}
      </nuxt-link>
    </main>

    <aside>
      <LanguageSwitcher />
    </aside>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { menu } from '@/config/menu'
import LanguageSwitcher from '@/components/layouts/LanguageSwitcher.vue'
export default Vue.extend({
  components: {
    LanguageSwitcher,
  },

  data() {
    return {
      menu,
    }
  },
})
</script>

<style lang="sass" scoped>
.link
  @apply text-black

  &:hover
    @apply underline
</style>
