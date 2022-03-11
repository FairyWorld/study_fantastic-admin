
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{r as e,L as a,l,an as t,a0 as s,o as r,h as o,q as m,w as u,O as d}from"./vendor.9da56f98.js";const i={props:{id:{type:[Number,String],default:""}},setup(i,{expose:p}){const f=i,{proxy:n}=d(),g=e({loading:!1,form:{id:f.id,title:""},rules:{title:[{required:!0,message:"请输入部门名称",trigger:"blur"}]}});return a((()=>{""!=g.value.form.id&&(g.value.loading=!0,n.$api.get("pages_example/department/detail",{baseURL:"/mock/",params:{id:g.value.form.id}}).then((e=>{g.value.loading=!1,g.value.form.title=e.data.title})))})),p({submit(e){""==g.value.form.id?n.$refs.form.validate((a=>{a&&n.$api.post("pages_example/department/create",g.value.form,{baseURL:"/mock/"}).then((()=>{n.$message.success({message:"模拟新增成功",center:!0}),e&&e()}))})):n.$refs.form.validate((a=>{a&&n.$api.post("pages_example/department/edit",g.value.form,{baseURL:"/mock/"}).then((()=>{n.$message.success({message:"模拟编辑成功",center:!0}),e&&e()}))}))}}),(e,a)=>{const d=l("el-input"),i=l("el-form-item"),p=l("el-form"),f=t("loading");return s((r(),o("div",null,[m(p,{ref:"form",model:g.value.form,rules:g.value.rules,"label-width":"120px","label-suffix":"："},{default:u((()=>[m(i,{label:"部门",prop:"title"},{default:u((()=>[m(d,{modelValue:g.value.form.title,"onUpdate:modelValue":a[0]||(a[0]=e=>g.value.form.title=e),placeholder:"请输入部门名称"},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])])),[[f,g.value.loading]])}}};export{i as default};
