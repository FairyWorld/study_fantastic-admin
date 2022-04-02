
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{d as a,_ as e,r as o,L as s,n as t,q as l,c as n,I as c,b as i,w as r,z as u,t as d,i as f}from"./index.87af0725.js";const v={class:"search-container"},m={key:0,class:"more"},p=a({name:"SearchBar"});var b=e(Object.assign(p,{props:{showMore:{type:Boolean,default:!1},unfold:{type:Boolean,default:!1}},emits:["toggle"],setup(a,{emit:e}){const p=a,b=o(!p.unfold);function g(){b.value=!b.value,e("toggle",b.value)}return s((()=>p.unfold),(()=>g()),{immediate:!0}),(e,o)=>{const s=t("el-button");return l(),n("div",v,[c(e.$slots,"default",{},void 0,!0),a.showMore?(l(),n("div",m,[i(s,{type:"text",size:"small",icon:b.value?"el-icon-caret-top":"el-icon-caret-bottom",onClick:g},{default:r((()=>[u(d(b.value?"收起":"展开"),1)])),_:1},8,["icon"])])):f("v-if",!0)])}}}),[["__scopeId","data-v-5fdcbaf8"]]);export{b as _};
