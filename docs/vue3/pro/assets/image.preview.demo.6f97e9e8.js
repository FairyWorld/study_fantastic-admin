
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as h}from"./index.a4aa7a11.js";import{_ as v}from"./index.c8a0855a.js";import{_ as p}from"./index.e66802dc.js";import{w as l,D as f,o as m,z as w,A as r,m as a,F as t,G as x,k as u,l as y}from"./vendor.ddb44672.js";import{_ as $}from"./index.5d564d7a.js";const b={class:"image-slot"},j={props:{src:{type:String,required:!0},width:{type:[Number,String],default:""},height:{type:[Number,String],default:""}},setup(n){const e=n,s=l(()=>typeof e.width=="string"?e.width:`${e.width}px`),_=l(()=>typeof e.height=="string"?e.height:`${e.height}px`);return(g,c)=>{const i=v,o=f("el-image");return m(),w(o,{src:n.src,fit:"cover",style:x(`width:${u(s)};height:${u(_)};`),"preview-src-list":[n.src]},{error:r(()=>[a("div",b,[t(i,{name:"image-load-fail"})])]),_:1},8,["src","style","preview-src-list"])}}};var k=p(j,[["__scopeId","data-v-318badd8"]]);const B={props:{},data(){return{}},computed:{locationOrigin:()=>location.origin},created(){},mounted(){},methods:{}};function N(n,e,s,_,g,c){const i=$,o=k,d=h;return m(),y("div",null,[t(i,{title:"\u56FE\u7247\u9884\u89C8",content:"ImagePreview"}),t(d,null,{default:r(()=>[a("div",null,[t(o,{src:`https://hooray.${c.locationOrigin.includes("gitee")?"gitee":"github"}.io/fantastic-admin/logo.png`,width:200},null,8,["src"])])]),_:1}),t(d,{title:"\u56FE\u7247\u52A0\u8F7D\u5931\u8D25\u65F6"},{default:r(()=>[a("div",null,[t(o,{src:"http://www.baidu.com",width:"100px",height:"100px"})])]),_:1})])}var V=p(B,[["render",N],["__scopeId","data-v-8976f8fc"]]);export{V as default};
