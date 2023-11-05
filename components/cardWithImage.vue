<template>
    <div class="card">
        <div class="row g-0">
            <div class="col-lg-8">
                <div class="card-body">
                    <slot name="body"></slot>
                </div>
            </div>
            <div class="col-lg-4">
                <slot name="image"></slot>
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
.card {
    flex-direction: row;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: var(--spacer-32, 32px);
    flex: 1 0 0;
    // align-self: stretch;
    border-radius: var(--spacer-24, 24px);
    background: var(--default-white, #FFF);
    // overflow: hidden;

    .card-body {
        padding: var(--spacer-64, 64px) 40px;
    }
}
</style>
