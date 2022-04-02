
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{aA as n,c as t,b as a,w as e,j as s,n as u,ac as o,q as i,e as l,t as c,g as r,z as f,ad as d}from"./index.87af0725.js";const b=f("1"),m=f("1"),p={setup(s){const f=n();function p(){f.setNumber(f.number+1)}function _(){f.setNumber(f.number-1)}return(n,s)=>{const g=d,j=u("el-button"),k=o;return i(),t("div",null,[a(g,{title:"数字标记",content:"搭配 Pinia 可实现动态设置。请控制数字展示长度，避免导航标记覆盖导航标题，为 0 时则隐藏"}),a(k,null,{default:e((()=>[l("div",null,"当前 badge 值："+c(r(f).number),1),a(j,{icon:"el-icon-plus",onClick:p},{default:e((()=>[b])),_:1}),a(j,{icon:"el-icon-minus",onClick:_},{default:e((()=>[m])),_:1})])),_:1})])}}};"function"==typeof s&&s(p);export{p as default};
