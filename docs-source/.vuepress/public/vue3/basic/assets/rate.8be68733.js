
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as e,b as l,h as a,j as t}from"./index.d5f01412.js";import o from"./alert.03a4f071.js";import{k as u,g as s,e as d,r as n,f as r}from"./vendor.9748e354.js";const m={components:{Alert:o},data:()=>({value1:null,value2:null,value3:3.7})};"function"==typeof l&&l(m);var f=e(m,[["render",function(e,l,o,m,f,v){const i=n("Alert"),c=t,p=n("el-rate"),V=a;return r(),u("div",null,[s(i),s(c,{title:"评分"}),s(V,{title:"基础用法",class:"demo"},{default:d((()=>[s(p,{modelValue:f.value1,"onUpdate:modelValue":l[0]||(l[0]=e=>f.value1=e)},null,8,["modelValue"])])),_:1}),s(V,{title:"辅助文字",class:"demo"},{default:d((()=>[s(p,{modelValue:f.value2,"onUpdate:modelValue":l[1]||(l[1]=e=>f.value2=e),"show-text":"",texts:["极差","差","一般","好","极好"]},null,8,["modelValue"])])),_:1}),s(V,{title:"只读",class:"demo"},{default:d((()=>[s(p,{modelValue:f.value3,"onUpdate:modelValue":l[2]||(l[2]=e=>f.value3=e),disabled:"","show-score":"","text-color":"#ff9900","score-template":"{value}"},null,8,["modelValue"])])),_:1})])}]]);export{f as default};
