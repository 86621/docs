import{_ as s,s as n,q as a,S as t}from"./chunks/framework.26d7e063.js";const x=JSON.parse('{"title":"配置构型","description":"","frontmatter":{},"headers":[],"relativePath":"ja-JP/guide/plugin/schema.md","filePath":"ja-JP/guide/plugin/schema.md"}'),o={name:"ja-JP/guide/plugin/schema.md"},e=t(`<h1 id="配置构型" tabindex="-1">配置构型 <a class="header-anchor" href="#配置构型" aria-label="Permalink to &quot;配置构型&quot;">​</a></h1><p>在上一节中，我们已经了解了插件的本质是一个接受了上下文和配置项的函数。但仅仅是接受任意格式的输入是不够的，我们还需要对配置项进行一些约束，以确保插件能够正常运行。为此，我们开发了 <a href="https://github.com/shigma/schemastery" target="_blank" rel="noreferrer">schemastery</a> 这个工具，并将它集成到了 Koishi 中。这个工具可以帮助你：</p><ul><li>验证某个配置项是否合法</li><li>为可缺省的配置项提供默认值</li><li>在控制台中通过表单让用户进行在线配置</li></ul><p>让我们来看看它是如何工作的。</p><h2 id="基本示例" tabindex="-1">基本示例 <a class="header-anchor" href="#基本示例" aria-label="Permalink to &quot;基本示例&quot;">​</a></h2><p>让我们看一个简单的示例。下面的插件将注册一个指令，输出当前插件的配置项。</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:var(--shiki-token-keyword);">import</span><span style="color:var(--shiki-token-text);"> { </span><span style="color:var(--shiki-token-parameter);">Context</span><span style="color:var(--shiki-token-text);">, </span><span style="color:var(--shiki-token-parameter);">Schema</span><span style="color:var(--shiki-token-text);"> } </span><span style="color:var(--shiki-token-keyword);">from</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">&#39;koishi&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">export</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">const</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">name</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-operator);">=</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">&#39;example&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">export</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">interface</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">Config</span><span style="color:var(--shiki-token-text);"> {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">foo</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">string</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">bar</span><span style="color:var(--shiki-token-keyword);">?</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">number</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">export</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">const</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">Config</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">Schema</span><span style="color:var(--shiki-token-text);">&lt;</span><span style="color:var(--shiki-token-constant);">Config</span><span style="color:var(--shiki-token-text);">&gt; </span><span style="color:var(--shiki-token-operator);">=</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">Schema</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">object</span><span style="color:var(--shiki-token-text);">({</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">foo</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">Schema</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">string</span><span style="color:var(--shiki-token-text);">().</span><span style="color:var(--shiki-token-function);">required</span><span style="color:var(--shiki-token-text);">(),</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">bar</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">Schema</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">number</span><span style="color:var(--shiki-token-text);">().</span><span style="color:var(--shiki-token-function);">default</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-number);">1</span><span style="color:var(--shiki-token-text);">),</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">export</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">function</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-function);">apply</span><span style="color:var(--shiki-token-text);">(</span><span style="color:#E06C75;font-style:italic;">ctx</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">Context</span><span style="color:var(--shiki-token-text);">, </span><span style="color:#E06C75;font-style:italic;">config</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">Config</span><span style="color:var(--shiki-token-text);">) {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">command</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;config&#39;</span><span style="color:var(--shiki-token-text);">).</span><span style="color:var(--shiki-token-function);">action</span><span style="color:var(--shiki-token-text);">(() </span><span style="color:var(--shiki-token-keyword);">=&gt;</span><span style="color:var(--shiki-token-text);"> {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:#7F848E;font-style:italic;">// 输出当前的配置</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-keyword);">return</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">\`foo: </span><span style="color:var(--shiki-token-keyword);">\${</span><span style="color:var(--shiki-token-constant);">config</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-parameter);">foo</span><span style="color:var(--shiki-token-keyword);">}</span><span style="color:var(--shiki-token-operator);">\\n</span><span style="color:var(--shiki-token-string);">bar: </span><span style="color:var(--shiki-token-keyword);">\${</span><span style="color:var(--shiki-token-constant);">config</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-parameter);">bar</span><span style="color:var(--shiki-token-keyword);">}</span><span style="color:var(--shiki-token-string);">\`</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  })</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">}</span></span></code></pre></div><p>在这个示例中，我们的插件导出了一个 <code>Config</code> 类型和一个同名的 <code>Schema</code> 对象。前者为我们的插件提供了类型，而后者则生成了对配置项的约束。我们可以看到，这个插件的配置项有两个属性，<code>foo</code> 是必需的，而 <code>bar</code> 则是可选的。如果你不填写 <code>foo</code>，那么插件在启动时就会报错；而如果你不填写 <code>bar</code>，那么它将会被赋予默认值 <code>1</code>。</p><h2 id="描述类型信息" tabindex="-1">描述类型信息 <a class="header-anchor" href="#描述类型信息" aria-label="Permalink to &quot;描述类型信息&quot;">​</a></h2><p>除了 <code>string</code>, <code>number</code>, <code>boolean</code> 等类型外，Koishi 同样支持 <code>array</code>, <code>dict</code>, <code>object</code> 等复合类型。你可以组合使用它们来构造出更复杂的配置项。</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:var(--shiki-token-constant);">Schema</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">object</span><span style="color:var(--shiki-token-text);">({</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">foo</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">Schema</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">array</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-constant);">Schema</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">string</span><span style="color:var(--shiki-token-text);">()),</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">bar</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">Schema</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">dict</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-constant);">Schema</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">number</span><span style="color:var(--shiki-token-text);">()),</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">baz</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">Schema</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">object</span><span style="color:var(--shiki-token-text);">({</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-parameter);">quz</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">Schema</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">boolean</span><span style="color:var(--shiki-token-text);">(),</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  }),</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">})</span></span></code></pre></div><p>你可以通过 <code>Schema</code> 对象的静态方法来创建这些类型；而对于已经创建的类型，你还可以通过链式调用的方式添加更多信息：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:var(--shiki-token-constant);">Schema</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">number</span><span style="color:var(--shiki-token-text);">()</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:#7F848E;font-style:italic;">// 限制取值范围</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  .</span><span style="color:var(--shiki-token-function);">min</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-number);">0</span><span style="color:var(--shiki-token-text);">).</span><span style="color:var(--shiki-token-function);">max</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-number);">100</span><span style="color:var(--shiki-token-text);">).</span><span style="color:var(--shiki-token-function);">step</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-number);">1</span><span style="color:var(--shiki-token-text);">)</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:#7F848E;font-style:italic;">// 设置默认值</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  .</span><span style="color:var(--shiki-token-function);">default</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-number);">50</span><span style="color:var(--shiki-token-text);">)</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:#7F848E;font-style:italic;">// 以滑动条的形式显示</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  .</span><span style="color:var(--shiki-token-function);">role</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;slider&#39;</span><span style="color:var(--shiki-token-text);">)</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:#7F848E;font-style:italic;">// 设置描述信息</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  .</span><span style="color:var(--shiki-token-function);">description</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;这是一个介于 0 和 100 之间的整数。&#39;</span><span style="color:var(--shiki-token-text);">)</span></span></code></pre></div><p>我们能做的还远不止于此。一些高级类型如 <code>intersect</code> 可用于将类型的分组显示；而 <code>union</code> 则可以创造联合类型。通过恰当地组合它们，你甚至可以构造出上下关联的配置项！</p><p>为了帮助你更好地理解这些类型，我们专门编写了在线的 <a href="./../../schema/">配置演练场</a>。所有类型的详细信息和用法示例都可以在这里找到。</p><h2 id="插件的元属性" tabindex="-1">插件的元属性 <a class="header-anchor" href="#插件的元属性" aria-label="Permalink to &quot;插件的元属性&quot;">​</a></h2><p>需要注意的是，<code>Config</code> 应当是导出的插件的一个属性。因此，如果你使用默认导出，推荐你使用 <code>namespace</code> 来声明插件的配置：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:var(--shiki-token-keyword);">class</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">Example</span><span style="color:var(--shiki-token-text);"> {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-keyword);">constructor</span><span style="color:var(--shiki-token-text);">(</span><span style="color:#E06C75;font-style:italic;">ctx</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">Context</span><span style="color:var(--shiki-token-text);">, </span><span style="color:#E06C75;font-style:italic;">config</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">Example</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-constant);">Config</span><span style="color:var(--shiki-token-text);">) {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:#7F848E;font-style:italic;">// 这里是插件实现</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  }</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">namespace</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">Example</span><span style="color:var(--shiki-token-text);"> {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-keyword);">export</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">interface</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">Config</span><span style="color:var(--shiki-token-text);"> {}</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-keyword);">export</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">const</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">Config</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">Schema</span><span style="color:var(--shiki-token-text);">&lt;</span><span style="color:var(--shiki-token-constant);">Config</span><span style="color:var(--shiki-token-text);">&gt; </span><span style="color:var(--shiki-token-operator);">=</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">Schema</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">object</span><span style="color:var(--shiki-token-text);">({</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:#7F848E;font-style:italic;">// 这里是配置声明</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  })</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">export</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">default</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-parameter);">Foo</span></span></code></pre></div><p>形如 <code>name</code> 和 <code>Config</code> 这样的属性，我们称之为插件的元属性。它们需要与插件的入口函数同级导出。例如，你还可以通过导出 <code>usage</code> 属性来为插件提供使用方法。这样一来，一个完整的插件就可以写成这样：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:var(--shiki-token-keyword);">export</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">const</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">name</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-operator);">=</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">&#39;example&#39;</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">export</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">const</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">usage</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-operator);">=</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">&#39;这是一个示例插件。&#39;</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">export</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">interface</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">Config</span><span style="color:var(--shiki-token-text);"> {}</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">export</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">const</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">Config</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">Schema</span><span style="color:var(--shiki-token-text);">&lt;</span><span style="color:var(--shiki-token-constant);">Config</span><span style="color:var(--shiki-token-text);">&gt; </span><span style="color:var(--shiki-token-operator);">=</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">Schema</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">object</span><span style="color:var(--shiki-token-text);">({})</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">export</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">function</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-function);">apply</span><span style="color:var(--shiki-token-text);">(</span><span style="color:#E06C75;font-style:italic;">ctx</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">Context</span><span style="color:var(--shiki-token-text);">, </span><span style="color:#E06C75;font-style:italic;">config</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">Config</span><span style="color:var(--shiki-token-text);">) {}</span></span></code></pre></div><p>类似的属性还有 <code>reusable</code>, <code>using</code>, <code>filter</code> 等等，我们将在接下来的几节中介绍它们的用法。</p>`,21),l=[e];function p(i,r,k,c,y,h){return a(),n("div",null,l)}const d=s(o,[["render",p]]);export{x as __pageData,d as default};
