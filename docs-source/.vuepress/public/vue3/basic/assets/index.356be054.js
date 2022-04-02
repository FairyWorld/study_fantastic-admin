
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{d as t,_ as e,r as o,o as s,P as a,q as c,c as n,a0 as d,H as i}from"./index.b7fe7d7b.js";const l=t({name:"FixedActionBar"});var m=e(Object.assign(l,{setup(t){const e=o({isBottom:!0});function l(){var t=document.documentElement.scrollTop||document.body.scrollTop,o=document.documentElement.clientHeight||document.body.clientHeight,s=document.documentElement.scrollHeight||document.body.scrollHeight;Math.ceil(t+o)>=s?e.value.isBottom=!0:e.value.isBottom=!1}return s((()=>{l(),window.addEventListener("scroll",l)})),a((()=>{window.removeEventListener("scroll",l)})),(t,o)=>(c(),n("div",{class:i(["actionbar",{shadow:!e.value.isBottom}]),"data-fixed-calc-width":""},[d(t.$slots,"default",{},void 0,!0)],2))}}),[["__scopeId","data-v-1640fcae"]]);export{m as _};
