
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as p}from"./index.a91da01e.js";import{_}from"./index.454d22a3.js";import d from"./alert.8107a9bd.js";import{_ as i}from"./index.8f12b84b.js";import{l as c,F as e,A as u,D as s,o as f}from"./vendor.d1c84aa2.js";const v={components:{Alert:d},data(){return{value1:null,value2:null,value3:3.7}}};function V(x,l,g,A,o,w){const r=s("Alert"),m=_,n=s("el-rate"),a=p;return f(),c("div",null,[e(r),e(m,{title:"\u8BC4\u5206"}),e(a,{title:"\u57FA\u7840\u7528\u6CD5",class:"demo"},{default:u(()=>[e(n,{modelValue:o.value1,"onUpdate:modelValue":l[0]||(l[0]=t=>o.value1=t)},null,8,["modelValue"])]),_:1}),e(a,{title:"\u8F85\u52A9\u6587\u5B57",class:"demo"},{default:u(()=>[e(n,{modelValue:o.value2,"onUpdate:modelValue":l[1]||(l[1]=t=>o.value2=t),"show-text":"",texts:["\u6781\u5DEE","\u5DEE","\u4E00\u822C","\u597D","\u6781\u597D"]},null,8,["modelValue"])]),_:1}),e(a,{title:"\u53EA\u8BFB",class:"demo"},{default:u(()=>[e(n,{modelValue:o.value3,"onUpdate:modelValue":l[2]||(l[2]=t=>o.value3=t),disabled:"","show-score":"","text-color":"#ff9900","score-template":"{value}"},null,8,["modelValue"])]),_:1})])}var D=i(v,[["render",V]]);export{D as default};
