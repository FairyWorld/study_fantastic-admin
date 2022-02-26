
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{n as y,m as $}from"./index.a1178b85.js";import{r as d,ac as N,K as U,h as r,q as t,w as o,u as _,j as B,l as c,o as m,y as v,O as h}from"./vendor.ee7254f0.js";var f={};const j=v("VueUse \u5B98\u7F51 useClipboard"),q={key:0},E=v("\u590D\u5236"),I={setup(K){const{proxy:V}=h(),s=d(""),u=d(""),{text:C,copy:g,copied:k,isSupported:b}=N();U(k,l=>{l&&V.$message.success(`\u590D\u5236\u6210\u529F\uFF1A${C.value}`)});function x(l){window.open(l,"top")}return(l,e)=>{const a=c("el-button"),w=y,p=c("el-input"),i=$;return m(),r("div",null,[t(w,{title:"\u526A\u8D34\u677F"},{default:o(()=>[t(a,{icon:"el-icon-link",onClick:e[0]||(e[0]=n=>x("https://vueuse.org/core/useClipboard/"))},{default:o(()=>[j]),_:1})]),_:1}),_(b)?(m(),r("div",q,[t(i,{title:"\u8F93\u5165\u5185\u5BB9\uFF0C\u5E76\u70B9\u51FB\u590D\u5236\u6309\u94AE"},{default:o(()=>[t(p,{modelValue:s.value,"onUpdate:modelValue":e[2]||(e[2]=n=>s.value=n)},{append:o(()=>[t(a,{onClick:e[1]||(e[1]=n=>_(g)(s.value))},{default:o(()=>[E]),_:1})]),_:1},8,["modelValue"])]),_:1}),t(i,{title:"\u590D\u5236\u6210\u529F\u540E\u53EF\u5728\u8FD9\u7C98\u8D34\u6D4B\u8BD5"},{default:o(()=>[t(p,{modelValue:u.value,"onUpdate:modelValue":e[3]||(e[3]=n=>u.value=n)},null,8,["modelValue"])]),_:1})])):B("v-if",!0)])}}};typeof f=="function"&&f(I);export{I as default};
