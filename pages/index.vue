<template>
  <div id="app" class="mw-100">
    <main>
      <div>
        <section class="lead">
          <AutoAnimate
            animateStyle="transition-delay: 0.5s"
            :canAnimate="canAnimate"
          >
            <h1 class="slogan">台灣的明天 喵先鋪路</h1>
          </AutoAnimate>
          <AutoAnimate
            animateStyle="transition-delay: 1s"
            :canAnimate="canAnimate"
          >
            <section class="info">
              <button>2024 立委參選人</button>
              <div class="name has-bg">
                <span>3</span>
                <h1>喵立翰 Miao Li-Han</h1>
              </div>
            </section>
          </AutoAnimate>
        </section>
        <div class="lead-image">
          <AutoAnimate
            animateStyle="transition-delay: 1.5s"
            :canAnimate="canAnimate"
          >
            <img src="/images/lead.png" alt="喵立翰 Miao Li-Han 頭像" />
          </AutoAnimate>
        </div>
      </div>
      <div class="marquee">
        <ScrollAnimate animateClass="right-to-left-infinite">
          為喵星人，護台灣！ 從喵的眼中，看見台灣 喵的未來，人的希望
        </ScrollAnimate>
      </div>
    </main>
    <section class="page bg-light claim" id="claim">
      <ScrollAnimate animateClass="down-to-top">
        <CardWithImage>
          <template v-slot:body>
            <h2 class="page-title">候選人主張</h2>
            <h3>
              我堅信 !
              藉由推動更完善的<span>貓咪福利</span>和相關政策，更是間接地投資於<span>台灣的未來</span>。
            </h3>
            <p>
              畢竟，民眾的身心健康與工作熱情是推動經濟的核心動力。透過完善的貓咪福利政策，為台灣的
              GDP 經濟帶來巨大效益。
              因此，我期望能在立法院內推進這些政策，確保每一隻貓咪都能得到他們應有的照顧，同時也為台灣的經濟發展助一臂之力。讓我們一同護航台灣的幸福經濟，從照顧每一隻貓咪開始。
            </p>
          </template>
          <template v-slot:image>
            <div class="claim-image"></div>
          </template>
        </CardWithImage>
      </ScrollAnimate>
    </section>
    <section class="page bg-white news" id="news">
      <ScrollAnimate>
        <h2 class="page-title">最新活動</h2>
      </ScrollAnimate>
      <ScrollAnimate>
        <div class="row">
          <div
            class="col-12 col-lg-6 news-top"
            data-bs-toggle="modal"
            data-bs-target="#news"
          >
            <img :src="newsList[0].image" :alt="newsList[0].title" />
            <span class="time">{{ newsList[0].time }}</span>
            <h5>{{ newsList[0].title }}</h5>
            <p>{{ newsList[0].desc }}</p>
          </div>
          <Modal modalName="news">
            <div class="modal-header border-0">
              <h5 class="modal-title">最新活動</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body news">
              <div class="row">
                <div
                  class="col-12 col-lg-6 news-top"
                  data-bs-toggle="modal"
                  data-bs-target="#news"
                >
                  <img :src="newsList[0].image" :alt="newsList[0].title" />
                  <p>{{ newsList[0].title }}</p>
                </div>
                <div class="col-12 col-lg-6 news-list">
                  <h5>{{ newsList[0].title }}</h5>
                  <span class="time">{{ newsList[0].time }}</span>
                  <p>{{ newsList[0].desc }}</p>
                  <template v-for="(news, index) in newsList">
                    <div class="row" v-if="index > 0">
                      <div class="col-4">
                        <img :src="news.image" :alt="news.title" />
                      </div>
                      <div class="col-8">
                        <span class="time">{{ news.time }}</span>
                        <h6>{{ news.title }}</h6>
                        <p>{{ news.desc }}</p>
                      </div>
                    </div>
                  </template>
                </div>
              </div>
            </div>
          </Modal>
          <div class="col-12 col-lg-6 news-list">
            <template v-for="(news, index) in newsList">
              <div class="row" v-if="index > 0">
                <div class="col-4">
                  <img :src="news.image" :alt="news.title" />
                </div>
                <div class="col-8">
                  <span class="time">{{ news.time }}</span>
                  <h6>{{ news.title }}</h6>
                  <p>{{ news.desc }}</p>
                </div>
              </div>
            </template>
            <ButtomWithGoto class="more-btn" text="查看更多"></ButtomWithGoto>
          </div>
        </div>
      </ScrollAnimate>
    </section>
    <section class="page bg-white issue w-100 position-relative" id="issue">
      <ScrollAnimate animateClass="left-to-right">
        <h2 class="page-title">政策議題</h2>
      </ScrollAnimate>
      <ScrollAnimate>
        <div class="row w-100">
          <div
            class="col-lg-4 col-sm-6 issue-list d-flex flex-column justify-content-between"
            v-for="issue in issueList"
          >
            <h4>{{ issue.title }}</h4>
            <img :src="issue.image" :alt="issue.title" />
          </div>
        </div>
      </ScrollAnimate>
    </section>
    <section class="page bg-white donate-and-mail" id="donate-and-mail">
      <div class="d-flex">
        <ScrollAnimate animateClass="right-to-left">
          <Card class="bg-primary donate h-100" id="donate">
            <h3>小額支持喵喵</h3>
            <p>您的小筆捐款，是每隻毛孩未來的大大動力！</p>
            <div
              class="d-flex flex-grow-1 align-items-end justify-content-between"
            >
              <ButtomWithGoto text="小額捐款"></ButtomWithGoto>
              <img src="/images/donate.png" alt="小額捐款" />
            </div>
          </Card>
        </ScrollAnimate>
        <ScrollAnimate animateClass="right-to-left">
          <Card class="bg-dark mail h-100" id="mail">
            <h3>民眾服務信箱</h3>
            <p>親愛的鄉親，每一位市民的意見都是我們社區前進的原動力</p>
            <div class="d-flex flex-grow-1 align-items-end">
              <ButtomWithGoto text="填寫表單"></ButtomWithGoto>
            </div>
          </Card>
        </ScrollAnimate>
      </div>
    </section>
    <section class="page d-flex flex-column align-items-center bg-white">
      <ScrollAnimate animateClass="big-to-small">
        <div
          @mouseover="bigger = true"
          @mouseleave="bigger = false"
          @touchstart="bigger = true"
          @touchend="bigger = false"
          :class="{ bigger: bigger }"
          class="need-bigger"
        >
          <h2 class="mb-2">台灣的明天 喵先鋪路</h2>
          <div class="name has-bg">
            <span>3</span>
            <h1>喵立翰 Miao Li-Han</h1>
          </div>
        </div>
      </ScrollAnimate>
    </section>
    <footer class="bg-light">
      <div class="row w-100">
        <div class="col-lg-6 col-12 flex-column pb-5">
          <div class="name">
            <span>3</span>
            <h1>喵立翰 Miao Li-Han</h1>
          </div>
          <div class="d-flex social">
            <a :href="list.href" v-for="list in social">
              <img :src="list.src" :alt="list.alt" :title="list.title" />
            </a>
          </div>
          <span>© 2023 喵立翰 Miao Li-Han 版權所有</span>
        </div>
        <div class="col-lg-6 col-12 flex-column">
          <h4>競選總部</h4>
          <ul>
            <li>辦公室地址：喵星區，毛茸茸大道88號，喵喵大樓3樓</li>
            <li>電話：(02) 888-5678</li>
            <li>電子郵件地址：meowoffice@linmeow.tw</li>
          </ul>
        </div>
      </div>
    </footer>
  </div>
</template>
<style scoped lang="scss">
#app {
  margin-top: calc(var(--spacer-16, 16px) * 2 + 75px);

  @media (max-width: 992px) {
    margin-bottom: 63px;
  }

  @media (max-width: 576px) {
    margin-top: calc(14px + 72px);
  }
}

main {
  > div {
    padding: 0px calc(276px * 100vw / 1920px);
    gap: var(--spacer-8, 8px);
    background: var(--default-white, #fff);

    @media (max-width: 992px) {
      padding: 0px 36px;
    }
  }

  // @media(max-width:992px) {
  //     padding-top: 70px;
  // }
}

h1 {
  color: var(--primary, #da7d4a);

  /* Bold/H1 Heading */
  font-family: Inter;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  /* 60px */
  letter-spacing: -0.8px;

  &.slogan {
    font-feature-settings: "clig" off, "liga" off;
    font-family: Mantou Sans;
    // font-size: 96px;
    font-size: 7.4rem;
    font-style: normal;
    font-weight: 400;
    line-height: 105%;
    /* 100.8px */
    letter-spacing: 2px;
    background: var(
      --Gradient,
      linear-gradient(90deg, #e5793b 1.54%, #ff4185 97.86%)
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: center;
    word-break: keep-all;
  }
}

h2 {
  font-family: Mantou Sans;
  font-size: 64px;
  font-style: normal;
  font-weight: 400;
  background: var(
    --Gradient,
    linear-gradient(90deg, #e5793b 1.54%, #ff4185 97.86%)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  word-break: keep-all;
  text-align: center;
  line-height: 1;
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
    color: var(--primary, #da7d4a);

    /* Bold/H3 Heading */
    font-family: Inter;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
}

h4 {
  color: var(--text-primary-700, #334155);

  /* Bold/H4 Heading */
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  /* 36px */
}

h5 {
  color: var(--text-primary-700, #334155);

  /* Bold / H5 Heading */
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

h6 {
  color: var(--text-primary-700, #334155);

  /* Bold/H6 Heading */
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
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
      color: var(--default-white, #fff);

      /* Bold/H3 Heading */
      font-family: Inter;
      // font-size: 28px;
      font-size: 1.75rem;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }

    @media (max-width: 992px) {
      flex-direction: column;
    }
  }
}

.name {
  display: flex;
  padding: var(--spacer-12, 12px) var(--spacer-16, 16px);
  align-items: center;
  gap: var(--spacer-16, 16px);

  &.has-bg {
    border-radius: var(--spacer-16, 16px);
    border: 1px solid var(--default-white, #fff);
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 0px 4px 12px 0px rgba(163, 180, 203, 0.2);
  }

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
    background: var(
      --Gradient,
      linear-gradient(90deg, #e5793b 1.54%, #ff4185 97.86%)
    );
    color: var(--default-white, #fff);
    text-align: center;
    font-feature-settings: "clig" off, "liga" off;
    font-family: Inter;
    font-size: 2rem;
    font-style: normal;
    font-weight: 900;
    line-height: 150%;
    /* 48px */
  }

  h1 {
    color: var(--primary, #da7d4a);

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

.lead-image {
  // position: absolute;
  bottom: 0;

  img {
    // width: 723px;
    width: calc(723px * 100vw / 1920px);

    @media (max-width: 992px) {
      width: 90%;
    }
  }
}

.marquee {
  padding: 10px;
  background: var(--primary, #da7d4a);
  overflow: hidden;

  // @media (max-width:992px) {
  //     position: absolute;
  //     top: 0;
  // }

  div {
    width: max-content;
    color: var(--default-white, #fff);
    font-feature-settings: "clig" off, "liga" off;
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

.page {
  display: flex;
  padding: 104px calc(300px * 100vw / 1920px);
  flex-direction: column;
  align-items: center;
  align-self: stretch;

  > .row {
    margin-top: 64px;
  }

  @media (max-width: 992px) {
    padding: 95px 36px 25px 36px;

    &:last-of-type {
      padding-bottom: 60px;
    }
  }
}

.claim-image {
  background-image: url(/images/claim.png);
  height: 100%;
  align-self: stretch;
  background-size: cover;
  background-position: center;
  border-radius: 0 var(--spacer-24, 24px) var(--spacer-24, 24px) 0;
  min-height: 245px;

  @media (max-width: 992px) {
    border-radius: 0 0 var(--spacer-24, 24px) var(--spacer-24, 24px);
  }
}

.more-btn {
  background: var(--gray-100, #f1f5f9);
}

.news {
  p {
    color: var(--text-primary-700, #334155);

    /* Body/Body */
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    /* 24px */
  }

  img {
    width: 100%;
  }

  .time {
    color: var(--gray-500, #94a3b8);

    /* Body/Small */
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    /* 21px */
  }

  > .row {
    @media (max-width: 992px) {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: var(--spacer-24, 24px);
      align-self: stretch;
    }
  }

  .news-top {
    @media (max-width: 992px) {
      display: flex;
      padding-top: var(--spacer-16, 16px);
      flex-direction: column;
      align-items: flex-start;
      gap: var(--spacer-8, 8px);
      align-self: stretch;
    }

    img {
      border-radius: var(--spacer-16, 16px);
    }
  }

  .news-list {
    img {
      border-radius: 8px;
    }

    @media (max-width: 992px) {
      display: flex;
      flex-direction: column;
      gap: 24px;

      .more-btn {
        width: fit-content;
      }
    }
  }
}

.donate-and-mail {
  h3,
  p {
    color: #fff;
  }

  > .d-flex {
    gap: 24px;

    @media (max-width: 576px) {
      flex-direction: column;
    }
  }

  .donate {
    img {
      width: 50%;

      @media (max-width: 576px) {
        width: 102px;
      }
    }
  }
}

.issue {
  > .row {
    display: flex;
    align-items: flex-start;
    align-content: flex-start;
    gap: var(--spacer-64, 64px) 0;
    align-self: stretch;
    flex-wrap: wrap;
  }
}

.issue-list {
  h4 {
    padding: 0px var(--spacer-16, 16px) var(--spacer-16, 16px)
      var(--spacer-16, 16px);
  }

  img {
    border-radius: var(--spacer-24, 24px);
  }
}

footer {
  display: flex;
  padding: var(--spacer-64, 64px) calc(300px * 100vw / 1920px);
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;

  .row {
    // gap: var(--spacer-24, 24px);

    > div {
      display: flex;
      align-items: flex-start;
      gap: var(--spacer-16, 16px);
    }
  }

  .name {
    padding: 0;

    span {
      width: 32px;
      height: 32px;
      padding: 4.706px 10.824px;
      font-size: 20.48px;
    }

    h1 {
      font-size: 28px;
    }
  }

  .social {
    display: flex;
    align-items: center;
    gap: var(--spacer-8, 8px);

    a {
      display: flex;
      width: 48px;
      height: 48px;
      padding: 14px 10px;
      justify-content: center;
      align-items: center;
      border-radius: 500px;
      background: var(--default-white, #fff);
    }
  }

  span {
    color: var(--text-primary-700, #334155);

    /* Body/Small */
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    /* 21px */
  }

  li {
    list-style: none;
    color: var(--text-primary-700, #334155);

    /* Body/Body */
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    /* 24px */
  }
}
.need-bigger {
  transition: 0.8s;
  &.bigger {
    transition: 0.8s;
    transform: scale(1.5);
  }
}
</style>
<script setup lang="ts">
import { ref, onMounted } from "vue";
interface Social {
  src: string;
  alt: string;
  title: string;
  href: string;
}
defineProps({
  social: Array<Social>,
  canAnimate: Boolean,
});
const bigger = ref(false);
const newsList = ref([
  {
    title: "參與台北寵物論壇，爭取貓咪友善環境",
    time: "2023/12/26",
    desc: "炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！我相信，我們的都市中，每一隻貓咪都應該有自己的 VIP 休憩空間。",
    image: "/images/news1.png",
  },
  {
    title: "掃街模式開啟！帶著你的貓耳，來和我一起走！",
    time: "2023/12/24",
    desc: "街上氣氛真的很棒，從小孩到大人，甚至有些狗狗朋友都帶著貓耳來找我握手，真的太可愛了！",
    image: "/images/news2.png",
  },
  {
    title: "收容所模特兒大比拼！",
    time: "2023/12/20",
    desc: "今天的收容所不再是一片寂靜。為了讓更多人認識到這裡的毛孩子，我們舉辦了一場前所未有的「模特兒走秀」！",
    image: "/images/news3.png",
  },
  {
    title: "參與台北寵物論壇，爭取貓咪友善環境",
    time: "2023/12/26",
    desc: "炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！",
    image: "/images/news1.png",
  },
]);
const issueList = ref([
  {
    title: "參與台北寵物論壇，爭取貓咪友善環境",
    image: "/images/issue1.png",
  },
  {
    title: "打造休閒天堂！推廣寵物休閒與娛樂場所",
    image: "/images/issue2.png",
  },
  {
    title: "推廣寵物飼養教育，讓愛更加專業",
    image: "/images/issue3.png",
  },
]);
</script>
