
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as m,b as v,m as w,n as x}from"./index.e5f7e690.js";import{g as y,z as p,l as $,o as g,A as b,w as r,i as a,q as t,x as k,u,h as B}from"./vendor.ee7254f0.js";const N={class:"image-slot"},S=y({name:"ImagePreview"}),C=Object.assign(S,{props:{src:{type:String,required:!0},width:{type:[Number,String],default:""},height:{type:[Number,String],default:""}},setup(n){const e=n,s=p(()=>typeof e.width=="string"?e.width:`${e.width}px`),c=p(()=>typeof e.height=="string"?e.height:`${e.height}px`);return(f,_)=>{const i=v,o=$("el-image");return g(),b(o,{src:n.src,fit:"cover",style:k(`width:${u(s)};height:${u(c)};`),"preview-src-list":[n.src]},{error:r(()=>[a("div",N,[t(i,{name:"image-load-fail"})])]),_:1},8,["src","style","preview-src-list"])}}});var I=m(C,[["__scopeId","data-v-417c63f7"]]),d={};const h={props:{},data(){return{}},computed:{locationOrigin:()=>location.origin},created(){},mounted(){},methods:{}};function O(n,e,s,c,f,_){const i=x,o=I,l=w;return g(),B("div",null,[t(i,{title:"\u56FE\u7247\u9884\u89C8",content:"ImagePreview"}),t(l,null,{default:r(()=>[a("div",null,[t(o,{src:`https://hooray.${_.locationOrigin.includes("gitee")?"gitee":"github"}.io/fantastic-admin/logo.png`,width:200},null,8,["src"])])]),_:1}),t(l,{title:"\u56FE\u7247\u52A0\u8F7D\u5931\u8D25\u65F6"},{default:r(()=>[a("div",null,[t(o,{src:"http://www.baidu.com",width:"100px",height:"100px"})])]),_:1})])}typeof d=="function"&&d(h);var P=m(h,[["render",O]]);export{P as default};
