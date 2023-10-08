import{_ as l,p as i,s as r,D as o,I as t,v as s,S as e,L as n,q as p}from"./chunks/framework.26d7e063.js";const V=JSON.parse('{"title":"发布插件","description":"","frontmatter":{},"headers":[],"relativePath":"zh-TW/guide/develop/publish.md","filePath":"zh-TW/guide/develop/publish.md"}'),c={name:"zh-TW/guide/develop/publish.md"},k=e("",29),h=s("div",{class:"language-npm"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"npm"),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-token-function)"}},"npm"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"run"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"pub"),s("span",{style:{color:"var(--shiki-token-text)"}}," [...name]")])])])],-1),y=s("div",{class:"language-yarn"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"yarn"),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-token-function)"}},"yarn"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"pub"),s("span",{style:{color:"var(--shiki-token-text)"}}," [...name]")])])])],-1),v=s("ul",null,[s("li",null,[s("strong",null,"name:"),n(" 要发布的插件列表，缺省时表示全部 (此处 "),s("code",null,"name"),n(" 不包含 "),s("code",null,"koishi-plugin-"),n(" 前缀，而是你的工作区目录名)")])],-1),u=s("p",null,"这将发布所有版本号发生变动的插件。",-1),d=s("div",{class:"tip custom-block"},[s("p",{class:"custom-block-title"},"TIP"),s("p",null,"从插件成功发布到进插件市场需要一定的时间 (通常在 15 分钟内)，请耐心等待。")],-1),g={class:"tip custom-block"},x=e("",4),m=s("div",{class:"language-npm"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"npm"),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-token-function)"}},"npm"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"config"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"delete"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"registry")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-token-function)"}},"npm"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"login")])])])],-1),q=s("div",{class:"language-yarn"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"yarn"),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-token-function)"}},"yarn"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"config"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"delete"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"registry")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-token-function)"}},"yarn"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"login")])])])],-1),_=s("p",null,"发布成功后，你可以将镜像重新设置为国内镜像，以保证后续的下载速度。 : :::",-1),b=s("h2",{id:"更新插件版本",tabindex:"-1"},[n("更新插件版本 "),s("a",{class:"header-anchor",href:"#更新插件版本","aria-label":'Permalink to "更新插件版本"'},"​")],-1),f=s("p",null,[n("初始创建的插件版本号为 "),s("code",null,"1.0.0"),n("。当你修改过插件后，你需要更新版本号才能重新发布。在应用目录运行下面的命令以更新版本号：")],-1),C=s("div",{class:"language-npm"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"npm"),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-token-function)"}},"npm"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"run"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"bump"),s("span",{style:{color:"var(--shiki-token-text)"}}," [...name] ["),s("span",{style:{color:"var(--shiki-token-number)"}},"-1"),s("span",{style:{color:"var(--shiki-token-text)"}},"|-2|-3|-p|-v "),s("span",{style:{color:"var(--shiki-token-operator)"}},"<"),s("span",{style:{color:"var(--shiki-token-text)"}},"ver"),s("span",{style:{color:"var(--shiki-token-operator)"}},">"),s("span",{style:{color:"var(--shiki-token-text)"}},"] [-r]")])])])],-1),T=s("div",{class:"language-yarn"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"yarn"),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-token-function)"}},"yarn"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"bump"),s("span",{style:{color:"var(--shiki-token-text)"}}," [...name] ["),s("span",{style:{color:"var(--shiki-token-number)"}},"-1"),s("span",{style:{color:"var(--shiki-token-text)"}},"|-2|-3|-p|-v "),s("span",{style:{color:"var(--shiki-token-operator)"}},"<"),s("span",{style:{color:"var(--shiki-token-text)"}},"ver"),s("span",{style:{color:"var(--shiki-token-operator)"}},">"),s("span",{style:{color:"var(--shiki-token-text)"}},"] [-r]")])])])],-1),j=e("",2);function P(E,I,S,F,A,D){const a=i("tab-select");return p(),r("div",null,[k,o(a,{class:"code"},{"tab-npm":t(()=>[h]),"tab-yarn":t(()=>[y]),_:1}),v,u,d,s("div",g,[x,o(a,{class:"code"},{"tab-npm":t(()=>[m]),"tab-yarn":t(()=>[q]),_:1}),_,b,f,o(a,{class:"code"},{"tab-npm":t(()=>[C]),"tab-yarn":t(()=>[T]),_:1}),j])])}const w=l(c,[["render",P]]);export{V as __pageData,w as default};
