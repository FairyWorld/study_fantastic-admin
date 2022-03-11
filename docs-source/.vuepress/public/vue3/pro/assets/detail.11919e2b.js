
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as e}from"./index.363693cb.js";import{u as a,b as t,o as l,n as r}from"./index.2c18650f.js";import n from"./index.5123c990.js";import{g as s,h as o,q as i,w as u,l as f,o as m,y as d,O as c}from"./vendor.9da56f98.js";const p=d("返 回"),b=d("提 交"),g=d("取 消"),_=s({name:"PagesExampleManagerDetail"}),x=Object.assign(_,{setup(t){const{proxy:s}=c(),d=a();function _(){s.$refs.form.submit((()=>{s.$eventBus.emit("get-data-list"),$()}))}function x(){$()}function $(){d.tabbar.enable&&!d.tabbar.mergeTabs?s.$tabbar.close({name:"pagesExampleGeneralManagerList"}):s.$router.push({name:"pagesExampleGeneralManagerList"})}return(a,t)=>{const s=f("el-button"),d=l,c=f("el-col"),j=f("el-row"),y=r,k=e;return m(),o("div",null,[i(d,{title:"routerName"==a.$route.name?"新增管理员":"编辑管理员"},{default:u((()=>[i(s,{icon:"el-icon-arrow-left",size:"default",round:"",onClick:$},{default:u((()=>[p])),_:1})])),_:1},8,["title"]),i(y,null,{default:u((()=>[i(j,null,{default:u((()=>[i(c,{md:24,lg:16},{default:u((()=>[i(n,{id:a.$route.params.id,ref:"form"},null,8,["id"])])),_:1})])),_:1})])),_:1}),i(k,null,{default:u((()=>[i(s,{type:"primary",size:"large",onClick:_},{default:u((()=>[b])),_:1}),i(s,{size:"large",onClick:x},{default:u((()=>[g])),_:1})])),_:1})])}}});"function"==typeof t&&t(x);export{x as default};
