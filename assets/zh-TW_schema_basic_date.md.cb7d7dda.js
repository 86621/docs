import{_ as s,s as t,q as a,S as e}from"./chunks/framework.26d7e063.js";const y=JSON.parse(`{"title":"Date","description":"","frontmatter":{"layout":"schema","code":"Schema.object({\\nvalue: Schema.date().description('选择日期与时间 (对象)。'),\\ndatetime: Schema.string().role('datetime').description('选择日期与时间 (字符串)。'),\\ndate: Schema.string().role('date').description('选择日期 (字符串)。'),\\ntime: Schema.string().role('time').description('选择时间 (字符串)。'),\\n}).description('配置项')\\n"},"headers":[],"relativePath":"zh-TW/schema/basic/date.md","filePath":"zh-TW/schema/basic/date.md"}`),n={name:"zh-TW/schema/basic/date.md"},o=e(`<h1 id="date" tabindex="-1">Date <a class="header-anchor" href="#date" aria-label="Permalink to &quot;Date&quot;">​</a></h1><p>由于 Date 不便于序列化，我们提供了两套描述 Date 的方式：</p><ul><li>使用 Date 类型：输入字符串，输出 Date 实例</li><li>使用 String 类型与三种可选的 <code>role</code> 属性</li></ul><p>其中，Date 类型与 <code>datetime</code> 的前端体验是完全一致的，唯一区别在于输出的格式不同。字符串额外多出 <code>date</code> 和 <code>time</code> 两种格式，用于表达纯日期和纯时间字符串。</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:var(--shiki-token-keyword);">export</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">default</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">Schema</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">object</span><span style="color:var(--shiki-token-text);">({</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">value</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">Schema</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">date</span><span style="color:var(--shiki-token-text);">(),</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">datetime</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">Schema</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">string</span><span style="color:var(--shiki-token-text);">().</span><span style="color:var(--shiki-token-function);">role</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;datetime&#39;</span><span style="color:var(--shiki-token-text);">),</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">date</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">Schema</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">string</span><span style="color:var(--shiki-token-text);">().</span><span style="color:var(--shiki-token-function);">role</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;date&#39;</span><span style="color:var(--shiki-token-text);">),</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">time</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">Schema</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">string</span><span style="color:var(--shiki-token-text);">().</span><span style="color:var(--shiki-token-function);">role</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;time&#39;</span><span style="color:var(--shiki-token-text);">),</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">})</span></span></code></pre></div>`,5),i=[o];function r(l,p,c,k,h,d){return a(),t("div",null,i)}const m=s(n,[["render",r]]);export{y as __pageData,m as default};
