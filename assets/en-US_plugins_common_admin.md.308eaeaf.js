import{_ as l,p as i,s as c,v as a,L as e,D as t,I as o,S as n,q as r}from"./chunks/framework.26d7e063.js";const S=JSON.parse('{"title":"Data Management (Admin)","description":"","frontmatter":{},"headers":[],"relativePath":"en-US/plugins/common/admin.md","filePath":"en-US/plugins/common/admin.md"}'),d={name:"en-US/plugins/common/admin.md"},p=n(`<h1 id="data-management" tabindex="-1">Data Management (Admin) <a class="header-anchor" href="#data-management" aria-label="Permalink to &quot;Data Management (Admin)&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>要使用本插件，你需要安装数据库支持。</p></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>建议配合阅读 <a href="./../../manual/usage/customize.html#权限管理">入门 &gt; 权限管理</a> 章节。</p></div><h2 id="指令-authorize" tabindex="-1">指令：authorize <a class="header-anchor" href="#指令-authorize" aria-label="Permalink to &quot;指令：authorize&quot;">​</a></h2><ul><li>别名：auth</li><li>基本语法：<code>authorize &lt;value&gt; -u &lt;user&gt;</code></li><li>最低权限：4</li></ul><p>authorize 指令用于设置用户的权限等级。该指令 4 级权限才能调用，且需要满足目标用户的权限和要设定的权限都严格小于自己的权限等级，否则无法设置。</p><h3 id="指定用户语法" tabindex="-1">指定用户语法 <a class="header-anchor" href="#指定用户语法" aria-label="Permalink to &quot;指定用户语法&quot;">​</a></h3><p>可以通过三种方式指定用户</p><ul><li><code>@user</code>: 通过直接 @ 人的方式指定（不能是纯文本，需要用各平台的 @ 人方式）</li><li><code>@&lt;userId&gt;</code>: @ 符号后面接用户名（必须是纯文本）</li><li><code>@&lt;platform&gt;:&lt;userId&gt;</code>: @ 符号后指定具体的平台和用户名（必须是纯文本）</li></ul><p>例子</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre><code><span class="line"><span style="color:var(--shiki-token-function);">authorize</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-number);">3</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-number);">-u</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">@Koishi</span><span style="color:var(--shiki-token-text);">              </span><span style="color:#7F848E;font-style:italic;"># 通过 @ 人的方式</span></span>
<span class="line"><span style="color:var(--shiki-token-function);">authorize</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-number);">3</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-number);">-u</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">@123456789</span><span style="color:var(--shiki-token-text);">           </span><span style="color:#7F848E;font-style:italic;"># 通过指定用户名方式</span></span>
<span class="line"><span style="color:var(--shiki-token-function);">authorize</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-number);">3</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-number);">-u</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">@onebot:123456789</span><span style="color:var(--shiki-token-text);">    </span><span style="color:#7F848E;font-style:italic;"># 指定具体的平台和用户名</span></span></code></pre></div><h2 id="指令-assign" tabindex="-1">指令：assign <a class="header-anchor" href="#指令-assign" aria-label="Permalink to &quot;指令：assign&quot;">​</a></h2><ul><li>基本语法：<code>assign [bot]</code></li><li>最低权限：4</li><li>选项： <ul><li><code>-c, --channel</code> 指定目标频道（不在群组内使用时必须指定）</li><li><code>-r, --remove</code> 重置设置</li></ul></li></ul><p>assign 指令可用于设置频道的 <a href="./../../manual/usage/customize.html#受理人机制">受理人</a>。该指令 4 级权限才能调用。</p><p>如果 <code>-c [channel]</code> 缺省，则表示目标频道为当前频道（因此私聊状态下不能缺省）；如果 <code>bot</code> 缺省，则表示当前接收消息的机器人账号。举个例子，如果要设定一个频道 A 的代理者为 B，下面的两种做法是等价的：</p><ol><li>私聊机器人 B，发送 <code>assign -c #A</code></li><li>在频道 A 中发送 <code>assign @B</code>（假设 B 能收到此消息）</li></ol>`,16),h={id:"指令-user-flag-deprecated",tabindex:"-1"},u=a("a",{class:"header-anchor",href:"#指令-user-flag-deprecated","aria-label":'Permalink to "指令：user.flag <badge type="danger">deprecated</badge>"'},"​",-1),k={id:"指令-channel-flag-deprecated",tabindex:"-1"},m=a("a",{class:"header-anchor",href:"#指令-channel-flag-deprecated","aria-label":'Permalink to "指令：channel.flag <badge type="danger">deprecated</badge>"'},"​",-1),g=n("<ul><li>基本语法：<code>xxx.flag [...names]</code></li><li>选项： <ul><li><code>-l, --list</code> 标记列表</li><li><code>-s, --set</code> 添加标记（需要 4 级权限）</li><li><code>-S, --unset</code> 删除标记（需要 4 级权限）</li><li><code>-u, --user [@user]</code> 目标用户（仅限 user.flag 指令，需要 3 级权限）</li><li><code>-c, --channel [#channel]</code> 目标频道（仅限 channel.flag 指令，需要 3 级权限）</li></ul></li></ul><p>这两个指令用于查看和修改用户或频道的状态标签。如果不提供选项，则会显示当前的状态标签。如果使用了 <code>-l</code>，就会列出所有可用的状态标签。如果使用了 <code>-s</code> 或 <code>-S</code>，则会添加 / 删除 <code>names</code> 中的每一个状态标签。</p>",2);function _(f,v,y,b,x,T){const s=i("badge");return r(),c("div",null,[p,a("h2",h,[e("指令：user.flag "),t(s,{type:"danger"},{default:o(()=>[e("deprecated")]),_:1}),e(),u]),a("h2",k,[e("指令：channel.flag "),t(s,{type:"danger"},{default:o(()=>[e("deprecated")]),_:1}),e(),m]),g])}const A=l(d,[["render",_]]);export{S as __pageData,A as default};
