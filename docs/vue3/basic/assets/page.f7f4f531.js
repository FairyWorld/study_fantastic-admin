
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as g}from"./index.a753595f.js";import{_ as b}from"./index.086e4e4f.js";import{A,D as V,F as d,a5 as h,r as _,b as N,G as j,g as t,f as i,H as p,Q as r}from"./vendor.42421442.js";import{c as E}from"./index.755d79d0.js";import{_ as C}from"./plugin-vue_export-helper.21dcd24c.js";const D={class:"block"},w={class:"block"},B={class:"block"},K=r("\u8FDB\u5165\u540C\u7EA7\u8DEF\u7531\u9875\u9762"),$=r("\u8FDB\u5165\u4E0B\u7EA7\u8DEF\u7531\u9875\u9762"),y=A({name:"KeepAliveExamplePage"}),I=Object.assign(y,{setup(O){const v=V(),l=E(),s=d(!1),u=d(1);function c(o){let e;switch(o){case 1:e="keepAliveExampleDetail";break;case 2:e="keepAliveExampleNestedDetail";break}v.push({name:e})}return h((o,e)=>{const n=e.matched[o.matched.length-1].components.default.name;s.value&&["keepAliveExampleDetail","keepAliveExampleNestedDetail"].includes(o.name)?l.add(n):l.remove(n)}),(o,e)=>{const n=b,f=_("el-switch"),x=_("el-input-number"),m=_("el-button"),k=g;return N(),j("div",null,[t(n,{title:"\u9875\u9762\u7F13\u5B58",content:"\u9664\u4E86\u53EF\u4EE5\u5728\u8DEF\u7531\u91CC\u914D\u7F6E\u9875\u9762\u662F\u5426\u9700\u8981\u7F13\u5B58\u5916\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u4E0D\u4F7F\u7528\u6846\u67B6\u63D0\u4F9B\u7684\u65B9\u6CD5\uFF0C\u800C\u662F\u5728\u9875\u9762\u91CC\u81EA\u884C\u5B9E\u73B0\uFF0C\u8BE5\u65B9\u6CD5\u76EE\u524D\u4EC5\u652F\u6301\u5728 Options API \u4E2D\u5B9E\u73B0\u3002"}),t(k,null,{default:i(()=>[p("div",D,[t(f,{modelValue:s.value,"onUpdate:modelValue":e[0]||(e[0]=a=>s.value=a),"active-text":"\u5F00\u542F\u7F13\u5B58","inactive-text":"\u5173\u95ED\u7F13\u5B58"},null,8,["modelValue"])]),p("div",w,[t(x,{modelValue:u.value,"onUpdate:modelValue":e[1]||(e[1]=a=>u.value=a)},null,8,["modelValue"])]),p("div",B,[t(m,{onClick:e[2]||(e[2]=a=>c(1))},{default:i(()=>[K]),_:1}),t(m,{onClick:e[3]||(e[3]=a=>c(2))},{default:i(()=>[$]),_:1})])]),_:1})])}}});var G=C(I,[["__scopeId","data-v-6fab745c"]]);export{G as default};
