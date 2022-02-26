
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as b}from"./index.c3e889e5.js";import{u as C,n as h,m as x}from"./index.a1178b85.js";import $ from"./index.2cc03e9b.js";import{g as k,h as w,q as e,w as o,l as s,o as y,y as l,O as E}from"./vendor.ee7254f0.js";var c={};const v=l("\u8FD4 \u56DE"),B=l("\u63D0 \u4EA4"),F=l("\u53D6 \u6D88"),M=k({name:"PagesExampleFormModeDetail"}),S=Object.assign(M,{setup(z){const{proxy:t}=E(),r=C();function i(){t.$refs.form.submit(()=>{t.$eventBus.emit("get-data-list"),n()})}function m(){n()}function n(){r.tabbar.enable&&!r.tabbar.mergeTabs?t.$tabbar.close({name:"pagesExampleGeneralFormModeList"}):t.$router.push({name:"pagesExampleGeneralFormModeList"})}return(_,G)=>{const a=s("el-button"),u=h,p=s("el-col"),f=s("el-row"),d=x,g=b;return y(),w("div",null,[e(u,{title:_.$route.name=="pagesExampleGeneralFormModeCreate"?"\u65B0\u589E":"\u7F16\u8F91"},{default:o(()=>[e(a,{icon:"el-icon-arrow-left",size:"default",round:"",onClick:n},{default:o(()=>[v]),_:1})]),_:1},8,["title"]),e(d,null,{default:o(()=>[e(f,null,{default:o(()=>[e(p,{md:24,lg:16},{default:o(()=>[e($,{id:_.$route.params.id,ref:"form"},null,8,["id"])]),_:1})]),_:1})]),_:1}),e(g,null,{default:o(()=>[e(a,{type:"primary",size:"large",onClick:i},{default:o(()=>[B]),_:1}),e(a,{size:"large",onClick:m},{default:o(()=>[F]),_:1})]),_:1})])}}});typeof c=="function"&&c(S);export{S as default};
