<template>
    <div class="card">
        <div class="card-body d-flex flex-column h-100">
            <slot></slot>
        </div>
    </div>
</template>
<style scoped lang="scss">
.card {
    flex-direction: row;
    display: flex;
    justify-content: center;
    align-items: center;
    // align-self: stretch;
    border-radius: var(--spacer-24, 24px);
    background: var(--default-white, #FFF);
    // overflow: hidden;
    border: none;
    .card-body {
        padding: var(--spacer-64, 64px) 40px;
    }
    @media (max-width: 576px) {
        height: 330px;
    }
}
</style>
