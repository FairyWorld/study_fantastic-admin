
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as e}from"./index.363693cb.js";import{u as a,b as t,o as l,n as o}from"./index.2c18650f.js";import r from"./index.c2f3c8e1.js";import{g as s,h as n,q as i,w as u,l as m,o as f,y as d,O as c}from"./vendor.9da56f98.js";const p=d("返 回"),b=d("提 交"),g=d("取 消"),x=s({name:"PagesExampleFormModeDetail"}),_=Object.assign(x,{setup(t){const{proxy:s}=c(),d=a();function x(){s.$refs.form.submit((()=>{s.$eventBus.emit("get-data-list"),$()}))}function _(){$()}function $(){d.tabbar.enable&&!d.tabbar.mergeTabs?s.$tabbar.close({name:"pagesExampleGeneralFormModeList"}):s.$router.push({name:"pagesExampleGeneralFormModeList"})}return(a,t)=>{const s=m("el-button"),d=l,c=m("el-col"),j=m("el-row"),y=o,C=e;return f(),n("div",null,[i(d,{title:"pagesExampleGeneralFormModeCreate"==a.$route.name?"新增":"编辑"},{default:u((()=>[i(s,{icon:"el-icon-arrow-left",size:"default",round:"",onClick:$},{default:u((()=>[p])),_:1})])),_:1},8,["title"]),i(y,null,{default:u((()=>[i(j,null,{default:u((()=>[i(c,{md:24,lg:16},{default:u((()=>[i(r,{id:a.$route.params.id,ref:"form"},null,8,["id"])])),_:1})])),_:1})])),_:1}),i(C,null,{default:u((()=>[i(s,{type:"primary",size:"large",onClick:x},{default:u((()=>[b])),_:1}),i(s,{size:"large",onClick:_},{default:u((()=>[g])),_:1})])),_:1})])}}});"function"==typeof t&&t(_);export{_ as default};
