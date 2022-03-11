
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as e,b as l,n as a,o as m}from"./index.2c18650f.js";import o from"./alert.93d55ba6.js";import{h as u,q as n,w as t,l as d,o as s}from"./vendor.9da56f98.js";const i={components:{Alert:o},data:()=>({num:1,num2:1,num3:5,num4:1,num5:1})};"function"==typeof l&&l(i);var r=e(i,[["render",function(e,l,o,i,r,p){const V=d("Alert"),f=m,c=d("el-input-number"),_=a;return s(),u("div",null,[n(V),n(f,{title:"数字输入框"}),n(_,{title:"基础用法",class:"demo"},{default:t((()=>[n(c,{modelValue:r.num,"onUpdate:modelValue":l[0]||(l[0]=e=>r.num=e),min:1,max:10,label:"描述文字"},null,8,["modelValue"])])),_:1}),n(_,{title:"禁用状态",class:"demo"},{default:t((()=>[n(c,{modelValue:r.num2,"onUpdate:modelValue":l[1]||(l[1]=e=>r.num2=e),disabled:!0},null,8,["modelValue"])])),_:1}),n(_,{title:"步数",class:"demo"},{default:t((()=>[n(c,{modelValue:r.num3,"onUpdate:modelValue":l[2]||(l[2]=e=>r.num3=e),step:2},null,8,["modelValue"])])),_:1}),n(_,{title:"精度",class:"demo"},{default:t((()=>[n(c,{modelValue:r.num4,"onUpdate:modelValue":l[3]||(l[3]=e=>r.num4=e),precision:2,step:.1,max:10},null,8,["modelValue","step"])])),_:1}),n(_,{title:"按钮位置",class:"demo"},{default:t((()=>[n(c,{modelValue:r.num5,"onUpdate:modelValue":l[4]||(l[4]=e=>r.num5=e),"controls-position":"right",min:1,max:10},null,8,["modelValue"])])),_:1})])}]]);export{r as default};
