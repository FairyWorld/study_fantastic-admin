
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as e,c as l,e as a,f as d,j as c,n as o,Z as t,q as u,M as s,N as m,h as i,y as k,t as h,$ as n}from"./index.fc479745.js";import b from"./alert.c368f71f.js";const f=["上海","北京","广州","深圳"],V={components:{Alert:b},data:()=>({checked:!0,checked1:!1,checked2:!0,checkList:["选中且禁用","复选框 A"],checkedCities:["上海","北京"],cities:f,checkboxGroup1:["上海"],checked3:!0,checked4:!1})},r=k("备选项"),p=k("备选项1"),_=k("备选项");"function"==typeof c&&c(V);var x=e(V,[["render",function(e,c,b,f,V,x){const U=o("Alert"),y=n,A=o("el-checkbox"),C=t,j=o("el-checkbox-group"),G=o("el-checkbox-button");return u(),l("div",null,[a(U),a(y,{title:"多选框"}),a(C,{title:"基础用法",class:"demo"},{default:d((()=>[a(A,{modelValue:V.checked,"onUpdate:modelValue":c[0]||(c[0]=e=>V.checked=e)},{default:d((()=>[r])),_:1},8,["modelValue"])])),_:1}),a(C,{title:"禁用状态",class:"demo"},{default:d((()=>[a(A,{modelValue:V.checked1,"onUpdate:modelValue":c[1]||(c[1]=e=>V.checked1=e),disabled:""},{default:d((()=>[p])),_:1},8,["modelValue"]),a(A,{modelValue:V.checked2,"onUpdate:modelValue":c[2]||(c[2]=e=>V.checked2=e),disabled:""},{default:d((()=>[_])),_:1},8,["modelValue"])])),_:1}),a(C,{title:"多选框组",class:"demo"},{default:d((()=>[a(j,{modelValue:V.checkList,"onUpdate:modelValue":c[3]||(c[3]=e=>V.checkList=e)},{default:d((()=>[a(A,{label:"复选框 A"}),a(A,{label:"复选框 B"}),a(A,{label:"复选框 C"}),a(A,{label:"禁用",disabled:""}),a(A,{label:"选中且禁用",disabled:""})])),_:1},8,["modelValue"])])),_:1}),a(C,{title:"可选项目数量的限制",class:"demo"},{default:d((()=>[a(j,{modelValue:V.checkedCities,"onUpdate:modelValue":c[4]||(c[4]=e=>V.checkedCities=e),min:1,max:2},{default:d((()=>[(u(!0),l(s,null,m(V.cities,(e=>(u(),i(A,{key:e,label:e},{default:d((()=>[k(h(e),1)])),_:2},1032,["label"])))),128))])),_:1},8,["modelValue"])])),_:1}),a(C,{title:"按钮样式",class:"demo"},{default:d((()=>[a(j,{modelValue:V.checkboxGroup1,"onUpdate:modelValue":c[5]||(c[5]=e=>V.checkboxGroup1=e)},{default:d((()=>[(u(!0),l(s,null,m(V.cities,(e=>(u(),i(G,{key:e,label:e},{default:d((()=>[k(h(e),1)])),_:2},1032,["label"])))),128))])),_:1},8,["modelValue"])])),_:1}),a(C,{title:"带有边框",class:"demo"},{default:d((()=>[a(A,{modelValue:V.checked3,"onUpdate:modelValue":c[6]||(c[6]=e=>V.checked3=e),label:"备选项1",border:""},null,8,["modelValue"]),a(A,{modelValue:V.checked4,"onUpdate:modelValue":c[7]||(c[7]=e=>V.checked4=e),label:"备选项2",border:""},null,8,["modelValue"])])),_:1})])}]]);export{x as default};
