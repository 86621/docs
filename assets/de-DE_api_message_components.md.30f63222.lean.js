import{_ as i,p,s as c,v as s,L as a,D as e,I as t,S as l,q as h}from"./chunks/framework.26d7e063.js";const O=JSON.parse('{"title":"内置组件","description":"","frontmatter":{},"headers":[],"relativePath":"de-DE/api/message/components.md","filePath":"de-DE/api/message/components.md"}'),_={name:"de-DE/api/message/components.md"},d=s("h1",{id:"内置组件",tabindex:"-1"},[a("内置组件 "),s("a",{class:"header-anchor",href:"#内置组件","aria-label":'Permalink to "内置组件"'},"​")],-1),k=s("code",null,"ctx.broadcast()",-1),m=s("h2",{id:"核心组件",tabindex:"-1"},[a("核心组件 "),s("a",{class:"header-anchor",href:"#核心组件","aria-label":'Permalink to "核心组件"'},"​")],-1),u={id:"调用指令-会话",tabindex:"-1"},v=s("a",{class:"header-anchor",href:"#调用指令-会话","aria-label":'Permalink to "调用指令 (execute) <badge>会话</badge>"'},"​",-1),y=l("",2),g={id:"等待输入-会话",tabindex:"-1"},x=s("a",{class:"header-anchor",href:"#等待输入-会话","aria-label":'Permalink to "等待输入 (prompt) <badge>会话</badge>"'},"​",-1),b=l("",2),f={id:"国际化-会话-广播",tabindex:"-1"},T=s("a",{class:"header-anchor",href:"#国际化-会话-广播","aria-label":'Permalink to "国际化 (i18n) <badge>会话+广播</badge>"'},"​",-1),C=l("",5),P={id:"时间-会话-广播",tabindex:"-1"},S=s("a",{class:"header-anchor",href:"#时间-会话-广播","aria-label":'Permalink to "时间 (i18n:time) <badge>会话+广播</badge>"'},"​",-1),A=l("",4),V={id:"随机选取-实验性",tabindex:"-1"},I=s("a",{class:"header-anchor",href:"#随机选取-实验性","aria-label":'Permalink to "随机选取 (random) <badge type="warning">实验性</badge>"'},"​",-1),D=l("",2),N={id:"复数-实验性",tabindex:"-1"},E=s("a",{class:"header-anchor",href:"#复数-实验性","aria-label":'Permalink to "复数 (plural) <badge type="warning">实验性</badge>"'},"​",-1),q=l("",4),w=l("",3);function K(R,$,B,H,Y,J){const n=p("badge"),o=p("chat-message"),r=p("chat-panel");return h(),c("div",null,[d,s("ul",null,[s("li",null,[a("标有 "),e(n,null,{default:t(()=>[a("会话")]),_:1}),a(" 的组件只能在会话环境下使用 (常见的会话环境包括中间件和指令的内部)")]),s("li",null,[a("标有 "),e(n,null,{default:t(()=>[a("会话+广播")]),_:1}),a(" 的组件只能在会话环境或 "),k,a(" 中使用")])]),m,s("h3",u,[a("调用指令 (execute) "),e(n,null,{default:t(()=>[a("会话")]),_:1}),a(),v]),y,e(r,null,{default:t(()=>[e(o,{nickname:"Koishi"},{default:t(()=>[a("foo123bar")]),_:1})]),_:1}),s("h3",g,[a("等待输入 (prompt) "),e(n,null,{default:t(()=>[a("会话")]),_:1}),a(),x]),b,e(r,null,{default:t(()=>[e(o,{nickname:"Koishi"},{default:t(()=>[a("请输入一段文本。")]),_:1}),e(o,{nickname:"Alice"},{default:t(()=>[a("你好！")]),_:1}),e(o,{nickname:"Koishi"},{default:t(()=>[a("你输入的内容为：你好！")]),_:1})]),_:1}),s("h3",f,[a("国际化 (i18n) "),e(n,null,{default:t(()=>[a("会话+广播")]),_:1}),a(),T]),C,e(r,null,{default:t(()=>[e(o,{nickname:"Koishi"},{default:t(()=>[a("Hello, world!")]),_:1})]),_:1}),s("h3",P,[a("时间 (i18n:time) "),e(n,null,{default:t(()=>[a("会话+广播")]),_:1}),a(),S]),A,e(r,null,{default:t(()=>[e(o,{nickname:"Koishi"},{default:t(()=>[a("剩余时间：1 分钟 55 秒")]),_:1})]),_:1}),s("h3",V,[a("随机选取 (random) "),e(n,{type:"warning"},{default:t(()=>[a("实验性")]),_:1}),a(),I]),D,e(r,null,{default:t(()=>[e(o,{nickname:"Koishi"},{default:t(()=>[a("此次抛硬币的结果是反面")]),_:1})]),_:1}),s("h3",N,[a("复数 (plural) "),e(n,{type:"warning"},{default:t(()=>[a("实验性")]),_:1}),a(),E]),q,e(r,null,{default:t(()=>[e(o,{nickname:"Koishi"},{default:t(()=>[a("You have 2 apples.")]),_:1})]),_:1}),w])}const j=i(_,[["render",K]]);export{O as __pageData,j as default};
