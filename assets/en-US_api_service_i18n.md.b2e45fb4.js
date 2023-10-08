import{_ as s,s as n,q as t,S as a}from"./chunks/framework.3f494197.js";const y=JSON.parse('{"title":"I18n","description":"","frontmatter":{},"headers":[],"relativePath":"en-US/api/service/i18n.md","filePath":"en-US/api/service/i18n.md"}'),e={name:"en-US/api/service/i18n.md"},o=a(`<h1 id="i18n" tabindex="-1">I18n <a class="header-anchor" href="#i18n" aria-label="Permalink to &quot;I18n&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>参见：<a href="./../../guide/i18n/">开发 &gt; 国际化</a></p></div><h2 id="实例方法" tabindex="-1">实例方法 <a class="header-anchor" href="#实例方法" aria-label="Permalink to &quot;实例方法&quot;">​</a></h2><h3 id="ctx-i18n-define" tabindex="-1">ctx.i18n.define(locale, dict) <a class="header-anchor" href="#ctx-i18n-define" aria-label="Permalink to &quot;ctx.i18n.define(locale, dict)&quot;">​</a></h3><ul><li><strong>locale:</strong> <code>string</code> 语言代码</li><li><strong>dict:</strong> <code>Dict</code> 本地化文本</li></ul><p>定义本地化文本。</p><p>通常的用法是将本地化文本写在单独的文件中，然后使用 <code>require</code> 引入。</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-constant);">i18n</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">define</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;zh-CN&#39;</span><span style="color:var(--shiki-token-text);">, </span><span style="color:var(--shiki-token-function);">require</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;./locales/zh-CN&#39;</span><span style="color:var(--shiki-token-text);">))</span></span></code></pre></div><h3 id="ctx-i18n-find" tabindex="-1">ctx.i18n.find(path, actual, options?) <a class="header-anchor" href="#ctx-i18n-find" aria-label="Permalink to &quot;ctx.i18n.find(path, actual, options?)&quot;">​</a></h3><ul><li><strong>path:</strong> <code>string</code> 路径模式</li><li><strong>actual:</strong> <code>string</code> 要搜索的文本</li><li><strong>options.minSimilarity:</strong> <code>number</code> 最小相似度，默认值为 <code>ctx.root.config.minSimilarity</code></li><li>返回值: <code>FindResult[]</code></li></ul><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:var(--shiki-token-keyword);">export</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">interface</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">FindResult</span><span style="color:var(--shiki-token-text);"> {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">locale</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">string</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">data</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">Dict</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">similarity</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">number</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">}</span></span></code></pre></div><p>从本地化文本的特定路径中反向搜索一段文本。</p>`,12),i=[o];function l(r,c,p,k,d,h){return t(),n("div",null,i)}const u=s(e,[["render",l]]);export{y as __pageData,u as default};
