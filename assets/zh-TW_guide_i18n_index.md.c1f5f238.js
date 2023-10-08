import{_ as i,p as l,s as p,D as s,I as n,S as o,q as r,L as t}from"./chunks/framework.3f494197.js";const C=JSON.parse('{"title":"多语言支持","description":"","frontmatter":{},"headers":[],"relativePath":"zh-TW/guide/i18n/index.md","filePath":"zh-TW/guide/i18n/index.md"}'),k={name:"zh-TW/guide/i18n/index.md"},c=o(`<h1 id="多语言支持" tabindex="-1">多语言支持 <a class="header-anchor" href="#多语言支持" aria-label="Permalink to &quot;多语言支持&quot;">​</a></h1><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>多语言支持目前属于实验性功能。</p></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>在学习本章之前，建议先完整阅读 <a href="./../../manual/usage/customize.html#国际化">入门 &gt; 国际化</a>。</p></div><p>如果你在运营一个大型社区，那么你可能会遇到这种场景：群组内设立了许多不同语言的频道，每个频道分别供不同地区的用户进行交流。在这种情况下，最合适的做法是让你的机器人在不同的频道下使用不同的语言进行回复。本质上，这不会改变机器人的运行逻辑，因此最好的做法是将涉及的每一段文本都抽离出来，通过统一的方式进行管理，并在发送前进行本地化渲染。</p><h2 id="基本用法" tabindex="-1">基本用法 <a class="header-anchor" href="#基本用法" aria-label="Permalink to &quot;基本用法&quot;">​</a></h2><p>让我们先看一个最简单的例子：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-constant);">i18n</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">define</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;zh&#39;</span><span style="color:var(--shiki-token-text);">, { </span><span style="color:var(--shiki-token-parameter);">hello</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-string);">&#39;你好！&#39;</span><span style="color:var(--shiki-token-text);"> })</span></span>
<span class="line"><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-constant);">i18n</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">define</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;en&#39;</span><span style="color:var(--shiki-token-text);">, { </span><span style="color:var(--shiki-token-parameter);">hello</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-string);">&#39;Hello!&#39;</span><span style="color:var(--shiki-token-text);"> })</span></span></code></pre></div><p>上面的代码描述了两个语言包，分别包含中文和英文下 <code>hello</code> 对应的翻译文本。其中 <code>zh</code> 和 <code>en</code> 称为语言名，<code>hello</code> 称为渲染路径，后面的字符串是对应的翻译文本。</p><p>现在我们把它用在指令中：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">middleware</span><span style="color:var(--shiki-token-text);">((</span><span style="color:#E06C75;font-style:italic;">session</span><span style="color:var(--shiki-token-text);">, </span><span style="color:#E06C75;font-style:italic;">next</span><span style="color:var(--shiki-token-text);">) </span><span style="color:var(--shiki-token-keyword);">=&gt;</span><span style="color:var(--shiki-token-text);"> {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-keyword);">if</span><span style="color:var(--shiki-token-text);"> (</span><span style="color:var(--shiki-token-constant);">session</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-parameter);">content</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-operator);">===</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">&#39;greeting&#39;</span><span style="color:var(--shiki-token-text);">) {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-keyword);">return</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">session</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">text</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;hello&#39;</span><span style="color:var(--shiki-token-text);">)</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  } </span><span style="color:var(--shiki-token-keyword);">else</span><span style="color:var(--shiki-token-text);"> {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-keyword);">return</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-function);">next</span><span style="color:var(--shiki-token-text);">()</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  }</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">})</span></span></code></pre></div>`,10),h=o('<p>我们看到机器人回复了「你好！」，这是因为 Koishi 使用的默认语言是中文。</p><p>现在，如果我们希望它在某个频道使用英文，我们只需设置这个频道的属性：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:var(--shiki-token-constant);">channel</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-parameter);">locales</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-operator);">=</span><span style="color:var(--shiki-token-text);"> [</span><span style="color:var(--shiki-token-string);">&#39;en&#39;</span><span style="color:var(--shiki-token-text);">]</span></span></code></pre></div>',3),y=o(`<h3 id="插值语法" tabindex="-1">插值语法 <a class="header-anchor" href="#插值语法" aria-label="Permalink to &quot;插值语法&quot;">​</a></h3><p>向 <code>session.text()</code> 中传入第二个参数，就可以在模板中使用单花括号插值。花括号中的内容将对应传入列表的索引。</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-constant);">i18n</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">define</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;zh&#39;</span><span style="color:var(--shiki-token-text);">, { </span><span style="color:var(--shiki-token-parameter);">hello</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-string);">&#39;你好，{0}！&#39;</span><span style="color:var(--shiki-token-text);"> })</span></span>
<span class="line"><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-constant);">i18n</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">define</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;en&#39;</span><span style="color:var(--shiki-token-text);">, { </span><span style="color:var(--shiki-token-parameter);">hello</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-string);">&#39;Hello, {0}!&#39;</span><span style="color:var(--shiki-token-text);"> })</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">middleware</span><span style="color:var(--shiki-token-text);">((</span><span style="color:#E06C75;font-style:italic;">session</span><span style="color:var(--shiki-token-text);">, </span><span style="color:#E06C75;font-style:italic;">next</span><span style="color:var(--shiki-token-text);">) </span><span style="color:var(--shiki-token-keyword);">=&gt;</span><span style="color:var(--shiki-token-text);"> {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-keyword);">if</span><span style="color:var(--shiki-token-text);"> (</span><span style="color:var(--shiki-token-constant);">session</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-parameter);">content</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-operator);">===</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">&#39;greeting&#39;</span><span style="color:var(--shiki-token-text);">) {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-keyword);">return</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">session</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">text</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;hello&#39;</span><span style="color:var(--shiki-token-text);">, [</span><span style="color:var(--shiki-token-constant);">session</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-constant);">author</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-parameter);">name</span><span style="color:var(--shiki-token-text);">])</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  } </span><span style="color:var(--shiki-token-keyword);">else</span><span style="color:var(--shiki-token-text);"> {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-keyword);">return</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-function);">next</span><span style="color:var(--shiki-token-text);">()</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  }</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">})</span></span></code></pre></div>`,3),v=o(`<p>这里的参数也可以是一个对象，此时花括号中的内容仍然表示对象的索引。</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-constant);">i18n</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">define</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;zh&#39;</span><span style="color:var(--shiki-token-text);">, { </span><span style="color:var(--shiki-token-parameter);">hello</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-string);">&#39;你好，{username}！&#39;</span><span style="color:var(--shiki-token-text);"> })</span></span>
<span class="line"><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-constant);">i18n</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">define</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;en&#39;</span><span style="color:var(--shiki-token-text);">, { </span><span style="color:var(--shiki-token-parameter);">hello</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-string);">&#39;Hello, {username}!&#39;</span><span style="color:var(--shiki-token-text);"> })</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">middleware</span><span style="color:var(--shiki-token-text);">((</span><span style="color:#E06C75;font-style:italic;">session</span><span style="color:var(--shiki-token-text);">, </span><span style="color:#E06C75;font-style:italic;">next</span><span style="color:var(--shiki-token-text);">) </span><span style="color:var(--shiki-token-keyword);">=&gt;</span><span style="color:var(--shiki-token-text);"> {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-keyword);">if</span><span style="color:var(--shiki-token-text);"> (</span><span style="color:var(--shiki-token-constant);">session</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-parameter);">content</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-operator);">===</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">&#39;greeting&#39;</span><span style="color:var(--shiki-token-text);">) {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-keyword);">return</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">session</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">text</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;hello&#39;</span><span style="color:var(--shiki-token-text);">, </span><span style="color:var(--shiki-token-constant);">session</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-parameter);">author</span><span style="color:var(--shiki-token-text);">)</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  } </span><span style="color:var(--shiki-token-keyword);">else</span><span style="color:var(--shiki-token-text);"> {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-keyword);">return</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-function);">next</span><span style="color:var(--shiki-token-text);">()</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  }</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">})</span></span></code></pre></div><p>如果要访问对象深层的内容，只需将多个属性之间用 <code>.</code> 连接。利用这种方法，你甚至可以把整个 <code>session</code> 传进去：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-constant);">i18n</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">define</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;zh&#39;</span><span style="color:var(--shiki-token-text);">, { </span><span style="color:var(--shiki-token-parameter);">hello</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-string);">&#39;你好，{author.name}！&#39;</span><span style="color:var(--shiki-token-text);"> })</span></span>
<span class="line"><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-constant);">i18n</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">define</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;en&#39;</span><span style="color:var(--shiki-token-text);">, { </span><span style="color:var(--shiki-token-parameter);">hello</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-string);">&#39;Hello, {author.name}!&#39;</span><span style="color:var(--shiki-token-text);"> })</span></span></code></pre></div><p>上述三段代码的实际效果完全相同，可以根据自己的需要进行选择。</p><h2 id="渲染回退" tabindex="-1">渲染回退 <a class="header-anchor" href="#渲染回退" aria-label="Permalink to &quot;渲染回退&quot;">​</a></h2><h3 id="语言优先级" tabindex="-1">语言优先级 <a class="header-anchor" href="#语言优先级" aria-label="Permalink to &quot;语言优先级&quot;">​</a></h3><p>默认情况下的渲染优先级依次为：</p><ul><li>频道语言 (<code>session.channel.locales</code>)</li><li>群组语言 (<code>session.guild.locales</code>)</li><li>用户语言 (<code>session.user.locales</code>)</li><li>默认语言 (<code>app.config.i18n.locales</code>)</li><li>无语言 (<code>&#39;&#39;</code>)</li><li>其他任何语言</li></ul><p>如果一种语言不存在对应的翻译，就会尝试使用下一种语言。如果所有语言均没有找到翻译，则会输出本身传入的渲染路径，同时输出一个警告。</p><h3 id="路径回退" tabindex="-1">路径回退 <a class="header-anchor" href="#路径回退" aria-label="Permalink to &quot;路径回退&quot;">​</a></h3><p>你也可以配置多个路径，将会按照顺序查找翻译，直到找到一个翻译为止。</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:var(--shiki-token-constant);">session</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">text</span><span style="color:var(--shiki-token-text);">([</span><span style="color:var(--shiki-token-string);">&#39;foo&#39;</span><span style="color:var(--shiki-token-text);">, </span><span style="color:var(--shiki-token-string);">&#39;bar&#39;</span><span style="color:var(--shiki-token-text);">])</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>路径回退的优先级低于语言回退。举个例子，假如可选的语言包括 A 和 B，路径包括 1 和 2。翻译 A1 不存在，但是翻译 A2 和 B1 都存在。这种情况下会输出 B1 而非 A2。采用这种设计是因为不同的路径通常表达了不同的逻辑。相比语言的正确性，逻辑的正确性更重要。</p></div><p>利用这种行为，你可以实现静默渲染。下面的代码当未找到翻译时，将只会输出一个空串，并且不会输出警告：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:var(--shiki-token-constant);">session</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">text</span><span style="color:var(--shiki-token-text);">([</span><span style="color:var(--shiki-token-string);">&#39;foo&#39;</span><span style="color:var(--shiki-token-text);">, </span><span style="color:var(--shiki-token-string);">&#39;&#39;</span><span style="color:var(--shiki-token-text);">])</span></span></code></pre></div>`,16);function x(d,u,_,g,f,m){const a=l("chat-message"),e=l("chat-panel");return r(),p("div",null,[c,s(e,null,{default:n(()=>[s(a,{nickname:"Alice"},{default:n(()=>[t("greeting")]),_:1}),s(a,{nickname:"Koishi"},{default:n(()=>[t("你好！")]),_:1})]),_:1}),h,s(e,null,{default:n(()=>[s(a,{nickname:"Alice"},{default:n(()=>[t("greeting")]),_:1}),s(a,{nickname:"Koishi"},{default:n(()=>[t("Hello!")]),_:1})]),_:1}),y,s(e,null,{default:n(()=>[s(a,{nickname:"Alice"},{default:n(()=>[t("greeting")]),_:1}),s(a,{nickname:"Koishi"},{default:n(()=>[t("Hello, Alice!")]),_:1})]),_:1}),v])}const T=i(k,[["render",x]]);export{C as __pageData,T as default};
