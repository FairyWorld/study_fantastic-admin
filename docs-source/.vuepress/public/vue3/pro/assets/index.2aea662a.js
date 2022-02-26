
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{a as m,n as f,m as d}from"./index.e5f7e690.js";import{h as k,q as e,w as n,l as g,o as h,y as a,O as x}from"./vendor.ee7254f0.js";var c={};const y=a("Mock.js \u5B98\u7F51"),C=a("\u6D4B\u8BD5\uFF1A\u83B7\u53D6\u7528\u6237\u6743\u9650"),j={setup(v){const{proxy:i}=x(),_=m();function r(){_.getPermissions().then(o=>{i.$notify({title:"\u5F53\u524D\u7528\u6237\u6743\u9650",dangerouslyUseHTMLString:!0,message:o.map(t=>`<p>${t}</p>`).join("")})})}function l(o){window.open(o,"top")}return(o,t)=>{const s=g("el-button"),p=f,u=d;return h(),k("div",null,[e(p,{title:"Mock",content:"\u901A\u8FC7\u62E6\u622A Ajax \u8BF7\u6C42\uFF0C\u8FD4\u56DE\u6A21\u62DF\u7684\u54CD\u5E94\u6570\u636E\uFF0C\u53EF\u4EE5\u8BA9\u524D\u7AEF\u5DE5\u7A0B\u5E08\u72EC\u7ACB\u4E8E\u540E\u7AEF\u8FDB\u884C\u5F00\u53D1\uFF0C\u672C\u6F14\u793A\u7AD9\u7684\u767B\u5F55\u548C\u6743\u9650\u83B7\u53D6\u5C31\u662F\u901A\u8FC7 mock \u5B9E\u73B0\u7684\u3002\u66F4\u591A Mock \u8BED\u6CD5\u89C4\u5219\u8BF7\u67E5\u8BE2\u5B98\u65B9\u6587\u6863"},{default:n(()=>[e(s,{icon:"el-icon-link",onClick:t[0]||(t[0]=w=>l("http://mockjs.com/"))},{default:n(()=>[y]),_:1})]),_:1}),e(u,null,{default:n(()=>[e(s,{onClick:r},{default:n(()=>[C]),_:1})]),_:1})])}}};typeof c=="function"&&c(j);export{j as default};
