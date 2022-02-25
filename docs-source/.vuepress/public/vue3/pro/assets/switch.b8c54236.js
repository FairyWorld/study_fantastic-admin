
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as d,m as _,n as c}from"./index.62acde6f.js";import v from"./alert.13c35c1b.js";import{h as f,q as e,w as a,l as s,o as V}from"./vendor.ee7254f0.js";var m={};const r={components:{Alert:v},data(){return{value:!0,value1:!0,value2:!0,value3:!1}}};function x(g,l,w,U,o,b){const i=s("Alert"),p=c,n=s("el-switch"),u=_;return V(),f("div",null,[e(i),e(p,{title:"\u5F00\u5173"}),e(u,{title:"\u57FA\u7840\u7528\u6CD5",class:"demo"},{default:a(()=>[e(n,{modelValue:o.value,"onUpdate:modelValue":l[0]||(l[0]=t=>o.value=t),"active-color":"#13ce66","inactive-color":"#ff4949"},null,8,["modelValue"])]),_:1}),e(u,{title:"\u6587\u5B57\u63CF\u8FF0",class:"demo"},{default:a(()=>[e(n,{modelValue:o.value1,"onUpdate:modelValue":l[1]||(l[1]=t=>o.value1=t),"active-text":"\u6309\u6708\u4ED8\u8D39","inactive-text":"\u6309\u5E74\u4ED8\u8D39"},null,8,["modelValue"])]),_:1}),e(u,{title:"\u7981\u7528\u72B6\u6001",class:"demo"},{default:a(()=>[e(n,{modelValue:o.value2,"onUpdate:modelValue":l[2]||(l[2]=t=>o.value2=t),disabled:"",style:{"margin-right":"10px"}},null,8,["modelValue"]),e(n,{modelValue:o.value3,"onUpdate:modelValue":l[3]||(l[3]=t=>o.value3=t),disabled:""},null,8,["modelValue"])]),_:1})])}typeof m=="function"&&m(r);var B=d(r,[["render",x]]);export{B as default};
