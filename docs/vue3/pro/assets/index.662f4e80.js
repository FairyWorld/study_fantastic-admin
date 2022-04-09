
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{r as e,o as a,n as l,af as s,f as o,q as r,c as t,b as m,w as i,C as u}from"./index.80ead521.js";const d={props:{id:{type:[Number,String],default:""}},setup(d,{expose:f}){const p=d,{proxy:n}=u(),g=e({loading:!1,form:{id:p.id,title:""},rules:{title:[{required:!0,message:"请输入标题",trigger:"blur"}]}});return a((()=>{""!=g.value.form.id&&(g.value.loading=!0,n.$api.get("pages_example/form_mode/detail",{baseURL:"/mock/",params:{id:g.value.form.id}}).then((e=>{g.value.loading=!1,g.value.form.title=e.data.title})))})),f({submit(e){""==g.value.form.id?n.$refs.form.validate((a=>{a&&n.$api.post("pages_example/form_mode/create",g.value.form,{baseURL:"/mock/"}).then((()=>{n.$message.success({message:"模拟新增成功",center:!0}),e&&e()}))})):n.$refs.form.validate((a=>{a&&n.$api.post("pages_example/form_mode/edit",g.value.form,{baseURL:"/mock/"}).then((()=>{n.$message.success({message:"模拟编辑成功",center:!0}),e&&e()}))}))}}),(e,a)=>{const u=l("el-input"),d=l("el-form-item"),f=l("el-form"),p=s("loading");return o((r(),t("div",null,[m(f,{ref:"form",model:g.value.form,rules:g.value.rules,"label-width":"120px","label-suffix":"："},{default:i((()=>[m(d,{label:"标题",prop:"title"},{default:i((()=>[m(u,{modelValue:g.value.form.title,"onUpdate:modelValue":a[0]||(a[0]=e=>g.value.form.title=e),placeholder:"请输入标题"},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])])),[[p,g.value.loading]])}}};export{d as default};
