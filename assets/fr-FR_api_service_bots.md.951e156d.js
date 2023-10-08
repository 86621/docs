import{_ as a,p as r,s as c,v as e,L as t,D as i,I as n,S as o,q as d}from"./chunks/framework.3f494197.js";const q=JSON.parse('{"title":"Bots : robots","description":"","frontmatter":{},"headers":[],"relativePath":"fr-FR/api/service/bots.md","filePath":"fr-FR/api/service/bots.md"}'),l={name:"fr-FR/api/service/bots.md"},_=o('<h1 id="bots-robots" tabindex="-1">Bots : robots <a class="header-anchor" href="#bots-robots" aria-label="Permalink to &quot;Bots : robots&quot;">​</a></h1><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>本节中介绍的 API 目前属于实验性功能，可能在后续版本中发生变化。</p></div><p><code>ctx.bots</code> 保存了当前全部 <a href="./../core/bot.html">Bot</a> 实例。它继承了 Array 类，因此你可以使用诸如 <code>ctx.bots.forEach()</code> 的写法。除此以外，我们还提供了一些与机器人相关的实用方法。</p><h2 id="实例属性" tabindex="-1">实例属性 <a class="header-anchor" href="#实例属性" aria-label="Permalink to &quot;实例属性&quot;">​</a></h2><h3 id="ctx-bots-sid" tabindex="-1">ctx.bots[sid] <a class="header-anchor" href="#ctx-bots-sid" aria-label="Permalink to &quot;ctx.bots\\[sid]&quot;">​</a></h3><ul><li><strong>sid:</strong> <code>string</code> 机器人的 sid</li></ul><p>你可以用这个属性来获取或移除机器人实例。</p><h2 id="实例方法" tabindex="-1">实例方法 <a class="header-anchor" href="#实例方法" aria-label="Permalink to &quot;实例方法&quot;">​</a></h2><h3 id="ctx-getselfids" tabindex="-1">ctx.getSelfIds(type?, assignees?) <a class="header-anchor" href="#ctx-getselfids" aria-label="Permalink to &quot;ctx.getSelfIds(type?, assignees?)&quot;">​</a></h3><ul><li><strong>type:</strong> <code>Platform</code> 平台名称，如果不写就对应全部平台</li><li><strong>assignees:</strong> <code>string[]</code> 机器人 ID 列表，如果不写就对应当前平台的全部机器人</li><li>返回值: <code>Record&lt;string, readonly string[]&gt;</code> 平台名到机器人 ID 列表的键值对</li></ul><p>按平台名称对机器人分类。</p>',11),h={id:"ctx-broadcast-需要数据库",tabindex:"-1"},b=e("a",{class:"header-anchor",href:"#ctx-broadcast-需要数据库","aria-label":'Permalink to "ctx.broadcast(channels?, content, forced?) <badge>需要数据库</badge>"'},"​",-1),g=o("<ul><li><strong>channels:</strong> <code>string[]</code> 频道列表</li><li><strong>content:</strong> <code>string</code> 要发送的内容</li><li><strong>forced:</strong> <code>boolean</code> 是否无视 silent 标记</li><li>返回值: <code>Promise&lt;string[]&gt;</code> 成功发送的消息 ID 列表</li></ul><p>所有机器人向自己分配的频道广播消息，存在标记 silent 的频道除外。如有失败不会抛出错误。</p>",2);function p(f,u,x,m,P,T){const s=r("badge");return d(),c("div",null,[_,e("h3",h,[t("ctx.broadcast(channels?, content, forced?) "),i(s,null,{default:n(()=>[t("需要数据库")]),_:1}),t(),b]),g])}const S=a(l,[["render",p]]);export{q as __pageData,S as default};
