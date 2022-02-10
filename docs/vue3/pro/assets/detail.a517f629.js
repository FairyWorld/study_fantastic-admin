
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as g}from"./index.4b1eed8b.js";import{_ as b}from"./index.9ed489d8.js";import{_ as $}from"./index.abc7a202.js";import C from"./index.fa9e54a6.js";import{u as h}from"./index.64e7900a.js";import{j as x,l as k,F as e,A as t,D as s,o as w,$ as l,H as B}from"./vendor.bcd7a662.js";const E=l("\u8FD4 \u56DE"),S=l("\u63D0 \u4EA4"),v=l("\u53D6 \u6D88"),y=x({name:"PagesExampleManagerDetail"}),V=Object.assign(y,{setup(z){const{proxy:n}=B(),r=h();function i(){n.$refs.form.submit(()=>{n.$eventBus.emit("get-data-list"),o()})}function c(){o()}function o(){r.tabbar.enable&&!r.tabbar.mergeTabs?n.$tabbar.close({name:"pagesExampleGeneralManagerList"}):n.$router.push({name:"pagesExampleGeneralManagerList"})}return(_,M)=>{const a=s("el-button"),m=$,u=s("el-col"),p=s("el-row"),f=b,d=g;return w(),k("div",null,[e(m,{title:_.$route.name=="routerName"?"\u65B0\u589E\u7BA1\u7406\u5458":"\u7F16\u8F91\u7BA1\u7406\u5458"},{default:t(()=>[e(a,{icon:"el-icon-arrow-left",size:"default",round:"",onClick:o},{default:t(()=>[E]),_:1})]),_:1},8,["title"]),e(f,null,{default:t(()=>[e(p,null,{default:t(()=>[e(u,{md:24,lg:16},{default:t(()=>[e(C,{id:_.$route.params.id,ref:"form"},null,8,["id"])]),_:1})]),_:1})]),_:1}),e(d,null,{default:t(()=>[e(a,{type:"primary",size:"large",onClick:i},{default:t(()=>[S]),_:1}),e(a,{size:"large",onClick:c},{default:t(()=>[v]),_:1})]),_:1})])}}});export{V as default};
