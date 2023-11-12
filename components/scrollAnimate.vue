<template>
  <Transition>
    <div
      class="scroll-animate"
      :class="[{ 'is-animate': isAnimate }, animateClass ? animateClass : '']"
      ref="scrollAnimate"
    >
      <slot></slot>
    </div>
  </Transition>
</template>
<style lang="scss">
.scroll-animate {
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
import { ref, onMounted } from "vue";
const props = defineProps({
  animateClass: String,
});
const isAnimate = ref(false);
const scrollAnimate = ref<HTMLElement | null>(null);
const handleScroll = function(){
  if (!scrollAnimate.value || isAnimate.value) return;
    let scrollPosition = scrollAnimate.value.offsetTop - window.innerHeight / 2;
    if (window.scrollY >= scrollPosition){
      isAnimate.value = true;
      scrollAnimate.value.removeEventListener("scroll", handleScroll, true);
    }
}
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

</script>
