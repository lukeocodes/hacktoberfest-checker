<template>
  <article>
    <CheckRepository />
    <nuxt-content :document="page" />
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

<style></style>
