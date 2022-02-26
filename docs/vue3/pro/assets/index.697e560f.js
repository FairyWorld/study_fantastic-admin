
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as c,o as m}from"./index.e5f7e690.js";import{g as _,r as f,z as V,l as v,o as b,h,q as y,u as g,ak as C}from"./vendor.ee7254f0.js";const x=_({name:"CascaderArea"}),z=Object.assign(x,{props:{modelValue:{type:Array,default:()=>[]},size:{type:String,default:""},disabled:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(t,{emit:r}){const u=t,i=f({options:m,props:{value:"code",label:"name"}}),p=V({get:()=>{const e=[];if(u.modelValue.length===3){const[a,o,l]=u.modelValue;m.map(s=>{s.name===a&&(e.push(s.code),s.children.map(n=>{n.name===o&&(e.push(n.code),n.children.map(d=>{d.name===l&&e.push(d.code)}))}))})}return e},set:e=>{if(e){let[a,o,l]=e;m.map(s=>{s.code===a&&(a=s.name,s.children.map(n=>{n.code===o&&(o=n.name,n.children.map(d=>{d.code===l&&(l=d.name)}))}))}),r("update:modelValue",[a,o,l])}else r("update:modelValue",[])}});return(e,a)=>{const o=v("el-cascader");return b(),h("div",null,[y(o,{modelValue:g(p),"onUpdate:modelValue":a[0]||(a[0]=l=>C(p)?p.value=l:null),options:i.value.options,props:i.value.props,size:t.size,disabled:t.disabled,clearable:"",filterable:""},null,8,["modelValue","options","props","size","disabled"])])}}});var B=c(z,[["__scopeId","data-v-99a74718"]]);export{B as _};
