
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as i}from"./index.5e4942ca.js";import{r as _,x as u,D as d,o as s,l as n,a4 as f,F as p,A as m,$ as v,Y as g,q as x}from"./vendor.7ef8ea63.js";const h={class:"search-container"},y={key:0,class:"more"},b={props:{showMore:{type:Boolean,default:!1},unfold:{type:Boolean,default:!1}},emits:["toggle"],setup(o,{emit:l}){const t=o,e=_(!t.unfold);u(()=>t.unfold,()=>a(),{immediate:!0});function a(){e.value=!e.value,l("toggle",e.value)}return(r,k)=>{const c=d("el-button");return s(),n("div",h,[f(r.$slots,"default",{},void 0,!0),o.showMore?(s(),n("div",y,[p(c,{type:"text",size:"small",icon:e.value?"el-icon-caret-top":"el-icon-caret-bottom",onClick:a},{default:m(()=>[v(g(e.value?"\u6536\u8D77":"\u5C55\u5F00"),1)]),_:1},8,["icon"])])):x("v-if",!0)])}}};var C=i(b,[["__scopeId","data-v-fbe6e7f8"]]);export{C as _};
