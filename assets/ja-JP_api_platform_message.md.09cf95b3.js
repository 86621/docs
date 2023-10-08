import{_ as l,p as i,s as r,v as e,L as s,D as a,I as n,S as o,q as c}from"./chunks/framework.3f494197.js";const q=JSON.parse('{"title":"消息 (Message)","description":"","frontmatter":{},"headers":[],"relativePath":"ja-JP/api/platform/message.md","filePath":"ja-JP/api/platform/message.md"}'),d={name:"ja-JP/api/platform/message.md"},g=o(`<h1 id="消息" tabindex="-1">消息 (Message) <a class="header-anchor" href="#消息" aria-label="Permalink to &quot;消息 (Message)&quot;">​</a></h1><h2 id="类型定义" tabindex="-1">类型定义 <a class="header-anchor" href="#类型定义" aria-label="Permalink to &quot;类型定义&quot;">​</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:var(--shiki-token-keyword);">interface</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">Message</span><span style="color:var(--shiki-token-text);"> {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">isDirect</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">boolean</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">channelId</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">string</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">messageId</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">string</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">userId</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">string</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">content</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">string</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">timestamp</span><span style="color:var(--shiki-token-keyword);">?</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">number</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">}</span></span></code></pre></div><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="bot-sendmessage" tabindex="-1">bot.sendMessage(channelId, content, guildId?) <a class="header-anchor" href="#bot-sendmessage" aria-label="Permalink to &quot;bot.sendMessage(channelId, content, guildId?)&quot;">​</a></h3><ul><li><strong>channelId:</strong> <code>string</code> 频道 ID</li><li><strong>content:</strong> <code>Fragment</code> 要发送的内容</li><li><strong>guildId:</strong> <code>string</code> 群组 ID</li><li>返回值: <code>Promise&lt;string[]&gt;</code> 发送的消息 ID</li></ul><p>向特定频道发送消息。</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>只要你能够获取到会话对象，你就不应使用此 API，而应该使用 <code>session.send()</code>。一些平台会将主动发送的消息同被动接收后回复的消息区分开来，甚至可能限制主动消息的发送，因此使用 <code>session.send()</code> 总是有更好的可靠性。</p></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><code>bot.sendMessage()</code> 既可以发送群聊消息，也可以发送私聊消息。当发送私聊消息时，其与 <code>bot.sendPrivateMessage()</code> 的区别在于前者传入的是频道 ID，而后者传入的是用户 ID。</p></div><h3 id="bot-sendprivatemessage" tabindex="-1">bot.sendPrivateMessage(userId, content) <a class="header-anchor" href="#bot-sendprivatemessage" aria-label="Permalink to &quot;bot.sendPrivateMessage(userId, content)&quot;">​</a></h3><ul><li><strong>userId:</strong> <code>string</code> 对方 ID</li><li><strong>content:</strong> <code>Fragment</code> 要发送的内容</li><li>返回值: <code>Promise&lt;string[]&gt;</code> 发送的消息 ID</li></ul><p>向特定用户发送私聊消息。</p><h3 id="bot-getmessage" tabindex="-1">bot.getMessage(channelId, messageId) <a class="header-anchor" href="#bot-getmessage" aria-label="Permalink to &quot;bot.getMessage(channelId, messageId)&quot;">​</a></h3><ul><li><strong>channelId:</strong> <code>string</code> 频道 ID</li><li><strong>messageId:</strong> <code>string</code> 消息 ID</li><li>返回值: <code>Promise&lt;Message&gt;</code></li></ul><p>获取特定消息。</p><h3 id="bot-deletemessage" tabindex="-1">bot.deleteMessage(channelId, messageId) <a class="header-anchor" href="#bot-deletemessage" aria-label="Permalink to &quot;bot.deleteMessage(channelId, messageId)&quot;">​</a></h3><ul><li><strong>channelId:</strong> <code>string</code> 频道 ID</li><li><strong>messageId:</strong> <code>string</code> 消息 ID</li><li>返回值: <code>Promise&lt;void&gt;</code></li></ul><p>撤回特定消息。</p><h3 id="bot-editmessage" tabindex="-1">bot.editMessage(channelId, messageId, content) <a class="header-anchor" href="#bot-editmessage" aria-label="Permalink to &quot;bot.editMessage(channelId, messageId, content)&quot;">​</a></h3><ul><li><strong>channelId:</strong> <code>string</code> 频道 ID</li><li><strong>messageId:</strong> <code>string</code> 消息 ID</li><li><strong>content:</strong> <code>Fragment</code> 要发送的内容</li><li>返回值: <code>Promise&lt;void&gt;</code></li></ul><p>修改特定消息。</p><h3 id="bot-getmessagelist" tabindex="-1">bot.getMessageList(channelId, next?) <a class="header-anchor" href="#bot-getmessagelist" aria-label="Permalink to &quot;bot.getMessageList(channelId, next?)&quot;">​</a></h3><ul><li><strong>channelId:</strong> <code>string</code> 频道 ID</li><li><strong>next:</strong> <code>string</code> 分页令牌</li><li>返回值: <code>Promise&lt;List&lt;Message&gt;&gt;</code> 消息列表</li></ul><p>获取频道消息列表。</p>`,24),p={id:"bot-getmessageiter-内置",tabindex:"-1"},h=e("a",{class:"header-anchor",href:"#bot-getmessageiter-内置","aria-label":'Permalink to "bot.getMessageIter(channelId) <badge>内置</badge>"'},"​",-1),k=e("ul",null,[e("li",null,[e("strong",null,"channelId:"),s(),e("code",null,"string"),s(" 频道 ID")]),e("li",null,[s("返回值: "),e("code",null,"AsyncIterable<Message>"),s(" 异步迭代器")])],-1),m=e("p",null,"获取频道消息的异步迭代器。",-1),b={id:"bot-broadcast-内置",tabindex:"-1"},u=e("a",{class:"header-anchor",href:"#bot-broadcast-内置","aria-label":'Permalink to "bot.broadcast(channels, content, delay?) <badge>内置</badge>"'},"​",-1),I=o('<ul><li><strong>channels:</strong> <code>string[]</code> 频道列表</li><li><strong>content:</strong> <code>string</code> 要发送的内容</li><li><strong>delay:</strong> <code>number</code> 发送消息间的延迟，默认值为 <a href="./../core/app.html#options-delay"><code>config.delay.broadcast</code></a></li><li>返回值: <code>Promise&lt;string[]&gt;</code> 成功发送的消息 ID 列表</li></ul><p>向多个频道广播消息。如有失败不会抛出错误。</p>',2);function _(v,y,x,P,f,M){const t=i("badge");return c(),r("div",null,[g,e("h3",p,[s("bot.getMessageIter(channelId) "),a(t,null,{default:n(()=>[s("内置")]),_:1}),s(),h]),k,m,e("h3",b,[s("bot.broadcast(channels, content, delay?) "),a(t,null,{default:n(()=>[s("内置")]),_:1}),s(),u]),I])}const T=l(d,[["render",_]]);export{q as __pageData,T as default};
