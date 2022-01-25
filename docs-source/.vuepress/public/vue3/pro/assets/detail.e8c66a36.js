
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as g}from"./index.f3868394.js";import{_ as b}from"./index.a4aa7a11.js";import{_ as x}from"./index.5d564d7a.js";import v from"./index.085bec79.js";import{_ as C,u as j}from"./index.e66802dc.js";import{j as $,l as h,F as e,A as t,D as s,o as k,$ as _,H as F}from"./vendor.ddb44672.js";const y=_("\u8FD4 \u56DE"),E=_("\u63D0 \u4EA4"),w=_("\u53D6 \u6D88"),B=$({name:"PagesExampleFormModeDetail"}),M=Object.assign(B,{setup(S){const{proxy:o}=F(),l=j();function i(){o.$refs.form.submit(()=>{o.$eventBus.emit("get-data-list"),n()})}function c(){n()}function n(){l.tabbar.enable&&!l.tabbar.mergeTabs?o.$tabbar.close({name:"pagesExampleGeneralFormModeList"}):o.$router.push({name:"pagesExampleGeneralFormModeList"})}return(r,z)=>{const a=s("el-button"),d=x,m=s("el-col"),u=s("el-row"),p=b,f=g;return k(),h("div",null,[e(d,{title:r.$route.name=="pagesExampleGeneralFormModeCreate"?"\u65B0\u589E":"\u7F16\u8F91"},{default:t(()=>[e(a,{icon:"el-icon-arrow-left",size:"default",round:"",onClick:n},{default:t(()=>[y]),_:1})]),_:1},8,["title"]),e(p,null,{default:t(()=>[e(u,null,{default:t(()=>[e(m,{md:24,lg:16},{default:t(()=>[e(v,{id:r.$route.params.id,ref:"form"},null,8,["id"])]),_:1})]),_:1})]),_:1}),e(f,null,{default:t(()=>[e(a,{type:"primary",size:"large",onClick:i},{default:t(()=>[E]),_:1}),e(a,{size:"large",onClick:c},{default:t(()=>[w]),_:1})]),_:1})])}}});var V=C(M,[["__scopeId","data-v-4f89efd4"]]);export{V as default};
