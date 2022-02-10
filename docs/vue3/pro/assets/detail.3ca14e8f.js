
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as u}from"./index.4b1eed8b.js";import{_ as f}from"./index.9ed489d8.js";import{_ as d}from"./index.abc7a202.js";import g from"./index.043c1dfb.js";import{u as b}from"./index.64e7900a.js";import{j as h,l as C,F as e,A as t,D as x,o as $,$ as s,H as v}from"./vendor.bcd7a662.js";import"./index.27f5c574.js";import"./index.06d97fd1.js";const y=s("\u8FD4 \u56DE"),D=s("\u63D0 \u4EA4"),S=s("\u53D6 \u6D88"),k=h({name:"PagesExampleDeliveryDetail"}),A=Object.assign(k,{setup(E){const{proxy:o}=v(),r=b();function l(){o.$refs.form.submit(()=>{o.$eventBus.emit("get-data-list"),n()})}function _(){n()}function n(){r.tabbar.enable&&!r.tabbar.mergeTabs?o.$tabbar.close({name:"pagesExampleShopDeliveryList"}):o.$router.push({name:"pagesExampleShopDeliveryList"})}return(i,B)=>{const a=x("el-button"),m=d,p=f,c=u;return $(),C("div",null,[e(m,{title:i.$route.name=="pagesExampleShopDeliveryCreate"?"\u65B0\u589E\u8FD0\u8D39\u6A21\u7248":"\u7F16\u8F91\u8FD0\u8D39\u6A21\u7248"},{default:t(()=>[e(a,{icon:"el-icon-arrow-left",size:"default",round:"",onClick:n},{default:t(()=>[y]),_:1})]),_:1},8,["title"]),e(p,null,{default:t(()=>[e(g,{id:i.$route.params.id,ref:"form"},null,8,["id"])]),_:1}),e(c,null,{default:t(()=>[e(a,{type:"primary",size:"large",onClick:l},{default:t(()=>[D]),_:1}),e(a,{size:"large",onClick:_},{default:t(()=>[S]),_:1})]),_:1})])}}});export{A as default};
