import{_ as s,s as n,q as a,S as t}from"./chunks/framework.3f494197.js";const d=JSON.parse(`{"title":"禁用与隐藏","description":"","frontmatter":{"layout":"schema","code":"Schema.object({\\nfoo: Schema.string().disabled().description('这是一个禁用配置项。'),\\nbar: Schema.number().hidden(),\\nchoice: Schema.union([\\nSchema.const('foo'),\\nSchema.const('bar').disabled(),\\nSchema.const('baz').hidden(),\\n]).description('这个选择器中有一个禁用选项和一个隐藏选项。'),\\n}).description('配置项')\\n"},"headers":[],"relativePath":"ja-JP/schema/meta/hidden.md","filePath":"ja-JP/schema/meta/hidden.md"}`),e={name:"ja-JP/schema/meta/hidden.md"},o=t(`<h1 id="禁用与隐藏" tabindex="-1">禁用与隐藏 <a class="header-anchor" href="#禁用与隐藏" aria-label="Permalink to &quot;禁用与隐藏&quot;">​</a></h1><p><code>.disable()</code> 用于禁用某个配置项。禁用的配置项无法被用户编辑。<code>.hidden()</code> 用于隐藏某个配置项。隐藏的配置项不会呈现在表单中。但是它们仍然会参与类型检查。</p><p>许多应用会同时提供 API 和网页表单，而开发者可能不希望将全部配置项都提供给表单的填写者 (例如复杂的底层配置或者实验性设置)。在这种情况下，禁用或隐藏部分配置项将会是一个好的选择。</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:var(--shiki-token-keyword);">export</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">default</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">Schema</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">object</span><span style="color:var(--shiki-token-text);">({</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">foo</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">Schema</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">string</span><span style="color:var(--shiki-token-text);">().</span><span style="color:var(--shiki-token-function);">disabled</span><span style="color:var(--shiki-token-text);">(),</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">bar</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">Schema</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">number</span><span style="color:var(--shiki-token-text);">().</span><span style="color:var(--shiki-token-function);">hidden</span><span style="color:var(--shiki-token-text);">(),</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">choice</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">Schema</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">union</span><span style="color:var(--shiki-token-text);">([</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-constant);">Schema</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">const</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;foo&#39;</span><span style="color:var(--shiki-token-text);">),</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-constant);">Schema</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">const</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;bar&#39;</span><span style="color:var(--shiki-token-text);">).</span><span style="color:var(--shiki-token-function);">disabled</span><span style="color:var(--shiki-token-text);">(),</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-constant);">Schema</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">const</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;baz&#39;</span><span style="color:var(--shiki-token-text);">).</span><span style="color:var(--shiki-token-function);">hidden</span><span style="color:var(--shiki-token-text);">(),</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  ]),</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">})</span></span></code></pre></div>`,4),i=[o];function r(p,l,c,k,h,y){return a(),n("div",null,i)}const x=s(e,[["render",r]]);export{d as __pageData,x as default};
