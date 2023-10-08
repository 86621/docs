import{_ as i,p as l,s as r,D as o,I as n,v as s,S as a,L as e,q as p}from"./chunks/framework.26d7e063.js";const N=JSON.parse('{"title":"Publishing Plugins","description":"","frontmatter":{},"headers":[],"relativePath":"en-US/guide/develop/publish.md","filePath":"en-US/guide/develop/publish.md"}'),c={name:"en-US/guide/develop/publish.md"},k=a("",29),h=s("div",{class:"language-npm"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"npm"),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-token-function)"}},"npm"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"run"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"pub"),s("span",{style:{color:"var(--shiki-token-text)"}}," [...name]")])])])],-1),u=s("div",{class:"language-yarn"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"yarn"),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-token-function)"}},"yarn"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"pub"),s("span",{style:{color:"var(--shiki-token-text)"}}," [...name]")])])])],-1),d=s("ul",null,[s("li",null,[s("strong",null,"name:"),e(" list of plugins to be published, all by default ( "),s("code",null,"name"),e(" is your plugin directory name)")])],-1),v=s("p",null,"This will be released of all plugins that have changed version numbers.",-1),y=s("div",{class:"tip custom-block"},[s("p",{class:"custom-block-title"},"TIP"),s("p",null,"从插件成功发布到进插件市场需要一定的时间 (通常在 15 分钟内)，请耐心等待。")],-1),g={class:"tip custom-block"},m=a("",4),x=s("div",{class:"language-npm"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"npm"),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-token-function)"}},"npm"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"config"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"delete"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"registry")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-token-function)"}},"npm"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"login")])])])],-1),q=s("div",{class:"language-yarn"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"yarn"),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-token-function)"}},"yarn"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"config"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"delete"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"registry")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-token-function)"}},"yarn"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"login")])])])],-1),f=s("p",null,"发布成功后，你可以将镜像重新设置为国内镜像，以保证后续的下载速度。 : :::",-1),b=s("h2",{id:"updating-version",tabindex:"-1"},[e("Updating version "),s("a",{class:"header-anchor",href:"#updating-version","aria-label":'Permalink to "Updating version"'},"​")],-1),_=s("p",null,[e("Version default starts from "),s("code",null,"1.0.0"),e(". Its number needs to be updated before releasing changes. Run the command in the workspace root to update that:")],-1),T=s("div",{class:"language-npm"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"npm"),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-token-function)"}},"npm"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"run"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"bump"),s("span",{style:{color:"var(--shiki-token-text)"}}," [...name] ["),s("span",{style:{color:"var(--shiki-token-number)"}},"-1"),s("span",{style:{color:"var(--shiki-token-text)"}},"|-2|-3|-p|-v "),s("span",{style:{color:"var(--shiki-token-operator)"}},"<"),s("span",{style:{color:"var(--shiki-token-text)"}},"ver"),s("span",{style:{color:"var(--shiki-token-operator)"}},">"),s("span",{style:{color:"var(--shiki-token-text)"}},"] [-r]")])])])],-1),j=s("div",{class:"language-yarn"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"yarn"),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-token-function)"}},"yarn"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"bump"),s("span",{style:{color:"var(--shiki-token-text)"}}," [...name] ["),s("span",{style:{color:"var(--shiki-token-number)"}},"-1"),s("span",{style:{color:"var(--shiki-token-text)"}},"|-2|-3|-p|-v "),s("span",{style:{color:"var(--shiki-token-operator)"}},"<"),s("span",{style:{color:"var(--shiki-token-text)"}},"ver"),s("span",{style:{color:"var(--shiki-token-operator)"}},">"),s("span",{style:{color:"var(--shiki-token-text)"}},"] [-r]")])])])],-1),C=a("",2);function P(w,I,S,E,D,A){const t=l("tab-select");return p(),r("div",null,[k,o(t,{class:"code"},{"tab-npm":n(()=>[h]),"tab-yarn":n(()=>[u]),_:1}),d,v,y,s("div",g,[m,o(t,{class:"code"},{"tab-npm":n(()=>[x]),"tab-yarn":n(()=>[q]),_:1}),f,b,_,o(t,{class:"code"},{"tab-npm":n(()=>[T]),"tab-yarn":n(()=>[j]),_:1}),C])])}const F=i(c,[["render",P]]);export{N as __pageData,F as default};
