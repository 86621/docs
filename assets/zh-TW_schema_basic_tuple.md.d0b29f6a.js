import{_ as e,s as a,q as t,S as s}from"./chunks/framework.26d7e063.js";const d=JSON.parse(`{"title":"元組 (Tuple)","description":"","frontmatter":{"layout":"schema","code":"Schema.object({\\npoint: Schema.tuple([Number, Number]).description('请输入点的坐标。'),\\n}).description('配置项')\\n"},"headers":[],"relativePath":"zh-TW/schema/basic/tuple.md","filePath":"zh-TW/schema/basic/tuple.md"}`),n={name:"zh-TW/schema/basic/tuple.md"},o=s(`<h1 id="元組" tabindex="-1">元組 (Tuple) <a class="header-anchor" href="#元組" aria-label="Permalink to &quot;元組 (Tuple)&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>目前我们只支持元组内部元素是原始类型 (<a href="./string.html">String</a>, <a href="./number.html">Number</a>, <a href="./boolean.html">Boolean</a>) 的情况。如果你要描述比较复杂的类型，请使用 <a href="./object.html">Object</a> 或 <a href="./array.html">Array</a> 替代。</p></div><p><code>Schema.tuple()</code> 描述了一个元组，它的长度是固定的，你需要分别给出其中每个元素的类型。它们会被显示在同一行中。</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:var(--shiki-token-keyword);">export</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">default</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">Schema</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">object</span><span style="color:var(--shiki-token-text);">({</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">point</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">Schema</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">tuple</span><span style="color:var(--shiki-token-text);">([</span><span style="color:var(--shiki-token-parameter);">Number</span><span style="color:var(--shiki-token-text);">, </span><span style="color:var(--shiki-token-parameter);">Number</span><span style="color:var(--shiki-token-text);">]),</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">})</span></span></code></pre></div>`,4),r=[o];function l(p,c,i,h,k,m){return t(),a("div",null,r)}const y=e(n,[["render",l]]);export{d as __pageData,y as default};
