
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{d as a,_ as e,D as t,n as l,q as s,c as n,b as c,w as d,g as i,aa as o,t as r,i as u,I as h,z as g}from"./index.80ead521.js";const m={class:"batch-action-bar"},f=g("当页全选"),p={key:0,class:"tips"},b=a({name:"BatchActionBar"});var D=e(Object.assign(b,{props:{data:{type:Array,default:()=>[]},selectionData:{type:Array,default:()=>[]}},emits:["check-all","check-null"],setup(a,{emit:e}){const g=a,b=t({get:function(){let a=!1;return 0!=g.data.length&&g.data.length==g.selectionData.length&&(a=!0),a},set:function(a){e(a?"check-all":"check-null")}}),D=t((()=>{let a=!1;return g.selectionData.length>0&&g.selectionData.length<g.data.length&&(a=!0),a}));return(e,t)=>{const g=l("el-checkbox"),v=l("el-form");return s(),n("div",m,[c(g,{modelValue:i(b),"onUpdate:modelValue":t[0]||(t[0]=a=>o(b)?b.value=a:null),indeterminate:i(D),disabled:!a.data.length},{default:d((()=>[f])),_:1},8,["modelValue","indeterminate","disabled"]),a.selectionData.length?(s(),n("div",p,"已选 "+r(a.selectionData.length)+" 项",1)):u("v-if",!0),c(v,{disabled:!a.selectionData.length},{default:d((()=>[h(e.$slots,"default",{},void 0,!0)])),_:3},8,["disabled"])])}}}),[["__scopeId","data-v-95c1592a"]]);export{D as _};
