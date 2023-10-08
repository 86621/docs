import{_ as s,s as a,q as n,S as t}from"./chunks/framework.26d7e063.js";const m=JSON.parse(`{"title":"Transform：輸入轉換","description":"","frontmatter":{"layout":"schema","code":"Schema.object({\\nvalue: Schema.union([\\nSchema.array(String),\\nSchema.transform(String, value => [value]),\\n]).default([]).description('点击右侧的按钮添加元素。'),\\n}).description('配置项')\\n"},"headers":[],"relativePath":"zh-TW/schema/advanced/transform.md","filePath":"zh-TW/schema/advanced/transform.md"}`),e={name:"zh-TW/schema/advanced/transform.md"},o=t(`<h1 id="transform-輸入轉換" tabindex="-1">Transform：輸入轉換 <a class="header-anchor" href="#transform-輸入轉換" aria-label="Permalink to &quot;Transform：輸入轉換&quot;">​</a></h1><p>Transform 用于定义一个转换类型，通常与 Union 一同使用。当输入满足一参数类型时，将调用二参数转换输入作为输出。此次转换将直接修改输入的对象，以确保类型满足输出类型。在网页表单中，将只会显示输出类型。</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:var(--shiki-token-keyword);">export</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">default</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">Schema</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">object</span><span style="color:var(--shiki-token-text);">({</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">value</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">Schema</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">union</span><span style="color:var(--shiki-token-text);">([</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-constant);">Schema</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">array</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-parameter);">String</span><span style="color:var(--shiki-token-text);">),</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-constant);">Schema</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">transform</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-parameter);">String</span><span style="color:var(--shiki-token-text);">, </span><span style="color:#E06C75;font-style:italic;">value</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">=&gt;</span><span style="color:var(--shiki-token-text);"> [</span><span style="color:var(--shiki-token-parameter);">value</span><span style="color:var(--shiki-token-text);">]),</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  ]).</span><span style="color:var(--shiki-token-function);">default</span><span style="color:var(--shiki-token-text);">([]),</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">})</span></span></code></pre></div>`,3),r=[o];function l(i,p,c,k,h,v){return n(),a("div",null,r)}const d=s(e,[["render",l]]);export{m as __pageData,d as default};
