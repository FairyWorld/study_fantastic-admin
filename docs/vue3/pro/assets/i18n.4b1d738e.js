
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as e,b as n,o as t,n as a}from"./index.2c18650f.js";import{h as o,q as r,w as i,l,o as s}from"./vendor.9da56f98.js";function u(e){e.__i18n=e.__i18n||[],e.__i18n.push({locale:"",resource:{"zh-cn":{intro:e=>{const{normalize:n}=e;return n(["除了支持全局多语言切换，还支持 Vue 单文件模式语言切换，你可以尝试在这个页面点击右上角的语言切换试试"])}},"zh-tw":{intro:e=>{const{normalize:n}=e;return n(["除了支持全局多語言切換，還支持 Vue 單文件模式語言切換，你可以嘗試在這個頁面點擊右上角的語言切換試試"])}},en:{intro:e=>{const{normalize:n}=e;return n(["In addition to global multi-language switch, also support Vue single file mode language switch, you can try to click on the top right corner of the page to switch language"])}}}})}const g={data:()=>({page:1,pageSize:100}),methods:{handleSizeChange(e){this.pageSize=e},handleCurrentChange(e){this.page=e}}};"function"==typeof n&&n(g),u(g);var h=e(g,[["render",function(e,n,u,g,h,p){const c=t,d=l("el-pagination"),z=a;return s(),o("div",null,[r(c,{title:e.$t("route.i18n"),content:e.$t("intro")},null,8,["title","content"]),r(z,{title:"Element 组件"},{default:i((()=>[r(d,{"current-page":h.page,"page-sizes":[100,200,300,400],"page-size":h.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:400,onSizeChange:p.handleSizeChange,onCurrentChange:p.handleCurrentChange},null,8,["current-page","page-size","onSizeChange","onCurrentChange"])])),_:1})])}]]);export{h as default};
