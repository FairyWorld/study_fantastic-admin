
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as o}from"./index.2c18650f.js";import{g as t,r as e,L as s,aa as a,o as n,h as d,m as c,s as i}from"./vendor.9da56f98.js";const l=t({name:"FixedActionBar"});var m=o(Object.assign(l,{setup(o){const t=e({isBottom:!0});function l(){var o=document.documentElement.scrollTop||document.body.scrollTop,e=document.documentElement.clientHeight||document.body.clientHeight,s=document.documentElement.scrollHeight||document.body.scrollHeight;Math.ceil(o+e)>=s?t.value.isBottom=!0:t.value.isBottom=!1}return s((()=>{l(),window.addEventListener("scroll",l)})),a((()=>{window.removeEventListener("scroll",l)})),(o,e)=>(n(),d("div",{class:i(["actionbar",{shadow:!t.value.isBottom}]),"data-fixed-calc-width":""},[c(o.$slots,"default",{},void 0,!0)],2))}}),[["__scopeId","data-v-36d3fb32"]]);export{m as _};
