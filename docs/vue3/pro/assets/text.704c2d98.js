
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{v as t,b as n,n as s,o as a}from"./index.2c18650f.js";import{h as e,q as o,w as l,l as u,o as i,i as f,t as c,u as d,y as r}from"./vendor.9da56f98.js";const x=r("切换"),p=r("清空"),m={setup(n){const r=t();function m(){r.setText("热门"==r.text?"促销":"热门")}function v(){r.setText()}return(t,n)=>{const b=a,_=u("el-button"),j=s;return i(),e("div",null,[o(b,{title:"文字标记",content:"搭配 Pinia 可实现动态设置。请控制文字展示长度，避免导航标记覆盖导航标题"}),o(j,null,{default:l((()=>[f("div",null,"当前 badge 值：'"+c(d(r).text)+"'",1),o(_,{onClick:m},{default:l((()=>[x])),_:1}),o(_,{onClick:v},{default:l((()=>[p])),_:1})])),_:1})])}}};"function"==typeof n&&n(m);export{m as default};
