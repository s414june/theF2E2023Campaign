<template>
  <teleport to="body">
    <Transition>
      <div v-if="!mounted || !animated"
        class="w-100 vh-100 bg-white z-3 position-fixed d-flex justify-content-center align-items-center">
        <img src="_nuxt/assets/images/loading.gif" alt="loading...">
      </div>
    </Transition>
  </teleport>
  <Navbar title="喵立翰 Miao Li-Han" :logo=logo :menu=menuList
    :social=socialList class="position-fixed z-2 top-0"></Navbar>
  <NuxtPage :social=socialList :canAnimate="mounted && animated" />
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

const mounted = ref(false);
const animated = ref(false);
// const nuxtApp = useNuxtApp();
// nuxtApp.hook("page:start", () => {
//   loading.value = true;
// });
// nuxtApp.hook("page:finish", () => {
//   loading.value = false;
// });
onMounted(() => {
  mounted.value = true;
})
setTimeout(() => {
  animated.value = true;
}, 1500);

const logo = ref({
  src: "_nuxt/assets/images/logo.svg",
  alt: "喵立翰 Miao Li-Han 競選Logo",
  title: "喵立翰 Miao Li-Han 競選Logo"
})
const menuList = ref([{
  title: "候選人主張",
  href: "#claim",
  active: false,
  image: "_nuxt/assets/images/claim.svg"
},
{
  title: "最新活動",
  href: "#news",
  active: false,
  image: "_nuxt/assets/images/news.svg"
}, {
  title: "政策議題",
  href: "#issue",
  active: false,
  image: "_nuxt/assets/images/issue.svg"
}, {
  title: "小額捐款",
  href: "#donate-and-mail",
  active: false,
  image: "_nuxt/assets/images/donate.svg"
}, {
  title: "民眾服務信箱",
  href: "#donate-and-mail",
  active: false,
  image: "_nuxt/assets/images/mail.svg"
}]);
const socialList = ref([{
  src: "_nuxt/assets/images/fb.svg",
  alt: "facebook",
  title: "facebook",
  href: "#"
}, {
  src: "_nuxt/assets/images/ig.svg",
  alt: "instagram",
  title: "instagram",
  href: "#"
}, {
  src: "_nuxt/assets/images/yt.svg",
  alt: "youtube",
  title: "youtube",
  href: "#"
}]);
</script>
<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>