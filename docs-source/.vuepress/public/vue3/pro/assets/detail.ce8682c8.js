
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as g}from"./index.5436b1e2.js";import{_ as b}from"./index.13c1af28.js";import{_ as x}from"./index.a1ea47af.js";import v from"./index.15f81e7a.js";import{_ as C,u as j}from"./index.85d61d52.js";import{j as $,B as s,l as h,F as e,D as t,o as k,$ as _,H as F}from"./vendor.e498156c.js";const y=_("\u8FD4 \u56DE"),B=_("\u63D0 \u4EA4"),E=_("\u53D6 \u6D88"),w=$({name:"PagesExampleFormModeDetail"}),M=Object.assign(w,{setup(S){const{proxy:o}=F(),l=j();function i(){o.$refs.form.submit(()=>{o.$eventBus.emit("get-data-list"),n()})}function c(){n()}function n(){l.tabbar.enable&&!l.tabbar.mergeTabs?o.$tabbar.close({name:"pagesExampleGeneralFormModeList"}):o.$router.push({name:"pagesExampleGeneralFormModeList"})}return(r,z)=>{const a=s("el-button"),m=x,d=s("el-col"),u=s("el-row"),p=b,f=g;return k(),h("div",null,[e(m,{title:r.$route.name=="pagesExampleGeneralFormModeCreate"?"\u65B0\u589E":"\u7F16\u8F91"},{default:t(()=>[e(a,{icon:"el-icon-arrow-left",size:"default",round:"",onClick:n},{default:t(()=>[y]),_:1})]),_:1},8,["title"]),e(p,null,{default:t(()=>[e(u,null,{default:t(()=>[e(d,{md:24,lg:16},{default:t(()=>[e(v,{id:r.$route.params.id,ref:"form"},null,8,["id"])]),_:1})]),_:1})]),_:1}),e(f,null,{default:t(()=>[e(a,{type:"primary",size:"large",onClick:i},{default:t(()=>[B]),_:1}),e(a,{size:"large",onClick:c},{default:t(()=>[E]),_:1})]),_:1})])}}});var V=C(M,[["__scopeId","data-v-23b01e01"]]);export{V as default};
