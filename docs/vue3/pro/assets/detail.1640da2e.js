
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as g}from"./index.4b1eed8b.js";import{_ as b}from"./index.9ed489d8.js";import{_ as $}from"./index.abc7a202.js";import C from"./index.0a363a31.js";import{u as h}from"./index.64e7900a.js";import{j as k,l as x,F as e,A as t,D as s,o as D,$ as l,H as w}from"./vendor.bcd7a662.js";const B=l("\u8FD4 \u56DE"),E=l("\u63D0 \u4EA4"),S=l("\u53D6 \u6D88"),v=k({name:"PagesExampleDepartmentJobDetail"}),A=Object.assign(v,{setup(y){const{proxy:n}=w(),_=h();function i(){n.$refs.form.submit(()=>{n.$eventBus.emit("get-data-list"),o()})}function m(){o()}function o(){_.tabbar.enable&&!_.tabbar.mergeTabs?n.$tabbar.close({name:"pagesExampleGeneralDepartmentList"}):n.$router.push({name:"pagesExampleGeneralDepartmentList"})}return(a,z)=>{const r=s("el-button"),c=$,p=s("el-col"),u=s("el-row"),d=b,f=g;return D(),x("div",null,[e(c,{title:a.$route.name=="routerName"?"\u65B0\u589E\u804C\u4F4D":"\u7F16\u8F91\u804C\u4F4D"},{default:t(()=>[e(r,{icon:"el-icon-arrow-left",size:"default",round:"",onClick:o},{default:t(()=>[B]),_:1})]),_:1},8,["title"]),e(d,null,{default:t(()=>[e(u,null,{default:t(()=>[e(p,{md:24,lg:16},{default:t(()=>[e(C,{id:a.$route.params.id,ref:"form","department-id":a.$route.params.department_id},null,8,["id","department-id"])]),_:1})]),_:1})]),_:1}),e(f,null,{default:t(()=>[e(r,{type:"primary",size:"large",onClick:i},{default:t(()=>[E]),_:1}),e(r,{size:"large",onClick:m},{default:t(()=>[S]),_:1})]),_:1})])}}});export{A as default};
