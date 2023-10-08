import{_ as s,s as n,q as t,S as a}from"./chunks/framework.3f494197.js";const d=JSON.parse(`{"title":"Intersect：分组","description":"","frontmatter":{"layout":"schema","code":"Schema.intersect([\\n  Schema.object({\\n    foo: Schema.number().description('这是一个属性。'),\\n    bar: Schema.string().description('这是另一个属性。'),\\n  }).description('分组 1'),\\n  Schema.object({\\n    baz: Schema.string().description('这是又一个属性。'),\\n    qux: Schema.boolean().description('这是最后一个属性。'),\\n  }).description('分组 2'),\\n])\\n"},"headers":[],"relativePath":"zh-CN/schema/advanced/intersect.md","filePath":"zh-CN/schema/advanced/intersect.md"}`),e={name:"zh-CN/schema/advanced/intersect.md"},o=a(`<h1 id="intersect-分组" tabindex="-1">Intersect：分组 <a class="header-anchor" href="#intersect-分组" aria-label="Permalink to &quot;Intersect：分组&quot;">​</a></h1><p>Intersect 类型可用于合并多个类型。一种最常见的用法是将配置项分为多组显示。</p><p>使用 <code>.collapse()</code> 可以将分组默认折叠为一个单独的配置项。</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:var(--shiki-token-keyword);">export</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">default</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">Schema</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">intersect</span><span style="color:var(--shiki-token-text);">([</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-constant);">Schema</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">object</span><span style="color:var(--shiki-token-text);">({</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-parameter);">foo</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">Schema</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">number</span><span style="color:var(--shiki-token-text);">(),</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-parameter);">bar</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">Schema</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">string</span><span style="color:var(--shiki-token-text);">(),</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  }).</span><span style="color:var(--shiki-token-function);">description</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;分组 1&#39;</span><span style="color:var(--shiki-token-text);">),</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-constant);">Schema</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">object</span><span style="color:var(--shiki-token-text);">({</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-parameter);">baz</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">Schema</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">string</span><span style="color:var(--shiki-token-text);">(),</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-parameter);">qux</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">Schema</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">boolean</span><span style="color:var(--shiki-token-text);">(),</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  }).</span><span style="color:var(--shiki-token-function);">description</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;分组 2&#39;</span><span style="color:var(--shiki-token-text);">),</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">])</span></span></code></pre></div>`,4),i=[o];function r(p,l,c,k,h,v){return t(),n("div",null,i)}const x=s(e,[["render",r]]);export{d as __pageData,x as default};
