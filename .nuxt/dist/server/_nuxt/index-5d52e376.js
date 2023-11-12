import { defineComponent, ref, watch, mergeProps, useSSRContext, withCtx, createVNode, createTextVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, createCommentVNode } from "vue";
import { ssrRenderAttrs, ssrRenderSlot, ssrInterpolate, ssrRenderComponent, ssrRenderAttr, ssrRenderList } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "h3";
import "ufo";
import "destr";
import "defu";
import "klona";
import "devalue";
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "autoAnimate",
  __ssrInlineRender: true,
  props: {
    animateClass: String,
    animateStyle: String,
    canAnimate: Boolean
  },
  setup(__props) {
    const props = __props;
    const isAnimate = ref(false);
    const scrollAnimate = ref(null);
    watch(
      () => props.canAnimate,
      (canAnimate) => {
        if (canAnimate)
          isAnimate.value = true;
      },
      { immediate: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["auto-animate w-100 d-flex justify-content-center align-items-center", [{ "is-animate": isAnimate.value }, __props.animateClass ? __props.animateClass : ""]],
        style: __props.animateStyle,
        canAnimate: __props.canAnimate,
        ref_key: "scrollAnimate",
        ref: scrollAnimate
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const autoAnimate_vue_vue_type_style_index_0_lang = "";
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/autoAnimate.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "scrollAnimate",
  __ssrInlineRender: true,
  props: {
    animateClass: String
  },
  setup(__props) {
    const isAnimate = ref(false);
    const scrollAnimate = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["scroll-animate", [{ "is-animate": isAnimate.value }, __props.animateClass ? __props.animateClass : ""]],
        ref_key: "scrollAnimate",
        ref: scrollAnimate
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const scrollAnimate_vue_vue_type_style_index_0_lang = "";
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/scrollAnimate.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const cardWithImage_vue_vue_type_style_index_0_scoped_0941ffd4_lang = "";
const _sfc_main$3 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "card" }, _attrs))} data-v-0941ffd4><div class="row g-0" data-v-0941ffd4><div class="col-lg-8" data-v-0941ffd4><div class="card-body" data-v-0941ffd4>`);
  ssrRenderSlot(_ctx.$slots, "body", {}, null, _push, _parent);
  _push(`</div></div><div class="col-lg-4" data-v-0941ffd4>`);
  ssrRenderSlot(_ctx.$slots, "image", {}, null, _push, _parent);
  _push(`</div></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cardWithImage.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-0941ffd4"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "buttomWithGoto",
  __ssrInlineRender: true,
  props: {
    text: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(_attrs)} data-v-24bfa8e2>${ssrInterpolate(__props.text)} <span class="material-symbols-outlined" data-v-24bfa8e2> arrow_forward </span></button>`);
    };
  }
});
const buttomWithGoto_vue_vue_type_style_index_0_scoped_24bfa8e2_lang = "";
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/buttomWithGoto.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-24bfa8e2"]]);
const card_vue_vue_type_style_index_0_scoped_d031040e_lang = "";
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "card" }, _attrs))} data-v-d031040e><div class="card-body d-flex flex-column h-100" data-v-d031040e>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/card.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-d031040e"]]);
const _imports_0 = "" + __buildAssetsURL("lead.6afb77a6.png");
const _imports_1 = "" + __buildAssetsURL("donate.4dc5cbb2.png");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  props: {
    social: Array,
    canAnimate: Boolean
  },
  setup(__props) {
    const newsList = ref([
      {
        title: "參與台北寵物論壇，爭取貓咪友善環境",
        time: "2023/12/26",
        desc: "炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！我相信，我們的都市中，每一隻貓咪都應該有自己的 VIP 休憩空間。",
        image: "/_nuxt/assets/images/news1.png"
      },
      {
        title: "掃街模式開啟！帶著你的貓耳，來和我一起走！",
        time: "2023/12/24",
        desc: "街上氣氛真的很棒，從小孩到大人，甚至有些狗狗朋友都帶著貓耳來找我握手，真的太可愛了！",
        image: "/_nuxt/assets/images/news2.png"
      },
      {
        title: "收容所模特兒大比拼！",
        time: "2023/12/20",
        desc: "今天的收容所不再是一片寂靜。為了讓更多人認識到這裡的毛孩子，我們舉辦了一場前所未有的「模特兒走秀」！",
        image: "/_nuxt/assets/images/news3.png"
      },
      {
        title: "參與台北寵物論壇，爭取貓咪友善環境",
        time: "2023/12/26",
        desc: "炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！",
        image: "/_nuxt/assets/images/news1.png"
      }
    ]);
    const issueList = ref([
      {
        title: "參與台北寵物論壇，爭取貓咪友善環境",
        image: "/_nuxt/assets/images/issue1.png"
      },
      {
        title: "打造休閒天堂！推廣寵物休閒與娛樂場所",
        image: "/_nuxt/assets/images/issue2.png"
      },
      {
        title: "推廣寵物飼養教育，讓愛更加專業",
        image: "/_nuxt/assets/images/issue3.png"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AutoAnimate = _sfc_main$5;
      const _component_ScrollAnimate = _sfc_main$4;
      const _component_CardWithImage = __nuxt_component_2;
      const _component_ButtomWithGoto = __nuxt_component_3;
      const _component_Card = __nuxt_component_4;
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: "app",
        class: "mw-100"
      }, _attrs))} data-v-c4465bc4><main data-v-c4465bc4><div data-v-c4465bc4><section class="lead" data-v-c4465bc4>`);
      _push(ssrRenderComponent(_component_AutoAnimate, {
        animateStyle: "transition-delay: 0.5s",
        canAnimate: __props.canAnimate
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h1 class="slogan" data-v-c4465bc4${_scopeId}>台灣的明天 喵先鋪路</h1>`);
          } else {
            return [
              createVNode("h1", { class: "slogan" }, "台灣的明天 喵先鋪路")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_AutoAnimate, {
        animateStyle: "transition-delay: 1s",
        canAnimate: __props.canAnimate
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<section class="info" data-v-c4465bc4${_scopeId}><button data-v-c4465bc4${_scopeId}>2024 立委參選人</button><div class="name has-bg" data-v-c4465bc4${_scopeId}><span data-v-c4465bc4${_scopeId}>3</span><h1 data-v-c4465bc4${_scopeId}>喵立翰 Miao Li-Han</h1></div></section>`);
          } else {
            return [
              createVNode("section", { class: "info" }, [
                createVNode("button", null, "2024 立委參選人"),
                createVNode("div", { class: "name has-bg" }, [
                  createVNode("span", null, "3"),
                  createVNode("h1", null, "喵立翰 Miao Li-Han")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section>`);
      _push(ssrRenderComponent(_component_AutoAnimate, {
        animateStyle: "transition-delay: 1.5s",
        canAnimate: __props.canAnimate
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="lead-image" data-v-c4465bc4${_scopeId}><img${ssrRenderAttr("src", _imports_0)} alt="喵立翰 Miao Li-Han 頭像" data-v-c4465bc4${_scopeId}></div>`);
          } else {
            return [
              createVNode("div", { class: "lead-image" }, [
                createVNode("img", {
                  src: _imports_0,
                  alt: "喵立翰 Miao Li-Han 頭像"
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="marquee" data-v-c4465bc4>`);
      _push(ssrRenderComponent(_component_ScrollAnimate, { animateClass: "right-to-left" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span data-v-c4465bc4${_scopeId}> 為喵星人，護台灣！ 從喵的眼中，看見台灣 喵的未來，人的希望 </span>`);
          } else {
            return [
              createVNode("span", null, " 為喵星人，護台灣！ 從喵的眼中，看見台灣 喵的未來，人的希望 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></main><section class="page bg-light claim" id="claim" data-v-c4465bc4>`);
      _push(ssrRenderComponent(_component_ScrollAnimate, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_CardWithImage, null, {
              body: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h2 class="page-title" data-v-c4465bc4${_scopeId2}>候選人主張</h2><h3 data-v-c4465bc4${_scopeId2}> 我堅信 ! 藉由推動更完善的<span data-v-c4465bc4${_scopeId2}>貓咪福利</span>和相關政策，更是間接地投資於<span data-v-c4465bc4${_scopeId2}>台灣的未來</span>。 </h3><p data-v-c4465bc4${_scopeId2}> 畢竟，民眾的身心健康與工作熱情是推動經濟的核心動力。透過完善的貓咪福利政策，為台灣的 GDP 經濟帶來巨大效益。 因此，我期望能在立法院內推進這些政策，確保每一隻貓咪都能得到他們應有的照顧，同時也為台灣的經濟發展助一臂之力。讓我們一同護航台灣的幸福經濟，從照顧每一隻貓咪開始。 </p>`);
                } else {
                  return [
                    createVNode("h2", { class: "page-title" }, "候選人主張"),
                    createVNode("h3", null, [
                      createTextVNode(" 我堅信 ! 藉由推動更完善的"),
                      createVNode("span", null, "貓咪福利"),
                      createTextVNode("和相關政策，更是間接地投資於"),
                      createVNode("span", null, "台灣的未來"),
                      createTextVNode("。 ")
                    ]),
                    createVNode("p", null, " 畢竟，民眾的身心健康與工作熱情是推動經濟的核心動力。透過完善的貓咪福利政策，為台灣的 GDP 經濟帶來巨大效益。 因此，我期望能在立法院內推進這些政策，確保每一隻貓咪都能得到他們應有的照顧，同時也為台灣的經濟發展助一臂之力。讓我們一同護航台灣的幸福經濟，從照顧每一隻貓咪開始。 ")
                  ];
                }
              }),
              image: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="claim-image" data-v-c4465bc4${_scopeId2}></div>`);
                } else {
                  return [
                    createVNode("div", { class: "claim-image" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_CardWithImage, null, {
                body: withCtx(() => [
                  createVNode("h2", { class: "page-title" }, "候選人主張"),
                  createVNode("h3", null, [
                    createTextVNode(" 我堅信 ! 藉由推動更完善的"),
                    createVNode("span", null, "貓咪福利"),
                    createTextVNode("和相關政策，更是間接地投資於"),
                    createVNode("span", null, "台灣的未來"),
                    createTextVNode("。 ")
                  ]),
                  createVNode("p", null, " 畢竟，民眾的身心健康與工作熱情是推動經濟的核心動力。透過完善的貓咪福利政策，為台灣的 GDP 經濟帶來巨大效益。 因此，我期望能在立法院內推進這些政策，確保每一隻貓咪都能得到他們應有的照顧，同時也為台灣的經濟發展助一臂之力。讓我們一同護航台灣的幸福經濟，從照顧每一隻貓咪開始。 ")
                ]),
                image: withCtx(() => [
                  createVNode("div", { class: "claim-image" })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section><section class="page bg-white news" id="news" data-v-c4465bc4>`);
      _push(ssrRenderComponent(_component_ScrollAnimate, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="page-title" data-v-c4465bc4${_scopeId}>最新活動</h2>`);
          } else {
            return [
              createVNode("h2", { class: "page-title" }, "最新活動")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_ScrollAnimate, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="row" data-v-c4465bc4${_scopeId}><!--[-->`);
            ssrRenderList(newsList.value, (news, index2) => {
              _push2(`<!--[-->`);
              if (index2 === 0) {
                _push2(`<div class="col-12 col-lg-6 news-top" data-v-c4465bc4${_scopeId}><img${ssrRenderAttr("src", news.image)}${ssrRenderAttr("alt", news.title)} data-v-c4465bc4${_scopeId}><span class="time" data-v-c4465bc4${_scopeId}>${ssrInterpolate(news.time)}</span><h5 data-v-c4465bc4${_scopeId}>${ssrInterpolate(news.title)}</h5><p data-v-c4465bc4${_scopeId}>${ssrInterpolate(news.desc)}</p></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<!--]-->`);
            });
            _push2(`<!--]--><div class="col-12 col-lg-6 news-list" data-v-c4465bc4${_scopeId}><!--[-->`);
            ssrRenderList(newsList.value, (news, index2) => {
              _push2(`<!--[-->`);
              if (index2 > 0) {
                _push2(`<div class="row" data-v-c4465bc4${_scopeId}><div class="col-4" data-v-c4465bc4${_scopeId}><img${ssrRenderAttr("src", news.image)}${ssrRenderAttr("alt", news.title)} data-v-c4465bc4${_scopeId}></div><div class="col-8" data-v-c4465bc4${_scopeId}><span class="time" data-v-c4465bc4${_scopeId}>${ssrInterpolate(news.time)}</span><h6 data-v-c4465bc4${_scopeId}>${ssrInterpolate(news.title)}</h6><p data-v-c4465bc4${_scopeId}>${ssrInterpolate(news.desc)}</p></div></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<!--]-->`);
            });
            _push2(`<!--]-->`);
            _push2(ssrRenderComponent(_component_ButtomWithGoto, {
              class: "more-btn",
              text: "查看更多"
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "row" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(newsList.value, (news, index2) => {
                  return openBlock(), createBlock(Fragment, null, [
                    index2 === 0 ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "col-12 col-lg-6 news-top"
                    }, [
                      createVNode("img", {
                        src: news.image,
                        alt: news.title
                      }, null, 8, ["src", "alt"]),
                      createVNode("span", { class: "time" }, toDisplayString(news.time), 1),
                      createVNode("h5", null, toDisplayString(news.title), 1),
                      createVNode("p", null, toDisplayString(news.desc), 1)
                    ])) : createCommentVNode("", true)
                  ], 64);
                }), 256)),
                createVNode("div", { class: "col-12 col-lg-6 news-list" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(newsList.value, (news, index2) => {
                    return openBlock(), createBlock(Fragment, null, [
                      index2 > 0 ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "row"
                      }, [
                        createVNode("div", { class: "col-4" }, [
                          createVNode("img", {
                            src: news.image,
                            alt: news.title
                          }, null, 8, ["src", "alt"])
                        ]),
                        createVNode("div", { class: "col-8" }, [
                          createVNode("span", { class: "time" }, toDisplayString(news.time), 1),
                          createVNode("h6", null, toDisplayString(news.title), 1),
                          createVNode("p", null, toDisplayString(news.desc), 1)
                        ])
                      ])) : createCommentVNode("", true)
                    ], 64);
                  }), 256)),
                  createVNode(_component_ButtomWithGoto, {
                    class: "more-btn",
                    text: "查看更多"
                  })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section><section class="page bg-white issue" id="issue" data-v-c4465bc4>`);
      _push(ssrRenderComponent(_component_ScrollAnimate, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="page-title" data-v-c4465bc4${_scopeId}>政策議題</h2>`);
          } else {
            return [
              createVNode("h2", { class: "page-title" }, "政策議題")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_ScrollAnimate, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="row" data-v-c4465bc4${_scopeId}><!--[-->`);
            ssrRenderList(issueList.value, (issue) => {
              _push2(`<div class="col-lg-4 col-sm-6 issue-list d-flex flex-column justify-content-between" data-v-c4465bc4${_scopeId}><h4 data-v-c4465bc4${_scopeId}>${ssrInterpolate(issue.title)}</h4><img${ssrRenderAttr("src", issue.image)}${ssrRenderAttr("alt", issue.title)} data-v-c4465bc4${_scopeId}></div>`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "row" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(issueList.value, (issue) => {
                  return openBlock(), createBlock("div", { class: "col-lg-4 col-sm-6 issue-list d-flex flex-column justify-content-between" }, [
                    createVNode("h4", null, toDisplayString(issue.title), 1),
                    createVNode("img", {
                      src: issue.image,
                      alt: issue.title
                    }, null, 8, ["src", "alt"])
                  ]);
                }), 256))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section><section class="page bg-white donate-and-mail" id="donate-and-mail" data-v-c4465bc4><div class="d-flex" data-v-c4465bc4>`);
      _push(ssrRenderComponent(_component_ScrollAnimate, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Card, {
              class: "bg-primary donate",
              id: "donate"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h3 data-v-c4465bc4${_scopeId2}>小額支持喵喵</h3><p data-v-c4465bc4${_scopeId2}>您的小筆捐款，是每隻毛孩未來的大大動力！</p><div class="d-flex flex-grow-1 align-items-end justify-content-between" data-v-c4465bc4${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_ButtomWithGoto, { text: "小額捐款" }, null, _parent3, _scopeId2));
                  _push3(`<img${ssrRenderAttr("src", _imports_1)} alt="小額捐款" data-v-c4465bc4${_scopeId2}></div>`);
                } else {
                  return [
                    createVNode("h3", null, "小額支持喵喵"),
                    createVNode("p", null, "您的小筆捐款，是每隻毛孩未來的大大動力！"),
                    createVNode("div", { class: "d-flex flex-grow-1 align-items-end justify-content-between" }, [
                      createVNode(_component_ButtomWithGoto, { text: "小額捐款" }),
                      createVNode("img", {
                        src: _imports_1,
                        alt: "小額捐款"
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Card, {
                class: "bg-primary donate",
                id: "donate"
              }, {
                default: withCtx(() => [
                  createVNode("h3", null, "小額支持喵喵"),
                  createVNode("p", null, "您的小筆捐款，是每隻毛孩未來的大大動力！"),
                  createVNode("div", { class: "d-flex flex-grow-1 align-items-end justify-content-between" }, [
                    createVNode(_component_ButtomWithGoto, { text: "小額捐款" }),
                    createVNode("img", {
                      src: _imports_1,
                      alt: "小額捐款"
                    })
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_ScrollAnimate, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Card, {
              class: "bg-dark mail",
              id: "mail"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h3 data-v-c4465bc4${_scopeId2}>民眾服務信箱</h3><p data-v-c4465bc4${_scopeId2}>親愛的鄉親，每一位市民的意見都是我們社區前進的原動力</p><div class="d-flex flex-grow-1 align-items-end" data-v-c4465bc4${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_ButtomWithGoto, { text: "填寫表單" }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("h3", null, "民眾服務信箱"),
                    createVNode("p", null, "親愛的鄉親，每一位市民的意見都是我們社區前進的原動力"),
                    createVNode("div", { class: "d-flex flex-grow-1 align-items-end" }, [
                      createVNode(_component_ButtomWithGoto, { text: "填寫表單" })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Card, {
                class: "bg-dark mail",
                id: "mail"
              }, {
                default: withCtx(() => [
                  createVNode("h3", null, "民眾服務信箱"),
                  createVNode("p", null, "親愛的鄉親，每一位市民的意見都是我們社區前進的原動力"),
                  createVNode("div", { class: "d-flex flex-grow-1 align-items-end" }, [
                    createVNode(_component_ButtomWithGoto, { text: "填寫表單" })
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section>`);
      _push(ssrRenderComponent(_component_ScrollAnimate, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<section class="page d-flex flex-column align-items-center bg-white" data-v-c4465bc4${_scopeId}><h2 class="mb-2" data-v-c4465bc4${_scopeId}>台灣的明天 喵先鋪路</h2><div class="name has-bg" data-v-c4465bc4${_scopeId}><span data-v-c4465bc4${_scopeId}>3</span><h1 data-v-c4465bc4${_scopeId}>喵立翰 Miao Li-Han</h1></div></section>`);
          } else {
            return [
              createVNode("section", { class: "page d-flex flex-column align-items-center bg-white" }, [
                createVNode("h2", { class: "mb-2" }, "台灣的明天 喵先鋪路"),
                createVNode("div", { class: "name has-bg" }, [
                  createVNode("span", null, "3"),
                  createVNode("h1", null, "喵立翰 Miao Li-Han")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<footer class="bg-light" data-v-c4465bc4><div class="row w-100" data-v-c4465bc4><div class="col-lg-6 col-12" data-v-c4465bc4><div class="name" data-v-c4465bc4><span data-v-c4465bc4>3</span><h1 data-v-c4465bc4>喵立翰 Miao Li-Han</h1></div><div class="d-flex social" data-v-c4465bc4><!--[-->`);
      ssrRenderList(__props.social, (list) => {
        _push(`<a${ssrRenderAttr("href", list.href)} data-v-c4465bc4><img${ssrRenderAttr("src", list.src)}${ssrRenderAttr("alt", list.alt)}${ssrRenderAttr("title", list.title)} data-v-c4465bc4></a>`);
      });
      _push(`<!--]--></div><span data-v-c4465bc4>© 2023 喵立翰 Miao Li-Han 版權所有</span></div><div class="col-lg-6 col-12" data-v-c4465bc4><h4 data-v-c4465bc4>競選總部</h4><ul data-v-c4465bc4><li data-v-c4465bc4>辦公室地址：喵星區，毛茸茸大道88號，喵喵大樓3樓</li><li data-v-c4465bc4>電話：(02) 888-5678</li><li data-v-c4465bc4>電子郵件地址：meowoffice@linmeow.tw</li></ul></div></div></footer></div>`);
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_c4465bc4_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c4465bc4"]]);
export {
  index as default
};
//# sourceMappingURL=index-5d52e376.js.map
