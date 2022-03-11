
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as e,b as l,n as a,o as t}from"./index.2c18650f.js";import o from"./alert.93d55ba6.js";import{h as u,q as d,w as s,l as n,o as m}from"./vendor.9da56f98.js";const r={components:{Alert:o},data:()=>({value1:null,value2:null,value3:3.7})};"function"==typeof l&&l(r);var f=e(r,[["render",function(e,l,o,r,f,v){const c=n("Alert"),i=t,p=n("el-rate"),V=a;return m(),u("div",null,[d(c),d(i,{title:"评分"}),d(V,{title:"基础用法",class:"demo"},{default:s((()=>[d(p,{modelValue:f.value1,"onUpdate:modelValue":l[0]||(l[0]=e=>f.value1=e)},null,8,["modelValue"])])),_:1}),d(V,{title:"辅助文字",class:"demo"},{default:s((()=>[d(p,{modelValue:f.value2,"onUpdate:modelValue":l[1]||(l[1]=e=>f.value2=e),"show-text":"",texts:["极差","差","一般","好","极好"]},null,8,["modelValue"])])),_:1}),d(V,{title:"只读",class:"demo"},{default:s((()=>[d(p,{modelValue:f.value3,"onUpdate:modelValue":l[2]||(l[2]=e=>f.value3=e),disabled:"","show-score":"","text-color":"#ff9900","score-template":"{value}"},null,8,["modelValue"])])),_:1})])}]]);export{f as default};
