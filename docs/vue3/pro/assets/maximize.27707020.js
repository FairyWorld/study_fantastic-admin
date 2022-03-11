
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{u as a,b as t,n,o as s}from"./index.2c18650f.js";import{h as e,q as i,w as o,l as u,o as l,y as m,t as r,u as f,i as c,O as p}from"./vendor.9da56f98.js";const d=c("p",null,"可通过双击标签页，或在标签页上右键并选择“最大化”进入。",-1),x=c("p",null,"同时框架还提供全局函数，可自由控制主页面是否最大化。",-1),g={setup(t){const{proxy:c}=p(),g=a();function z(){g.mainPageMaximizeStatus?c.$mainPageMaximize(!1):c.$mainPageMaximize(!0)}return(a,t)=>{const c=s,p=u("el-button"),M=n;return l(),e("div",null,[i(c,{title:"主页面最大化",content:"扩大可视范围和操作区域，能更专注于主页面上的操作"}),i(M,null,{default:o((()=>[d,x,i(p,{onClick:z},{default:o((()=>[m(r(f(g).mainPageMaximizeStatus?"退出":"开启")+"最大化",1)])),_:1})])),_:1})])}}};"function"==typeof t&&t(g);export{g as default};
