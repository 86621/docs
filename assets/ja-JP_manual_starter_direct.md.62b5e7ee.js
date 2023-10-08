import{_ as r,p as i,s as k,D as t,I as a,S as o,v as s,L as n,q as c}from"./chunks/framework.3f494197.js";const V=JSON.parse('{"title":"作为依赖调用","description":"","frontmatter":{"prev":{"text":"インストール方法","link":"/ja-JP/manual/starter/"},"next":{"text":"指南","link":"/ja-JP/guide/"}},"headers":[],"relativePath":"ja-JP/manual/starter/direct.md","filePath":"ja-JP/manual/starter/direct.md"}'),y={name:"ja-JP/manual/starter/direct.md"},h=o('<h1 id="作为依赖调用" tabindex="-1">作为依赖调用 <a class="header-anchor" href="#作为依赖调用" aria-label="Permalink to &quot;作为依赖调用&quot;">​</a></h1><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>这篇指南假设你已了解关于 <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript" target="_blank" rel="noreferrer">JavaScript</a> 和 <a href="https://nodejs.org/" target="_blank" rel="noreferrer">Node.js</a> 的中级知识。如果你刚开始学习 JavaScript 开发或者对编写业务代码不感兴趣，请 <a href="./">选择其他安装方式</a>。</p></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>我们强烈建议使用模板项目进行 Koishi 开发。如果你不确定自己在做什么，建议先完整阅读 <a href="./boilerplate.html">模板项目</a> 章节。</p></div><p>虽然现在我们推荐绝大部分用户使用 <a href="./boilerplate.html">模板项目</a>，但如果你希望将 Koishi 嵌入更复杂的程序中，那么直接调用将会成为更具有灵活性的选择。</p><h2 id="初始化项目" tabindex="-1">初始化项目 <a class="header-anchor" href="#初始化项目" aria-label="Permalink to &quot;初始化项目&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Koishi 本身使用 TypeScript 编写，因此我们推荐你使用 TypeScript 来进行 Koishi 开发。在接下来的文档中，我们将统一使用 TypeScript 作为示例代码。如果你想编写原生 JavaScript 或使用其他方言，可以在示例代码的基础上自行修改。</p></div><p>Koishi 需要 <a href="https://nodejs.org/" target="_blank" rel="noreferrer">Node.js</a> (最低 v16，推荐使用 LTS) 运行环境，你需要自己安装它。这里我们假定你已经安装完成了。</p><p>首先初始化你的机器人目录并安装 Koishi 和所需的插件 (这里以官方插件 console, sandbox 和 echo 为例)：</p>',8),v=s("div",{class:"language-npm"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"npm"),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#7F848E","font-style":"italic"}},"# 初始化项目")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-token-function)"}},"npm"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"init")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#7F848E","font-style":"italic"}},"# 安装 Koishi 和相关插件")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-token-function)"}},"npm"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"i"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"koishi"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"@koishijs/plugin-console"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-operator)"}},"\\")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-token-text)"}},"             "),s("span",{style:{color:"var(--shiki-token-string)"}},"@koishijs/plugin-sandbox"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-operator)"}},"\\")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-token-text)"}},"             "),s("span",{style:{color:"var(--shiki-token-string)"}},"@koishijs/plugin-echo")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#7F848E","font-style":"italic"}},"# 安装 TypeScript 相关依赖 (如不使用可忽略此步骤)")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-token-function)"}},"npm"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"i"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"typescript"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"@types/node"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"esbuild"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"esbuild-register"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-number)"}},"-D")])])])],-1),x=s("div",{class:"language-yarn"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"yarn"),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#7F848E","font-style":"italic"}},"# 初始化项目")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-token-function)"}},"yarn"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"init")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#7F848E","font-style":"italic"}},"# 安装 Koishi 和相关插件")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-token-function)"}},"yarn"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"add"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"koishi"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"@koishijs/plugin-console"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-operator)"}},"\\")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-token-text)"}},"                "),s("span",{style:{color:"var(--shiki-token-string)"}},"@koishijs/plugin-sandbox"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-operator)"}},"\\")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-token-text)"}},"                "),s("span",{style:{color:"var(--shiki-token-string)"}},"@koishijs/plugin-echo")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#7F848E","font-style":"italic"}},"# 安装 TypeScript 相关依赖 (如不使用可忽略此步骤)")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-token-function)"}},"yarn"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"add"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"typescript"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"@types/node"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"esbuild"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"esbuild-register"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-number)"}},"-D")])])])],-1),d=o(`<p>新建入口文件 <code>index.ts</code>，并写下这段代码：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">index.ts</span><pre><code><span class="line"><span style="color:var(--shiki-token-keyword);">import</span><span style="color:var(--shiki-token-text);"> { </span><span style="color:var(--shiki-token-parameter);">Context</span><span style="color:var(--shiki-token-text);"> } </span><span style="color:var(--shiki-token-keyword);">from</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">&#39;koishi&#39;</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">import</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-parameter);">console</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">from</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">&#39;@koishijs/plugin-console&#39;</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">import</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-number);">*</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">as</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-parameter);">sandbox</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">from</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">&#39;@koishijs/plugin-sandbox&#39;</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">import</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-number);">*</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">as</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-parameter);">echo</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">from</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">&#39;@koishijs/plugin-echo&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 创建一个 Koishi 应用</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">const</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-operator);">=</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">new</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-function);">Context</span><span style="color:var(--shiki-token-text);">({</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">port</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-number);">5140</span><span style="color:var(--shiki-token-text);">,</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 启用上述插件</span></span>
<span class="line"><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">plugin</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-parameter);">console</span><span style="color:var(--shiki-token-text);">)     </span><span style="color:#7F848E;font-style:italic;">// 提供控制台</span></span>
<span class="line"><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">plugin</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-parameter);">sandbox</span><span style="color:var(--shiki-token-text);">)     </span><span style="color:#7F848E;font-style:italic;">// 提供调试沙盒</span></span>
<span class="line"><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">plugin</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-parameter);">echo</span><span style="color:var(--shiki-token-text);">)        </span><span style="color:#7F848E;font-style:italic;">// 提供回声指令</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 启动应用</span></span>
<span class="line"><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">start</span><span style="color:var(--shiki-token-text);">()</span></span></code></pre></div><p>接着运行这个文件：</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre><code><span class="line"><span style="color:var(--shiki-token-function);">node</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-number);">-r</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">esbuild-register</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">.</span></span></code></pre></div><p>最后，打开浏览器并前往 <code>http://localhost:5140</code>，你将看到一个控制台界面。在左侧点击进入「沙盒」页面，并点击屏幕上方的「添加用户」来创建一个模拟用户。现在你已经可以与机器人对话了：</p>`,5),u=s("h2",{id:"配置机器人",tabindex:"-1"},[n("配置机器人 "),s("a",{class:"header-anchor",href:"#配置机器人","aria-label":'Permalink to "配置机器人"'},"​")],-1),g=s("p",null,"如果你想要接入真实聊天平台，那么你只需要安装适配插件即可：",-1),f=s("div",{class:"language-npm"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"npm"),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#7F848E","font-style":"italic"}},"# 以 OneBot 和 Discord 适配器为例")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-token-function)"}},"npm"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"i"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"@koishijs/plugin-adapter-onebot"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"@koishijs/plugin-adapter-discord")])])])],-1),m=s("div",{class:"language-yarn"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"yarn"),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#7F848E","font-style":"italic"}},"# 以 OneBot 和 Discord 适配器为例")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-token-function)"}},"yarn"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"add"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"@koishijs/plugin-adapter-onebot"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"@koishijs/plugin-adapter-discord")])])])],-1),_=o(`<p>接着修改你刚刚创建的 <code>index.ts</code>。每个机器人相当于启用一个插件：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">index.ts</span><pre><code><span class="line"><span style="color:var(--shiki-token-keyword);">import</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-parameter);">onebot</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">from</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">&#39;@koishijs/plugin-adapter-onebot&#39;</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">import</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-parameter);">discord</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">from</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">&#39;@koishijs/plugin-adapter-discord&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 使用 OneBot 适配器的机器人</span></span>
<span class="line"><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">plugin</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-parameter);">onebot</span><span style="color:var(--shiki-token-text);">, {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">protocol</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-string);">&#39;ws&#39;</span><span style="color:var(--shiki-token-text);">,</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">selfId</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-string);">&#39;123456789&#39;</span><span style="color:var(--shiki-token-text);">,</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">endpoint</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-string);">&#39;ws://127.0.0.1:6700&#39;</span><span style="color:var(--shiki-token-text);">,</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 使用 OneBot 适配器的另一个机器人，可以有不同的通信方式</span></span>
<span class="line"><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">plugin</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-parameter);">onebot</span><span style="color:var(--shiki-token-text);">, {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">protocol</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-string);">&#39;http&#39;</span><span style="color:var(--shiki-token-text);">,</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">selfId</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-string);">&#39;987654321&#39;</span><span style="color:var(--shiki-token-text);">,</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">endpoint</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-string);">&#39;http://127.0.0.1:5700&#39;</span><span style="color:var(--shiki-token-text);">,</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 使用 Discord 适配器的机器人</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 别忘了在使用之前，先安装相应的插件和完成准备工作</span></span>
<span class="line"><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">plugin</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-parameter);">discord</span><span style="color:var(--shiki-token-text);">, {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">token</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-string);">&#39;QwErTyUiOpAsDfGhJkLzXcVbNm&#39;</span><span style="color:var(--shiki-token-text);">,</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">})</span></span></code></pre></div><h2 id="添加更多插件" tabindex="-1">添加更多插件 <a class="header-anchor" href="#添加更多插件" aria-label="Permalink to &quot;添加更多插件&quot;">​</a></h2><p>Koishi 插件可以在 <a href="https://www.npmjs.com" target="_blank" rel="noreferrer">npm</a> 上获取。通常插件会遵循下面的名称：</p><ul><li>koishi-plugin-foo</li><li>@koishijs/plugin-foo</li><li>@bar/koishi-plugin-foo</li></ul><p>对于社区插件，使用类似的方式安装和加载：</p>`,6),b=s("div",{class:"language-npm"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"npm"),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#7F848E","font-style":"italic"}},"# 以 puppeteer 和 forward 插件为例")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-token-function)"}},"npm"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"i"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"koishi-plugin-puppeteer"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"koishi-plugin-forward")])])])],-1),w=s("div",{class:"language-yarn"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"yarn"),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#7F848E","font-style":"italic"}},"# 以 puppeteer 和 forward 插件为例")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-token-function)"}},"yarn"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"add"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"koishi-plugin-puppeteer"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"koishi-plugin-forward")])])])],-1),C=o(`<div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">index.ts</span><pre><code><span class="line"><span style="color:var(--shiki-token-keyword);">import</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-parameter);">puppeteer</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">from</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">&#39;koishi-plugin-puppeteer&#39;</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">import</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-number);">*</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">as</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-parameter);">forward</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">from</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">&#39;koishi-plugin-forward&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">plugin</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-parameter);">puppeteer</span><span style="color:var(--shiki-token-text);">)   </span><span style="color:#7F848E;font-style:italic;">// 浏览器服务</span></span>
<span class="line"><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">plugin</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-parameter);">forward</span><span style="color:var(--shiki-token-text);">)     </span><span style="color:#7F848E;font-style:italic;">// 消息转发</span></span></code></pre></div><p>请注意到上面的两个插件的导入方式的微妙差异。puppeteer 插件使用了默认导出，而 forward 插件使用了导出的命名空间。这两种写法存在本质的区别，不能混用，因此你需要自行判断每个插件属于哪一种情况。虽然这可能产生一些困扰，但如果你是 TypeScript 用户，在类型提示的帮助下，判断一个插件属于哪一种情况是很轻松的。</p><p>同理，对于 commonjs 的使用者，如果要使用 <code>require</code> 来获取插件对象，也应注意到这种区别：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">index.ts</span><pre><code><span class="line"><span style="color:#7F848E;font-style:italic;">// 这里的 .default 是不可省略的</span></span>
<span class="line"><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">plugin</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-function);">require</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;koishi-plugin-puppeteer&#39;</span><span style="color:var(--shiki-token-text);">).</span><span style="color:var(--shiki-token-parameter);">default</span><span style="color:var(--shiki-token-text);">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 这里则不能写上 .default</span></span>
<span class="line"><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">plugin</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-function);">require</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;koishi-plugin-forward&#39;</span><span style="color:var(--shiki-token-text);">))</span></span></code></pre></div><p>使用其他安装方式的用户不需要关心这些细节，因为模板项目已经帮你处理好了。</p><h2 id="添加交互逻辑" tabindex="-1">添加交互逻辑 <a class="header-anchor" href="#添加交互逻辑" aria-label="Permalink to &quot;添加交互逻辑&quot;">​</a></h2><p>除了已经封装好的插件外，我们还可以添加自己的交互逻辑：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">index.ts</span><pre><code><span class="line"><span style="color:#7F848E;font-style:italic;">// 如果收到“天王盖地虎”，就回应“宝塔镇河妖”</span></span>
<span class="line"><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">on</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;message&#39;</span><span style="color:var(--shiki-token-text);">, (</span><span style="color:#E06C75;font-style:italic;">session</span><span style="color:var(--shiki-token-text);">) </span><span style="color:var(--shiki-token-keyword);">=&gt;</span><span style="color:var(--shiki-token-text);"> {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-keyword);">if</span><span style="color:var(--shiki-token-text);"> (</span><span style="color:var(--shiki-token-constant);">session</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-parameter);">content</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-operator);">===</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">&#39;天王盖地虎&#39;</span><span style="color:var(--shiki-token-text);">) {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-constant);">session</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">send</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;宝塔镇河妖&#39;</span><span style="color:var(--shiki-token-text);">)</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  }</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">})</span></span></code></pre></div><p>然后重新运行你的项目：</p>`,9),T=o(`<p>不过这样写可能并不好，因为一旦功能变多，你的 <code>index.ts</code> 就会变得臃肿。可以将上面的逻辑写在一个单独的文件 <code>ping.ts</code> 里，并将它作为一个插件来加载：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ping.ts</span><pre><code><span class="line"><span style="color:var(--shiki-token-keyword);">import</span><span style="color:var(--shiki-token-text);"> { </span><span style="color:var(--shiki-token-parameter);">Context</span><span style="color:var(--shiki-token-text);"> } </span><span style="color:var(--shiki-token-keyword);">from</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">&#39;koishi&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">export</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">const</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">name</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-operator);">=</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">&#39;ping&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">export</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">function</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-function);">apply</span><span style="color:var(--shiki-token-text);">(</span><span style="color:#E06C75;font-style:italic;">ctx</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">Context</span><span style="color:var(--shiki-token-text);">) {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:#7F848E;font-style:italic;">// 如果收到“天王盖地虎”，就回应“宝塔镇河妖”</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">on</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;message&#39;</span><span style="color:var(--shiki-token-text);">, (</span><span style="color:#E06C75;font-style:italic;">session</span><span style="color:var(--shiki-token-text);">) </span><span style="color:var(--shiki-token-keyword);">=&gt;</span><span style="color:var(--shiki-token-text);"> {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-keyword);">if</span><span style="color:var(--shiki-token-text);"> (</span><span style="color:var(--shiki-token-constant);">session</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-parameter);">content</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-operator);">===</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">&#39;天王盖地虎&#39;</span><span style="color:var(--shiki-token-text);">) {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">      </span><span style="color:var(--shiki-token-constant);">session</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">send</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;宝塔镇河妖&#39;</span><span style="color:var(--shiki-token-text);">)</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    }</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  })</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">}</span></span></code></pre></div><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">index.ts</span><pre><code><span class="line"><span style="color:#7F848E;font-style:italic;">// 这里的 ./ping 是相对于 index.ts 的路径</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">import</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-number);">*</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">as</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-parameter);">ping</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">from</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">&#39;./ping&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">plugin</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-parameter);">ping</span><span style="color:var(--shiki-token-text);">)</span></span></code></pre></div><h2 id="次のステップ" tabindex="-1">次のステップ…… <a class="header-anchor" href="#次のステップ" aria-label="Permalink to &quot;次のステップ……&quot;">​</a></h2><p>おめでとうございます！Koishi の基本的な使い方をマスターしましたね。接下来让我们前往 <a href="./../../guide/">开发指南</a>，学习更多的 Koishi 知识。</p>`,5);function E(S,j,F,P,A,N){const l=i("tab-select"),e=i("chat-message"),p=i("chat-panel");return c(),k("div",null,[h,t(l,{class:"code"},{"tab-npm":a(()=>[v]),"tab-yarn":a(()=>[x]),_:1}),d,t(p,null,{default:a(()=>[t(e,{nickname:"Alice"},{default:a(()=>[n("echo 你好")]),_:1}),t(e,{nickname:"Koishi"},{default:a(()=>[n("你好")]),_:1})]),_:1}),u,g,t(l,{class:"code"},{"tab-npm":a(()=>[f]),"tab-yarn":a(()=>[m]),_:1}),_,t(l,{class:"code"},{"tab-npm":a(()=>[b]),"tab-yarn":a(()=>[w]),_:1}),C,t(p,null,{default:a(()=>[t(e,{nickname:"Alice"},{default:a(()=>[n("天王盖地虎")]),_:1}),t(e,{nickname:"Koishi"},{default:a(()=>[n("宝塔镇河妖")]),_:1})]),_:1}),T])}const q=r(y,[["render",E]]);export{V as __pageData,q as default};
