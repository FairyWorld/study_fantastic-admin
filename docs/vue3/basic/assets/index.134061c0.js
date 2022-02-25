
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as l}from"./index.78be6e19.js";import{i as u,a as d,r as _,f as n,b as r,e as f,W as m,n as s,u as i,k as p,s as h}from"./vendor.7c7b0e52.js";const g=["xlink:href"],v=u({name:"SvgIcon"}),y=Object.assign(v,{props:{name:{type:String,required:!0},flip:{type:String,validator(e){return["","horizontal","vertical","both"].includes(e)},default:""},rotate:{type:Number,validator(e){return e>=0&&e<=360},default:0}},setup(e){const a=e,o=d(()=>{let t=[];if(a.flip!="")switch(a.flip){case"horizontal":t.push("rotateY(180deg)");break;case"vertical":t.push("rotateX(180deg)");break;case"both":t.push("rotateX(180deg)"),t.push("rotateY(180deg)");break}return a.rotate!=0&&t.push(`rotate(${a.rotate}deg)`),`transform: ${t.join(" ")};`});return(t,k)=>{const c=_("el-icon");return e.name.indexOf("el-icon-")===0||e.name.indexOf("ElIcon")===0?(n(),r(c,{key:0,class:"svg-icon",style:s(i(o))},{default:f(()=>[(n(),r(m(e.name)))]),_:1},8,["style"])):(n(),p("svg",{key:1,class:"svg-icon",style:s(i(o)),"aria-hidden":"true"},[h("use",{"xlink:href":`#icon-${e.name}`},null,8,g)],4))}}});var S=l(y,[["__scopeId","data-v-746f6695"]]);export{S as _};
