
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as e}from"./index.2c18650f.js";import{g as a,r as o,K as s,l as t,o as l,h as n,m as r,q as c,w as i,y as u,t as d,j as f}from"./vendor.9da56f98.js";const m={class:"search-container"},v={key:0,class:"more"},p=a({name:"SearchBar"});var g=e(Object.assign(p,{props:{showMore:{type:Boolean,default:!1},unfold:{type:Boolean,default:!1}},emits:["toggle"],setup(e,{emit:a}){const p=e,g=o(!p.unfold);function h(){g.value=!g.value,a("toggle",g.value)}return s((()=>p.unfold),(()=>h()),{immediate:!0}),(a,o)=>{const s=t("el-button");return l(),n("div",m,[r(a.$slots,"default",{},void 0,!0),e.showMore?(l(),n("div",v,[c(s,{type:"text",size:"small",icon:g.value?"el-icon-caret-top":"el-icon-caret-bottom",onClick:h},{default:i((()=>[u(d(g.value?"收起":"展开"),1)])),_:1},8,["icon"])])):f("v-if",!0)])}}}),[["__scopeId","data-v-5c5ebf8a"]]);export{g as _};
