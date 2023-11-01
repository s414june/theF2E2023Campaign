import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../server.mjs";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "destr";
import "devalue";
import "defu";
import "klona";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "h3";
import "ufo";
const _imports_0 = "" + __publicAssetsURL("images/lead.png");
const index_vue_vue_type_style_index_0_scoped_2e2f80f1_lang = "";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<main${ssrRenderAttrs(_attrs)} data-v-2e2f80f1><section class="lead" data-v-2e2f80f1><h1 data-v-2e2f80f1>台灣的明天 喵先鋪路</h1><section class="info" data-v-2e2f80f1><button data-v-2e2f80f1>2024 立委參選人</button><div class="name" data-v-2e2f80f1><span data-v-2e2f80f1>3</span><h1 data-v-2e2f80f1>喵立翰 Miao LiHan</h1></div></section></section><div class="lead-image" data-v-2e2f80f1><img${ssrRenderAttr("src", _imports_0)} alt="喵立翰 Miao LiHan 頭像" data-v-2e2f80f1></div></main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-2e2f80f1"]]);
export {
  index as default
};
//# sourceMappingURL=index-9de3dea0.js.map
