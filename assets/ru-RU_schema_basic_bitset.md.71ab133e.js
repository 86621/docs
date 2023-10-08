import{_ as s,s as t,q as a,S as n}from"./chunks/framework.3f494197.js";const x=JSON.parse(`{"title":"位集 (Bitset)","description":"","frontmatter":{"layout":"schema","code":"Schema.object({\\nintents: Schema\\n.bitset({ FOO: 1, BAR: 2, QUX: 4 }).default(5)\\n.description('选择要启用的功能。'),\\n}).description('配置项')\\n"},"headers":[],"relativePath":"ru-RU/schema/basic/bitset.md","filePath":"ru-RU/schema/basic/bitset.md"}`),e={name:"ru-RU/schema/basic/bitset.md"},o=n(`<h1 id="位集" tabindex="-1">位集 (Bitset) <a class="header-anchor" href="#位集" aria-label="Permalink to &quot;位集 (Bitset)&quot;">​</a></h1><p><code>Schema.bitset()</code> 以多选框的形式描述了一个整数，通常每一位表达某种特征。</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:var(--shiki-token-keyword);">const</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">enum</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">Intents</span><span style="color:var(--shiki-token-text);"> {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">FOO</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-operator);">=</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-number);">1</span><span style="color:var(--shiki-token-text);">,</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">BAR</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-operator);">=</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-number);">2</span><span style="color:var(--shiki-token-text);">,</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">QUX</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-operator);">=</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-number);">4</span><span style="color:var(--shiki-token-text);">,</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">export</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">default</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">Schema</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">object</span><span style="color:var(--shiki-token-text);">({</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">intents</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">Schema</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">bitset</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-parameter);">Intents</span><span style="color:var(--shiki-token-text);">)</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    .</span><span style="color:var(--shiki-token-function);">default</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-constant);">Intents</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-parameter);">FOO</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-operator);">|</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">Intents</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-parameter);">QUX</span><span style="color:var(--shiki-token-text);">),</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">})</span></span></code></pre></div>`,3),r=[o];function p(i,l,k,c,h,y){return a(),t("div",null,r)}const d=s(e,[["render",p]]);export{x as __pageData,d as default};
