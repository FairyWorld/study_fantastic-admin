
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{d as t,_ as e,D as i,n as s,q as a,h as r,w as n,e as o,b as d,P as c,g as l,B as g,c as h,j as p,ac as u,ad as m}from"./index.80ead521.js";const w={class:"image-slot"},f=t({name:"ImagePreview"});var v=e(Object.assign(f,{props:{src:{type:String,required:!0},width:{type:[Number,String],default:""},height:{type:[Number,String],default:""}},setup(t){const e=t,h=i((()=>"string"==typeof e.width?e.width:`${e.width}px`)),p=i((()=>"string"==typeof e.height?e.height:`${e.height}px`));return(e,i)=>{const u=g,m=s("el-image");return a(),r(m,{src:t.src,fit:"cover",style:c(`width:${l(h)};height:${l(p)};`),"preview-src-list":[t.src]},{error:n((()=>[o("div",w,[d(u,{name:"image-load-fail"})])])),_:1},8,["src","style","preview-src-list"])}}}),[["__scopeId","data-v-d280b3d2"]]);const y={props:{},data:()=>({}),computed:{locationOrigin:()=>location.origin},created(){},mounted(){},methods:{}};"function"==typeof p&&p(y);var b=e(y,[["render",function(t,e,i,s,r,c){const l=m,g=v,p=u;return a(),h("div",null,[d(l,{title:"图片预览",content:"ImagePreview"}),d(p,null,{default:n((()=>[o("div",null,[d(g,{src:`https://hooray.${c.locationOrigin.includes("gitee")?"gitee":"github"}.io/fantastic-admin/logo.png`,width:200},null,8,["src"])])])),_:1}),d(p,{title:"图片加载失败时"},{default:n((()=>[o("div",null,[d(g,{src:"http://www.baidu.com",width:"100px",height:"100px"})])])),_:1})])}]]);export{b as default};
