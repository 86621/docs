import{_ as s,s as a,q as t,S as e}from"./chunks/framework.26d7e063.js";const v=JSON.parse(`{"title":"路径 (Path)","description":"","frontmatter":{"layout":"schema","code":"Schema.object({\\npath1: Schema.string().description('假装右边是一个文件选择器。'),\\npath2: Schema.string().description('假装右边是一个文件选择器。'),\\n}).description('配置项')\\n"},"headers":[],"relativePath":"ja-JP/schema/basic/path.md","filePath":"ja-JP/schema/basic/path.md"}`),n={name:"ja-JP/schema/basic/path.md"},o=e(`<h1 id="路径" tabindex="-1">路径 (Path) <a class="header-anchor" href="#路径" aria-label="Permalink to &quot;路径 (Path)&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>此类型基于 @koishijs/plugin-explorer，仅在加载该插件时可用。未加载该插件时，类型只会表现为普通的字符串 (比如现在就是这样)。</p></div><p><code>Schema.path()</code> 描述了一个路径。如果是相对路径，则会基于 <code>ctx.baseDir</code> 进行解析。该配置项会显示成一个能够打开文件选择器的按钮。</p><p>支持传入一些额外的选项：</p><ul><li><code>allowCreate</code>：是否允许创建目录和上传文件</li><li><code>extensions</code>：可选的文件的扩展名列表，扩展名全需要以 <code>.</code> 开头；特别地其中如果包含 <code>directory</code> 则表示可以选择文件夹</li></ul><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:var(--shiki-token-keyword);">export</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">default</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">Schema</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">object</span><span style="color:var(--shiki-token-text);">({</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">path1</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">Schema</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">path</span><span style="color:var(--shiki-token-text);">(),</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">path2</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">Schema</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">path</span><span style="color:var(--shiki-token-text);">({</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-parameter);">extensions</span><span style="color:var(--shiki-token-text);">: [</span><span style="color:var(--shiki-token-string);">&#39;.png&#39;</span><span style="color:var(--shiki-token-text);">, </span><span style="color:var(--shiki-token-string);">&#39;.jpg&#39;</span><span style="color:var(--shiki-token-text);">, </span><span style="color:var(--shiki-token-string);">&#39;directory&#39;</span><span style="color:var(--shiki-token-text);">],</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  }),</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">})</span></span></code></pre></div>`,6),p=[o];function i(r,l,c,k,h,d){return t(),a("div",null,p)}const x=s(n,[["render",i]]);export{v as __pageData,x as default};
