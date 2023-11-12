<template>
  <div
    class="scroll-animate"
    ref="scrollAnimate"
    :class="[{ 'is-animate': isAnimate }, animateType ? animateType : '']"
  >
    <slot></slot>
  </div>
</template>
<style lang="scss">
.scroll-animate {
  opacity: 0;
  transition: 0.5s;
  &.is-animate {
    opacity: 1;
    transition: 0.5s;
  }
}
</style>
<script setup lang="ts">
import { ref, onMounted } from "vue";
defineProps({
  animateType: String,
});
const isAnimate = ref(false);
const scrollAnimate = ref<HTMLElement | null>(null);
onMounted(() => {
  window.addEventListener("scroll", () => {
    if (!scrollAnimate.value) return;
    let scrollPosition = scrollAnimate.value.offsetTop - window.innerHeight / 2;
    if (window.scrollY >= scrollPosition) {
      isAnimate.value = true;
    }
  });
});
</script>
