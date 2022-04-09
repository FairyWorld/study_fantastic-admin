
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as e,c as a,b as r,w as l,j as o,ac as t,n as u,q as m,z as d,ad as s}from"./index.80ead521.js";import{_ as n}from"./index.3db476e5.js";const i={name:"ComponentExampleArea",props:{},data:()=>({area:["浙江省","杭州市","西湖区"],ruleForm:{area:[]},rules:{area:[{type:"array",required:!0,message:"请选择地区",trigger:"change"}]}}),created(){},mounted(){},methods:{submitForm(){this.$refs.ruleForm.validate((e=>{e&&alert("提交成功")}))}}},f=d("提交");"function"==typeof o&&o(i);var p=e(i,[["render",function(e,o,d,i,p,c){const F=s,_=n,b=t,V=u("el-form-item"),y=u("el-button"),g=u("el-form");return m(),a("div",null,[r(F,{title:"省市区联动",content:"CascaderArea"}),r(b,null,{default:l((()=>[r(_,{modelValue:p.area,"onUpdate:modelValue":o[0]||(o[0]=e=>p.area=e)},null,8,["modelValue"])])),_:1}),r(b,{title:"表单验证"},{default:l((()=>[r(g,{ref:"ruleForm",model:p.ruleForm,rules:p.rules},{default:l((()=>[r(V,{label:"地区",prop:"area"},{default:l((()=>[r(_,{modelValue:p.ruleForm.area,"onUpdate:modelValue":o[1]||(o[1]=e=>p.ruleForm.area=e)},null,8,["modelValue"])])),_:1}),r(V,null,{default:l((()=>[r(y,{type:"primary",onClick:c.submitForm},{default:l((()=>[f])),_:1},8,["onClick"])])),_:1})])),_:1},8,["model","rules"])])),_:1})])}]]);export{p as default};
