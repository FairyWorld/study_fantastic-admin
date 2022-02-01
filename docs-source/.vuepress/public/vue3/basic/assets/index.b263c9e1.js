
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";import{a as u,r as d,b as r,e as o,f as p,n as s,u as l,G as _,H as f,S as m}from"./vendor.8926ad61.js";const h=["xlink:href"],v={props:{name:{type:String,required:!0},flip:{type:String,validator(e){return["","horizontal","vertical","both"].includes(e)},default:""},rotate:{type:Number,validator(e){return e>=0&&e<=360},default:0}},setup(e){const a=e,n=u(()=>{let t=[];if(a.flip!="")switch(a.flip){case"horizontal":t.push("rotateY(180deg)");break;case"vertical":t.push("rotateX(180deg)");break;case"both":t.push("rotateX(180deg)"),t.push("rotateY(180deg)");break}return a.rotate!=0&&t.push(`rotate(${a.rotate}deg)`),`transform: ${t.join(" ")};`});return(t,y)=>{const c=d("el-icon");return e.name.indexOf("el-icon-")===0||e.name.indexOf("ElIcon")===0?(r(),o(c,{key:0,class:"svg-icon",style:s(l(n))},{default:p(()=>[(r(),o(m(e.name)))]),_:1},8,["style"])):(r(),_("svg",{key:1,class:"svg-icon",style:s(l(n)),"aria-hidden":"true"},[f("use",{"xlink:href":`#icon-${e.name}`},null,8,h)],4))}}};var k=i(v,[["__scopeId","data-v-09f19149"]]);export{k as _};
