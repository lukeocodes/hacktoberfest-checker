<template>
  <div class="Header__Container">
    <div class="Header__Desktop">
      <div class="Desktop__Container">
        <div class="Desktop__Logo">
          <Logo />
        </div>
        <nav class="Desktop__Menu">
          <ul class="flex">
            <li class="mr-6">
              <NuxtLink to="/" class="Desktop__Link">Home</NuxtLink>
            </li>
            <li class="mr-6">
              <NuxtLink to="/details" class="Desktop__Link">Details</NuxtLink>
            </li>
            <li class="mr-6">
              <NuxtLink to="/checker" class="Desktop__Link"
                >Check a Repository</NuxtLink
              >
            </li>
            <li class="mr-6">
              <NuxtLink to="/profile" class="Desktop__Link">Profile</NuxtLink>
            </li>
            <li class="mr-6">
              <ColorPicker />
            </li>
          </ul>
        </nav>
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
</style>
