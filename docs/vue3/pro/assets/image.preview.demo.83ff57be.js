
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as h}from"./index.4f3f72f3.js";import{_ as f}from"./index.d8082210.js";import{_ as d}from"./index.c053a834.js";import{w as l,D as v,o as m,z as w,A as r,m as s,F as t,G as x,k as u,l as y}from"./vendor.7ef8ea63.js";import{_ as $}from"./index.80fc21c6.js";const j={class:"image-slot"},b={props:{src:{type:String,required:!0},width:{type:[Number,String],default:""},height:{type:[Number,String],default:""}},setup(n){const e=n,a=l(()=>typeof e.width=="string"?e.width:`${e.width}px`),_=l(()=>typeof e.height=="string"?e.height:`${e.height}px`);return(g,c)=>{const i=f,o=v("el-image");return m(),w(o,{src:n.src,fit:"cover",style:x(`width:${u(a)};height:${u(_)};`),"preview-src-list":[n.src]},{error:r(()=>[s("div",j,[t(i,{name:"image-load-fail"})])]),_:1},8,["src","style","preview-src-list"])}}};var k=d(b,[["__scopeId","data-v-6ac2dcda"]]);const B={props:{},data(){return{}},computed:{locationOrigin:()=>location.origin},created(){},mounted(){},methods:{}};function N(n,e,a,_,g,c){const i=$,o=k,p=h;return m(),y("div",null,[t(i,{title:"\u56FE\u7247\u9884\u89C8",content:"ImagePreview"}),t(p,null,{default:r(()=>[s("div",null,[t(o,{src:`https://hooray.${c.locationOrigin.includes("gitee")?"gitee":"github"}.io/fantastic-admin/logo.png`,width:200},null,8,["src"])])]),_:1}),t(p,{title:"\u56FE\u7247\u52A0\u8F7D\u5931\u8D25\u65F6"},{default:r(()=>[s("div",null,[t(o,{src:"http://www.baidu.com",width:"100px",height:"100px"})])]),_:1})])}var V=d(B,[["render",N],["__scopeId","data-v-8976f8fc"]]);export{V as default};
