
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{aA as n,c as e,b as t,w as a,j as s,n as u,ac as o,q as i,e as l,t as c,g as r,z as d,ad as f}from"./index.afdde410.js";const b=d("1"),m=d("1"),p={setup(s){const d=n();function p(){d.setNumber(d.number+1)}function _(){d.setNumber(d.number-1)}return(n,s)=>{const g=f,j=u("el-button"),k=o;return i(),e("div",null,[t(g,{title:"数字标记",content:"搭配 Pinia 可实现动态设置。请控制数字展示长度，避免导航标记覆盖导航标题，为 0 时则隐藏"}),t(k,null,{default:a((()=>[l("div",null,"当前 badge 值："+c(r(d).number),1),t(j,{icon:"el-icon-plus",onClick:p},{default:a((()=>[b])),_:1}),t(j,{icon:"el-icon-minus",onClick:_},{default:a((()=>[m])),_:1})])),_:1})])}}};"function"==typeof s&&s(p);export{p as default};
