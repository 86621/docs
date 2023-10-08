import{_ as s,s as a,q as e,S as n}from"./chunks/framework.26d7e063.js";const y=JSON.parse('{"title":"登录状态 (Login)","description":"","frontmatter":{},"headers":[],"relativePath":"de-DE/api/resources/login.md","filePath":"de-DE/api/resources/login.md"}'),o={name:"de-DE/api/resources/login.md"},t=n(`<h1 id="登录状态" tabindex="-1">登录状态 (Login) <a class="header-anchor" href="#登录状态" aria-label="Permalink to &quot;登录状态 (Login)&quot;">​</a></h1><h2 id="类型定义" tabindex="-1">类型定义 <a class="header-anchor" href="#类型定义" aria-label="Permalink to &quot;类型定义&quot;">​</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:var(--shiki-token-keyword);">interface</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">Login</span><span style="color:var(--shiki-token-text);"> {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">user</span><span style="color:var(--shiki-token-keyword);">?</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">User</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">status</span><span style="color:var(--shiki-token-keyword);">?</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">Status</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">enum</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">Status</span><span style="color:var(--shiki-token-text);"> {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">OFFLINE</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-operator);">=</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-number);">0</span><span style="color:var(--shiki-token-text);">,</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">ONLINE</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-operator);">=</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-number);">1</span><span style="color:var(--shiki-token-text);">,</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">CONNECT</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-operator);">=</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-number);">2</span><span style="color:var(--shiki-token-text);">,</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">DISCONNECT</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-operator);">=</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-number);">3</span><span style="color:var(--shiki-token-text);">,</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">RECONECT</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-operator);">=</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-number);">4</span><span style="color:var(--shiki-token-text);">,</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">}</span></span></code></pre></div><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="bot-getlogin" tabindex="-1">bot.getLogin() <a class="header-anchor" href="#bot-getlogin" aria-label="Permalink to &quot;bot.getLogin()&quot;">​</a></h3><ul><li>返回值: <code>Promise&lt;Login&gt;</code> 登录信息</li></ul><p>获取登录状态。</p><h2 id="事件" tabindex="-1">事件 <a class="header-anchor" href="#事件" aria-label="Permalink to &quot;事件&quot;">​</a></h2><h3 id="login-added" tabindex="-1">login-added <a class="header-anchor" href="#login-added" aria-label="Permalink to &quot;login-added&quot;">​</a></h3><ul><li><strong>session:</strong> <code>Session</code> 会话对象</li><li>触发方式: emit</li></ul><p>登录被创建时触发。</p><h3 id="login-removed" tabindex="-1">login-removed <a class="header-anchor" href="#login-removed" aria-label="Permalink to &quot;login-removed&quot;">​</a></h3><ul><li><strong>session:</strong> <code>Session</code> 会话对象</li><li>触发方式: emit</li></ul><p>登录被移除时触发。</p><h3 id="login-updated" tabindex="-1">login-updated <a class="header-anchor" href="#login-updated" aria-label="Permalink to &quot;login-updated&quot;">​</a></h3><ul><li><strong>session:</strong> <code>Session</code> 会话对象</li><li>触发方式: emit</li></ul><p>登录状态更新时触发。</p>`,17),i=[t];function r(l,p,k,c,h,d){return e(),a("div",null,i)}const u=s(o,[["render",r]]);export{y as __pageData,u as default};
