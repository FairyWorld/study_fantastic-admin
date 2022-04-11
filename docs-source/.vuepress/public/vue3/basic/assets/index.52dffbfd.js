
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{d as t,_ as o,r as e,o as s,P as a,q as c,c as n,a0 as d,H as i}from"./index.fc479745.js";const l=t({name:"FixedActionBar"});var m=o(Object.assign(l,{setup(t){const o=e({isBottom:!0});function l(){var t=document.documentElement.scrollTop||document.body.scrollTop,e=document.documentElement.clientHeight||document.body.clientHeight,s=document.documentElement.scrollHeight||document.body.scrollHeight;Math.ceil(t+e)>=s?o.value.isBottom=!0:o.value.isBottom=!1}return s((()=>{l(),window.addEventListener("scroll",l)})),a((()=>{window.removeEventListener("scroll",l)})),(t,e)=>(c(),n("div",{class:i(["actionbar",{shadow:!o.value.isBottom}]),"data-fixed-calc-width":""},[d(t.$slots,"default",{},void 0,!0)],2))}}),[["__scopeId","data-v-36d3fb32"]]);export{m as _};
