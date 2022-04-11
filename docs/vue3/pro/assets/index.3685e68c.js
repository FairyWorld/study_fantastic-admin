
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{d as e,_ as a,r as o,L as s,n as t,q as l,c as n,I as c,b as i,w as r,z as d,t as u,i as f}from"./index.afdde410.js";const v={class:"search-container"},m={key:0,class:"more"},p=e({name:"SearchBar"});var g=a(Object.assign(p,{props:{showMore:{type:Boolean,default:!1},unfold:{type:Boolean,default:!1}},emits:["toggle"],setup(e,{emit:a}){const p=e,g=o(!p.unfold);function _(){g.value=!g.value,a("toggle",g.value)}return s((()=>p.unfold),(()=>_()),{immediate:!0}),(a,o)=>{const s=t("el-button");return l(),n("div",v,[c(a.$slots,"default",{},void 0,!0),e.showMore?(l(),n("div",m,[i(s,{type:"text",size:"small",icon:g.value?"el-icon-caret-top":"el-icon-caret-bottom",onClick:_},{default:r((()=>[d(u(g.value?"收起":"展开"),1)])),_:1},8,["icon"])])):f("v-if",!0)])}}}),[["__scopeId","data-v-cc782738"]]);export{g as _};
