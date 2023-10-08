import{_ as s,s as n,q as a,S as t}from"./chunks/framework.26d7e063.js";const d=JSON.parse('{"title":"組み込みデータ構造","description":"","frontmatter":{},"headers":[],"relativePath":"ja-JP/guide/database/builtin.md","filePath":"ja-JP/guide/database/builtin.md"}'),e={name:"ja-JP/guide/database/builtin.md"},o=t(`<h1 id="組み込みデータ構造" tabindex="-1">組み込みデータ構造 <a class="header-anchor" href="#組み込みデータ構造" aria-label="Permalink to &quot;組み込みデータ構造&quot;">​</a></h1><p>通常来说，中间件、插件的设计可以让机器人的开发变得更加模块化，但是缺乏统一的数据流管理也带来了额外的问题。如果每个中间件分别从数据库中读取和更新自己所需的字段，那会造成大量重复的请求，导致严重的资源浪费；将所有可能请求的数据都在中间件的一开始就请求完成，也并不会解决问题，因为一条信息的解读可能只需要少数几个字段，而大部分都是不需要的；更严重的是，后一种做法将导致资源单次请求，多次更新，从而产生种种数据安全性问题。</p><p>针对这些问题，Koishi 提供了一套完善的数据流管理机制，它能够在保证数据安全的同时，最大化地减少数据库访问次数。在这一节中，我们将会介绍这套机制的使用方法。</p><h2 id="观察者对象" tabindex="-1">观察者对象 <a class="header-anchor" href="#观察者对象" aria-label="Permalink to &quot;观察者对象&quot;">​</a></h2><p>假设我们正在开发一个抽奖插件，每调用一次 lottery 指令，用户会获得一件物品，并存入用户表的 <code>inventory</code> 属性中。下面是这个插件的实现：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#7F848E;font-style:italic;">// 定义一个 inventory 字段，用于存放物品列表</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">declare</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">module</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">&#39;koishi&#39;</span><span style="color:var(--shiki-token-text);"> {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-keyword);">interface</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">User</span><span style="color:var(--shiki-token-text);"> {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-parameter);">inventory</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">string</span><span style="color:var(--shiki-token-text);">[]</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  }</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-constant);">model</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">extend</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;user&#39;</span><span style="color:var(--shiki-token-text);">, {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">inventory</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-string);">&#39;list&#39;</span><span style="color:var(--shiki-token-text);">,</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">command</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;lottery&#39;</span><span style="color:var(--shiki-token-text);">)</span></span>
<span class="line highlighted"><span style="color:var(--shiki-token-text);">  </span><span style="color:#7F848E;font-style:italic;">// 声明所需字段</span></span>
<span class="line highlighted"><span style="color:var(--shiki-token-text);">  .</span><span style="color:var(--shiki-token-function);">userFields</span><span style="color:var(--shiki-token-text);">([</span><span style="color:var(--shiki-token-string);">&#39;inventory&#39;</span><span style="color:var(--shiki-token-text);">])</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  .</span><span style="color:var(--shiki-token-function);">action</span><span style="color:var(--shiki-token-text);">(({ </span><span style="color:#E06C75;font-style:italic;">session</span><span style="color:var(--shiki-token-text);"> }) </span><span style="color:var(--shiki-token-keyword);">=&gt;</span><span style="color:var(--shiki-token-text);"> {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:#7F848E;font-style:italic;">// 这里假设 inventory 是一个字符串，表示抽到的物品</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-keyword);">const</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">item</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-operator);">=</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-function);">getLottery</span><span style="color:var(--shiki-token-text);">()</span></span>
<span class="line highlighted"><span style="color:var(--shiki-token-text);">    </span><span style="color:#7F848E;font-style:italic;">// 将抽到的物品存放到 user.items 中</span></span>
<span class="line highlighted"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-constant);">session</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-constant);">user</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-constant);">inventory</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">push</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-parameter);">item</span><span style="color:var(--shiki-token-text);">)</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-keyword);">return</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">\`恭喜您获得了 </span><span style="color:var(--shiki-token-keyword);">\${</span><span style="color:var(--shiki-token-parameter);">item</span><span style="color:var(--shiki-token-keyword);">}</span><span style="color:var(--shiki-token-string);">！\`</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  })</span></span></code></pre></div><p>我们都知道，写入数据库是一个异步的操作，而上面的代码看起来完全没有异步操作。然而如果你运行这段代码，你会发现用户数据被成功地更新了。这就归功于观察者机制。</p><p><code>session.user</code> 是一个 <strong>观察者 (Observer)</strong> 对象，它会检测在其上面做的一切更改并缓存下来。当中间件执行完毕后，Koishi 又会自动将变化的部分进行更新，同时将缓冲区清空。我们因此得以直接在 <code>session.user</code> 上进行赋值，而不必手动调用 <code>ctx.database</code> 上的方法。</p><h3 id="声明所需字段" tabindex="-1">声明所需字段 <a class="header-anchor" href="#声明所需字段" aria-label="Permalink to &quot;声明所需字段&quot;">​</a></h3><p><code>cmd.userFields()</code> 方法用于声明所需的用户字段。未声明的字段将不会被加载，也无法直接被修改。这样做的好处是，无论用户表有多少字段，我们都可以只加载所需的字段，从而提高性能。同理我们也有 <code>cmd.channelFields()</code> 方法，功能类似。</p><p>这两个方法不仅可以接受一个可迭代对象，还可以接受一个回调函数。第一个参数是当前的 <code>Argv</code> 对象，第二个参数是 <code>Set&lt;keyof User&gt;</code>，可以通过 add / delete 方法来添加或删除字段。因此上面的代码等价于：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:var(--shiki-token-constant);">cmd</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">userFields</span><span style="color:var(--shiki-token-text);">((</span><span style="color:#E06C75;font-style:italic;">argv</span><span style="color:var(--shiki-token-text);">, </span><span style="color:#E06C75;font-style:italic;">fields</span><span style="color:var(--shiki-token-text);">) </span><span style="color:var(--shiki-token-keyword);">=&gt;</span><span style="color:var(--shiki-token-text);"> {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-constant);">fields</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">add</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;inventory&#39;</span><span style="color:var(--shiki-token-text);">)</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">})</span></span></code></pre></div><h3 id="阻塞式更新" tabindex="-1">阻塞式更新 <a class="header-anchor" href="#阻塞式更新" aria-label="Permalink to &quot;阻塞式更新&quot;">​</a></h3><p>观察者机制不仅可以将多次更新合并成一次以提高程序性能，更能解决数据竞争的问题。如果两条消息在临近的时间点被接收到，如果单纯地使用 get / set 进行处理，可能会发生后一次 get 在前一次 set 之前完成，导致本应获得 2 件物品，但实际只获得了 1 件的问题。而观察者会随时同步同源数据，数据安全得以保证。</p><p>当然，如果你确实需要阻塞式地等待数据写入，我们也提供了 <code>user.$update()</code> 方法。顺便一提，一旦成功执行了观察者的 <code>$update()</code> 方法，之前的缓冲区将会被清空，因此之后不会重复更新数据；对于缓冲区为空的观察者，<code>$update()</code> 方法也会直接返回，不会产生任何的数据库访问。这些都是我们优化的几个细节。</p><p>你可以在 <a href="./../../api/utils/observer.html">这里</a> 看到完整的观察者 API。</p><h2 id="进阶用法" tabindex="-1">进阶用法 <a class="header-anchor" href="#进阶用法" aria-label="Permalink to &quot;进阶用法&quot;">​</a></h2><h3 id="attach-事件" tabindex="-1">attach 事件 <a class="header-anchor" href="#attach-事件" aria-label="Permalink to &quot;attach 事件&quot;">​</a></h3><p>Koishi 内置了四个与观察者相关的事件，分别是：</p><ul><li><code>before-attach-channel</code>：在频道观察者被绑定到会话上之前触发</li><li><code>attach-channel</code>：在频道观察者被绑定到会话上之后触发</li><li><code>before-attach-user</code>：在用户观察者被绑定到会话上之前触发</li><li><code>attach-user</code>：在用户观察者被绑定到会话上之后触发</li></ul><p>下面是一个例子，我们在用户对象上实现了一个 <code>msgCount</code> 字段，用于存放收到的信息数量：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#7F848E;font-style:italic;">// 定义一个 msgCount 字段，用于存放收到的信息数量</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">declare</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">module</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">&#39;koishi&#39;</span><span style="color:var(--shiki-token-text);"> {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-keyword);">interface</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">User</span><span style="color:var(--shiki-token-text);"> {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-parameter);">msgCount</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">number</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  }</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-constant);">model</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">extend</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;user&#39;</span><span style="color:var(--shiki-token-text);">, {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">msgCount</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-string);">&#39;integer&#39;</span><span style="color:var(--shiki-token-text);">,</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">before</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;attach-user&#39;</span><span style="color:var(--shiki-token-text);">, (</span><span style="color:#E06C75;font-style:italic;">session</span><span style="color:var(--shiki-token-text);">, </span><span style="color:#E06C75;font-style:italic;">fields</span><span style="color:var(--shiki-token-text);">) </span><span style="color:var(--shiki-token-keyword);">=&gt;</span><span style="color:var(--shiki-token-text);"> {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-constant);">fields</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">add</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;msgCount&#39;</span><span style="color:var(--shiki-token-text);">)</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">middleware</span><span style="color:var(--shiki-token-text);">((</span><span style="color:#E06C75;font-style:italic;">session</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">Session</span><span style="color:var(--shiki-token-text);">&lt;</span><span style="color:var(--shiki-token-string);">&#39;msgCount&#39;</span><span style="color:var(--shiki-token-text);">&gt;, </span><span style="color:#E06C75;font-style:italic;">next</span><span style="color:var(--shiki-token-text);">) </span><span style="color:var(--shiki-token-keyword);">=&gt;</span><span style="color:var(--shiki-token-text);"> {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:#7F848E;font-style:italic;">// 这里更新了 msgCount 数据</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-constant);">session</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-constant);">user</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-parameter);">msgCount</span><span style="color:var(--shiki-token-operator);">++</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-keyword);">return</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-function);">next</span><span style="color:var(--shiki-token-text);">()</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">})</span></span></code></pre></div><h3 id="手动绑定" tabindex="-1">手动绑定 <a class="header-anchor" href="#手动绑定" aria-label="Permalink to &quot;手动绑定&quot;">​</a></h3><p>如果要绑定的字段无法提前判断，我们也提供了动态补充观察者字段的方法：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#7F848E;font-style:italic;">// 绑定一个用户观察者，确保 fields 中的字段都被加载</span></span>
<span class="line"><span style="color:var(--shiki-token-constant);">session</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">observeUser</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-parameter);">fields</span><span style="color:var(--shiki-token-text);">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 绑定一个频道观察者，确保 fields 中的字段都被加载</span></span>
<span class="line"><span style="color:var(--shiki-token-constant);">session</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">observeChannel</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-parameter);">fields</span><span style="color:var(--shiki-token-text);">)</span></span></code></pre></div>`,25),l=[o];function i(p,r,c,k,h,y){return a(),n("div",null,l)}const x=s(e,[["render",i]]);export{d as __pageData,x as default};
