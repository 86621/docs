import{_ as e,s as t,q as r,S as a}from"./chunks/framework.26d7e063.js";const _=JSON.parse('{"title":"插件市场 (Market)","description":"","frontmatter":{},"headers":[],"relativePath":"ja-JP/plugins/console/market.md","filePath":"ja-JP/plugins/console/market.md"}'),i={name:"ja-JP/plugins/console/market.md"},o=a('<h1 id="插件市场" tabindex="-1">插件市场 (Market) <a class="header-anchor" href="#插件市场" aria-label="Permalink to &quot;插件市场 (Market)&quot;">​</a></h1><h2 id="配置项" tabindex="-1">配置项 <a class="header-anchor" href="#配置项" aria-label="Permalink to &quot;配置项&quot;">​</a></h2><h3 id="search-endpoint" tabindex="-1">search.endpoint <a class="header-anchor" href="#search-endpoint" aria-label="Permalink to &quot;search.endpoint&quot;">​</a></h3><ul><li>类型: <code>string</code></li></ul><p>用于搜索插件市场的网址。默认跟随当前的 npm registry。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>一个规范的 <a href="https://github.com/npm/registry/blob/master/docs/REGISTRY-API.md" target="_blank" rel="noreferrer">npm registry</a> 服务器会包含搜索功能。但并不是所有 npm 镜像都支持了搜索 API (例如 <a href="https://registry.npmmirror.com" target="_blank" rel="noreferrer">https://registry.npmmirror.com</a>)。如果你使用了不支持搜索的镜像，请设置此项，否则插件市场将无法显示。</p><p>你可以填入我们的官方镜像：<a href="https://registry.koishi.chat/index.json" target="_blank" rel="noreferrer">https://registry.koishi.chat/index.json</a>。</p></div><h3 id="search-timeout" tabindex="-1">search.timeout <a class="header-anchor" href="#search-timeout" aria-label="Permalink to &quot;search.timeout&quot;">​</a></h3><ul><li>类型: <code>number</code></li><li>默认值: <code>30000</code></li></ul><p>搜索插件市场的最长时间，单位为毫秒。</p><h3 id="registry-endpoint" tabindex="-1">registry.endpoint <a class="header-anchor" href="#registry-endpoint" aria-label="Permalink to &quot;registry.endpoint&quot;">​</a></h3><ul><li>类型: <code>string</code></li></ul><p>用于搜索版本信息的网址。默认跟随当前的 npm registry。</p><h3 id="registry-timeout" tabindex="-1">registry.timeout <a class="header-anchor" href="#registry-timeout" aria-label="Permalink to &quot;registry.timeout&quot;">​</a></h3><ul><li>类型: <code>string</code></li></ul><p>搜索版本信息的最长时间，单位为毫秒。</p>',15),s=[o];function n(l,c,h,d,p,m){return r(),t("div",null,s)}const g=e(i,[["render",n]]);export{_ as __pageData,g as default};
