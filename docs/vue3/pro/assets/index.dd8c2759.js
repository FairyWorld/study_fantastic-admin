
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as p}from"./index.64e7900a.js";import{j as k,w as s,D as c,o as d,l as i,F as r,A as u,k as _,ag as v,Y as b,q as D,a4 as x,$ as y}from"./vendor.bcd7a662.js";const V={class:"batch-action-bar"},A=y("\u5F53\u9875\u5168\u9009"),B={key:0,class:"tips"},C=k({name:"BatchActionBar"}),N=Object.assign(C,{props:{data:{type:Array,default:()=>[]},selectionData:{type:Array,default:()=>[]}},emits:["check-all","check-null"],setup(a,{emit:l}){const t=a,n=s({get:function(){let e=!1;return t.data.length!=0&&t.data.length==t.selectionData.length&&(e=!0),e},set:function(e){l(e?"check-all":"check-null")}}),f=s(()=>{let e=!1;return t.selectionData.length>0&&t.selectionData.length<t.data.length&&(e=!0),e});return(e,o)=>{const m=c("el-checkbox"),h=c("el-form");return d(),i("div",V,[r(m,{modelValue:_(n),"onUpdate:modelValue":o[0]||(o[0]=g=>v(n)?n.value=g:null),indeterminate:_(f),disabled:!a.data.length},{default:u(()=>[A]),_:1},8,["modelValue","indeterminate","disabled"]),a.selectionData.length?(d(),i("div",B,"\u5DF2\u9009 "+b(a.selectionData.length)+" \u9879",1)):D("v-if",!0),r(h,{disabled:!a.selectionData.length},{default:u(()=>[x(e.$slots,"default",{},void 0,!0)]),_:3},8,["disabled"])])}}});var I=p(N,[["__scopeId","data-v-95c1592a"]]);export{I as _};
