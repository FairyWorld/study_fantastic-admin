
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{a as t,c as n,e as o,f as e,j as s,n as a,$ as i,Z as c,q as l,y as u,A as r}from"./index.9be238e7.js";const f=u("Mock.js 官网"),p=u("测试：获取用户权限"),d={setup(s){const{proxy:u}=r(),d=t();function k(){d.getPermissions().then((t=>{u.$notify({title:"当前用户权限",dangerouslyUseHTMLString:!0,message:t.map((t=>`<p>${t}</p>`)).join("")})}))}return(t,s)=>{const u=a("el-button"),r=i,d=c;return l(),n("div",null,[o(r,{title:"Mock",content:"通过拦截 Ajax 请求，返回模拟的响应数据，可以让前端工程师独立于后端进行开发，本演示站的登录和权限获取就是通过 mock 实现的。更多 Mock 语法规则请查询官方文档"},{default:e((()=>[o(u,{icon:"el-icon-link",onClick:s[0]||(s[0]=t=>{return n="http://mockjs.com/",void window.open(n,"top");var n})},{default:e((()=>[f])),_:1})])),_:1}),o(d,null,{default:e((()=>[o(u,{onClick:k},{default:e((()=>[p])),_:1})])),_:1})])}}};"function"==typeof s&&s(d);export{d as default};
