<template>
  <div
    class="auto-animate w-100 d-flex justify-content-center align-items-center"
    :class="[{ 'is-animate': isAnimate }, animateClass ? animateClass : '']"
    :style="animateStyle"
    :canAnimate="canAnimate"
    ref="scrollAnimate"
  >
    <slot></slot>
  </div>
</template>
<style lang="scss">
.auto-animate {
  opacity: 0;
  transition: 0.5s;
  &.right-to-left {
    transform: translateX(100%);
  }

  &.is-animate {
    opacity: 1;
    transition: 0.5s;
    &.right-to-left {
      transform: translateX(0);
    }
  }
}
</style>
<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
const props = defineProps({
  animateClass: String,
  animateStyle: String,
  canAnimate: Boolean,
});
const isAnimate = ref(false);
const scrollAnimate = ref<HTMLElement | null>(null);
watch(
  () => props.canAnimate,
  (canAnimate) => {
    if (canAnimate) isAnimate.value = true;
  },
  { immediate: true }
);
</script>
