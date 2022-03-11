
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as e}from"./index.363693cb.js";import{u as a,b as t,o as l,n as r}from"./index.2c18650f.js";import n from"./index.f3a1f21e.js";import{g as s,h as o,q as i,w as u,l as f,o as m,y as d,O as p}from"./vendor.9da56f98.js";const c=d("返 回"),b=d("提 交"),g=d("取 消"),_=s({name:"PagesExampleDepartmentDetail"}),x=Object.assign(_,{setup(t){const{proxy:s}=p(),d=a();function _(){s.$refs.form.submit((()=>{s.$eventBus.emit("get-data-list"),$()}))}function x(){$()}function $(){d.tabbar.enable&&!d.tabbar.mergeTabs?s.$tabbar.close({name:"pagesExampleGeneralDepartmentList"}):s.$router.push({name:"pagesExampleGeneralDepartmentList"})}return(a,t)=>{const s=f("el-button"),d=l,p=f("el-col"),j=f("el-row"),y=r,D=e;return m(),o("div",null,[i(d,{title:"routerName"==a.$route.name?"新增部门":"编辑部门"},{default:u((()=>[i(s,{icon:"el-icon-arrow-left",size:"default",round:"",onClick:$},{default:u((()=>[c])),_:1})])),_:1},8,["title"]),i(y,null,{default:u((()=>[i(j,null,{default:u((()=>[i(p,{md:24,lg:16},{default:u((()=>[i(n,{id:a.$route.params.id,ref:"form"},null,8,["id"])])),_:1})])),_:1})])),_:1}),i(D,null,{default:u((()=>[i(s,{type:"primary",size:"large",onClick:_},{default:u((()=>[b])),_:1}),i(s,{size:"large",onClick:x},{default:u((()=>[g])),_:1})])),_:1})])}}});"function"==typeof t&&t(x);export{x as default};
