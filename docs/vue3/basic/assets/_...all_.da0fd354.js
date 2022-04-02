
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as a}from"./index.da9b58f1.js";import{_ as e,r as n,a1 as t,o as s,c as o,e as l,b as r,f as u,j as c,p as d,k as i,m as v,n as f,q as p,y as b,t as m}from"./index.b7fe7d7b.js";const _=a=>(d("data-v-45b4a4ec"),a=a(),i(),a),w={class:"notfound"},y={class:"content"},I=_((()=>r("h1",null,"404",-1))),j=_((()=>r("div",{class:"desc"},"抱歉，你访问的页面不存在",-1))),x={setup(e){const c=v(),d=n({inter:null,countdown:5});function i(){c.push("/")}return t((()=>{clearInterval(d.value.inter)})),s((()=>{d.value.inter=setInterval((()=>{d.value.countdown--,0==d.value.countdown&&(clearInterval(d.value.inter),i())}),1e3)})),(e,n)=>{const t=a,s=f("el-button");return p(),o("div",w,[l(t,{name:"404"}),r("div",y,[I,j,l(s,{type:"primary",onClick:i},{default:u((()=>[b(m(d.value.countdown)+" 秒后，返回首页",1)])),_:1})])])}}};"function"==typeof c&&c(x);var h=e(x,[["__scopeId","data-v-45b4a4ec"]]);export{h as default};
