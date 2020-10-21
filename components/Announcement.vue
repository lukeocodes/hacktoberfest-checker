<template>
  <a class="Announcement__Link" href="https://hacktoberfest.digitalocean.com">
    <span class="Link__Button">{{ $t('components.announcement.button') }}</span>
    <span class="Link__Text">{{ $t('components.announcement.text') }}</span>
  </a>
</template>

<style scoped>
.Announcement__Link {
  @apply block w-full py-4 px-10 text-sm font-bold;
  background-color: var(--color-lavender-rose);
  color: var(--color-downriver);
}

.dark-mode .Announcement__Link {
  background-color: var(--color-morning-glory);
}

.Announcement__Link:hover .Link__Text {
  @apply underline;
}

.Link__Button {
  display: none;
}

@screen md {
  .Link__Button {
    display: initial;
    @apply bg-white py-2 px-4 mr-4 rounded uppercase;
  }
}
</style>
