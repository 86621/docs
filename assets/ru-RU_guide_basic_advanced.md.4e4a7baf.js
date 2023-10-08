import{_ as s,s as a,q as n,S as t}from"./chunks/framework.26d7e063.js";const d=JSON.parse('{"title":"进阶用法","description":"","frontmatter":{},"headers":[],"relativePath":"ru-RU/guide/basic/advanced.md","filePath":"ru-RU/guide/basic/advanced.md"}'),o={name:"ru-RU/guide/basic/advanced.md"},e=t(`<h1 id="进阶用法" tabindex="-1">进阶用法 <a class="header-anchor" href="#进阶用法" aria-label="Permalink to &quot;进阶用法&quot;">​</a></h1><p>在前面的几节中，我们已经了解了基础的交互概念。以他们为基础，Koishi 提供了一些进阶的用法，用于处理真实应用场景中的交互需求。</p><h2 id="机器人对象" tabindex="-1">机器人对象 <a class="header-anchor" href="#机器人对象" aria-label="Permalink to &quot;机器人对象&quot;">​</a></h2><p>我们通常将机器人做出的交互行为分为两种：主动交互和被动交互。<strong>主动交互</strong>是指机器人主动进行某些操作，而<strong>被动交互</strong>则是指机器人接收到特定事件后做出的响应。一个机器人的大部分交互都应该是被动的，而主动交互则可用于一些特殊情况，比如定时任务、通知推送等。</p><p>Koishi 提供的交互性 API 可能存在于 <code>ctx</code>，<code>session</code> 和 <code>bot</code> 三种对象中。其中，上下文对象 <code>ctx</code> 可以在插件参数中取得，会话对象 <code>session</code> 可以在被动交互中取得，而机器人对象 <code>bot</code> 则可以从上述两个对象中访问到：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#7F848E;font-style:italic;">// 从 session 中访问 bot</span></span>
<span class="line"><span style="color:var(--shiki-token-constant);">session</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-parameter);">bot</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 从 ctx 中访问 bot，其中 platform 和 selfId 分别是平台名称和机器人 ID</span></span>
<span class="line"><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-parameter);">bots</span><span style="color:var(--shiki-token-text);">[</span><span style="color:var(--shiki-token-string);">\`</span><span style="color:var(--shiki-token-keyword);">\${</span><span style="color:var(--shiki-token-parameter);">platform</span><span style="color:var(--shiki-token-keyword);">}</span><span style="color:var(--shiki-token-string);">:</span><span style="color:var(--shiki-token-keyword);">\${</span><span style="color:var(--shiki-token-parameter);">selfId</span><span style="color:var(--shiki-token-keyword);">}</span><span style="color:var(--shiki-token-string);">\`</span><span style="color:var(--shiki-token-text);">]</span></span></code></pre></div><p>在之后的章节中，我们将进一步了解这三种对象的用法。</p><h2 id="广播消息" tabindex="-1">广播消息 <a class="header-anchor" href="#广播消息" aria-label="Permalink to &quot;广播消息&quot;">​</a></h2><p>主动交互中的一种常见需求是同时向多个频道发送消息。Koishi 提供了两套方法来实现消息的广播。最基础的写法是直接使用 <code>bot.broadcast()</code>：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#7F848E;font-style:italic;">// 一参数填写你要发送到的频道 ID 列表</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">await</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">bot</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">broadcast</span><span style="color:var(--shiki-token-text);">([</span><span style="color:var(--shiki-token-string);">&#39;123456&#39;</span><span style="color:var(--shiki-token-text);">, </span><span style="color:var(--shiki-token-string);">&#39;456789&#39;</span><span style="color:var(--shiki-token-text);">], </span><span style="color:var(--shiki-token-string);">&#39;全体目光向我看齐&#39;</span><span style="color:var(--shiki-token-text);">)</span></span></code></pre></div><p>但这样写需要知道每一个频道对应哪个机器人。对于启用了多个机器人的场景下，这么写就有点不方便了。幸运的是，Koishi 还有另一个方法：<code>ctx.broadcast()</code>。在启用了数据库的情况下，此方法会自动获取每个频道的 <a href="./../../manual/usage/customize.html#受理人机制">受理人</a>，并以对应的账号发送消息：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:var(--shiki-token-keyword);">await</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">broadcast</span><span style="color:var(--shiki-token-text);">([</span><span style="color:var(--shiki-token-string);">&#39;onebot:123456&#39;</span><span style="color:var(--shiki-token-text);">, </span><span style="color:var(--shiki-token-string);">&#39;discord:456789&#39;</span><span style="color:var(--shiki-token-text);">], </span><span style="color:var(--shiki-token-string);">&#39;全体目光向我看齐&#39;</span><span style="color:var(--shiki-token-text);">)</span></span></code></pre></div><h2 id="等待输入" tabindex="-1">等待输入 <a class="header-anchor" href="#等待输入" aria-label="Permalink to &quot;等待输入&quot;">​</a></h2><p>当你需要进行一些交互式操作时，可以使用 <code>session.prompt()</code>：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:var(--shiki-token-keyword);">await</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">session</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">send</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;请输入用户名：&#39;</span><span style="color:var(--shiki-token-text);">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">const</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">name</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-operator);">=</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">await</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">session</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">prompt</span><span style="color:var(--shiki-token-text);">()</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">if</span><span style="color:var(--shiki-token-text);"> (</span><span style="color:var(--shiki-token-operator);">!</span><span style="color:var(--shiki-token-parameter);">name</span><span style="color:var(--shiki-token-text);">) </span><span style="color:var(--shiki-token-keyword);">return</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">&#39;输入超时。&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 执行后续操作</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">return</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">\`</span><span style="color:var(--shiki-token-keyword);">\${</span><span style="color:var(--shiki-token-parameter);">name</span><span style="color:var(--shiki-token-keyword);">}</span><span style="color:var(--shiki-token-string);">，请多指教！\`</span></span></code></pre></div><p>你可以给这个方法传入一个 <code>timeout</code> 参数，或使用 <code>delay.prompt</code> 配置项，来作为等待的时间。</p><h2 id="延时发送" tabindex="-1">延时发送 <a class="header-anchor" href="#延时发送" aria-label="Permalink to &quot;延时发送&quot;">​</a></h2><p>如果你需要连续发送多条消息，那么在各条消息之间留下一定的时间间隔是很重要的：一方面它可以防止消息刷屏和消息错位 (后发的条消息呈现在先发的消息前面)，提高了阅读体验；另一方面它能够有效降低机器人发送消息的频率，防止被平台误封。这个时候，<code>session.sendQueued()</code> 可以解决你的问题。</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#7F848E;font-style:italic;">// 发送两条消息，中间间隔一段时间，这个时间由系统计算决定</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">await</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">session</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">sendQueued</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;message1&#39;</span><span style="color:var(--shiki-token-text);">)</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">await</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">session</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">sendQueued</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;message2&#39;</span><span style="color:var(--shiki-token-text);">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 清空等待队列</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">await</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">session</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">cancelQueued</span><span style="color:var(--shiki-token-text);">()</span></span></code></pre></div><p>你也可以在发送时手动定义等待的时长：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:var(--shiki-token-keyword);">import</span><span style="color:var(--shiki-token-text);"> { </span><span style="color:var(--shiki-token-parameter);">Time</span><span style="color:var(--shiki-token-text);"> } </span><span style="color:var(--shiki-token-keyword);">from</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">&#39;koishi&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 如果消息队列非空，在前一条消息发送完成后 1s 发送本消息</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">await</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">session</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">sendQueued</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;message3&#39;</span><span style="color:var(--shiki-token-text);">, </span><span style="color:var(--shiki-token-constant);">Time</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-parameter);">second</span><span style="color:var(--shiki-token-text);">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 清空等待队列，并设定下一条消息发送距离现在至少 0.5s</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">await</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">session</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">cancelQueued</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-number);">0.5</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-operator);">*</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">Time</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-parameter);">second</span><span style="color:var(--shiki-token-text);">)</span></span></code></pre></div><p>事实上，对于不同的消息长度，系统等待的时间也是不一样的，你可以通过配置项修改这个行为：</p><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre><code><span class="line"><span style="color:var(--shiki-token-parameter);">delay</span><span style="color:var(--shiki-token-text);">:</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:#7F848E;font-style:italic;"># 消息里每有一个字符就等待 0.02s</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">character</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-number);">20</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:#7F848E;font-style:italic;"># 每条消息至少等待 0.5s</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">message</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-number);">500</span></span></code></pre></div><p>这样一来，一段长度为 60 个字符的消息发送后，下一条消息发送前就需要等待 1.2 秒了。</p><h2 id="执行指令" tabindex="-1">执行指令 <a class="header-anchor" href="#执行指令" aria-label="Permalink to &quot;执行指令&quot;">​</a></h2><p>我们还可以实用 <code>session.execute()</code> 来让用户执行某条指令：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#7F848E;font-style:italic;">// 当用户输入“查看帮助”时，执行 help 指令</span></span>
<span class="line"><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">middleware</span><span style="color:var(--shiki-token-text);">((</span><span style="color:#E06C75;font-style:italic;">session</span><span style="color:var(--shiki-token-text);">, </span><span style="color:#E06C75;font-style:italic;">next</span><span style="color:var(--shiki-token-text);">) </span><span style="color:var(--shiki-token-keyword);">=&gt;</span><span style="color:var(--shiki-token-text);"> {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-keyword);">if</span><span style="color:var(--shiki-token-text);"> (</span><span style="color:var(--shiki-token-constant);">session</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-parameter);">content</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-operator);">===</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">&#39;查看帮助&#39;</span><span style="color:var(--shiki-token-text);">) {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-keyword);">return</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">session</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">execute</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;help&#39;</span><span style="color:var(--shiki-token-text);">, </span><span style="color:var(--shiki-token-parameter);">next</span><span style="color:var(--shiki-token-text);">)</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  } </span><span style="color:var(--shiki-token-keyword);">else</span><span style="color:var(--shiki-token-text);"> {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-keyword);">return</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-function);">next</span><span style="color:var(--shiki-token-text);">()</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  }</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">})</span></span></code></pre></div>`,27),l=[e];function p(i,r,c,k,y,h){return n(),a("div",null,l)}const x=s(o,[["render",p]]);export{d as __pageData,x as default};
