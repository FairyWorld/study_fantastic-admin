
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as c,l as m}from"./index.8f12b84b.js";import{j as _,r as f,w as V,D as v,o as b,l as y,F as g,k as h,ag as C}from"./vendor.d1c84aa2.js";const x=_({name:"CascaderArea"}),z=Object.assign(x,{props:{modelValue:{type:Array,default:()=>[]},size:{type:String,default:""},disabled:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(t,{emit:r}){const u=t,i=f({options:m,props:{value:"code",label:"name"}}),p=V({get:()=>{const e=[];if(u.modelValue.length===3){const[a,o,l]=u.modelValue;m.map(s=>{s.name===a&&(e.push(s.code),s.children.map(d=>{d.name===o&&(e.push(d.code),d.children.map(n=>{n.name===l&&e.push(n.code)}))}))})}return e},set:e=>{if(e){let[a,o,l]=e;m.map(s=>{s.code===a&&(a=s.name,s.children.map(d=>{d.code===o&&(o=d.name,d.children.map(n=>{n.code===l&&(l=n.name)}))}))}),r("update:modelValue",[a,o,l])}else r("update:modelValue",[])}});return(e,a)=>{const o=v("el-cascader");return b(),y("div",null,[g(o,{modelValue:h(p),"onUpdate:modelValue":a[0]||(a[0]=l=>C(p)?p.value=l:null),options:i.value.options,props:i.value.props,size:t.size,disabled:t.disabled,clearable:"",filterable:""},null,8,["modelValue","options","props","size","disabled"])])}}});var B=c(z,[["__scopeId","data-v-784f1de3"]]);export{B as _};
