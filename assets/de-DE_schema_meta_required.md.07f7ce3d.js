import{_ as s,s as e,q as a,S as t}from"./chunks/framework.3f494197.js";const v=JSON.parse(`{"title":"必需与可选","description":"","frontmatter":{"layout":"schema","code":"Schema.object({\\nfoo: Schema.boolean().description('这是一个可选属性。'),\\nbar: Schema.string().required().description('这是一个必需属性。'),\\n}).description('配置项')\\n"},"headers":[],"relativePath":"de-DE/schema/meta/required.md","filePath":"de-DE/schema/meta/required.md"}`),n={name:"de-DE/schema/meta/required.md"},o=t(`<h1 id="必需与可选" tabindex="-1">必需与可选 <a class="header-anchor" href="#必需与可选" aria-label="Permalink to &quot;必需与可选&quot;">​</a></h1><p>默认情况下，所有配置项都是可选的。你可以通过 <code>.required()</code> 来声明一个必需的配置项。未配置的必需配置项的左侧会出现红色的提示线。</p><p>请注意：对于字符串等原始类型，空串和未配置是两个不同的概念。你可以通过控件中央的水平线来进行区分。</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:var(--shiki-token-keyword);">export</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">default</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">Schema</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">object</span><span style="color:var(--shiki-token-text);">({</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">foo</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">Schema</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">boolean</span><span style="color:var(--shiki-token-text);">(),</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">bar</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">Schema</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">string</span><span style="color:var(--shiki-token-text);">().</span><span style="color:var(--shiki-token-function);">required</span><span style="color:var(--shiki-token-text);">(),</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">})</span></span></code></pre></div>`,4),r=[o];function i(p,l,c,k,h,d){return a(),e("div",null,r)}const _=s(n,[["render",i]]);export{v as __pageData,_ as default};
