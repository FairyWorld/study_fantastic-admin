
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as i}from"./index.2445da7e.js";import{r as p,am as v,y as m,l as f,F as n,m as o,A as h,s as b,t as S,B as g,X as I,D as w,o as x,$ as y,Y as B}from"./vendor.bcd7a662.js";import{_ as k,u as C,c as N}from"./index.64e7900a.js";const c=t=>(b("data-v-7647ad94"),t=t(),S(),t),R={class:"notfound"},V={class:"content"},D=c(()=>o("h1",null,"404",-1)),M=c(()=>o("div",{class:"desc"},"\u62B1\u6B49\uFF0C\u4F60\u8BBF\u95EE\u7684\u9875\u9762\u4E0D\u5B58\u5728",-1)),T={setup(t){const a=g(),r=I(),_=C(),u=N(),e=p({inter:null,countdown:5});v(()=>{clearInterval(e.value.inter)}),m(()=>{_.tabbar.enable&&u.remove(a.meta.activeMenu||a.fullPath),e.value.inter=setInterval(()=>{e.value.countdown--,e.value.countdown==0&&(clearInterval(e.value.inter),s())},1e3)});function s(){r.push("/")}return(A,E)=>{const l=i,d=w("el-button");return x(),f("div",R,[n(l,{name:"404"}),o("div",V,[D,M,n(d,{type:"primary",onClick:s},{default:h(()=>[y(B(e.value.countdown)+" \u79D2\u540E\uFF0C\u8FD4\u56DE\u9996\u9875",1)]),_:1})])])}}};var X=k(T,[["__scopeId","data-v-7647ad94"]]);export{X as default};
