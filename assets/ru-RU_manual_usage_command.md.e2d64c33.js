import{_ as i,p as c,s as d,D as o,I as a,v as e,L as t,S as s,q as h}from"./chunks/framework.3f494197.js";const le=JSON.parse('{"title":"指令系统","description":"","frontmatter":{},"headers":[],"relativePath":"ru-RU/manual/usage/command.md","filePath":"ru-RU/manual/usage/command.md"}'),_={name:"ru-RU/manual/usage/command.md"},p=e("h1",{id:"指令系统",tabindex:"-1"},[t("指令系统 "),e("a",{class:"header-anchor",href:"#指令系统","aria-label":'Permalink to "指令系统"'},"​")],-1),r=e("p",null,"在了解了控制台的基本用法后，我们终于可以开始介绍如何与机器人对话了！让我们从上一节中看到的例子开始：",-1),u=e("p",null,"当前可用的指令有：",-1),m=e("p",{class:"indent-1"},"echo 发送消息",-1),k=e("p",{class:"indent-1"},"help 显示帮助信息",-1),f=e("p",null,"输入“帮助 指令名”查看特定指令的语法和使用示例。",-1),g=s('<p>这里的输出与两个插件有关：</p><ul><li>help 指令由 <a href="./../../plugins/common/help.html">help</a> 插件提供，它可以显示指令列表或具体指令的帮助信息</li><li>echo 指令由 <a href="./../../plugins/common/echo.html">echo</a> 插件提供，它可以将用户的输入原样返回</li></ul><p>一个 Koishi 机器人的绝大部分功能都是通过指令提供给用户的。当你安装了更多的插件后，你也就有了更多的指令可供使用。</p><h2 id="查看帮助" tabindex="-1">查看帮助 <a class="header-anchor" href="#查看帮助" aria-label="Permalink to &quot;查看帮助&quot;">​</a></h2><p>help 指令后还可以添加一个参数，用于查看特定指令的帮助信息：</p>',5),T=e("p",null,"指令：echo <message...>",-1),x=e("p",null,"发送消息",-1),A=e("p",null,"可用的选项有：",-1),b=e("p",{class:"indent-1"},"-e, --escape 发送转义消息",-1),v=e("p",{class:"indent-1"},"-E, --unescape 发送反转义消息",-1),P=e("p",null,"那么细心的小伙伴可能会发现，既然 help 本身也是一个指令，那我能不能用来查看 help 自己的帮助信息呢？答案是肯定的：",-1),y=e("p",null,"指令：help [command]",-1),S=e("p",null,"显示帮助信息",-1),q=e("p",null,"可用的选项有：",-1),K=e("p",{class:"indent-1"},"-a, --authority 显示权限设置",-1),C=e("p",{class:"indent-1"},"-H, --show-hidden 查看隐藏的选项和指令",-1),V=s('<h2 id="参数和选项" tabindex="-1">参数和选项 <a class="header-anchor" href="#参数和选项" aria-label="Permalink to &quot;参数和选项&quot;">​</a></h2><p>在上面的用法中，我们接触到了两个新的概念：<strong>参数 (Argument)</strong> 和 <strong>选项 (Option)</strong>。</p><p>参数分为必选参数和可选参数，分别用尖括号 <code>&lt;&gt;</code> 和方括号 <code>[]</code> 表示。一个指令可以有任意多个参数，它们的顺序是固定的，用户必须按照指令定义的顺序来输入参数。必选参数一定出现在可选参数之前。如果用户输入的参数数量不足必选参数的个数，那么插件通常会给出错误提示；如果用户输入了额外的参数，那么会被忽略。</p><p>例如，help 指令共有一个参数，它是可选参数，表示要查看的指令名；echo 指令也有一个参数，它是必选参数，表示要发送的消息。让我们看看如果不填必选参数会怎么样：</p>',4),I=e("p",null,"请输入要发送的文本。",-1),E=e("p",null,[t("选项同样可以控制指令的行为。它通常以 "),e("code",null,"-"),t(" 或 "),e("code",null,"--"),t(" 开头，后面不带空格地跟着一个固定的单词，称为选项名称。选项之间没有顺序要求，但通常建议将选项放在参数之前。让我们试试看：")],-1),N=e("img",{src:"https://koishi.chat/logo.png",width:"100"},null,-1),R=e("p",null,[t("在上面的例子中，我们使用了 "),e("code",null,"-E"),t(" 选项，成功改变了输出的内容。关于这具体是怎么做到的，我们会在后续的章节中进行介绍。")],-1),D=e("p",null,[t("参数除了可以分为必选和可选外，还可以分为定长和变长。定长参数的中不能出现空白字符，而变长参数则可以。变长参数通过参数名前后的 "),e("code",null,"..."),t(" 来指示，例如 "),e("code",null,"echo"),t(" 指令的参数就是一个变长参数。如果要为定长参数传入带有空白字符的内容，可以使用引号将其包裹起来，例如：")],-1),z=e("p",null,"此外，部分选项也可以接受参数。例如，当你安装了翻译插件，你将会获得如下的帮助信息：",-1),U=e("p",null,"指令：translate <text...>",-1),$=e("p",null,"Перевод текстов",-1),w=e("p",null,"可用的选项有：",-1),B=e("p",{class:"indent-1"},"-s, --source <lang> 源语言 (默认为自动匹配)",-1),j=e("p",{class:"indent-1"},"-t, --target <lang> 目标语言 (默认为中文)",-1),G=s(`<p>在这个例子中，<code>-s</code> 和 <code>-t</code> 都是带有参数的选项。我们使用 <code>-t ja</code> 来指定目标语言为日语，源语言仍然采用了默认行为。</p><h2 id="触发前缀" tabindex="-1">触发前缀 <a class="header-anchor" href="#触发前缀" aria-label="Permalink to &quot;触发前缀&quot;">​</a></h2><p>然而，如果仅仅通过一个词就能触发指令，在群聊环境下非常容易出现误触。为了避免这种情况，Koishi 引入了前缀触发的概念。在「全局设置」中，我们提供了名为 <code>prefix</code> 和 <code>nickname</code> 的配置项。假如将 <code>prefix</code> 设置为 <code>/</code>，<code>nickname</code> 设置为 <code>四季酱</code>，则在群聊环境下只有以下信息可以触发指令调用：</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre><code><span class="line"><span style="color:var(--shiki-token-function);">四季酱,</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">echo</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">hello</span></span>
<span class="line"><span style="color:var(--shiki-token-function);">@四季酱</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">echo</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">hello</span></span>
<span class="line"><span style="color:var(--shiki-token-function);">/echo</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">hello</span></span></code></pre></div><p>换句话说，一个指令能够被触发的实际条件为：</p><ul><li>消息以 <code>prefix</code> 开头，后面紧跟着指令调用</li><li>消息以 <code>nickname</code> 开头，后面可以有逗号或空白字符，再后面是指令调用</li><li>消息以 @机器人 开头 (可以有多个 <code>@</code>，但至少一个是机器人账号)，后面是指令调用</li></ul><p>对于人数较多或是含有不止一个机器人的群聊，我们强烈建议每一个机器人都配置不同的触发前缀。而在私聊环境下，由于不用担心误触，因此并没有上面的限制。没有触发前缀的指令调用也能被正常执行。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><strong>关于 <code>prefix</code> 的几点提示：</strong></p><ol><li><code>prefix</code> 是一个列表，默认值为 <code>[&#39;&#39;]</code> 表示无需前缀也能触发；将列表清空会导致所有指令都无法通过 <code>prefix</code> 触发 (但仍然可以通过私聊或 <code>nickname</code> 或 @机器人 触发)</li><li>如果你在 <code>prefix</code> 中设置了多个值，例如 <code>[&#39;.&#39;, &#39;/&#39;, &#39;&#39;]</code>，那么 <code>.</code>, <code>/</code> 或无前缀都能触发指令；但由于 Koishi 是按顺序匹配各个前缀的，因此空串 <code>&#39;&#39;</code> 必须写在最后一个</li><li>可以为不同的会话设置不同的 <code>prefix</code>，具体请参考 <a href="./customize.html#过滤器">过滤器</a> 一节</li></ol></div><h2 id="子指令" tabindex="-1">子指令 <a class="header-anchor" href="#子指令" aria-label="Permalink to &quot;子指令&quot;">​</a></h2><p><a href="./../../plugins/common/admin.html">admin</a> 插件提供了名为 user 的指令，现在让我们调用一下：</p>`,10),O=e("p",null,"指令：user",-1),H=e("p",null,"用户管理",-1),J=e("p",null,"可用的子指令有：",-1),L=e("p",{class:"indent-1"},"authorize 权限管理",-1),F=e("p",{class:"indent-1"},"user.locale 语言偏好",-1),M=s("<p>这里出现了一个新的概念：子指令。子指令在调用上与普通的指令并没有区别，但它们将不会显示在 <code>help</code> 返回的全局指令列表中，而只会显示在父指令 <code>user</code> 的帮助信息中。这样设计的目的是为了避免指令列表过于冗长，同时也将指令以一种更清晰的方式进行了组织。</p><p>在上面的例子中，我们还能发现 Koishi 存在两种不同的子指令：一种是 <strong>层级式</strong>，例如 <code>authorize</code>；而另一种则是 <strong>派生式</strong>，例如 <code>user.locale</code>。后者跟前者的区别是，它的名称带有父指令的名称，以及一个小数点 <code>.</code>。在调用时，我们也需要加上这个小数点：</p>",2),Q=e("p",null,[t("如果父指令本身没有功能，那么 "),e("code",null,"user"),t(" 和 "),e("code",null,"user -h"),t(" 的效果是一样的。此时，我们也可以使用空格代替小数点进行派生式子指令的调用：")],-1),W=s('<p>熟悉 Git 的用户可能会发现，这种设计正是借鉴了 Git 的二级指令：当一个指令的功能过于复杂时，我们可以将其拆分为多个子指令，从而使得指令的功能更加清晰。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>至于 user.locale 是干什么的，想必大家也已经猜出来了。我们留到 <a href="./customize.html#国际化">国际化</a> 一节再详细介绍。</p></div><h2 id="指令管理" tabindex="-1">指令管理 <a class="header-anchor" href="#指令管理" aria-label="Permalink to &quot;指令管理&quot;">​</a></h2><p>打开控制台，我们会在活动栏中找到名为「指令管理」的页面。你可以在这里查看当前所有指令的列表，并对指令的行为进行设置。</p><h3 id="设置别名" tabindex="-1">设置别名 <a class="header-anchor" href="#设置别名" aria-label="Permalink to &quot;设置别名&quot;">​</a></h3><p>点进任意指令的详情页，首先就能看到「名称设置」，这里展示了指令的全部别名。每个别名都能被用来触发指令，而第一个别名则会作为默认名称显示在帮助中。</p><p>你可以在这里添加或删除别名，也可以将任意别名设置为默认的显示名称。例如，在 <code>echo</code> 指令中点击「添加别名」，输入 <code>复读</code>，然后点击「设为默认」，这样一来，用户在帮助中看到的就是 <code>复读</code> 而不是 <code>echo</code> 了。</p><h3 id="添加子指令" tabindex="-1">添加子指令 <a class="header-anchor" href="#添加子指令" aria-label="Permalink to &quot;添加子指令&quot;">​</a></h3><p>在左侧栏中，你可以将任何指令 (派生式指令除外) 拖至其他指令的下方，这将使得前者成为后者的子指令。例如，我们可以将 <a href="./../../plugins/common/bind.html"><code>bind</code></a> 指令设置为 <code>user</code> 指令的子指令，因为这属于用户管理的一部分。</p><p>点击右上角的加号按钮，我们可以创建一个新指令。这个新指令自然是没有行为的，它的主要目的是作为其他指令的父指令，已获得更好的展示效果。对于通过此方法创建的新指令，我们可以通过点击右上角的垃圾桶按钮将其移除。</p><h3 id="权限管理" tabindex="-1">权限管理 <a class="header-anchor" href="#权限管理" aria-label="Permalink to &quot;权限管理&quot;">​</a></h3><p>在「名称设置」下方还有更多的配置项，我们可以在这里进一步配置指令对用户的访问权限。例如，将 echo 指令的 <code>authority</code> 设置为 <code>2</code>，那么将只有 2 级以上权限的用户才能调用该指令。</p><p>我们甚至还可以单独设置每一个指令选项的权限等级。例如，我们可以单独给 <code>-E, --unescape</code> 选项设置 <code>authority</code> 为 3。这样一来，只有 3 级以上权限的用户才能使用 <code>echo -E</code> 的功能。</p><p>关于用户权限，请参考 <a href="./customize.html#权限管理">权限管理</a> 一节。</p>',14);function X(Y,Z,ee,oe,ae,te){const n=c("chat-message"),l=c("chat-panel");return h(),d("div",null,[p,r,o(l,null,{default:a(()=>[o(n,{nickname:"Alice"},{default:a(()=>[t("help")]),_:1}),o(n,{nickname:"Koishi"},{default:a(()=>[u,m,k,f]),_:1})]),_:1}),g,o(l,null,{default:a(()=>[o(n,{nickname:"Alice"},{default:a(()=>[t("help echo")]),_:1}),o(n,{nickname:"Koishi"},{default:a(()=>[T,x,A,b,v]),_:1})]),_:1}),P,o(l,null,{default:a(()=>[o(n,{nickname:"Alice"},{default:a(()=>[t("help help")]),_:1}),o(n,{nickname:"Koishi"},{default:a(()=>[y,S,q,K,C]),_:1})]),_:1}),V,o(l,null,{default:a(()=>[o(n,{nickname:"Alice"},{default:a(()=>[t("echo")]),_:1}),o(n,{nickname:"Koishi"},{default:a(()=>[I]),_:1})]),_:1}),E,o(l,null,{default:a(()=>[o(n,{nickname:"Alice"},{default:a(()=>[t('echo <image url="https://koishi.chat/logo.png"/>')]),_:1}),o(n,{nickname:"Koishi"},{default:a(()=>[t('<image url="https://koishi.chat/logo.png"/>')]),_:1}),o(n,{nickname:"Alice"},{default:a(()=>[t('echo -E <image url="https://koishi.chat/logo.png"/>')]),_:1}),o(n,{nickname:"Koishi"},{default:a(()=>[N]),_:1})]),_:1}),R,D,o(l,null,{default:a(()=>[o(n,{nickname:"Alice"},{default:a(()=>[t('help "foo bar"')]),_:1})]),_:1}),z,o(l,null,{default:a(()=>[o(n,{nickname:"Alice"},{default:a(()=>[t("help translate")]),_:1}),o(n,{nickname:"Koishi"},{default:a(()=>[U,$,w,B,j]),_:1}),o(n,{nickname:"Alice"},{default:a(()=>[t("translate -t ja 你好，世界")]),_:1}),o(n,{nickname:"Koishi"},{default:a(()=>[t("こんにちは世界")]),_:1})]),_:1}),G,o(l,null,{default:a(()=>[o(n,{nickname:"Alice"},{default:a(()=>[t("user")]),_:1}),o(n,{nickname:"Koishi"},{default:a(()=>[O,H,J,L,F]),_:1})]),_:1}),M,o(l,null,{default:a(()=>[o(n,{nickname:"Alice"},{default:a(()=>[t("user.locale en")]),_:1}),o(n,{nickname:"Koishi"},{default:a(()=>[t("User data updated.")]),_:1})]),_:1}),Q,o(l,null,{default:a(()=>[o(n,{nickname:"Alice"},{default:a(()=>[t("user locale zh ")]),_:1}),o(n,{nickname:"Koishi"},{default:a(()=>[t("用户数据已修改。")]),_:1})]),_:1}),W])}const se=i(_,[["render",X]]);export{le as __pageData,se as default};
