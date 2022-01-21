
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as $}from"./index.13c1af28.js";import{_ as j}from"./index.a1ea47af.js";import{r as d,ak as w,z as y,B as r,l as _,F as o,D as t,k as c,q as B,o as m,$ as f,H as N}from"./vendor.e498156c.js";import"./index.85d61d52.js";const U=f("VueUse \u5B98\u7F51 useClipboard"),q={key:0},z=f("\u590D\u5236"),S={setup(D){const{proxy:v}=N(),a=d(""),l=d(""),{text:V,copy:x,copied:C,isSupported:k}=w();y(C,s=>{s&&v.$message.success(`\u590D\u5236\u6210\u529F\uFF1A${V.value}`)});function g(s){window.open(s,"top")}return(s,e)=>{const u=r("el-button"),b=j,p=r("el-input"),i=$;return m(),_("div",null,[o(b,{title:"\u526A\u8D34\u677F"},{default:t(()=>[o(u,{icon:"el-icon-link",onClick:e[0]||(e[0]=n=>g("https://vueuse.org/core/useClipboard/"))},{default:t(()=>[U]),_:1})]),_:1}),c(k)?(m(),_("div",q,[o(i,{title:"\u8F93\u5165\u5185\u5BB9\uFF0C\u5E76\u70B9\u51FB\u590D\u5236\u6309\u94AE"},{default:t(()=>[o(p,{modelValue:a.value,"onUpdate:modelValue":e[2]||(e[2]=n=>a.value=n)},{append:t(()=>[o(u,{onClick:e[1]||(e[1]=n=>c(x)(a.value))},{default:t(()=>[z]),_:1})]),_:1},8,["modelValue"])]),_:1}),o(i,{title:"\u590D\u5236\u6210\u529F\u540E\u53EF\u5728\u8FD9\u7C98\u8D34\u6D4B\u8BD5"},{default:t(()=>[o(p,{modelValue:l.value,"onUpdate:modelValue":e[3]||(e[3]=n=>l.value=n)},null,8,["modelValue"])]),_:1})])):B("v-if",!0)])}}};export{S as default};
