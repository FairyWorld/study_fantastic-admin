
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as f}from"./index.37af8ca7.js";import{u as d,n as g,m as b}from"./index.e5f7e690.js";import h from"./index.c15057c5.js";import{g as y,h as C,q as e,w as t,l as v,o as x,y as s,O as k}from"./vendor.ee7254f0.js";import"./index.697e560f.js";import"./index.6f6cb2ec.js";var l={};const S=s("\u8FD4 \u56DE"),$=s("\u63D0 \u4EA4"),D=s("\u53D6 \u6D88"),E=y({name:"PagesExampleDeliveryDetail"}),B=Object.assign(E,{setup(w){const{proxy:o}=k(),i=d();function _(){o.$refs.form.submit(()=>{o.$eventBus.emit("get-data-list"),n()})}function c(){n()}function n(){i.tabbar.enable&&!i.tabbar.mergeTabs?o.$tabbar.close({name:"pagesExampleShopDeliveryList"}):o.$router.push({name:"pagesExampleShopDeliveryList"})}return(r,z)=>{const a=v("el-button"),p=g,m=b,u=f;return x(),C("div",null,[e(p,{title:r.$route.name=="pagesExampleShopDeliveryCreate"?"\u65B0\u589E\u8FD0\u8D39\u6A21\u7248":"\u7F16\u8F91\u8FD0\u8D39\u6A21\u7248"},{default:t(()=>[e(a,{icon:"el-icon-arrow-left",size:"default",round:"",onClick:n},{default:t(()=>[S]),_:1})]),_:1},8,["title"]),e(m,null,{default:t(()=>[e(h,{id:r.$route.params.id,ref:"form"},null,8,["id"])]),_:1}),e(u,null,{default:t(()=>[e(a,{type:"primary",size:"large",onClick:_},{default:t(()=>[$]),_:1}),e(a,{size:"large",onClick:c},{default:t(()=>[D]),_:1})]),_:1})])}}});typeof l=="function"&&l(B);export{B as default};
