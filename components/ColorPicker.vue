<template>
  <div class="ColorPicker__Toggle">
    <label for="dark" class="Toggle__Label">{{
      $t('components.color_picker.label')
    }}</label>
    <div class="Toggle__Container">
      <input
        id="dark"
        type="checkbox"
        name="dark"
        class="Toggle__Input"
        :checked="$colorMode.value === 'dark'"
        @change="darkMode($event)"
      />
      <label for="dark" class="Toggle__Highlight"></label>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    darkMode(e) {
      this.$colorMode.preference = e.target.checked ? 'dark' : 'light'
    },
  },
}
</script>

<style scoped>
.ColorPicker__Toggle {
  @apply ml-6;
}

.Toggle__Label {
}

.Toggle__Container {
  @apply relative inline-block w-10 ml-2 align-bottom select-none transition duration-200 ease-in;
}

.Toggle__Input {
  @apply absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer;
}

.Toggle__Input:checked {
  @apply right-0 border-green-400;
  right: 0;
  border-color: #68d391;
}

.Toggle__Highlight {
  @apply block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer;
}

.Toggle__Input:checked + .Toggle__Highlight {
  @apply bg-green-400;
  background-color: #68d391;
}
</style>
