
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as a}from"./index.4bcd9cef.js";import{i as l,j as c,o as r,a0 as d,f as i,k as m,m as u,q as _}from"./vendor.7c7b0e52.js";const p=l({name:"FixedActionBar"}),f=Object.assign(p,{setup(v){const e=c({isBottom:!0});r(()=>{o(),window.addEventListener("scroll",o)}),d(()=>{window.removeEventListener("scroll",o)});function o(){var t=document.documentElement.scrollTop||document.body.scrollTop,n=document.documentElement.clientHeight||document.body.clientHeight,s=document.documentElement.scrollHeight||document.body.scrollHeight;Math.ceil(t+n)>=s?e.value.isBottom=!0:e.value.isBottom=!1}return(t,n)=>(i(),m("div",{class:_(["actionbar",{shadow:!e.value.isBottom}]),"data-fixed-calc-width":""},[u(t.$slots,"default",{},void 0,!0)],2))}});var w=a(f,[["__scopeId","data-v-1640fcae"]]);export{w as _};
