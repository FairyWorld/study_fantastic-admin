
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_}from"./index.64e7900a.js";import{j as i,r as u,x as d,D as f,o as n,l as s,a4 as p,F as m,A as v,$ as g,Y as h,q as x}from"./vendor.bcd7a662.js";const y={class:"search-container"},b={key:0,class:"more"},B=i({name:"SearchBar"}),C=Object.assign(B,{props:{showMore:{type:Boolean,default:!1},unfold:{type:Boolean,default:!1}},emits:["toggle"],setup(t,{emit:l}){const o=t,e=u(!o.unfold);d(()=>o.unfold,()=>a(),{immediate:!0});function a(){e.value=!e.value,l("toggle",e.value)}return(c,k)=>{const r=f("el-button");return n(),s("div",y,[p(c.$slots,"default",{},void 0,!0),t.showMore?(n(),s("div",b,[m(r,{type:"text",size:"small",icon:e.value?"el-icon-caret-top":"el-icon-caret-bottom",onClick:a},{default:v(()=>[g(h(e.value?"\u6536\u8D77":"\u5C55\u5F00"),1)]),_:1},8,["icon"])])):x("v-if",!0)])}}});var S=_(C,[["__scopeId","data-v-3cab81f3"]]);export{S as _};
