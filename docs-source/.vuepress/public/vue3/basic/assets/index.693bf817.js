
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as c}from"./plugin-vue_export-helper.21dcd24c.js";import{a as u,r as d,b as n,e as o,f as p,n as s,u as i,G as f,H as m,S as _}from"./vendor.a0579877.js";const h=["xlink:href"],y={props:{name:{type:String,required:!0},flip:{type:String,validator(e){return["","horizontal","vertical","both"].includes(e)},default:""},rotate:{type:Number,validator(e){return e>=0&&e<=360},default:0}},setup(e){const a=e,r=u(()=>{let t=[];if(a.flip!="")switch(a.flip){case"horizontal":t.push("rotateY(180deg)");break;case"vertical":t.push("rotateX(180deg)");break;case"both":t.push("rotateX(180deg)"),t.push("rotateY(180deg)");break}return a.rotate!=0&&t.push(`rotate(${a.rotate}deg)`),`transform: ${t.join(" ")};`});return(t,v)=>{const l=d("el-icon");return e.name.indexOf("el-icon-")===0||e.name.indexOf("ElIcon")===0?(n(),o(l,{key:0,class:"svg-icon",style:s(i(r))},{default:p(()=>[(n(),o(_(e.name)))]),_:1},8,["style"])):(n(),f("svg",{key:1,class:"svg-icon",style:s(i(r)),"aria-hidden":"true"},[m("use",{"xlink:href":`#icon-${e.name}`},null,8,h)],4))}}};var x=c(y,[["__scopeId","data-v-09f19149"]]);export{x as _};
