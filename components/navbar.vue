<template>
    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
            <a class="navbar-brand d-flex align-items-center" href="#">
                <img class="logo" :src="logo?.src" :alt="logo?.alt" v-if="logo?.src" :title="logo?.title">
                <h4> {{ title }}</h4>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mb-2 mb-lg-0">
                    <li class="nav-item" v-for="list in menu">
                        <a class="nav-link" :class="{ active: list.active }" aria-current="page" :href="list.href">{{
                            list.title }}</a>
                    </li>
                </ul>
            </div>
            <div class="d-flex social">
                <a :href="list.href" v-for="list in social">
                    <img :src="list.src" :alt="list.alt" :title="list.title">
                </a>
            </div>
        </div>
    </nav>
</template>
<script setup lang="ts">
// const title = ref("喵立翰 Miao Li-Han")
interface Menu {
    href: string;
    title: string;
    active: boolean;
}
interface Social {
    src: string;
    alt: string;
    title: string;
    href: string;
}
defineProps({
    logo: Object,
    title: String,
    menu: Array<Menu>,
    social: Array<Social>
})
</script>
<style scoped lang="scss">
nav {
    display: flex;
    width: 100%;
    padding: var(--spacer-16, 16px) var(--spacer-24, 24px);
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
}

.container-fluid {
    display: flex;
    padding: var(--spacer-12, 12px) var(--spacer-24, 24px);
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    border-radius: var(--spacer-16, 16px);
    border: 1px solid var(--default-white, #FFF);
    background: rgba(255, 255, 255, 0.90);
    backdrop-filter: blur(12px);
}

.navbar-brand {
    gap: var(--spacer-8, 8px);

    h4 {
        color: var(--primary, #DA7D4A);
        text-align: center;

        /* Bold/H4 Heading */
        font-family: Inter;
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: 150%;
        /* 36px */
    }
}

.navbar-collapse {
    flex-grow: unset;

    ul {
        display: flex;
        align-items: flex-start;
        gap: var(--spacer-16, 16px);
    }

    li {
        color: var(--text-primary-700, #334155);
        text-align: center;

        /* Body/Base text */
        font-family: Inter;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
        /* 27px */
    }
}

.logo {
    width: 52.169px;
    height: 43px;
}

.social {
    display: flex;
    align-items: center;
    gap: var(--spacer-16, 16px);
}
</style>