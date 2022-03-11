
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as a}from"./index.2c18650f.js";import{g as e,z as t,l,o as s,h as n,q as c,w as d,u as o,ak as i,t as r,j as u,m as h,y as m}from"./vendor.9da56f98.js";const f={class:"batch-action-bar"},g=m("当页全选"),p={key:0,class:"tips"},b=e({name:"BatchActionBar"});var v=a(Object.assign(b,{props:{data:{type:Array,default:()=>[]},selectionData:{type:Array,default:()=>[]}},emits:["check-all","check-null"],setup(a,{emit:e}){const m=a,b=t({get:function(){let a=!1;return 0!=m.data.length&&m.data.length==m.selectionData.length&&(a=!0),a},set:function(a){e(a?"check-all":"check-null")}}),v=t((()=>{let a=!1;return m.selectionData.length>0&&m.selectionData.length<m.data.length&&(a=!0),a}));return(e,t)=>{const m=l("el-checkbox"),k=l("el-form");return s(),n("div",f,[c(m,{modelValue:o(b),"onUpdate:modelValue":t[0]||(t[0]=a=>i(b)?b.value=a:null),indeterminate:o(v),disabled:!a.data.length},{default:d((()=>[g])),_:1},8,["modelValue","indeterminate","disabled"]),a.selectionData.length?(s(),n("div",p,"已选 "+r(a.selectionData.length)+" 项",1)):u("v-if",!0),c(k,{disabled:!a.selectionData.length},{default:d((()=>[h(e.$slots,"default",{},void 0,!0)])),_:3},8,["disabled"])])}}}),[["__scopeId","data-v-76a9c8ac"]]);export{v as _};
