
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as d}from"./index.d40631c6.js";import{_ as u}from"./index.1bd2d262.js";import{_ as f}from"./index.c5ec1ecf.js";import g from"./index.f9336e71.js";import{_ as b,u as x}from"./index.677bf551.js";import{j as v,l as h,F as e,A as t,D as j,o as y,$ as s,H as C}from"./vendor.7ef8ea63.js";import"./index.dfb3f391.js";import"./index.fe11d31b.js";const $=s("\u8FD4 \u56DE"),D=s("\u63D0 \u4EA4"),S=s("\u53D6 \u6D88"),k=v({name:"PagesExampleDeliveryDetail"}),E=Object.assign(k,{setup(B){const{proxy:o}=C(),i=x();function _(){o.$refs.form.submit(()=>{o.$eventBus.emit("get-data-list"),n()})}function l(){n()}function n(){i.tabbar.enable&&!i.tabbar.mergeTabs?o.$tabbar.close({name:"pagesExampleShopDeliveryList"}):o.$router.push({name:"pagesExampleShopDeliveryList"})}return(r,z)=>{const a=j("el-button"),c=f,p=u,m=d;return y(),h("div",null,[e(c,{title:r.$route.name=="pagesExampleShopDeliveryCreate"?"\u65B0\u589E\u8FD0\u8D39\u6A21\u7248":"\u7F16\u8F91\u8FD0\u8D39\u6A21\u7248"},{default:t(()=>[e(a,{icon:"el-icon-arrow-left",size:"default",round:"",onClick:n},{default:t(()=>[$]),_:1})]),_:1},8,["title"]),e(p,null,{default:t(()=>[e(g,{id:r.$route.params.id,ref:"form"},null,8,["id"])]),_:1}),e(m,null,{default:t(()=>[e(a,{type:"primary",size:"large",onClick:_},{default:t(()=>[D]),_:1}),e(a,{size:"large",onClick:l},{default:t(()=>[S]),_:1})]),_:1})])}}});var H=b(E,[["__scopeId","data-v-05ff7a8e"]]);export{H as default};
