import{_ as s,s as n,q as a,S as e}from"./chunks/framework.3f494197.js";const d=JSON.parse(`{"title":"Union：配置聯動 1","description":"","frontmatter":{"layout":"schema","code":"Schema.intersect([\\nSchema.object({\\nenabled: Schema.boolean().default(false).description('是否开启功能'),\\n}).description('基础配置'),\\nSchema.union([\\nSchema.object({\\nenabled: Schema.const(true).required(),\\nfoo: Schema.number().description('请输入一个数值。'),\\nbar: Schema.string().description('请输入一个字符串。'),\\n}),\\nSchema.object({}),\\n]),\\n])\\n"},"headers":[],"relativePath":"zh-TW/schema/advanced/union-tagged-1.md","filePath":"zh-TW/schema/advanced/union-tagged-1.md"}`),t={name:"zh-TW/schema/advanced/union-tagged-1.md"},o=e(`<h1 id="union-配置聯動-1" tabindex="-1">Union：配置聯動 1 <a class="header-anchor" href="#union-配置聯動-1" aria-label="Permalink to &quot;Union：配置聯動 1&quot;">​</a></h1><p>一种比较复杂的场景是以对象的某个属性值确定对象的其他属性的类型。善用 Intersect 和 Union，我们就可以轻松实现表单项的联动效果！试着切换 <code>enabled</code> 的取值，并观察下方表单项的变化吧。</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:var(--shiki-token-keyword);">export</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">default</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">Schema</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">intersect</span><span style="color:var(--shiki-token-text);">([</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-constant);">Schema</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">object</span><span style="color:var(--shiki-token-text);">({</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-parameter);">enabled</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">Schema</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">boolean</span><span style="color:var(--shiki-token-text);">().</span><span style="color:var(--shiki-token-function);">default</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-number);">false</span><span style="color:var(--shiki-token-text);">),</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  }).</span><span style="color:var(--shiki-token-function);">description</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;基础配置&#39;</span><span style="color:var(--shiki-token-text);">),</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-constant);">Schema</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">union</span><span style="color:var(--shiki-token-text);">([</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-constant);">Schema</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">object</span><span style="color:var(--shiki-token-text);">({</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">      </span><span style="color:var(--shiki-token-parameter);">enabled</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">Schema</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">const</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-number);">true</span><span style="color:var(--shiki-token-text);">).</span><span style="color:var(--shiki-token-function);">required</span><span style="color:var(--shiki-token-text);">(),</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">      </span><span style="color:var(--shiki-token-parameter);">foo</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">Schema</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">number</span><span style="color:var(--shiki-token-text);">().</span><span style="color:var(--shiki-token-function);">description</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;请输入一个数值。&#39;</span><span style="color:var(--shiki-token-text);">),</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">      </span><span style="color:var(--shiki-token-parameter);">bar</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">Schema</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">string</span><span style="color:var(--shiki-token-text);">().</span><span style="color:var(--shiki-token-function);">description</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;请输入一个字符串。&#39;</span><span style="color:var(--shiki-token-text);">),</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    }),</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-constant);">Schema</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">object</span><span style="color:var(--shiki-token-text);">({}),</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  ])</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">])</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>请注意这个例子中对于 <code>default()</code> 和 <code>required()</code> 的使用。由于配置项默认情况下都是可选的，所以下方的 <code>enabled</code> 如果类型与上方的默认值不同，就必须加上 <code>required()</code>；反过来，如果相同，你就不应该加上 <code>required()</code> (你甚至可以缺省不写，这就是为什么最下面出现了一个空白的 <code>object({})</code>)。</p></div>`,4),i=[o];function r(l,p,c,k,h,v){return a(),n("div",null,i)}const x=s(t,[["render",r]]);export{d as __pageData,x as default};
