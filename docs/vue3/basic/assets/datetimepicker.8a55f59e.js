
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as e,c as a,e as l,f as t,j as d,n as o,Z as u,q as n,b as r,$ as s}from"./index.fc479745.js";import m from"./alert.c368f71f.js";const i={components:{Alert:m},data:()=>({value1:"",value2:[new Date(2e3,10,10,10,10),new Date(2e3,10,11,10,10)],value3:""})},p=r("div",null,"起始日期时刻为 12:00:00，结束日期时刻为 08:00:00",-1);"function"==typeof d&&d(i);var c=e(i,[["render",function(e,d,r,m,i,c){const f=o("Alert"),v=s,V=o("el-date-picker"),h=u;return n(),a("div",null,[l(f),l(v,{title:"日期时间选择器"}),l(h,{title:"日期和时间点",class:"demo"},{default:t((()=>[l(V,{modelValue:i.value1,"onUpdate:modelValue":d[0]||(d[0]=e=>i.value1=e),type:"datetime",placeholder:"选择日期时间"},null,8,["modelValue"])])),_:1}),l(h,{title:"日期和时间范围",class:"demo"},{default:t((()=>[l(V,{modelValue:i.value2,"onUpdate:modelValue":d[1]||(d[1]=e=>i.value2=e),type:"datetimerange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},null,8,["modelValue"])])),_:1}),l(h,{title:"默认的起始与结束时刻",class:"demo"},{default:t((()=>[p,l(V,{modelValue:i.value3,"onUpdate:modelValue":d[2]||(d[2]=e=>i.value3=e),type:"datetimerange",align:"right","start-placeholder":"开始日期","end-placeholder":"结束日期","default-time":[new Date(2e3,1,1,12,0,0),new Date(2e3,2,1,8,0,0)]},null,8,["modelValue","default-time"])])),_:1})])}]]);export{c as default};
