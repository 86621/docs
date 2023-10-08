import{_ as e,s as a,q as i,S as l}from"./chunks/framework.3f494197.js";const u=JSON.parse('{"title":"消息处理","description":"","frontmatter":{},"headers":[],"relativePath":"zh-TW/cookbook/message.md","filePath":"zh-TW/cookbook/message.md"}'),o={name:"zh-TW/cookbook/message.md"},s=l('<h1 id="消息处理" tabindex="-1">消息处理 <a class="header-anchor" href="#消息处理" aria-label="Permalink to &quot;消息处理&quot;">​</a></h1><p>我们已经熟悉了 Koishi 的一些基本概念，比如事件、中间件和指令等，那么他们的关系是什么呢？上面的生命周期图也同样告诉了我们答案：<strong>中间件由内置监听器管理，而指令由内置中间件管理</strong>。没错，当 message 事件被发送到各个上下文的监听器上时，绑定在 App 上的内置监听器将会将这个事件逐一交由中间件进行处理。全部处理完成后会触发一个 after-middleware 事件。</p><p>因为我们通常不需要直接监听 message 事件 (使用中间件往往是更好的实现)，after-middleware 事件的触发通常意味着你对一条消息的处理已经完成。我们的测试插件 @koishijs/plugin-mock 就是基于这种逻辑实现了它的会话 API。</p><h3 id="内置消息监听器" tabindex="-1">内置消息监听器 <a class="header-anchor" href="#内置消息监听器" aria-label="Permalink to &quot;内置消息监听器&quot;">​</a></h3><ol><li>message 事件触发，进入中间件处理流程</li><li>根据上下文从中间件池中筛选出要执行的中间件序列</li><li>逐一执行中间件： <ul><li>内置中间件是理论上第一个注册的中间件 (下接 <a href="#内置中间件">内置中间件</a>)</li><li>通过 <code>ctx.middleware(cb, true)</code> 注册的中间件会插在队列的更前面</li><li>临时中间件会直接插在当前序列的尾端，并不会影响中间件池本身</li><li>如果执行中遇到错误或未调用 <code>next</code> 函数，会停止后续中间件的执行</li></ul></li><li>触发 <a href="./../api/core/events.html#事件：middleware">middleware</a> 事件</li><li>更新当前用户和群的缓冲数据 (参见 <a href="./../guide/database/builtin.html#按需加载与自动更新">按需加载与自动更新</a>)</li></ol><h3 id="内置中间件" tabindex="-1">内置中间件 <a class="header-anchor" href="#内置中间件" aria-label="Permalink to &quot;内置中间件&quot;">​</a></h3><ol><li>从前缀中匹配 at 机器人，nickname 或 prefix</li><li>预处理消息内容，生成 <a href="./../api/core/session.html#session-parsed"><code>session.parsed</code></a></li><li>触发 <a href="./../api/core/events.html#事件：before-parse">before-parse</a> 事件，尝试解析消息内容 (<a href="./../guide/basic/command.html#快捷匹配">快捷匹配</a> 的解析也在此处完成)</li><li>如果数据库存在： <ul><li>触发 <a href="./../api/core/events.html#事件：before-attach-channel">before-attach-channel</a> 事件</li><li>获取频道数据并存储于 <a href="./../api/core/session.html#session-channel"><code>session.channel</code></a></li><li>根据 flags, assignee 等字段判断是否应该处理该信息，如果不应该则直接返回</li><li>触发 <a href="./../api/core/events.html#事件：attach-channel">attach-channel</a> 事件 (用户可以在其中同步地更新群数据，或中止执行后续操作)</li><li>触发 <a href="./../api/core/events.html#事件：before-attach-user">before-attach-user</a> 事件</li><li>获取用户数据并存储于 <a href="./../api/core/session.html#session-user"><code>session.user</code></a></li><li>根据 flags 等字段判断是否应该处理该信息，如果不应该则直接返回</li><li>触发 <a href="./../api/core/events.html#事件：attach-user">attach-user</a> 事件 (用户可以在其中同步地更新群和用户数据，或中止执行后续操作)</li></ul></li><li>如果解析出指令：执行该指令 (下接 <a href="#指令执行流程">指令执行流程</a>)</li><li>尝试解析出候选指令，如果成功则显示候选项 (参见 <a href="./../manual/recipe/execution.html#模糊匹配">模糊匹配</a>)</li></ol><p>在以上过程中，无论是解析指令还是出发内置的 before-attach-* 钩子都可能用到 <a href="./../api/core/events.html#事件：parse">parse</a> 事件。</p><h3 id="指令执行流程" tabindex="-1">指令执行流程 <a class="header-anchor" href="#指令执行流程" aria-label="Permalink to &quot;指令执行流程&quot;">​</a></h3><ol><li>如果解析过程中存在错误 (如非法参数等)，直接返回错误信息</li><li>逐一调用 check 回调函数，直到返回值不为 <code>undefined</code></li><li>触发 <a href="./../api/core/events.html#事件：before-command">before-command</a> 事件： <ul><li>如果是 -h, --help 则直接显示帮助信息 (参见 <a href="./../manual/usage/command.html#查看帮助">查看帮助</a>)</li><li>根据配置检查用户权限和调用记录</li></ul></li><li>逐一调用 action 回调函数，直到返回值不为 <code>undefined</code></li><li>触发 <a href="./../api/core/events.html#事件：command">command</a> 事件</li></ol>',10),t=[s];function r(c,h,n,d,m,f){return i(),a("div",null,t)}const _=e(o,[["render",r]]);export{u as __pageData,_ as default};
