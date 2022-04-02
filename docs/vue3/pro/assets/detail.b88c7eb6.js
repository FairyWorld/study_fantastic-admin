
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as e}from"./index.4b3c78d6.js";import{d as a,u as t,c as l,b as r,w as o,j as s,n,ad as i,ac as u,q as d,z as m,C as f}from"./index.87af0725.js";import c from"./index.013f60d2.js";const p=m("返 回"),b=m("提 交"),g=m("取 消"),x=a({name:"PagesExampleFormModeDetail"}),_=Object.assign(x,{setup(a){const{proxy:s}=f(),m=t();function x(){s.$refs.form.submit((()=>{s.$eventBus.emit("get-data-list"),$()}))}function _(){$()}function $(){m.tabbar.enable&&!m.tabbar.mergeTabs?s.$tabbar.close({name:"pagesExampleGeneralFormModeList"}):s.$router.push({name:"pagesExampleGeneralFormModeList"})}return(a,t)=>{const s=n("el-button"),m=i,f=n("el-col"),j=n("el-row"),C=u,y=e;return d(),l("div",null,[r(m,{title:"pagesExampleGeneralFormModeCreate"==a.$route.name?"新增":"编辑"},{default:o((()=>[r(s,{icon:"el-icon-arrow-left",size:"default",round:"",onClick:$},{default:o((()=>[p])),_:1})])),_:1},8,["title"]),r(C,null,{default:o((()=>[r(j,null,{default:o((()=>[r(f,{md:24,lg:16},{default:o((()=>[r(c,{id:a.$route.params.id,ref:"form"},null,8,["id"])])),_:1})])),_:1})])),_:1}),r(y,null,{default:o((()=>[r(s,{type:"primary",size:"large",onClick:x},{default:o((()=>[b])),_:1}),r(s,{size:"large",onClick:_},{default:o((()=>[g])),_:1})])),_:1})])}}});"function"==typeof s&&s(_);export{_ as default};
