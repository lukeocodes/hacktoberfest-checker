<template>
  <div>
    <!-- Hero start -->
    <div class="h-without-header w-full z-0">
      <div class="flex flex-col items-center text-center justify-end h-3/4">
        <div class="w-1/2">
          <h1 class="Title">Do they <strong>Hacktoberfest?</strong></h1>
          <p class="Subtitle">
            Check if a project takes part in
            <strong>Hacktoberfest?</strong> this year by looking up their
            repository URL.
          </p>
        </div>
        <div class="w-4/5 mt-4 mb-8">
          <div class="relative">
            <svg
              class="absolute top-0 mt-6 ml-6 w-8 h-8 text-gray-600"
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
            <div class="flex">
              <input
                class="Input"
                type="text"
                placeholder="e.g. https://github.com/digitalocean/hacktoberfest"
              />
              <button class="Button">Do they?</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Hero end -->
  </div>
</template>

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

.dark-mode .Button:hover {
  background-color: #ff73fa;
  border-right-color: #ff73fa;
  border-top-color: #ff73fa;
  border-bottom-color: #ff73fa;
}
</style>
