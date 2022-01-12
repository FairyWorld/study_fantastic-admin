
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as i}from"./index.2d9906c1.js";import{_ as d}from"./index.4e39c82e.js";import{B as l,o,C as n,D as a,$ as _,Y as t,m as r,q as m,G as u}from"./vendor.db0e6471.js";const f={class:"num"},p={class:"tip"},g={props:{colorFrom:{type:String,default:"#843cf6"},colorTo:{type:String,default:"#759bff"},header:{type:String,default:""},num:{type:Number,default:0},tip:{type:String,default:""},icon:{type:String,default:""}},setup(e){return(y,v)=>{const c=i,s=l("el-card");return o(),n(s,{shadow:"hover",class:"mini-card",style:u({background:`linear-gradient(50deg, ${e.colorFrom}, ${e.colorTo})`})},{header:a(()=>[_(t(e.header),1)]),default:a(()=>[r("div",f,t(e.num),1),r("div",p,t(e.tip),1),e.icon?(o(),n(c,{key:0,name:e.icon,rotate:20},null,8,["name"])):m("v-if",!0)]),_:1},8,["style"])}}};var b=d(g,[["__scopeId","data-v-60b3af78"]]);export{b as _};
