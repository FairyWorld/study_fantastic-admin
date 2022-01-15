
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as i}from"./index.3b1c80c2.js";import{w as p,U as v,r as m,am as f,A as b,B as h,l as S,F as n,m as o,D as x,s as g,t as w,o as I,$ as B,Y as y}from"./vendor.e498156c.js";import{_ as k,u as j,c as C}from"./index.30c1a0d0.js";const c=t=>(g("data-v-0d3bd8c6"),t=t(),w(),t),N={class:"notfound"},R={class:"content"},V=c(()=>o("h1",null,"404",-1)),D=c(()=>o("div",{class:"desc"},"\u62B1\u6B49\uFF0C\u4F60\u8BBF\u95EE\u7684\u9875\u9762\u4E0D\u5B58\u5728",-1)),M={setup(t){const s=p(),r=v(),_=j(),u=C(),e=m({inter:null,countdown:5});f(()=>{clearInterval(e.value.inter)}),b(()=>{_.tabbar.enable&&u.remove(s.meta.activeMenu||s.fullPath),e.value.inter=setInterval(()=>{e.value.countdown--,e.value.countdown==0&&(clearInterval(e.value.inter),a())},1e3)});function a(){r.push("/")}return(T,A)=>{const d=i,l=h("el-button");return I(),S("div",N,[n(d,{name:"404"}),o("div",R,[V,D,n(l,{type:"primary",onClick:a},{default:x(()=>[B(y(e.value.countdown)+" \u79D2\u540E\uFF0C\u8FD4\u56DE\u9996\u9875",1)]),_:1})])])}}};var P=k(M,[["__scopeId","data-v-0d3bd8c6"]]);export{P as default};
