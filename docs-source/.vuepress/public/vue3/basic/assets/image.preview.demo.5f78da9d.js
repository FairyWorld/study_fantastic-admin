
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as t,b as e,h as i,j as s}from"./index.d5f01412.js";import{_ as r}from"./index.2247f9f8.js";import{i as a,a as n,r as o,f as d,b as c,e as l,s as g,g as p,n as h,u,k as f}from"./vendor.9748e354.js";const m={class:"image-slot"},w=a({name:"ImagePreview"});var v=t(Object.assign(w,{props:{src:{type:String,required:!0},width:{type:[Number,String],default:""},height:{type:[Number,String],default:""}},setup(t){const e=t,i=n((()=>"string"==typeof e.width?e.width:`${e.width}px`)),s=n((()=>"string"==typeof e.height?e.height:`${e.height}px`));return(e,a)=>{const n=r,f=o("el-image");return d(),c(f,{src:t.src,fit:"cover",style:h(`width:${u(i)};height:${u(s)};`),"preview-src-list":[t.src]},{error:l((()=>[g("div",m,[p(n,{name:"image-load-fail"})])])),_:1},8,["src","style","preview-src-list"])}}}),[["__scopeId","data-v-417c63f7"]]);const y={props:{},data:()=>({}),computed:{locationOrigin:()=>location.origin},created(){},mounted(){},methods:{}};"function"==typeof e&&e(y);var b=t(y,[["render",function(t,e,r,a,n,o){const c=s,h=v,u=i;return d(),f("div",null,[p(c,{title:"图片预览",content:"ImagePreview"}),p(u,null,{default:l((()=>[g("div",null,[p(h,{src:`https://hooray.${o.locationOrigin.includes("gitee")?"gitee":"github"}.io/fantastic-admin/logo.png`,width:200},null,8,["src"])])])),_:1}),p(u,{title:"图片加载失败时"},{default:l((()=>[g("div",null,[p(h,{src:"http://www.baidu.com",width:"100px",height:"100px"})])])),_:1})])}]]);export{b as default};
