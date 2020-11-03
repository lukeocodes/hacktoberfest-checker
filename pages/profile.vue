<template>
  <div class="z-0 w-full h-without-header">
    <div class="flex flex-col items-center justify-end text-center h-3/4">
      <section v-if="!isAuthenticated" class="prose lg:prose-xl max-w-none">
        <h2 class="text-2xl Title md:text-4xl xl:text-6xl">Login</h2>
        <form>
          <button type="submit" class="Button" @click.stop.prevent="submit()">
            Github Login
          </button>
        </form>
      </section>
      <section v-if="isAuthenticated" class="prose lg:prose-xl max-w-none">
        <h1>User Details</h1>
        Name:{{ user.name }} <br />
        Email:{{ user.email }}<br />
        Bio:{{ user.bio }}
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      authCode: null,
      authToken: null,
      errors: [],
      user: {},
    }
  },
  computed: {
    isAuthenticated() {
      return !!this.authToken
    },
  },
  watch: {
    authToken(token) {
      localStorage.setItem('authToken', JSON.stringify(token))
    },
  },
  mounted() {
    if (this.$route.query && this.$route.query.code) {
      this.authCode = this.$route.query.code
      this.$axios
        .$get(`/api/oauth/redirect?code=${this.authCode}`)
        .then((result) => {
          this.authToken = result.authToken
        })
        .catch((error) => {
          this.errors.push(error)
        })
    }
    if (localStorage.authToken && localStorage.authToken !== 'undefined') {
      this.authToken = JSON.parse(localStorage.getItem('authToken'))
      this.fetchUserDetails()
    }
  },
  methods: {
    submit() {
      const { clientId, gitHubAuthUrl, oauthRedirectUrl } = this.$config
      window.location.href = `${gitHubAuthUrl}?client_id=${clientId}&redirect_uri=${oauthRedirectUrl}`
    },
    fetchUserDetails() {
      this.$axios
        .$get('https://api.github.com/user', {
          headers: {
            Authorization: `token ${this.authToken}`,
          },
        })
        .then((result) => {
          this.user = result
        })
        .catch((error) => {
          this.errors.push(error)
        })
    },
  },
}
</script>
<style scoped>
.Button {
  @apply px-8 rounded-r-lg rounded-l-lg w-1/4 pb-2 pt-2 pl-4 pr-4 border-t border-b-4 border-r;
  background-color: var(--color-tertiary);
  color: var(--bg);
  width: auto;
  border-right-color: var(--color-tertiary);
  border-top-color: var(--color-tertiary);
  border-bottom-color: var(--color-tertiary);
}

.Button:hover {
  background-color: var(--color-secondary);
  border-right-color: var(--color-secondary);
  border-top-color: var(--color-secondary);
  border-bottom-color: var(--color-secondary);
}
</style>
