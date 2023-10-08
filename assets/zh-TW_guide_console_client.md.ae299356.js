import{_ as p,p as l,s as r,v as n,L as s,D as e,I as o,S as a,q as i}from"./chunks/framework.26d7e063.js";const q=JSON.parse('{"title":"客户端开发","description":"","frontmatter":{},"headers":[],"relativePath":"zh-TW/guide/console/client.md","filePath":"zh-TW/guide/console/client.md"}'),k={name:"zh-TW/guide/console/client.md"},c=a(`<h1 id="客户端开发" tabindex="-1">客户端开发 <a class="header-anchor" href="#客户端开发" aria-label="Permalink to &quot;客户端开发&quot;">​</a></h1><h2 id="布局组件" tabindex="-1">布局组件 <a class="header-anchor" href="#布局组件" aria-label="Permalink to &quot;布局组件&quot;">​</a></h2><p>为了方便控制台开发，Koishi 也提供了一些组件。其中的一部分你已经在前面的两节中见过了。</p><p><a href="./../../api/console/component.html#k-layout"><code>&lt;k-layout&gt;</code></a> 创建了一个新的页面布局。你扩展任何页面都需要用到它。这个组件有一些插槽：</p><ul><li><code>header</code>：标题栏的内容</li><li><code>left</code>：左侧栏的内容</li><li><code>default</code>：页面主体的内容</li></ul><p>除了添加新页面外，窗口底部的状态栏也可以扩展：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:var(--shiki-token-keyword);">import</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-parameter);">Status</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">from</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">&#39;./status.vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">slot</span><span style="color:var(--shiki-token-text);">({</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">type</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-string);">&#39;status-left&#39;</span><span style="color:var(--shiki-token-text);">,</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">component</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-parameter);">Status</span><span style="color:var(--shiki-token-text);">,</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">})</span></span></code></pre></div><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre><code><span class="line"><span style="color:var(--shiki-token-text);">&lt;</span><span style="color:var(--shiki-token-parameter);">template</span><span style="color:var(--shiki-token-text);">&gt;</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  &lt;</span><span style="color:var(--shiki-token-parameter);">k-status</span><span style="color:var(--shiki-token-text);">&gt;</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    这段文字将会显示在状态栏中。</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  &lt;/</span><span style="color:var(--shiki-token-parameter);">k-status</span><span style="color:var(--shiki-token-text);">&gt;</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">&lt;/</span><span style="color:var(--shiki-token-parameter);">template</span><span style="color:var(--shiki-token-text);">&gt;</span></span></code></pre></div><p>在上面的例子中，<a href="./../../api/console/component.html#k-status"><code>&lt;k-status&gt;</code></a> 创建了一个状态栏元素。</p><p>你甚至还可以直接添加页面元素，例如 <a href="https://github.com/koishijs/koishi-plugin-live2d" target="_blank" rel="noreferrer">live2d</a> 插件就为控制台添加了一个 live2d 的看板娘：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:var(--shiki-token-keyword);">import</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-parameter);">Live2D</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">from</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">&#39;./live2d.vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">slot</span><span style="color:var(--shiki-token-text);">({</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">type</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-string);">&#39;global&#39;</span><span style="color:var(--shiki-token-text);">,</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">component</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-parameter);">Live2D</span><span style="color:var(--shiki-token-text);">,</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">})</span></span></code></pre></div><h2 id="使用插槽" tabindex="-1">使用插槽 <a class="header-anchor" href="#使用插槽" aria-label="Permalink to &quot;使用插槽&quot;">​</a></h2><p>你应该已经注意到了，在上面的两个例子中，我们都使用了 <a href="./../../api/console/context.html#ctx-slot"><code>ctx.slot()</code></a> 来扩展某些元素。这个方法的作用是向控制台的某个区域中注入 Vue 组件。而上面的 <code>status-left</code> 和 <code>global</code> 则是两个插槽的名称，分别对应了状态栏左侧区域和整个页面区域。</p><p>这种注入方式不仅可以作用于控制台本身，也可以作用于其他控制台扩展。例如，当你开发了一个控制台页面，并希望其他插件可以在你的页面中注入一些内容时，你可以这样做：</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre><code><span class="line"><span style="color:var(--shiki-token-text);">&lt;</span><span style="color:var(--shiki-token-parameter);">template</span><span style="color:var(--shiki-token-text);">&gt;</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  &lt;</span><span style="color:var(--shiki-token-parameter);">k-layout</span><span style="color:var(--shiki-token-text);">&gt;</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    &lt;</span><span style="color:var(--shiki-token-parameter);">p</span><span style="color:var(--shiki-token-text);">&gt;这里是一些文字&lt;/</span><span style="color:var(--shiki-token-parameter);">p</span><span style="color:var(--shiki-token-text);">&gt;</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    &lt;</span><span style="color:var(--shiki-token-parameter);">k-slot</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-number);">name</span><span style="color:var(--shiki-token-text);">=</span><span style="color:var(--shiki-token-string);">&quot;custom&quot;</span><span style="color:var(--shiki-token-text);"> /&gt;</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    &lt;</span><span style="color:var(--shiki-token-parameter);">p</span><span style="color:var(--shiki-token-text);">&gt;这里是一些文字&lt;/</span><span style="color:var(--shiki-token-parameter);">p</span><span style="color:var(--shiki-token-text);">&gt;</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  &lt;/</span><span style="color:var(--shiki-token-parameter);">k-layout</span><span style="color:var(--shiki-token-text);">&gt;</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">&lt;/</span><span style="color:var(--shiki-token-parameter);">template</span><span style="color:var(--shiki-token-text);">&gt;</span></span></code></pre></div><p>这样一来，其他控制台插件就可以通过 <code>ctx.slot()</code> 来向你的页面中注入内容了。</p><p>一个插槽可以同时被注入多次。你可以为每次插槽注入指定优先级和显示条件：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">slot</span><span style="color:var(--shiki-token-text);">({</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">type</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-string);">&#39;custom&#39;</span><span style="color:var(--shiki-token-text);">,</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">component</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-parameter);">Foo</span><span style="color:var(--shiki-token-text);">,</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">order</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-number);">100</span><span style="color:var(--shiki-token-text);">,</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">slot</span><span style="color:var(--shiki-token-text);">({</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">type</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-string);">&#39;custom&#39;</span><span style="color:var(--shiki-token-text);">,</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">component</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-parameter);">Bar</span><span style="color:var(--shiki-token-text);">,</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">order</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-number);">200</span><span style="color:var(--shiki-token-text);">,</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-function);">disabled</span><span style="color:var(--shiki-token-text);">: () </span><span style="color:var(--shiki-token-keyword);">=&gt;</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-operator);">!</span><span style="color:var(--shiki-token-constant);">store</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-parameter);">bar</span><span style="color:var(--shiki-token-text);">,</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">})</span></span></code></pre></div><p><code>order</code> 更高的插槽会被优先显示；<code>disabled</code> 函数返回 <code>true</code> 时，插槽不会被显示。因此在上面的例子中，<code>Bar</code> 组件总是显示在 <code>Foo</code> 组件的前面，但只有当 <code>store.bar</code> 存在时才会显示。</p>`,19),y={id:"用户设置-实验性",tabindex:"-1"},h=n("a",{class:"header-anchor",href:"#用户设置-实验性","aria-label":'Permalink to "用户设置 <badge type="warning">实验性</badge>"'},"​",-1),v=a(`<p>到此为止，我们所了解的插件配置都是 <a href="./../plugin/schema.html">直接在插件中声明</a>、<a href="./../develop/config.html">存储于配置文件中</a> 的。这在绝大多数情况下都是合理的——机器人管理员决定了插件的具体行为，而这些行为也不应该由用户决定。但实际上还有另一种情况：插件的某些行为可以由用户自由决定。例如机器人所使用的语言、控制台的主题等等。我们将这些配置统称为「用户设置」。</p><p>在控制台中，插件配置和用户配置是分离的。插件配置只有机器人的管理员有权查看和修改，而每个用户都可以查看和修改自己的用户配置。插件开发者也应当妥善区分这两种配置，以提高插件的可定制性。使用 <a href="./../../api/console/context.html#ctx-settings"><code>ctx.settings()</code></a> 可以在用户设置界面中添加配置表单：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">settings</span><span style="color:var(--shiki-token-text);">({</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">id</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-string);">&#39;appearance&#39;</span><span style="color:var(--shiki-token-text);">,</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">schema</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">Schema</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">object</span><span style="color:var(--shiki-token-text);">({</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-parameter);">wallpaper</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">Schema</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">object</span><span style="color:var(--shiki-token-text);">({</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">      </span><span style="color:var(--shiki-token-parameter);">image</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">Schema</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">string</span><span style="color:var(--shiki-token-text);">().</span><span style="color:var(--shiki-token-function);">description</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;要使用的背景图片。&#39;</span><span style="color:var(--shiki-token-text);">),</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">      </span><span style="color:var(--shiki-token-parameter);">opacity</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">Schema</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">number</span><span style="color:var(--shiki-token-text);">().</span><span style="color:var(--shiki-token-function);">description</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;前景的透明度。&#39;</span><span style="color:var(--shiki-token-text);">),</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    }).</span><span style="color:var(--shiki-token-function);">description</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;壁纸设置&#39;</span><span style="color:var(--shiki-token-text);">),</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  }),</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">})</span></span></code></pre></div><p>使用 <code>useConfig()</code> 可以在控制台中读取用户设置：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:var(--shiki-token-keyword);">const</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">config</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-operator);">=</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-function);">useConfig</span><span style="color:var(--shiki-token-text);">()</span></span>
<span class="line"><span style="color:var(--shiki-token-constant);">config</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-constant);">value</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-constant);">wallpaper</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-parameter);">image</span></span></code></pre></div>`,5),x={id:"动作与菜单-实验性",tabindex:"-1"},d=n("a",{class:"header-anchor",href:"#动作与菜单-实验性","aria-label":'Permalink to "动作与菜单 <badge type="warning">实验性</badge>"'},"​",-1),u=a(`<p>控制台的许多地方都会用到菜单，其中大家最熟悉的便是每个页面标题栏右侧的菜单按钮。除此以外，部分页面还提供了上下文菜单。想要定义菜单，我们首先需要了解 <strong>动作 (Action)</strong> 这一概念。</p><p>控制台中可以执行的任何一个操作都可以视为一个动作。每个动作都有着唯一的标识符，例如 <code>explorer.save</code> 表示保存当前文件、<code>explorer.refresh</code> 表示刷新文件列表等等。已知动作标识符的情况下，可以通过 <a href="./../../api/console/context.html#ctx-menu"><code>ctx.menu()</code></a> 来描述一个菜单，并在 <code>&lt;k-layout&gt;</code> 中引用它：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">menu</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;explorer&#39;</span><span style="color:var(--shiki-token-text);">, [{</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">id</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-string);">&#39;.save&#39;</span><span style="color:var(--shiki-token-text);">,</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">icon</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-string);">&#39;save&#39;</span><span style="color:var(--shiki-token-text);">,</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">label</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-string);">&#39;保存&#39;</span><span style="color:var(--shiki-token-text);">,</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">}, {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">id</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-string);">&#39;.refresh&#39;</span><span style="color:var(--shiki-token-text);">,</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">icon</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-string);">&#39;refresh&#39;</span><span style="color:var(--shiki-token-text);">,</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">label</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-string);">&#39;刷新&#39;</span><span style="color:var(--shiki-token-text);">,</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">}])</span></span></code></pre></div><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre><code><span class="line"><span style="color:var(--shiki-token-text);">&lt;</span><span style="color:var(--shiki-token-parameter);">template</span><span style="color:var(--shiki-token-text);">&gt;</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:#7F848E;font-style:italic;">&lt;!-- 在页面中指定菜单 --&gt;</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  &lt;</span><span style="color:var(--shiki-token-parameter);">k-layout</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-number);">menu</span><span style="color:var(--shiki-token-text);">=</span><span style="color:var(--shiki-token-string);">&quot;explorer&quot;</span><span style="color:var(--shiki-token-text);">&gt;</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    页面内容</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  &lt;/</span><span style="color:var(--shiki-token-parameter);">k-layout</span><span style="color:var(--shiki-token-text);">&gt;</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">&lt;/</span><span style="color:var(--shiki-token-parameter);">template</span><span style="color:var(--shiki-token-text);">&gt;</span></span></code></pre></div><p>当然，光有菜单还不够，我们还需要实现上面的动作。这可以通过 <a href="./../../api/console/context.html#ctx-action"><code>ctx.action()</code></a> 来完成：</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre><code><span class="line"><span style="color:var(--shiki-token-text);">&lt;</span><span style="color:var(--shiki-token-parameter);">script</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-number);">lang</span><span style="color:var(--shiki-token-text);">=</span><span style="color:var(--shiki-token-string);">&quot;ts&quot;</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-number);">setup</span><span style="color:var(--shiki-token-text);">&gt;</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">import</span><span style="color:var(--shiki-token-text);"> { </span><span style="color:var(--shiki-token-parameter);">send</span><span style="color:var(--shiki-token-text);">, </span><span style="color:var(--shiki-token-parameter);">useContext</span><span style="color:var(--shiki-token-text);"> } </span><span style="color:var(--shiki-token-keyword);">from</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">&#39;@koishijs/client&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">const</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-operator);">=</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-function);">useContext</span><span style="color:var(--shiki-token-text);">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 实现菜单动作</span></span>
<span class="line"><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">action</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;explorer.save&#39;</span><span style="color:var(--shiki-token-text);">, {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-function);">disabled</span><span style="color:var(--shiki-token-text);">: () </span><span style="color:var(--shiki-token-keyword);">=&gt;</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-parameter);">content</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-operator);">===</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-parameter);">oldContent</span><span style="color:var(--shiki-token-text);">,</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-function);">action</span><span style="color:var(--shiki-token-text);">: () </span><span style="color:var(--shiki-token-keyword);">=&gt;</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-function);">send</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;explorer/write&#39;</span><span style="color:var(--shiki-token-text);">, </span><span style="color:var(--shiki-token-parameter);">filename</span><span style="color:var(--shiki-token-text);">, </span><span style="color:var(--shiki-token-parameter);">content</span><span style="color:var(--shiki-token-text);">),</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">})</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">&lt;/</span><span style="color:var(--shiki-token-parameter);">script</span><span style="color:var(--shiki-token-text);">&gt;</span></span></code></pre></div><p>如果要实现上下文菜单，同样需要首先在入口文件中描述菜单项：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">menu</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;entry&#39;</span><span style="color:var(--shiki-token-text);">, [{</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">id</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-string);">&#39;.rename&#39;</span><span style="color:var(--shiki-token-text);">,</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">label</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-string);">&#39;重命名&#39;</span><span style="color:var(--shiki-token-text);">,</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">}, {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">id</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-string);">&#39;.remove&#39;</span><span style="color:var(--shiki-token-text);">,</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">label</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-string);">&#39;删除&#39;</span><span style="color:var(--shiki-token-text);">,</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">}])</span></span></code></pre></div><p>然后在组件中使用 <a href="./../../api/console/composition.html#usemenu"><code>useMenu()</code></a> 来获取菜单项的点击事件：</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre><code><span class="line"><span style="color:var(--shiki-token-text);">&lt;</span><span style="color:var(--shiki-token-parameter);">template</span><span style="color:var(--shiki-token-text);">&gt;</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:#7F848E;font-style:italic;">&lt;!-- 这里显示了文件列表 --&gt;</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  &lt;</span><span style="color:var(--shiki-token-parameter);">div</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-number);">v-for</span><span style="color:var(--shiki-token-text);">=</span><span style="color:var(--shiki-token-string);">&quot;entry in entries&quot;</span><span style="color:var(--shiki-token-text);">&gt;</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:#7F848E;font-style:italic;">&lt;!-- 右击任意文件名会呼出上述菜单 --&gt;</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    &lt;</span><span style="color:var(--shiki-token-parameter);">div</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-number);">@contextmenu.stop</span><span style="color:var(--shiki-token-text);">=</span><span style="color:var(--shiki-token-string);">&quot;trigger($event, entry)&quot;</span><span style="color:var(--shiki-token-text);">&gt;{{ entry.filename }}&lt;/</span><span style="color:var(--shiki-token-parameter);">div</span><span style="color:var(--shiki-token-text);">&gt;</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  &lt;/</span><span style="color:var(--shiki-token-parameter);">div</span><span style="color:var(--shiki-token-text);">&gt;</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">&lt;/</span><span style="color:var(--shiki-token-parameter);">template</span><span style="color:var(--shiki-token-text);">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-token-text);">&lt;</span><span style="color:var(--shiki-token-parameter);">script</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-number);">lang</span><span style="color:var(--shiki-token-text);">=</span><span style="color:var(--shiki-token-string);">&quot;ts&quot;</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-number);">setup</span><span style="color:var(--shiki-token-text);">&gt;</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">import</span><span style="color:var(--shiki-token-text);"> { </span><span style="color:var(--shiki-token-parameter);">useContext</span><span style="color:var(--shiki-token-text);">, </span><span style="color:var(--shiki-token-parameter);">useMenu</span><span style="color:var(--shiki-token-text);"> } </span><span style="color:var(--shiki-token-keyword);">from</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">&#39;@koishijs/client&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">const</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-operator);">=</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-function);">useContext</span><span style="color:var(--shiki-token-text);">()</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">const</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">trigger</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-operator);">=</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-function);">useMenu</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;entry&#39;</span><span style="color:var(--shiki-token-text);">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 实现菜单动作</span></span>
<span class="line"><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">action</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;entry.remove&#39;</span><span style="color:var(--shiki-token-text);">, {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-function);">action</span><span style="color:var(--shiki-token-text);">: ({ </span><span style="color:#E06C75;font-style:italic;">entry</span><span style="color:var(--shiki-token-text);"> }) </span><span style="color:var(--shiki-token-keyword);">=&gt;</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-function);">send</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;explorer/remove&#39;</span><span style="color:var(--shiki-token-text);">, </span><span style="color:var(--shiki-token-constant);">entry</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-parameter);">filename</span><span style="color:var(--shiki-token-text);">),</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">})</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">&lt;/</span><span style="color:var(--shiki-token-parameter);">script</span><span style="color:var(--shiki-token-text);">&gt;</span></span></code></pre></div>`,10);function m(g,f,b,_,C,w){const t=l("badge");return i(),r("div",null,[c,n("h2",y,[s("用户设置 "),e(t,{type:"warning"},{default:o(()=>[s("实验性")]),_:1}),s(),h]),v,n("h2",x,[s("动作与菜单 "),e(t,{type:"warning"},{default:o(()=>[s("实验性")]),_:1}),s(),d]),u])}const S=p(k,[["render",m]]);export{q as __pageData,S as default};
