
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as a,m as _,n as f}from"./index.a1178b85.js";import V from"./alert.a0609b5a.js";import{h as c,q as e,w as u,l as s,o as x}from"./vendor.ee7254f0.js";var p={};const r={components:{Alert:V},data(){return{num:1,num2:1,num3:5,num4:1,num5:1}}};function b(g,l,U,v,n,k){const d=s("Alert"),i=f,m=s("el-input-number"),t=_;return x(),c("div",null,[e(d),e(i,{title:"\u6570\u5B57\u8F93\u5165\u6846"}),e(t,{title:"\u57FA\u7840\u7528\u6CD5",class:"demo"},{default:u(()=>[e(m,{modelValue:n.num,"onUpdate:modelValue":l[0]||(l[0]=o=>n.num=o),min:1,max:10,label:"\u63CF\u8FF0\u6587\u5B57"},null,8,["modelValue"])]),_:1}),e(t,{title:"\u7981\u7528\u72B6\u6001",class:"demo"},{default:u(()=>[e(m,{modelValue:n.num2,"onUpdate:modelValue":l[1]||(l[1]=o=>n.num2=o),disabled:!0},null,8,["modelValue"])]),_:1}),e(t,{title:"\u6B65\u6570",class:"demo"},{default:u(()=>[e(m,{modelValue:n.num3,"onUpdate:modelValue":l[2]||(l[2]=o=>n.num3=o),step:2},null,8,["modelValue"])]),_:1}),e(t,{title:"\u7CBE\u5EA6",class:"demo"},{default:u(()=>[e(m,{modelValue:n.num4,"onUpdate:modelValue":l[3]||(l[3]=o=>n.num4=o),precision:2,step:.1,max:10},null,8,["modelValue","step"])]),_:1}),e(t,{title:"\u6309\u94AE\u4F4D\u7F6E",class:"demo"},{default:u(()=>[e(m,{modelValue:n.num5,"onUpdate:modelValue":l[4]||(l[4]=o=>n.num5=o),"controls-position":"right",min:1,max:10},null,8,["modelValue"])]),_:1})])}typeof p=="function"&&p(r);var C=a(r,[["render",b]]);export{C as default};
