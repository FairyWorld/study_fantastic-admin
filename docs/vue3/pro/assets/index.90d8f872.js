
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_}from"./index.a1178b85.js";import{g as i,r as u,K as d,l as f,o as n,h as s,m as p,q as m,w as v,y as g,t as h,j as y}from"./vendor.ee7254f0.js";const x={class:"search-container"},b={key:0,class:"more"},w=i({name:"SearchBar"}),B=Object.assign(w,{props:{showMore:{type:Boolean,default:!1},unfold:{type:Boolean,default:!1}},emits:["toggle"],setup(t,{emit:l}){const o=t,e=u(!o.unfold);d(()=>o.unfold,()=>a(),{immediate:!0});function a(){e.value=!e.value,l("toggle",e.value)}return(c,C)=>{const r=f("el-button");return n(),s("div",x,[p(c.$slots,"default",{},void 0,!0),t.showMore?(n(),s("div",b,[m(r,{type:"text",size:"small",icon:e.value?"el-icon-caret-top":"el-icon-caret-bottom",onClick:a},{default:v(()=>[g(h(e.value?"\u6536\u8D77":"\u5C55\u5F00"),1)]),_:1},8,["icon"])])):y("v-if",!0)])}}});var S=_(B,[["__scopeId","data-v-3cab81f3"]]);export{S as _};
