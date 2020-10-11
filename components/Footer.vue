<template>
  <footer>
    <a href="https://hacktoberfest.digitalocean.com" class="Footer__Sponsors">
      Hacktoberfest presented by
      <img alt="Hacktoberfest" class="Sponsors__Image" />
    </a>

    <div class="Footer__Details">
      <ul class="Details__Links">
        <li>
          <a href="https://hacktoberfest.digitalocean.com">
            Official Hacktoberfest Site
          </a>
        </li>
        <li class="Links__Social">
          <a href="https://twitter.com/hacktoberfest">
            <img alt="Twitter" class="Social__Image Social__Image--twitter" />
          </a>
          <a href="https://www.instagram.com/hacktoberfest/">
            <img
              alt="Instagram"
              class="Social__Image Social__Image--instagram"
            />
          </a>
          <a href="https://discord.gg/hacktoberfest">
            <img alt="Discord" class="Social__Image Social__Image--discord" />
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<style scoped>
footer {
  @apply flex leading-8 py-3 px-12 text-sm mt-64;
  background-color: var(--bg-secondary);
}

.Footer__Sponsors {
  @apply flex-grow align-middle;
}

.Sponsors__Image {
  @apply inline-block ml-2;
  content: url('~@/assets/images/do.svg') !important;
}

.dark-mode .Sponsors__Image {
  content: url('~@/assets/images/do-white.svg') !important;
}

.Footer__Details {
  @apply flex flex-grow-0;
}

.Details__Links {
  @apply flex;
}

.Details__Links li {
  @apply border-r px-4;
  border-right-color: 1px solid var(--color-tertiary);
}

.Details__Links li:last-child {
  @apply border-r-0 mr-0;
}

.Details__Links li:first-child {
  @apply ml-0;
}

.Links__Social {
  @apply flex align-middle;
}

.Social__Image {
  @apply w-4 inline-block mb-1 mr-2;
}

.Social__Image--twitter {
  content: url('~@/assets/images/twitter.svg') !important;
}

.Social__Image--instagram {
  content: url('~@/assets/images/instagram.svg') !important;
}

.Social__Image--discord {
  content: url('~@/assets/images/discord.svg') !important;
}

.dark-mode .Social__Image {
  filter: invert(1);
}
</style>
