
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as e,q as t,t as s,b as n,n as o,o as a}from"./index.2c18650f.js";import{h as l,q as i,w as u,l as c,o as d,i as f,y as r}from"./vendor.9da56f98.js";const m={methods:{debounce:t((function(){this.message()}),1e3),debounce2:t((function(){this.message()}),1e3,!1),throttle:s((function(){this.message()}),1e3),message(){this.$message.success({message:"恭喜你，这是一条成功消息"})}}},h=f("p",null,"所谓防抖，就是指触发事件后在 n 秒内函数只能执行一次，如果在 n 秒内又触发了事件，则会重新计算函数执行时间。",-1),b=r("连续点击我，只会执行最后一次点击事件，立即执行"),g=r("连续点击我，只会执行最后一次点击事件，延后执行"),k=f("p",null,"所谓节流，就是指连续触发事件但是在 n 秒中只执行一次函数。节流会稀释函数的执行频率。",-1),p=r("连续点击我，每一秒只会执行一次点击事件");"function"==typeof n&&n(m);var C=e(m,[["render",function(e,t,s,n,f,r){const m=a,C=c("el-button"),_=o;return d(),l("div",null,[i(m,{title:"防抖节流"}),i(_,{title:"防抖：debounce"},{default:u((()=>[h,i(C,{onClick:r.debounce},{default:u((()=>[b])),_:1},8,["onClick"]),i(C,{onClick:r.debounce2},{default:u((()=>[g])),_:1},8,["onClick"])])),_:1}),i(_,{title:"节流：throttle"},{default:u((()=>[k,i(C,{onClick:r.throttle},{default:u((()=>[p])),_:1},8,["onClick"])])),_:1})])}]]);export{C as default};
