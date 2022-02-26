
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{r as v,L as g,l,aB as x,a0 as h,o as $,h as b,q as r,w as s,O as w}from"./vendor.ee7254f0.js";const U={props:{id:{type:[Number,String],default:""}},setup(i,{expose:m}){const n=i,{proxy:t}=w(),e=v({loading:!1,form:{id:n.id,title:""},rules:{title:[{required:!0,message:"\u8BF7\u8F93\u5165\u6807\u9898",trigger:"blur"}]}});g(()=>{e.value.form.id!=""&&u()});function u(){e.value.loading=!0,t.$api.get("pages_example/form_mode/detail",{baseURL:"/mock/",params:{id:e.value.form.id}}).then(o=>{e.value.loading=!1,e.value.form.title=o.data.title})}return m({submit(o){e.value.form.id==""?t.$refs.form.validate(a=>{a&&t.$api.post("pages_example/form_mode/create",e.value.form,{baseURL:"/mock/"}).then(()=>{t.$message.success({message:"\u6A21\u62DF\u65B0\u589E\u6210\u529F",center:!0}),o&&o()})}):t.$refs.form.validate(a=>{a&&t.$api.post("pages_example/form_mode/edit",e.value.form,{baseURL:"/mock/"}).then(()=>{t.$message.success({message:"\u6A21\u62DF\u7F16\u8F91\u6210\u529F",center:!0}),o&&o()})})}}),(o,a)=>{const f=l("el-input"),d=l("el-form-item"),p=l("el-form"),c=x("loading");return h(($(),b("div",null,[r(p,{ref:"form",model:e.value.form,rules:e.value.rules,"label-width":"120px","label-suffix":"\uFF1A"},{default:s(()=>[r(d,{label:"\u6807\u9898",prop:"title"},{default:s(()=>[r(f,{modelValue:e.value.form.title,"onUpdate:modelValue":a[0]||(a[0]=_=>e.value.form.title=_),placeholder:"\u8BF7\u8F93\u5165\u6807\u9898"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])])),[[c,e.value.loading]])}}};export{U as default};
