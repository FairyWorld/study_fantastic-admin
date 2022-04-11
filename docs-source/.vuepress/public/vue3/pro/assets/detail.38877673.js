
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as e}from"./index.cffcd6d1.js";import{d as a,u as t,c as r,b as n,w as l,j as s,n as i,ad as o,ac as d,q as u,z as m,C as f}from"./index.afdde410.js";import p from"./index.3bfdad80.js";const c=m("返 回"),b=m("提 交"),_=m("取 消"),g=a({name:"PagesExampleDepartmentJobDetail"}),x=Object.assign(g,{setup(a){const{proxy:s}=f(),m=t();function g(){s.$refs.form.submit((()=>{s.$eventBus.emit("get-data-list"),$()}))}function x(){$()}function $(){m.tabbar.enable&&!m.tabbar.mergeTabs?s.$tabbar.close({name:"pagesExampleGeneralDepartmentList"}):s.$router.push({name:"pagesExampleGeneralDepartmentList"})}return(a,t)=>{const s=i("el-button"),m=o,f=i("el-col"),j=i("el-row"),y=d,z=e;return u(),r("div",null,[n(m,{title:"routerName"==a.$route.name?"新增职位":"编辑职位"},{default:l((()=>[n(s,{icon:"el-icon-arrow-left",size:"default",round:"",onClick:$},{default:l((()=>[c])),_:1})])),_:1},8,["title"]),n(y,null,{default:l((()=>[n(j,null,{default:l((()=>[n(f,{md:24,lg:16},{default:l((()=>[n(p,{id:a.$route.params.id,ref:"form","department-id":a.$route.params.department_id},null,8,["id","department-id"])])),_:1})])),_:1})])),_:1}),n(z,null,{default:l((()=>[n(s,{type:"primary",size:"large",onClick:g},{default:l((()=>[b])),_:1}),n(s,{size:"large",onClick:x},{default:l((()=>[_])),_:1})])),_:1})])}}});"function"==typeof s&&s(x);export{x as default};
