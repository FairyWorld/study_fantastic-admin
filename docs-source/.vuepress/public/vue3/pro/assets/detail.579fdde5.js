
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as b}from"./index.4d3f79f8.js";import{u as h,n as C,m as $}from"./index.62acde6f.js";import k from"./index.3126eba5.js";import{g as x,h as w,q as e,w as t,l as s,o as y,y as l,O as v}from"./vendor.ee7254f0.js";var c={};const B=l("\u8FD4 \u56DE"),D=l("\u63D0 \u4EA4"),E=l("\u53D6 \u6D88"),S=x({name:"PagesExampleDepartmentDetail"}),z=Object.assign(S,{setup(N){const{proxy:n}=v(),_=h();function i(){n.$refs.form.submit(()=>{n.$eventBus.emit("get-data-list"),o()})}function m(){o()}function o(){_.tabbar.enable&&!_.tabbar.mergeTabs?n.$tabbar.close({name:"pagesExampleGeneralDepartmentList"}):n.$router.push({name:"pagesExampleGeneralDepartmentList"})}return(r,G)=>{const a=s("el-button"),u=C,p=s("el-col"),f=s("el-row"),d=$,g=b;return y(),w("div",null,[e(u,{title:r.$route.name=="routerName"?"\u65B0\u589E\u90E8\u95E8":"\u7F16\u8F91\u90E8\u95E8"},{default:t(()=>[e(a,{icon:"el-icon-arrow-left",size:"default",round:"",onClick:o},{default:t(()=>[B]),_:1})]),_:1},8,["title"]),e(d,null,{default:t(()=>[e(f,null,{default:t(()=>[e(p,{md:24,lg:16},{default:t(()=>[e(k,{id:r.$route.params.id,ref:"form"},null,8,["id"])]),_:1})]),_:1})]),_:1}),e(g,null,{default:t(()=>[e(a,{type:"primary",size:"large",onClick:i},{default:t(()=>[D]),_:1}),e(a,{size:"large",onClick:m},{default:t(()=>[E]),_:1})]),_:1})])}}});typeof c=="function"&&c(z);export{z as default};
