<template>
    <main>
        <section class="lead">
            <h1>台灣的明天 喵先鋪路</h1>
            <section class="info">
                <button>2024 立委參選人</button>
                <div class="name">
                    <span>3</span>
                    <h1>喵立翰 Miao LiHan</h1>
                </div>
            </section>
        </section>
        <div class="lead-image">
            <img src="/images/lead.png" alt="喵立翰 Miao LiHan 頭像">
        </div>
    </main>
</template>
<style scoped lang="scss">
main {
    display: flex;
    padding: 0px calc(var(--spacer-8)*34);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: var(--spacer-8, 8px);
    align-self: stretch;
    @media(max-width:720px){
        padding: 0px 36px;
    }
}

h1 {
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: Mantou Sans;
    // font-size: 96px;
    font-size: 7.4rem;
    font-style: normal;
    font-weight: 400;
    line-height: 105%;
    /* 100.8px */
    letter-spacing: 2px;
    background: var(--Gradient, linear-gradient(90deg, #E5793B 1.54%, #FF4185 97.86%));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: center;
    @media(max-width:720px) {
        word-break: keep-all;
    }
}
.lead {
    display: flex;
    padding: var(--spacer-96, 96px) 0px var(--spacer-16, 16px) 0px;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--spacer-16, 16px);

    .info {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: var(--spacer-16, 16px);
        align-self: stretch;

        button {
            display: flex;
            padding: var(--spacer-12, 12px) var(--spacer-16, 16px);
            align-items: center;
            gap: var(--spacer-16, 16px);
            border-radius: var(--spacer-16, 16px);
            background: var(--text-primary-700, #334155);
            color: var(--default-white, #FFF);

            /* Bold/H3 Heading */
            font-family: Inter;
            // font-size: 28px;
            font-size: 1.75rem;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
        }
    }

    .name {
        display: flex;
        padding: var(--spacer-12, 12px) var(--spacer-16, 16px);
        align-items: center;
        gap: var(--spacer-16, 16px);

        span {
            display: flex;
            width: 4rem;
            height: 4rem;
            padding: 7.353px 16.912px;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 7.353px;
            border-radius: 367.647px;
            background: var(--Gradient, linear-gradient(90deg, #E5793B 1.54%, #FF4185 97.86%));
            color: var(--default-white, #FFF);
            text-align: center;
            font-feature-settings: 'clig' off, 'liga' off;
            font-family: Inter;
            font-size: 2rem;
            font-style: normal;
            font-weight: 900;
            line-height: 150%;
            /* 48px */
        }

        h1 {
            color: var(--primary, #DA7D4A);

            /* Bold/H1 Heading */
            font-family: Inter;
            // font-size: 40px;
            font-size: 2.5rem;
            font-style: normal;
            font-weight: 700;
            line-height: 150%;
            /* 60px */
            letter-spacing: -0.8px;
        }
    }
}
.lead-image{
    position: absolute;
    bottom: 0;
    img{
        // width: 723px;
        width: calc(var(--spacer-96)*8.5);
    }
}

</style>
