
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as e}from"./index.52dffbfd.js";import{_ as l,c as a,e as d,f as o,j as t,$ as u,n as m,Z as r,q as f,b as n,y as p}from"./index.fc479745.js";const V={data:()=>({form:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""}})},s=n("p",null,"FixedActionBar",-1),i=n("p",{style:{"margin-bottom":"0"}},"避免因页面过长导致操作按钮需要滚动到页面底部才能操作，例如表单页",-1),b=p("-"),_=p("-"),c=p("-"),y=p("立即创建"),h=p("取消");"function"==typeof t&&t(V);var U=l(V,[["render",function(l,t,n,p,V,U){const g=u,v=m("el-input"),x=m("el-form-item"),w=m("el-option"),j=m("el-select"),k=m("el-date-picker"),z=m("el-col"),q=m("el-time-picker"),A=m("el-switch"),B=m("el-checkbox"),F=m("el-checkbox-group"),Z=m("el-radio"),$=m("el-radio-group"),C=m("el-form"),D=m("el-row"),E=r,G=m("el-button"),H=e;return f(),a("div",null,[d(g,{title:"固定底部操作栏",content:"避免因页面过长导致操作按钮需要滚动到页面底部才能操作，例如表单页"},{content:o((()=>[s,i])),_:1}),d(E,null,{default:o((()=>[d(D,null,{default:o((()=>[d(z,{md:24,lg:12},{default:o((()=>[d(C,{ref:"form",model:V.form,"label-width":"120px"},{default:o((()=>[d(x,{label:"活动名称"},{default:o((()=>[d(v,{modelValue:V.form.name,"onUpdate:modelValue":t[0]||(t[0]=e=>V.form.name=e)},null,8,["modelValue"])])),_:1}),d(x,{label:"活动区域"},{default:o((()=>[d(j,{modelValue:V.form.region,"onUpdate:modelValue":t[1]||(t[1]=e=>V.form.region=e),placeholder:"请选择活动区域"},{default:o((()=>[d(w,{label:"区域一",value:"shanghai"}),d(w,{label:"区域二",value:"beijing"})])),_:1},8,["modelValue"])])),_:1}),d(x,{label:"活动时间"},{default:o((()=>[d(z,{span:11},{default:o((()=>[d(k,{modelValue:V.form.date1,"onUpdate:modelValue":t[2]||(t[2]=e=>V.form.date1=e),type:"date",placeholder:"选择日期",style:{width:"100%"}},null,8,["modelValue"])])),_:1}),d(z,{class:"line",span:2},{default:o((()=>[b])),_:1}),d(z,{span:11},{default:o((()=>[d(q,{modelValue:V.form.date2,"onUpdate:modelValue":t[3]||(t[3]=e=>V.form.date2=e),placeholder:"选择时间",style:{width:"100%"}},null,8,["modelValue"])])),_:1})])),_:1}),d(x,{label:"即时配送"},{default:o((()=>[d(A,{modelValue:V.form.delivery,"onUpdate:modelValue":t[4]||(t[4]=e=>V.form.delivery=e)},null,8,["modelValue"])])),_:1}),d(x,{label:"活动性质"},{default:o((()=>[d(F,{modelValue:V.form.type,"onUpdate:modelValue":t[5]||(t[5]=e=>V.form.type=e)},{default:o((()=>[d(B,{label:"美食/餐厅线上活动",name:"type"}),d(B,{label:"地推活动",name:"type"}),d(B,{label:"线下主题活动",name:"type"}),d(B,{label:"单纯品牌曝光",name:"type"})])),_:1},8,["modelValue"])])),_:1}),d(x,{label:"特殊资源"},{default:o((()=>[d($,{modelValue:V.form.resource,"onUpdate:modelValue":t[6]||(t[6]=e=>V.form.resource=e)},{default:o((()=>[d(Z,{label:"线上品牌商赞助"}),d(Z,{label:"线下场地免费"})])),_:1},8,["modelValue"])])),_:1}),d(x,{label:"活动形式"},{default:o((()=>[d(v,{modelValue:V.form.desc,"onUpdate:modelValue":t[7]||(t[7]=e=>V.form.desc=e),type:"textarea"},null,8,["modelValue"])])),_:1}),d(x,{label:"活动名称"},{default:o((()=>[d(v,{modelValue:V.form.name,"onUpdate:modelValue":t[8]||(t[8]=e=>V.form.name=e)},null,8,["modelValue"])])),_:1}),d(x,{label:"活动区域"},{default:o((()=>[d(j,{modelValue:V.form.region,"onUpdate:modelValue":t[9]||(t[9]=e=>V.form.region=e),placeholder:"请选择活动区域"},{default:o((()=>[d(w,{label:"区域一",value:"shanghai"}),d(w,{label:"区域二",value:"beijing"})])),_:1},8,["modelValue"])])),_:1}),d(x,{label:"活动时间"},{default:o((()=>[d(z,{span:11},{default:o((()=>[d(k,{modelValue:V.form.date1,"onUpdate:modelValue":t[10]||(t[10]=e=>V.form.date1=e),type:"date",placeholder:"选择日期",style:{width:"100%"}},null,8,["modelValue"])])),_:1}),d(z,{class:"line",span:2},{default:o((()=>[_])),_:1}),d(z,{span:11},{default:o((()=>[d(q,{modelValue:V.form.date2,"onUpdate:modelValue":t[11]||(t[11]=e=>V.form.date2=e),placeholder:"选择时间",style:{width:"100%"}},null,8,["modelValue"])])),_:1})])),_:1}),d(x,{label:"即时配送"},{default:o((()=>[d(A,{modelValue:V.form.delivery,"onUpdate:modelValue":t[12]||(t[12]=e=>V.form.delivery=e)},null,8,["modelValue"])])),_:1}),d(x,{label:"活动性质"},{default:o((()=>[d(F,{modelValue:V.form.type,"onUpdate:modelValue":t[13]||(t[13]=e=>V.form.type=e)},{default:o((()=>[d(B,{label:"美食/餐厅线上活动",name:"type"}),d(B,{label:"地推活动",name:"type"}),d(B,{label:"线下主题活动",name:"type"}),d(B,{label:"单纯品牌曝光",name:"type"})])),_:1},8,["modelValue"])])),_:1}),d(x,{label:"特殊资源"},{default:o((()=>[d($,{modelValue:V.form.resource,"onUpdate:modelValue":t[14]||(t[14]=e=>V.form.resource=e)},{default:o((()=>[d(Z,{label:"线上品牌商赞助"}),d(Z,{label:"线下场地免费"})])),_:1},8,["modelValue"])])),_:1}),d(x,{label:"活动形式"},{default:o((()=>[d(v,{modelValue:V.form.desc,"onUpdate:modelValue":t[15]||(t[15]=e=>V.form.desc=e),type:"textarea"},null,8,["modelValue"])])),_:1}),d(x,{label:"活动名称"},{default:o((()=>[d(v,{modelValue:V.form.name,"onUpdate:modelValue":t[16]||(t[16]=e=>V.form.name=e)},null,8,["modelValue"])])),_:1}),d(x,{label:"活动区域"},{default:o((()=>[d(j,{modelValue:V.form.region,"onUpdate:modelValue":t[17]||(t[17]=e=>V.form.region=e),placeholder:"请选择活动区域"},{default:o((()=>[d(w,{label:"区域一",value:"shanghai"}),d(w,{label:"区域二",value:"beijing"})])),_:1},8,["modelValue"])])),_:1}),d(x,{label:"活动时间"},{default:o((()=>[d(z,{span:11},{default:o((()=>[d(k,{modelValue:V.form.date1,"onUpdate:modelValue":t[18]||(t[18]=e=>V.form.date1=e),type:"date",placeholder:"选择日期",style:{width:"100%"}},null,8,["modelValue"])])),_:1}),d(z,{class:"line",span:2},{default:o((()=>[c])),_:1}),d(z,{span:11},{default:o((()=>[d(q,{modelValue:V.form.date2,"onUpdate:modelValue":t[19]||(t[19]=e=>V.form.date2=e),placeholder:"选择时间",style:{width:"100%"}},null,8,["modelValue"])])),_:1})])),_:1}),d(x,{label:"即时配送"},{default:o((()=>[d(A,{modelValue:V.form.delivery,"onUpdate:modelValue":t[20]||(t[20]=e=>V.form.delivery=e)},null,8,["modelValue"])])),_:1}),d(x,{label:"活动性质"},{default:o((()=>[d(F,{modelValue:V.form.type,"onUpdate:modelValue":t[21]||(t[21]=e=>V.form.type=e)},{default:o((()=>[d(B,{label:"美食/餐厅线上活动",name:"type"}),d(B,{label:"地推活动",name:"type"}),d(B,{label:"线下主题活动",name:"type"}),d(B,{label:"单纯品牌曝光",name:"type"})])),_:1},8,["modelValue"])])),_:1}),d(x,{label:"特殊资源"},{default:o((()=>[d($,{modelValue:V.form.resource,"onUpdate:modelValue":t[22]||(t[22]=e=>V.form.resource=e)},{default:o((()=>[d(Z,{label:"线上品牌商赞助"}),d(Z,{label:"线下场地免费"})])),_:1},8,["modelValue"])])),_:1}),d(x,{label:"活动形式"},{default:o((()=>[d(v,{modelValue:V.form.desc,"onUpdate:modelValue":t[23]||(t[23]=e=>V.form.desc=e),type:"textarea"},null,8,["modelValue"])])),_:1})])),_:1},8,["model"])])),_:1})])),_:1})])),_:1}),d(H,null,{default:o((()=>[d(G,{type:"primary",size:"large"},{default:o((()=>[y])),_:1}),d(G,{size:"large"},{default:o((()=>[h])),_:1})])),_:1})])}]]);export{U as default};
