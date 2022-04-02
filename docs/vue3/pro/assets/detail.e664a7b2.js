
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as e}from"./index.4b3c78d6.js";import{d as a,u as t,c as s,b as i,w as r,j as l,n,ad as o,ac as u,q as d,z as m,C as p}from"./index.87af0725.js";import f from"./index.c5006d90.js";import"./index.8ca53bcb.js";import"./index.8277a10e.js";const c=m("返 回"),b=m("提 交"),x=m("取 消"),g=a({name:"PagesExampleDeliveryDetail"}),y=Object.assign(g,{setup(a){const{proxy:l}=p(),m=t();function g(){l.$refs.form.submit((()=>{l.$eventBus.emit("get-data-list"),j()}))}function y(){j()}function j(){m.tabbar.enable&&!m.tabbar.mergeTabs?l.$tabbar.close({name:"pagesExampleShopDeliveryList"}):l.$router.push({name:"pagesExampleShopDeliveryList"})}return(a,t)=>{const l=n("el-button"),m=o,p=u,_=e;return d(),s("div",null,[i(m,{title:"pagesExampleShopDeliveryCreate"==a.$route.name?"新增运费模版":"编辑运费模版"},{default:r((()=>[i(l,{icon:"el-icon-arrow-left",size:"default",round:"",onClick:j},{default:r((()=>[c])),_:1})])),_:1},8,["title"]),i(p,null,{default:r((()=>[i(f,{id:a.$route.params.id,ref:"form"},null,8,["id"])])),_:1}),i(_,null,{default:r((()=>[i(l,{type:"primary",size:"large",onClick:g},{default:r((()=>[b])),_:1}),i(l,{size:"large",onClick:y},{default:r((()=>[x])),_:1})])),_:1})])}}});"function"==typeof l&&l(y);export{y as default};
