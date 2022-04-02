
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as e,c as l,e as a,f as t,j as o,n as u,Z as s,q as d,$ as n}from"./index.b7fe7d7b.js";import m from"./alert.78576792.js";const r={components:{Alert:m},data:()=>({value1:null,value2:null,value3:3.7})};"function"==typeof o&&o(r);var f=e(r,[["render",function(e,o,m,r,f,c){const v=u("Alert"),i=n,p=u("el-rate"),V=s;return d(),l("div",null,[a(v),a(i,{title:"评分"}),a(V,{title:"基础用法",class:"demo"},{default:t((()=>[a(p,{modelValue:f.value1,"onUpdate:modelValue":o[0]||(o[0]=e=>f.value1=e)},null,8,["modelValue"])])),_:1}),a(V,{title:"辅助文字",class:"demo"},{default:t((()=>[a(p,{modelValue:f.value2,"onUpdate:modelValue":o[1]||(o[1]=e=>f.value2=e),"show-text":"",texts:["极差","差","一般","好","极好"]},null,8,["modelValue"])])),_:1}),a(V,{title:"只读",class:"demo"},{default:t((()=>[a(p,{modelValue:f.value3,"onUpdate:modelValue":o[2]||(o[2]=e=>f.value3=e),disabled:"","show-score":"","text-color":"#ff9900","score-template":"{value}"},null,8,["modelValue"])])),_:1})])}]]);export{f as default};
