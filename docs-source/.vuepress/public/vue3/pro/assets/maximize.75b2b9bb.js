
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{u as a,c as t,b as n,w as s,j as e,n as i,ac as u,q as l,z as o,t as m,g as c,e as f,ad as r,C as p}from"./index.87af0725.js";const x=f("p",null,"可通过双击标签页，或在标签页上右键并选择“最大化”进入。",-1),d=f("p",null,"同时框架还提供全局函数，可自由控制主页面是否最大化。",-1),g={setup(e){const{proxy:f}=p(),g=a();function z(){g.mainPageMaximizeStatus?f.$mainPageMaximize(!1):f.$mainPageMaximize(!0)}return(a,e)=>{const f=r,p=i("el-button"),M=u;return l(),t("div",null,[n(f,{title:"主页面最大化",content:"扩大可视范围和操作区域，能更专注于主页面上的操作"}),n(M,null,{default:s((()=>[x,d,n(p,{onClick:z},{default:s((()=>[o(m(c(g).mainPageMaximizeStatus?"退出":"开启")+"最大化",1)])),_:1})])),_:1})])}}};"function"==typeof e&&e(g);export{g as default};
