
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as e,d as a,r as l,o as t,a8 as o,c as i,b as s,w as d,h as n,i as r,j as u,C as f,m as c,n as m,ad as p,ac as g,af as v,q as b,x as h,f as _,g as C,p as M,k as x,z as y,e as z}from"./index.afdde410.js";import{_ as k}from"./index.e90fec22.js";import{_ as P}from"./index.3685e68c.js";import{u as w}from"./usePagination.0da33d9b.js";import L from"./index.085d495f.js";import"./index.92cd9b91.js";const V=(e=>(M("data-v-16e0742d"),e=e(),x(),e))((()=>z("p",null,"标准模块的优势之一就是，可根据表单内容量与关联性，快速切换表单展示模式，默认提供了以下三种常见模式",-1))),$=y("路由跳转"),j=y("对话框"),S=y("抽屉"),U=y("新增"),E=y("筛 选"),D=y("单个批量操作按钮"),F=y("批量操作按钮组1"),A=y("批量操作按钮组2"),B=y("编辑"),G=y("删除"),R=a({name:"PagesExampleFormModeList"}),q=Object.assign(R,{setup(e){const{pagination:a,getParams:u,onSizeChange:M,onCurrentChange:x,onSortChange:y}=w(),{proxy:z}=f(),R=c(),q=l({loading:!1,formMode:"router",formModeProps:{visible:!1,id:""},search:{title:""},batch:{enable:!1,selectionDataList:[]},dataList:[]});function I(){q.value.loading=!0;let e=u();q.value.search.title&&(e.title=q.value.search.title),z.$api.get("pages_example/form_mode/list",{baseURL:"/mock/",params:e}).then((e=>{q.value.loading=!1,q.value.dataList=e.data.list,a.value.total=e.data.total}))}function K(e){M(e).then((()=>I()))}function N(e=1){x(e).then((()=>I()))}function O(e,a){y(e,a).then((()=>I()))}function H(){"router"===q.value.formMode?R.push({name:"pagesExampleGeneralFormModeCreate"}):(q.value.formModeProps.id="",q.value.formModeProps.visible=!0)}return t((()=>{I(),"router"===q.value.formMode&&z.$eventBus.on("get-data-list",(()=>{I()}))})),o((()=>{"router"===q.value.formMode&&z.$eventBus.off("get-data-list")})),(e,l)=>{const t=m("el-radio-button"),o=m("el-radio-group"),u=p,f=m("el-button"),c=m("el-input"),M=m("el-form-item"),x=m("el-col"),y=m("el-row"),w=m("el-form"),J=P,Q=m("el-button-group"),T=k,W=m("el-table-column"),X=m("el-table"),Y=m("el-pagination"),Z=g,ee=v("loading");return b(),i("div",null,[s(u,{title:"表单展示模式"},{content:d((()=>[V,s(o,{modelValue:q.value.formMode,"onUpdate:modelValue":l[0]||(l[0]=e=>q.value.formMode=e),size:"default"},{default:d((()=>[s(t,{label:"router"},{default:d((()=>[$])),_:1}),s(t,{label:"dialog"},{default:d((()=>[j])),_:1}),s(t,{label:"drawer"},{default:d((()=>[S])),_:1})])),_:1},8,["modelValue"])])),_:1}),s(Z,null,{default:d((()=>[s(f,{type:"primary",size:"large",icon:"el-icon-plus",onClick:H},{default:d((()=>[U])),_:1}),s(J,null,{default:d((()=>[s(w,{model:q.value.search,size:"default","label-width":"100px","label-suffix":"："},{default:d((()=>[s(y,null,{default:d((()=>[s(x,{span:12},{default:d((()=>[s(M,{label:"标题"},{default:d((()=>[s(c,{modelValue:q.value.search.title,"onUpdate:modelValue":l[1]||(l[1]=e=>q.value.search.title=e),placeholder:"请输入标题，支持模糊查询",clearable:"",onKeydown:l[2]||(l[2]=h((e=>N()),["enter"])),onClear:l[3]||(l[3]=e=>N())},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),s(M,null,{default:d((()=>[s(f,{type:"primary",icon:"el-icon-search",onClick:l[4]||(l[4]=e=>N())},{default:d((()=>[E])),_:1})])),_:1})])),_:1},8,["model"])])),_:1}),q.value.batch.enable?(b(),n(T,{key:0,data:q.value.dataList,"selection-data":q.value.batch.selectionDataList,onCheckAll:l[5]||(l[5]=a=>e.$refs.table.toggleAllSelection()),onCheckNull:l[6]||(l[6]=a=>e.$refs.table.clearSelection())},{default:d((()=>[s(f,{size:"default"},{default:d((()=>[D])),_:1}),s(Q,null,{default:d((()=>[s(f,{size:"default"},{default:d((()=>[F])),_:1}),s(f,{size:"default"},{default:d((()=>[A])),_:1})])),_:1})])),_:1},8,["data","selection-data"])):r("v-if",!0),_((b(),n(X,{ref:"table",class:"list-table",data:q.value.dataList,border:"",stripe:"","highlight-current-row":"",onSortChange:O,onSelectionChange:l[7]||(l[7]=e=>q.value.batch.selectionDataList=e)},{default:d((()=>[q.value.batch.enable?(b(),n(W,{key:0,type:"selection",align:"center",fixed:""})):r("v-if",!0),s(W,{prop:"title",label:"标题"}),s(W,{label:"操作",width:"250",align:"center",fixed:"right"},{default:d((e=>[s(f,{type:"primary",size:"small",plain:"",onClick:a=>{return l=e.row,void("router"===q.value.formMode?R.push({name:"pagesExampleGeneralFormModeEdit",params:{id:l.id}}):(q.value.formModeProps.id=l.id,q.value.formModeProps.visible=!0));var l}},{default:d((()=>[B])),_:2},1032,["onClick"]),s(f,{type:"danger",size:"small",plain:"",onClick:a=>{return l=e.row,void z.$confirm(`确认删除「${l.title}」吗？`,"确认信息").then((()=>{z.$api.post("pages_example/form_mode/delete",{id:l.id},{baseURL:"/mock/"}).then((()=>{I(),z.$message.success({message:"模拟删除成功",center:!0})}))})).catch((()=>{}));var l}},{default:d((()=>[G])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"])),[[ee,q.value.loading]]),s(Y,{"current-page":C(a).page,total:C(a).total,"page-size":C(a).size,"page-sizes":C(a).sizes,layout:C(a).layout,"hide-on-single-page":!1,class:"pagination",background:"",onSizeChange:K,onCurrentChange:N},null,8,["current-page","total","page-size","page-sizes","layout"])])),_:1}),["dialog","drawer"].includes(q.value.formMode)?(b(),n(L,{key:0,id:q.value.formModeProps.id,modelValue:q.value.formModeProps.visible,"onUpdate:modelValue":l[8]||(l[8]=e=>q.value.formModeProps.visible=e),mode:q.value.formMode,onSuccess:I},null,8,["id","modelValue","mode"])):r("v-if",!0)])}}});"function"==typeof u&&u(q);var I=e(q,[["__scopeId","data-v-16e0742d"]]);export{I as default};
