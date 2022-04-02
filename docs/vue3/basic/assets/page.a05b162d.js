
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as e,d as a,E as l,r as t,a1 as s,c as n,e as d,f as o,j as u,m as c,n as i,Z as m,q as p,b as v,y as f,$ as r}from"./index.b7fe7d7b.js";const b={class:"block"},k={class:"block"},x={class:"block"},h=f("进入同级路由页面"),A=f("进入下级路由页面"),E=a({name:"KeepAliveExamplePage"}),V=Object.assign(E,{setup(e){const a=c(),u=l(),f=t(!1),E=t(1);function V(e){let l;switch(e){case 1:l="keepAliveExampleDetail";break;case 2:l="keepAliveExampleNestedDetail"}a.push({name:l})}return s(((e,a)=>{const l=a.matched[e.matched.length-1].components.default.name;f.value&&["keepAliveExampleDetail","keepAliveExampleNestedDetail"].includes(e.name)?u.add(l):u.remove(l)})),(e,a)=>{const l=r,t=i("el-switch"),s=i("el-input-number"),u=i("el-button"),c=m;return p(),n("div",null,[d(l,{title:"页面缓存",content:"除了可以在路由里配置页面是否需要缓存外，你也可以不使用框架提供的方法，而是在页面里自行实现，该方法目前仅支持在 Options API 中实现。"}),d(c,null,{default:o((()=>[v("div",b,[d(t,{modelValue:f.value,"onUpdate:modelValue":a[0]||(a[0]=e=>f.value=e),"active-text":"开启缓存","inactive-text":"关闭缓存"},null,8,["modelValue"])]),v("div",k,[d(s,{modelValue:E.value,"onUpdate:modelValue":a[1]||(a[1]=e=>E.value=e)},null,8,["modelValue"])]),v("div",x,[d(u,{onClick:a[2]||(a[2]=e=>V(1))},{default:o((()=>[h])),_:1}),d(u,{onClick:a[3]||(a[3]=e=>V(2))},{default:o((()=>[A])),_:1})])])),_:1})])}}});"function"==typeof u&&u(V);var _=e(V,[["__scopeId","data-v-675c6adf"]]);export{_ as default};
