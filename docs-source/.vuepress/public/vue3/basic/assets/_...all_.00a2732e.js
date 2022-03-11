
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as a}from"./index.2247f9f8.js";import{j as e,a5 as n,o as s,k as t,g as o,s as r,e as l,y as u,z as c,R as d,r as v,f as i,v as f,t as p}from"./vendor.9748e354.js";import{_ as m,b as _}from"./index.d5f01412.js";const b=a=>(u("data-v-20a5be5e"),a=a(),c(),a),j={class:"notfound"},w={class:"content"},y=b((()=>r("h1",null,"404",-1))),I=b((()=>r("div",{class:"desc"},"抱歉，你访问的页面不存在",-1))),x={setup(u){const c=d(),m=e({inter:null,countdown:5});function _(){c.push("/")}return n((()=>{clearInterval(m.value.inter)})),s((()=>{m.value.inter=setInterval((()=>{m.value.countdown--,0==m.value.countdown&&(clearInterval(m.value.inter),_())}),1e3)})),(e,n)=>{const s=a,u=v("el-button");return i(),t("div",j,[o(s,{name:"404"}),r("div",w,[y,I,o(u,{type:"primary",onClick:_},{default:l((()=>[f(p(m.value.countdown)+" 秒后，返回首页",1)])),_:1})])])}}};"function"==typeof _&&_(x);var h=m(x,[["__scopeId","data-v-20a5be5e"]]);export{h as default};
