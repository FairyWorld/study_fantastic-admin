
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as $}from"./index.a91da01e.js";import{_ as w}from"./index.454d22a3.js";import{r,ak as y,x as N,l as _,F as t,A as o,k as d,q as U,D as m,o as c,$ as f,H as B}from"./vendor.d1c84aa2.js";import"./index.8f12b84b.js";const q=f("VueUse \u5B98\u7F51 useClipboard"),A={key:0},D=f("\u590D\u5236"),T={setup(E){const{proxy:v}=B(),s=r(""),a=r(""),{text:V,copy:C,copied:k,isSupported:g}=y();N(k,l=>{l&&v.$message.success(`\u590D\u5236\u6210\u529F\uFF1A${V.value}`)});function x(l){window.open(l,"top")}return(l,e)=>{const u=m("el-button"),b=w,p=m("el-input"),i=$;return c(),_("div",null,[t(b,{title:"\u526A\u8D34\u677F"},{default:o(()=>[t(u,{icon:"el-icon-link",onClick:e[0]||(e[0]=n=>x("https://vueuse.org/core/useClipboard/"))},{default:o(()=>[q]),_:1})]),_:1}),d(g)?(c(),_("div",A,[t(i,{title:"\u8F93\u5165\u5185\u5BB9\uFF0C\u5E76\u70B9\u51FB\u590D\u5236\u6309\u94AE"},{default:o(()=>[t(p,{modelValue:s.value,"onUpdate:modelValue":e[2]||(e[2]=n=>s.value=n)},{append:o(()=>[t(u,{onClick:e[1]||(e[1]=n=>d(C)(s.value))},{default:o(()=>[D]),_:1})]),_:1},8,["modelValue"])]),_:1}),t(i,{title:"\u590D\u5236\u6210\u529F\u540E\u53EF\u5728\u8FD9\u7C98\u8D34\u6D4B\u8BD5"},{default:o(()=>[t(p,{modelValue:a.value,"onUpdate:modelValue":e[3]||(e[3]=n=>a.value=n)},null,8,["modelValue"])]),_:1})])):U("v-if",!0)])}}};export{T as default};
