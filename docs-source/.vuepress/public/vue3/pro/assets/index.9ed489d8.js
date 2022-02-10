
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as p}from"./index.64e7900a.js";import{j as u,r as d,l as a,Y as f,q as l,a4 as m,F as n,A as v,a6 as g,G as y,D as s,o}from"./vendor.bcd7a662.js";const h={key:0,class:"title-container"},C=u({name:"PageMain"}),k=Object.assign(C,{props:{title:{type:String,default:""},collaspe:{type:Boolean,default:!1},height:{type:String,default:""}},setup(e){const t=d(e.collaspe);function i(){t.value=!1}return(c,x)=>{const r=s("el-icon-arrow-down"),_=s("el-icon");return o(),a("div",{class:g({"page-main":!0,"is-collaspe":t.value}),style:y({height:t.value?e.height:""})},[e.title?(o(),a("div",h,f(e.title),1)):l("v-if",!0),m(c.$slots,"default",{},void 0,!0),t.value?(o(),a("div",{key:1,class:"collaspe",title:"\u5C55\u5F00",onClick:i},[n(_,null,{default:v(()=>[n(r)]),_:1})])):l("v-if",!0)],6)}}});var D=p(k,[["__scopeId","data-v-76a604c9"]]);export{D as _};
