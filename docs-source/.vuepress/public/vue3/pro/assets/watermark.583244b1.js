
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{u as a,b as e,n as t,o as l}from"./index.2c18650f.js";import{z as o,h as n,q as u,w as s,l as r,o as d,u as f,ak as p,y as i}from"./vendor.9da56f98.js";const c=i("开启"),m=i("关闭"),b={setup(e){const i=a(),b=o({get:function(){return i.app.enableWatermark},set:function(a){i.$patch((e=>{e.app.enableWatermark=a}))}});return(a,e)=>{const o=l,i=r("el-radio-button"),k=r("el-radio-group"),v=t;return d(),n("div",null,[u(o,{title:"页面水印",content:"在某些场景下，不希望用户将系统里的信息随意截图并转发，这时可开启页面水印，以减少这种情况发生"}),u(v,{title:"可在 src\\layout\\components\\Watermark\\index.vue 文件里定制水印文案内容"},{default:s((()=>[u(k,{modelValue:f(b),"onUpdate:modelValue":e[0]||(e[0]=a=>p(b)?b.value=a:null)},{default:s((()=>[u(i,{label:!0},{default:s((()=>[c])),_:1}),u(i,{label:!1},{default:s((()=>[m])),_:1})])),_:1},8,["modelValue"])])),_:1})])}}};"function"==typeof e&&e(b);export{b as default};
