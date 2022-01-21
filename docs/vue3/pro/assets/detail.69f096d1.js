
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as g}from"./index.5436b1e2.js";import{_ as b}from"./index.13c1af28.js";import{_ as x}from"./index.a1ea47af.js";import v from"./index.be0acb98.js";import{_ as j,u as C}from"./index.85d61d52.js";import{j as $,B as s,l as h,F as e,D as t,o as k,$ as _,H as y}from"./vendor.e498156c.js";const B=_("\u8FD4 \u56DE"),w=_("\u63D0 \u4EA4"),E=_("\u53D6 \u6D88"),S=$({name:"PagesExampleManagerDetail"}),z=Object.assign(S,{setup(D){const{proxy:n}=y(),r=C();function i(){n.$refs.form.submit(()=>{n.$eventBus.emit("get-data-list"),o()})}function c(){o()}function o(){r.tabbar.enable&&!r.tabbar.mergeTabs?n.$tabbar.close({name:"pagesExampleGeneralManagerList"}):n.$router.push({name:"pagesExampleGeneralManagerList"})}return(l,M)=>{const a=s("el-button"),u=x,m=s("el-col"),d=s("el-row"),p=b,f=g;return k(),h("div",null,[e(u,{title:l.$route.name=="routerName"?"\u65B0\u589E\u7BA1\u7406\u5458":"\u7F16\u8F91\u7BA1\u7406\u5458"},{default:t(()=>[e(a,{icon:"el-icon-arrow-left",size:"default",round:"",onClick:o},{default:t(()=>[B]),_:1})]),_:1},8,["title"]),e(p,null,{default:t(()=>[e(d,null,{default:t(()=>[e(m,{md:24,lg:16},{default:t(()=>[e(v,{id:l.$route.params.id,ref:"form"},null,8,["id"])]),_:1})]),_:1})]),_:1}),e(f,null,{default:t(()=>[e(a,{type:"primary",size:"large",onClick:i},{default:t(()=>[w]),_:1}),e(a,{size:"large",onClick:c},{default:t(()=>[E]),_:1})]),_:1})])}}});var V=j(z,[["__scopeId","data-v-dd28cdc2"]]);export{V as default};
