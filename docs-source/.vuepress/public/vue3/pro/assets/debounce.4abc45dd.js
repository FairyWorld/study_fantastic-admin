
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{c as e,b as t,w as a,j as s,n,ac as l,q as o,g as u,e as c,z as i,ay as f,az as d,ad as r,C as p}from"./index.87af0725.js";const C=c("p",null,"所谓防抖，就是指触发事件后在 n 秒内函数只能执行一次，如果在 n 秒内又触发了事件，则会重新计算函数执行时间。",-1),k=i("连续点击我，只会执行最后一次点击事件，立即执行"),_=i("连续点击我，只会执行最后一次点击事件，延后执行"),m=c("p",null,"所谓节流，就是指连续触发事件但是在 n 秒中只执行一次函数。节流会稀释函数的执行频率。",-1),b=i("连续点击我，每一秒只会执行一次点击事件"),g={setup(s){const{proxy:c}=p();function i(){c.$message.success({message:"恭喜你，这是一条成功消息"})}let g=f((()=>{i()}),1e3),x=f((()=>{i()}),1e3,!1),y=d((()=>{i()}),1e3);return(s,c)=>{const i=r,f=n("el-button"),d=l;return o(),e("div",null,[t(i,{title:"防抖节流"}),t(d,{title:"防抖：debounce"},{default:a((()=>[C,t(f,{onClick:u(g)},{default:a((()=>[k])),_:1},8,["onClick"]),t(f,{onClick:u(x)},{default:a((()=>[_])),_:1},8,["onClick"])])),_:1}),t(d,{title:"节流：throttle"},{default:a((()=>[m,t(f,{onClick:u(y)},{default:a((()=>[b])),_:1},8,["onClick"])])),_:1})])}}};"function"==typeof s&&s(g);export{g as default};
