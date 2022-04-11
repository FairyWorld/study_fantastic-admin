
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as e,d as a,E as l,r as t,a1 as s,c as n,e as o,f as u,j as c,m as i,n as d,Z as m,q as p,b as v,y as f,$ as r}from"./index.fc479745.js";const k={class:"block"},x={class:"block"},b={class:"block"},h=f("进入同级路由页面"),A=f("进入下级路由页面"),E=a({name:"KeepAliveExamplePage"}),V=Object.assign(E,{setup(e){const a=i(),c=l(),f=t(!1),E=t(1);function V(e){let l;switch(e){case 1:l="keepAliveExampleDetail";break;case 2:l="keepAliveExampleNestedDetail"}a.push({name:l})}return s(((e,a)=>{const l=a.matched[e.matched.length-1].components.default.name;f.value&&["keepAliveExampleDetail","keepAliveExampleNestedDetail"].includes(e.name)?c.add(l):c.remove(l)})),(e,a)=>{const l=r,t=d("el-switch"),s=d("el-input-number"),c=d("el-button"),i=m;return p(),n("div",null,[o(l,{title:"页面缓存",content:"除了可以在路由里配置页面是否需要缓存外，你也可以不使用框架提供的方法，而是在页面里自行实现，该方法目前仅支持在 Options API 中实现。"}),o(i,null,{default:u((()=>[v("div",k,[o(t,{modelValue:f.value,"onUpdate:modelValue":a[0]||(a[0]=e=>f.value=e),"active-text":"开启缓存","inactive-text":"关闭缓存"},null,8,["modelValue"])]),v("div",x,[o(s,{modelValue:E.value,"onUpdate:modelValue":a[1]||(a[1]=e=>E.value=e)},null,8,["modelValue"])]),v("div",b,[o(c,{onClick:a[2]||(a[2]=e=>V(1))},{default:u((()=>[h])),_:1}),o(c,{onClick:a[3]||(a[3]=e=>V(2))},{default:u((()=>[A])),_:1})])])),_:1})])}}});"function"==typeof c&&c(V);var _=e(V,[["__scopeId","data-v-1f189e48"]]);export{_ as default};
