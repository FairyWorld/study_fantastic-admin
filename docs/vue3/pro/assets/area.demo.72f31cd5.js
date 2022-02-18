
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as i}from"./index.a91da01e.js";import{_ as f}from"./index.0b7e7a76.js";import{_ as g}from"./index.454d22a3.js";import{_ as F}from"./index.8f12b84b.js";import{l as V,F as e,A as r,D as a,o as x,$ as C}from"./vendor.d1c84aa2.js";const b={name:"ComponentExampleArea",props:{},data(){return{area:["\u6D59\u6C5F\u7701","\u676D\u5DDE\u5E02","\u897F\u6E56\u533A"],ruleForm:{area:[]},rules:{area:[{type:"array",required:!0,message:"\u8BF7\u9009\u62E9\u5730\u533A",trigger:"change"}]}}},created(){},mounted(){},methods:{submitForm(){this.$refs.ruleForm.validate(n=>{n&&alert("\u63D0\u4EA4\u6210\u529F")})}}},k=C("\u63D0\u4EA4");function v(n,t,y,h,o,s){const p=g,m=f,_=i,u=a("el-form-item"),c=a("el-button"),d=a("el-form");return x(),V("div",null,[e(p,{title:"\u7701\u5E02\u533A\u8054\u52A8",content:"CascaderArea"}),e(_,null,{default:r(()=>[e(m,{modelValue:o.area,"onUpdate:modelValue":t[0]||(t[0]=l=>o.area=l)},null,8,["modelValue"])]),_:1}),e(_,{title:"\u8868\u5355\u9A8C\u8BC1"},{default:r(()=>[e(d,{ref:"ruleForm",model:o.ruleForm,rules:o.rules},{default:r(()=>[e(u,{label:"\u5730\u533A",prop:"area"},{default:r(()=>[e(m,{modelValue:o.ruleForm.area,"onUpdate:modelValue":t[1]||(t[1]=l=>o.ruleForm.area=l)},null,8,["modelValue"])]),_:1}),e(u,null,{default:r(()=>[e(c,{type:"primary",onClick:s.submitForm},{default:r(()=>[k]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model","rules"])]),_:1})])}var q=F(b,[["render",v]]);export{q as default};
