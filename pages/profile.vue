<template>
  <section class="prose lg:prose-xl max-w-none">
    <h2>Profile page</h2>
    <form>
      <button type="submit" class="btn btn-blue" @click.stop.prevent="submit()">
        Github Login
      </button>
    </form>
  </section>
</template>

<script>
export default {
  methods: {
    submit() {
      const { clientId } = process.env;
      window.location.href = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=http://localhost:8080/oauth/redirect`
    },
  },
}
</script>
