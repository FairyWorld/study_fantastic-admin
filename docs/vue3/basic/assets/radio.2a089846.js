
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as e,c as l,e as a,f as d,j as o,n as t,Z as u,q as r,y as i,$ as m}from"./index.fc479745.js";import s from"./alert.c368f71f.js";const f={components:{Alert:s},data:()=>({radio:"1",radio2:"选中且禁用",radio3:3,radio4:"上海",radio5:"1"})},V=i("备选项"),n=i("备选项"),b=i("备选项"),_=i("备选项"),p=i("备选项"),c=i("备选项"),U=i("备选项"),j=i("备选项1"),v=i("备选项2");"function"==typeof o&&o(f);var x=e(f,[["render",function(e,o,i,s,f,x){const y=t("Alert"),A=m,g=t("el-radio"),q=u,Z=t("el-radio-group"),$=t("el-radio-button");return r(),l("div",null,[a(y),a(A,{title:"单选框"}),a(q,{title:"基础用法",class:"demo"},{default:d((()=>[a(g,{modelValue:f.radio,"onUpdate:modelValue":o[0]||(o[0]=e=>f.radio=e),label:"1"},{default:d((()=>[V])),_:1},8,["modelValue"]),a(g,{modelValue:f.radio,"onUpdate:modelValue":o[1]||(o[1]=e=>f.radio=e),label:"2"},{default:d((()=>[n])),_:1},8,["modelValue"])])),_:1}),a(q,{title:"禁用状态",class:"demo"},{default:d((()=>[a(g,{modelValue:f.radio2,"onUpdate:modelValue":o[2]||(o[2]=e=>f.radio2=e),disabled:"",label:"禁用"},{default:d((()=>[b])),_:1},8,["modelValue"]),a(g,{modelValue:f.radio2,"onUpdate:modelValue":o[3]||(o[3]=e=>f.radio2=e),disabled:"",label:"选中且禁用"},{default:d((()=>[_])),_:1},8,["modelValue"])])),_:1}),a(q,{title:"单选框组",class:"demo"},{default:d((()=>[a(Z,{modelValue:f.radio3,"onUpdate:modelValue":o[4]||(o[4]=e=>f.radio3=e)},{default:d((()=>[a(g,{label:3},{default:d((()=>[p])),_:1}),a(g,{label:6},{default:d((()=>[c])),_:1}),a(g,{label:9},{default:d((()=>[U])),_:1})])),_:1},8,["modelValue"])])),_:1}),a(q,{title:"按钮样式",class:"demo"},{default:d((()=>[a(Z,{modelValue:f.radio4,"onUpdate:modelValue":o[5]||(o[5]=e=>f.radio4=e)},{default:d((()=>[a($,{label:"上海"}),a($,{label:"北京"}),a($,{label:"广州"}),a($,{label:"深圳"})])),_:1},8,["modelValue"])])),_:1}),a(q,{title:"带有边框",class:"demo"},{default:d((()=>[a(g,{modelValue:f.radio5,"onUpdate:modelValue":o[6]||(o[6]=e=>f.radio5=e),label:"1",border:""},{default:d((()=>[j])),_:1},8,["modelValue"]),a(g,{modelValue:f.radio5,"onUpdate:modelValue":o[7]||(o[7]=e=>f.radio5=e),label:"2",border:""},{default:d((()=>[v])),_:1},8,["modelValue"])])),_:1})])}]]);export{x as default};
