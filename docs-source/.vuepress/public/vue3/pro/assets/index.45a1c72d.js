
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{g as a,M as e,z as s,a6 as n,l as t,u as l,o,A as d,w as m,q as r,h as i,C as u,y as f,t as c,F as p,m as g,j as b,O as w}from"./vendor.9da56f98.js";import{u as j,g as y}from"./index.2c18650f.js";const _=a({name:"I18nSelector"}),x=Object.assign(_,{setup(a){const{proxy:_}=w(),x=e(),I=j(),k=s((()=>y())),v=n("generateI18nTitle");function z(a){_.$i18n.locale=a,I.setDefaultLang(a),x.meta.title&&I.setTitle(v(x.meta.i18n,x.meta.title))}return(a,e)=>{const s=t("el-dropdown-item"),n=t("el-dropdown-menu"),w=t("el-dropdown");return l(I).toolbar.enableI18n?(o(),d(w,{key:0,class:"language-container",size:"default",onCommand:z},{dropdown:m((()=>[r(n,null,{default:m((()=>[(o(!0),i(p,null,u(l(k),((a,e)=>(o(),d(s,{key:e,disabled:l(I).app.defaultLang===a.name,command:a.name},{default:m((()=>[f(c(a.labelName),1)])),_:2},1032,["disabled","command"])))),128))])),_:1})])),default:m((()=>[g(a.$slots,"default")])),_:3})):b("v-if",!0)}}});export{x as _};
