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
            <a
              href="#"
              class="inline-flex items-center px-4 py-2 font-bold text-gray-800 bg-gray-300 rounded hover:bg-gray-400"
              @click.prevent="resetForm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="w-4 h-4 mr-2 fill-current"
              >
                <path
                  fillRule="evenodd"
                  d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                  clipRule="evenodd"
                />
              </svg>
              Check another?
            </a>
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
            <a
              href="#"
              class="inline-flex items-center px-4 py-2 font-bold text-gray-800 bg-gray-300 rounded hover:bg-gray-400"
              @click.prevent="resetForm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="w-4 h-4 mr-2 fill-current"
              >
                <path
                  fillRule="evenodd"
                  d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                  clipRule="evenodd"
                />
              </svg>
              Check another?
            </a>
          </div>
          <div v-else-if="processing" class="Processing">
            <scale-loader
              :loading="processing"
              :color="loaderOpt.color"
              :height="loaderOpt.height"
              :width="loaderOpt.width"
            ></scale-loader>
          </div>
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
                v-model="url"
                class="Input"
                type="text"
                placeholder="e.g. https://github.com/digitalocean/hacktoberfest"
                :disabled="processing"
              />
              <button :disabled="processing" class="Button">Do they?</button>
            </form>
          </div>
          <div>
            <ul class="Previous">
              <template v-if="previous.length > 0">
                <Repository
                  v-for="(repo, index) in previous"
                  :key="index"
                  :repo="repo"
                  @remove="removePrevious"
                />
              </template>
              <li v-else>No previous repo checks found... yet!</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ScaleLoader from 'vue-spinner/src/ScaleLoader.vue'

export default {
  components: {
    ScaleLoader,
  },
  data() {
    return {
      url: null,
      processing: false,
      errors: [],
      result: null,
      previous: [],
      loaderOpt: {
        color: '#ff8ae2',
        height: '50px',
        width: '10px',
      },
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

  watch: {
    previous(previous) {
      localStorage.setItem('previousResults', JSON.stringify(previous))
    },
  },

  mounted() {
    if (localStorage.previousResults) {
      this.previous = JSON.parse(localStorage.getItem('previousResults')) || []
    }
  },

  methods: {
    resetForm() {
      this.url = null
      this.processing = false
      this.errors = []
      this.result = null
    },

    checkRepository() {
      this.processing = true
      this.$axios
        .$get(`/api/check-repository?url=${this.url}`)
        .then((result) => {
          this.url = null
          this.processing = false
          this.result = result
          this.previous.unshift(result)
        })
        .catch((error) => {
          this.errors.push(error)
        })
    },

    removePrevious(key) {
      this.previous = this.previous.filter((p, i) => i !== key)
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

.Previous {
  @apply mt-10 w-9/12 mx-auto;
}
</style>
