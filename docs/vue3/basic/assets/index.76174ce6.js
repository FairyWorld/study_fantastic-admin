
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{d as e,_ as t,r as o,o as s,P as a,q as c,c as n,a0 as d,H as i}from"./index.9be238e7.js";const l=e({name:"FixedActionBar"});var m=t(Object.assign(l,{setup(e){const t=o({isBottom:!0});function l(){var e=document.documentElement.scrollTop||document.body.scrollTop,o=document.documentElement.clientHeight||document.body.clientHeight,s=document.documentElement.scrollHeight||document.body.scrollHeight;Math.ceil(e+o)>=s?t.value.isBottom=!0:t.value.isBottom=!1}return s((()=>{l(),window.addEventListener("scroll",l)})),a((()=>{window.removeEventListener("scroll",l)})),(e,o)=>(c(),n("div",{class:i(["actionbar",{shadow:!t.value.isBottom}]),"data-fixed-calc-width":""},[d(e.$slots,"default",{},void 0,!0)],2))}}),[["__scopeId","data-v-1640fcae"]]);export{m as _};
