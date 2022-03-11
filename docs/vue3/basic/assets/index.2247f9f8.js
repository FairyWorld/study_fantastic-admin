
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as e}from"./index.d5f01412.js";import{i as a,a as t,r as s,f as r,b as n,e as o,W as i,n as l,u as c,k as d,s as u}from"./vendor.9748e354.js";const p=["xlink:href"],f=a({name:"SvgIcon"});var h=e(Object.assign(f,{props:{name:{type:String,required:!0},flip:{type:String,validator:e=>["","horizontal","vertical","both"].includes(e),default:""},rotate:{type:Number,validator:e=>e>=0&&e<=360,default:0}},setup(e){const a=e,f=t((()=>{let e=[];if(""!=a.flip)switch(a.flip){case"horizontal":e.push("rotateY(180deg)");break;case"vertical":e.push("rotateX(180deg)");break;case"both":e.push("rotateX(180deg)"),e.push("rotateY(180deg)")}return 0!=a.rotate&&e.push(`rotate(${a.rotate}deg)`),`transform: ${e.join(" ")};`}));return(a,t)=>{const h=s("el-icon");return 0===e.name.indexOf("el-icon-")||0===e.name.indexOf("ElIcon")?(r(),n(h,{key:0,class:"svg-icon",style:l(c(f))},{default:o((()=>[(r(),n(i(e.name)))])),_:1},8,["style"])):(r(),d("svg",{key:1,class:"svg-icon",style:l(c(f)),"aria-hidden":"true"},[u("use",{"xlink:href":`#icon-${e.name}`},null,8,p)],4))}}}),[["__scopeId","data-v-746f6695"]]);export{h as _};
