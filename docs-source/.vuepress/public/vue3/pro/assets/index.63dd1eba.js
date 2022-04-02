
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{a as t,c as n,b as o,w as s,j as a,n as e,ad as c,ac as i,q as l,z as u,C as r}from"./index.992324c5.js";const d=u("Mock.js 官网"),p=u("测试：获取用户权限"),f={setup(a){const{proxy:u}=r(),f=t();function k(){f.getPermissions().then((t=>{u.$notify({title:"当前用户权限",dangerouslyUseHTMLString:!0,message:t.map((t=>`<p>${t}</p>`)).join("")})}))}return(t,a)=>{const u=e("el-button"),r=c,f=i;return l(),n("div",null,[o(r,{title:"Mock",content:"通过拦截 Ajax 请求，返回模拟的响应数据，可以让前端工程师独立于后端进行开发，本演示站的登录和权限获取就是通过 mock 实现的。更多 Mock 语法规则请查询官方文档"},{default:s((()=>[o(u,{icon:"el-icon-link",onClick:a[0]||(a[0]=t=>{return n="http://mockjs.com/",void window.open(n,"top");var n})},{default:s((()=>[d])),_:1})])),_:1}),o(f,null,{default:s((()=>[o(u,{onClick:k},{default:s((()=>[p])),_:1})])),_:1})])}}};"function"==typeof a&&a(f);export{f as default};
