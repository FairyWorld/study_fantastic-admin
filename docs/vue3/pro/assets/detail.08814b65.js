
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as e}from"./index.5959b07f.js";import{d as a,u as t,c as l,b as n,w as r,j as s,n as o,ad as i,ac as u,q as m,z as f,C as d}from"./index.992324c5.js";import c from"./index.3a1cc179.js";const p=f("返 回"),b=f("提 交"),g=f("取 消"),_=a({name:"PagesExampleDepartmentDetail"}),x=Object.assign(_,{setup(a){const{proxy:s}=d(),f=t();function _(){s.$refs.form.submit((()=>{s.$eventBus.emit("get-data-list"),$()}))}function x(){$()}function $(){f.tabbar.enable&&!f.tabbar.mergeTabs?s.$tabbar.close({name:"pagesExampleGeneralDepartmentList"}):s.$router.push({name:"pagesExampleGeneralDepartmentList"})}return(a,t)=>{const s=o("el-button"),f=i,d=o("el-col"),j=o("el-row"),y=u,z=e;return m(),l("div",null,[n(f,{title:"routerName"==a.$route.name?"新增部门":"编辑部门"},{default:r((()=>[n(s,{icon:"el-icon-arrow-left",size:"default",round:"",onClick:$},{default:r((()=>[p])),_:1})])),_:1},8,["title"]),n(y,null,{default:r((()=>[n(j,null,{default:r((()=>[n(d,{md:24,lg:16},{default:r((()=>[n(c,{id:a.$route.params.id,ref:"form"},null,8,["id"])])),_:1})])),_:1})])),_:1}),n(z,null,{default:r((()=>[n(s,{type:"primary",size:"large",onClick:_},{default:r((()=>[b])),_:1}),n(s,{size:"large",onClick:x},{default:r((()=>[g])),_:1})])),_:1})])}}});"function"==typeof s&&s(x);export{x as default};
