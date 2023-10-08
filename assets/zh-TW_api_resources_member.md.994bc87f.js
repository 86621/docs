import{_ as i,p as l,s as n,v as t,L as e,D as s,I as r,S as o,q as d}from"./chunks/framework.26d7e063.js";const T=JSON.parse('{"title":"群组成员 (GuildMember)","description":"","frontmatter":{},"headers":[],"relativePath":"zh-TW/api/resources/member.md","filePath":"zh-TW/api/resources/member.md"}'),c={name:"zh-TW/api/resources/member.md"},u=o(`<h1 id="群组成员" tabindex="-1">群组成员 (GuildMember) <a class="header-anchor" href="#群组成员" aria-label="Permalink to &quot;群组成员 (GuildMember)&quot;">​</a></h1><h2 id="类型定义" tabindex="-1">类型定义 <a class="header-anchor" href="#类型定义" aria-label="Permalink to &quot;类型定义&quot;">​</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:var(--shiki-token-keyword);">interface</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">GuildMember</span><span style="color:var(--shiki-token-text);"> {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">user</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">User</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">name</span><span style="color:var(--shiki-token-keyword);">?</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">string</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">avatar</span><span style="color:var(--shiki-token-keyword);">?</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">string</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">joinedAt</span><span style="color:var(--shiki-token-keyword);">?</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">number</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">}</span></span></code></pre></div><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="bot-getguildmember" tabindex="-1">bot.getGuildMember(guildId, userId) <a class="header-anchor" href="#bot-getguildmember" aria-label="Permalink to &quot;bot.getGuildMember(guildId, userId)&quot;">​</a></h3><ul><li><strong>guildId:</strong> <code>string</code> 群组 ID</li><li><strong>userId:</strong> <code>string</code> 用户 ID</li><li>返回值: <code>Promise&lt;GuildMember&gt;</code> 群成员信息</li></ul><p>获取群成员信息。</p><h3 id="bot-getguildmemberlist" tabindex="-1">bot.getGuildMemberList(guildId, next?) <a class="header-anchor" href="#bot-getguildmemberlist" aria-label="Permalink to &quot;bot.getGuildMemberList(guildId, next?)&quot;">​</a></h3><ul><li><strong>guildId:</strong> <code>string</code> 群组 ID</li><li><strong>next:</strong> <code>string</code> 分页令牌</li><li>返回值: <code>Promise&lt;List&lt;GuildMember&gt;&gt;</code> 群成员列表</li></ul><p>获取群成员列表。</p>`,10),m={id:"bot-getguildmemberiter-内置",tabindex:"-1"},g=t("a",{class:"header-anchor",href:"#bot-getguildmemberiter-内置","aria-label":'Permalink to "bot.getGuildMemberIter(guildId) <badge>内置</badge>"'},"​",-1),p=o('<ul><li><strong>guildId:</strong> <code>string</code> 群组 ID</li><li>返回值: <code>AsyncIterable&lt;GuildMember&gt;</code> 异步迭代器</li></ul><p>获取群成员列表的异步迭代器。</p><h3 id="bot-kickguildmember" tabindex="-1">bot.kickGuildMember(guildId, userId, permanent?) <a class="header-anchor" href="#bot-kickguildmember" aria-label="Permalink to &quot;bot.kickGuildMember(guildId, userId, permanent?)&quot;">​</a></h3><ul><li><strong>guildId:</strong> <code>string</code> 群组 ID</li><li><strong>userId:</strong> <code>string</code> 用户 ID</li><li><strong>permanent:</strong> <code>boolean</code> 是否永久踢出 (用户无法再次加入群组)</li><li>返回值: <code>Promise&lt;void&gt;</code></li></ul><p>将某个用户踢出群组。</p>',5),b={id:"bot-muteguildmember-实验性",tabindex:"-1"},h=t("a",{class:"header-anchor",href:"#bot-muteguildmember-实验性","aria-label":'Permalink to "bot.muteGuildMember(guildId, userId, duration?, reason?) <badge type="warning">实验性</badge>"'},"​",-1),k=o('<ul><li><strong>guildId:</strong> <code>string</code> 群组 ID</li><li><strong>userId:</strong> <code>string</code> 用户 ID</li><li><strong>duration:</strong> <code>number</code> 禁言时长 (毫秒)</li><li><strong>reason:</strong> <code>string</code> 禁言说明</li><li>返回值: <code>Promise&lt;void&gt;</code></li></ul><p>将某个用户禁言。如果传入的禁言时长为 <code>0</code> 则表示解除禁言。</p><h3 id="bot-handleguildmemberrequest" tabindex="-1">bot.handleGuildMemberRequest(messageId, approve, comment?) <a class="header-anchor" href="#bot-handleguildmemberrequest" aria-label="Permalink to &quot;bot.handleGuildMemberRequest(messageId, approve, comment?)&quot;">​</a></h3><ul><li><strong>messageId:</strong> <code>string</code> 请求 ID</li><li><strong>approve:</strong> <code>boolean</code> 是否通过请求</li><li><strong>comment:</strong> <code>string</code> 备注信息</li><li>返回值: <code>Promise&lt;void&gt;</code></li></ul><p>处理加群请求。</p><h2 id="事件" tabindex="-1">事件 <a class="header-anchor" href="#事件" aria-label="Permalink to &quot;事件&quot;">​</a></h2><h3 id="guild-member-added" tabindex="-1">guild-member-added <a class="header-anchor" href="#guild-member-added" aria-label="Permalink to &quot;guild-member-added&quot;">​</a></h3><ul><li><strong>session:</strong> <code>Session</code> 会话对象</li><li>触发方式: emit</li></ul><p>新成员加入群组时触发。</p><h3 id="guild-member-updated" tabindex="-1">guild-member-updated <a class="header-anchor" href="#guild-member-updated" aria-label="Permalink to &quot;guild-member-updated&quot;">​</a></h3><ul><li><strong>session:</strong> <code>Session</code> 会话对象</li><li>触发方式: emit</li></ul><p>群组成员信息更新时触发。</p><h3 id="guild-member-removed" tabindex="-1">guild-member-removed <a class="header-anchor" href="#guild-member-removed" aria-label="Permalink to &quot;guild-member-removed&quot;">​</a></h3><ul><li><strong>session:</strong> <code>Session</code> 会话对象</li><li>触发方式: emit</li></ul><p>群组成员退出群组时触发。</p><h3 id="guild-member-request" tabindex="-1">guild-member-request <a class="header-anchor" href="#guild-member-request" aria-label="Permalink to &quot;guild-member-request&quot;">​</a></h3><ul><li><strong>session:</strong> <code>Session</code> 会话对象</li><li>触发方式: emit</li></ul><p>接收到新的加群请求时触发。</p>',18);function _(I,v,q,x,y,P){const a=l("badge");return d(),n("div",null,[u,t("h3",m,[e("bot.getGuildMemberIter(guildId) "),s(a,null,{default:r(()=>[e("内置")]),_:1}),e(),g]),p,t("h3",b,[e("bot.muteGuildMember(guildId, userId, duration?, reason?) "),s(a,{type:"warning"},{default:r(()=>[e("实验性")]),_:1}),e(),h]),k])}const G=i(c,[["render",_]]);export{T as __pageData,G as default};
