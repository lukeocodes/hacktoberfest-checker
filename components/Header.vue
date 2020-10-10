<template>
  <div class="Header__Container">
    <div class="Header__Desktop">
      <div class="Desktop__Container">
        <div class="Desktop__Logo">
          <Logo />
        </div>
        <nav class="Desktop__Menu">
          <a
            href="https://hacktoberfest.digitalocean.com"
            class="Desktop__Link"
          >
            Click for the Official Site
          </a>
          <ColorPicker />
        </nav>
      </div>
    </div>

    <div class="Header__Mobile">
      <div class="Mobile__Container">
        <div class="Mobile__Card">
          <div class="pt-5 pb-6 px-5 space-y-6">
            <div class="flex items-center justify-between">
              <div>
                <Logo />
              </div>
              <div class="-mr-2">
                <button type="button" class="Mobile__Button">
                  <svg
                    class="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div>
              <nav class="grid gap-y-8">
                <a
                  href="https://hacktoberfest.digitalocean.com"
                  class="Mobile__Link"
                >
                  <div class="Link__Text">Click for the Official Site</div>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.Header__Container {
  @apply relative;
}

.Header__Desktop {
  @apply mx-auto px-4;
}

.Header__Mobile {
  @apply absolute top-0 inset-x-0 p-2 transition transform origin-top-right;
}

.Desktop__Container {
  @apply flex justify-between items-center py-6;
}

.Desktop__Menu {
  @apply hidden uppercase;
}

.Desktop__Link {
  @apply text-base leading-6 font-medium transition ease-in-out duration-150;
}

.Desktop__Link:focus {
  @apply outline-none;
}

.Mobile__Container {
  @apply rounded-lg shadow-lg;
}

.Mobile__Card {
  @apply rounded-lg shadow-xs;
}

.Mobile__Button {
  @apply inline-flex items-center justify-center p-2 rounded-md transition duration-150 ease-in-out;
}

.Mobile__Button:hover {
}

.Mobile__Button:focus {
  @apply outline-none;
}

.Mobile__Link {
  @apply -m-3 p-3 flex items-center rounded-md transition ease-in-out duration-150;
}

.Mobile__Link:hover {
}

.Mobile__Link .Link__Text {
  @apply text-base leading-6 font-medium;
}

@screen sm {
  .Header__Desktop {
    @apply px-6;
  }
}

@screen md {
  .Header__Mobile {
    @apply hidden;
  }

  .Header__DesktopContainer {
    @apply justify-start;
  }

  .Desktop__Menu {
    @apply flex;
  }
}

@screen lg {
  .Desktop__Logo {
    @apply w-0 flex-1;
  }
}
</style>
