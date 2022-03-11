
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{b as e,o as a,n as l}from"./index.2c18650f.js";import{r as o,ac as t,K as u,h as s,q as d,w as n,u as i,j as p,l as r,o as c,y as f,O as v}from"./vendor.9da56f98.js";const m=f("VueUse 官网 useClipboard"),V={key:0},_=f("复制"),y={setup(e){const{proxy:f}=v(),y=o(""),b=o(""),{text:k,copy:x,copied:C,isSupported:j}=t();return u(C,(e=>{e&&f.$message.success(`复制成功：${k.value}`)})),(e,o)=>{const t=r("el-button"),u=a,f=r("el-input"),v=l;return c(),s("div",null,[d(u,{title:"剪贴板"},{default:n((()=>[d(t,{icon:"el-icon-link",onClick:o[0]||(o[0]=e=>{return a="https://vueuse.org/core/useClipboard/",void window.open(a,"top");var a})},{default:n((()=>[m])),_:1})])),_:1}),i(j)?(c(),s("div",V,[d(v,{title:"输入内容，并点击复制按钮"},{default:n((()=>[d(f,{modelValue:y.value,"onUpdate:modelValue":o[2]||(o[2]=e=>y.value=e)},{append:n((()=>[d(t,{onClick:o[1]||(o[1]=e=>i(x)(y.value))},{default:n((()=>[_])),_:1})])),_:1},8,["modelValue"])])),_:1}),d(v,{title:"复制成功后可在这粘贴测试"},{default:n((()=>[d(f,{modelValue:b.value,"onUpdate:modelValue":o[3]||(o[3]=e=>b.value=e)},null,8,["modelValue"])])),_:1})])):p("v-if",!0)])}}};"function"==typeof e&&e(y);export{y as default};
