
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{r as e,L as a,l,an as t,a0 as r,o as s,h as o,q as d,w as m,O as i}from"./vendor.9da56f98.js";const u={props:{id:{type:[Number,String],default:""},departmentId:{type:[Number,String],default:""}},setup(u,{expose:p}){const f=u,{proxy:n}=i(),g=e({loading:!1,form:{id:f.id,department_id:f.departmentId,title:""},rules:{title:[{required:!0,message:"请输入职位名称",trigger:"blur"}]}});return a((()=>{""!=g.value.form.id&&(g.value.loading=!0,n.$api.get("pages_example/job/detail",{baseURL:"/mock/",params:{id:g.value.form.id,department_id:g.value.form.department_id}}).then((e=>{g.value.loading=!1,g.value.form.title=e.data.title})))})),p({submit(e){""==g.value.form.id?n.$refs.form.validate((a=>{a&&n.$api.post("pages_example/job/create",g.value.form,{baseURL:"/mock/"}).then((()=>{n.$message.success({message:"模拟新增成功",center:!0}),e&&e()}))})):n.$refs.form.validate((a=>{a&&n.$api.post("pages_example/job/edit",g.value.form,{baseURL:"/mock/"}).then((()=>{n.$message.success({message:"模拟编辑成功",center:!0}),e&&e()}))}))}}),(e,a)=>{const i=l("el-input"),u=l("el-form-item"),p=l("el-form"),f=t("loading");return r((s(),o("div",null,[d(p,{ref:"form",model:g.value.form,rules:g.value.rules,"label-width":"120px","label-suffix":"："},{default:m((()=>[d(u,{label:"职位",prop:"title"},{default:m((()=>[d(i,{modelValue:g.value.form.title,"onUpdate:modelValue":a[0]||(a[0]=e=>g.value.form.title=e),placeholder:"请输入职位名称"},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])])),[[f,g.value.loading]])}}};export{u as default};
