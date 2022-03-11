
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{i as e,j as s,u as a,k as o,g as l,q as n,l as u,e as t,r as i,f as d,$ as m,F as r,x as p,b as c}from"./vendor.9748e354.js";import b from"./index.49c1e212.js";import f from"./index.44c78419.js";import{_ as g,u as h,d as v}from"./index.d5f01412.js";import"./logo.96f1da49.js";import"./index.2247f9f8.js";const M=e({name:"SubSidebar"});var j=g(Object.assign(M,{setup(e){const g=h(),M=v(),j=s(0);function x(e){j.value=e.target.scrollTop}return(e,s)=>{const h=i("el-menu");return["side","head","single"].includes(a(g).menu.menuMode)||"mobile"===a(g).mode?(d(),o("div",{key:0,class:n(["sub-sidebar-container",{"is-collapse":"pc"===a(g).mode&&a(g).menu.subMenuCollapse}]),onScroll:x},[l(b,{"show-logo":"single"===a(g).menu.menuMode,class:n({"sidebar-logo":!0,"sidebar-logo-bg":"single"===a(g).menu.menuMode,shadow:j.value})},null,8,["show-logo","class"]),u(" 侧边栏模式（无主导航） "),l(h,{"unique-opened":a(g).menu.subMenuUniqueOpened,"default-openeds":a(M).defaultOpenedPaths,"default-active":e.$route.meta.activeMenu||e.$route.path,collapse:"pc"===a(g).mode&&a(g).menu.subMenuCollapse,"collapse-transition":!1,class:n({"is-collapse-without-logo":"single"!==a(g).menu.menuMode&&a(g).menu.subMenuCollapse})},{default:t((()=>[l(m,{name:"sub-sidebar"},{default:t((()=>[(d(!0),o(r,null,p(a(M).sidebarMenus,((e,s)=>(d(),o(r,null,[!1!==e.meta.sidebar?(d(),c(f,{key:e.path||s,item:e,"base-path":e.path},null,8,["item","base-path"])):u("v-if",!0)],64)))),256))])),_:1})])),_:1},8,["unique-opened","default-openeds","default-active","collapse","class"])],34)):u("v-if",!0)}}}),[["__scopeId","data-v-5a90aac3"]]);export{j as default};
