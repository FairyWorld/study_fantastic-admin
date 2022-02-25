
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as a}from"./index.62acde6f.js";import{g as l,r as c,L as r,aa as d,o as i,h as m,m as u,s as _}from"./vendor.ee7254f0.js";const p=l({name:"FixedActionBar"}),v=Object.assign(p,{setup(f){const e=c({isBottom:!0});r(()=>{o(),window.addEventListener("scroll",o)}),d(()=>{window.removeEventListener("scroll",o)});function o(){var t=document.documentElement.scrollTop||document.body.scrollTop,n=document.documentElement.clientHeight||document.body.clientHeight,s=document.documentElement.scrollHeight||document.body.scrollHeight;Math.ceil(t+n)>=s?e.value.isBottom=!0:e.value.isBottom=!1}return(t,n)=>(i(),m("div",{class:_(["actionbar",{shadow:!e.value.isBottom}]),"data-fixed-calc-width":""},[u(t.$slots,"default",{},void 0,!0)],2))}});var w=a(v,[["__scopeId","data-v-36d3fb32"]]);export{w as _};
