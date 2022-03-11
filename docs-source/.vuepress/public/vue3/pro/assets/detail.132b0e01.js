
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as e}from"./index.363693cb.js";import{u as a,b as t,o as s,n as r}from"./index.2c18650f.js";import i from"./index.06d56888.js";import{g as o,h as l,q as n,w as u,l as m,o as f,y as p,O as d}from"./vendor.9da56f98.js";import"./index.442bda72.js";import"./index.eb17c7b3.js";const c=p("返 回"),b=p("提 交"),x=p("取 消"),g=o({name:"PagesExampleDeliveryDetail"}),y=Object.assign(g,{setup(t){const{proxy:o}=d(),p=a();function g(){o.$refs.form.submit((()=>{o.$eventBus.emit("get-data-list"),j()}))}function y(){j()}function j(){p.tabbar.enable&&!p.tabbar.mergeTabs?o.$tabbar.close({name:"pagesExampleShopDeliveryList"}):o.$router.push({name:"pagesExampleShopDeliveryList"})}return(a,t)=>{const o=m("el-button"),p=s,d=r,v=e;return f(),l("div",null,[n(p,{title:"pagesExampleShopDeliveryCreate"==a.$route.name?"新增运费模版":"编辑运费模版"},{default:u((()=>[n(o,{icon:"el-icon-arrow-left",size:"default",round:"",onClick:j},{default:u((()=>[c])),_:1})])),_:1},8,["title"]),n(d,null,{default:u((()=>[n(i,{id:a.$route.params.id,ref:"form"},null,8,["id"])])),_:1}),n(v,null,{default:u((()=>[n(o,{type:"primary",size:"large",onClick:g},{default:u((()=>[b])),_:1}),n(o,{size:"large",onClick:y},{default:u((()=>[x])),_:1})])),_:1})])}}});"function"==typeof t&&t(y);export{y as default};
