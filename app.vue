<template>
  <teleport to="body">
    <div v-if="loading" class="w-100 vh-100 bg-white z-3 position-fixed"></div>
  </teleport>
  <Navbar title="喵立翰 Miao Li-Han" :logo=logo :menu=menuList :social=socialList></Navbar>
  <NuxtPage />
</template>

<script setup lang="ts">
const loading = ref(true);
// const nuxtApp = useNuxtApp();
// nuxtApp.hook("page:start", () => {
//   loading.value = true;
// });
// nuxtApp.hook("page:finish", () => {
//   loading.value = false;
// });
onMounted(()=>{
  loading.value=false;
})

const logo = ref({
  src: "/images/logo.svg",
  alt: "喵立翰 Miao Li-Han 競選Logo",
  title: "喵立翰 Miao Li-Han 競選Logo"
})
const menuList = ref([{
  title: "候選人主張",
  href: "#",
  active: false
},
{
  title: "最新活動",
  href: "#",
  active: false
}, {
  title: "政策議題",
  href: "#",
  active: false
}, {
  title: "小額捐款",
  href: "#",
  active: false
}, {
  title: "民眾服務信箱",
  href: "#",
  active: false
}]);
const socialList = ref([{
  src: "/images/fb.svg",
  alt: "facebook",
  title: "facebook",
  href: "#"
},{
  src: "/images/ig.svg",
  alt: "instagram",
  title: "instagram",
  href: "#"
},{
  src: "/images/yt.svg",
  alt: "youtube",
  title: "youtube",
  href: "#"
}]);
</script>