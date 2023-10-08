import{_ as e,s as a,q as o,S as i}from"./chunks/framework.3f494197.js";const g=JSON.parse('{"title":"@koishijs/plugin-adapter-qq","description":"","frontmatter":{},"headers":[],"relativePath":"en-US/plugins/adapter/qq.md","filePath":"en-US/plugins/adapter/qq.md"}'),t={name:"en-US/plugins/adapter/qq.md"},n=i('<h1 id="koishijs-plugin-adapter-qq" tabindex="-1">@koishijs/plugin-adapter-qq <a class="header-anchor" href="#koishijs-plugin-adapter-qq" aria-label="Permalink to &quot;@koishijs/plugin-adapter-qq&quot;">​</a></h1><p>QQ (official robot) adapter.</p><h2 id="接入方法" tabindex="-1">接入方法 <a class="header-anchor" href="#接入方法" aria-label="Permalink to &quot;接入方法&quot;">​</a></h2><ol><li>Sign up at the <a href="https://bot.q.qq.com/open/#/type?appType=2" target="_blank" rel="noreferrer">QQ Channel Management Backend</a></li><li>Sign in the <a href="https://bot.q.qq.com/open/#/botlogin" target="_blank" rel="noreferrer">Management Backend</a> and create an official bot</li><li>创建完成后，在 <a href="https://bot.q.qq.com/#/developer/developer-setting" target="_blank" rel="noreferrer">频道机器人开发设置</a> 获取机器人基本数据 [id, token, key]</li><li>将上面的基本数据作为机器人配置项即可使用</li></ol><h2 id="机器人选项" tabindex="-1">机器人选项 <a class="header-anchor" href="#机器人选项" aria-label="Permalink to &quot;机器人选项&quot;">​</a></h2><h3 id="config-id" tabindex="-1">config.id <a class="header-anchor" href="#config-id" aria-label="Permalink to &quot;config.id&quot;">​</a></h3><ul><li>类型: <code>string</code></li></ul><p>机器人 id。</p><h3 id="config-key" tabindex="-1">config.key <a class="header-anchor" href="#config-key" aria-label="Permalink to &quot;config.key&quot;">​</a></h3><ul><li>类型: <code>string</code></li></ul><p>机器人密钥，管理端又称呼为 secret。</p><h3 id="config-token" tabindex="-1">config.token <a class="header-anchor" href="#config-token" aria-label="Permalink to &quot;config.token&quot;">​</a></h3><ul><li>类型: <code>string</code></li></ul><p>机器人 token。</p><h3 id="config-type" tabindex="-1">config.type <a class="header-anchor" href="#config-type" aria-label="Permalink to &quot;config.type&quot;">​</a></h3><ul><li>类型: <code>&#39;private&#39; | &#39;public&#39;</code></li></ul><p>是否为公域机器人。</p><h3 id="config-sandbox" tabindex="-1">config.sandbox <a class="header-anchor" href="#config-sandbox" aria-label="Permalink to &quot;config.sandbox&quot;">​</a></h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>true</code></li></ul><p>是否开启沙盒。</p><h3 id="config-endpoint" tabindex="-1">config.endpoint <a class="header-anchor" href="#config-endpoint" aria-label="Permalink to &quot;config.endpoint&quot;">​</a></h3><ul><li>类型: <code>string</code></li><li>默认值: <code>&#39;https://api.sgroup.qq.com/&#39;</code></li></ul><p>要请求的 API 网址。</p><h3 id="config-authtype" tabindex="-1">config.authType <a class="header-anchor" href="#config-authtype" aria-label="Permalink to &quot;config.authType&quot;">​</a></h3><ul><li>类型: <code>&#39;bot&#39; | &#39;bearer&#39;</code></li><li>默认值: <code>&#39;bot&#39;</code></li></ul><p>验证方式。</p>',26),l=[n];function r(c,d,h,p,s,f){return o(),a("div",null,l)}const q=e(t,[["render",r]]);export{g as __pageData,q as default};
