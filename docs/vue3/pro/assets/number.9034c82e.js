
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{v as n,b as t,n as e,o as s}from"./index.2c18650f.js";import{h as o,q as u,w as a,l as i,o as l,i as r,t as c,u as f,y as d}from"./vendor.9da56f98.js";const m=d("1"),b=d("1"),p={setup(t){const d=n();function p(){d.setNumber(d.number+1)}function v(){d.setNumber(d.number-1)}return(n,t)=>{const _=s,j=i("el-button"),k=e;return l(),o("div",null,[u(_,{title:"数字标记",content:"搭配 Pinia 可实现动态设置。请控制数字展示长度，避免导航标记覆盖导航标题，为 0 时则隐藏"}),u(k,null,{default:a((()=>[r("div",null,"当前 badge 值："+c(f(d).number),1),u(j,{icon:"el-icon-plus",onClick:p},{default:a((()=>[m])),_:1}),u(j,{icon:"el-icon-minus",onClick:v},{default:a((()=>[b])),_:1})])),_:1})])}}};"function"==typeof t&&t(p);export{p as default};
