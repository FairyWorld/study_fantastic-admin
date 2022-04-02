
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{r as e,$ as a,L as l,c as t,b as u,w as o,g as s,i as d,j as n,n as i,ad as p,ac as r,q as c,z as v,C as f}from"./index.992324c5.js";const m=v("VueUse 官网 useClipboard"),V={key:0},_=v("复制"),C={setup(n){const{proxy:v}=f(),C=e(""),b=e(""),{text:k,copy:x,copied:y,isSupported:g}=a();return l(y,(e=>{e&&v.$message.success(`复制成功：${k.value}`)})),(e,a)=>{const l=i("el-button"),n=p,v=i("el-input"),f=r;return c(),t("div",null,[u(n,{title:"剪贴板"},{default:o((()=>[u(l,{icon:"el-icon-link",onClick:a[0]||(a[0]=e=>{return a="https://vueuse.org/core/useClipboard/",void window.open(a,"top");var a})},{default:o((()=>[m])),_:1})])),_:1}),s(g)?(c(),t("div",V,[u(f,{title:"输入内容，并点击复制按钮"},{default:o((()=>[u(v,{modelValue:C.value,"onUpdate:modelValue":a[2]||(a[2]=e=>C.value=e)},{append:o((()=>[u(l,{onClick:a[1]||(a[1]=e=>s(x)(C.value))},{default:o((()=>[_])),_:1})])),_:1},8,["modelValue"])])),_:1}),u(f,{title:"复制成功后可在这粘贴测试"},{default:o((()=>[u(v,{modelValue:b.value,"onUpdate:modelValue":a[3]||(a[3]=e=>b.value=e)},null,8,["modelValue"])])),_:1})])):d("v-if",!0)])}}};"function"==typeof n&&n(C);export{C as default};
