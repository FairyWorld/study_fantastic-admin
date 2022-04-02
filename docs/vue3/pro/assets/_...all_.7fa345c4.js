
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as a,u as e,a7 as t,r as n,ae as s,o as l,c,b as o,e as u,w as r,j as d,p as v,k as i,l as f,m as p,n as b,q as m,z as w,t as I,B as _}from"./index.992324c5.js";const h=a=>(v("data-v-f7c8cdb0"),a=a(),i(),a),y={class:"notfound"},j={class:"content"},k=h((()=>u("h1",null,"404",-1))),x=h((()=>u("div",{class:"desc"},"抱歉，你访问的页面不存在",-1))),q={setup(a){const d=f(),v=p(),i=e(),h=t(),q=n({inter:null,countdown:5});function z(){v.push("/")}return s((()=>{clearInterval(q.value.inter)})),l((()=>{i.tabbar.enable&&h.remove(d.meta.activeMenu||d.fullPath),q.value.inter=setInterval((()=>{q.value.countdown--,0==q.value.countdown&&(clearInterval(q.value.inter),z())}),1e3)})),(a,e)=>{const t=_,n=b("el-button");return m(),c("div",y,[o(t,{name:"404"}),u("div",j,[k,x,o(n,{type:"primary",onClick:z},{default:r((()=>[w(I(q.value.countdown)+" 秒后，返回首页",1)])),_:1})])])}}};"function"==typeof d&&d(q);var z=a(q,[["__scopeId","data-v-f7c8cdb0"]]);export{z as default};
