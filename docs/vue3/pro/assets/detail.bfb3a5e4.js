
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as g}from"./index.e4b5f93e.js";import{_ as b}from"./index.a91da01e.js";import{_ as C}from"./index.454d22a3.js";import $ from"./index.8299603b.js";import{u as x}from"./index.8f12b84b.js";import{j as h,l as k,F as e,A as o,D as s,o as E,$ as l,H as F}from"./vendor.d1c84aa2.js";const w=l("\u8FD4 \u56DE"),B=l("\u63D0 \u4EA4"),M=l("\u53D6 \u6D88"),S=h({name:"PagesExampleFormModeDetail"}),T=Object.assign(S,{setup(v){const{proxy:t}=F(),r=x();function i(){t.$refs.form.submit(()=>{t.$eventBus.emit("get-data-list"),n()})}function m(){n()}function n(){r.tabbar.enable&&!r.tabbar.mergeTabs?t.$tabbar.close({name:"pagesExampleGeneralFormModeList"}):t.$router.push({name:"pagesExampleGeneralFormModeList"})}return(_,y)=>{const a=s("el-button"),c=C,u=s("el-col"),p=s("el-row"),d=b,f=g;return E(),k("div",null,[e(c,{title:_.$route.name=="pagesExampleGeneralFormModeCreate"?"\u65B0\u589E":"\u7F16\u8F91"},{default:o(()=>[e(a,{icon:"el-icon-arrow-left",size:"default",round:"",onClick:n},{default:o(()=>[w]),_:1})]),_:1},8,["title"]),e(d,null,{default:o(()=>[e(p,null,{default:o(()=>[e(u,{md:24,lg:16},{default:o(()=>[e($,{id:_.$route.params.id,ref:"form"},null,8,["id"])]),_:1})]),_:1})]),_:1}),e(f,null,{default:o(()=>[e(a,{type:"primary",size:"large",onClick:i},{default:o(()=>[B]),_:1}),e(a,{size:"large",onClick:m},{default:o(()=>[M]),_:1})]),_:1})])}}});export{T as default};
