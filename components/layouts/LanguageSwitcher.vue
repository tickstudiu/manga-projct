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

    <client-only>
      <select v-model="code">
        <option
          v-for="(language, index) in languages"
          :key="index"
          :value="language.code"
        >
          <img
            class="object-contain w-4 h-auto"
            :src="language.flag.src"
            :alt="language.flag.alt"
          />
          <p>{{ language.name }}</p>
        </option>
      </select>
    </client-only>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { SupportedLanguages } from '@/enums/languages'
export default Vue.extend({
  data() {
    return {
      code: 'th',
      languages: SupportedLanguages,
    }
  },

  watch: {
    code(Language) {
      this.changeLocale(Language)
    },
  },

  computed: {
    activeLanguage(): any {
      return SupportedLanguages.find(
        (value) => value.code === this.$i18n.locale
      )
    },
  },

  methods: {
    changeLocale(code: string) {
      if (this.$i18n.locale === code) {
        return
      }
      this.$i18n.setLocale(code)
    },
  },
})
</script>
