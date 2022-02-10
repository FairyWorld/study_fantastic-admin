
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as p}from"./plugin-vue_export-helper.21dcd24c.js";import{F as u,r as o,b as a,G as l,N as d,K as n,a4 as f,g as s,f as m,T as v,n as g}from"./vendor.a0579877.js";const y={key:0,class:"title-container"},h={props:{title:{type:String,default:""},collaspe:{type:Boolean,default:!1},height:{type:String,default:""}},setup(e){const t=u(e.collaspe);function i(){t.value=!1}return(c,k)=>{const r=o("el-icon-arrow-down"),_=o("el-icon");return a(),l("div",{class:v({"page-main":!0,"is-collaspe":t.value}),style:g({height:t.value?e.height:""})},[e.title?(a(),l("div",y,d(e.title),1)):n("v-if",!0),f(c.$slots,"default",{},void 0,!0),t.value?(a(),l("div",{key:1,class:"collaspe",title:"\u5C55\u5F00",onClick:i},[s(_,null,{default:m(()=>[s(r)]),_:1})])):n("v-if",!0)],6)}}};var S=p(h,[["__scopeId","data-v-947eb2b8"]]);export{S as _};
