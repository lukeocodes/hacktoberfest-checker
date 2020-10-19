<template>
  <section class="prose lg:prose-xl max-w-none">
    <nuxt-content :document="page" />
  </section>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const page = await $content('details').fetch()

    return {
      page,
    }
  },
}
</script>
