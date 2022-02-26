
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as d}from"./logo.96f1da49.js";import{_ as m,u as p}from"./index.a1178b85.js";import{g as f,r as n,z as g,A as h,w as v,u as r,s as k,l as y,o as t,h as l,j as i,t as b}from"./vendor.ee7254f0.js";const w=["src"],x={key:1},B=f({name:"Logo"}),C=Object.assign(B,{props:{showLogo:{type:Boolean,default:!0},showTitle:{type:Boolean,default:!0}},setup(o){const s=p(),a=n("Fantastic-admin \u4E13\u4E1A\u7248"),c=n(d),_=g(()=>{let e={};return s.dashboard.enable&&(e.name="dashboard"),e});return(e,L)=>{const u=y("router-link");return t(),h(u,{to:r(_),class:k(["title",{"is-link":r(s).dashboard.enable}]),title:a.value},{default:v(()=>[o.showLogo?(t(),l("img",{key:0,src:c.value,class:"logo"},null,8,w)):i("v-if",!0),o.showTitle?(t(),l("span",x,b(a.value),1)):i("v-if",!0)]),_:1},8,["to","class","title"])}}});var T=m(C,[["__scopeId","data-v-393366cd"]]);export{T as default};
