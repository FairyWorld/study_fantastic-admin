
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as e}from"./index.cffcd6d1.js";import{d as a,u as t,c as l,b as n,w as r,j as s,n as o,ad as i,ac as u,q as d,z as f,C as m}from"./index.afdde410.js";import c from"./index.d5da8455.js";const p=f("返 回"),b=f("提 交"),g=f("取 消"),_=a({name:"PagesExampleManagerDetail"}),x=Object.assign(_,{setup(a){const{proxy:s}=m(),f=t();function _(){s.$refs.form.submit((()=>{s.$eventBus.emit("get-data-list"),$()}))}function x(){$()}function $(){f.tabbar.enable&&!f.tabbar.mergeTabs?s.$tabbar.close({name:"pagesExampleGeneralManagerList"}):s.$router.push({name:"pagesExampleGeneralManagerList"})}return(a,t)=>{const s=o("el-button"),f=i,m=o("el-col"),j=o("el-row"),y=u,z=e;return d(),l("div",null,[n(f,{title:"routerName"==a.$route.name?"新增管理员":"编辑管理员"},{default:r((()=>[n(s,{icon:"el-icon-arrow-left",size:"default",round:"",onClick:$},{default:r((()=>[p])),_:1})])),_:1},8,["title"]),n(y,null,{default:r((()=>[n(j,null,{default:r((()=>[n(m,{md:24,lg:16},{default:r((()=>[n(c,{id:a.$route.params.id,ref:"form"},null,8,["id"])])),_:1})])),_:1})])),_:1}),n(z,null,{default:r((()=>[n(s,{type:"primary",size:"large",onClick:_},{default:r((()=>[b])),_:1}),n(s,{size:"large",onClick:x},{default:r((()=>[g])),_:1})])),_:1})])}}});"function"==typeof s&&s(x);export{x as default};
