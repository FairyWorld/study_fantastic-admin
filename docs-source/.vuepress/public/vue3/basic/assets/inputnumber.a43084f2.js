
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as e,b as l,h as a,j as m}from"./index.d5f01412.js";import u from"./alert.03a4f071.js";import{k as n,g as o,e as t,r as d,f as s}from"./vendor.9748e354.js";const i={components:{Alert:u},data:()=>({num:1,num2:1,num3:5,num4:1,num5:1})};"function"==typeof l&&l(i);var r=e(i,[["render",function(e,l,u,i,r,p){const f=d("Alert"),V=m,c=d("el-input-number"),_=a;return s(),n("div",null,[o(f),o(V,{title:"计数器"}),o(_,{title:"基础用法",class:"demo"},{default:t((()=>[o(c,{modelValue:r.num,"onUpdate:modelValue":l[0]||(l[0]=e=>r.num=e),min:1,max:10,label:"描述文字"},null,8,["modelValue"])])),_:1}),o(_,{title:"禁用状态",class:"demo"},{default:t((()=>[o(c,{modelValue:r.num2,"onUpdate:modelValue":l[1]||(l[1]=e=>r.num2=e),disabled:!0},null,8,["modelValue"])])),_:1}),o(_,{title:"步数",class:"demo"},{default:t((()=>[o(c,{modelValue:r.num3,"onUpdate:modelValue":l[2]||(l[2]=e=>r.num3=e),step:2},null,8,["modelValue"])])),_:1}),o(_,{title:"精度",class:"demo"},{default:t((()=>[o(c,{modelValue:r.num4,"onUpdate:modelValue":l[3]||(l[3]=e=>r.num4=e),precision:2,step:.1,max:10},null,8,["modelValue","step"])])),_:1}),o(_,{title:"按钮位置",class:"demo"},{default:t((()=>[o(c,{modelValue:r.num5,"onUpdate:modelValue":l[4]||(l[4]=e=>r.num5=e),"controls-position":"right",min:1,max:10},null,8,["modelValue"])])),_:1})])}]]);export{r as default};
