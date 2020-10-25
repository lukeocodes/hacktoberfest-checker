<template>
  <a href="https://github.com/lukeocodes/hacktoberfest-checker">
    <img alt="GitHub Repository" class="Github__Logo" />
  </a>
</template>

<style scoped>
.Github__Logo {
  content: url('~@/assets/images/github-light.svg');
}

.dark-mode .Github__Logo {
  content: url('~@/assets/images/github-dark.svg');
}

.Github__Logo:hover {
  transform: scale(1.05);
  transition: all;
}
</style>