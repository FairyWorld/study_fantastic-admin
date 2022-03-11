
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as e,b as l,n as a,o as t}from"./index.2c18650f.js";import o from"./alert.93d55ba6.js";import{h as u,q as d,w as s,l as n,o as m}from"./vendor.9da56f98.js";const i={components:{Alert:o},data:()=>({value:!0,value1:!0,value2:!0,value3:!1})};"function"==typeof l&&l(i);var r=e(i,[["render",function(e,l,o,i,r,v){const c=n("Alert"),f=t,V=n("el-switch"),p=a;return m(),u("div",null,[d(c),d(f,{title:"开关"}),d(p,{title:"基础用法",class:"demo"},{default:s((()=>[d(V,{modelValue:r.value,"onUpdate:modelValue":l[0]||(l[0]=e=>r.value=e),"active-color":"#13ce66","inactive-color":"#ff4949"},null,8,["modelValue"])])),_:1}),d(p,{title:"文字描述",class:"demo"},{default:s((()=>[d(V,{modelValue:r.value1,"onUpdate:modelValue":l[1]||(l[1]=e=>r.value1=e),"active-text":"按月付费","inactive-text":"按年付费"},null,8,["modelValue"])])),_:1}),d(p,{title:"禁用状态",class:"demo"},{default:s((()=>[d(V,{modelValue:r.value2,"onUpdate:modelValue":l[2]||(l[2]=e=>r.value2=e),disabled:"",style:{"margin-right":"10px"}},null,8,["modelValue"]),d(V,{modelValue:r.value3,"onUpdate:modelValue":l[3]||(l[3]=e=>r.value3=e),disabled:""},null,8,["modelValue"])])),_:1})])}]]);export{r as default};
