<template>
  <section class="prose lg:prose-xl max-w-none">
    <nuxt-content :document="page" />
  </section>
</template>

<script>
export default {
  async asyncData({ $content, app: { i18n } }) {
    const page = await $content(i18n.locale, 'details').fetch()

    return {
      page,
    }
  },
}
</script>
