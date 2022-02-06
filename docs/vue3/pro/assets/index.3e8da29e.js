
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as v}from"./index.677bf551.js";import{r as g,y as x,D as l,aB as b,U as $,o as h,l as y,F as r,A as s,H as U}from"./vendor.7ef8ea63.js";const D={props:{id:{type:[Number,String],default:""}},setup(i,{expose:m}){const n=i,{proxy:t}=U(),e=g({loading:!1,form:{id:n.id,title:""},rules:{title:[{required:!0,message:"\u8BF7\u8F93\u5165\u6807\u9898",trigger:"blur"}]}});x(()=>{e.value.form.id!=""&&u()});function u(){e.value.loading=!0,t.$api.get("pages_example/form_mode/detail",{baseURL:"/mock/",params:{id:e.value.form.id}}).then(o=>{e.value.loading=!1,e.value.form.title=o.data.title})}return m({submit(o){e.value.form.id==""?t.$refs.form.validate(a=>{a&&t.$api.post("pages_example/form_mode/create",e.value.form,{baseURL:"/mock/"}).then(()=>{t.$message.success({message:"\u6A21\u62DF\u65B0\u589E\u6210\u529F",center:!0}),o&&o()})}):t.$refs.form.validate(a=>{a&&t.$api.post("pages_example/form_mode/edit",e.value.form,{baseURL:"/mock/"}).then(()=>{t.$message.success({message:"\u6A21\u62DF\u7F16\u8F91\u6210\u529F",center:!0}),o&&o()})})}}),(o,a)=>{const d=l("el-input"),f=l("el-form-item"),p=l("el-form"),_=b("loading");return $((h(),y("div",null,[r(p,{ref:"form",model:e.value.form,rules:e.value.rules,"label-width":"120px","label-suffix":"\uFF1A"},{default:s(()=>[r(f,{label:"\u6807\u9898",prop:"title"},{default:s(()=>[r(d,{modelValue:e.value.form.title,"onUpdate:modelValue":a[0]||(a[0]=c=>e.value.form.title=c),placeholder:"\u8BF7\u8F93\u5165\u6807\u9898"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])])),[[_,e.value.loading]])}}};var B=v(D,[["__scopeId","data-v-3cfe42e7"]]);export{B as default};
