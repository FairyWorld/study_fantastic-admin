
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import a from"./index.0f920bb7.js";import e from"./index.f56c241f.js";import{_ as o,u as r}from"./index.2c18650f.js";import{g as s,z as t,r as n,L as b,aa as d,h as l,F as i,C as c,u as m,s as u,o as p,A as f,B as h}from"./vendor.9da56f98.js";import"./index.e6c79664.js";import"./index.45a1c72d.js";import"./index.81b49b23.js";const v=s({name:"Topbar"});var x=o(Object.assign(v,{setup(o){const s=r(),v=t((()=>{let a=[];return s.tabbar.enable&&a.push("tabbar"),("head"!==s.menu.menuMode||s.toolbar.enableSidebarCollapse||s.toolbar.enableBreadcrumb&&"filesystem"!==s.app.routeBaseOn)&&("only-head"!==s.menu.menuMode||s.toolbar.enableBreadcrumb&&"filesystem"!==s.app.routeBaseOn)&&a.push("toolbar"),s.topbar.switchTabbarAndToolbar&&a.reverse(),a}));const x=n(0);function j(){x.value=document.documentElement.scrollTop||document.body.scrollTop}return b((()=>{window.addEventListener("scroll",j)})),d((()=>{window.removeEventListener("scroll",j)})),(o,r)=>(p(),l("div",{class:u(["topbar-container",{"has-tabbar":m(v).includes("tabbar"),"has-toolbar":m(v).includes("toolbar"),fixed:m(s).topbar.fixed,shadow:!m(s).topbar.switchTabbarAndToolbar&&x.value}]),"data-fixed-calc-width":""},[(p(!0),l(i,null,c(m(v),(o=>(p(),f(h({tabbar:a,toolbar:e}[o]),{key:o})))),128))],2))}}),[["__scopeId","data-v-6a31d380"]]);export{x as default};
