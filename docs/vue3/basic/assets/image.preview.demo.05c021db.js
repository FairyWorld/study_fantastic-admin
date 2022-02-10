
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as h}from"./index.5f2bc1a2.js";import{_ as f}from"./index.693bf817.js";import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";import{a as l,r as v,b as m,e as w,f as i,H as a,g as t,n as y,u as d,G as x}from"./vendor.a0579877.js";import{_ as $}from"./index.ce04210c.js";const b={class:"image-slot"},B={props:{src:{type:String,required:!0},width:{type:[Number,String],default:""},height:{type:[Number,String],default:""}},setup(n){const e=n,_=l(()=>typeof e.width=="string"?e.width:`${e.width}px`),s=l(()=>typeof e.height=="string"?e.height:`${e.height}px`);return(g,c)=>{const r=f,o=v("el-image");return m(),w(o,{src:n.src,fit:"cover",style:y(`width:${d(_)};height:${d(s)};`),"preview-src-list":[n.src]},{error:i(()=>[a("div",b,[t(r,{name:"image-load-fail"})])]),_:1},8,["src","style","preview-src-list"])}}};var N=u(B,[["__scopeId","data-v-6ac2dcda"]]);const S={props:{},data(){return{}},computed:{locationOrigin:()=>location.origin},created(){},mounted(){},methods:{}};function k(n,e,_,s,g,c){const r=$,o=N,p=h;return m(),x("div",null,[t(r,{title:"\u56FE\u7247\u9884\u89C8",content:"ImagePreview"}),t(p,null,{default:i(()=>[a("div",null,[t(o,{src:`https://hooray.${c.locationOrigin.includes("gitee")?"gitee":"github"}.io/fantastic-admin/logo.png`,width:200},null,8,["src"])])]),_:1}),t(p,{title:"\u56FE\u7247\u52A0\u8F7D\u5931\u8D25\u65F6"},{default:i(()=>[a("div",null,[t(o,{src:"http://www.baidu.com",width:"100px",height:"100px"})])]),_:1})])}var q=u(S,[["render",k],["__scopeId","data-v-8976f8fc"]]);export{q as default};
