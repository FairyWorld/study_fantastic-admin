
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{c as e,b as t,w as a,j as s,n,ac as l,q as o,g as c,e as u,z as i,ay as d,az as f,ad as r,C as p}from"./index.992324c5.js";const C=u("p",null,"所谓防抖，就是指触发事件后在 n 秒内函数只能执行一次，如果在 n 秒内又触发了事件，则会重新计算函数执行时间。",-1),k=i("连续点击我，只会执行最后一次点击事件，立即执行"),_=i("连续点击我，只会执行最后一次点击事件，延后执行"),m=u("p",null,"所谓节流，就是指连续触发事件但是在 n 秒中只执行一次函数。节流会稀释函数的执行频率。",-1),b=i("连续点击我，每一秒只会执行一次点击事件"),g={setup(s){const{proxy:u}=p();function i(){u.$message.success({message:"恭喜你，这是一条成功消息"})}let g=d((()=>{i()}),1e3),x=d((()=>{i()}),1e3,!1),y=f((()=>{i()}),1e3);return(s,u)=>{const i=r,d=n("el-button"),f=l;return o(),e("div",null,[t(i,{title:"防抖节流"}),t(f,{title:"防抖：debounce"},{default:a((()=>[C,t(d,{onClick:c(g)},{default:a((()=>[k])),_:1},8,["onClick"]),t(d,{onClick:c(x)},{default:a((()=>[_])),_:1},8,["onClick"])])),_:1}),t(f,{title:"节流：throttle"},{default:a((()=>[m,t(d,{onClick:c(y)},{default:a((()=>[b])),_:1},8,["onClick"])])),_:1})])}}};"function"==typeof s&&s(g);export{g as default};
