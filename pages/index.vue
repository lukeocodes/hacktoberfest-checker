<template>
  <article>
    <CheckRepository />
    <div class="prose lg:prose-xl max-w-none">
      <nuxt-content :document="page" />
    </div>
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

<style>
.nuxt-content {
  @apply mx-auto w-9/12;
}

.nuxt-content,
.nuxt-content h1,
.nuxt-content h2,
.nuxt-content h3,
.nuxt-content h4,
.nuxt-content h5,
.nuxt-content h6 {
  font-family: 'Inter Regular', 'Helvetica', 'Arial', san-serif;
  color: var(--color);
}
</style>
