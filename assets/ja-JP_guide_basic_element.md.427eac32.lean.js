import{_ as c,p as i,s as k,D as n,I as a,v as s,L as t,S as o,q as h}from"./chunks/framework.26d7e063.js";const j=JSON.parse('{"title":"消息元素","description":"","frontmatter":{},"headers":[],"relativePath":"ja-JP/guide/basic/element.md","filePath":"ja-JP/guide/basic/element.md"}'),y={name:"ja-JP/guide/basic/element.md"},v=s("h1",{id:"消息元素",tabindex:"-1"},[t("消息元素 "),s("a",{class:"header-anchor",href:"#消息元素","aria-label":'Permalink to "消息元素"'},"​")],-1),d=s("p",null,[t("当然，一个聊天平台所能发送或接收的内容往往不只有纯文本。为此，我们引入了 "),s("strong",null,"消息元素 (Element)"),t(" 的概念。")],-1),x=s("p",null,"消息元素类似于 HTML 元素，它是组成消息的基本单位。一个元素可以表示具有特定语义的内容，如文本、表情、图片、引用、元信息等。Koishi 会将这些元素转换为平台所支持的格式，以便在不同平台之间发送和接收消息。",-1),u=s("h2",{id:"基本用法",tabindex:"-1"},[t("基本用法 "),s("a",{class:"header-anchor",href:"#基本用法","aria-label":'Permalink to "基本用法"'},"​")],-1),_=s("p",null,"一个典型的元素包含名称、属性和内容。在 Koishi 中，我们通常使用 JSX 或 API 的方式创建元素。下面是一些例子：",-1),g=s("div",{class:"language-tsx"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"JSX"),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#7F848E","font-style":"italic"}},"// 欢迎 @用户名 入群！")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-token-constant)"}},"session"),s("span",{style:{color:"var(--shiki-token-text)"}},"."),s("span",{style:{color:"var(--shiki-token-function)"}},"send"),s("span",{style:{color:"var(--shiki-token-text)"}},"(<>欢迎 <"),s("span",{style:{color:"var(--shiki-token-parameter)"}},"at"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"#D19A66","font-style":"italic"}},"id"),s("span",{style:{color:"var(--shiki-token-operator)"}},"="),s("span",{style:{color:"var(--shiki-token-keyword)"}},"{"),s("span",{style:{color:"var(--shiki-token-parameter)"}},"userId"),s("span",{style:{color:"var(--shiki-token-keyword)"}},"}"),s("span",{style:{color:"var(--shiki-token-text)"}},"/> 入群！</>)")]),t(`
`),s("span",{class:"line"}),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#7F848E","font-style":"italic"}},"// 发送一张 Koishi 图标")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-token-constant)"}},"session"),s("span",{style:{color:"var(--shiki-token-text)"}},"."),s("span",{style:{color:"var(--shiki-token-function)"}},"send"),s("span",{style:{color:"var(--shiki-token-text)"}},"(<"),s("span",{style:{color:"var(--shiki-token-parameter)"}},"image"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"#D19A66","font-style":"italic"}},"url"),s("span",{style:{color:"var(--shiki-token-operator)"}},"="),s("span",{style:{color:"var(--shiki-token-string)"}},'"https://koishi.chat/logo.png"'),s("span",{style:{color:"var(--shiki-token-text)"}},"/>)")])])])],-1),m=s("div",{class:"language-ts"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"API"),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#7F848E","font-style":"italic"}},"// 欢迎 @用户名 入群！")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-token-constant)"}},"session"),s("span",{style:{color:"var(--shiki-token-text)"}},"."),s("span",{style:{color:"var(--shiki-token-function)"}},"send"),s("span",{style:{color:"var(--shiki-token-text)"}},"("),s("span",{style:{color:"var(--shiki-token-string)"}},"'欢迎 '"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-operator)"}},"+"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-function)"}},"h"),s("span",{style:{color:"var(--shiki-token-text)"}},"("),s("span",{style:{color:"var(--shiki-token-string)"}},"'at'"),s("span",{style:{color:"var(--shiki-token-text)"}},", { "),s("span",{style:{color:"var(--shiki-token-parameter)"}},"id"),s("span",{style:{color:"var(--shiki-token-text)"}},": "),s("span",{style:{color:"var(--shiki-token-constant)"}},"session"),s("span",{style:{color:"var(--shiki-token-text)"}},"."),s("span",{style:{color:"var(--shiki-token-parameter)"}},"userId"),s("span",{style:{color:"var(--shiki-token-text)"}}," }) "),s("span",{style:{color:"var(--shiki-token-operator)"}},"+"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"' 入群！'"),s("span",{style:{color:"var(--shiki-token-text)"}},")")]),t(`
`),s("span",{class:"line"}),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#7F848E","font-style":"italic"}},"// 发送一张 Koishi 图标")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-token-constant)"}},"session"),s("span",{style:{color:"var(--shiki-token-text)"}},"."),s("span",{style:{color:"var(--shiki-token-function)"}},"send"),s("span",{style:{color:"var(--shiki-token-text)"}},"("),s("span",{style:{color:"var(--shiki-token-function)"}},"h"),s("span",{style:{color:"var(--shiki-token-text)"}},"("),s("span",{style:{color:"var(--shiki-token-string)"}},"'image'"),s("span",{style:{color:"var(--shiki-token-text)"}},", { "),s("span",{style:{color:"var(--shiki-token-parameter)"}},"url"),s("span",{style:{color:"var(--shiki-token-text)"}},": "),s("span",{style:{color:"var(--shiki-token-string)"}},"'https://koishi.chat/logo.png'"),s("span",{style:{color:"var(--shiki-token-text)"}}," }))")])])])],-1),f=o("",20),b=o("",2),C=s("blockquote",null,"原消息文本",-1),T=o("",3),P=s("img",{src:"https://koishi.chat/logo.png",alt:"Koishi Logo",style:{"max-width":"100px"}},null,-1),S=o("",4),E={id:"消息组件-实验性",tabindex:"-1"},A=s("a",{class:"header-anchor",href:"#消息组件-实验性","aria-label":'Permalink to "消息组件 <badge type="warning">实验性</badge>"'},"​",-1),I=o("",2),q=o("",10),F=s("div",{class:"language-tsx"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"JSX"),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#7F848E","font-style":"italic"}},"// 请注意这里的大写字母")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-token-constant)"}},"session"),s("span",{style:{color:"var(--shiki-token-text)"}},"."),s("span",{style:{color:"var(--shiki-token-function)"}},"send"),s("span",{style:{color:"var(--shiki-token-text)"}},"(<"),s("span",{style:{color:"var(--shiki-token-constant)"}},"Custom"),s("span",{style:{color:"var(--shiki-token-text)"}},"/>)")])])])],-1),w=s("div",{class:"language-ts"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"API"),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#7F848E","font-style":"italic"}},"// 请注意这里的大写字母")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-token-constant)"}},"session"),s("span",{style:{color:"var(--shiki-token-text)"}},"."),s("span",{style:{color:"var(--shiki-token-function)"}},"send"),s("span",{style:{color:"var(--shiki-token-text)"}},"("),s("span",{style:{color:"var(--shiki-token-function)"}},"h"),s("span",{style:{color:"var(--shiki-token-text)"}},"("),s("span",{style:{color:"var(--shiki-token-parameter)"}},"Custom"),s("span",{style:{color:"var(--shiki-token-text)"}},"))")])])])],-1),V=o("",3);function J(D,K,N,R,L,X){const r=i("tab-select"),e=i("chat-message"),l=i("chat-panel"),p=i("badge");return h(),k("div",null,[v,d,x,u,_,n(r,{class:"code"},{"title-tsx":a(()=>[t("JSX")]),"tab-tsx":a(()=>[g]),"title-ts":a(()=>[t("API")]),"tab-ts":a(()=>[m]),_:1}),f,n(l,null,{default:a(()=>[n(e,{nickname:"Koishi"},{default:a(()=>[t("欢迎 @用户名 入群！")]),_:1})]),_:1}),b,n(l,null,{default:a(()=>[n(e,{nickname:"Koishi"},{default:a(()=>[C,t(" 你说得对 ")]),_:1})]),_:1}),T,n(l,null,{default:a(()=>[n(e,{nickname:"Koishi"},{default:a(()=>[P]),_:1})]),_:1}),S,s("h2",E,[t("消息组件 "),n(p,{type:"warning"},{default:a(()=>[t("实验性")]),_:1}),t(),A]),I,n(l,null,{default:a(()=>[n(e,{nickname:"Koishi"},{default:a(()=>[t("这是执行结果：hello")]),_:1})]),_:1}),q,n(r,{class:"code"},{"title-tsx":a(()=>[t("JSX")]),"tab-tsx":a(()=>[F]),"title-ts":a(()=>[t("API")]),"tab-ts":a(()=>[w]),_:1}),V])}const U=c(y,[["render",J]]);export{j as __pageData,U as default};
