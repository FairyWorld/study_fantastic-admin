
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as g}from"./index.f3868394.js";import{_ as b}from"./index.a4aa7a11.js";import{_ as x}from"./index.5d564d7a.js";import v from"./index.3d81d69a.js";import{_ as $,u as j}from"./index.e66802dc.js";import{j as C,l as h,F as e,A as t,D as _,o as k,$ as r,H as D}from"./vendor.ddb44672.js";const y=r("\u8FD4 \u56DE"),w=r("\u63D0 \u4EA4"),B=r("\u53D6 \u6D88"),E=C({name:"PagesExampleDepartmentJobDetail"}),S=Object.assign(E,{setup(z){const{proxy:n}=D(),l=j();function i(){n.$refs.form.submit(()=>{n.$eventBus.emit("get-data-list"),o()})}function d(){o()}function o(){l.tabbar.enable&&!l.tabbar.mergeTabs?n.$tabbar.close({name:"pagesExampleGeneralDepartmentList"}):n.$router.push({name:"pagesExampleGeneralDepartmentList"})}return(a,N)=>{const s=_("el-button"),m=x,c=_("el-col"),p=_("el-row"),u=b,f=g;return k(),h("div",null,[e(m,{title:a.$route.name=="routerName"?"\u65B0\u589E\u804C\u4F4D":"\u7F16\u8F91\u804C\u4F4D"},{default:t(()=>[e(s,{icon:"el-icon-arrow-left",size:"default",round:"",onClick:o},{default:t(()=>[y]),_:1})]),_:1},8,["title"]),e(u,null,{default:t(()=>[e(p,null,{default:t(()=>[e(c,{md:24,lg:16},{default:t(()=>[e(v,{id:a.$route.params.id,ref:"form","department-id":a.$route.params.department_id},null,8,["id","department-id"])]),_:1})]),_:1})]),_:1}),e(f,null,{default:t(()=>[e(s,{type:"primary",size:"large",onClick:i},{default:t(()=>[w]),_:1}),e(s,{size:"large",onClick:d},{default:t(()=>[B]),_:1})]),_:1})])}}});var A=$(S,[["__scopeId","data-v-0b0e4bcf"]]);export{A as default};
