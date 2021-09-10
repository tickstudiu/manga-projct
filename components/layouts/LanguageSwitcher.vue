<template>
  <div class="flex gap-6 items-center">
    <div class="flex gap-3">
      <img
        class="object-contain w-4 h-auto"
        :src="activeLanguage.flag.src"
        :alt="activeLanguage.flag.alt"
      />
      <p>{{ activeLanguage.code }}</p>
    </div>

    <select name="cars" id="cars">
      <option
        v-for="(language, index) in languages"
        :key="index"
        @click="changeLocale(language)"
      >
        <template>
          <img
            class="object-contain w-4 h-auto"
            :src="language.flag.src"
            :alt="language.flag.alt"
          />
          <p>{{ language.name }}</p>
        </template>
      </option>
    </select>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { SupportedLanguages } from '@/enums/languages'
import { SupportedLanguage } from '@/types/languages'
export default Vue.extend({
  data() {
    return {
      languages: SupportedLanguages,
    }
  },

  computed: {
    activeLanguage() {
      return SupportedLanguages.find(
        (value) => value.code === this.$i18n.locale
      )
    },
  },

  methods: {
    changeLocale(language: SupportedLanguage) {
      if (this.$i18n.locale === language.code) {
        return
      }
      this.$i18n.setLocale(language.code)
    },
  },
})
</script>
