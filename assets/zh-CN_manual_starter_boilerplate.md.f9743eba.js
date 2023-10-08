import{_ as l,a as r}from"./chunks/home-light.974017f7.js";import{_ as i,p as c,s as p,D as n,I as t,S as o,v as s,L as a,q as h}from"./chunks/framework.3f494197.js";const K=JSON.parse('{"title":"创建模板项目","description":"","frontmatter":{"prev":{"text":"选择安装方式","link":"/zh-CN/manual/starter/"},"next":{"text":"安装和配置插件","link":"/zh-CN/manual/usage/market.html"}},"headers":[],"relativePath":"zh-CN/manual/starter/boilerplate.md","filePath":"zh-CN/manual/starter/boilerplate.md"}'),k={name:"zh-CN/manual/starter/boilerplate.md"},d=o('<h1 id="创建模板项目" tabindex="-1">创建模板项目 <a class="header-anchor" href="#创建模板项目" aria-label="Permalink to &quot;创建模板项目&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>如果想了解其他安装方式，请移步 <a href="./">选择安装方式</a>。</p></div><p>本节将介绍我们最推荐的 Koishi 开发方案——创建模板项目。相比直接从零搭建，模板项目的优势在于：</p><ul><li>创建完成即是拥有带完整控制台体验的项目，一键创建各种模板插件</li><li>支持直接加载 TypeScript，你可以尽情享受代码提示和类型检查带来的便利</li><li>支持插件热重载，你可以在不重启应用的情况下修改插件代码，并获得即时的反馈</li><li>支持二次开发，你可以将你自己的机器人与其他人的插件进行联合调试</li></ul><p>当然，模板项目也可以直接用于生产。虽然在操作上可能不如启动器方便，但它提供了更多的自由度，并能在启动器所覆盖不到的场景下顺利运行。</p><h2 id="安装-node-js" tabindex="-1">安装 Node.js <a class="header-anchor" href="#安装-node-js" aria-label="Permalink to &quot;安装 Node.js&quot;">​</a></h2><p>Koishi 需要 <a href="https://nodejs.org/" target="_blank" rel="noreferrer">Node.js</a> (最低 v16，推荐使用 LTS) 运行环境，你需要自己安装它。</p><h3 id="下载安装包" tabindex="-1">下载安装包 <a class="header-anchor" href="#下载安装包" aria-label="Permalink to &quot;下载安装包&quot;">​</a></h3><p>首先我们前往 <a href="https://nodejs.org/" target="_blank" rel="noreferrer">Node.js</a> 的官方网站：</p><p class="dark-only"><img src="'+l+'" alt="home"></p><p class="light-only"><img src="'+r+`" alt="home"></p><p>在这里可以看到两个巨大的按钮，分别对应着 <strong>LTS (长期维护版)</strong> 和 <strong>Current (最新版本)</strong>。我们建议你选择更加稳定的 LTS 版本，点击按钮即可下载安装包。</p><p>随后，运行下载好的安装包，根据提示完成整个安装流程即可。</p><h3 id="安装包管理器" tabindex="-1">安装包管理器 <a class="header-anchor" href="#安装包管理器" aria-label="Permalink to &quot;安装包管理器&quot;">​</a></h3><p>Node.js 自带名为 <a href="https://www.npmjs.com/" target="_blank" rel="noreferrer">npm</a> 的包管理器，你可以直接使用它。我们同时也推荐功能更强大的 <a href="https://classic.yarnpkg.com/" target="_blank" rel="noreferrer">yarn</a> 作为包管理器。它的安装非常简单，只需打开命令行输入下面的命令：</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre><code><span class="line"><span style="color:#7F848E;font-style:italic;"># 安装 yarn</span></span>
<span class="line"><span style="color:var(--shiki-token-function);">npm</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">i</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-number);">-g</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">yarn</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 查看版本</span></span>
<span class="line"><span style="color:var(--shiki-token-function);">yarn</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-number);">-v</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>部分 Windows 用户可能会发现以下错误 (<a href="https://learn.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/about/about_execution_policies" target="_blank" rel="noreferrer">参考链接</a>)：</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:var(--shiki-token-text);">yarn：无法加载文件 yarn.ps1，因为在此系统上禁止运行脚本。</span></span></code></pre></div><p>此时请以管理员身份重新运行终端，并输入下面的命令：</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre><code><span class="line"><span style="color:var(--shiki-token-function);">Set-ExecutionPolicy</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">RemoteSigned</span></span></code></pre></div><p>之后就可以正常使用 yarn 了。</p></div><h3 id="配置镜像源" tabindex="-1">配置镜像源 <a class="header-anchor" href="#配置镜像源" aria-label="Permalink to &quot;配置镜像源&quot;">​</a></h3><p>如果你是国内用户，从 npm 或 yarn 上下载依赖可能非常慢。因此，我们推荐你配置一下镜像源，以提升安装速度。</p>`,19),y=s("div",{class:"language-npm"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"npm"),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-token-function)"}},"npm"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"config"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"set"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"registry"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"https://registry.npmmirror.com")])])])],-1),u=s("div",{class:"language-yarn"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"yarn"),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-token-function)"}},"yarn"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"config"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"set"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"registry"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"https://registry.npmmirror.com")])])])],-1),v=o('<h2 id="创建项目" tabindex="-1">创建项目 <a class="header-anchor" href="#创建项目" aria-label="Permalink to &quot;创建项目&quot;">​</a></h2><p>打开命令行，并进入你想要创建 Koishi 项目的目录。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>这个目录不宜过长，且路径中请避免出现中文或者空格。我们推荐的目录如下：</p><ul><li>Windows：<code>C:\\dev</code> 或者 <code>D:\\dev</code> (也不要直接在盘根创建项目，最好是建一层目录)</li><li>其他操作系统：<code>~/dev</code></li></ul></div><p>输入下面的命令以创建 Koishi 项目：</p>',4),_=s("div",{class:"language-npm"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"npm"),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-token-function)"}},"npm"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"i"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-number)"}},"-g"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"create-koishi@latest")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-token-function)"}},"npm"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"init"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"koishi")])])])],-1),m=s("div",{class:"language-yarn"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"yarn"),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-token-function)"}},"yarn"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"create"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"koishi")])])])],-1),g=s("p",null,"跟随提示即可完成全套初始化流程。",-1),b=s("h2",{id:"启动应用",tabindex:"-1"},[a("启动应用 "),s("a",{class:"header-anchor",href:"#启动应用","aria-label":'Permalink to "启动应用"'},"​")],-1),f=s("p",null,[a("如果你顺利完成了上述操作，你的应用此时应该已经是启动状态，并弹出了控制台界面。如果你想要关闭应用，可以在命令行中按下 "),s("code",null,"Ctrl+C"),a(" 组合键。当应用处于关闭状态时，你可以在运行下面的指令以再次启动：")],-1),x=s("div",{class:"language-npm"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"npm"),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-token-function)"}},"npm"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"start")])])])],-1),C=s("div",{class:"language-yarn"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"yarn"),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-token-function)"}},"yarn"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"start")])])])],-1),T=s("h2",{id:"接下来",tabindex:"-1"},[a("接下来…… "),s("a",{class:"header-anchor",href:"#接下来","aria-label":'Permalink to "接下来……"'},"​")],-1),P=s("p",null,"恭喜你已经掌握了 Koishi 的基本用法！接下来：",-1),N=s("ul",null,[s("li",null,[a("如果你希望了解 Koishi 的更多功能，请前往 "),s("a",{href:"./../usage/market.html"},"安装和配置插件")]),s("li",null,[a("如果你希望立即开始你的插件开发，请前往 "),s("a",{href:"./../../guide/"},"开发指南")])],-1);function S(q,j,w,I,V,z){const e=c("tab-select");return h(),p("div",null,[d,n(e,{class:"code"},{"tab-npm":t(()=>[y]),"tab-yarn":t(()=>[u]),_:1}),v,n(e,{class:"code"},{"tab-npm":t(()=>[_]),"tab-yarn":t(()=>[m]),_:1}),g,b,f,n(e,{class:"code"},{"tab-npm":t(()=>[x]),"tab-yarn":t(()=>[C]),_:1}),T,P,N])}const D=i(k,[["render",S]]);export{K as __pageData,D as default};
