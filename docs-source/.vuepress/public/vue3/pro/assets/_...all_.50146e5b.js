
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as a,u as e,m as t,b as n,c as s}from"./index.2c18650f.js";import{r as o,am as l,L as r,h as u,q as c,i as v,w as d,p as i,k as f,M as m,a2 as p,l as b,o as w,y as h,t as y}from"./vendor.9da56f98.js";const I=a=>(i("data-v-8419e4ca"),a=a(),f(),a),_={class:"notfound"},j={class:"content"},k=I((()=>v("h1",null,"404",-1))),x=I((()=>v("div",{class:"desc"},"抱歉，你访问的页面不存在",-1))),M={setup(a){const n=m(),i=p(),f=e(),I=t(),M=o({inter:null,countdown:5});function q(){i.push("/")}return l((()=>{clearInterval(M.value.inter)})),r((()=>{f.tabbar.enable&&I.remove(n.meta.activeMenu||n.fullPath),M.value.inter=setInterval((()=>{M.value.countdown--,0==M.value.countdown&&(clearInterval(M.value.inter),q())}),1e3)})),(a,e)=>{const t=s,n=b("el-button");return w(),u("div",_,[c(t,{name:"404"}),v("div",j,[k,x,c(n,{type:"primary",onClick:q},{default:d((()=>[h(y(M.value.countdown)+" 秒后，返回首页",1)])),_:1})])])}}};"function"==typeof n&&n(M);var q=a(M,[["__scopeId","data-v-8419e4ca"]]);export{q as default};
