import{_ as l,p as i,s as r,D as o,I as t,v as s,S as e,L as n,q as p}from"./chunks/framework.3f494197.js";const V=JSON.parse('{"title":"发布插件","description":"","frontmatter":{},"headers":[],"relativePath":"de-DE/guide/develop/publish.md","filePath":"de-DE/guide/develop/publish.md"}'),c={name:"de-DE/guide/develop/publish.md"},k=e(`<h1 id="发布插件" tabindex="-1">发布插件 <a class="header-anchor" href="#发布插件" aria-label="Permalink to &quot;发布插件&quot;">​</a></h1><p>为了让别人更方便地使用你编写的插件，你需要将其作为一个 npm 包进行发布。只需满足一定的规范，你的插件就能显示在 <a href="./../../market/">插件市场</a> 中，其他人就可以通过控制台来安装它。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>本节中介绍的命令行都需要在 <a href="./config.html#应用目录">应用目录</a> 下运行。</p></div><h2 id="准备工作" tabindex="-1">准备工作 <a class="header-anchor" href="#准备工作" aria-label="Permalink to &quot;准备工作&quot;">​</a></h2><p>首先让我们关注工作区目录中的 <code>package.json</code> 文件。这个文件非常重要，它包含了要发布插件的一切元信息。</p><div class="language-diff"><button title="Copy Code" class="copy"></button><span class="lang">diff</span><pre><code><span class="line"><span style="color:var(--shiki-token-text);">root</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">├── plugins</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">│   └── example</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">│       ├── src</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">│       │   └── index.ts</span></span>
<span class="line highlighted"><span style="color:var(--shiki-token-text);">│       └── package.json        # 你应该修改这里</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">├── koishi.yml</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">└── package.json                # 而不是这里</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>请注意 <code>package.json</code> 文件不是唯一的，它在应用目录和每个插件目录都会存在。请确保你修改了正确的文件。</p></div><p>打开上述文件，你会看到它大概长这样：</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">package.json</span><pre><code><span class="line"><span style="color:var(--shiki-token-text);">{</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">&quot;name&quot;</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-string);">&quot;koishi-plugin-example&quot;</span><span style="color:var(--shiki-token-text);">,</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">&quot;version&quot;</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-string);">&quot;1.0.0&quot;</span><span style="color:var(--shiki-token-text);">,</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:#7F848E;font-style:italic;">// ……</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">}</span></span></code></pre></div><p>其中最重要的属性有两个：<code>name</code> 是要发布的包名，<code>version</code> 是包的版本号。这里的包名相比实际在插件市场中看到的插件名多了一个 <code>koishi-plugin-</code> 的前缀，这样既方便了用户安装和配置，又防止了污染命名空间。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>请注意：包名和版本号都具有唯一性。包名不能与其他已经发布的包相同，而同一个包的同一个版本号也只能发布一次。如果出现了包名冲突或版本号冲突，则会在之后的发布流程中出现错误提示。你可以自行根据错误提示更换包名或更新插件版本。</p></div><h2 id="补充更多信息" tabindex="-1">补充更多信息 <a class="header-anchor" href="#补充更多信息" aria-label="Permalink to &quot;补充更多信息&quot;">​</a></h2><p>除了包名和版本号以外，<code>package.json</code> 还包括了插件的依赖、描述、贡献者、许可证、关键词等更多信息。你并不需要一上来就把所有信息都填写完整，因为你可以随后再进行修改。但请别忘了，这些内容也是插件的一部分，修改完成后别忘了 <a href="#更新插件版本">更新版本</a> 并 <a href="#发布插件">再次发布</a>。</p><h3 id="准入条件" tabindex="-1">准入条件 <a class="header-anchor" href="#准入条件" aria-label="Permalink to &quot;准入条件&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>使用模板项目创建的插件一定是符合要求的，因此你可以跳过这一节。</p></div><p>要想显示在插件市场中，插件的 <code>package.json</code> 需要满足以下基本要求：</p><ul><li><a href="https://docs.npmjs.com/cli/v8/configuring-npm/package-json#name" target="_blank" rel="noreferrer"><code>name</code></a> 必须符合以下格式之一： <ul><li>koishi-plugin-*</li><li>@bar/koishi-plugin-*</li><li>@koishijs/plugin-* (官方插件)</li><li>其中 * 是由数字、小写字母和连字符组成的字符串</li></ul></li><li><a href="https://docs.npmjs.com/cli/v8/configuring-npm/package-json#name" target="_blank" rel="noreferrer"><code>name</code></a> 不能与已发布的插件重复或相似</li><li><a href="https://docs.npmjs.com/cli/v8/configuring-npm/package-json#version" target="_blank" rel="noreferrer"><code>version</code></a> 应当符合 <a href="https://semver.org/lang/zh-CN/" target="_blank" rel="noreferrer">语义化版本</a> (通常从 <code>1.0.0</code> 开始)</li><li><a href="https://docs.npmjs.com/cli/v8/configuring-npm/package-json#peerdependencies" target="_blank" rel="noreferrer"><code>peerDependencies</code></a> 必须包含 <code>koishi</code></li><li>不能声明 <a href="https://docs.npmjs.com/cli/v8/configuring-npm/package-json#private" target="_blank" rel="noreferrer"><code>private</code></a> 为 <code>true</code> (否则你的插件无法发布)</li><li>最新版本不能被 <a href="https://docs.npmjs.com/deprecating-and-undeprecating-packages-or-package-versions" target="_blank" rel="noreferrer">弃用</a> (一种常见的情况是：你已经发布了某个插件，又希望更换一个名字重新发布，此时你可以通过弃用的方式让旧的名字不显示在插件市场中)</li></ul><p>一个符合上述标准的示例：</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">package.json</span><pre><code><span class="line"><span style="color:var(--shiki-token-text);">{</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">&quot;name&quot;</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-string);">&quot;koishi-plugin-example&quot;</span><span style="color:var(--shiki-token-text);">,</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">&quot;version&quot;</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-string);">&quot;1.0.0&quot;</span><span style="color:var(--shiki-token-text);">,</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">&quot;peerDependencies&quot;</span><span style="color:var(--shiki-token-text);">: {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-parameter);">&quot;koishi&quot;</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-string);">&quot;^4.3.2&quot;</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  }</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">}</span></span></code></pre></div><h3 id="添加相关信息" tabindex="-1">添加相关信息 <a class="header-anchor" href="#添加相关信息" aria-label="Permalink to &quot;添加相关信息&quot;">​</a></h3><p>除去上面的基本要求外，<code>package.json</code> 中还有一些字段能帮助显示插件的相关信息。</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">package.json</span><pre><code><span class="line"><span style="color:var(--shiki-token-text);">{</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">&quot;name&quot;</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-string);">&quot;koishi-plugin-example&quot;</span><span style="color:var(--shiki-token-text);">,</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">&quot;version&quot;</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-string);">&quot;1.0.0&quot;</span><span style="color:var(--shiki-token-text);">,</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">&quot;contributors&quot;</span><span style="color:var(--shiki-token-text);">: [                         </span><span style="color:#7F848E;font-style:italic;">// 贡献者</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-string);">&quot;Alice &lt;alice@gmail.com&gt;&quot;</span><span style="color:var(--shiki-token-text);">,</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-string);">&quot;Bob &lt;bob@gmail.com&gt;&quot;</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  ],</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">&quot;license&quot;</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-string);">&quot;MIT&quot;</span><span style="color:var(--shiki-token-text);">,                         </span><span style="color:#7F848E;font-style:italic;">// 许可证</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">&quot;homepage&quot;</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-string);">&quot;https://example.com&quot;</span><span style="color:var(--shiki-token-text);">,        </span><span style="color:#7F848E;font-style:italic;">// 主页</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">&quot;repository&quot;</span><span style="color:var(--shiki-token-text);">: {                           </span><span style="color:#7F848E;font-style:italic;">// 源码仓库</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-parameter);">&quot;type&quot;</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-string);">&quot;git&quot;</span><span style="color:var(--shiki-token-text);">,</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-parameter);">&quot;url&quot;</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-string);">&quot;git+https://github.com/alice/koishi-plugin-example.git&quot;</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  },</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">&quot;keywords&quot;</span><span style="color:var(--shiki-token-text);">: [</span><span style="color:var(--shiki-token-string);">&quot;example&quot;</span><span style="color:var(--shiki-token-text);">],                  </span><span style="color:#7F848E;font-style:italic;">// 关键词</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">&quot;peerDependencies&quot;</span><span style="color:var(--shiki-token-text);">: {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-parameter);">&quot;koishi&quot;</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-string);">&quot;^4.3.2&quot;</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  }</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">}</span></span></code></pre></div><ul><li><strong>contributors:</strong> 插件维护者，应该是一个数组，其中的元素通常使用 <code>名字 &lt;邮箱&gt;</code> 的格式</li><li><strong>license:</strong> 插件许可证，你可以在 <a href="https://choosealicense.com/licenses/" target="_blank" rel="noreferrer">这里</a> 了解各种许可证的详细信息</li><li><strong>homepage:</strong> 插件主页，可以是一个网址 (比如你的 GitHub 项目地址)</li><li><strong>repository:</strong> 插件源码仓库，应该是一个对象，其中 <code>type</code> 字段指定仓库类型，<code>url</code> 字段指定仓库地址</li><li><strong>keywords:</strong> 插件关键词，应该是一个字符串数组，会用于插件市场中的搜索功能</li></ul><h3 id="koishi-字段" tabindex="-1">koishi 字段 <a class="header-anchor" href="#koishi-字段" aria-label="Permalink to &quot;koishi 字段&quot;">​</a></h3><p>除此以外，我们还提供了一个额外的 <code>koishi</code> 字段，用于指定与 Koishi 相关的信息。</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">package.json</span><pre><code><span class="line"><span style="color:var(--shiki-token-text);">{</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">&quot;name&quot;</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-string);">&quot;koishi-plugin-dialogue&quot;</span><span style="color:var(--shiki-token-text);">,</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">&quot;version&quot;</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-string);">&quot;1.0.0&quot;</span><span style="color:var(--shiki-token-text);">,</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">&quot;peerDependencies&quot;</span><span style="color:var(--shiki-token-text);">: {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-parameter);">&quot;koishi&quot;</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-string);">&quot;^4.3.2&quot;</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  },</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">&quot;koishi&quot;</span><span style="color:var(--shiki-token-text);">: {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-parameter);">&quot;description&quot;</span><span style="color:var(--shiki-token-text);">: {                        </span><span style="color:#7F848E;font-style:italic;">// 不同语言的插件描述</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">      </span><span style="color:var(--shiki-token-parameter);">&quot;en&quot;</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-string);">&quot;English Description&quot;</span><span style="color:var(--shiki-token-text);">,</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">      </span><span style="color:var(--shiki-token-parameter);">&quot;zh&quot;</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-string);">&quot;中文描述&quot;</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    },</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-parameter);">&quot;service&quot;</span><span style="color:var(--shiki-token-text);">: {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">      </span><span style="color:var(--shiki-token-parameter);">&quot;required&quot;</span><span style="color:var(--shiki-token-text);">: [</span><span style="color:var(--shiki-token-string);">&quot;database&quot;</span><span style="color:var(--shiki-token-text);">],             </span><span style="color:#7F848E;font-style:italic;">// 必需的服务</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">      </span><span style="color:var(--shiki-token-parameter);">&quot;optional&quot;</span><span style="color:var(--shiki-token-text);">: [</span><span style="color:var(--shiki-token-string);">&quot;assets&quot;</span><span style="color:var(--shiki-token-text);">],               </span><span style="color:#7F848E;font-style:italic;">// 可选的服务</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">      </span><span style="color:var(--shiki-token-parameter);">&quot;implements&quot;</span><span style="color:var(--shiki-token-text);">: [</span><span style="color:var(--shiki-token-string);">&quot;dialogue&quot;</span><span style="color:var(--shiki-token-text);">],           </span><span style="color:#7F848E;font-style:italic;">// 实现的服务</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    },</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-parameter);">&quot;locales&quot;</span><span style="color:var(--shiki-token-text);">: [</span><span style="color:var(--shiki-token-string);">&quot;en&quot;</span><span style="color:var(--shiki-token-text);">, </span><span style="color:var(--shiki-token-string);">&quot;zh&quot;</span><span style="color:var(--shiki-token-text);">],                </span><span style="color:#7F848E;font-style:italic;">// 支持的语言</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  }</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">}</span></span></code></pre></div><ul><li><strong>description:</strong> 插件描述，应该是一个对象，其中的键代表语言名，值是对应语言下的描述</li><li><strong>service:</strong> 插件的服务相关信息，具体包含下列属性： <ul><li><strong>required:</strong> 必需的服务，应该是一个服务名构成的数组</li><li><strong>optional:</strong> 可选的服务，应该是一个服务名构成的数组</li><li><strong>implements:</strong> 实现的服务，应该是一个服务名构成的数组</li></ul></li><li><strong>locales:</strong> 插件支持的语言，应该是一个语言名构成的数组</li><li><strong>hidden:</strong> 配置为 <code>true</code> 可以让插件市场中不显示该插件 (通常情况下你不需要这么做)</li></ul><h2 id="发布插件-1" tabindex="-1">发布插件 <a class="header-anchor" href="#发布插件-1" aria-label="Permalink to &quot;发布插件&quot;">​</a></h2><p>编辑完上面的清单文件并 <a href="./workspace.html#构建源代码">构建源代码</a> 后，你就可以公开发布你的插件了。</p>`,29),h=s("div",{class:"language-npm"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"npm"),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-token-function)"}},"npm"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"run"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"pub"),s("span",{style:{color:"var(--shiki-token-text)"}}," [...name]")])])])],-1),y=s("div",{class:"language-yarn"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"yarn"),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-token-function)"}},"yarn"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"pub"),s("span",{style:{color:"var(--shiki-token-text)"}}," [...name]")])])])],-1),v=s("ul",null,[s("li",null,[s("strong",null,"name:"),n(" 要发布的插件列表，缺省时表示全部 (此处 "),s("code",null,"name"),n(" 不包含 "),s("code",null,"koishi-plugin-"),n(" 前缀，而是你的工作区目录名)")])],-1),u=s("p",null,"这将发布所有版本号发生变动的插件。",-1),d=s("div",{class:"tip custom-block"},[s("p",{class:"custom-block-title"},"TIP"),s("p",null,"从插件成功发布到进插件市场需要一定的时间 (通常在 15 分钟内)，请耐心等待。")],-1),g={class:"tip custom-block"},x=e('<p class="custom-block-title">TIP</p><p>如果你配置了国内镜像，你可能会遇到以下的错误提示：</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:var(--shiki-token-text);">No token found and can&#39;t prompt for login when running with --non-interactive.</span></span></code></pre></div><p>此时你需要将镜像源重置，并重新登录 npm 账号：</p>',4),m=s("div",{class:"language-npm"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"npm"),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-token-function)"}},"npm"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"config"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"delete"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"registry")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-token-function)"}},"npm"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"login")])])])],-1),q=s("div",{class:"language-yarn"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"yarn"),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-token-function)"}},"yarn"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"config"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"delete"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"registry")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-token-function)"}},"yarn"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"login")])])])],-1),_=s("p",null,"发布成功后，你可以将镜像重新设置为国内镜像，以保证后续的下载速度。 : :::",-1),b=s("h2",{id:"更新插件版本",tabindex:"-1"},[n("更新插件版本 "),s("a",{class:"header-anchor",href:"#更新插件版本","aria-label":'Permalink to "更新插件版本"'},"​")],-1),f=s("p",null,[n("初始创建的插件版本号为 "),s("code",null,"1.0.0"),n("。当你修改过插件后，你需要更新版本号才能重新发布。在应用目录运行下面的命令以更新版本号：")],-1),C=s("div",{class:"language-npm"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"npm"),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-token-function)"}},"npm"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"run"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"bump"),s("span",{style:{color:"var(--shiki-token-text)"}}," [...name] ["),s("span",{style:{color:"var(--shiki-token-number)"}},"-1"),s("span",{style:{color:"var(--shiki-token-text)"}},"|-2|-3|-p|-v "),s("span",{style:{color:"var(--shiki-token-operator)"}},"<"),s("span",{style:{color:"var(--shiki-token-text)"}},"ver"),s("span",{style:{color:"var(--shiki-token-operator)"}},">"),s("span",{style:{color:"var(--shiki-token-text)"}},"] [-r]")])])])],-1),j=s("div",{class:"language-yarn"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"yarn"),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-token-function)"}},"yarn"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"bump"),s("span",{style:{color:"var(--shiki-token-text)"}}," [...name] ["),s("span",{style:{color:"var(--shiki-token-number)"}},"-1"),s("span",{style:{color:"var(--shiki-token-text)"}},"|-2|-3|-p|-v "),s("span",{style:{color:"var(--shiki-token-operator)"}},"<"),s("span",{style:{color:"var(--shiki-token-text)"}},"ver"),s("span",{style:{color:"var(--shiki-token-operator)"}},">"),s("span",{style:{color:"var(--shiki-token-text)"}},"] [-r]")])])])],-1),T=e("<ul><li><strong>name:</strong> 要更新的插件列表，不能为空</li><li><strong>-1, --major:</strong> 跳到下一个大版本，例如 <code>3.1.4</code> -&gt; <code>4.0.0</code></li><li><strong>-2, --minor:</strong> 跳到下一个中版本，例如 <code>3.1.4</code> -&gt; <code>3.2.0</code></li><li><strong>-3, --patch:</strong> 跳到下一个小版本，例如 <code>3.1.4</code> -&gt; <code>3.1.5</code></li><li><strong>-p, --prerelease:</strong> 跳到下一个预览版本，具体行为如下 <ul><li>如果当前版本是 <code>alpha.x</code>，则跳到 <code>beta.0</code></li><li>如果当前版本是 <code>beta.x</code>，则跳到 <code>rc.0</code></li><li>如果当前版本是 <code>rc.x</code>，则移除 prerelease 部分</li><li>其他情况下，跳到下一个大版本的 <code>alpha.0</code></li></ul></li><li><strong>-v, --version:</strong> 设置具体的版本号</li><li>缺省情况：按照当前版本的最后一位递增</li></ul><p>当进行此操作时，其他相关插件的依赖版本也会同步更新，确保所有工作区内依赖的插件版本一致。进一步，如果你希望更新了依赖版本的插件也同时更新自身的版本，那么可以附加 <code>-r, --recursive</code> 选项。</p>",2);function P(E,I,D,S,F,A){const a=i("tab-select");return p(),r("div",null,[k,o(a,{class:"code"},{"tab-npm":t(()=>[h]),"tab-yarn":t(()=>[y]),_:1}),v,u,d,s("div",g,[x,o(a,{class:"code"},{"tab-npm":t(()=>[m]),"tab-yarn":t(()=>[q]),_:1}),_,b,f,o(a,{class:"code"},{"tab-npm":t(()=>[C]),"tab-yarn":t(()=>[j]),_:1}),T])])}const w=l(c,[["render",P]]);export{V as __pageData,w as default};
