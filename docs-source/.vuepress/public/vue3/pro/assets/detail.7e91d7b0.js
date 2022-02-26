
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as b}from"./index.37af8ca7.js";import{u as $,n as h,m as C}from"./index.e5f7e690.js";import k from"./index.2f18db0b.js";import{g as x,h as w,q as e,w as t,l as r,o as y,y as l,O as v}from"./vendor.ee7254f0.js";var i={};const B=l("\u8FD4 \u56DE"),D=l("\u63D0 \u4EA4"),E=l("\u53D6 \u6D88"),S=x({name:"PagesExampleDepartmentJobDetail"}),z=Object.assign(S,{setup(N){const{proxy:n}=v(),_=$();function m(){n.$refs.form.submit(()=>{n.$eventBus.emit("get-data-list"),o()})}function c(){o()}function o(){_.tabbar.enable&&!_.tabbar.mergeTabs?n.$tabbar.close({name:"pagesExampleGeneralDepartmentList"}):n.$router.push({name:"pagesExampleGeneralDepartmentList"})}return(a,G)=>{const s=r("el-button"),u=h,p=r("el-col"),d=r("el-row"),f=C,g=b;return y(),w("div",null,[e(u,{title:a.$route.name=="routerName"?"\u65B0\u589E\u804C\u4F4D":"\u7F16\u8F91\u804C\u4F4D"},{default:t(()=>[e(s,{icon:"el-icon-arrow-left",size:"default",round:"",onClick:o},{default:t(()=>[B]),_:1})]),_:1},8,["title"]),e(f,null,{default:t(()=>[e(d,null,{default:t(()=>[e(p,{md:24,lg:16},{default:t(()=>[e(k,{id:a.$route.params.id,ref:"form","department-id":a.$route.params.department_id},null,8,["id","department-id"])]),_:1})]),_:1})]),_:1}),e(g,null,{default:t(()=>[e(s,{type:"primary",size:"large",onClick:m},{default:t(()=>[D]),_:1}),e(s,{size:"large",onClick:c},{default:t(()=>[E]),_:1})]),_:1})])}}});typeof i=="function"&&i(z);export{z as default};
