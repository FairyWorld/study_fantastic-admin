
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as e}from"./index.cffcd6d1.js";import{d as a,u as t,c as s,b as i,w as r,j as l,n,ad as o,ac as u,q as f,z as d,C as m}from"./index.afdde410.js";import p from"./index.f20420db.js";import"./index.f6fa666c.js";import"./index.a9a48509.js";const c=d("返 回"),b=d("提 交"),x=d("取 消"),g=a({name:"PagesExampleDeliveryDetail"}),y=Object.assign(g,{setup(a){const{proxy:l}=m(),d=t();function g(){l.$refs.form.submit((()=>{l.$eventBus.emit("get-data-list"),j()}))}function y(){j()}function j(){d.tabbar.enable&&!d.tabbar.mergeTabs?l.$tabbar.close({name:"pagesExampleShopDeliveryList"}):l.$router.push({name:"pagesExampleShopDeliveryList"})}return(a,t)=>{const l=n("el-button"),d=o,m=u,_=e;return f(),s("div",null,[i(d,{title:"pagesExampleShopDeliveryCreate"==a.$route.name?"新增运费模版":"编辑运费模版"},{default:r((()=>[i(l,{icon:"el-icon-arrow-left",size:"default",round:"",onClick:j},{default:r((()=>[c])),_:1})])),_:1},8,["title"]),i(m,null,{default:r((()=>[i(p,{id:a.$route.params.id,ref:"form"},null,8,["id"])])),_:1}),i(_,null,{default:r((()=>[i(l,{type:"primary",size:"large",onClick:g},{default:r((()=>[b])),_:1}),i(l,{size:"large",onClick:y},{default:r((()=>[x])),_:1})])),_:1})])}}});"function"==typeof l&&l(y);export{y as default};
