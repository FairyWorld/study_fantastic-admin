
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as g}from"./index.382625ae.js";import{_ as b}from"./index.ac752417.js";import{_ as x}from"./index.cb82a5d1.js";import v from"./index.39e55b8b.js";import{_ as j,u as C}from"./index.1c697a52.js";import{j as $,l as h,F as e,A as t,D as s,o as k,$ as _,H as D}from"./vendor.c6c27760.js";const y=_("\u8FD4 \u56DE"),w=_("\u63D0 \u4EA4"),B=_("\u53D6 \u6D88"),E=$({name:"PagesExampleDepartmentDetail"}),S=Object.assign(E,{setup(z){const{proxy:n}=D(),r=C();function i(){n.$refs.form.submit(()=>{n.$eventBus.emit("get-data-list"),o()})}function c(){o()}function o(){r.tabbar.enable&&!r.tabbar.mergeTabs?n.$tabbar.close({name:"pagesExampleGeneralDepartmentList"}):n.$router.push({name:"pagesExampleGeneralDepartmentList"})}return(l,N)=>{const a=s("el-button"),m=x,u=s("el-col"),p=s("el-row"),d=b,f=g;return k(),h("div",null,[e(m,{title:l.$route.name=="routerName"?"\u65B0\u589E\u90E8\u95E8":"\u7F16\u8F91\u90E8\u95E8"},{default:t(()=>[e(a,{icon:"el-icon-arrow-left",size:"default",round:"",onClick:o},{default:t(()=>[y]),_:1})]),_:1},8,["title"]),e(d,null,{default:t(()=>[e(p,null,{default:t(()=>[e(u,{md:24,lg:16},{default:t(()=>[e(v,{id:l.$route.params.id,ref:"form"},null,8,["id"])]),_:1})]),_:1})]),_:1}),e(f,null,{default:t(()=>[e(a,{type:"primary",size:"large",onClick:i},{default:t(()=>[w]),_:1}),e(a,{size:"large",onClick:c},{default:t(()=>[B]),_:1})]),_:1})])}}});var A=j(S,[["__scopeId","data-v-0ab3564d"]]);export{A as default};
