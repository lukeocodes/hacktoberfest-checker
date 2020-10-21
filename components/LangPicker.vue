<template>
  <div class="flex LangPicker">
    <label for="lang" class="LangPicker__Label">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        class="w-4"
        style="margin-top: 2px;"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="{2}"
          d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
        />
      </svg>
    </label>
    <select
      id="lang"
      v-model="selectedLocale"
      name="lang"
      class="uppercase"
      @change="switchLocale(selectedLocale)"
      style="margin-top: 1px;"
    >
      <option :value="currentLocale.code" selected="selected">
        {{ currentLocale.name }}
      </option>
      <option
        v-for="(locale, index) in availableLocales"
        :key="index"
        :value="locale.code"
      >
        {{ locale.name }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedLocale: this.$i18n.locale,
      isOpen: false,
    }
  },

  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale)
    },
    currentLocale() {
      return this.$i18n.locales.filter((l) => l.code === this.$i18n.locale)[0]
    },
  },

  methods: {
    switchLocale(event) {
      this.$router.replace(this.switchLocalePath(event))
    },
  },
}
</script>

<style scoped>
.LangPicker {
  @apply ml-6;
}
</style>
