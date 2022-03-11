
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{a as o,b as t,o as n,n as s}from"./index.2c18650f.js";import{h as e,q as a,w as i,l,o as c,y as r,O as u}from"./vendor.9da56f98.js";const f=r("Mock.js 官网"),d=r("测试：获取用户权限"),p={setup(t){const{proxy:r}=u(),p=o();function m(){p.getPermissions().then((o=>{r.$notify({title:"当前用户权限",dangerouslyUseHTMLString:!0,message:o.map((o=>`<p>${o}</p>`)).join("")})}))}return(o,t)=>{const r=l("el-button"),u=n,p=s;return c(),e("div",null,[a(u,{title:"Mock",content:"通过拦截 Ajax 请求，返回模拟的响应数据，可以让前端工程师独立于后端进行开发，本演示站的登录和权限获取就是通过 mock 实现的。更多 Mock 语法规则请查询官方文档"},{default:i((()=>[a(r,{icon:"el-icon-link",onClick:t[0]||(t[0]=o=>{return t="http://mockjs.com/",void window.open(t,"top");var t})},{default:i((()=>[f])),_:1})])),_:1}),a(p,null,{default:i((()=>[a(r,{onClick:m},{default:i((()=>[d])),_:1})])),_:1})])}}};"function"==typeof t&&t(p);export{p as default};
