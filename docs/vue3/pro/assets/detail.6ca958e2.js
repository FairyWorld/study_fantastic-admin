
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as e}from"./index.477d4f9b.js";import{d as a,u as t,c as s,b as i,w as r,j as l,n,ad as o,ac as u,q as d,z as f,C as m}from"./index.80ead521.js";import p from"./index.7017f228.js";import"./index.3db476e5.js";import"./index.523b2b8e.js";const b=f("返 回"),c=f("提 交"),x=f("取 消"),g=a({name:"PagesExampleDeliveryDetail"}),y=Object.assign(g,{setup(a){const{proxy:l}=m(),f=t();function g(){l.$refs.form.submit((()=>{l.$eventBus.emit("get-data-list"),j()}))}function y(){j()}function j(){f.tabbar.enable&&!f.tabbar.mergeTabs?l.$tabbar.close({name:"pagesExampleShopDeliveryList"}):l.$router.push({name:"pagesExampleShopDeliveryList"})}return(a,t)=>{const l=n("el-button"),f=o,m=u,_=e;return d(),s("div",null,[i(f,{title:"pagesExampleShopDeliveryCreate"==a.$route.name?"新增运费模版":"编辑运费模版"},{default:r((()=>[i(l,{icon:"el-icon-arrow-left",size:"default",round:"",onClick:j},{default:r((()=>[b])),_:1})])),_:1},8,["title"]),i(m,null,{default:r((()=>[i(p,{id:a.$route.params.id,ref:"form"},null,8,["id"])])),_:1}),i(_,null,{default:r((()=>[i(l,{type:"primary",size:"large",onClick:g},{default:r((()=>[c])),_:1}),i(l,{size:"large",onClick:y},{default:r((()=>[x])),_:1})])),_:1})])}}});"function"==typeof l&&l(y);export{y as default};
