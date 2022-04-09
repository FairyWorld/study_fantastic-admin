
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{u as a,D as e,c as t,b as l,w as n,j as u,n as o,ac as s,q as r,g as d,aa as c,z as p,ad as i}from"./index.80ead521.js";const f=p("开启"),m=p("关闭"),b={setup(u){const p=a(),b=e({get:function(){return p.app.enableWatermark},set:function(a){p.$patch((e=>{e.app.enableWatermark=a}))}});return(a,e)=>{const u=i,p=o("el-radio-button"),_=o("el-radio-group"),g=s;return r(),t("div",null,[l(u,{title:"页面水印",content:"在某些场景下，不希望用户将系统里的信息随意截图并转发，这时可开启页面水印，以减少这种情况发生"}),l(g,{title:"可在 src\\layout\\components\\Watermark\\index.vue 文件里定制水印文案内容"},{default:n((()=>[l(_,{modelValue:d(b),"onUpdate:modelValue":e[0]||(e[0]=a=>c(b)?b.value=a:null)},{default:n((()=>[l(p,{label:!0},{default:n((()=>[f])),_:1}),l(p,{label:!1},{default:n((()=>[m])),_:1})])),_:1},8,["modelValue"])])),_:1})])}}};"function"==typeof u&&u(b);export{b as default};
