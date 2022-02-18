
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as s}from"./index.8f12b84b.js";import{j as l,r as c,y as r,ai as d,o as i,l as u,a4 as m,a6 as _}from"./vendor.d1c84aa2.js";const p=l({name:"FixedActionBar"}),v=Object.assign(p,{setup(f){const e=c({isBottom:!0});r(()=>{o(),window.addEventListener("scroll",o)}),d(()=>{window.removeEventListener("scroll",o)});function o(){var t=document.documentElement.scrollTop||document.body.scrollTop,n=document.documentElement.clientHeight||document.body.clientHeight,a=document.documentElement.scrollHeight||document.body.scrollHeight;Math.ceil(t+n)>=a?e.value.isBottom=!0:e.value.isBottom=!1}return(t,n)=>(i(),u("div",{class:_(["actionbar",{shadow:!e.value.isBottom}]),"data-fixed-calc-width":""},[m(t.$slots,"default",{},void 0,!0)],2))}});var w=s(v,[["__scopeId","data-v-1640fcae"]]);export{w as _};
