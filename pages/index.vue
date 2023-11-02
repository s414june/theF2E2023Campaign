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
    <div class="marquee">
        <div>
            <span>
                為喵星人，護台灣！ 從喵的眼中，看見台灣 喵的未來，人的希望
            </span>
        </div>
    </div>
    <section class="claim" id="claim">
        <div class="card mb-3">
            <div class="row g-0">
                <div class="col-md-8">
                    <div class="card-body">
                        <h2>候選人主張</h2>
                        <h3>我堅信 ! 藉由推動更完善的<span>貓咪福利</span>和相關政策，更是間接地投資於<span>台灣的未來</span>。</h3>
                        <p>
                            畢竟，民眾的身心健康與工作熱情是推動經濟的核心動力。透過完善的貓咪福利政策，為台灣的 GDP 經濟帶來巨大效益。
                            因此，我期望能在立法院內推進這些政策，確保每一隻貓咪都能得到他們應有的照顧，同時也為台灣的經濟發展助一臂之力。讓我們一同護航台灣的幸福經濟，從照顧每一隻貓咪開始。
                        </p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="claim-image"></div>
                </div>
            </div>
        </div>

    </section>
</template>
<style scoped lang="scss">
main {
    display: flex;
    padding: 0px calc(276px*100vw/1920px);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: var(--spacer-8, 8px);
    align-self: stretch;

    @media(max-width:720px) {
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

.lead-image {
    // position: absolute;
    bottom: 0;

    img {
        // width: 723px;
        width: calc(723px*100vw/1920px);
    }
}

.marquee {
    display: flex;
    padding: 10px;
    justify-content: center;
    align-items: center;
    gap: var(--spacer-24, 24px);
    align-self: stretch;
    background: var(--primary, #DA7D4A);
    overflow: hidden;

    div {
        width: -webkit-fill-available;

        span {
            color: var(--default-white, #FFF);
            font-feature-settings: 'clig' off, 'liga' off;
            font-family: Mantou Sans;
            font-size: 4rem;
            font-style: normal;
            font-weight: 400;
            line-height: 105%;
            /* 67.2px */
            letter-spacing: 2px;
            white-space: nowrap;
        }
    }
}

.claim {
    display: flex;
    padding: 104px calc(300px*100vw/1920px);
    flex-direction: column;
    align-items: center;
    align-self: stretch;
    background: var(--bg-2, #F7ECE1);

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

        h2 {
            font-family: Mantou Sans;
            font-size: 64px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            background: var(--Gradient, linear-gradient(90deg, #E5793B 1.54%, #FF4185 97.86%));
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        h3 {
            align-self: stretch;
            color: var(--text-primary-700, #334155);

            /* Bold/H3 Heading */
            font-family: Inter;
            font-size: 28px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;

            span {
                color: var(--primary, #DA7D4A);

                /* Bold/H3 Heading */
                font-family: Inter;
                font-size: 28px;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
            }

        }
        p {
            color: var(--text-primary-700, #334155);

            /* Body/Base text */
            font-family: Inter;
            font-size: 18px;
            font-style: normal;
            font-weight: 400;
            line-height: 150%;
            /* 27px */
        }

        .claim-image {
            background-image: url(/images/claim.png);
            height: 100%;
            align-self: stretch;
            background-size: cover;
            background-position: center;
            border-radius: 0 var(--spacer-24, 24px) var(--spacer-24, 24px) 0;
        }
    }
}
</style>
