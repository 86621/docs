import{_ as s,s as n,q as t,S as a}from"./chunks/framework.26d7e063.js";const x=JSON.parse('{"title":"会话过滤器","description":"","frontmatter":{},"headers":[],"relativePath":"ru-RU/guide/plugin/selector.md","filePath":"ru-RU/guide/plugin/selector.md"}'),o={name:"ru-RU/guide/plugin/selector.md"},e=a(`<h1 id="会话过滤器" tabindex="-1">会话过滤器 <a class="header-anchor" href="#会话过滤器" aria-label="Permalink to &quot;会话过滤器&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>请不要滥用这项功能，在源码中直接书写账号或群号以实现过滤，这将导致其他用户无法使用你的插件。推荐在控制台中使用过滤器。</p></div><p>一个 <strong>上下文 (Context)</strong> 描述了机器人的一种可能的运行环境。例如，如果一个指令或中间件被绑定在了上面例子中的上下文，那么只有该环境下的事件才会触发对应的回调函数。之前介绍过的 <code>ctx.on()</code>, <code>ctx.middleware()</code> 以及 <code>ctx.plugin()</code> 这些 API 都是上下文类所提供的方法。</p><h2 id="属性选择器" tabindex="-1">属性选择器 <a class="header-anchor" href="#属性选择器" aria-label="Permalink to &quot;属性选择器&quot;">​</a></h2><p>我们可以通过 <strong>属性选择器 (Attribute Selector)</strong> 来快速创建新的上下文：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">user</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;112233&#39;</span><span style="color:var(--shiki-token-text);">)                  </span><span style="color:#7F848E;font-style:italic;">// 选择来自用户 112233 的会话</span></span>
<span class="line"><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">self</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;112233&#39;</span><span style="color:var(--shiki-token-text);">)                  </span><span style="color:#7F848E;font-style:italic;">// 选择发送给机器人 112233 的会话</span></span>
<span class="line"><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">guild</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;445566&#39;</span><span style="color:var(--shiki-token-text);">)                 </span><span style="color:#7F848E;font-style:italic;">// 选择来自群组 445566 的会话</span></span>
<span class="line"><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">channel</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;778899&#39;</span><span style="color:var(--shiki-token-text);">)               </span><span style="color:#7F848E;font-style:italic;">// 选择来自频道 778899 的会话</span></span>
<span class="line"><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">platform</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;discord&#39;</span><span style="color:var(--shiki-token-text);">)             </span><span style="color:#7F848E;font-style:italic;">// 选择来自平台 discord 的会话</span></span></code></pre></div><p>这种写法也支持链式的调用：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#7F848E;font-style:italic;">// 选择来自平台 discord 中用户 112233 的会话</span></span>
<span class="line"><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">platform</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;discord&#39;</span><span style="color:var(--shiki-token-text);">).</span><span style="color:var(--shiki-token-function);">user</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;112233&#39;</span><span style="color:var(--shiki-token-text);">)</span></span></code></pre></div><p>利用上下文，你可以非常方便地对每个环境进行分别配置：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#7F848E;font-style:italic;">// 在所有环境注册中间件</span></span>
<span class="line"><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">middleware</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-parameter);">callback</span><span style="color:var(--shiki-token-text);">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 注册指令 my-command，仅对机器人 112233 有效</span></span>
<span class="line"><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">self</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;112233&#39;</span><span style="color:var(--shiki-token-text);">).</span><span style="color:var(--shiki-token-function);">command</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;my-command&#39;</span><span style="color:var(--shiki-token-text);">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 当有人申请加群 445566 时触发 listener</span></span>
<span class="line"><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">guild</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;445566&#39;</span><span style="color:var(--shiki-token-text);">).</span><span style="color:var(--shiki-token-function);">on</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;guild-request&#39;</span><span style="color:var(--shiki-token-text);">, </span><span style="color:var(--shiki-token-parameter);">listener</span><span style="color:var(--shiki-token-text);">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 安装插件 ./my-plugin，仅限 OneBot 平台使用</span></span>
<span class="line"><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">platform</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;onebot&#39;</span><span style="color:var(--shiki-token-text);">).</span><span style="color:var(--shiki-token-function);">plugin</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-function);">require</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;./my-plugin&#39;</span><span style="color:var(--shiki-token-text);">))</span></span></code></pre></div><p>是不是非常方便呢？</p><h2 id="条件选择器" tabindex="-1">条件选择器 <a class="header-anchor" href="#条件选择器" aria-label="Permalink to &quot;条件选择器&quot;">​</a></h2><p>如果感觉简单的会话过滤器无法满足你的需求，你也可以给一个上下文添加 <strong>条件选择器 (Condition Selector)</strong>：它传入一个会话对象，并返回一个布尔类型。过滤器有三种添加方式：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#7F848E;font-style:italic;">// 满足当前上下文条件，且消息内容为“啦啦啦”</span></span>
<span class="line"><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">intersect</span><span style="color:var(--shiki-token-text);">(</span><span style="color:#E06C75;font-style:italic;">session</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">=&gt;</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">session</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-parameter);">content</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-operator);">===</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">&#39;啦啦啦&#39;</span><span style="color:var(--shiki-token-text);">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 满足当前上下文条件，或消息内容为“啦啦啦”</span></span>
<span class="line"><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">union</span><span style="color:var(--shiki-token-text);">(</span><span style="color:#E06C75;font-style:italic;">session</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">=&gt;</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">session</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-parameter);">content</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-operator);">===</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">&#39;啦啦啦&#39;</span><span style="color:var(--shiki-token-text);">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 满足当前上下文条件，且消息内容不为“啦啦啦”</span></span>
<span class="line"><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">exclude</span><span style="color:var(--shiki-token-text);">(</span><span style="color:#E06C75;font-style:italic;">session</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">=&gt;</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">session</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-parameter);">content</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-operator);">===</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">&#39;啦啦啦&#39;</span><span style="color:var(--shiki-token-text);">)</span></span></code></pre></div><p>上述方法也可以传入一个上下文作为参数，分别表示两个上下文的交集、并集和差集：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#7F848E;font-style:italic;">// 选择来自群组 1122233 和用户 445566 的会话</span></span>
<span class="line"><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">guild</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;112233&#39;</span><span style="color:var(--shiki-token-text);">).</span><span style="color:var(--shiki-token-function);">intersect</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">user</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;445566&#39;</span><span style="color:var(--shiki-token-text);">))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 选择来自群组 1122233 或用户 445566 的会话</span></span>
<span class="line"><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">guild</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;112233&#39;</span><span style="color:var(--shiki-token-text);">).</span><span style="color:var(--shiki-token-function);">union</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">user</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;445566&#39;</span><span style="color:var(--shiki-token-text);">))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 选择来自群组 1122233 的会话，但来自用户 445566 的会话除外</span></span>
<span class="line"><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">guild</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;112233&#39;</span><span style="color:var(--shiki-token-text);">).</span><span style="color:var(--shiki-token-function);">exclude</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">user</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;445566&#39;</span><span style="color:var(--shiki-token-text);">))</span></span></code></pre></div><p>与选择器方法类似，过滤器方法也会返回一个新的上下文，你可以在其上自由的添加监听器、中间件、指令和插件。</p>`,17),l=[e];function i(p,r,c,k,y,h){return t(),n("div",null,l)}const u=s(o,[["render",i]]);export{x as __pageData,u as default};
