<template>
  <teleport to="body">
    <Transition>
      <div v-if="!mounted||!animated" class="w-100 vh-100 bg-white z-3 position-fixed d-flex justify-content-center align-items-center">
        <img src="/images/loading.gif" alt="loading...">
      </div>
    </Transition>
  </teleport>
  <Navbar title="喵立翰 Miao Li-Han" :logo=logo :menu=menuList :social=socialList class="position-fixed z-3 top-0"></Navbar>
  <NuxtPage :social=socialList />
</template>

<script setup lang="ts">
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
  src: "/images/logo.svg",
  alt: "喵立翰 Miao Li-Han 競選Logo",
  title: "喵立翰 Miao Li-Han 競選Logo"
})
const menuList = ref([{
  title: "候選人主張",
  href: "#claim",
  active: false,
  image:"/images/claim.svg"
},
{
  title: "最新活動",
  href: "#news",
  active: false,
  image:"/images/news.svg"
}, {
  title: "政策議題",
  href: "#issue",
  active: false,
  image:"/images/issue.svg"
}, {
  title: "小額捐款",
  href: "#donate",
  active: false,
  image:"/images/donate.svg"
}, {
  title: "民眾服務信箱",
  href: "#mail",
  active: false,
  image:"/images/mail.svg"
}]);
const socialList = ref([{
  src: "/images/fb.svg",
  alt: "facebook",
  title: "facebook",
  href: "#"
}, {
  src: "/images/ig.svg",
  alt: "instagram",
  title: "instagram",
  href: "#"
}, {
  src: "/images/yt.svg",
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