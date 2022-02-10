
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as h}from"./index.9ed489d8.js";import{_ as f}from"./index.2445da7e.js";import{_ as d}from"./index.64e7900a.js";import{j as v,w as l,D as w,o as u,z as x,A as r,m as s,F as t,G as y,k as m,l as $}from"./vendor.bcd7a662.js";import{_ as b}from"./index.abc7a202.js";const k={class:"image-slot"},B=v({name:"ImagePreview"}),N=Object.assign(B,{props:{src:{type:String,required:!0},width:{type:[Number,String],default:""},height:{type:[Number,String],default:""}},setup(n){const e=n,a=l(()=>typeof e.width=="string"?e.width:`${e.width}px`),c=l(()=>typeof e.height=="string"?e.height:`${e.height}px`);return(g,_)=>{const i=f,o=w("el-image");return u(),x(o,{src:n.src,fit:"cover",style:y(`width:${m(a)};height:${m(c)};`),"preview-src-list":[n.src]},{error:r(()=>[s("div",k,[t(i,{name:"image-load-fail"})])]),_:1},8,["src","style","preview-src-list"])}}});var S=d(N,[["__scopeId","data-v-d280b3d2"]]);const C={props:{},data(){return{}},computed:{locationOrigin:()=>location.origin},created(){},mounted(){},methods:{}};function I(n,e,a,c,g,_){const i=b,o=S,p=h;return u(),$("div",null,[t(i,{title:"\u56FE\u7247\u9884\u89C8",content:"ImagePreview"}),t(p,null,{default:r(()=>[s("div",null,[t(o,{src:`https://hooray.${_.locationOrigin.includes("gitee")?"gitee":"github"}.io/fantastic-admin/logo.png`,width:200},null,8,["src"])])]),_:1}),t(p,{title:"\u56FE\u7247\u52A0\u8F7D\u5931\u8D25\u65F6"},{default:r(()=>[s("div",null,[t(o,{src:"http://www.baidu.com",width:"100px",height:"100px"})])]),_:1})])}var q=d(C,[["render",I]]);export{q as default};
