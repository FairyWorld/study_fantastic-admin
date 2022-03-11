
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as e,p as a}from"./index.2c18650f.js";import{g as l,r as s,z as o,l as d,o as p,h as t,q as n,u as r,ak as u}from"./vendor.9da56f98.js";const m=l({name:"CascaderArea"});var i=e(Object.assign(m,{props:{modelValue:{type:Array,default:()=>[]},size:{type:String,default:""},disabled:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{emit:l}){const m=e,i=s({options:a,props:{value:"code",label:"name"}}),c=o({get:()=>{const e=[];if(3===m.modelValue.length){const[l,s,o]=m.modelValue;a.map((a=>{a.name===l&&(e.push(a.code),a.children.map((a=>{a.name===s&&(e.push(a.code),a.children.map((a=>{a.name===o&&e.push(a.code)})))})))}))}return e},set:e=>{if(e){let[s,o,d]=e;a.map((e=>{e.code===s&&(s=e.name,e.children.map((e=>{e.code===o&&(o=e.name,e.children.map((e=>{e.code===d&&(d=e.name)})))})))})),l("update:modelValue",[s,o,d])}else l("update:modelValue",[])}});return(a,l)=>{const s=d("el-cascader");return p(),t("div",null,[n(s,{modelValue:r(c),"onUpdate:modelValue":l[0]||(l[0]=e=>u(c)?c.value=e:null),options:i.value.options,props:i.value.props,size:e.size,disabled:e.disabled,clearable:"",filterable:""},null,8,["modelValue","options","props","size","disabled"])])}}}),[["__scopeId","data-v-99a74718"]]);export{i as _};
