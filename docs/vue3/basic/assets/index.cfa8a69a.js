
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as d}from"./logo.96f1da49.js";import{_ as m,u as p}from"./index.4b131b6e.js";import{i as f,j as n,a as g,b as h,e as v,u as r,q as k,r as b,f as t,k as l,l as i,t as y}from"./vendor.7c7b0e52.js";const x=["src"],w={key:1},B=f({name:"Logo"}),C=Object.assign(B,{props:{showLogo:{type:Boolean,default:!0},showTitle:{type:Boolean,default:!0}},setup(o){const s=p(),a=n("Fantastic-admin \u57FA\u7840\u7248"),c=n(d),_=g(()=>{let e={};return s.dashboard.enable&&(e.name="dashboard"),e});return(e,L)=>{const u=b("router-link");return t(),h(u,{to:r(_),class:k(["title",{"is-link":r(s).dashboard.enable}]),title:a.value},{default:v(()=>[o.showLogo?(t(),l("img",{key:0,src:c.value,class:"logo"},null,8,x)):i("v-if",!0),o.showTitle?(t(),l("span",w,y(a.value),1)):i("v-if",!0)]),_:1},8,["to","class","title"])}}});var q=m(C,[["__scopeId","data-v-4b89d089"]]);export{q as default};
