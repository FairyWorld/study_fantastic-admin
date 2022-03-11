
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as e,f as a,b as l,n as t,o as s}from"./index.2c18650f.js";import{g as n,r as o,am as i,h as u,q as d,w as c,a2 as m,l as p,o as v,i as r,y as f}from"./vendor.9da56f98.js";const k={class:"block"},x={class:"block"},b={class:"block"},h=f("进入同级路由页面"),A=f("进入下级路由页面"),V=n({name:"KeepAliveExamplePage"}),_=Object.assign(V,{setup(e){const l=m(),n=a(),f=o(!1),V=o(1);function _(e){let a;switch(e){case 1:a="keepAliveExampleDetail";break;case 2:a="keepAliveExampleNestedDetail"}l.push({name:a})}return i(((e,a)=>{const l=a.matched[e.matched.length-1].components.default.name;f.value&&["keepAliveExampleDetail","keepAliveExampleNestedDetail"].includes(e.name)?n.add(l):n.remove(l)})),(e,a)=>{const l=s,n=p("el-switch"),o=p("el-input-number"),i=p("el-button"),m=t;return v(),u("div",null,[d(l,{title:"页面缓存",content:"除了可以在路由里配置页面是否需要缓存外，你也可以不使用框架提供的方法，而是在页面里自行实现，该方法目前仅支持在 Options API 中实现。"}),d(m,null,{default:c((()=>[r("div",k,[d(n,{modelValue:f.value,"onUpdate:modelValue":a[0]||(a[0]=e=>f.value=e),"active-text":"开启缓存","inactive-text":"关闭缓存"},null,8,["modelValue"])]),r("div",x,[d(o,{modelValue:V.value,"onUpdate:modelValue":a[1]||(a[1]=e=>V.value=e)},null,8,["modelValue"])]),r("div",b,[d(i,{onClick:a[2]||(a[2]=e=>_(1))},{default:c((()=>[h])),_:1}),d(i,{onClick:a[3]||(a[3]=e=>_(2))},{default:c((()=>[A])),_:1})])])),_:1})])}}});"function"==typeof l&&l(_);var E=e(_,[["__scopeId","data-v-1f189e48"]]);export{E as default};
