
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as a,r as t,o as e,c as l,b as s,w as n,j as c,C as d,n as o,ad as r,q as i,e as u,z as f,ac as m}from"./index.afdde410.js";const v=f("node-qrcode 官网"),_=["src"],g={ref:"canvas"},h=["src"],p=["src"],q={setup(a){const{proxy:c}=d(),f=t(""),q=t(""),y=t("");return e((()=>{c.$qrcode.toDataURL("Fantastic-admin 真棒！").then((a=>{f.value=a})).catch((a=>{})),c.$qrcode.toCanvas(c.$refs.canvas,"Fantastic-admin 真棒！").then((()=>{})).catch((a=>{})),c.$qrcode.toDataURL("Fantastic-admin 真棒！",{color:{dark:"#5482EE",light:"#E8E8E8"}}).then((a=>{q.value=a})).catch((a=>{})),c.$qrcode.toDataURL("Fantastic-admin 真棒！",{width:100}).then((a=>{y.value=a})).catch((a=>{}))})),(a,t)=>{const e=o("el-button"),c=r,d=m,w=o("el-col"),E=o("el-row");return i(),l("div",null,[s(c,{title:"二维码"},{default:n((()=>[s(e,{icon:"el-icon-link",onClick:t[0]||(t[0]=a=>{return t="https://github.com/soldair/node-qrcode",void window.open(t,"top");var t})},{default:n((()=>[v])),_:1})])),_:1}),s(E,{gutter:20,style:{margin:"0 10px"}},{default:n((()=>[s(w,{sm:6},{default:n((()=>[s(d,{title:"渲染成 img 标签",style:{margin:"0"}},{default:n((()=>[u("img",{src:f.value},null,8,_)])),_:1})])),_:1}),s(w,{sm:6},{default:n((()=>[s(d,{title:"渲染成 canvas 标签",style:{margin:"0"}},{default:n((()=>[u("canvas",g,null,512)])),_:1})])),_:1}),s(w,{sm:6},{default:n((()=>[s(d,{title:"自定义颜色",style:{margin:"0"}},{default:n((()=>[u("img",{src:q.value},null,8,h)])),_:1})])),_:1}),s(w,{sm:6},{default:n((()=>[s(d,{title:"指定宽度",style:{margin:"0"}},{default:n((()=>[u("img",{src:y.value},null,8,p)])),_:1})])),_:1})])),_:1})])}}};"function"==typeof c&&c(q);var y=a(q,[["__scopeId","data-v-ffa43d24"]]);export{y as default};
