
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as e,c as l,b as a,w as u,j as m,n,ac as t,q as o,ad as d}from"./index.992324c5.js";import s from"./alert.9821d680.js";const i={components:{Alert:s},data:()=>({num:1,num2:1,num3:5,num4:1,num5:1})};"function"==typeof m&&m(i);var r=e(i,[["render",function(e,m,s,i,r,p){const c=n("Alert"),V=d,f=n("el-input-number"),_=t;return o(),l("div",null,[a(c),a(V,{title:"数字输入框"}),a(_,{title:"基础用法",class:"demo"},{default:u((()=>[a(f,{modelValue:r.num,"onUpdate:modelValue":m[0]||(m[0]=e=>r.num=e),min:1,max:10,label:"描述文字"},null,8,["modelValue"])])),_:1}),a(_,{title:"禁用状态",class:"demo"},{default:u((()=>[a(f,{modelValue:r.num2,"onUpdate:modelValue":m[1]||(m[1]=e=>r.num2=e),disabled:!0},null,8,["modelValue"])])),_:1}),a(_,{title:"步数",class:"demo"},{default:u((()=>[a(f,{modelValue:r.num3,"onUpdate:modelValue":m[2]||(m[2]=e=>r.num3=e),step:2},null,8,["modelValue"])])),_:1}),a(_,{title:"精度",class:"demo"},{default:u((()=>[a(f,{modelValue:r.num4,"onUpdate:modelValue":m[3]||(m[3]=e=>r.num4=e),precision:2,step:.1,max:10},null,8,["modelValue","step"])])),_:1}),a(_,{title:"按钮位置",class:"demo"},{default:u((()=>[a(f,{modelValue:r.num5,"onUpdate:modelValue":m[4]||(m[4]=e=>r.num5=e),"controls-position":"right",min:1,max:10},null,8,["modelValue"])])),_:1})])}]]);export{r as default};
