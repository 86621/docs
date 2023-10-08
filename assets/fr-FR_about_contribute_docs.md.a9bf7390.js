import{_ as a,s,q as n,S as e}from"./chunks/framework.3f494197.js";const b=JSON.parse('{"title":"文档贡献指南","description":"","frontmatter":{},"headers":[],"relativePath":"fr-FR/about/contribute/docs.md","filePath":"fr-FR/about/contribute/docs.md"}'),l={name:"fr-FR/about/contribute/docs.md"},o=e(`<h1 id="文档贡献指南" tabindex="-1">文档贡献指南 <a class="header-anchor" href="#文档贡献指南" aria-label="Permalink to &quot;文档贡献指南&quot;">​</a></h1><h2 id="术语表" tabindex="-1">术语表 <a class="header-anchor" href="#术语表" aria-label="Permalink to &quot;术语表&quot;">​</a></h2><ul><li>CJK：中日韩文字等</li><li>西文：数字、拉丁字母、希腊字母等</li><li>西文标点：两侧权重相同的半角标点，例如四则运算符，等号等</li><li>前置标点：放在其相关文本前的标点，如左括号，左引号等</li><li>后置标点：放在其相关文本后的标点，如冒号，句号，右引号等</li></ul><h2 id="中文写作和排版指南" tabindex="-1">中文写作和排版指南 <a class="header-anchor" href="#中文写作和排版指南" aria-label="Permalink to &quot;中文写作和排版指南&quot;">​</a></h2><h4 id="cjk-一律使用全角书写-西文一律使用半角书写" tabindex="-1">CJK 一律使用全角书写，西文一律使用半角书写 <a class="header-anchor" href="#cjk-一律使用全角书写-西文一律使用半角书写" aria-label="Permalink to &quot;CJK 一律使用全角书写，西文一律使用半角书写&quot;">​</a></h4><div class="language-diff"><button title="Copy Code" class="copy"></button><span class="lang">diff</span><pre><code><span class="line"><span style="color:var(--shiki-token-parameter);">- １２３ ＡＢＣ</span></span>
<span class="line"><span style="color:var(--shiki-token-string);">+ 123 ABC</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-token-parameter);">- ﾋﾞﾘﾋﾞﾘ</span></span>
<span class="line"><span style="color:var(--shiki-token-string);">+ ビリビリ</span></span></code></pre></div><blockquote><p>123 ABC</p><p>ビリビリ</p></blockquote><h4 id="cjk-与西文之间一律插入一个空格" tabindex="-1">CJK 与西文之间一律插入一个空格 <a class="header-anchor" href="#cjk-与西文之间一律插入一个空格" aria-label="Permalink to &quot;CJK 与西文之间一律插入一个空格&quot;">​</a></h4><div class="language-diff"><button title="Copy Code" class="copy"></button><span class="lang">diff</span><pre><code><span class="line"><span style="color:var(--shiki-token-parameter);">- 在Python中，我们使用\`class\`关键字来声明类。</span></span>
<span class="line"><span style="color:var(--shiki-token-string);">+ 在 Python 中，我们使用 \`class\` 关键字来声明类。</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-token-parameter);">- 他只用了100行不到的代码就实现了那个复杂的功能。</span></span>
<span class="line"><span style="color:var(--shiki-token-string);">+ 他只用了 100 行不到的代码就实现了那个复杂的功能。</span></span></code></pre></div><blockquote><p>在 Python 中，我们使用 <code>class</code> 关键字来声明类。</p><p>他只用了 100 行不到的代码就实现了那个复杂的功能。</p></blockquote><h4 id="数字与英文单位之间加空格-与符号单位之间不加空格" tabindex="-1">数字与英文单位之间加空格，与符号单位之间不加空格 <a class="header-anchor" href="#数字与英文单位之间加空格-与符号单位之间不加空格" aria-label="Permalink to &quot;数字与英文单位之间加空格，与符号单位之间不加空格&quot;">​</a></h4><div class="language-diff"><button title="Copy Code" class="copy"></button><span class="lang">diff</span><pre><code><span class="line"><span style="color:var(--shiki-token-parameter);">- 我有一块 512GB 的硬盘。</span></span>
<span class="line"><span style="color:var(--shiki-token-string);">+ 我有一块 512 GB 的硬盘。</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-token-parameter);">- 今天气温 23 ˚C，有 70 % 的可能性下雨。</span></span>
<span class="line"><span style="color:var(--shiki-token-string);">+ 今天气温 23˚C，有 70% 的可能性下雨。</span></span></code></pre></div><blockquote><p>我有一块 512 GB 的硬盘。</p><p>今天气温 23˚C，有 70% 的可能性下雨。</p></blockquote><h4 id="括号请使用半角书写-并按照下列规则在两侧添加空格" tabindex="-1">括号请使用半角书写，并按照下列规则在两侧添加空格 <a class="header-anchor" href="#括号请使用半角书写-并按照下列规则在两侧添加空格" aria-label="Permalink to &quot;括号请使用半角书写，并按照下列规则在两侧添加空格&quot;">​</a></h4><ul><li>如果左括号的前一个字符不是前置标点，则在左括号前插入一个空格</li><li>如果右括号的后一个字符不是后置标点，则在右括号后插入一个空格</li></ul><div class="language-diff"><button title="Copy Code" class="copy"></button><span class="lang">diff</span><pre><code><span class="line"><span style="color:var(--shiki-token-parameter);">- Spring 框架的一种设计思想名叫控制反转（IoC），通常以依赖注入（DI）的方式实现。</span></span>
<span class="line"><span style="color:var(--shiki-token-parameter);">- Spring 框架的一种设计思想名叫控制反转 (IoC) ，通常以依赖注入 (DI) 的方式实现。</span></span>
<span class="line"><span style="color:var(--shiki-token-parameter);">- Spring 框架的一种设计思想名叫控制反转(IoC)，通常以依赖注入(DI)的方式实现。</span></span>
<span class="line"><span style="color:var(--shiki-token-string);">+ Spring 框架的一种设计思想名叫控制反转 (IoC)，通常以依赖注入 (DI) 的方式实现。</span></span></code></pre></div><blockquote><p>Spring 框架的一种设计思想名叫控制反转 (IoC)，通常以依赖注入 (DI) 的方式实现。</p></blockquote><h4 id="西文标点一律使用半角书写-且在两侧添加空格的方式与括号类似" tabindex="-1">西文标点一律使用半角书写，且在两侧添加空格的方式与括号类似 <a class="header-anchor" href="#西文标点一律使用半角书写-且在两侧添加空格的方式与括号类似" aria-label="Permalink to &quot;西文标点一律使用半角书写，且在两侧添加空格的方式与括号类似&quot;">​</a></h4><ul><li>如果该标点与两侧的内容是一个整体，请不要添加空格</li></ul><div class="language-diff"><button title="Copy Code" class="copy"></button><span class="lang">diff</span><pre><code><span class="line"><span style="color:var(--shiki-token-parameter);">- 1+2=3</span></span>
<span class="line"><span style="color:var(--shiki-token-parameter);">- 1＋2＝3</span></span>
<span class="line"><span style="color:var(--shiki-token-string);">+ 1 + 2 = 3</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-token-parameter);">- Bellman - Ford 算法</span></span>
<span class="line"><span style="color:var(--shiki-token-string);">+ Bellman-Ford 算法</span></span></code></pre></div><blockquote><p>1 + 2 = 3</p><p>Bellman-Ford 算法</p></blockquote><h4 id="除上述以外的标点均使用全角-且两侧均不留空格" tabindex="-1">除上述以外的标点均使用全角，且两侧均不留空格 <a class="header-anchor" href="#除上述以外的标点均使用全角-且两侧均不留空格" aria-label="Permalink to &quot;除上述以外的标点均使用全角，且两侧均不留空格&quot;">​</a></h4><div class="language-diff"><button title="Copy Code" class="copy"></button><span class="lang">diff</span><pre><code><span class="line"><span style="color:var(--shiki-token-parameter);">- 他有一台 MacBook Pro.</span></span>
<span class="line"><span style="color:var(--shiki-token-parameter);">- 他有一台 MacBook Pro 。</span></span>
<span class="line"><span style="color:var(--shiki-token-string);">+ 他有一台 MacBook Pro。</span></span></code></pre></div><blockquote><p>他有一台 MacBook Pro。</p></blockquote><h4 id="使用正确的省略号和破折号" tabindex="-1">使用正确的省略号和破折号 <a class="header-anchor" href="#使用正确的省略号和破折号" aria-label="Permalink to &quot;使用正确的省略号和破折号&quot;">​</a></h4><p>正确的省略号和破折号占两格，每格分别是「…」和「—」。使用了省略号则不宜同时使用「等等」。</p><div class="language-diff"><button title="Copy Code" class="copy"></button><span class="lang">diff</span><pre><code><span class="line"><span style="color:var(--shiki-token-parameter);">- 编程语言有很多，如 C、C++、Java…</span></span>
<span class="line"><span style="color:var(--shiki-token-parameter);">- 编程语言有很多，如 C、C++、Java...</span></span>
<span class="line"><span style="color:var(--shiki-token-parameter);">- 编程语言有很多，如 C、C++、Java。。。</span></span>
<span class="line"><span style="color:var(--shiki-token-parameter);">- 编程语言有很多，如 C、C++、Java……等等</span></span>
<span class="line"><span style="color:var(--shiki-token-string);">+ 编程语言有很多，如 C、C++、Java……</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-token-parameter);">- 他刚刚做了一个重要的决定 - 辞职。</span></span>
<span class="line"><span style="color:var(--shiki-token-parameter);">- 他刚刚做了一个重要的决定-辞职。</span></span>
<span class="line"><span style="color:var(--shiki-token-parameter);">- 他刚刚做了一个重要的决定—辞职。</span></span>
<span class="line"><span style="color:var(--shiki-token-string);">+ 他刚刚做了一个重要的决定——辞职。</span></span></code></pre></div><blockquote><p>编程语言有很多，如 C、C++、Java……</p><p>他刚刚做了一个重要的决定——辞职。</p></blockquote><h4 id="针对首次出现的概念-使用粗体进行强调-同时在两侧添加必要的空格" tabindex="-1">针对首次出现的概念，使用粗体进行强调，同时在两侧添加必要的空格 <a class="header-anchor" href="#针对首次出现的概念-使用粗体进行强调-同时在两侧添加必要的空格" aria-label="Permalink to &quot;针对首次出现的概念，使用粗体进行强调，同时在两侧添加必要的空格&quot;">​</a></h4><div class="language-diff"><button title="Copy Code" class="copy"></button><span class="lang">diff</span><pre><code><span class="line"><span style="color:var(--shiki-token-parameter);">- 下面介绍 TypeScript 特有的依赖合并 (Declaration Merging) 机制。</span></span>
<span class="line"><span style="color:var(--shiki-token-parameter);">- 下面介绍 TypeScript 特有的 **依赖合并** (Declaration Merging) 机制。</span></span>
<span class="line"><span style="color:var(--shiki-token-string);">+ 下面介绍 TypeScript 特有的 **依赖合并 (Declaration Merging)** 机制。</span></span></code></pre></div><blockquote><p>下面介绍 TypeScript 特有的 <strong>依赖合并 (Declaration Merging)</strong> 机制。</p></blockquote><h4 id="强调的部分应尽量简短-对要强调的概念的补充说明建议不使用粗体" tabindex="-1">强调的部分应尽量简短，对要强调的概念的补充说明建议不使用粗体 <a class="header-anchor" href="#强调的部分应尽量简短-对要强调的概念的补充说明建议不使用粗体" aria-label="Permalink to &quot;强调的部分应尽量简短，对要强调的概念的补充说明建议不使用粗体&quot;">​</a></h4><div class="language-diff"><button title="Copy Code" class="copy"></button><span class="lang">diff</span><pre><code><span class="line"><span style="color:var(--shiki-token-parameter);">- 组件的 **副作用 (触发组件外的影响)** 应声明在最前面。</span></span>
<span class="line"><span style="color:var(--shiki-token-string);">+ 组件的 **副作用** (触发组件外的影响) 应声明在最前面。</span></span></code></pre></div><blockquote><p>组件的 <strong>副作用</strong> (触发组件外的影响) 应声明在最前面。</p></blockquote><h4 id="尽量避免在正文中使用斜体" tabindex="-1">尽量避免在正文中使用斜体 <a class="header-anchor" href="#尽量避免在正文中使用斜体" aria-label="Permalink to &quot;尽量避免在正文中使用斜体&quot;">​</a></h4><ul><li>斜体的汉字非常不美观，如有需求可以使用粗体 (<code>**</code>)</li></ul><div class="language-diff"><button title="Copy Code" class="copy"></button><span class="lang">diff</span><pre><code><span class="line"><span style="color:var(--shiki-token-parameter);">- __只要有能够拼接文件的构建系统，就把每个组件单独分成文件。__</span></span>
<span class="line"><span style="color:var(--shiki-token-string);">+ **只要有能够拼接文件的构建系统，就把每个组件单独分成文件。**</span></span></code></pre></div><blockquote><p><strong>只要有能够拼接文件的构建系统，就把每个组件单独分成文件。</strong></p></blockquote><h2 id="markdown-风格指南" tabindex="-1">Markdown 风格指南 <a class="header-anchor" href="#markdown-风格指南" aria-label="Permalink to &quot;Markdown 风格指南&quot;">​</a></h2><h4 id="使用一个、两个和三个-分别表示斜体、粗体和粗斜体" tabindex="-1">使用一个、两个和三个 <code>*</code> 分别表示斜体、粗体和粗斜体 <a class="header-anchor" href="#使用一个、两个和三个-分别表示斜体、粗体和粗斜体" aria-label="Permalink to &quot;使用一个、两个和三个 \`*\` 分别表示斜体、粗体和粗斜体&quot;">​</a></h4><div class="language-diff"><button title="Copy Code" class="copy"></button><span class="lang">diff</span><pre><code><span class="line"><span style="color:var(--shiki-token-parameter);">- 这是一个_斜体_；这是一个__粗体__；这是一个___粗斜体___。</span></span>
<span class="line"><span style="color:var(--shiki-token-string);">+ 这是一个*斜体*；这是一个**粗体**；这是一个***粗斜体***。</span></span></code></pre></div><h2 id="参考资料" tabindex="-1">参考资料 <a class="header-anchor" href="#参考资料" aria-label="Permalink to &quot;参考资料&quot;">​</a></h2><ul><li><a href="https://github.com/vinta/pangu.js" target="_blank" rel="noreferrer">https://github.com/vinta/pangu.js</a></li><li><a href="https://stdrc.cc/style-guides/chinese.html" target="_blank" rel="noreferrer">https://stdrc.cc/style-guides/chinese.html</a></li><li><a href="https://stdrc.cc/style-guides/markdown.html" target="_blank" rel="noreferrer">https://stdrc.cc/style-guides/markdown.html</a></li></ul>`,43),t=[o];function r(p,i,c,d,h,k){return n(),s("div",null,t)}const g=a(l,[["render",r]]);export{b as __pageData,g as default};
