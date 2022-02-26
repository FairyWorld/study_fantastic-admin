
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as m,f as v,h as w}from"./index.4bcd9cef.js";import{_ as y}from"./index.828ff984.js";import{i as x,a as l,r as $,f as g,b,e as r,s as a,g as t,n as k,u as d,k as B}from"./vendor.7c7b0e52.js";const N={class:"image-slot"},S=x({name:"ImagePreview"}),C=Object.assign(S,{props:{src:{type:String,required:!0},width:{type:[Number,String],default:""},height:{type:[Number,String],default:""}},setup(n){const e=n,s=l(()=>typeof e.width=="string"?e.width:`${e.width}px`),c=l(()=>typeof e.height=="string"?e.height:`${e.height}px`);return(f,_)=>{const i=y,o=$("el-image");return g(),b(o,{src:n.src,fit:"cover",style:k(`width:${d(s)};height:${d(c)};`),"preview-src-list":[n.src]},{error:r(()=>[a("div",N,[t(i,{name:"image-load-fail"})])]),_:1},8,["src","style","preview-src-list"])}}});var I=m(C,[["__scopeId","data-v-d280b3d2"]]),u={};const h={props:{},data(){return{}},computed:{locationOrigin:()=>location.origin},created(){},mounted(){},methods:{}};function O(n,e,s,c,f,_){const i=w,o=I,p=v;return g(),B("div",null,[t(i,{title:"\u56FE\u7247\u9884\u89C8",content:"ImagePreview"}),t(p,null,{default:r(()=>[a("div",null,[t(o,{src:`https://hooray.${_.locationOrigin.includes("gitee")?"gitee":"github"}.io/fantastic-admin/logo.png`,width:200},null,8,["src"])])]),_:1}),t(p,{title:"\u56FE\u7247\u52A0\u8F7D\u5931\u8D25\u65F6"},{default:r(()=>[a("div",null,[t(o,{src:"http://www.baidu.com",width:"100px",height:"100px"})])]),_:1})])}typeof u=="function"&&u(h);var q=m(h,[["render",O]]);export{q as default};
