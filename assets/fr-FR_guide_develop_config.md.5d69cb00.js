import{_ as s,s as a,q as n,S as e}from"./chunks/framework.26d7e063.js";const v=JSON.parse('{"title":"配置文件","description":"","frontmatter":{},"headers":[],"relativePath":"fr-FR/guide/develop/config.md","filePath":"fr-FR/guide/develop/config.md"}'),t={name:"fr-FR/guide/develop/config.md"},o=e(`<h1 id="配置文件" tabindex="-1">配置文件 <a class="header-anchor" href="#配置文件" aria-label="Permalink to &quot;配置文件&quot;">​</a></h1><p>每个 Koishi 应用都有一个配置文件，它管理了应用及其插件的全部配置。在绝大多数情况下，我们都可以使用控制台修改这些配置，而无需手动编辑配置文件。但作为开发指南的一部分，我们还是需要了解一下配置文件的结构，并介绍一些你可能会用到的进阶用法。</p><p>默认情况下配置文件的格式为 <a href="https://en.wikipedia.org/wiki/YAML" target="_blank" rel="noreferrer">YAML</a>，它是一种易于阅读和编辑的文本格式，你可以用任何文本编辑器打开。</p><h2 id="应用目录" tabindex="-1">应用目录 <a class="header-anchor" href="#应用目录" aria-label="Permalink to &quot;应用目录&quot;">​</a></h2><p>配置文件所在的目录叫<strong>应用目录</strong>。根据你的安装方式，应用目录的位置可能不同：</p><ul><li>模板项目：你创建的项目目录，例如 <code>D:/dev/koishi-app</code></li><li>启动器 (zip)：解压目录下 <code>data/instances/default</code></li><li>启动器 (msi)：<code>C:/Users/你的用户名/AppData/Roaming/Koishi/Desktop/data/instances/default</code></li><li>启动器 (pkg)：<code>~/Library/Application Support/Koishi/Desktop/data/instances/default</code></li></ul><p>配置文件是应用目录下名为 <code>koishi.yml</code> 的文件。当你遇到问题时，开发者可能会要求你提供配置文件的内容。此时去上面的地方找就好了。</p><h2 id="理解配置文件" tabindex="-1">理解配置文件 <a class="header-anchor" href="#理解配置文件" aria-label="Permalink to &quot;理解配置文件&quot;">​</a></h2><p>尝试打开配置文件，你会发现它的内容大致如下：</p><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre><code><span class="line"><span style="color:#7F848E;font-style:italic;"># 全局设置</span></span>
<span class="line"><span style="color:var(--shiki-token-parameter);">host</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-string);">localhost</span></span>
<span class="line"><span style="color:var(--shiki-token-parameter);">port</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-number);">5140</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 插件列表</span></span>
<span class="line"><span style="color:var(--shiki-token-parameter);">plugins</span><span style="color:var(--shiki-token-text);">:</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:#7F848E;font-style:italic;"># group 表示这是一个插件组</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">group:console</span><span style="color:var(--shiki-token-text);">:</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:#7F848E;font-style:italic;"># 波浪线前缀表示一个不启用的插件</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-parameter);">~auth</span><span style="color:var(--shiki-token-text);">:</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-parameter);">console</span><span style="color:var(--shiki-token-text);">:</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-parameter);">logger</span><span style="color:var(--shiki-token-text);">:</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-parameter);">insight</span><span style="color:var(--shiki-token-text);">:</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-parameter);">market</span><span style="color:var(--shiki-token-text);">:</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">      </span><span style="color:#7F848E;font-style:italic;"># 以缩进的方式显示插件的配置项</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">      </span><span style="color:var(--shiki-token-parameter);">registry</span><span style="color:var(--shiki-token-text);">:</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">        </span><span style="color:var(--shiki-token-parameter);">endpoint</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-string);">https://registry.npmmirror.com</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:#7F848E;font-style:italic;"># 这里是一些零散的插件</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">github</span><span style="color:var(--shiki-token-text);">:</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">dialogue</span><span style="color:var(--shiki-token-text);">:</span></span></code></pre></div><p>具体而言，配置文件中包含的内容如下。</p><h3 id="全局设置" tabindex="-1">全局设置 <a class="header-anchor" href="#全局设置" aria-label="Permalink to &quot;全局设置&quot;">​</a></h3><p>全局设置对应于配置文件中 <code>plugins:</code> 一行以上的部分。这里会包含一些最基础的配置项，例如网络设置、指令前缀、默认权限等。修改这里的配置项，会影响整个 Koishi 应用的行为而非某个插件。你可以在 <a href="./../../api/core/app.html">这个页面</a> 了解全部的全局设置。</p><h3 id="插件配置" tabindex="-1">插件配置 <a class="header-anchor" href="#插件配置" aria-label="Permalink to &quot;插件配置&quot;">​</a></h3><p><code>plugins</code> 是一个 YAML 对象，它的每一个键对应于插件的名称，而值则对应于插件的配置。当没有进行配置时，值可以省略 (或者写成 <code>{}</code>)。当存在配置时，值需要在插件的基础上缩进并写在接下来的几行中。例如：</p><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre><code><span class="line"><span style="color:var(--shiki-token-parameter);">plugins</span><span style="color:var(--shiki-token-text);">:</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">dialogue</span><span style="color:var(--shiki-token-text);">:</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:#7F848E;font-style:italic;"># 这里是 koishi-plugin-dialogue 的配置</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-parameter);">context</span><span style="color:var(--shiki-token-text);">:</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">      </span><span style="color:var(--shiki-token-parameter);">enable</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-number);">true</span></span></code></pre></div><h3 id="插件名称" tabindex="-1">插件名称 <a class="header-anchor" href="#插件名称" aria-label="Permalink to &quot;插件名称&quot;">​</a></h3><p>插件名称通常对应于插件发布时的包名。例如：</p><ul><li><code>market</code> 对应于官方插件 <code>@koishijs/plugin-market</code></li><li><code>dialogue</code> 对应于社区插件 <code>koishi-plugin-dialogue</code></li></ul><p>除了插件的包名外，插件名称还可以拥有一个可选的前缀 (<code>~</code>) 和后缀 (<code>:xxx</code>)。插件名称前的波浪线 (<code>~</code>) 表示该插件不会被启用。插件名称后的冒号后是插件的别名，当某个插件需要存在多组配置时这会非常有用。</p><h3 id="插件组" tabindex="-1">插件组 <a class="header-anchor" href="#插件组" aria-label="Permalink to &quot;插件组&quot;">​</a></h3><p>你可以将插件组理解为一个名为 <code>group</code> 的特殊插件。它的语法与 <code>plugins</code> 一致，都是一个包含了插件名称和插件配置的 YAML 对象。使用插件组不仅能更好地帮助你整理插件，还能批量控制其中插件的行为。插件组也支持嵌套，例如：</p><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre><code><span class="line"><span style="color:var(--shiki-token-parameter);">plugins</span><span style="color:var(--shiki-token-text);">:</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">group:official</span><span style="color:var(--shiki-token-text);">:</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:#7F848E;font-style:italic;"># 一层嵌套插件组下的 help 插件</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-parameter);">help</span><span style="color:var(--shiki-token-text);">:</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-parameter);">group:console</span><span style="color:var(--shiki-token-text);">:</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">      </span><span style="color:#7F848E;font-style:italic;"># 两层嵌套插件组下的 market 插件</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">      </span><span style="color:var(--shiki-token-parameter);">market</span><span style="color:var(--shiki-token-text);">:</span></span></code></pre></div><h3 id="元信息" tabindex="-1">元信息 <a class="header-anchor" href="#元信息" aria-label="Permalink to &quot;元信息&quot;">​</a></h3><p>一些以 <code>$</code> 开头的属性会记录插件和插件组的元信息。例如：</p><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre><code><span class="line"><span style="color:var(--shiki-token-parameter);">plugins</span><span style="color:var(--shiki-token-text);">:</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">group:console</span><span style="color:var(--shiki-token-text);">:</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:#7F848E;font-style:italic;"># 在控制台中折叠该插件组</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-parameter);">$collapsed</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-number);">true</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-parameter);">status</span><span style="color:var(--shiki-token-text);">:</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">      </span><span style="color:#7F848E;font-style:italic;"># 仅对于 onebot 平台启用该插件</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">      </span><span style="color:var(--shiki-token-parameter);">$filter</span><span style="color:var(--shiki-token-text);">:</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">        </span><span style="color:var(--shiki-token-parameter);">$eq</span><span style="color:var(--shiki-token-text);">:</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">          - </span><span style="color:var(--shiki-token-parameter);">$</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-string);">platform</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">          - </span><span style="color:var(--shiki-token-string);">onebot</span></span></code></pre></div><h2 id="修改配置文件" tabindex="-1">修改配置文件 <a class="header-anchor" href="#修改配置文件" aria-label="Permalink to &quot;修改配置文件&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>如果你不了解 YAML 的语法，请不要随意修改配置文件，否则将可能导致 Koishi 应用无法运行。你可以在 <a href="https://www.runoob.com/w3cnote/yaml-intro.html" target="_blank" rel="noreferrer">这篇教程</a> 中学习 YAML 的语法。</p></div><p>当你启动 Koishi 应用时，Koishi 会读取上述配置文件并加载所需的插件。反过来，如果你想调整 Koishi 及其插件的行为，你就需要修改这个配置文件。</p><p>如果你使用的是模板项目，你需要手动修改它并重新启动 Koishi 应用；如果你使用的是启动器，则你可以直接在「插件配置」中进行调整，Koishi 会自动将这些改动写入配置文件。事实上你会发现，配置文件的结构与「插件配置」页面基本是一致的。</p><p>绝大多数的功能都可以通过「插件配置」页面来完成，但目前尚有一些功能没有做好相应的交互界面，这时你仍然需要手动修改配置文件。具体的步骤与模板项目类似：</p><ol><li>关闭当前 Koishi 应用</li><li>在 <a href="#应用目录">应用目录</a> 下找到配置文件并进行编辑</li><li>保存配置文件后再次启动 Koishi 应用</li></ol><h2 id="使用环境变量" tabindex="-1">使用环境变量 <a class="header-anchor" href="#使用环境变量" aria-label="Permalink to &quot;使用环境变量&quot;">​</a></h2><p>你可以通过插值语法在配置文件中使用环境变量。例如：</p><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">koishi.yml</span><pre><code><span class="line"><span style="color:var(--shiki-token-parameter);">plugins</span><span style="color:var(--shiki-token-text);">:</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">adapter-discord</span><span style="color:var(--shiki-token-text);">:</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-parameter);">token</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-string);">\${{ env.DISCORD_TOKEN }}</span></span></code></pre></div><p>当项目启动时，会将环境变量中的值替换进去。</p><p>除了系统提供的环境变量外，Koishi 还原生支持 <a href="https://github.com/motdotla/dotenv" target="_blank" rel="noreferrer">dotenv</a>。你可以在当前目录创建一个 <code>.env</code> 文件，并在里面填写你的环境变量。这个文件已经被包含在 <code>.gitignore</code> 中，你可以在其中填写隐私信息 (例如账号密码) 而不用担心被上传到远端。例如在上面的例子中你就可以这样写：</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">.env</span><pre><code><span class="line"><span style="color:var(--shiki-token-function);">DISCORD_TOKEN</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">=</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">xxx</span></span></code></pre></div><p>环境变量的另一个作用是条件判断。例如官方提供的模板项目里：</p><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">koishi.yml</span><pre><code><span class="line"><span style="color:var(--shiki-token-parameter);">plugins</span><span style="color:var(--shiki-token-text);">:</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">desktop</span><span style="color:var(--shiki-token-text);">:</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-parameter);">$if</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-string);">env.KOISHI_AGENT?.includes(&#39;Desktop&#39;)</span></span></code></pre></div><p>这样一来，只有当你使用桌面客户端启动 Koishi 时，这个插件才会被启用。</p>`,41),l=[o];function p(i,r,c,k,h,y){return n(),a("div",null,l)}const u=s(t,[["render",p]]);export{v as __pageData,u as default};
