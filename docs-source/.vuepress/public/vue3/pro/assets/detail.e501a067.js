
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as e}from"./index.363693cb.js";import{u as a,b as t,o as r,n}from"./index.2c18650f.js";import l from"./index.95ec2f82.js";import{g as s,h as o,q as i,w as u,l as m,o as d,y as f,O as p}from"./vendor.9da56f98.js";const c=f("返 回"),b=f("提 交"),g=f("取 消"),_=s({name:"PagesExampleDepartmentJobDetail"}),x=Object.assign(_,{setup(t){const{proxy:s}=p(),f=a();function _(){s.$refs.form.submit((()=>{s.$eventBus.emit("get-data-list"),$()}))}function x(){$()}function $(){f.tabbar.enable&&!f.tabbar.mergeTabs?s.$tabbar.close({name:"pagesExampleGeneralDepartmentList"}):s.$router.push({name:"pagesExampleGeneralDepartmentList"})}return(a,t)=>{const s=m("el-button"),f=r,p=m("el-col"),j=m("el-row"),y=n,D=e;return d(),o("div",null,[i(f,{title:"routerName"==a.$route.name?"新增职位":"编辑职位"},{default:u((()=>[i(s,{icon:"el-icon-arrow-left",size:"default",round:"",onClick:$},{default:u((()=>[c])),_:1})])),_:1},8,["title"]),i(y,null,{default:u((()=>[i(j,null,{default:u((()=>[i(p,{md:24,lg:16},{default:u((()=>[i(l,{id:a.$route.params.id,ref:"form","department-id":a.$route.params.department_id},null,8,["id","department-id"])])),_:1})])),_:1})])),_:1}),i(D,null,{default:u((()=>[i(s,{type:"primary",size:"large",onClick:_},{default:u((()=>[b])),_:1}),i(s,{size:"large",onClick:x},{default:u((()=>[g])),_:1})])),_:1})])}}});"function"==typeof t&&t(x);export{x as default};
