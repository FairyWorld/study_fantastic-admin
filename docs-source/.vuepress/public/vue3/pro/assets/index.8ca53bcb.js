
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{d as e,_ as a,r as l,at as s,D as d,n as o,q as t,c as n,b as p,g as u,aa as r}from"./index.87af0725.js";const m=e({name:"CascaderArea"});var i=a(Object.assign(m,{props:{modelValue:{type:Array,default:()=>[]},size:{type:String,default:""},disabled:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{emit:a}){const m=e,i=l({options:s,props:{value:"code",label:"name"}}),c=d({get:()=>{const e=[];if(3===m.modelValue.length){const[a,l,d]=m.modelValue;s.map((s=>{s.name===a&&(e.push(s.code),s.children.map((a=>{a.name===l&&(e.push(a.code),a.children.map((a=>{a.name===d&&e.push(a.code)})))})))}))}return e},set:e=>{if(e){let[l,d,o]=e;s.map((e=>{e.code===l&&(l=e.name,e.children.map((e=>{e.code===d&&(d=e.name,e.children.map((e=>{e.code===o&&(o=e.name)})))})))})),a("update:modelValue",[l,d,o])}else a("update:modelValue",[])}});return(a,l)=>{const s=o("el-cascader");return t(),n("div",null,[p(s,{modelValue:u(c),"onUpdate:modelValue":l[0]||(l[0]=e=>r(c)?c.value=e:null),options:i.value.options,props:i.value.props,size:e.size,disabled:e.disabled,clearable:"",filterable:""},null,8,["modelValue","options","props","size","disabled"])])}}}),[["__scopeId","data-v-784f1de3"]]);export{i as _};
