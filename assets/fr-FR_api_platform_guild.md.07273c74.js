import{_ as s,p as l,s as i,v as t,L as e,D as n,I as r,S as a,q as d}from"./chunks/framework.26d7e063.js";const I=JSON.parse('{"title":"群组 (Guild)","description":"","frontmatter":{},"headers":[],"relativePath":"fr-FR/api/platform/guild.md","filePath":"fr-FR/api/platform/guild.md"}'),c={name:"fr-FR/api/platform/guild.md"},p=a(`<h1 id="群组" tabindex="-1">群组 (Guild) <a class="header-anchor" href="#群组" aria-label="Permalink to &quot;群组 (Guild)&quot;">​</a></h1><h2 id="类型定义" tabindex="-1">类型定义 <a class="header-anchor" href="#类型定义" aria-label="Permalink to &quot;类型定义&quot;">​</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:var(--shiki-token-keyword);">export</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">interface</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">Guild</span><span style="color:var(--shiki-token-text);"> {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">id</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">string</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">name</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">string</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">}</span></span></code></pre></div><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="bot-getguild" tabindex="-1">bot.getGuild(guildId) <a class="header-anchor" href="#bot-getguild" aria-label="Permalink to &quot;bot.getGuild(guildId)&quot;">​</a></h3><ul><li><strong>guildId:</strong> <code>string</code> 群组 ID</li><li>返回值: <code>Promise&lt;Guild&gt;</code> 群组信息</li></ul><p>获取群组信息。</p><h3 id="bot-getguildlist" tabindex="-1">bot.getGuildList(next?) <a class="header-anchor" href="#bot-getguildlist" aria-label="Permalink to &quot;bot.getGuildList(next?)&quot;">​</a></h3><ul><li><strong>next:</strong> <code>string</code> 分页令牌</li><li>返回值: <code>Promise&lt;List&lt;Guild&gt;&gt;</code> 群组列表</li></ul><p>获取机器人加入的群组列表。</p>`,10),u={id:"bot-getguilditer-内置",tabindex:"-1"},h=t("a",{class:"header-anchor",href:"#bot-getguilditer-内置","aria-label":'Permalink to "bot.getGuildIter() <badge>内置</badge>"'},"​",-1),g=a('<ul><li>返回值: <code>AsyncIterable&lt;Guild&gt;</code> 异步迭代器</li></ul><p>获取机器人加入的群组列表的异步迭代器。</p><h3 id="bot-handleguildrequest" tabindex="-1">bot.handleGuildRequest(messageId, approve, comment?) <a class="header-anchor" href="#bot-handleguildrequest" aria-label="Permalink to &quot;bot.handleGuildRequest(messageId, approve, comment?)&quot;">​</a></h3><ul><li><strong>messageId:</strong> <code>string</code> 请求 ID</li><li><strong>approve:</strong> <code>boolean</code> 是否通过请求</li><li><strong>comment:</strong> <code>string</code> 备注信息</li><li>返回值: <code>Promise&lt;void&gt;</code></li></ul><p>处理来自群组的邀请。</p>',5);function _(k,b,m,v,x,f){const o=l("badge");return d(),i("div",null,[p,t("h3",u,[e("bot.getGuildIter() "),n(o,null,{default:r(()=>[e("内置")]),_:1}),e(),h]),g])}const P=s(c,[["render",_]]);export{I as __pageData,P as default};
