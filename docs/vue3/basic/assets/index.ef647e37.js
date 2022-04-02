
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{d as e,_ as a,B as t,n as s,q as r,h as n,f as o,C as i,D as l,g as c,c as d,b as u}from"./index.b6307f63.js";const p=["xlink:href"],f=e({name:"SvgIcon"});var h=a(Object.assign(f,{props:{name:{type:String,required:!0},flip:{type:String,validator:e=>["","horizontal","vertical","both"].includes(e),default:""},rotate:{type:Number,validator:e=>e>=0&&e<=360,default:0}},setup(e){const a=e,f=t((()=>{let e=[];if(""!=a.flip)switch(a.flip){case"horizontal":e.push("rotateY(180deg)");break;case"vertical":e.push("rotateX(180deg)");break;case"both":e.push("rotateX(180deg)"),e.push("rotateY(180deg)")}return 0!=a.rotate&&e.push(`rotate(${a.rotate}deg)`),`transform: ${e.join(" ")};`}));return(a,t)=>{const h=s("el-icon");return 0===e.name.indexOf("el-icon-")||0===e.name.indexOf("ElIcon")?(r(),n(h,{key:0,class:"svg-icon",style:l(c(f))},{default:o((()=>[(r(),n(i(e.name)))])),_:1},8,["style"])):(r(),d("svg",{key:1,class:"svg-icon",style:l(c(f)),"aria-hidden":"true"},[u("use",{"xlink:href":`#icon-${e.name}`},null,8,p)],4))}}}),[["__scopeId","data-v-42ef9cc4"]]);export{h as _};
