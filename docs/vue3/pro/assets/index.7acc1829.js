
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as p}from"./index.4e39c82e.js";import{r as u,B as l,o as a,l as o,Y as d,q as s,a4 as f,F as n,D as v,a6 as m,G as y}from"./vendor.db0e6471.js";const g={key:0,class:"title-container"},h={props:{title:{type:String,default:""},collaspe:{type:Boolean,default:!1},height:{type:String,default:""}},setup(e){const t=u(e.collaspe);function c(){t.value=!1}return(i,C)=>{const r=l("el-icon-arrow-down"),_=l("el-icon");return a(),o("div",{class:m({"page-main":!0,"is-collaspe":t.value}),style:y({height:t.value?e.height:""})},[e.title?(a(),o("div",g,d(e.title),1)):s("v-if",!0),f(i.$slots,"default",{},void 0,!0),t.value?(a(),o("div",{key:1,class:"collaspe",title:"\u5C55\u5F00",onClick:c},[n(_,null,{default:v(()=>[n(r)]),_:1})])):s("v-if",!0)],6)}}};var S=p(h,[["__scopeId","data-v-1559cb8c"]]);export{S as _};
