
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as ke}from"./index.496f257d.js";import{F as j,a as M,r as k,b as a,e as S,f as d,G as h,K as b,N,u as e,T as I,U as ue,D as pe,V as Se,H as n,g as t,Q as c,L as ee,M as te,W as F,X as z,Y as re,Z as ve,C as ce,o as Z,_ as we,$ as xe,w as ne,P as oe,O as ae,a0 as he,B as se,a1 as R,a2 as be,n as Ce,S as Ve,a3 as Te}from"./vendor.42421442.js";import{_ as J}from"./index.453bc986.js";import{_ as Pe}from"./logo.96f1da49.js";import{u as H,a as qe,b as Y,r as G,i as Q,d as le,c as Me}from"./index.755d79d0.js";import{_ as E}from"./plugin-vue_export-helper.21dcd24c.js";const Be=["src"],Ue={key:1},Ie={props:{showLogo:{type:Boolean,default:!0},showTitle:{type:Boolean,default:!0}},setup(l){const i=H(),m=j("Fantastic-admin \u57FA\u7840\u7248"),o=j(Pe),r=M(()=>{let p={};return i.enableDashboard&&(p.name="dashboard"),p});return(p,g)=>{const s=k("router-link");return a(),S(s,{to:e(r),class:I(["title",{"is-link":e(i).enableDashboard}]),title:m.value},{default:d(()=>[l.showLogo?(a(),h("img",{key:0,src:o.value,class:"logo"},null,8,Be)):b("v-if",!0),l.showTitle?(a(),h("span",Ue,N(m.value),1)):b("v-if",!0)]),_:1},8,["to","class","title"])}}};var me=E(Ie,[["__scopeId","data-v-37890878"]]);const Le=l=>(ee("data-v-129bc5ba"),l=l(),te(),l),De={class:"tools"},Fe={class:"buttons"},Re=Le(()=>n("span",{class:"title"},"\u67E5\u770B\u4E13\u4E1A\u7248",-1)),Ae={class:"user-wrapper"},Ne=c("\u63A7\u5236\u53F0"),Oe=c("\u4E2A\u4EBA\u8BBE\u7F6E"),je=c("\u9000\u51FA\u767B\u5F55"),Ee={setup(l){const i=ue("reload"),m=pe(),o=H(),r=qe(),{isFullscreen:p,toggle:g}=Se();function s(x){switch(x){case"dashboard":m.push({name:"dashboard"});break;case"setting":m.push({name:"personalSetting"});break;case"logout":r.logout().then(()=>{m.push({name:"login"})});break}}function _(){window.open(`https://hooray.${location.origin.includes("gitee")?"gitee":"github"}.io/fantastic-admin/vue3/pro`,"top")}return(x,w)=>{const V=J,U=k("el-icon-user-filled"),T=k("el-icon"),C=k("el-avatar"),$=k("el-icon-caret-bottom"),u=k("el-dropdown-item"),P=k("el-dropdown-menu"),q=k("el-dropdown");return a(),h("div",De,[n("div",Fe,[e(o).mode=="pc"?(a(),h("span",{key:0,class:"item item-pro",onClick:_},[t(V,{name:"pro"}),Re])):b("v-if",!0),e(o).enableNavSearch?(a(),h("span",{key:1,class:"item",onClick:w[0]||(w[0]=L=>x.$eventBus.emit("global-search-toggle"))},[t(V,{name:"search"})])):b("v-if",!0),e(o).mode==="pc"&&e(o).enableFullscreen?(a(),h("span",{key:2,class:"item",onClick:w[1]||(w[1]=(...L)=>e(g)&&e(g)(...L))},[t(V,{name:e(p)?"fullscreen-exit":"fullscreen"},null,8,["name"])])):b("v-if",!0),e(o).enablePageReload?(a(),h("span",{key:3,class:"item",onClick:w[2]||(w[2]=L=>e(i)())},[t(V,{name:"toolbar-reload"})])):b("v-if",!0),e(o).enableThemeSetting?(a(),h("span",{key:4,class:"item",onClick:w[3]||(w[3]=L=>x.$eventBus.emit("global-theme-toggle"))},[t(V,{name:"toolbar-theme"})])):b("v-if",!0)]),t(q,{class:"user-container",size:"default",onCommand:s},{dropdown:d(()=>[t(P,{class:"user-dropdown"},{default:d(()=>[e(o).enableDashboard?(a(),S(u,{key:0,command:"dashboard"},{default:d(()=>[Ne]),_:1})):b("v-if",!0),t(u,{command:"setting"},{default:d(()=>[Oe]),_:1}),t(u,{divided:"",command:"logout"},{default:d(()=>[je]),_:1})]),_:1})]),default:d(()=>[n("div",Ae,[t(C,{size:"small"},{default:d(()=>[t(T,null,{default:d(()=>[t(U)]),_:1})]),_:1}),c(" "+N(e(r).account)+" ",1),t(T,null,{default:d(()=>[t($)]),_:1})])]),_:1})])}}};var fe=E(Ee,[["__scopeId","data-v-129bc5ba"]]);const ze={key:0},He={class:"header-container"},Ke={class:"main"},Je={class:"nav"},Ge=["onClick"],Qe={key:1},Ye={setup(l){const i=H(),m=Y(),o=ue("switchMenu");return(r,p)=>{const g=J;return a(),S(re,{name:"header"},{default:d(()=>[e(i).mode==="pc"&&e(i).menuMode==="head"?(a(),h("header",ze,[n("div",He,[n("div",Ke,[t(me),b(" \u9876\u90E8\u6A21\u5F0F "),n("div",Je,[(a(!0),h(F,null,z(e(m).transformRoutes,(s,_)=>(a(),h(F,null,[s.children&&s.children.length!==0?(a(),h("div",{key:_,class:I(["item",{active:_==e(m).headerActived}]),onClick:x=>e(o)(_)},[s.meta.icon?(a(),S(g,{key:0,name:s.meta.icon},null,8,["name"])):b("v-if",!0),s.meta.title?(a(),h("span",Qe,N(s.meta.title),1)):b("v-if",!0)],10,Ge)):b("v-if",!0)],64))),256))])]),t(fe)])])):b("v-if",!0)]),_:1})}}};var We=E(Ye,[["__scopeId","data-v-9a7f4e84"]]);const Ze={key:0,class:"main-sidebar-container"},Xe={class:"nav"},et=["title","onClick"],tt={setup(l){const i=H(),m=Y(),o=ue("switchMenu");return(r,p)=>{const g=J;return a(),S(re,{name:"main-sidebar"},{default:d(()=>[e(i).menuMode==="side"||e(i).mode==="mobile"&&e(i).menuMode!=="single"?(a(),h("div",Ze,[t(me,{"show-title":!1,class:"sidebar-logo"}),b(" \u4FA7\u8FB9\u680F\u6A21\u5F0F\uFF08\u542B\u4E3B\u5BFC\u822A\uFF09 "),n("div",Xe,[(a(!0),h(F,null,z(e(m).transformRoutes,(s,_)=>(a(),h(F,null,[s.children&&s.children.length!==0?(a(),h("div",{key:_,class:I({item:!0,active:_===e(m).headerActived}),title:s.meta.title,onClick:x=>e(o)(_)},[s.meta.icon?(a(),S(g,{key:0,name:s.meta.icon},null,8,["name"])):b("v-if",!0),n("span",null,N(s.meta.title),1)],10,et)):b("v-if",!0)],64))),256))])])):b("v-if",!0)]),_:1})}}};var nt=E(tt,[["__scopeId","data-v-58263d93"]]);const ot={key:0,class:"sidebar-item"},at={class:"title"},st=["href","target","onClick"],lt={class:"title"},it={class:"title"},dt={props:{item:{type:Object,required:!0},basePath:{type:String,default:""}},setup(l){const i=l,m=M(()=>{let o=!0;return i.item.children?i.item.children.every(r=>r.meta.sidebar===!1)&&(o=!1):o=!1,o});return(o,r)=>{const p=J,g=k("el-sub-menu"),s=k("el-menu-item"),_=k("router-link");return l.item.meta.sidebar!==!1?(a(),h("div",ot,[l.item.path==null?(a(),S(g,{key:0,title:l.item.meta.title,index:JSON.stringify(l.item)},{title:d(()=>[l.item.meta.icon?(a(),S(p,{key:0,name:l.item.meta.icon},null,8,["name"])):b("v-if",!0),n("span",at,N(l.item.meta.title),1)]),default:d(()=>[(a(!0),h(F,null,z(l.item.children,x=>(a(),S(_e,{key:x.path,item:x},null,8,["item"]))),128))]),_:1},8,["title","index"])):e(m)?(a(),S(g,{key:2,title:l.item.meta.title,index:e(G)(l.basePath,l.item.path)},{title:d(()=>[l.item.meta.icon?(a(),S(p,{key:0,name:l.item.meta.icon},null,8,["name"])):b("v-if",!0),n("span",it,N(l.item.meta.title),1)]),default:d(()=>[(a(!0),h(F,null,z(l.item.children,x=>(a(),S(_e,{key:x.path,item:x,"base-path":e(G)(l.basePath,l.item.path)},null,8,["item","base-path"]))),128))]),_:1},8,["title","index"])):(a(),S(_,{key:1,custom:"",to:e(G)(l.basePath,l.item.path)},{default:d(({href:x,navigate:w,isActive:V,isExactActive:U})=>[n("a",{href:e(Q)(e(G)(l.basePath,l.item.path))?e(G)(l.basePath,l.item.path):x,class:I([V&&"router-link-active",U&&"router-link-exact-active"]),target:e(Q)(e(G)(l.basePath,l.item.path))?"_blank":"_self",onClick:w},[t(s,{title:l.item.meta.title,index:e(G)(l.basePath,l.item.path)},{default:d(()=>[l.item.meta.icon?(a(),S(p,{key:0,name:l.item.meta.icon},null,8,["name"])):b("v-if",!0),n("span",lt,N(l.item.meta.title),1)]),_:1},8,["title","index"])],10,st)]),_:1},8,["to"]))])):b("v-if",!0)}}};var _e=E(dt,[["__scopeId","data-v-52ac635b"]]);const ut={setup(l){const i=H(),m=Y(),o=j(0);function r(p){o.value=p.target.scrollTop}return(p,g)=>{const s=k("el-menu");return["side","head","single"].includes(e(i).menuMode)||e(i).mode==="mobile"?(a(),h("div",{key:0,class:I(["sub-sidebar-container",{"is-collapse":e(i).mode==="pc"&&e(i).sidebarCollapse}]),onScroll:r},[t(me,{"show-logo":e(i).menuMode==="single",class:I({"sidebar-logo":!0,"sidebar-logo-bg":e(i).menuMode==="single",shadow:o.value})},null,8,["show-logo","class"]),b(" \u4FA7\u8FB9\u680F\u6A21\u5F0F\uFF08\u65E0\u4E3B\u5BFC\u822A\uFF09 "),t(s,{"unique-opened":e(i).sidebarUniqueOpened,"default-openeds":e(m).defaultOpenedPaths,"default-active":p.$route.meta.activeMenu||p.$route.path,collapse:e(i).mode==="pc"&&e(i).sidebarCollapse,"collapse-transition":!1,class:I({"is-collapse-without-logo":e(i).menuMode!=="single"&&e(i).sidebarCollapse})},{default:d(()=>[t(ve,{name:"sub-sidebar"},{default:d(()=>[(a(!0),h(F,null,z(e(m).sidebarRoutes,_=>(a(),h(F,null,[_.meta.sidebar!==!1?(a(),S(_e,{key:_.path,item:_,"base-path":_.path},null,8,["item","base-path"])):b("v-if",!0)],64))),256))]),_:1})]),_:1},8,["unique-opened","default-openeds","default-active","collapse","class"])],34)):b("v-if",!0)}}};var rt=E(ut,[["__scopeId","data-v-71e783e2"]]);const ct={class:"left-box"},mt={setup(l){const i=ce(),m=H(),o=M(()=>m.mode==="mobile"||["side","head","single"].includes(m.menuMode)&&m.enableSidebarCollapse),r=M(()=>{let _=[];return m.enableDashboard&&_.push({path:"/dashboard",title:m.dashboardTitle}),i.meta.breadcrumbNeste&&_.push(...le(i.meta.breadcrumbNeste)),_}),p=j(0);Z(()=>{window.addEventListener("scroll",g)}),we(()=>{window.removeEventListener("scroll",g)});function g(){p.value=document.documentElement.scrollTop||document.body.scrollTop}function s(_){return xe(_)(i.params)}return(_,x)=>{const w=J,V=k("el-breadcrumb-item"),U=k("el-breadcrumb");return a(),h("div",{class:I(["topbar-container",{fixed:e(m).topbarFixed,shadow:p.value}]),"data-fixed-calc-width":""},[n("div",ct,[e(o)?(a(),h("div",{key:0,class:I(["sidebar-collapse",{"is-collapse":e(m).sidebarCollapse}]),onClick:x[0]||(x[0]=T=>e(m).toggleSidebarCollapse())},[t(w,{name:"toolbar-collapse"})],2)):b("v-if",!0),e(m).enableBreadcrumb&&e(m).mode==="pc"?(a(),S(U,{key:1,"separator-class":"el-icon-arrow-right"},{default:d(()=>[t(ve,{name:"breadcrumb"},{default:d(()=>[(a(!0),h(F,null,z(e(r),(T,C)=>(a(),h(F,null,[C<e(r).length-1?(a(),S(V,{key:T.path,to:s(T.path)},{default:d(()=>[c(N(T.title),1)]),_:2},1032,["to"])):(a(),S(V,{key:T.path},{default:d(()=>[c(N(T.title),1)]),_:2},1024))],64))),256))]),_:1})]),_:1})):b("v-if",!0)]),t(fe)],2)}}};var _t=E(mt,[["__scopeId","data-v-33a31715"]]);const ge=l=>(ee("data-v-7e49eb23"),l=l(),te(),l),pt={class:"container"},vt={key:0,class:"tips"},ht=ge(()=>n("div",{class:"tip"},[n("span",null,"Alt"),c("+"),n("span",null,"S"),c(" \u5524\u9192\u641C\u7D22\u9762\u677F ")],-1)),bt={class:"tip"},ft=c(" \u5207\u6362\u641C\u7D22\u7ED3\u679C "),gt={class:"tip"},yt=c(" \u8BBF\u95EE\u9875\u9762 "),$t=ge(()=>n("div",{class:"tip"},[n("span",null,"ESC"),c(" \u9000\u51FA ")],-1)),kt=["href","target","onClick","onMouseover"],St={class:"icon"},wt={class:"info"},xt={class:"title"},Ct={class:"breadcrumb"},Vt={class:"path"},Tt={setup(l){const{proxy:i}=se(),m=H(),o=Y(),r=j(!1),p=j(""),g=j([]),s=j(-1),_=M(()=>{let $=[];return $=g.value.filter(u=>{let P=!1;return u.title.indexOf(p.value)>=0&&(P=!0),u.path.indexOf(p.value)>=0&&(P=!0),u.breadcrumb.some(q=>q.indexOf(p.value)>=0)&&(P=!0),P}),$});ne(()=>r.value,$=>{$?(document.querySelector("body").classList.add("hidden"),i.$refs.search.scrollTop=0,i.$hotkeys("up",V),i.$hotkeys("down",U),i.$hotkeys("enter",T),setTimeout(()=>{i.$refs.input.$el.children[0].focus()},100)):(document.querySelector("body").classList.remove("hidden"),i.$hotkeys.unbind("up",V),i.$hotkeys.unbind("down",U),i.$hotkeys.unbind("enter",T),setTimeout(()=>{p.value="",s.value=-1},500))}),ne(()=>_.value,()=>{s.value=-1,C(0)}),Z(()=>{i.$eventBus.on("global-search-toggle",()=>{r.value=!r.value}),i.$hotkeys("alt+s",$=>{m.enableNavSearch&&($.preventDefault(),r.value=!0)}),o.routes.map($=>{w($.children)})});function x($){let u=!0;return $.children?$.children.every(P=>P.meta.sidebar===!1)&&(u=!1):u=!1,u}function w($){$.map(u=>{if(u.meta.sidebar!==!1)if(x(u)){let P=u.meta.baseBreadcrumb?le(u.meta.baseBreadcrumb):[];P.push(u.meta.title);let q=le(u.children);q.map(L=>{L.meta.baseIcon=u.meta.icon||u.meta.baseIcon,L.meta.baseBreadcrumb=P,L.meta.basePath=u.meta.basePath?[u.meta.basePath,u.path].join("/"):u.path}),w(q)}else{let P=[];u.meta.baseBreadcrumb&&(P=le(u.meta.baseBreadcrumb)),P.push(u.meta.title);let q="";Q(u.path)?q=u.path:q=u.meta.basePath?[u.meta.basePath,u.path].join("/"):u.path,g.value.push({icon:u.meta.icon||u.meta.baseIcon,title:u.meta.title,i18n:u.meta.i18n,breadcrumb:P,path:q,isExternalLink:Q(u.path)})}})}function V(){_.value.length&&(s.value-=1,s.value<0&&(s.value=_.value.length-1),C(i.$refs[`search-item-${s.value}`][0].offsetTop))}function U(){_.value.length&&(s.value+=1,s.value>_.value.length-1&&(s.value=0),C(i.$refs[`search-item-${s.value}`][0].offsetTop))}function T(){s.value!==-1&&i.$refs[`search-item-${s.value}`][0].click()}function C($){s.value!==-1&&($+i.$refs[`search-item-${s.value}`][0].clientHeight>i.$refs.search.scrollTop+i.$refs.search.clientHeight||$+i.$refs[`search-item-${s.value}`][0].clientHeight<=i.$refs.search.scrollTop)&&i.$refs.search.scrollTo({top:$,behavior:"smooth"})}return($,u)=>{const P=k("el-input"),q=J,L=k("router-link");return a(),S(he,{to:"#app"},[n("div",{id:"search",class:I({searching:r.value}),onClick:u[3]||(u[3]=B=>r.value&&$.$eventBus.emit("global-search-toggle"))},[n("div",pt,[n("div",{class:"search-box",onClick:u[2]||(u[2]=oe(()=>{},["stop"]))},[t(P,{ref:"input",modelValue:p.value,"onUpdate:modelValue":u[0]||(u[0]=B=>p.value=B),"prefix-icon":"el-icon-search",placeholder:"\u641C\u7D22\u9875\u9762\uFF0C\u652F\u6301\u6807\u9898\u3001URL\u6A21\u7CCA\u67E5\u8BE2",clearable:"",onKeydown:[u[1]||(u[1]=ae(B=>$.$eventBus.emit("global-search-toggle"),["esc"])),ae(oe(V,["prevent"]),["up"]),ae(oe(U,["prevent"]),["down"]),ae(oe(T,["prevent"]),["enter"])]},null,8,["modelValue","onKeydown"]),e(m).mode==="pc"?(a(),h("div",vt,[ht,n("div",bt,[n("span",null,[t(q,{name:"search-up"})]),n("span",null,[t(q,{name:"search-down"})]),ft]),n("div",gt,[n("span",null,[t(q,{name:"search-enter"})]),yt]),$t])):b("v-if",!0)]),n("div",{ref:"search",class:I(["result",{mobile:e(m).mode==="mobile"}])},[(a(!0),h(F,null,z(e(_),(B,f)=>(a(),S(L,{key:B.path,custom:"",to:r.value?B.path:""},{default:d(({href:v,navigate:ie})=>[n("a",{ref_for:!0,ref:`search-item-${f}`,href:e(Q)(B.path)?B.path:v,class:I(["item",{actived:f===s.value}]),target:e(Q)(B.path)?"_blank":"_self",onClick:ie,onMouseover:K=>s.value=f},[n("div",St,[B.icon?(a(),S(q,{key:0,name:B.icon},null,8,["name"])):b("v-if",!0)]),n("div",wt,[n("div",xt,[c(N(B.title)+" ",1),B.isExternalLink?(a(),S(q,{key:0,name:"external-link"})):b("v-if",!0)]),n("div",Ct,[(a(!0),h(F,null,z(B.breadcrumb,(K,D)=>(a(),h("span",{key:D},[c(N(K)+" ",1),t(q,{name:"el-icon-arrow-right"})]))),128))]),n("div",Vt,N(B.path),1)])],42,kt)]),_:2},1032,["to"]))),128))],2)])],2)])}}};var Pt=E(Tt,[["__scopeId","data-v-7e49eb23"]]);const X=l=>(ee("data-v-3b8e1d42"),l=l(),te(),l),qt=c("\u5BFC\u822A\u680F\u6A21\u5F0F"),Mt={key:1,class:"menu-mode"},Bt=c("\u4FA7\u8FB9\u680F"),Ut={key:2,class:"setting-item"},It=X(()=>n("div",{class:"label"},"\u6298\u53E0\u6309\u94AE",-1)),Lt={class:"setting-item"},Dt=X(()=>n("div",{class:"label"},"\u662F\u5426\u6298\u53E0",-1)),Ft={class:"setting-item"},Rt={class:"label"},At=c(" \u5207\u6362\u8DF3\u8F6C "),Nt={class:"setting-item"},Ot={class:"label"},jt=c(" \u4FDD\u6301\u5C55\u5F00\u4E00\u4E2A "),Et=c("\u9876\u680F"),zt={class:"setting-item"},Ht=X(()=>n("div",{class:"label"},"\u9876\u680F\u56FA\u5B9A",-1)),Kt={key:3,class:"setting-item"},Jt=X(()=>n("div",{class:"label"},"\u9762\u5305\u5C51\u5BFC\u822A",-1)),Gt=c("\u529F\u80FD\u6309\u94AE"),Qt={class:"setting-item"},Yt={class:"label"},Wt=c(" \u5BFC\u822A\u680F\u641C\u7D22 "),Zt={key:4,class:"setting-item"},Xt={class:"label"},en=c(" \u5168\u5C4F "),tn={class:"setting-item"},nn={class:"label"},on=c(" \u9875\u9762\u5237\u65B0 "),an=c("\u5176\u5B83"),sn={class:"setting-item"},ln={class:"label"},dn=c(" \u7EC4\u4EF6\u5C3A\u5BF8 "),un=c("\u8F83\u5927"),rn=c("\u9ED8\u8BA4"),cn=c("\u7A0D\u5C0F"),mn={class:"setting-item"},_n=X(()=>n("div",{class:"label"},"\u5E95\u90E8\u7248\u6743",-1)),pn={class:"setting-item"},vn={class:"label"},hn=c(" \u52A0\u8F7D\u8FDB\u5EA6\u6761 "),bn={class:"setting-item"},fn={class:"label"},gn=c(" \u52A8\u6001\u6807\u9898 "),yn={class:"setting-item"},$n={class:"label"},kn=c(" \u6B22\u8FCE\u9875 "),Sn={setup(l){const{proxy:i}=se(),m=ce(),o=H(),r=Y(),p=j(!1),g=M({get:function(){return o.menuMode},set:function(f){r.switchHeaderActived(0),o.updateThemeSetting({menuMode:f}),o.menuMode!=="single"&&r.setHeaderActived(m.fullPath)}}),s=M({get:function(){return o.elementSize},set:function(f){o.updateThemeSetting({elementSize:f})}}),_=M({get:function(){return o.enableSidebarCollapse},set:function(f){o.updateThemeSetting({enableSidebarCollapse:f})}}),x=M({get:function(){return o.sidebarCollapse},set:function(f){o.updateThemeSetting({sidebarCollapse:f})}}),w=M({get:function(){return o.switchSidebarAndPageJump},set:function(f){o.updateThemeSetting({switchSidebarAndPageJump:f})}}),V=M({get:function(){return o.sidebarUniqueOpened},set:function(f){o.updateThemeSetting({sidebarUniqueOpened:f})}}),U=M({get:function(){return o.topbarFixed},set:function(f){o.updateThemeSetting({topbarFixed:f})}}),T=M({get:function(){return o.enableBreadcrumb},set:function(f){o.updateThemeSetting({enableBreadcrumb:f})}}),C=M({get:function(){return o.showCopyright},set:function(f){o.updateThemeSetting({showCopyright:f})}}),$=M({get:function(){return o.enableNavSearch},set:function(f){o.updateThemeSetting({enableNavSearch:f})}}),u=M({get:function(){return o.enableFullscreen},set:function(f){o.updateThemeSetting({enableFullscreen:f})}}),P=M({get:function(){return o.enablePageReload},set:function(f){o.updateThemeSetting({enablePageReload:f})}}),q=M({get:function(){return o.enableProgress},set:function(f){o.updateThemeSetting({enableProgress:f})}}),L=M({get:function(){return o.enableDynamicTitle},set:function(f){o.updateThemeSetting({enableDynamicTitle:f})}}),B=M({get:function(){return o.enableDashboard},set:function(f){o.updateThemeSetting({enableDashboard:f})}});return Z(()=>{i.$eventBus.on("global-theme-toggle",()=>{p.value=!p.value})}),(f,v)=>{const ie=k("el-alert"),K=k("el-divider"),D=J,O=k("el-tooltip"),A=k("el-switch"),de=k("el-radio-button"),ye=k("el-radio-group"),$e=k("el-drawer");return a(),S(he,{to:"#app"},[t($e,{modelValue:p.value,"onUpdate:modelValue":v[17]||(v[17]=y=>p.value=y),title:"\u4E3B\u9898\u914D\u7F6E",direction:"rtl",size:300},{default:d(()=>[t(ie,{title:"\u4E3B\u9898\u914D\u7F6E\u53EF\u5B9E\u65F6\u9884\u89C8\u6548\u679C\uFF0C\u66F4\u591A\u8BBE\u7F6E\u8BF7\u5728 src/settings.js \u4E2D\u8FDB\u884C\u8BBE\u7F6E\uFF0C\u5EFA\u8BAE\u5728\u751F\u4EA7\u73AF\u5883\u9690\u85CF\u4E3B\u9898\u914D\u7F6E\u529F\u80FD",type:"error",closable:!1}),e(o).mode==="pc"?(a(),S(K,{key:0},{default:d(()=>[qt]),_:1})):b("v-if",!0),e(o).mode==="pc"?(a(),h("div",Mt,[t(O,{content:"\u4FA7\u8FB9\u680F\u6A21\u5F0F\uFF08\u542B\u4E3B\u5BFC\u822A\uFF09",placement:"top","show-after":500,"append-to-body":!1},{default:d(()=>[n("div",{class:I(["mode mode-side",{active:e(g)==="side"}]),onClick:v[0]||(v[0]=y=>g.value="side")},[t(D,{name:"el-icon-check"})],2)]),_:1}),t(O,{content:"\u9876\u90E8\u6A21\u5F0F",placement:"top","show-after":500,"append-to-body":!1},{default:d(()=>[n("div",{class:I(["mode mode-head",{active:e(g)==="head"}]),onClick:v[1]||(v[1]=y=>g.value="head")},[t(D,{name:"el-icon-check"})],2)]),_:1}),t(O,{content:"\u4FA7\u8FB9\u680F\u6A21\u5F0F\uFF08\u4E0D\u542B\u4E3B\u5BFC\u822A\uFF09",placement:"top","show-after":500,"append-to-body":!1},{default:d(()=>[n("div",{class:I(["mode mode-single",{active:e(g)==="single"}]),onClick:v[2]||(v[2]=y=>g.value="single")},[t(D,{name:"el-icon-check"})],2)]),_:1})])):b("v-if",!0),t(K,null,{default:d(()=>[Bt]),_:1}),e(o).mode==="pc"?(a(),h("div",Ut,[It,t(A,{modelValue:e(_),"onUpdate:modelValue":v[3]||(v[3]=y=>R(_)?_.value=y:null)},null,8,["modelValue"])])):b("v-if",!0),n("div",Lt,[Dt,t(A,{modelValue:e(x),"onUpdate:modelValue":v[4]||(v[4]=y=>R(x)?x.value=y:null)},null,8,["modelValue"])]),n("div",Ft,[n("div",Rt,[At,t(O,{content:"\u5F00\u542F\u8BE5\u529F\u80FD\u540E\uFF0C\u5207\u6362\u4FA7\u8FB9\u680F\u65F6\uFF0C\u9875\u9762\u81EA\u52A8\u8DF3\u8F6C\u81F3\u8BE5\u4FA7\u8FB9\u680F\u5BFC\u822A\u4E0B\u7B2C\u4E00\u4E2A\u8DEF\u7531\u5730\u5740",placement:"top","append-to-body":!1},{default:d(()=>[t(D,{name:"el-icon-question-filled"})]),_:1})]),t(A,{modelValue:e(w),"onUpdate:modelValue":v[5]||(v[5]=y=>R(w)?w.value=y:null),disabled:["single"].includes(e(o).menuMode)},null,8,["modelValue","disabled"])]),n("div",Nt,[n("div",Ot,[jt,t(O,{content:"\u5F00\u542F\u8BE5\u529F\u80FD\u540E\uFF0C\u4FA7\u8FB9\u680F\u53EA\u4FDD\u6301\u4E00\u4E2A\u5B50\u83DC\u5355\u7684\u5C55\u5F00",placement:"top","append-to-body":!1},{default:d(()=>[t(D,{name:"el-icon-question-filled"})]),_:1})]),t(A,{modelValue:e(V),"onUpdate:modelValue":v[6]||(v[6]=y=>R(V)?V.value=y:null)},null,8,["modelValue"])]),t(K,null,{default:d(()=>[Et]),_:1}),n("div",zt,[Ht,t(A,{modelValue:e(U),"onUpdate:modelValue":v[7]||(v[7]=y=>R(U)?U.value=y:null)},null,8,["modelValue"])]),e(o).mode==="pc"?(a(),h("div",Kt,[Jt,t(A,{modelValue:e(T),"onUpdate:modelValue":v[8]||(v[8]=y=>R(T)?T.value=y:null)},null,8,["modelValue"])])):b("v-if",!0),t(K,null,{default:d(()=>[Gt]),_:1}),n("div",Qt,[n("div",Yt,[Wt,t(O,{content:"\u5BF9\u5BFC\u822A\u680F\u8FDB\u884C\u5FEB\u6377\u641C\u7D22",placement:"top","append-to-body":!1},{default:d(()=>[t(D,{name:"el-icon-question-filled"})]),_:1})]),t(A,{modelValue:e($),"onUpdate:modelValue":v[9]||(v[9]=y=>R($)?$.value=y:null)},null,8,["modelValue"])]),e(o).mode==="pc"?(a(),h("div",Zt,[n("div",Xt,[en,t(O,{content:"\u8BE5\u529F\u80FD\u4F7F\u7528\u573A\u666F\u6781\u5C11\uFF0C\u7528\u6237\u4E60\u60EF\u4E8E\u901A\u8FC7\u7A97\u53E3\u201C\u6700\u5927\u5316\u201D\u529F\u80FD\u6765\u6269\u5927\u663E\u793A\u533A\u57DF\uFF0C\u4EE5\u663E\u793A\u66F4\u591A\u5185\u5BB9\uFF0C\u5E76\u4E14\u4F7F\u7528 F11 \u952E\u4E5F\u53EF\u4EE5\u8FDB\u5165\u5168\u5C4F\u6548\u679C",placement:"top","append-to-body":!1},{default:d(()=>[t(D,{name:"el-icon-question-filled"})]),_:1})]),t(A,{modelValue:e(u),"onUpdate:modelValue":v[10]||(v[10]=y=>R(u)?u.value=y:null)},null,8,["modelValue"])])):b("v-if",!0),n("div",tn,[n("div",nn,[on,t(O,{content:"\u5F00\u542F\u65F6\u4F1A\u963B\u6B62\u539F\u751F F5 \u952E\u5237\u65B0\u529F\u80FD\uFF0C\u5E76\u91C7\u7528\u6846\u67B6\u63D0\u4F9B\u7684\u5237\u65B0\u6A21\u5F0F\u8FDB\u884C\u9875\u9762\u5237\u65B0",placement:"top","append-to-body":!1},{default:d(()=>[t(D,{name:"el-icon-question-filled"})]),_:1})]),t(A,{modelValue:e(P),"onUpdate:modelValue":v[11]||(v[11]=y=>R(P)?P.value=y:null)},null,8,["modelValue"])]),t(K,null,{default:d(()=>[an]),_:1}),n("div",sn,[n("div",ln,[dn,t(O,{content:"\u5168\u5C40\u8BBE\u7F6E Element Plus \u7EC4\u4EF6\u7684\u9ED8\u8BA4\u5C3A\u5BF8\u5927\u5C0F",placement:"top","append-to-body":!1},{default:d(()=>[t(D,{name:"el-icon-question-filled"})]),_:1})]),t(ye,{modelValue:e(s),"onUpdate:modelValue":v[12]||(v[12]=y=>R(s)?s.value=y:null),size:"small"},{default:d(()=>[t(de,{label:"large"},{default:d(()=>[un]),_:1}),t(de,{label:"default"},{default:d(()=>[rn]),_:1}),t(de,{label:"small"},{default:d(()=>[cn]),_:1})]),_:1},8,["modelValue"])]),n("div",mn,[_n,t(A,{modelValue:e(C),"onUpdate:modelValue":v[13]||(v[13]=y=>R(C)?C.value=y:null)},null,8,["modelValue"])]),n("div",pn,[n("div",vn,[hn,t(O,{content:"\u8BE5\u529F\u80FD\u5F00\u542F\u65F6\uFF0C\u8DF3\u8F6C\u8DEF\u7531\u4F1A\u770B\u5230\u9875\u9762\u9876\u90E8\u6709\u6761\u84DD\u8272\u7684\u8FDB\u5EA6\u6761",placement:"top","append-to-body":!1},{default:d(()=>[t(D,{name:"el-icon-question-filled"})]),_:1})]),t(A,{modelValue:e(q),"onUpdate:modelValue":v[14]||(v[14]=y=>R(q)?q.value=y:null)},null,8,["modelValue"])]),n("div",bn,[n("div",fn,[gn,t(O,{content:"\u8BE5\u529F\u80FD\u5F00\u542F\u65F6\uFF0C\u9875\u9762\u6807\u9898\u4F1A\u663E\u793A\u5F53\u524D\u8DEF\u7531\u6807\u9898\uFF0C\u683C\u5F0F\u4E3A\u201C\u9875\u9762\u6807\u9898 - \u7F51\u7AD9\u540D\u79F0\u201D\uFF1B\u5173\u95ED\u65F6\u5219\u663E\u793A\u7F51\u7AD9\u540D\u79F0\uFF0C\u7F51\u7AD9\u540D\u79F0\u5728\u9879\u76EE\u6839\u76EE\u5F55\u4E0B .env.* \u6587\u4EF6\u91CC\u914D\u7F6E",placement:"top","append-to-body":!1},{default:d(()=>[t(D,{name:"el-icon-question-filled"})]),_:1})]),t(A,{modelValue:e(L),"onUpdate:modelValue":v[15]||(v[15]=y=>R(L)?L.value=y:null)},null,8,["modelValue"])]),n("div",yn,[n("div",$n,[kn,t(O,{content:"\u6B22\u8FCE\u9875\u5373\u63A7\u5236\u53F0\u9875\u9762\uFF0C\u8BE5\u529F\u80FD\u5F00\u542F\u65F6\uFF0C\u767B\u5F55\u6210\u529F\u9ED8\u8BA4\u8FDB\u5165\u63A7\u5236\u53F0\u9875\u9762\uFF1B\u5173\u95ED\u65F6\u5219\u9ED8\u8BA4\u8FDB\u5165\u4FA7\u8FB9\u680F\u5BFC\u822A\u7B2C\u4E00\u4E2A\u5BFC\u822A\u9875\u9762",placement:"top","append-to-body":!1},{default:d(()=>[t(D,{name:"el-icon-question-filled"})]),_:1})]),t(A,{modelValue:e(B),"onUpdate:modelValue":v[16]||(v[16]=y=>R(B)?B.value=y:null)},null,8,["modelValue"])])]),_:1},8,["modelValue"])])}}};var wn=E(Sn,[["__scopeId","data-v-3b8e1d42"]]);const W=l=>(ee("data-v-7eec08ac"),l=l(),te(),l),xn=W(()=>n("span",{class:"title"},[c("\u5728\u7EBF"),n("br"),c("\u54A8\u8BE2")],-1)),Cn=W(()=>n("span",{class:"title"},[c("\u52A0\u5165"),n("br"),c("QQ\u7FA4")],-1)),Vn=W(()=>n("span",{class:"title"},[c("\u8D2D\u4E70"),n("br"),c("\u4E13\u4E1A\u7248")],-1)),Tn=W(()=>n("span",{class:"title"},[c("\u5F00\u53D1"),n("br"),c("\u6587\u6863")],-1)),Pn=W(()=>n("span",{class:"title"},[c("\u4E0B\u8F7D"),n("br"),c("\u57FA\u7840\u7248")],-1)),qn=W(()=>n("div",{style:{"text-align":"center","margin-bottom":"20px"}},[c("One-step-admin \u662F\u4E00\u6B3E"),n("b",null,"\u5E72\u5565\u90FD\u5FEB\u4EBA\u4E00\u6B65"),c("\u7684 Vue \u4E2D\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF\u6846\u67B6")],-1)),Mn=["src","onClick"],Bn={style:{"text-align":"center","margin-top":"20px"}},Un=c("\u4E0D\u7528\u4E86"),In=c("\u53BB\u770B\u770B"),Ln={setup(l){const{proxy:i}=se(),m=j(location.href),o=j(!0);setTimeout(()=>{o.value=!1},5e3);const r=j({dialogVisible:!0,imageVisible:!1,imagePreview:[],data:[{img:`https://hooray.${location.origin.includes("gitee")?"gitee":"github"}.io/one-step-admin/intro-1.gif`,text:"\u6446\u8131\u4F20\u7EDF\u540E\u53F0\u6846\u67B6\u8DEF\u7531\u8DF3\u8F6C\u7684\u4EA4\u4E92\uFF0C\u5C06\u6BCF\u4E2A\u6A21\u5757\u4EE5\u7A97\u53E3\u7684\u5F62\u5F0F\u5C55\u793A\u5728\u540C\u4E00\u4E2A\u754C\u9762\u4E2D\uFF0C\u8BA9\u4F7F\u7528\u4EBA\u5458\u53EF\u4EE5\u505A\u5230\u8DE8\u6A21\u5757\u7684\u591A\u7EBF\u64CD\u4F5C\u3002"},{img:`https://hooray.${location.origin.includes("gitee")?"gitee":"github"}.io/one-step-admin/intro-2.gif`,text:"\u7A97\u53E3\u9ED8\u8BA4\u5BBD\u5EA6\u4E3A 800px \uFF0C\u53EF\u4EE5\u5728\u9879\u76EE\u4E2D\u8FDB\u884C\u8C03\u6574\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7\u6700\u5927\u5316\u6309\u94AE\u5C06\u7A97\u53E3\u6700\u5927\u5316\u5C55\u793A\uFF0C\u4EE5\u4FBF\u5C55\u793A\u66F4\u591A\u4FE1\u606F\u3002"},{img:`https://hooray.${location.origin.includes("gitee")?"gitee":"github"}.io/one-step-admin/intro-3.gif`,text:"\u63D0\u4F9B\u7684\u9884\u89C8\u754C\u9762\u53EF\u4EE5\u5E2E\u52A9\u4F7F\u7528\u4EBA\u5458\u5FEB\u901F\u5B9A\u4F4D\u5230\u9700\u8981\u64CD\u4F5C\u7684\u7A97\u53E3\u3002"},{img:`https://hooray.${location.origin.includes("gitee")?"gitee":"github"}.io/one-step-admin/intro-4.gif`,text:"\u53EF\u52FE\u9009 2 \u5230 4 \u4E2A\u7A97\u53E3\u5E73\u5747\u5206\u5E03\u5728\u9875\u9762\u4E2D\uFF0C\u4E13\u6CE8\u4E8E\u6240\u52FE\u9009\u7684\u7A97\u53E3\u8FDB\u884C\u64CD\u4F5C\u3002"},{img:`https://hooray.${location.origin.includes("gitee")?"gitee":"github"}.io/one-step-admin/intro-5.gif`,text:"\u5FEB\u901F\u8C03\u6574\u7A97\u53E3\u7684\u5C55\u793A\u987A\u5E8F\u3002"}]});Z(()=>{i.$notify({type:"success",title:"\u6E29\u99A8\u63D0\u793A",dangerouslyUseHTMLString:!0,message:`
                <p>\u5F53\u524D\u8BBF\u95EE\u7684\u662F<b>\u57FA\u7840\u7248</b> (Vue3)</p>
                <p>\u4F60\u53EF\u4EE5\u70B9<a href="https://hooray.${location.origin.includes("gitee")?"gitee":"github"}.io/fantastic-admin/vue3/pro/" target="_blank"><b>\u8FD9\u91CC</b></a>\u8BBF\u95EE\u4E13\u4E1A\u7248 (Vue3)</p>
            `,position:"bottom-right",duration:5e3}),setTimeout(()=>{i.$notify({type:"warning",title:"\u70B9\u2B50\u9886\u53D6\u4E13\u4E1A\u7248\u6E90\u7801",dangerouslyUseHTMLString:!0,message:`
                <p>\u7ED9\u9879\u76EE\u4ED3\u5E93\u70B9\u2B50\u5C31\u53EF\u4EE5\u9886\u53D6\u4E13\u4E1A\u7248\u6E90\u7801\uFF0C\u70B9<a href="https://hooray.${location.origin.includes("gitee")?"gitee":"github"}.io/fantastic-admin/buy" target="_blank"><b>\u8FD9\u91CC</b></a>\u4E86\u89E3\u4E00\u4E0B</p>
            `,position:"bottom-right",duration:0})},0)});function p(g){window.open(g,"top")}return(g,s)=>{const _=J,x=k("el-carousel-item"),w=k("el-carousel"),V=k("el-image-viewer"),U=k("el-button"),T=k("el-dialog");return a(),h(F,null,[n("div",{class:I(["buy-it",{actived:o.value}])},[n("div",{class:"item",onClick:s[0]||(s[0]=C=>p("https://wpa.qq.com/msgrd?v=3&uin=304327508&site=qq&menu=yes"))},[t(_,{name:"fixed-right-qq"}),xn]),n("div",{class:"item chat",onClick:s[1]||(s[1]=C=>p("https://qm.qq.com/cgi-bin/qm/qr?k=WoDBYN0S9r94f9oBZkxlGbiYxu3dEzgt&jump_from=webapi"))},[t(_,{name:"fixed-right-chat"}),Cn]),n("div",{class:"item buy",onClick:s[2]||(s[2]=C=>p(`https://hooray.${m.value.includes("gitee")?"gitee":"github"}.io/fantastic-admin/buy.html`))},[t(_,{name:"fixed-right-buy"}),Vn]),n("div",{class:"item doc",onClick:s[3]||(s[3]=C=>p(`https://hooray.${m.value.includes("gitee")?"gitee":"github"}.io/fantastic-admin/`))},[t(_,{name:"fixed-right-doc"}),Tn]),n("div",{class:"item code",onClick:s[4]||(s[4]=C=>p(`https://${m.value.includes("gitee")?"gitee":"github"}.com/hooray/fantastic-admin/`))},[t(_,{name:"fixed-right-code"}),Pn])],2),t(T,{modelValue:r.value.dialogVisible,"onUpdate:modelValue":s[8]||(s[8]=C=>r.value.dialogVisible=C),title:"One-step-admin \u6B63\u5F0F\u53D1\u5E03",width:"600px",center:"","close-on-click-modal":!1},{footer:d(()=>[t(U,{onClick:s[6]||(s[6]=C=>r.value.dialogVisible=!1)},{default:d(()=>[Un]),_:1}),t(U,{type:"primary",onClick:s[7]||(s[7]=C=>p(`https://hooray.${m.value.includes("gitee")?"gitee":"github"}.io/one-step-admin/`))},{default:d(()=>[In]),_:1})]),default:d(()=>[qn,t(w,{trigger:"click","indicator-position":"none",arrow:"always",autoplay:!1,height:"330px"},{default:d(()=>[(a(!0),h(F,null,z(r.value.data,C=>(a(),S(x,{key:C},{default:d(()=>[n("img",{src:C.img,style:{cursor:"pointer",width:"100%",margin:"auto"},onClick:$=>{r.value.imageVisible=!0,r.value.imagePreview=[C.img]}},null,8,Mn),n("div",Bn,N(C.text),1)]),_:2},1024))),128))]),_:1}),r.value.imageVisible?(a(),S(V,{key:0,"url-list":r.value.imagePreview,onClose:s[5]||(s[5]=C=>r.value.imageVisible=!1)},null,8,["url-list"])):b("v-if",!0)]),_:1},8,["modelValue"])],64)}}};var Dn=E(Ln,[["__scopeId","data-v-7eec08ac"]]);const Fn={class:"layout"},Rn={id:"app-main"},An={class:"wrapper"},Nn={class:"main"},On={setup(l){const{proxy:i}=se(),m=ce(),o=pe(),r=H(),p=Me(),g=Y(),s=M(()=>typeof m.meta.copyright!="undefined"?m.meta.copyright:r.showCopyright);ne(()=>r.sidebarCollapse,w=>{r.mode==="mobile"&&(w?document.querySelector("body").classList.remove("hidden"):document.querySelector("body").classList.add("hidden"))}),ne(()=>m.path,()=>{r.mode==="mobile"&&r.updateThemeSetting({sidebarCollapse:!0})}),Z(()=>{i.$hotkeys("f5",w=>{r.enablePageReload&&(w.preventDefault(),_())})}),be("reload",_);function _(){o.push({name:"reload"})}be("switchMenu",x);function x(w){g.switchHeaderActived(w),r.switchSidebarAndPageJump&&(Q(g.sidebarRoutesFirstDeepestPath)?window.open(g.sidebarRoutesFirstDeepestPath,"_blank"):o.push(g.sidebarRoutesFirstDeepestPath))}return(w,V)=>{const U=k("router-view"),T=ke,C=k("el-backtop");return a(),h("div",Fn,[n("div",Rn,[t(We),n("div",An,[n("div",{class:I(["sidebar-container",{show:e(r).mode==="mobile"&&!e(r).sidebarCollapse}])},[t(nt),t(rt)],2),n("div",{class:I(["sidebar-mask",{show:e(r).mode==="mobile"&&!e(r).sidebarCollapse}]),onClick:V[0]||(V[0]=$=>e(r).toggleSidebarCollapse())},null,2),n("div",{class:"main-container",style:Ce({"padding-bottom":w.$route.meta.paddingBottom})},[e(r).menuMode==="head"&&!e(r).enableSidebarCollapse&&!e(r).enableBreadcrumb?b("v-if",!0):(a(),S(_t,{key:0})),n("div",Nn,[t(U,null,{default:d(({Component:$,route:u})=>[t(re,{name:"main",mode:"out-in",appear:""},{default:d(()=>[(a(),S(Te,{include:[...e(p).list]},[(a(),S(Ve($),{key:u.fullPath}))],1032,["include"]))]),_:2},1024)]),_:1})]),e(s)?(a(),S(T,{key:1})):b("v-if",!0)],4)]),t(C,{right:20,bottom:20,title:"\u56DE\u5230\u9876\u90E8"})]),t(Pt),t(wn),t(Dn)])}}};var Gn=E(On,[["__scopeId","data-v-cca94204"]]);export{Gn as default};
