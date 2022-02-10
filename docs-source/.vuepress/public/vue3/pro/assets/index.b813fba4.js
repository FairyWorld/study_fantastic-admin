
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{r as g,y as _,D as o,aB as x,U as $,o as b,l as h,F as r,A as s,H as U}from"./vendor.bcd7a662.js";const w={props:{id:{type:[Number,String],default:""}},setup(i,{expose:m}){const n=i,{proxy:t}=U(),e=g({loading:!1,form:{id:n.id,title:""},rules:{title:[{required:!0,message:"\u8BF7\u8F93\u5165\u90E8\u95E8\u540D\u79F0",trigger:"blur"}]}});_(()=>{e.value.form.id!=""&&u()});function u(){e.value.loading=!0,t.$api.get("pages_example/department/detail",{baseURL:"/mock/",params:{id:e.value.form.id}}).then(a=>{e.value.loading=!1,e.value.form.title=a.data.title})}return m({submit(a){e.value.form.id==""?t.$refs.form.validate(l=>{l&&t.$api.post("pages_example/department/create",e.value.form,{baseURL:"/mock/"}).then(()=>{t.$message.success({message:"\u6A21\u62DF\u65B0\u589E\u6210\u529F",center:!0}),a&&a()})}):t.$refs.form.validate(l=>{l&&t.$api.post("pages_example/department/edit",e.value.form,{baseURL:"/mock/"}).then(()=>{t.$message.success({message:"\u6A21\u62DF\u7F16\u8F91\u6210\u529F",center:!0}),a&&a()})})}}),(a,l)=>{const d=o("el-input"),f=o("el-form-item"),p=o("el-form"),c=x("loading");return $((b(),h("div",null,[r(p,{ref:"form",model:e.value.form,rules:e.value.rules,"label-width":"120px","label-suffix":"\uFF1A"},{default:s(()=>[r(f,{label:"\u90E8\u95E8",prop:"title"},{default:s(()=>[r(d,{modelValue:e.value.form.title,"onUpdate:modelValue":l[0]||(l[0]=v=>e.value.form.title=v),placeholder:"\u8BF7\u8F93\u5165\u90E8\u95E8\u540D\u79F0"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])])),[[c,e.value.loading]])}}};export{w as default};
