<template>
  <a
    class="Announcement__Link"
    href="https://hacktoberfest.digitalocean.com/hacktoberfest-update"
  >
    <span class="Link__Button">Updated</span>
    <span class="Link__Text"
      >Hacktoberfest is now officially opt-in only for projects and
      maintainers.</span
    >
  </a>
</template>

<style scoped>
.Announcement__Link {
  @apply block w-full py-4 pl-16 text-sm font-bold;
  background-color: var(--bg-contrast);
  color: var(--color-contrast);
}

.Link__Button {
  @apply bg-white py-2 px-4 mr-4 rounded uppercase;
  color: var(--color-contrast);
}

.Announcement__Link:hover .Link__Text {
  @apply underline;
}
</style>
