
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{d as t,_ as e,B as i,n as s,q as a,h as r,f as n,b as o,e as c,D as d,g as l,c as g,j as h,Z as p,$ as u}from"./index.fc479745.js";import{_ as f}from"./index.8e17ce0a.js";const m={class:"image-slot"},w=t({name:"ImagePreview"});var v=e(Object.assign(w,{props:{src:{type:String,required:!0},width:{type:[Number,String],default:""},height:{type:[Number,String],default:""}},setup(t){const e=t,g=i((()=>"string"==typeof e.width?e.width:`${e.width}px`)),h=i((()=>"string"==typeof e.height?e.height:`${e.height}px`));return(e,i)=>{const p=f,u=s("el-image");return a(),r(u,{src:t.src,fit:"cover",style:d(`width:${l(g)};height:${l(h)};`),"preview-src-list":[t.src]},{error:n((()=>[o("div",m,[c(p,{name:"image-load-fail"})])])),_:1},8,["src","style","preview-src-list"])}}}),[["__scopeId","data-v-417c63f7"]]);const y={props:{},data:()=>({}),computed:{locationOrigin:()=>location.origin},created(){},mounted(){},methods:{}};"function"==typeof h&&h(y);var x=e(y,[["render",function(t,e,i,s,r,d){const l=u,h=v,f=p;return a(),g("div",null,[c(l,{title:"图片预览",content:"ImagePreview"}),c(f,null,{default:n((()=>[o("div",null,[c(h,{src:`https://hooray.${d.locationOrigin.includes("gitee")?"gitee":"github"}.io/fantastic-admin/logo.png`,width:200},null,8,["src"])])])),_:1}),c(f,{title:"图片加载失败时"},{default:n((()=>[o("div",null,[c(h,{src:"http://www.baidu.com",width:"100px",height:"100px"})])])),_:1})])}]]);export{x as default};
