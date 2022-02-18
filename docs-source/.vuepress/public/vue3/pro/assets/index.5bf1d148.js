
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as p}from"./index.8f12b84b.js";import{j as m,D as c,o as s,l as t,F as n,A as l,m as v,Y as _,q as a,a4 as r}from"./vendor.d1c84aa2.js";const y={class:"result"},g={key:0,class:"icon icon-success"},h={key:1,class:"icon icon-warning"},k={key:2,class:"icon icon-error"},w={key:3,class:"desc"},x={key:4,class:"extra"},S={key:5,class:"actions"},C=m({name:"Result"}),$=Object.assign(C,{props:{type:{type:String,validator:e=>["success","warning","error"].includes(e),required:!0},title:{type:String,required:!0},desc:{type:String,default:""}},setup(e){return(o,q)=>{const d=c("el-icon-success-filled"),i=c("el-icon"),u=c("el-icon-warning-filled"),f=c("el-icon-circle-close-filled");return s(),t("div",y,[e.type==="success"?(s(),t("div",g,[n(i,null,{default:l(()=>[n(d)]),_:1})])):e.type==="warning"?(s(),t("div",h,[n(i,null,{default:l(()=>[n(u)]),_:1})])):(s(),t("div",k,[n(i,null,{default:l(()=>[n(f)]),_:1})])),v("h1",null,_(e.title),1),e.desc?(s(),t("div",w,_(e.desc),1)):a("v-if",!0),o.$slots.extra?(s(),t("div",x,[r(o.$slots,"extra",{},void 0,!0)])):a("v-if",!0),o.$slots.default?(s(),t("div",S,[r(o.$slots,"default",{},void 0,!0)])):a("v-if",!0)])}}});var V=p($,[["__scopeId","data-v-31cf7542"]]);export{V as _};
