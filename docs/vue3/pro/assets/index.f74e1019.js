
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as p}from"./index.5e4942ca.js";import{w as o,D as c,o as d,l as i,F as r,A as u,k as _,ag as k,Y as v,q as b,a4 as x,$ as D}from"./vendor.7ef8ea63.js";const y={class:"batch-action-bar"},V=D("\u5F53\u9875\u5168\u9009"),A={key:0,class:"tips"},C={props:{data:{type:Array,default:()=>[]},selectionData:{type:Array,default:()=>[]}},emits:["check-all","check-null"],setup(a,{emit:l}){const t=a,n=o({get:function(){let e=!1;return t.data.length!=0&&t.data.length==t.selectionData.length&&(e=!0),e},set:function(e){l(e?"check-all":"check-null")}}),f=o(()=>{let e=!1;return t.selectionData.length>0&&t.selectionData.length<t.data.length&&(e=!0),e});return(e,s)=>{const h=c("el-checkbox"),m=c("el-form");return d(),i("div",y,[r(h,{modelValue:_(n),"onUpdate:modelValue":s[0]||(s[0]=g=>k(n)?n.value=g:null),indeterminate:_(f),disabled:!a.data.length},{default:u(()=>[V]),_:1},8,["modelValue","indeterminate","disabled"]),a.selectionData.length?(d(),i("div",A,"\u5DF2\u9009 "+v(a.selectionData.length)+" \u9879",1)):b("v-if",!0),r(m,{disabled:!a.selectionData.length},{default:u(()=>[x(e.$slots,"default",{},void 0,!0)]),_:3},8,["disabled"])])}}};var w=p(C,[["__scopeId","data-v-9d2c1ba8"]]);export{w as _};
