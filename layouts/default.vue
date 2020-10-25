<template>
  <div>
    <Announcement />
    <Before v-if="!$hacktoberfest.started()" />
    <Ended v-else-if="$hacktoberfest.ended()" />
    <template v-else>
      <Header />
      <Nuxt />
    </template>
    <Footer />
  </div>
</template>

<style>
.Splash-Image {
  @apply w-1/2;
  content: url('~@/assets/images/undraw_splash_light.svg') !important;
}

.dark-mode .Splash-Image {
  content: url('~@/assets/images/undraw_splash_dark.svg') !important;
}
</style>
