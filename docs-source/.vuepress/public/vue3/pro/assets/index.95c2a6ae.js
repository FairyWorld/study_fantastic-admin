
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{c as a,b as t,w as n,j as s,n as e,ac as l,q as o,e as u,z as c,ad as r,C as d}from"./index.80ead521.js";const f=u("p",null,"访问侧边栏导航里的任意路由，都会在标签栏里自动创建一个标签。",-1),i=u("p",null,"除了在标签栏里操作关闭标签，你也可以使用全局方法关闭当前页面的标签。但如果当前只有一个标签时，则无法关闭。",-1),p=c("关闭当前标签页"),b={setup(s){const{proxy:u}=d();function c(){u.$tabbar.close("/dashboard")}return(s,u)=>{const d=r,b=e("el-button"),x=l;return o(),a("div",null,[t(d,{title:"标签栏",content:"功能类似于浏览器的标签栏，支持右键操作"}),t(x,null,{default:n((()=>[f,i,t(b,{onClick:c},{default:n((()=>[p])),_:1})])),_:1})])}}};"function"==typeof s&&s(b);export{b as default};
