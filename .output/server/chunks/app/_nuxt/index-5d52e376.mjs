import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import { useSSRContext, defineComponent, ref, watch, mergeProps, withCtx, createVNode, createTextVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, createCommentVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot, ssrInterpolate, ssrRenderComponent, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import 'vue-bundle-renderer/runtime';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

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
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/scrollAnimate.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/buttomWithGoto.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-24bfa8e2"]]);
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
const _imports_0 = "" + buildAssetsURL("lead.6afb77a6.png");
const _imports_1 = "" + buildAssetsURL("donate.4dc5cbb2.png");
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
        title: "\u53C3\u8207\u53F0\u5317\u5BF5\u7269\u8AD6\u58C7\uFF0C\u722D\u53D6\u8C93\u54AA\u53CB\u5584\u74B0\u5883",
        time: "2023/12/26",
        desc: "\u708E\u708E\u590F\u65E5\u7684\u5468\u516D\uFF0C\u6211\u8D70\u9032\u4E86\u53F0\u5317\u5BF5\u7269\u8AD6\u58C7\uFF0C\u5E36\u8457\u4E00\u526F\u8C93\u8033\u9AEE\u7B8D\uFF0C\u6C7A\u5B9A\u8981\u5168\u529B\u5BA3\u50B3\u300C\u8C93\u54AA\u81F3\u4E0A\u300D\u7684\u7406\u5FF5\uFF01\u6211\u76F8\u4FE1\uFF0C\u6211\u5011\u7684\u90FD\u5E02\u4E2D\uFF0C\u6BCF\u4E00\u96BB\u8C93\u54AA\u90FD\u61C9\u8A72\u6709\u81EA\u5DF1\u7684 VIP \u4F11\u61A9\u7A7A\u9593\u3002",
        image: "/_nuxt/assets/images/news1.png"
      },
      {
        title: "\u6383\u8857\u6A21\u5F0F\u958B\u555F\uFF01\u5E36\u8457\u4F60\u7684\u8C93\u8033\uFF0C\u4F86\u548C\u6211\u4E00\u8D77\u8D70\uFF01",
        time: "2023/12/24",
        desc: "\u8857\u4E0A\u6C23\u6C1B\u771F\u7684\u5F88\u68D2\uFF0C\u5F9E\u5C0F\u5B69\u5230\u5927\u4EBA\uFF0C\u751A\u81F3\u6709\u4E9B\u72D7\u72D7\u670B\u53CB\u90FD\u5E36\u8457\u8C93\u8033\u4F86\u627E\u6211\u63E1\u624B\uFF0C\u771F\u7684\u592A\u53EF\u611B\u4E86\uFF01",
        image: "/_nuxt/assets/images/news2.png"
      },
      {
        title: "\u6536\u5BB9\u6240\u6A21\u7279\u5152\u5927\u6BD4\u62FC\uFF01",
        time: "2023/12/20",
        desc: "\u4ECA\u5929\u7684\u6536\u5BB9\u6240\u4E0D\u518D\u662F\u4E00\u7247\u5BC2\u975C\u3002\u70BA\u4E86\u8B93\u66F4\u591A\u4EBA\u8A8D\u8B58\u5230\u9019\u88E1\u7684\u6BDB\u5B69\u5B50\uFF0C\u6211\u5011\u8209\u8FA6\u4E86\u4E00\u5834\u524D\u6240\u672A\u6709\u7684\u300C\u6A21\u7279\u5152\u8D70\u79C0\u300D\uFF01",
        image: "/_nuxt/assets/images/news3.png"
      },
      {
        title: "\u53C3\u8207\u53F0\u5317\u5BF5\u7269\u8AD6\u58C7\uFF0C\u722D\u53D6\u8C93\u54AA\u53CB\u5584\u74B0\u5883",
        time: "2023/12/26",
        desc: "\u708E\u708E\u590F\u65E5\u7684\u5468\u516D\uFF0C\u6211\u8D70\u9032\u4E86\u53F0\u5317\u5BF5\u7269\u8AD6\u58C7\uFF0C\u5E36\u8457\u4E00\u526F\u8C93\u8033\u9AEE\u7B8D\uFF0C\u6C7A\u5B9A\u8981\u5168\u529B\u5BA3\u50B3\u300C\u8C93\u54AA\u81F3\u4E0A\u300D\u7684\u7406\u5FF5\uFF01",
        image: "/_nuxt/assets/images/news1.png"
      }
    ]);
    const issueList = ref([
      {
        title: "\u53C3\u8207\u53F0\u5317\u5BF5\u7269\u8AD6\u58C7\uFF0C\u722D\u53D6\u8C93\u54AA\u53CB\u5584\u74B0\u5883",
        image: "/_nuxt/assets/images/issue1.png"
      },
      {
        title: "\u6253\u9020\u4F11\u9592\u5929\u5802\uFF01\u63A8\u5EE3\u5BF5\u7269\u4F11\u9592\u8207\u5A1B\u6A02\u5834\u6240",
        image: "/_nuxt/assets/images/issue2.png"
      },
      {
        title: "\u63A8\u5EE3\u5BF5\u7269\u98FC\u990A\u6559\u80B2\uFF0C\u8B93\u611B\u66F4\u52A0\u5C08\u696D",
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
            _push2(`<h1 class="slogan" data-v-c4465bc4${_scopeId}>\u53F0\u7063\u7684\u660E\u5929 \u55B5\u5148\u92EA\u8DEF</h1>`);
          } else {
            return [
              createVNode("h1", { class: "slogan" }, "\u53F0\u7063\u7684\u660E\u5929 \u55B5\u5148\u92EA\u8DEF")
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
            _push2(`<section class="info" data-v-c4465bc4${_scopeId}><button data-v-c4465bc4${_scopeId}>2024 \u7ACB\u59D4\u53C3\u9078\u4EBA</button><div class="name has-bg" data-v-c4465bc4${_scopeId}><span data-v-c4465bc4${_scopeId}>3</span><h1 data-v-c4465bc4${_scopeId}>\u55B5\u7ACB\u7FF0 Miao Li-Han</h1></div></section>`);
          } else {
            return [
              createVNode("section", { class: "info" }, [
                createVNode("button", null, "2024 \u7ACB\u59D4\u53C3\u9078\u4EBA"),
                createVNode("div", { class: "name has-bg" }, [
                  createVNode("span", null, "3"),
                  createVNode("h1", null, "\u55B5\u7ACB\u7FF0 Miao Li-Han")
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
            _push2(`<div class="lead-image" data-v-c4465bc4${_scopeId}><img${ssrRenderAttr("src", _imports_0)} alt="\u55B5\u7ACB\u7FF0 Miao Li-Han \u982D\u50CF" data-v-c4465bc4${_scopeId}></div>`);
          } else {
            return [
              createVNode("div", { class: "lead-image" }, [
                createVNode("img", {
                  src: _imports_0,
                  alt: "\u55B5\u7ACB\u7FF0 Miao Li-Han \u982D\u50CF"
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
            _push2(`<span data-v-c4465bc4${_scopeId}> \u70BA\u55B5\u661F\u4EBA\uFF0C\u8B77\u53F0\u7063\uFF01 \u5F9E\u55B5\u7684\u773C\u4E2D\uFF0C\u770B\u898B\u53F0\u7063 \u55B5\u7684\u672A\u4F86\uFF0C\u4EBA\u7684\u5E0C\u671B </span>`);
          } else {
            return [
              createVNode("span", null, " \u70BA\u55B5\u661F\u4EBA\uFF0C\u8B77\u53F0\u7063\uFF01 \u5F9E\u55B5\u7684\u773C\u4E2D\uFF0C\u770B\u898B\u53F0\u7063 \u55B5\u7684\u672A\u4F86\uFF0C\u4EBA\u7684\u5E0C\u671B ")
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
                  _push3(`<h2 class="page-title" data-v-c4465bc4${_scopeId2}>\u5019\u9078\u4EBA\u4E3B\u5F35</h2><h3 data-v-c4465bc4${_scopeId2}> \u6211\u5805\u4FE1 ! \u85C9\u7531\u63A8\u52D5\u66F4\u5B8C\u5584\u7684<span data-v-c4465bc4${_scopeId2}>\u8C93\u54AA\u798F\u5229</span>\u548C\u76F8\u95DC\u653F\u7B56\uFF0C\u66F4\u662F\u9593\u63A5\u5730\u6295\u8CC7\u65BC<span data-v-c4465bc4${_scopeId2}>\u53F0\u7063\u7684\u672A\u4F86</span>\u3002 </h3><p data-v-c4465bc4${_scopeId2}> \u7562\u7ADF\uFF0C\u6C11\u773E\u7684\u8EAB\u5FC3\u5065\u5EB7\u8207\u5DE5\u4F5C\u71B1\u60C5\u662F\u63A8\u52D5\u7D93\u6FDF\u7684\u6838\u5FC3\u52D5\u529B\u3002\u900F\u904E\u5B8C\u5584\u7684\u8C93\u54AA\u798F\u5229\u653F\u7B56\uFF0C\u70BA\u53F0\u7063\u7684 GDP \u7D93\u6FDF\u5E36\u4F86\u5DE8\u5927\u6548\u76CA\u3002 \u56E0\u6B64\uFF0C\u6211\u671F\u671B\u80FD\u5728\u7ACB\u6CD5\u9662\u5167\u63A8\u9032\u9019\u4E9B\u653F\u7B56\uFF0C\u78BA\u4FDD\u6BCF\u4E00\u96BB\u8C93\u54AA\u90FD\u80FD\u5F97\u5230\u4ED6\u5011\u61C9\u6709\u7684\u7167\u9867\uFF0C\u540C\u6642\u4E5F\u70BA\u53F0\u7063\u7684\u7D93\u6FDF\u767C\u5C55\u52A9\u4E00\u81C2\u4E4B\u529B\u3002\u8B93\u6211\u5011\u4E00\u540C\u8B77\u822A\u53F0\u7063\u7684\u5E78\u798F\u7D93\u6FDF\uFF0C\u5F9E\u7167\u9867\u6BCF\u4E00\u96BB\u8C93\u54AA\u958B\u59CB\u3002 </p>`);
                } else {
                  return [
                    createVNode("h2", { class: "page-title" }, "\u5019\u9078\u4EBA\u4E3B\u5F35"),
                    createVNode("h3", null, [
                      createTextVNode(" \u6211\u5805\u4FE1 ! \u85C9\u7531\u63A8\u52D5\u66F4\u5B8C\u5584\u7684"),
                      createVNode("span", null, "\u8C93\u54AA\u798F\u5229"),
                      createTextVNode("\u548C\u76F8\u95DC\u653F\u7B56\uFF0C\u66F4\u662F\u9593\u63A5\u5730\u6295\u8CC7\u65BC"),
                      createVNode("span", null, "\u53F0\u7063\u7684\u672A\u4F86"),
                      createTextVNode("\u3002 ")
                    ]),
                    createVNode("p", null, " \u7562\u7ADF\uFF0C\u6C11\u773E\u7684\u8EAB\u5FC3\u5065\u5EB7\u8207\u5DE5\u4F5C\u71B1\u60C5\u662F\u63A8\u52D5\u7D93\u6FDF\u7684\u6838\u5FC3\u52D5\u529B\u3002\u900F\u904E\u5B8C\u5584\u7684\u8C93\u54AA\u798F\u5229\u653F\u7B56\uFF0C\u70BA\u53F0\u7063\u7684 GDP \u7D93\u6FDF\u5E36\u4F86\u5DE8\u5927\u6548\u76CA\u3002 \u56E0\u6B64\uFF0C\u6211\u671F\u671B\u80FD\u5728\u7ACB\u6CD5\u9662\u5167\u63A8\u9032\u9019\u4E9B\u653F\u7B56\uFF0C\u78BA\u4FDD\u6BCF\u4E00\u96BB\u8C93\u54AA\u90FD\u80FD\u5F97\u5230\u4ED6\u5011\u61C9\u6709\u7684\u7167\u9867\uFF0C\u540C\u6642\u4E5F\u70BA\u53F0\u7063\u7684\u7D93\u6FDF\u767C\u5C55\u52A9\u4E00\u81C2\u4E4B\u529B\u3002\u8B93\u6211\u5011\u4E00\u540C\u8B77\u822A\u53F0\u7063\u7684\u5E78\u798F\u7D93\u6FDF\uFF0C\u5F9E\u7167\u9867\u6BCF\u4E00\u96BB\u8C93\u54AA\u958B\u59CB\u3002 ")
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
                  createVNode("h2", { class: "page-title" }, "\u5019\u9078\u4EBA\u4E3B\u5F35"),
                  createVNode("h3", null, [
                    createTextVNode(" \u6211\u5805\u4FE1 ! \u85C9\u7531\u63A8\u52D5\u66F4\u5B8C\u5584\u7684"),
                    createVNode("span", null, "\u8C93\u54AA\u798F\u5229"),
                    createTextVNode("\u548C\u76F8\u95DC\u653F\u7B56\uFF0C\u66F4\u662F\u9593\u63A5\u5730\u6295\u8CC7\u65BC"),
                    createVNode("span", null, "\u53F0\u7063\u7684\u672A\u4F86"),
                    createTextVNode("\u3002 ")
                  ]),
                  createVNode("p", null, " \u7562\u7ADF\uFF0C\u6C11\u773E\u7684\u8EAB\u5FC3\u5065\u5EB7\u8207\u5DE5\u4F5C\u71B1\u60C5\u662F\u63A8\u52D5\u7D93\u6FDF\u7684\u6838\u5FC3\u52D5\u529B\u3002\u900F\u904E\u5B8C\u5584\u7684\u8C93\u54AA\u798F\u5229\u653F\u7B56\uFF0C\u70BA\u53F0\u7063\u7684 GDP \u7D93\u6FDF\u5E36\u4F86\u5DE8\u5927\u6548\u76CA\u3002 \u56E0\u6B64\uFF0C\u6211\u671F\u671B\u80FD\u5728\u7ACB\u6CD5\u9662\u5167\u63A8\u9032\u9019\u4E9B\u653F\u7B56\uFF0C\u78BA\u4FDD\u6BCF\u4E00\u96BB\u8C93\u54AA\u90FD\u80FD\u5F97\u5230\u4ED6\u5011\u61C9\u6709\u7684\u7167\u9867\uFF0C\u540C\u6642\u4E5F\u70BA\u53F0\u7063\u7684\u7D93\u6FDF\u767C\u5C55\u52A9\u4E00\u81C2\u4E4B\u529B\u3002\u8B93\u6211\u5011\u4E00\u540C\u8B77\u822A\u53F0\u7063\u7684\u5E78\u798F\u7D93\u6FDF\uFF0C\u5F9E\u7167\u9867\u6BCF\u4E00\u96BB\u8C93\u54AA\u958B\u59CB\u3002 ")
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
            _push2(`<h2 class="page-title" data-v-c4465bc4${_scopeId}>\u6700\u65B0\u6D3B\u52D5</h2>`);
          } else {
            return [
              createVNode("h2", { class: "page-title" }, "\u6700\u65B0\u6D3B\u52D5")
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
              text: "\u67E5\u770B\u66F4\u591A"
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
                    text: "\u67E5\u770B\u66F4\u591A"
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
            _push2(`<h2 class="page-title" data-v-c4465bc4${_scopeId}>\u653F\u7B56\u8B70\u984C</h2>`);
          } else {
            return [
              createVNode("h2", { class: "page-title" }, "\u653F\u7B56\u8B70\u984C")
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
                  _push3(`<h3 data-v-c4465bc4${_scopeId2}>\u5C0F\u984D\u652F\u6301\u55B5\u55B5</h3><p data-v-c4465bc4${_scopeId2}>\u60A8\u7684\u5C0F\u7B46\u6350\u6B3E\uFF0C\u662F\u6BCF\u96BB\u6BDB\u5B69\u672A\u4F86\u7684\u5927\u5927\u52D5\u529B\uFF01</p><div class="d-flex flex-grow-1 align-items-end justify-content-between" data-v-c4465bc4${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_ButtomWithGoto, { text: "\u5C0F\u984D\u6350\u6B3E" }, null, _parent3, _scopeId2));
                  _push3(`<img${ssrRenderAttr("src", _imports_1)} alt="\u5C0F\u984D\u6350\u6B3E" data-v-c4465bc4${_scopeId2}></div>`);
                } else {
                  return [
                    createVNode("h3", null, "\u5C0F\u984D\u652F\u6301\u55B5\u55B5"),
                    createVNode("p", null, "\u60A8\u7684\u5C0F\u7B46\u6350\u6B3E\uFF0C\u662F\u6BCF\u96BB\u6BDB\u5B69\u672A\u4F86\u7684\u5927\u5927\u52D5\u529B\uFF01"),
                    createVNode("div", { class: "d-flex flex-grow-1 align-items-end justify-content-between" }, [
                      createVNode(_component_ButtomWithGoto, { text: "\u5C0F\u984D\u6350\u6B3E" }),
                      createVNode("img", {
                        src: _imports_1,
                        alt: "\u5C0F\u984D\u6350\u6B3E"
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
                  createVNode("h3", null, "\u5C0F\u984D\u652F\u6301\u55B5\u55B5"),
                  createVNode("p", null, "\u60A8\u7684\u5C0F\u7B46\u6350\u6B3E\uFF0C\u662F\u6BCF\u96BB\u6BDB\u5B69\u672A\u4F86\u7684\u5927\u5927\u52D5\u529B\uFF01"),
                  createVNode("div", { class: "d-flex flex-grow-1 align-items-end justify-content-between" }, [
                    createVNode(_component_ButtomWithGoto, { text: "\u5C0F\u984D\u6350\u6B3E" }),
                    createVNode("img", {
                      src: _imports_1,
                      alt: "\u5C0F\u984D\u6350\u6B3E"
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
                  _push3(`<h3 data-v-c4465bc4${_scopeId2}>\u6C11\u773E\u670D\u52D9\u4FE1\u7BB1</h3><p data-v-c4465bc4${_scopeId2}>\u89AA\u611B\u7684\u9109\u89AA\uFF0C\u6BCF\u4E00\u4F4D\u5E02\u6C11\u7684\u610F\u898B\u90FD\u662F\u6211\u5011\u793E\u5340\u524D\u9032\u7684\u539F\u52D5\u529B</p><div class="d-flex flex-grow-1 align-items-end" data-v-c4465bc4${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_ButtomWithGoto, { text: "\u586B\u5BEB\u8868\u55AE" }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("h3", null, "\u6C11\u773E\u670D\u52D9\u4FE1\u7BB1"),
                    createVNode("p", null, "\u89AA\u611B\u7684\u9109\u89AA\uFF0C\u6BCF\u4E00\u4F4D\u5E02\u6C11\u7684\u610F\u898B\u90FD\u662F\u6211\u5011\u793E\u5340\u524D\u9032\u7684\u539F\u52D5\u529B"),
                    createVNode("div", { class: "d-flex flex-grow-1 align-items-end" }, [
                      createVNode(_component_ButtomWithGoto, { text: "\u586B\u5BEB\u8868\u55AE" })
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
                  createVNode("h3", null, "\u6C11\u773E\u670D\u52D9\u4FE1\u7BB1"),
                  createVNode("p", null, "\u89AA\u611B\u7684\u9109\u89AA\uFF0C\u6BCF\u4E00\u4F4D\u5E02\u6C11\u7684\u610F\u898B\u90FD\u662F\u6211\u5011\u793E\u5340\u524D\u9032\u7684\u539F\u52D5\u529B"),
                  createVNode("div", { class: "d-flex flex-grow-1 align-items-end" }, [
                    createVNode(_component_ButtomWithGoto, { text: "\u586B\u5BEB\u8868\u55AE" })
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
            _push2(`<section class="page d-flex flex-column align-items-center bg-white" data-v-c4465bc4${_scopeId}><h2 class="mb-2" data-v-c4465bc4${_scopeId}>\u53F0\u7063\u7684\u660E\u5929 \u55B5\u5148\u92EA\u8DEF</h2><div class="name has-bg" data-v-c4465bc4${_scopeId}><span data-v-c4465bc4${_scopeId}>3</span><h1 data-v-c4465bc4${_scopeId}>\u55B5\u7ACB\u7FF0 Miao Li-Han</h1></div></section>`);
          } else {
            return [
              createVNode("section", { class: "page d-flex flex-column align-items-center bg-white" }, [
                createVNode("h2", { class: "mb-2" }, "\u53F0\u7063\u7684\u660E\u5929 \u55B5\u5148\u92EA\u8DEF"),
                createVNode("div", { class: "name has-bg" }, [
                  createVNode("span", null, "3"),
                  createVNode("h1", null, "\u55B5\u7ACB\u7FF0 Miao Li-Han")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<footer class="bg-light" data-v-c4465bc4><div class="row w-100" data-v-c4465bc4><div class="col-lg-6 col-12" data-v-c4465bc4><div class="name" data-v-c4465bc4><span data-v-c4465bc4>3</span><h1 data-v-c4465bc4>\u55B5\u7ACB\u7FF0 Miao Li-Han</h1></div><div class="d-flex social" data-v-c4465bc4><!--[-->`);
      ssrRenderList(__props.social, (list) => {
        _push(`<a${ssrRenderAttr("href", list.href)} data-v-c4465bc4><img${ssrRenderAttr("src", list.src)}${ssrRenderAttr("alt", list.alt)}${ssrRenderAttr("title", list.title)} data-v-c4465bc4></a>`);
      });
      _push(`<!--]--></div><span data-v-c4465bc4>\xA9 2023 \u55B5\u7ACB\u7FF0 Miao Li-Han \u7248\u6B0A\u6240\u6709</span></div><div class="col-lg-6 col-12" data-v-c4465bc4><h4 data-v-c4465bc4>\u7AF6\u9078\u7E3D\u90E8</h4><ul data-v-c4465bc4><li data-v-c4465bc4>\u8FA6\u516C\u5BA4\u5730\u5740\uFF1A\u55B5\u661F\u5340\uFF0C\u6BDB\u8338\u8338\u5927\u905388\u865F\uFF0C\u55B5\u55B5\u5927\u6A133\u6A13</li><li data-v-c4465bc4>\u96FB\u8A71\uFF1A(02) 888-5678</li><li data-v-c4465bc4>\u96FB\u5B50\u90F5\u4EF6\u5730\u5740\uFF1Ameowoffice@linmeow.tw</li></ul></div></div></footer></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c4465bc4"]]);

export { index as default };
//# sourceMappingURL=index-5d52e376.mjs.map
