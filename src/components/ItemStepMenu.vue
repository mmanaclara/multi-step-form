<template>
  <div class="link--wrapper">
    <p class="step--number">{{ step }}</p>
    <div>
      <span class="step--subtitle">{{ subtitle }}</span>
      <h4 class="step--title">{{ title }}</h4>
    </div>
  </div>
</template>

<script setup>
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  step: Number,
  subtitle: String,
  title: String,
  link: String,
});
</script>

<style lang="scss">
.link--wrapper {
  display: flex;
  gap: 1rem;
  align-items: center;
}
</style>
