
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as v,u as f,l as m,b as h}from"./index.62acde6f.js";import{r as b,am as S,L as g,h as w,q as s,i as o,w as y,p as I,k,M as x,a2 as B,l as C,o as M,y as N,t as R}from"./vendor.ee7254f0.js";var c={};const _=t=>(I("data-v-8419e4ca"),t=t(),k(),t),V={class:"notfound"},L={class:"content"},T=_(()=>o("h1",null,"404",-1)),q=_(()=>o("div",{class:"desc"},"\u62B1\u6B49\uFF0C\u4F60\u8BBF\u95EE\u7684\u9875\u9762\u4E0D\u5B58\u5728",-1)),r={setup(t){const a=x(),u=B(),l=f(),i=m(),e=b({inter:null,countdown:5});S(()=>{clearInterval(e.value.inter)}),g(()=>{l.tabbar.enable&&i.remove(a.meta.activeMenu||a.fullPath),e.value.inter=setInterval(()=>{e.value.countdown--,e.value.countdown==0&&(clearInterval(e.value.inter),n())},1e3)});function n(){u.push("/")}return(D,E)=>{const d=h,p=C("el-button");return M(),w("div",V,[s(d,{name:"404"}),o("div",L,[T,q,s(p,{type:"primary",onClick:n},{default:y(()=>[N(R(e.value.countdown)+" \u79D2\u540E\uFF0C\u8FD4\u56DE\u9996\u9875",1)]),_:1})])])}}};typeof c=="function"&&c(r);var z=v(r,[["__scopeId","data-v-8419e4ca"]]);export{z as default};
