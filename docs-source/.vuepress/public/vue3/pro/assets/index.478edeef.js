
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import u from"./index.28e7ab96.js";import i from"./index.704d8ea9.js";import{_ as p,u as m}from"./index.62acde6f.js";import{g as _,z as f,r as v,L as T,aa as h,h as b,F as w,C as x,u as a,s as y,o as t,A as B,B as g}from"./vendor.ee7254f0.js";import"./index.859e882b.js";import"./index.7409b7ba.js";import"./index.265cc193.js";const C=_({name:"Topbar"}),A=Object.assign(C,{setup(S){const e=m(),r=f(()=>{let o=[];return e.tabbar.enable&&o.push("tabbar"),e.menu.menuMode==="head"&&!e.toolbar.enableSidebarCollapse&&(!e.toolbar.enableBreadcrumb||e.app.routeBaseOn==="filesystem")||e.menu.menuMode==="only-head"&&(!e.toolbar.enableBreadcrumb||e.app.routeBaseOn==="filesystem")||o.push("toolbar"),e.topbar.switchTabbarAndToolbar&&o.reverse(),o});function c(o){return{tabbar:u,toolbar:i}[o]}const n=v(0);T(()=>{window.addEventListener("scroll",s)}),h(()=>{window.removeEventListener("scroll",s)});function s(){n.value=document.documentElement.scrollTop||document.body.scrollTop}return(o,d)=>(t(),b("div",{class:y(["topbar-container",{"has-tabbar":a(r).includes("tabbar"),"has-toolbar":a(r).includes("toolbar"),fixed:a(e).topbar.fixed,shadow:!a(e).topbar.switchTabbarAndToolbar&&n.value}]),"data-fixed-calc-width":""},[(t(!0),b(w,null,x(a(r),l=>(t(),B(g(c(l)),{key:l}))),128))],2))}});var j=p(A,[["__scopeId","data-v-6a31d380"]]);export{j as default};
