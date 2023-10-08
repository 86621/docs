import{_ as o,p as e,s as l,v as n,L as s,D as p,I as i,S as a,q as r}from"./chunks/framework.26d7e063.js";const _=JSON.parse('{"title":"进阶查询技巧","description":"","frontmatter":{},"headers":[],"relativePath":"fr-FR/guide/database/selection.md","filePath":"fr-FR/guide/database/selection.md"}'),c={name:"fr-FR/guide/database/selection.md"},k=a(`<h1 id="进阶查询技巧" tabindex="-1">进阶查询技巧 <a class="header-anchor" href="#进阶查询技巧" aria-label="Permalink to &quot;进阶查询技巧&quot;">​</a></h1><p><code>database.get()</code> 已经能实现一些简单的查询了。然而在实际的开发中，我们通常会遇到排序、分组乃至聚合等更复杂的查询需求。此时就轮到更加强大的 <code>database.select()</code> 方法登场了。</p><h2 id="基本用法" tabindex="-1">基本用法 <a class="header-anchor" href="#基本用法" aria-label="Permalink to &quot;基本用法&quot;">​</a></h2><p><code>database.select()</code> 会创建一个 <code>Selection</code> 对象。它提供了一系列的链式方法，你可以将其理解成一个查询语句的构造器。构造完成后，你可以调用 <code>.execute()</code> 方法来执行最终的查询。下面是一个简单的例子：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-constant);">database</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">get</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;foo&#39;</span><span style="color:var(--shiki-token-text);">, { </span><span style="color:var(--shiki-token-parameter);">id</span><span style="color:var(--shiki-token-text);">: { </span><span style="color:var(--shiki-token-parameter);">$gt</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-number);">5</span><span style="color:var(--shiki-token-text);"> } })</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 等价于</span></span>
<span class="line"><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-parameter);">database</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  .</span><span style="color:var(--shiki-token-function);">select</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;foo&#39;</span><span style="color:var(--shiki-token-text);">)</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  .</span><span style="color:var(--shiki-token-function);">where</span><span style="color:var(--shiki-token-text);">({ </span><span style="color:var(--shiki-token-parameter);">id</span><span style="color:var(--shiki-token-text);">: { </span><span style="color:var(--shiki-token-parameter);">$gt</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-number);">5</span><span style="color:var(--shiki-token-text);"> } })</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  .</span><span style="color:var(--shiki-token-function);">execute</span><span style="color:var(--shiki-token-text);">()</span></span></code></pre></div><h2 id="排序与分页" tabindex="-1">排序与分页 <a class="header-anchor" href="#排序与分页" aria-label="Permalink to &quot;排序与分页&quot;">​</a></h2><p>使用 <code>.orderBy()</code> 方法来对查询结果排序，使用 <code>.limit()</code> 和 <code>.offset()</code> 方法来分页：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#7F848E;font-style:italic;">// 按 id 降序排列，从第 100 条开始取 10 条数据</span></span>
<span class="line"><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-parameter);">database</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  .</span><span style="color:var(--shiki-token-function);">select</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;foo&#39;</span><span style="color:var(--shiki-token-text);">)</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  .</span><span style="color:var(--shiki-token-function);">orderBy</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;id&#39;</span><span style="color:var(--shiki-token-text);">, </span><span style="color:var(--shiki-token-string);">&#39;desc&#39;</span><span style="color:var(--shiki-token-text);">)</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  .</span><span style="color:var(--shiki-token-function);">limit</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-number);">10</span><span style="color:var(--shiki-token-text);">)</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  .</span><span style="color:var(--shiki-token-function);">offset</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-number);">100</span><span style="color:var(--shiki-token-text);">)</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  .</span><span style="color:var(--shiki-token-function);">execute</span><span style="color:var(--shiki-token-text);">()</span></span></code></pre></div><h2 id="求值表达式" tabindex="-1">求值表达式 <a class="header-anchor" href="#求值表达式" aria-label="Permalink to &quot;求值表达式&quot;">​</a></h2><p><code>.orderBy()</code> 和 <code>.where()</code> 方法都支持传入一个函数，这个函数会接受一个 <code>row</code> 参数，表示当前正在处理的数据行。你可以在这个函数中返回一个值，这个值会被用于排序或筛选。</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#7F848E;font-style:italic;">// 返回 id 大于 5 的数据行，并按 id 升序排列</span></span>
<span class="line"><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-parameter);">database</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  .</span><span style="color:var(--shiki-token-function);">select</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;foo&#39;</span><span style="color:var(--shiki-token-text);">)</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  .</span><span style="color:var(--shiki-token-function);">where</span><span style="color:var(--shiki-token-text);">(</span><span style="color:#E06C75;font-style:italic;">row</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">=&gt;</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">$</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">gt</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-constant);">row</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-parameter);">id</span><span style="color:var(--shiki-token-text);">, </span><span style="color:var(--shiki-token-number);">5</span><span style="color:var(--shiki-token-text);">))</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  .</span><span style="color:var(--shiki-token-function);">orderBy</span><span style="color:var(--shiki-token-text);">(</span><span style="color:#E06C75;font-style:italic;">row</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">=&gt;</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">row</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-parameter);">id</span><span style="color:var(--shiki-token-text);">)</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  .</span><span style="color:var(--shiki-token-function);">execute</span><span style="color:var(--shiki-token-text);">()</span></span></code></pre></div><p>这里的 <code>$.gt()</code> 是一个求值表达式。你可以在 <a href="./../../api/database/evaluation.html">这里</a> 看到完整的求值表达式 API。</p><h2 id="字段映射" tabindex="-1">字段映射 <a class="header-anchor" href="#字段映射" aria-label="Permalink to &quot;字段映射&quot;">​</a></h2><p><code>.project()</code> 方法可以用于映射查询结果。它接受一个对象，对象的键表示要映射的字段名，值表示映射的表达式。下面是一个例子：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#7F848E;font-style:italic;">// 返回的数组元素将只含有 a, b 属性</span></span>
<span class="line"><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-parameter);">database</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  .</span><span style="color:var(--shiki-token-function);">select</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;foo&#39;</span><span style="color:var(--shiki-token-text);">)</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  .</span><span style="color:var(--shiki-token-function);">project</span><span style="color:var(--shiki-token-text);">({</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-function);">a</span><span style="color:var(--shiki-token-text);">: </span><span style="color:#E06C75;font-style:italic;">row</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">=&gt;</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">$</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">add</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-constant);">row</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-parameter);">id</span><span style="color:var(--shiki-token-text);">, </span><span style="color:var(--shiki-token-number);">1</span><span style="color:var(--shiki-token-text);">),         </span><span style="color:#7F848E;font-style:italic;">// a = id + 1</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-function);">b</span><span style="color:var(--shiki-token-text);">: </span><span style="color:#E06C75;font-style:italic;">row</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">=&gt;</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">$</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">multiply</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-constant);">row</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-parameter);">id</span><span style="color:var(--shiki-token-text);">, </span><span style="color:var(--shiki-token-number);">2</span><span style="color:var(--shiki-token-text);">),    </span><span style="color:#7F848E;font-style:italic;">// b = id * 2</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  })</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  .</span><span style="color:var(--shiki-token-function);">execute</span><span style="color:var(--shiki-token-text);">()</span></span></code></pre></div><h2 id="聚合查询" tabindex="-1">聚合查询 <a class="header-anchor" href="#聚合查询" aria-label="Permalink to &quot;聚合查询&quot;">​</a></h2><p><code>.execute()</code> 也可以传入一个带有聚合运算的求值函数。如果你这样做，此时返回的结果将不再是一个数组，而是该表达式计算出的值。</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#7F848E;font-style:italic;">// 返回 id 大于 5 的数据行的数量</span></span>
<span class="line"><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-parameter);">database</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  .</span><span style="color:var(--shiki-token-function);">select</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;foo&#39;</span><span style="color:var(--shiki-token-text);">)</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  .</span><span style="color:var(--shiki-token-function);">where</span><span style="color:var(--shiki-token-text);">(</span><span style="color:#E06C75;font-style:italic;">row</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">=&gt;</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">$</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">gt</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-constant);">row</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-parameter);">id</span><span style="color:var(--shiki-token-text);">, </span><span style="color:var(--shiki-token-number);">5</span><span style="color:var(--shiki-token-text);">))</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  .</span><span style="color:var(--shiki-token-function);">execute</span><span style="color:var(--shiki-token-text);">(</span><span style="color:#E06C75;font-style:italic;">row</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">=&gt;</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">$</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">count</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-constant);">row</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-parameter);">id</span><span style="color:var(--shiki-token-text);">))</span></span></code></pre></div><p>除了 <code>.count()</code> 外还有其他的一些聚合运算，例如 <code>$.sum()</code>，<code>$.max()</code> 等。聚合运算与其他求值函数的区别在于，聚合运算的外部不能再包含 <code>row</code> 的引用。</p><p>此外，只有特定方法中才能使用聚合运算，例如 <code>.execute()</code> 和 <code>.having()</code> 等。</p><h2 id="分组查询" tabindex="-1">分组查询 <a class="header-anchor" href="#分组查询" aria-label="Permalink to &quot;分组查询&quot;">​</a></h2><p><code>.groupBy()</code> 和 <code>.having()</code> 方法可以用于分组查询。<code>.groupBy()</code> 方法接受一个字段名或求值函数，<code>.having()</code> 方法接受一个含有聚合运算并返回布尔值的表达式。下面是一个例子：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#7F848E;font-style:italic;">// 按照 value 字段分组，返回结果数大于 5 的分组</span></span>
<span class="line"><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-parameter);">database</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  .</span><span style="color:var(--shiki-token-function);">select</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;foo&#39;</span><span style="color:var(--shiki-token-text);">)</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  .</span><span style="color:var(--shiki-token-function);">groupBy</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;value&#39;</span><span style="color:var(--shiki-token-text);">)</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  .</span><span style="color:var(--shiki-token-function);">having</span><span style="color:var(--shiki-token-text);">(</span><span style="color:#E06C75;font-style:italic;">row</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">=&gt;</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">$</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">gt</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-constant);">$</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">count</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-constant);">row</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-parameter);">id</span><span style="color:var(--shiki-token-text);">), </span><span style="color:var(--shiki-token-number);">5</span><span style="color:var(--shiki-token-text);">))</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  .</span><span style="color:var(--shiki-token-function);">execute</span><span style="color:var(--shiki-token-text);">()</span></span></code></pre></div><p><code>.groupBy()</code> 可以接受一个数组，表示同时对数组中的字段进行分组。甚至也可以是一个对象，与 <code>.project()</code> 中的用法类似。</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#7F848E;font-style:italic;">// 返回的数据将按照 id - value 的值分组</span></span>
<span class="line"><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-parameter);">database</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  .</span><span style="color:var(--shiki-token-function);">select</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;foo&#39;</span><span style="color:var(--shiki-token-text);">)</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  .</span><span style="color:var(--shiki-token-function);">groupBy</span><span style="color:var(--shiki-token-text);">({</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-function);">key</span><span style="color:var(--shiki-token-text);">: </span><span style="color:#E06C75;font-style:italic;">row</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">=&gt;</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">$</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">subtract</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-constant);">row</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-parameter);">id</span><span style="color:var(--shiki-token-text);">, </span><span style="color:var(--shiki-token-constant);">row</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-parameter);">value</span><span style="color:var(--shiki-token-text);">),</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  })</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  .</span><span style="color:var(--shiki-token-function);">execute</span><span style="color:var(--shiki-token-text);">()</span></span></code></pre></div><p><code>.having()</code> 中可以使用的 <code>row</code> 属性仅限于 <code>.groupBy()</code> 中的字段。</p><h3 id="添加字段" tabindex="-1">添加字段 <a class="header-anchor" href="#添加字段" aria-label="Permalink to &quot;添加字段&quot;">​</a></h3><p><code>.groupBy()</code> 还额外接受一个二参数，用于在查询结果中添加聚合字段。这个参数是一个对象，同样与 <code>.project()</code> 中的用法类似。下面是一个例子：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#7F848E;font-style:italic;">// 返回的数据包含 value, sum, count 三个属性</span></span>
<span class="line"><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-parameter);">database</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  .</span><span style="color:var(--shiki-token-function);">select</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;foo&#39;</span><span style="color:var(--shiki-token-text);">)</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  .</span><span style="color:var(--shiki-token-function);">groupBy</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;value&#39;</span><span style="color:var(--shiki-token-text);">, {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-function);">sum</span><span style="color:var(--shiki-token-text);">: </span><span style="color:#E06C75;font-style:italic;">row</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">=&gt;</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">$</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">sum</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-constant);">row</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-parameter);">id</span><span style="color:var(--shiki-token-text);">),</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-function);">count</span><span style="color:var(--shiki-token-text);">: </span><span style="color:#E06C75;font-style:italic;">row</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">=&gt;</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">$</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">count</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-constant);">row</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-parameter);">id</span><span style="color:var(--shiki-token-text);">),</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  })</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  .</span><span style="color:var(--shiki-token-function);">execute</span><span style="color:var(--shiki-token-text);">()</span></span></code></pre></div><h3 id="多级分组" tabindex="-1">多级分组 <a class="header-anchor" href="#多级分组" aria-label="Permalink to &quot;多级分组&quot;">​</a></h3><p>可以通过链式调用 <code>.groupBy()</code> 方法来实现多级分组。下面是一个例子：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-parameter);">database</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  .</span><span style="color:var(--shiki-token-function);">select</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;foo&#39;</span><span style="color:var(--shiki-token-text);">)</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  .</span><span style="color:var(--shiki-token-function);">groupBy</span><span style="color:var(--shiki-token-text);">([</span><span style="color:var(--shiki-token-string);">&#39;uid&#39;</span><span style="color:var(--shiki-token-text);">, </span><span style="color:var(--shiki-token-string);">&#39;pid&#39;</span><span style="color:var(--shiki-token-text);">], {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-function);">submit</span><span style="color:var(--shiki-token-text);">: </span><span style="color:#E06C75;font-style:italic;">row</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">=&gt;</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">$</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">sum</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-number);">1</span><span style="color:var(--shiki-token-text);">),</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-function);">accept</span><span style="color:var(--shiki-token-text);">: </span><span style="color:#E06C75;font-style:italic;">row</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">=&gt;</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">$</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">sum</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-constant);">row</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-parameter);">value</span><span style="color:var(--shiki-token-text);">),</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  })</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  .</span><span style="color:var(--shiki-token-function);">groupBy</span><span style="color:var(--shiki-token-text);">([</span><span style="color:var(--shiki-token-string);">&#39;uid&#39;</span><span style="color:var(--shiki-token-text);">], {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-function);">submit</span><span style="color:var(--shiki-token-text);">: </span><span style="color:#E06C75;font-style:italic;">row</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">=&gt;</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">$</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">sum</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-constant);">row</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-parameter);">submit</span><span style="color:var(--shiki-token-text);">),</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-function);">accept</span><span style="color:var(--shiki-token-text);">: </span><span style="color:#E06C75;font-style:italic;">row</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">=&gt;</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">$</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">sum</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-constant);">$</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">if</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-constant);">$</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">gt</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-constant);">row</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-parameter);">accept</span><span style="color:var(--shiki-token-text);">, </span><span style="color:var(--shiki-token-number);">0</span><span style="color:var(--shiki-token-text);">), </span><span style="color:var(--shiki-token-number);">1</span><span style="color:var(--shiki-token-text);">, </span><span style="color:var(--shiki-token-number);">0</span><span style="color:var(--shiki-token-text);">)),</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  })</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  .</span><span style="color:var(--shiki-token-function);">orderBy</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;uid&#39;</span><span style="color:var(--shiki-token-text);">)</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  .</span><span style="color:var(--shiki-token-function);">execute</span><span style="color:var(--shiki-token-text);">()</span></span></code></pre></div>`,32),y={id:"连接查询-实验性",tabindex:"-1"},h=n("a",{class:"header-anchor",href:"#连接查询-实验性","aria-label":'Permalink to "连接查询 <badge type="warning">实验性</badge>"'},"​",-1),v=a(`<p>最后介绍一下连接查询的用法。使用 <code>.join()</code> 可以将多个表连接起来，返回一个新的 <code>Selection</code>，其属性分别对应多个表的名称。下面是一个例子：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#7F848E;font-style:italic;">// 返回的数据包含 foo, bar 两个属性</span></span>
<span class="line"><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-parameter);">database</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  .</span><span style="color:var(--shiki-token-function);">join</span><span style="color:var(--shiki-token-text);">([</span><span style="color:var(--shiki-token-string);">&#39;foo&#39;</span><span style="color:var(--shiki-token-text);">, </span><span style="color:var(--shiki-token-string);">&#39;bar&#39;</span><span style="color:var(--shiki-token-text);">], (</span><span style="color:#E06C75;font-style:italic;">foo</span><span style="color:var(--shiki-token-text);">, </span><span style="color:#E06C75;font-style:italic;">bar</span><span style="color:var(--shiki-token-text);">) </span><span style="color:var(--shiki-token-keyword);">=&gt;</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">$</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">eq</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-constant);">foo</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-parameter);">id</span><span style="color:var(--shiki-token-text);">, </span><span style="color:var(--shiki-token-constant);">bar</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-parameter);">id</span><span style="color:var(--shiki-token-text);">))</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  .</span><span style="color:var(--shiki-token-function);">execute</span><span style="color:var(--shiki-token-text);">()</span></span></code></pre></div>`,2);function x(d,u,f,g,b,m){const t=e("badge");return r(),l("div",null,[k,n("h2",y,[s("连接查询 "),p(t,{type:"warning"},{default:i(()=>[s("实验性")]),_:1}),s(),h]),v])}const C=o(c,[["render",x]]);export{_ as __pageData,C as default};
