<template>
  <div>
    <div class="z-0 w-full h-without-header">
      <div class="flex flex-col items-center justify-end text-center h-3/4">
        <div class="w-1/2">
          <h1 class="Title">Do they <strong>Hacktoberfest?</strong></h1>
          <p class="Subtitle">
            Check if a project takes part in
            <strong>Hacktoberfest</strong> this year by looking up their
            repository URL.
          </p>
        </div>
        <div class="w-4/5 mt-4 mb-8">
          <div v-if="isErrors" class="Errors">
            <h3>
              Please correct the following error{{
                errors.length > 1 ? 's' : ''
              }}:
            </h3>
            <ul>
              <li v-for="(error, index) in errors" :key="index">
                {{ error.message ? error.message : error }}
              </li>
            </ul>
          </div>
          <div v-else-if="result">
            <h2
              class="Title"
              :class="{
                'Title--yes': theyHacktoberfest,
                'Title--no': !theyHacktoberfest,
              }"
            >
              {{ theyHacktoberfest ? 'Yes' : 'No' }}
            </h2>
          </div>
          <div v-else-if="processing" class="Processing">Processing...</div>
          <div v-else class="relative">
            <svg
              class="absolute top-0 w-8 h-8 mt-6 ml-6 text-gray-600"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <form class="flex" @submit.prevent="checkRepository()">
              <input
                class="Input"
                type="text"
                placeholder="e.g. https://github.com/digitalocean/hacktoberfest"
              />
              <button class="Button" type="submit">Do they?</button>
            </form>
          </div>
          <div>
            {{ previous }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    let previous = []

    if (process.browser) {
      previous =
        JSON.parse(window.localStorage.getItem('previousResults')) || []
    }

    return {
      processing: false,
      errors: [],
      result: null,
      previous,
    }
  },

  computed: {
    isErrors() {
      return this.errors.length !== 0
    },

    theyHacktoberfest() {
      return this.result.topic || this.result.tag_prs
    },
  },

  methods: {
    checkRepository() {
      this.processing = true
      this.$axios
        .$get('/api/check-repository')
        .then((result) => {
          this.processing = false
          this.result = result
          this.previous.push(result)
          this.savePreviousResults()
        })
        .catch((error) => {
          this.errors.push(error)
        })
    },

    savePreviousResults() {
      if (process.browser) {
        window.localStorage.setItem(
          'previousResults',
          JSON.stringify(this.previous)
        )
      }
    },
  },
}
</script>

<style scoped>
.Title {
  @apply text-6xl font-bold leading-none mb-4;
  color: #072540;
}

.Title strong {
  color: #9c4668;
}

.dark-mode .Title {
  color: #fff;
}

.dark-mode .Title strong {
  color: #ff8ae2;
}

.Subtitle {
  @apply text-2xl text-white leading-tight tracking-wide;
  color: #072540;
}

.Subtitle strong {
  color: #9c4668;
}

.dark-mode .Subtitle {
  color: #fff;
}

.dark-mode .Subtitle strong {
  color: #ff8ae2;
}

.Input {
  @apply bg-gray-100 text-3xl text-gray-800 pb-4 pt-5 pl-20 pr-4 rounded-l-lg w-full border-b-4 shadow-inner;
}

.Input:focus {
  @apply outline-none border-blue-800;
}

.Button {
  @apply px-8 rounded-r-lg w-1/4 text-3xl pb-4 pt-5 pl-4 pr-4 border-t border-b-4 border-r;
  background-color: #072540;
  color: white;
  border-right-color: #072540;
  border-top-color: #072540;
  border-bottom-color: #072540;
}

.Button:hover {
  background-color: #9c4668;
  border-right-color: #9c4668;
  border-top-color: #9c4668;
  border-bottom-color: #9c4668;
}

.dark-mode .Button {
  color: #072540;
  background-color: rgb(226, 232, 240);
  border-right-color: rgb(226, 232, 240);
  border-top-color: rgb(226, 232, 240);
  border-bottom-color: rgb(226, 232, 240);
}

.dark-mode .Button:hover {
  background-color: #ff73fa;
  border-right-color: #ff73fa;
  border-top-color: #ff73fa;
  border-bottom-color: #ff73fa;
}
</style>
