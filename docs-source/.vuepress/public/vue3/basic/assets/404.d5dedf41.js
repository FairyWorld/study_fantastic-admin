
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as u}from"./index.693bf817.js";import{D as l,F as d,a5 as p,o as i,r as v,b as f,G as m,g as n,H as o,f as h,L as b,M as I,Q as g,N as w}from"./vendor.a0579877.js";import{_ as x}from"./plugin-vue_export-helper.21dcd24c.js";const s=t=>(b("data-v-3bfb37ca"),t=t(),I(),t),y={class:"notfound"},B={class:"content"},k=s(()=>o("h1",null,"404",-1)),N=s(()=>o("div",{class:"desc"},"\u62B1\u6B49\uFF0C\u4F60\u8BBF\u95EE\u7684\u9875\u9762\u4E0D\u5B58\u5728",-1)),S={setup(t){const c=l(),e=d({inter:null,countdown:5});p(()=>{clearInterval(e.value.inter)}),i(()=>{e.value.inter=setInterval(()=>{e.value.countdown--,e.value.countdown==0&&(clearInterval(e.value.inter),a())},1e3)});function a(){c.push("/")}return(C,V)=>{const _=u,r=v("el-button");return f(),m("div",y,[n(_,{name:"404"}),o("div",B,[k,N,n(r,{type:"primary",onClick:a},{default:h(()=>[g(w(e.value.countdown)+" \u79D2\u540E\uFF0C\u8FD4\u56DE\u9996\u9875",1)]),_:1})])])}}};var R=x(S,[["__scopeId","data-v-3bfb37ca"]]);export{R as default};
