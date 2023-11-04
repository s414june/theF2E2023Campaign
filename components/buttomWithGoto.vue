<template>
    <button>
        {{text}}
        <span class="material-symbols-outlined">
            arrow_forward
        </span>
    </button>
</template>
<style scoped lang="scss">
button {
    display: flex;
    padding: var(--spacer-16, 16px) var(--spacer-24, 24px);
    align-items: center;
    gap: var(--spacer-8, 8px);
    border-radius: 500px;
    border: 1px solid var(--default-white, #FFF);
    background: var(--gray-100, #FFF);
    color: var(--text-primary-700, #334155);
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;

    span.material-symbols-outlined {
        color: var(--text-primary-700, #334155);
        font-size: 32px;
        font-style: normal;
        font-weight: 326;
        line-height: normal;
    }
}
</style>
<script setup lang="ts">
defineProps({
    text:String
})
</script>