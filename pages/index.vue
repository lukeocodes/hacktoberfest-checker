<template>
  <article>
    <Hero />
    <section class="prose lg:prose-xl max-w-none">
      <nuxt-content :document="page" />
    </section>
  </article>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const page = await $content('index').fetch()

    return {
      page,
    }
  },
}
</script>
