
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as g,m as F,n as V}from"./index.e5f7e690.js";import{_ as b}from"./index.697e560f.js";import{h as x,q as e,w as r,l as n,o as y,y as C}from"./vendor.ee7254f0.js";var s={};const p={name:"ComponentExampleArea",props:{},data(){return{area:["\u6D59\u6C5F\u7701","\u676D\u5DDE\u5E02","\u897F\u6E56\u533A"],ruleForm:{area:[]},rules:{area:[{type:"array",required:!0,message:"\u8BF7\u9009\u62E9\u5730\u533A",trigger:"change"}]}}},created(){},mounted(){},methods:{submitForm(){this.$refs.ruleForm.validate(a=>{a&&alert("\u63D0\u4EA4\u6210\u529F")})}}},k=C("\u63D0\u4EA4");function v(a,t,h,q,o,c){const d=V,m=b,u=F,_=n("el-form-item"),i=n("el-button"),f=n("el-form");return y(),x("div",null,[e(d,{title:"\u7701\u5E02\u533A\u8054\u52A8",content:"CascaderArea"}),e(u,null,{default:r(()=>[e(m,{modelValue:o.area,"onUpdate:modelValue":t[0]||(t[0]=l=>o.area=l)},null,8,["modelValue"])]),_:1}),e(u,{title:"\u8868\u5355\u9A8C\u8BC1"},{default:r(()=>[e(f,{ref:"ruleForm",model:o.ruleForm,rules:o.rules},{default:r(()=>[e(_,{label:"\u5730\u533A",prop:"area"},{default:r(()=>[e(m,{modelValue:o.ruleForm.area,"onUpdate:modelValue":t[1]||(t[1]=l=>o.ruleForm.area=l)},null,8,["modelValue"])]),_:1}),e(_,null,{default:r(()=>[e(i,{type:"primary",onClick:c.submitForm},{default:r(()=>[k]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model","rules"])]),_:1})])}typeof s=="function"&&s(p);var E=g(p,[["render",v]]);export{E as default};
