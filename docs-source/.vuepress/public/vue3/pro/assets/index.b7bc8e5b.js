
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as e}from"./index.15f47cfa.js";import l from"./index.e470b19b.js";import{_ as a,r as d,o as t,n as o,af as u,f as r,q as s,c as m,b as f,w as p,e as i,z as n,t as v,C as _}from"./index.992324c5.js";const c=n("按件数"),V=n("按重量"),g={class:"freight"},b=n("默认运费"),y=n("首费"),x=n("元"),U=n("续费"),h=n("元"),$=n("启用"),k=n("停用");var z=a({props:{id:{type:[Number,String],default:""}},setup(a,{expose:z}){const j=a,{proxy:w}=_(),L=d({loading:!1,form:{id:j.id,title:"",address:[],type:1,status:!0,first_step:"",first_price:"",continued_step:"",continued_price:"",infos:[]},rules:{title:[{required:!0,message:"请输入名称",trigger:"blur"}]}});return t((()=>{""!=L.value.form.id&&(L.value.loading=!0,w.$api.get("pages_example/delivery/detail",{baseURL:"/mock/",params:{id:L.value.form.id}}).then((e=>{L.value.loading=!1,Object.assign(L.value.form,e.data)})))})),z({submit(e){""==L.value.form.id?w.$refs.form.validate((l=>{l&&w.$api.post("pages_example/delivery/create",L.value.form,{baseURL:"/mock/"}).then((()=>{w.$message.success({message:"模拟新增成功",center:!0}),e&&e()}))})):w.$refs.form.validate((l=>{l&&w.$api.post("pages_example/delivery/edit",L.value.form,{baseURL:"/mock/"}).then((()=>{w.$message.success({message:"模拟编辑成功",center:!0}),e&&e()}))}))}}),(a,d)=>{const t=o("el-input"),_=o("el-form-item"),z=e,j=o("el-radio-button"),w=o("el-radio-group"),R=o("el-col"),q=o("el-row"),C=o("el-card"),I=o("el-form"),N=u("loading");return r((s(),m("div",null,[f(I,{ref:"form",model:L.value.form,rules:L.value.rules,"label-width":"120px","label-suffix":"："},{default:p((()=>[f(_,{label:"名称",prop:"title"},{default:p((()=>[f(t,{modelValue:L.value.form.title,"onUpdate:modelValue":d[0]||(d[0]=e=>L.value.form.title=e),placeholder:"请输入名称"},null,8,["modelValue"])])),_:1}),f(_,{label:"发货地址",prop:"address"},{default:p((()=>[f(z,{modelValue:L.value.form.address,"onUpdate:modelValue":d[1]||(d[1]=e=>L.value.form.address=e)},null,8,["modelValue"])])),_:1}),f(_,{label:"计价方式"},{default:p((()=>[f(w,{modelValue:L.value.form.type,"onUpdate:modelValue":d[2]||(d[2]=e=>L.value.form.type=e)},{default:p((()=>[f(j,{label:1},{default:p((()=>[c])),_:1}),f(j,{label:2},{default:p((()=>[V])),_:1})])),_:1},8,["modelValue"])])),_:1}),f(_,{label:"运费模版"},{default:p((()=>[i("div",g,[f(C,{shadow:"never"},{header:p((()=>[b])),default:p((()=>[f(q,{gutter:20},{default:p((()=>[f(R,{md:6},{default:p((()=>[f(t,{modelValue:L.value.form.first_step,"onUpdate:modelValue":d[3]||(d[3]=e=>L.value.form.first_step=e),size:"small"},{prepend:p((()=>[n(v(1==L.value.form.type?"首件":"首重"),1)])),append:p((()=>[n(v(1==L.value.form.type?"件":"kg"),1)])),_:1},8,["modelValue"])])),_:1}),f(R,{md:6},{default:p((()=>[f(t,{modelValue:L.value.form.first_price,"onUpdate:modelValue":d[4]||(d[4]=e=>L.value.form.first_price=e),size:"small"},{prepend:p((()=>[y])),append:p((()=>[x])),_:1},8,["modelValue"])])),_:1}),f(R,{md:6},{default:p((()=>[f(t,{modelValue:L.value.form.continued_step,"onUpdate:modelValue":d[5]||(d[5]=e=>L.value.form.continued_step=e),size:"small"},{prepend:p((()=>[n(v(1==L.value.form.type?"续件":"续重"),1)])),append:p((()=>[n(v(1==L.value.form.type?"件":"kg"),1)])),_:1},8,["modelValue"])])),_:1}),f(R,{md:6},{default:p((()=>[f(t,{modelValue:L.value.form.continued_price,"onUpdate:modelValue":d[6]||(d[6]=e=>L.value.form.continued_price=e),size:"small"},{prepend:p((()=>[U])),append:p((()=>[h])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1}),f(q,null,{default:p((()=>[f(R,{span:24},{default:p((()=>[f(l,{data:L.value.form.infos,type:L.value.form.type},null,8,["data","type"])])),_:1})])),_:1})])])),_:1}),f(_,{label:"是否启用"},{default:p((()=>[f(w,{modelValue:L.value.form.status,"onUpdate:modelValue":d[7]||(d[7]=e=>L.value.form.status=e)},{default:p((()=>[f(j,{label:!0},{default:p((()=>[$])),_:1}),f(j,{label:!1},{default:p((()=>[k])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])])),[[N,L.value.loading]])}}},[["__scopeId","data-v-a5ce53d6"]]);export{z as default};
