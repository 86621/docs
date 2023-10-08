import{_ as t,s as e,q as o,S as a}from"./chunks/framework.26d7e063.js";const g=JSON.parse('{"title":"HTTP","description":"","frontmatter":{},"headers":[],"relativePath":"en-US/api/service/http.md","filePath":"en-US/api/service/http.md"}'),c={name:"en-US/api/service/http.md"},i=a('<h1 id="http" tabindex="-1">HTTP <a class="header-anchor" href="#http" aria-label="Permalink to &quot;HTTP&quot;">​</a></h1><p><code>ctx.http</code> 是 Koishi 的内置服务，其上封装了一套基于 <a href="https://github.com/axios/axios" target="_blank" rel="noreferrer">axios</a> 的网络请求 API。</p><p>你可能会有这样的疑问：为什么不直接使用 axios，而是使用 <code>ctx.http</code>？这是因为许多插件都需要发起网络请求，而诸如代理、超时等配置又通常是插件无关的。因此我们为这些通用需求提供了 <a href="./../../api/core/app.html#options-request-proxyagent">全局的配置项</a>，各个插件则只需要调用 <code>ctx.http</code> 即可。</p><h2 id="实例方法" tabindex="-1">实例方法 <a class="header-anchor" href="#实例方法" aria-label="Permalink to &quot;实例方法&quot;">​</a></h2><h3 id="ctx-http" tabindex="-1">ctx.http(method, url, config) <a class="header-anchor" href="#ctx-http" aria-label="Permalink to &quot;ctx.http(method, url, config)&quot;">​</a></h3><ul><li><strong>method:</strong> <code>string</code> 请求方法</li><li><strong>url:</strong> <code>string</code> 请求地址</li><li><strong>config:</strong> <code>AxiosRequestConfig</code> 配置项</li><li>返回值: <code>Promise&lt;any&gt;</code></li></ul><h3 id="ctx-http-axios" tabindex="-1">ctx.http.axios(url, config) <a class="header-anchor" href="#ctx-http-axios" aria-label="Permalink to &quot;ctx.http.axios(url, config)&quot;">​</a></h3><ul><li><strong>url:</strong> <code>string</code> 请求地址</li><li><strong>config:</strong> <code>AxiosRequestConfig</code> 配置项</li><li>返回值: <code>Promise&lt;AxiosResponse&lt;any&gt;&gt;</code></li></ul><h3 id="ctx-http-head" tabindex="-1">ctx.http.head(url, config) <a class="header-anchor" href="#ctx-http-head" aria-label="Permalink to &quot;ctx.http.head(url, config)&quot;">​</a></h3><h3 id="ctx-http-get" tabindex="-1">ctx.http.get(url, config) <a class="header-anchor" href="#ctx-http-get" aria-label="Permalink to &quot;ctx.http.get(url, config)&quot;">​</a></h3><h3 id="ctx-http-delete" tabindex="-1">ctx.http.delete(url, config) <a class="header-anchor" href="#ctx-http-delete" aria-label="Permalink to &quot;ctx.http.delete(url, config)&quot;">​</a></h3><ul><li><strong>url:</strong> <code>string</code> 请求地址</li><li><strong>config:</strong> <code>AxiosRequestConfig</code> 配置项</li><li>返回值: <code>Promise&lt;any&gt;</code></li></ul><p>发送 HEAD / GET / DELETE 请求。</p><h3 id="ctx-http-post" tabindex="-1">ctx.http.post(url, data, config) <a class="header-anchor" href="#ctx-http-post" aria-label="Permalink to &quot;ctx.http.post(url, data, config)&quot;">​</a></h3><h3 id="ctx-http-put" tabindex="-1">ctx.http.put(url, data, config) <a class="header-anchor" href="#ctx-http-put" aria-label="Permalink to &quot;ctx.http.put(url, data, config)&quot;">​</a></h3><h3 id="ctx-http-patch" tabindex="-1">ctx.http.patch(url, data, config) <a class="header-anchor" href="#ctx-http-patch" aria-label="Permalink to &quot;ctx.http.patch(url, data, config)&quot;">​</a></h3><ul><li><strong>url:</strong> <code>string</code> 请求地址</li><li><strong>data:</strong> <code>any</code> 请求数据</li><li><strong>config:</strong> <code>AxiosRequestConfig</code> 配置项</li><li>返回值: <code>Promise&lt;any&gt;</code></li></ul><p>发送 POST / PUT / PATCH 请求。</p><h3 id="ctx-http-ws" tabindex="-1">ctx.http.ws(url) <a class="header-anchor" href="#ctx-http-ws" aria-label="Permalink to &quot;ctx.http\\.ws(url)&quot;">​</a></h3><ul><li><strong>url:</strong> <code>string</code> 请求地址</li><li>返回值: <code>WebSocket</code></li></ul><p>创建一个 WebSocket 连接。</p>',21),r=[i];function l(h,n,s,d,p,u){return o(),e("div",null,r)}const f=t(c,[["render",l]]);export{g as __pageData,f as default};
