
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as e,c as l,b as a,w as t,j as o,n as u,ac as d,q as s,ad as n}from"./index.80ead521.js";import m from"./alert.8f6db08a.js";const r={components:{Alert:m},data:()=>({value1:null,value2:null,value3:3.7})};"function"==typeof o&&o(r);var c=e(r,[["render",function(e,o,m,r,c,f){const v=u("Alert"),i=n,p=u("el-rate"),V=d;return s(),l("div",null,[a(v),a(i,{title:"评分"}),a(V,{title:"基础用法",class:"demo"},{default:t((()=>[a(p,{modelValue:c.value1,"onUpdate:modelValue":o[0]||(o[0]=e=>c.value1=e)},null,8,["modelValue"])])),_:1}),a(V,{title:"辅助文字",class:"demo"},{default:t((()=>[a(p,{modelValue:c.value2,"onUpdate:modelValue":o[1]||(o[1]=e=>c.value2=e),"show-text":"",texts:["极差","差","一般","好","极好"]},null,8,["modelValue"])])),_:1}),a(V,{title:"只读",class:"demo"},{default:t((()=>[a(p,{modelValue:c.value3,"onUpdate:modelValue":o[2]||(o[2]=e=>c.value3=e),disabled:"","show-score":"","text-color":"#ff9900","score-template":"{value}"},null,8,["modelValue"])])),_:1})])}]]);export{c as default};
