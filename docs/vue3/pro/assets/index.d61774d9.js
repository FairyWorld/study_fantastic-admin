
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import a from"./index.4e1d2da5.js";import e from"./index.4b53513c.js";import{_ as o,d as r,u as s,D as t,r as d,o as n,W as b,c as l,H as i,G as c,g as u,O as m,q as p,h as f,R as h}from"./index.afdde410.js";import"./index.84fd3979.js";import"./index.112bf8bc.js";import"./index.d803d774.js";const x=r({name:"Topbar"});var v=o(Object.assign(x,{setup(o){const r=s(),x=t((()=>{let a=[];return r.tabbar.enable&&a.push("tabbar"),("head"!==r.menu.menuMode||r.toolbar.enableSidebarCollapse||r.toolbar.enableBreadcrumb&&"filesystem"!==r.app.routeBaseOn)&&("only-head"!==r.menu.menuMode||r.toolbar.enableBreadcrumb&&"filesystem"!==r.app.routeBaseOn)&&a.push("toolbar"),r.topbar.switchTabbarAndToolbar&&a.reverse(),a}));const v=d(0);function w(){v.value=document.documentElement.scrollTop||document.body.scrollTop}return n((()=>{window.addEventListener("scroll",w)})),b((()=>{window.removeEventListener("scroll",w)})),(o,s)=>(p(),l("div",{class:m(["topbar-container",{"has-tabbar":u(x).includes("tabbar"),"has-toolbar":u(x).includes("toolbar"),fixed:u(r).topbar.fixed,shadow:!u(r).topbar.switchTabbarAndToolbar&&v.value}]),"data-fixed-calc-width":""},[(p(!0),l(i,null,c(u(x),(o=>(p(),f(h({tabbar:a,toolbar:e}[o]),{key:o})))),128))],2))}}),[["__scopeId","data-v-6a31d380"]]);export{v as default};
