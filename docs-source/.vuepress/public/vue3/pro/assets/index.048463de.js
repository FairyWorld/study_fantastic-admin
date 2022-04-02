
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{d as e,_ as a,r as o,L as s,n as t,q as l,c as n,I as c,b as i,w as r,z as u,t as d,i as f}from"./index.992324c5.js";const v={class:"search-container"},m={key:0,class:"more"},p=e({name:"SearchBar"});var b=a(Object.assign(p,{props:{showMore:{type:Boolean,default:!1},unfold:{type:Boolean,default:!1}},emits:["toggle"],setup(e,{emit:a}){const p=e,b=o(!p.unfold);function g(){b.value=!b.value,a("toggle",b.value)}return s((()=>p.unfold),(()=>g()),{immediate:!0}),(a,o)=>{const s=t("el-button");return l(),n("div",v,[c(a.$slots,"default",{},void 0,!0),e.showMore?(l(),n("div",m,[i(s,{type:"text",size:"small",icon:b.value?"el-icon-caret-top":"el-icon-caret-bottom",onClick:g},{default:r((()=>[u(d(b.value?"收起":"展开"),1)])),_:1},8,["icon"])])):f("v-if",!0)])}}}),[["__scopeId","data-v-5fdcbaf8"]]);export{b as _};
