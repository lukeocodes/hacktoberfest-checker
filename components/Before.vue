<template>
  <div>
    <div class="Header__Container">
      <div class="Header__Desktop">
        <div class="Desktop__Container">
          <div class="Desktop__Logo">
            <Logo />
          </div>
          <nav class="Desktop__Menu">
            <ul class="flex">
              <li class="mr-6">
                <ColorPicker />
              </li>
              <li class="mr-6">
                <LangPicker />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
    <div class="z-0 w-full h-without-header">
      <div class="flex flex-col items-center justify-end text-center h-3/4">
        <div class="w-1/2">
          <h1 class="text-2xl Title md:text-4xl xl:text-6xl">
            <strong>Hacktoberfest</strong> 2020 Hasn't Started Yet
          </h1>
          <p class="Subtitle text-1xl md:text-2xl xl:text-3xl">
            Check back later.
          </p>
          <p class="mt-20">
            <center>
              <img
                class="Splash-Image"
                alt="Person sitting with laptop infront of commit tree - from undraw.io"
              />
            </center>
          </p>
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
  @apply flex uppercase;
}

.Desktop__Link {
  @apply text-base leading-6 font-medium transition ease-in-out duration-150;
}

.Desktop__Link.nuxt-link-exact-active {
  @apply border-b-2;
  border-color: var(--color-secondary);
}

.Desktop__Link:focus {
  @apply outline-none;
}

@screen sm {
  .Header__Desktop {
    @apply px-6;
  }
}

@screen md {
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

.Title {
  @apply font-bold leading-none mb-4;
  color: var(--color-tertiary);
}

.Title >>> strong {
  color: var(--color-secondary);
}

.Subtitle {
  @apply leading-tight tracking-wide;
  color: var(--color-tertiary);
}

.Subtitle >>> strong {
  color: var(--color-secondary);
}
</style>
