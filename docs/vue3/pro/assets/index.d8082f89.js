
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as u}from"./index.8f12b84b.js";import{j as d,w as m,D as f,o as n,z as l,A as _,a5 as p,G as s,k as r,l as i,a6 as h,m as y}from"./vendor.d1c84aa2.js";const g=["xlink:href"],v=d({name:"SvgIcon"}),k=Object.assign(v,{props:{name:{type:String,required:!0},flip:{type:String,validator(e){return["","horizontal","vertical","both"].includes(e)},default:""},rotate:{type:Number,validator(e){return e>=0&&e<=360},default:0}},setup(e){const a=e,o=m(()=>{let t=[];if(a.flip!="")switch(a.flip){case"horizontal":t.push("rotateY(180deg)");break;case"vertical":t.push("rotateX(180deg)");break;case"both":t.push("rotateX(180deg)"),t.push("rotateY(180deg)");break}return a.rotate!=0&&t.push(`rotate(${a.rotate}deg)`),`transform: ${t.join(" ")};`});return(t,x)=>{const c=f("el-icon");return e.name.indexOf("el-icon-")===0||e.name.indexOf("ElIcon")===0?(n(),l(c,{key:0,class:"svg-icon",style:s(r(o))},{default:_(()=>[(n(),l(p(e.name)))]),_:1},8,["style"])):e.name.indexOf("ri-")===0?(n(),i("i",{key:1,class:h(["svg-icon",e.name]),style:s(r(o))},null,6)):(n(),i("svg",{key:2,class:"svg-icon",style:s(r(o)),"aria-hidden":"true"},[y("use",{"xlink:href":`#icon-${e.name}`},null,8,g)],4))}}});var C=u(k,[["__scopeId","data-v-bc2a88bc"]]);export{C as _};
