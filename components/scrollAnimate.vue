<template>
  <Transition>
    <div
      class="scroll-animate w-100"
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
  transition: 0.8s;

  &.is-animate {
    opacity: 1;
    transition: 0.8s;
    &.right-to-left-infinite {
      animation: right-to-left-infinite 10s infinite;
      animation-timing-function: linear;
    }
    &.down-to-top {
      animation: down-to-top 0.8s;
    }
    &.left-to-right {
      animation: left-to-right 0.8s;
    }
    &.right-to-left {
      animation: right-to-left 0.8s;
    }
    &.big-to-small {
      animation: big-to-small 0.8s;
    }
  }
}

@keyframes right-to-left-infinite {
  0% {
    opacity: 0;
    transform: translateX(100%);
  }
  19% {
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  99% {
    opacity: 0;
    transform: translateX(calc(0px - 100%));
  }
  100% {
    opacity: 0;
  }
}
@keyframes down-to-top {
  0% {
    transform: translateY(calc(100 * var(--vh)));
  }
  100% {
    transform: translateY(0);
  }
}
@keyframes left-to-right {
  0% {
    transform: translateX(calc(0px - 100 * var(--vh)));
  }
  100% {
    transform: translateY(0);
  }
}
@keyframes right-to-left {
  0% {
    transform: translateX(calc(100 * var(--vh)));
  }
  100% {
    transform: translateY(0);
  }
}
@keyframes big-to-small {
  0% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
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
const handleScroll = function () {
  if (!scrollAnimate.value || isAnimate.value) return;
  let scrollPosition = scrollAnimate.value.offsetTop - window.innerHeight / 2;
  if (window.scrollY >= scrollPosition) {
    isAnimate.value = true;
    scrollAnimate.value.removeEventListener("scroll", handleScroll, true);
  }
};
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
</script>
