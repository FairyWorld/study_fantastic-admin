
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as c,l as r}from"./index.677bf551.js";import{r as f,w as _,D as V,o as v,l as b,F as y,k as h,ag as g}from"./vendor.7ef8ea63.js";const x={props:{modelValue:{type:Array,default:()=>[]},size:{type:String,default:""},disabled:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(t,{emit:m}){const u=t,i=f({options:r,props:{value:"code",label:"name"}}),p=_({get:()=>{const e=[];if(u.modelValue.length===3){const[a,o,l]=u.modelValue;r.map(s=>{s.name===a&&(e.push(s.code),s.children.map(d=>{d.name===o&&(e.push(d.code),d.children.map(n=>{n.name===l&&e.push(n.code)}))}))})}return e},set:e=>{if(e){let[a,o,l]=e;r.map(s=>{s.code===a&&(a=s.name,s.children.map(d=>{d.code===o&&(o=d.name,d.children.map(n=>{n.code===l&&(l=n.name)}))}))}),m("update:modelValue",[a,o,l])}else m("update:modelValue",[])}});return(e,a)=>{const o=V("el-cascader");return v(),b("div",null,[y(o,{modelValue:h(p),"onUpdate:modelValue":a[0]||(a[0]=l=>g(p)?p.value=l:null),options:i.value.options,props:i.value.props,size:t.size,disabled:t.disabled,clearable:"",filterable:""},null,8,["modelValue","options","props","size","disabled"])])}}};var N=c(x,[["__scopeId","data-v-508f6864"]]);export{N as _};
