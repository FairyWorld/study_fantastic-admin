
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as e}from"./index.a4433086.js";import{_ as a,d as s,u as o,E as i,F as t,B as n,G as d,o as r,c as m,b as l,e as p,H as u,g as b,D as c,h as f,i as h,f as v,A as j,l as x,m as y,I as g,n as M,q as C,T as k,C as w,K as _,J as P}from"./index.fc479745.js";import D from"./index.c0aebe5a.js";import F from"./index.6400acb8.js";import S from"./index.b252e4f9.js";import q from"./index.85a1447a.js";import A from"./index.e2ef3e8b.js";import B from"./index.4980e19b.js";import L from"./index.45b94afd.js";import"./index.8e17ce0a.js";import"./index.036f9088.js";import"./logo.96f1da49.js";import"./index.fe220f5b.js";import"./index.b5d3856f.js";const $={class:"layout"},I={id:"app-main"},J={class:"wrapper"},E={class:"main"},G=s({name:"Layout"});var H=a(Object.assign(G,{setup(a){const{proxy:s}=j(),G=x(),H=y(),K=o(),O=i(),R=t(),T=n((()=>void 0!==G.meta.copyright?G.meta.copyright:K.copyright.enable));function z(){H.push({name:"reload"})}return d((()=>K.menu.subMenuCollapse),(e=>{"mobile"===K.mode&&(e?document.querySelector("body").classList.remove("hidden"):document.querySelector("body").classList.add("hidden"))})),d((()=>G.path),(()=>{"mobile"===K.mode&&K.$patch((e=>{e.menu.subMenuCollapse=!0}))})),r((()=>{s.$hotkeys("f5",(e=>{K.topbar.enablePageReload&&(e.preventDefault(),z())}))})),g("reload",z),g("switchMenu",(function(e){R.setActived(e),K.menu.switchMainMenuAndPageJump&&(P(R.sidebarMenusFirstDeepestPath)?window.open(R.sidebarMenusFirstDeepestPath,"_blank"):H.push(R.sidebarMenusFirstDeepestPath))})),(a,s)=>{const o=M("router-view"),i=e,t=M("el-backtop");return C(),m("div",$,[l("div",I,[p(D),l("div",J,[l("div",{class:u(["sidebar-container",{show:"mobile"===b(K).mode&&!b(K).menu.subMenuCollapse}])},[p(F),p(S)],2),l("div",{class:u(["sidebar-mask",{show:"mobile"===b(K).mode&&!b(K).menu.subMenuCollapse}]),onClick:s[0]||(s[0]=e=>b(K).toggleSidebarCollapse())},null,2),l("div",{class:"main-container",style:c({"padding-bottom":a.$route.meta.paddingBottom})},["head"!==b(K).menu.menuMode||b(K).topbar.enableSidebarCollapse||b(K).topbar.enableBreadcrumb?(C(),f(q,{key:0})):h("v-if",!0),l("div",E,[p(o,null,{default:v((({Component:e,route:a})=>[p(k,{name:"main",mode:"out-in",appear:""},{default:v((()=>[(C(),f(_,{include:[...b(O).list]},[(C(),f(w(e),{key:a.fullPath}))],1032,["include"]))])),_:2},1024)])),_:1})]),b(T)?(C(),f(i,{key:1})):h("v-if",!0)],4)]),p(t,{right:20,bottom:20,title:"回到顶部"})]),p(A),p(B),p(L)])}}}),[["__scopeId","data-v-291f4ae9"]]);export{H as default};
