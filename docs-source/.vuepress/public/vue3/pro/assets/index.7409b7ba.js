
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{g as w,M as C,z as b,a6 as S,l as s,u as l,o as r,A as c,w as n,q as k,h as y,C as I,y as x,t as L,F as N,m as T,j as h,O as j}from"./vendor.ee7254f0.js";import{u as B,g as V}from"./index.62acde6f.js";const v=w({name:"I18nSelector"}),O=Object.assign(v,{setup(z){const{proxy:d}=j(),o=C(),e=B(),m=b(()=>V()),u=S("generateI18nTitle");function i(t){d.$i18n.locale=t,e.setDefaultLang(t),o.meta.title&&e.setTitle(u(o.meta.i18n,o.meta.title))}return(t,D)=>{const p=s("el-dropdown-item"),_=s("el-dropdown-menu"),g=s("el-dropdown");return l(e).toolbar.enableI18n?(r(),c(g,{key:0,class:"language-container",size:"default",onCommand:i},{dropdown:n(()=>[k(_,null,{default:n(()=>[(r(!0),y(N,null,I(l(m),(a,f)=>(r(),c(p,{key:f,disabled:l(e).app.defaultLang===a.name,command:a.name},{default:n(()=>[x(L(a.labelName),1)]),_:2},1032,["disabled","command"]))),128))]),_:1})]),default:n(()=>[T(t.$slots,"default")]),_:3})):h("v-if",!0)}}});export{O as _};
