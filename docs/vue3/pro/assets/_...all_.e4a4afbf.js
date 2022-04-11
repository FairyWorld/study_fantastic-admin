
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as a,u as e,a7 as t,r as n,ae as s,o as l,c as o,b as u,e as c,w as r,j as d,p as v,k as i,l as f,m as p,n as m,q as b,z as w,t as I,B as _}from"./index.afdde410.js";const h=a=>(v("data-v-8419e4ca"),a=a(),i(),a),y={class:"notfound"},j={class:"content"},k=h((()=>c("h1",null,"404",-1))),x=h((()=>c("div",{class:"desc"},"抱歉，你访问的页面不存在",-1))),q={setup(a){const d=f(),v=p(),i=e(),h=t(),q=n({inter:null,countdown:5});function z(){v.push("/")}return s((()=>{clearInterval(q.value.inter)})),l((()=>{i.tabbar.enable&&h.remove(d.meta.activeMenu||d.fullPath),q.value.inter=setInterval((()=>{q.value.countdown--,0==q.value.countdown&&(clearInterval(q.value.inter),z())}),1e3)})),(a,e)=>{const t=_,n=m("el-button");return b(),o("div",y,[u(t,{name:"404"}),c("div",j,[k,x,u(n,{type:"primary",onClick:z},{default:r((()=>[w(I(q.value.countdown)+" 秒后，返回首页",1)])),_:1})])])}}};"function"==typeof d&&d(q);var z=a(q,[["__scopeId","data-v-8419e4ca"]]);export{z as default};
