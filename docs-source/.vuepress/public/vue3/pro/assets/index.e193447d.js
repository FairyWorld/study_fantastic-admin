
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as v}from"./index.4e39c82e.js";import{B as c,o as s,l as t,F as n,D as l,m as p,Y as a,q as r,a4 as d}from"./vendor.db0e6471.js";const m={class:"result"},y={key:0,class:"icon icon-success"},g={key:1,class:"icon icon-warning"},h={key:2,class:"icon icon-error"},k={key:3,class:"desc"},w={key:4,class:"extra"},x={key:5,class:"actions"},S={props:{type:{type:String,validator:e=>["success","warning","error"].includes(e),required:!0},title:{type:String,required:!0},desc:{type:String,default:""}},setup(e){return(o,B)=>{const _=c("el-icon-success-filled"),i=c("el-icon"),u=c("el-icon-warning-filled"),f=c("el-icon-circle-close-filled");return s(),t("div",m,[e.type==="success"?(s(),t("div",y,[n(i,null,{default:l(()=>[n(_)]),_:1})])):e.type==="warning"?(s(),t("div",g,[n(i,null,{default:l(()=>[n(u)]),_:1})])):(s(),t("div",h,[n(i,null,{default:l(()=>[n(f)]),_:1})])),p("h1",null,a(e.title),1),e.desc?(s(),t("div",k,a(e.desc),1)):r("v-if",!0),o.$slots.extra?(s(),t("div",w,[d(o.$slots,"extra",{},void 0,!0)])):r("v-if",!0),o.$slots.default?(s(),t("div",x,[d(o.$slots,"default",{},void 0,!0)])):r("v-if",!0)])}}};var C=v(S,[["__scopeId","data-v-718296ea"]]);export{C as _};
