import{_ as o,s,q as e,S as a}from"./chunks/framework.26d7e063.js";const y=JSON.parse('{"title":"发送消息 (Echo)","description":"","frontmatter":{},"headers":[],"relativePath":"fr-FR/plugins/common/echo.md","filePath":"fr-FR/plugins/common/echo.md"}'),t={name:"fr-FR/plugins/common/echo.md"},n=a(`<h1 id="发送消息" tabindex="-1">发送消息 (Echo) <a class="header-anchor" href="#发送消息" aria-label="Permalink to &quot;发送消息 (Echo)&quot;">​</a></h1><h2 id="指令-echo" tabindex="-1">指令：echo <a class="header-anchor" href="#指令-echo" aria-label="Permalink to &quot;指令：echo&quot;">​</a></h2><ul><li>基本语法：<code>echo &lt;message&gt;</code></li><li>最低权限：2</li><li>选项： <ul><li><code>-e, --escape</code> 发送转义消息 (需要 3 级权限)</li><li><code>-E, --unescape</code> 发送反转义消息 (需要 3 级权限)</li><li><code>-u, --user [user]</code> 发送到用户 (需要 3 级权限)</li><li><code>-c, --channel [channel]</code> 发送到频道 (需要 3 级权限)</li><li><code>-g, --guild [guild]</code> 指定群组编号 (需要 3 级权限)</li></ul></li></ul><p>你可以使用 echo 指令发送消息到特定的上下文：</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre><code><span class="line"><span style="color:var(--shiki-token-operator);">echo</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">foo</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">bar</span><span style="color:var(--shiki-token-text);">              </span><span style="color:#7F848E;font-style:italic;"># 向当前上下文发送 foo bar</span></span>
<span class="line"><span style="color:var(--shiki-token-operator);">echo</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-number);">-u</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">@foo</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">foo</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">bar</span><span style="color:var(--shiki-token-text);">      </span><span style="color:#7F848E;font-style:italic;"># 向用户 foo 私聊发送 foo bar</span></span>
<span class="line"><span style="color:var(--shiki-token-operator);">echo</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-number);">-c</span><span style="color:var(--shiki-token-text);"> </span><span style="color:#7F848E;font-style:italic;">#bar foo bar      # 向频道 bar 发送 foo bar</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">提示</p><p>echo 指令的 message 参数是一个 <a href="./../../manual/usage/command.html#参数和选项">变长参数</a>，因此你应该把所有的选项写到消息前面，否则会被认为是消息的一部分。</p></div>`,6),l=[n];function i(c,r,p,h,k,d){return e(),s("div",null,l)}const m=o(t,[["render",i]]);export{y as __pageData,m as default};
