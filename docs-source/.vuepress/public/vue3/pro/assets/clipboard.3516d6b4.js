
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as $}from"./index.ac752417.js";import{_ as j}from"./index.cb82a5d1.js";import{r as d,ak as w,x as y,l as r,F as o,A as t,k as _,q as N,D as c,o as m,$ as f,H as U}from"./vendor.c6c27760.js";import"./index.1c697a52.js";const B=f("VueUse \u5B98\u7F51 useClipboard"),q={key:0},A=f("\u590D\u5236"),S={setup(D){const{proxy:v}=U(),l=d(""),a=d(""),{text:x,copy:V,copied:C,isSupported:k}=w();y(C,s=>{s&&v.$message.success(`\u590D\u5236\u6210\u529F\uFF1A${x.value}`)});function g(s){window.open(s,"top")}return(s,e)=>{const u=c("el-button"),b=j,p=c("el-input"),i=$;return m(),r("div",null,[o(b,{title:"\u526A\u8D34\u677F"},{default:t(()=>[o(u,{icon:"el-icon-link",onClick:e[0]||(e[0]=n=>g("https://vueuse.org/core/useClipboard/"))},{default:t(()=>[B]),_:1})]),_:1}),_(k)?(m(),r("div",q,[o(i,{title:"\u8F93\u5165\u5185\u5BB9\uFF0C\u5E76\u70B9\u51FB\u590D\u5236\u6309\u94AE"},{default:t(()=>[o(p,{modelValue:l.value,"onUpdate:modelValue":e[2]||(e[2]=n=>l.value=n)},{append:t(()=>[o(u,{onClick:e[1]||(e[1]=n=>_(V)(l.value))},{default:t(()=>[A]),_:1})]),_:1},8,["modelValue"])]),_:1}),o(i,{title:"\u590D\u5236\u6210\u529F\u540E\u53EF\u5728\u8FD9\u7C98\u8D34\u6D4B\u8BD5"},{default:t(()=>[o(p,{modelValue:a.value,"onUpdate:modelValue":e[3]||(e[3]=n=>a.value=n)},null,8,["modelValue"])]),_:1})])):N("v-if",!0)])}}};export{S as default};
