import{_ as p,p as a,s as i,D as n,I as e,S as t,q as r,v as s}from"./chunks/framework.3f494197.js";const T=JSON.parse('{"title":"使用预设模板","description":"","frontmatter":{},"headers":[],"relativePath":"ja-JP/guide/i18n/presets.md","filePath":"ja-JP/guide/i18n/presets.md"}'),c={name:"ja-JP/guide/i18n/presets.md"},k=t(`<h1 id="使用预设模板" tabindex="-1">使用预设模板 <a class="header-anchor" href="#使用预设模板" aria-label="Permalink to &quot;使用预设模板&quot;">​</a></h1><h2 id="处理单复数" tabindex="-1">处理单复数 <a class="header-anchor" href="#处理单复数" aria-label="Permalink to &quot;处理单复数&quot;">​</a></h2><p>在实际应用中，我们可能要根据某个数值改变输出的结果。让我们看一个简单的例子：</p><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre><code><span class="line"><span style="color:var(--shiki-token-parameter);">apple@plural</span><span style="color:var(--shiki-token-text);">:</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  - </span><span style="color:var(--shiki-token-string);">You have no apples</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  - </span><span style="color:var(--shiki-token-string);">You have one apple</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  - </span><span style="color:var(--shiki-token-string);">You have {length} apples</span></span></code></pre></div><p>如你所见，我们使用 <code>@plural</code> 为 apple 指定了一个预设模板。这个预设模板会在运行时按照其特有的逻辑来渲染：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:var(--shiki-token-constant);">session</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">text</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;apples&#39;</span><span style="color:var(--shiki-token-text);">, [])              </span><span style="color:#7F848E;font-style:italic;">// You have no apples</span></span>
<span class="line"><span style="color:var(--shiki-token-constant);">session</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">text</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;apples&#39;</span><span style="color:var(--shiki-token-text);">, [</span><span style="color:var(--shiki-token-keyword);">new</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-function);">Apple</span><span style="color:var(--shiki-token-text);">()])   </span><span style="color:#7F848E;font-style:italic;">// You have one apple</span></span>
<span class="line"><span style="color:var(--shiki-token-constant);">session</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">text</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;apples&#39;</span><span style="color:var(--shiki-token-text);">, { </span><span style="color:var(--shiki-token-parameter);">length</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-number);">2</span><span style="color:var(--shiki-token-text);"> })   </span><span style="color:#7F848E;font-style:italic;">// You have 2 apples</span></span></code></pre></div><h2 id="列表渲染" tabindex="-1">列表渲染 <a class="header-anchor" href="#列表渲染" aria-label="Permalink to &quot;列表渲染&quot;">​</a></h2><p><code>@list</code> 预设模板可以用来渲染列表或对象：</p><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre><code><span class="line"><span style="color:var(--shiki-token-parameter);">rank@list</span><span style="color:var(--shiki-token-text);">:</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">header</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-string);">当前排名如下：</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">item</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-string);">&#39;第 {key} 名：{value}&#39;</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">footer</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-string);">要查看特定结果，请使用 --all 选项。</span></span></code></pre></div><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:var(--shiki-token-constant);">session</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">text</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;rank&#39;</span><span style="color:var(--shiki-token-text);">, [</span><span style="color:var(--shiki-token-string);">&#39;foo&#39;</span><span style="color:var(--shiki-token-text);">, </span><span style="color:var(--shiki-token-string);">&#39;bar&#39;</span><span style="color:var(--shiki-token-text);">])</span></span></code></pre></div>`,10),h=s("p",null,"当前排名如下：",-1),y=s("p",null,"第 1 名：foo",-1),v=s("p",null,"第 2 名：bar",-1),d=s("p",null,"要查看更多结果，请使用 --all 选项。",-1),_=t(`<h2 id="随机渲染" tabindex="-1">随机渲染 <a class="header-anchor" href="#随机渲染" aria-label="Permalink to &quot;随机渲染&quot;">​</a></h2><p><code>@random</code> 预设会在运行时随机选择一个结果：</p><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre><code><span class="line"><span style="color:var(--shiki-token-parameter);">not-found@random</span><span style="color:var(--shiki-token-text);">:</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  - </span><span style="color:var(--shiki-token-string);">魔理沙偷走了重要的东西。</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  - </span><span style="color:var(--shiki-token-string);">此条目纯属虚构，包含的内容已遁入幻想。</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  - </span><span style="color:var(--shiki-token-string);">没有相关结果。您要找的是不是：蕾米莉亚的威严？</span></span></code></pre></div>`,3);function u(x,g,m,f,b,C){const o=a("chat-message"),l=a("chat-panel");return r(),i("div",null,[k,n(l,null,{default:e(()=>[n(o,{nickname:"Koishi"},{default:e(()=>[h,y,v,d]),_:1})]),_:1}),_])}const q=p(c,[["render",u]]);export{T as __pageData,q as default};
