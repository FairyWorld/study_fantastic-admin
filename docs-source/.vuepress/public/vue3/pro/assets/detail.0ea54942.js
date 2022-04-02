
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as e}from"./index.4b3c78d6.js";import{d as a,u as t,c as l,b as n,w as r,j as s,n as o,ad as i,ac as u,q as f,z as d,C as m}from"./index.87af0725.js";import c from"./index.315d8f21.js";const p=d("返 回"),b=d("提 交"),g=d("取 消"),_=a({name:"PagesExampleManagerDetail"}),x=Object.assign(_,{setup(a){const{proxy:s}=m(),d=t();function _(){s.$refs.form.submit((()=>{s.$eventBus.emit("get-data-list"),$()}))}function x(){$()}function $(){d.tabbar.enable&&!d.tabbar.mergeTabs?s.$tabbar.close({name:"pagesExampleGeneralManagerList"}):s.$router.push({name:"pagesExampleGeneralManagerList"})}return(a,t)=>{const s=o("el-button"),d=i,m=o("el-col"),j=o("el-row"),y=u,z=e;return f(),l("div",null,[n(d,{title:"routerName"==a.$route.name?"新增管理员":"编辑管理员"},{default:r((()=>[n(s,{icon:"el-icon-arrow-left",size:"default",round:"",onClick:$},{default:r((()=>[p])),_:1})])),_:1},8,["title"]),n(y,null,{default:r((()=>[n(j,null,{default:r((()=>[n(m,{md:24,lg:16},{default:r((()=>[n(c,{id:a.$route.params.id,ref:"form"},null,8,["id"])])),_:1})])),_:1})])),_:1}),n(z,null,{default:r((()=>[n(s,{type:"primary",size:"large",onClick:_},{default:r((()=>[b])),_:1}),n(s,{size:"large",onClick:x},{default:r((()=>[g])),_:1})])),_:1})])}}});"function"==typeof s&&s(x);export{x as default};
