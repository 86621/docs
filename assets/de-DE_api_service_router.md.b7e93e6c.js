import{_ as e,s as t,q as o,S as r}from"./chunks/framework.3f494197.js";const m=JSON.parse('{"title":"网络服务 (Router)","description":"","frontmatter":{},"headers":[],"relativePath":"de-DE/api/service/router.md","filePath":"de-DE/api/service/router.md"}'),a={name:"de-DE/api/service/router.md"},c=r('<h1 id="网络服务" tabindex="-1">网络服务 (Router) <a class="header-anchor" href="#网络服务" aria-label="Permalink to &quot;网络服务 (Router)&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Koishi 默认情况下并不会监听任何端口，如要启用网络服务请记得配置 <a href="./../core/app.html#options-port"><code>options.port</code></a>。</p></div><p><code>ctx.router</code> 是 Koishi 的内置服务，提供了一个类似 <a href="https://github.com/koajs/router" target="_blank" rel="noreferrer">Koa Router</a> 的简单路由系统，用于管理 Koishi 应用收到的网络请求。除了 Koa Router 所支持的部分方法外，Router API 还提供了一些额外的功能，例如支持接受 WebSocket 连接等。</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>我们在扩展了 Koa Router 的同时，对于其常用方法也支持了自动的副作用处理。当一个插件被卸载时，其上注册的路由也将同时被删除。而未在下方列出的方法可能并不支持副作用处理，因此请避免使用。</p></div><h2 id="实例方法" tabindex="-1">实例方法 <a class="header-anchor" href="#实例方法" aria-label="Permalink to &quot;实例方法&quot;">​</a></h2><h3 id="ctx-router-method" tabindex="-1">ctx.router[method](path, middleware) <a class="header-anchor" href="#ctx-router-method" aria-label="Permalink to &quot;ctx.router\\[method\\](path, middleware)&quot;">​</a></h3><ul><li><strong>method:</strong> 可以是 <code>get</code>, <code>post</code>, <code>put</code>, <code>delete</code>, <code>patch</code> 或 <code>all</code> (仅能是小写)</li><li><strong>path:</strong> <code>string | RegExp | (string | RegExp)[]</code> 路径</li><li><strong>middleware:</strong> <code>Function</code> Koa 中间件</li></ul><p>处理特定路径上的网络请求。具体请参见 <a href="https://github.com/koajs/router/blob/master/API.md" target="_blank" rel="noreferrer">这里</a>。</p><h3 id="ctx-router-ws" tabindex="-1">ctx.router.ws(path, handler) <a class="header-anchor" href="#ctx-router-ws" aria-label="Permalink to &quot;ctx.router\\.ws(path, handler)&quot;">​</a></h3><ul><li><strong>path:</strong> <code>string | RegExp | (string | RegExp)[]</code> 路径</li><li><strong>handler:</strong> <code>WebSocketHandler</code> 处理函数，接受下列参数 <ul><li><strong>socket:</strong> <a href="https://github.com/websockets/ws/blob/master/doc/ws.md#class-websocket" target="_blank" rel="noreferrer"><code>WebSocket</code></a> WebSocket 连接</li><li><strong>request:</strong> <a href="https://nodejs.org/api/http.html#class-httpincomingmessage" target="_blank" rel="noreferrer"><code>IncomingMessage</code></a> 网络请求</li></ul></li></ul><p>在给定的路径上支持 WebSocket 连接。</p>',11),s=[c];function d(i,l,n,h,p,u){return o(),t("div",null,s)}const _=e(a,[["render",d]]);export{m as __pageData,_ as default};
