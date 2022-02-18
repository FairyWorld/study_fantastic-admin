
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as g}from"./index.e4b5f93e.js";import{_ as b}from"./index.a91da01e.js";import{_ as $}from"./index.454d22a3.js";import C from"./index.05cd0e65.js";import{u as h}from"./index.8f12b84b.js";import{j as x,l as k,F as e,A as t,D as s,o as D,$ as l,H as w}from"./vendor.d1c84aa2.js";const B=l("\u8FD4 \u56DE"),E=l("\u63D0 \u4EA4"),S=l("\u53D6 \u6D88"),v=x({name:"PagesExampleDepartmentDetail"}),A=Object.assign(v,{setup(y){const{proxy:n}=w(),r=h();function i(){n.$refs.form.submit(()=>{n.$eventBus.emit("get-data-list"),o()})}function m(){o()}function o(){r.tabbar.enable&&!r.tabbar.mergeTabs?n.$tabbar.close({name:"pagesExampleGeneralDepartmentList"}):n.$router.push({name:"pagesExampleGeneralDepartmentList"})}return(_,z)=>{const a=s("el-button"),c=$,u=s("el-col"),p=s("el-row"),f=b,d=g;return D(),k("div",null,[e(c,{title:_.$route.name=="routerName"?"\u65B0\u589E\u90E8\u95E8":"\u7F16\u8F91\u90E8\u95E8"},{default:t(()=>[e(a,{icon:"el-icon-arrow-left",size:"default",round:"",onClick:o},{default:t(()=>[B]),_:1})]),_:1},8,["title"]),e(f,null,{default:t(()=>[e(p,null,{default:t(()=>[e(u,{md:24,lg:16},{default:t(()=>[e(C,{id:_.$route.params.id,ref:"form"},null,8,["id"])]),_:1})]),_:1})]),_:1}),e(d,null,{default:t(()=>[e(a,{type:"primary",size:"large",onClick:i},{default:t(()=>[E]),_:1}),e(a,{size:"large",onClick:m},{default:t(()=>[S]),_:1})]),_:1})])}}});export{A as default};
