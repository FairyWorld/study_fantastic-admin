
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as c,k as r}from"./index.e66802dc.js";import{r as f,w as _,D as V,o as v,l as b,F as y,k as h,ag as g}from"./vendor.ddb44672.js";const x={props:{modelValue:{type:Array,default:()=>[]},size:{type:String,default:""},disabled:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(t,{emit:m}){const u=t,i=f({options:r,props:{value:"code",label:"name"}}),p=_({get:()=>{const e=[];if(u.modelValue.length===3){const[a,o,l]=u.modelValue;r.map(d=>{d.name===a&&(e.push(d.code),d.children.map(s=>{s.name===o&&(e.push(s.code),s.children.map(n=>{n.name===l&&e.push(n.code)}))}))})}return e},set:e=>{if(e){let[a,o,l]=e;r.map(d=>{d.code===a&&(a=d.name,d.children.map(s=>{s.code===o&&(o=s.name,s.children.map(n=>{n.code===l&&(l=n.name)}))}))}),m("update:modelValue",[a,o,l])}else m("update:modelValue",[])}});return(e,a)=>{const o=V("el-cascader");return v(),b("div",null,[y(o,{modelValue:h(p),"onUpdate:modelValue":a[0]||(a[0]=l=>g(p)?p.value=l:null),options:i.value.options,props:i.value.props,size:t.size,disabled:t.disabled,clearable:"",filterable:""},null,8,["modelValue","options","props","size","disabled"])])}}};var C=c(x,[["__scopeId","data-v-38de14e2"]]);export{C as _};
