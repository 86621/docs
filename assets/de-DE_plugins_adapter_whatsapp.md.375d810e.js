import{_ as e,s as a,q as o,S as s}from"./chunks/framework.3f494197.js";const g=JSON.parse('{"title":"@koishijs/plugin-adapter-whatsapp","description":"","frontmatter":{},"headers":[],"relativePath":"de-DE/plugins/adapter/whatsapp.md","filePath":"de-DE/plugins/adapter/whatsapp.md"}'),t={name:"de-DE/plugins/adapter/whatsapp.md"},i=s('<h1 id="koishijs-plugin-adapter-whatsapp" tabindex="-1">@koishijs/plugin-adapter-whatsapp <a class="header-anchor" href="#koishijs-plugin-adapter-whatsapp" aria-label="Permalink to &quot;@koishijs/plugin-adapter-whatsapp&quot;">​</a></h1><h2 id="接入方式" tabindex="-1">接入方式 <a class="header-anchor" href="#接入方式" aria-label="Permalink to &quot;接入方式&quot;">​</a></h2><ol><li>前往 <a href="https://business.facebook.com/" target="_blank" rel="noreferrer">商务平台</a> 创建业务账户，并在 <a href="https://business.facebook.com/settings/security" target="_blank" rel="noreferrer">业务设置</a> 完成组织验证</li><li>参照 <a href="https://developers.facebook.com/docs/whatsapp/cloud-api/get-started" target="_blank" rel="noreferrer">官方入门指南</a> 进行操作</li><li>阅读 <a href="https://developers.facebook.com/docs/whatsapp/business-management-api/get-started" target="_blank" rel="noreferrer">Business API 概览</a>，创建系统用户访问口令，在 Available Permissions 中勾选 <code>whatsapp_business_messaging</code> 和 <code>whatsapp_business_management</code>，填入插件的 <code>systemToken</code> 字段。在当前页面，点击 Add assets，在左侧 Apps 菜单选中创建的 App，勾选 Develop app，点击 Save changes</li><li>在 <a href="https://developers.facebook.com" target="_blank" rel="noreferrer">应用面板</a>，左侧切换至 设置-基本 页面，点击应用密钥右侧的显示按钮，复制密钥填入插件的 <code>systemToken</code> 字段。</li><li>在 <a href="https://business.facebook.com/settings/whatsapp-business-accounts/" target="_blank" rel="noreferrer">商业账号</a> 页面选择生产或开发环境的账号集合，复制页面上方高亮的 ID，填入插件的 <code>id</code> 字段</li><li>在官方入门指南第三步配置 Webhooks 中，Callback URL 填写机器人的 <code>selfUrl</code> 值后连接 <code>/whatsapp</code>，Verify token 可填写随机的字符串，与插件的 verifyToken 配置保持一致，启用插件后点击 Verify and save</li><li>点击 Webhook 字段右侧的管理，在 messages 一行打勾</li></ol><h2 id="配置项" tabindex="-1">配置项 <a class="header-anchor" href="#配置项" aria-label="Permalink to &quot;配置项&quot;">​</a></h2><h3 id="config-id" tabindex="-1">config.id <a class="header-anchor" href="#config-id" aria-label="Permalink to &quot;config.id&quot;">​</a></h3><ul><li>类型：<code>string</code></li><li>必需选项</li></ul><p>商户 ID。</p><h3 id="config-secret" tabindex="-1">config.secret <a class="header-anchor" href="#config-secret" aria-label="Permalink to &quot;config.secret&quot;">​</a></h3><ul><li>类型：<code>string</code></li><li>必需选项</li></ul><p>应用密钥。</p><h3 id="config-systemtoken" tabindex="-1">config.systemToken <a class="header-anchor" href="#config-systemtoken" aria-label="Permalink to &quot;config.systemToken&quot;">​</a></h3><ul><li>类型：<code>string</code></li><li>必需选项</li></ul><p>系统用户访问令牌。</p><h3 id="config-verifytoken" tabindex="-1">config.verifyToken <a class="header-anchor" href="#config-verifytoken" aria-label="Permalink to &quot;config.verifyToken&quot;">​</a></h3><ul><li>类型：<code>string</code></li><li>必需选项</li></ul><p>Webhook 验证令牌。</p>',16),r=[i];function n(l,c,d,p,h,f){return o(),a("div",null,r)}const k=e(t,[["render",n]]);export{g as __pageData,k as default};
