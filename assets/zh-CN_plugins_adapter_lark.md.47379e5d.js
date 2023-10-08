import{_ as e,s as a,q as o,S as i}from"./chunks/framework.26d7e063.js";const k=JSON.parse('{"title":"@koishijs/plugin-adapter-lark","description":"","frontmatter":{},"headers":[],"relativePath":"zh-CN/plugins/adapter/lark.md","filePath":"zh-CN/plugins/adapter/lark.md"}'),t={name:"zh-CN/plugins/adapter/lark.md"},r=i('<h1 id="koishijs-plugin-adapter-lark" tabindex="-1">@koishijs/plugin-adapter-lark <a class="header-anchor" href="#koishijs-plugin-adapter-lark" aria-label="Permalink to &quot;@koishijs/plugin-adapter-lark&quot;">​</a></h1><h2 id="接入方法" tabindex="-1">接入方法 <a class="header-anchor" href="#接入方法" aria-label="Permalink to &quot;接入方法&quot;">​</a></h2><ol><li>在开发者后台 (<a href="https://open.larksuite.com/app/" target="_blank" rel="noreferrer">Lark</a> / <a href="https://open.feishu.cn/app/" target="_blank" rel="noreferrer">飞书</a>) 新建<strong>企业自建应用</strong>，点击应用名称进入应用详情页。</li><li>点击凭证与基础信息，获取 App ID 和 App Secret 值，填写到插件配置对应字段。</li><li>点击事件订阅，获取 Encrypt Key 和 Verification Token 值，填写到插件配置对应字段。</li><li>在事件订阅页面，确保添加了 <code>接收消息v2.0</code> (<code>im.message.receive_v1</code>) 事件。</li><li>按实际情况配置插件或机器人全局的 <code>selfUrl</code> 值，然后启动插件。</li><li>将第 5 步中配置的值加上 <code>path</code> 的值，填写到飞书开发者后台事件订阅页面的<strong>请求地址配置</strong>中，并点击完成。</li><li>若第 6 步的 URL 验证未通过，请检查你所配置的地址是否正确。</li></ol><p>参考文档：<a href="https://open.larksuite.com/document/home/develop-a-bot-in-5-minutes/coding" target="_blank" rel="noreferrer">https://open.larksuite.com/document/home/develop-a-bot-in-5-minutes/coding</a></p><h2 id="配置项" tabindex="-1">配置项 <a class="header-anchor" href="#配置项" aria-label="Permalink to &quot;配置项&quot;">​</a></h2><h3 id="options-appid" tabindex="-1">options.appId <a class="header-anchor" href="#options-appid" aria-label="Permalink to &quot;options.appId&quot;">​</a></h3><ul><li>类型：<code>string</code></li></ul><p>机器人的应用 ID。</p><h3 id="options-appsecret" tabindex="-1">options.appSecret <a class="header-anchor" href="#options-appsecret" aria-label="Permalink to &quot;options.appSecret&quot;">​</a></h3><ul><li>类型：<code>string</code></li></ul><p>机器人的应用密钥。</p><h3 id="options-encryptkey" tabindex="-1">options.encryptKey <a class="header-anchor" href="#options-encryptkey" aria-label="Permalink to &quot;options.encryptKey&quot;">​</a></h3><ul><li>类型：<code>string</code></li></ul><p>机器人的 Encrypt Key。</p><h3 id="options-verificationtoken" tabindex="-1">options.verificationToken <a class="header-anchor" href="#options-verificationtoken" aria-label="Permalink to &quot;options.verificationToken&quot;">​</a></h3><ul><li>类型：<code>string</code></li></ul><p>事件推送的验证令牌。</p><h2 id="http-配置项" tabindex="-1">HTTP 配置项 <a class="header-anchor" href="#http-配置项" aria-label="Permalink to &quot;HTTP 配置项&quot;">​</a></h2><h3 id="options-path" tabindex="-1">options.path <a class="header-anchor" href="#options-path" aria-label="Permalink to &quot;options.path&quot;">​</a></h3><ul><li>类型：<code>string</code></li><li>默认值：<code>&#39;/feishu&#39;</code> 或 <code>&#39;/lark&#39;</code></li></ul><p>服务器监听的路径。</p><h3 id="options-selfurl" tabindex="-1">options.selfUrl <a class="header-anchor" href="#options-selfurl" aria-label="Permalink to &quot;options.selfUrl&quot;">​</a></h3><ul><li>类型：<code>string</code></li></ul><p>Koishi 服务暴露在公网的地址，会覆盖 <a href="./../../api/core/app.html#options-selfurl"><code>app.config.selfUrl</code></a> 的值。</p><h3 id="options-verifytoken" tabindex="-1">options.verifyToken <a class="header-anchor" href="#options-verifytoken" aria-label="Permalink to &quot;options.verifyToken&quot;">​</a></h3><ul><li>类型：<code>boolean</code></li></ul><p>接受事件推送时是否验证令牌。</p><h3 id="options-verifysignature" tabindex="-1">options.verifySignature <a class="header-anchor" href="#options-verifysignature" aria-label="Permalink to &quot;options.verifySignature&quot;">​</a></h3><ul><li>类型：<code>boolean</code></li></ul><p>接受事件推送时是否验证签名。</p>',30),l=[r];function n(p,s,c,d,h,u){return o(),a("div",null,l)}const m=e(t,[["render",n]]);export{k as __pageData,m as default};
