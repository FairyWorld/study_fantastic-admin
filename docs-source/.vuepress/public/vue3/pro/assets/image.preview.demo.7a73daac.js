
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as t,c as e,b as i,n as s,o as r}from"./index.2c18650f.js";import{g as a,z as n,l as o,o as c,A as d,w as l,i as g,q as h,x as p,u,h as f}from"./vendor.9da56f98.js";const m={class:"image-slot"},w=a({name:"ImagePreview"});var v=t(Object.assign(w,{props:{src:{type:String,required:!0},width:{type:[Number,String],default:""},height:{type:[Number,String],default:""}},setup(t){const i=t,s=n((()=>"string"==typeof i.width?i.width:`${i.width}px`)),r=n((()=>"string"==typeof i.height?i.height:`${i.height}px`));return(i,a)=>{const n=e,f=o("el-image");return c(),d(f,{src:t.src,fit:"cover",style:p(`width:${u(s)};height:${u(r)};`),"preview-src-list":[t.src]},{error:l((()=>[g("div",m,[h(n,{name:"image-load-fail"})])])),_:1},8,["src","style","preview-src-list"])}}}),[["__scopeId","data-v-417c63f7"]]);const y={props:{},data:()=>({}),computed:{locationOrigin:()=>location.origin},created(){},mounted(){},methods:{}};"function"==typeof i&&i(y);var x=t(y,[["render",function(t,e,i,a,n,o){const d=r,p=v,u=s;return c(),f("div",null,[h(d,{title:"图片预览",content:"ImagePreview"}),h(u,null,{default:l((()=>[g("div",null,[h(p,{src:`https://hooray.${o.locationOrigin.includes("gitee")?"gitee":"github"}.io/fantastic-admin/logo.png`,width:200},null,8,["src"])])])),_:1}),h(u,{title:"图片加载失败时"},{default:l((()=>[g("div",null,[h(p,{src:"http://www.baidu.com",width:"100px",height:"100px"})])])),_:1})])}]]);export{x as default};
