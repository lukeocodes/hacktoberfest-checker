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
      const { clientId, gitHubAuthUrl, oauthRedirectUrl } = this.$config;
      window.location.href = `${gitHubAuthUrl}?client_id=${clientId}&redirect_uri=${oauthRedirectUrl}`
    },
  },
}
</script>
