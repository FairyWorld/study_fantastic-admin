
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as e,b as a,n as r,o as l}from"./index.2c18650f.js";import{_ as o}from"./index.442bda72.js";import{h as t,q as u,w as m,l as d,o as s,y as n}from"./vendor.9da56f98.js";const i={name:"ComponentExampleArea",props:{},data:()=>({area:["浙江省","杭州市","西湖区"],ruleForm:{area:[]},rules:{area:[{type:"array",required:!0,message:"请选择地区",trigger:"change"}]}}),created(){},mounted(){},methods:{submitForm(){this.$refs.ruleForm.validate((e=>{e&&alert("提交成功")}))}}},f=n("提交");"function"==typeof a&&a(i);var p=e(i,[["render",function(e,a,n,i,p,c){const F=l,_=o,b=r,y=d("el-form-item"),V=d("el-button"),g=d("el-form");return s(),t("div",null,[u(F,{title:"省市区联动",content:"CascaderArea"}),u(b,null,{default:m((()=>[u(_,{modelValue:p.area,"onUpdate:modelValue":a[0]||(a[0]=e=>p.area=e)},null,8,["modelValue"])])),_:1}),u(b,{title:"表单验证"},{default:m((()=>[u(g,{ref:"ruleForm",model:p.ruleForm,rules:p.rules},{default:m((()=>[u(y,{label:"地区",prop:"area"},{default:m((()=>[u(_,{modelValue:p.ruleForm.area,"onUpdate:modelValue":a[1]||(a[1]=e=>p.ruleForm.area=e)},null,8,["modelValue"])])),_:1}),u(y,null,{default:m((()=>[u(V,{type:"primary",onClick:c.submitForm},{default:m((()=>[f])),_:1},8,["onClick"])])),_:1})])),_:1},8,["model","rules"])])),_:1})])}]]);export{p as default};
