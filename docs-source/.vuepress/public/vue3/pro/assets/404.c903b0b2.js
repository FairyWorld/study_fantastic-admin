
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as i}from"./index.d8082210.js";import{r as p,am as v,y as m,l as f,F as n,m as o,A as b,s as h,t as S,B as x,X as g,D as I,o as w,$ as y,Y as B}from"./vendor.7ef8ea63.js";import{_ as k,u as j,c as C}from"./index.c053a834.js";const c=t=>(h("data-v-0d3bd8c6"),t=t(),S(),t),N={class:"notfound"},R={class:"content"},V=c(()=>o("h1",null,"404",-1)),D=c(()=>o("div",{class:"desc"},"\u62B1\u6B49\uFF0C\u4F60\u8BBF\u95EE\u7684\u9875\u9762\u4E0D\u5B58\u5728",-1)),M={setup(t){const a=x(),r=g(),_=j(),u=C(),e=p({inter:null,countdown:5});v(()=>{clearInterval(e.value.inter)}),m(()=>{_.tabbar.enable&&u.remove(a.meta.activeMenu||a.fullPath),e.value.inter=setInterval(()=>{e.value.countdown--,e.value.countdown==0&&(clearInterval(e.value.inter),s())},1e3)});function s(){r.push("/")}return(T,A)=>{const d=i,l=I("el-button");return w(),f("div",N,[n(d,{name:"404"}),o("div",R,[V,D,n(l,{type:"primary",onClick:s},{default:b(()=>[y(B(e.value.countdown)+" \u79D2\u540E\uFF0C\u8FD4\u56DE\u9996\u9875",1)]),_:1})])])}}};var P=k(M,[["__scopeId","data-v-0d3bd8c6"]]);export{P as default};
