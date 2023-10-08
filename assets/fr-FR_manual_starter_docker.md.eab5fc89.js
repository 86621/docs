import{_ as r,p as i,s as l,D as t,I as s,S as n,v as e,L as a,q as c}from"./chunks/framework.3f494197.js";const P=JSON.parse('{"title":"在容器中使用","description":"","frontmatter":{"prev":{"text":"选择安装方式","link":"/fr-FR/manual/starter/"},"next":{"text":"Installation et configuration de plugins","link":"/zh-CN/manual/usage/market.html"}},"headers":[],"relativePath":"fr-FR/manual/starter/docker.md","filePath":"fr-FR/manual/starter/docker.md"}'),p={name:"fr-FR/manual/starter/docker.md"},k=n('<h1 id="在容器中使用" tabindex="-1">在容器中使用 <a class="header-anchor" href="#在容器中使用" aria-label="Permalink to &quot;在容器中使用&quot;">​</a></h1><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Docker 等容器化软件是以服务生产环境而开发的应用平台，在使用此类软件部署之时，我们相信你已经掌握了运维一台服务器所必须的知识，同时也理解了容器化的概念与相关软件的基础操作。如若不然，在除路由器或 NAS 等特殊环境外，请 <a href="./">选择其他安装方式</a>。</p></div><p>Koishi 提供了 <a href="https://hub.docker.com/r/koishijs/koishi" target="_blank" rel="noreferrer">Docker</a> 镜像，方便你在容器中运行 Koishi。你需要首先安装 <a href="https://podman.io" target="_blank" rel="noreferrer">Podman</a> 或 <a href="https://www.docker.com" target="_blank" rel="noreferrer">Docker</a> 来运行容器。</p><h2 id="启动容器" tabindex="-1">启动容器 <a class="header-anchor" href="#启动容器" aria-label="Permalink to &quot;启动容器&quot;">​</a></h2><p>使用以下命令启动容器：</p>',5),h=e("div",{class:"language-podman"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"podman"),e("pre",null,[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"var(--shiki-token-function)"}},"podman"),e("span",{style:{color:"var(--shiki-token-text)"}}," "),e("span",{style:{color:"var(--shiki-token-string)"}},"run"),e("span",{style:{color:"var(--shiki-token-text)"}}," "),e("span",{style:{color:"var(--shiki-token-number)"}},"-p"),e("span",{style:{color:"var(--shiki-token-text)"}}," "),e("span",{style:{color:"var(--shiki-token-number)"}},"5140"),e("span",{style:{color:"var(--shiki-token-string)"}},":5140"),e("span",{style:{color:"var(--shiki-token-text)"}}," "),e("span",{style:{color:"var(--shiki-token-string)"}},"koishijs/koishi")])])])],-1),d=e("div",{class:"language-docker"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"docker"),e("pre",null,[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"var(--shiki-token-function)"}},"docker"),e("span",{style:{color:"var(--shiki-token-text)"}}," "),e("span",{style:{color:"var(--shiki-token-string)"}},"run"),e("span",{style:{color:"var(--shiki-token-text)"}}," "),e("span",{style:{color:"var(--shiki-token-number)"}},"-p"),e("span",{style:{color:"var(--shiki-token-text)"}}," "),e("span",{style:{color:"var(--shiki-token-number)"}},"5140"),e("span",{style:{color:"var(--shiki-token-string)"}},":5140"),e("span",{style:{color:"var(--shiki-token-text)"}}," "),e("span",{style:{color:"var(--shiki-token-string)"}},"koishijs/koishi")])])])],-1),u=e("p",null,[a("许多插件依赖 "),e("a",{href:"https://www.npmjs.com/package/koishi-plugin-puppeteer",target:"_blank",rel:"noreferrer"},"koishi-plugin-puppeteer"),a(" 来进行图片渲染，故默认镜像中包含 Chromium。如果你认为镜像过大，不需要预装 Chromium，我们也提供了轻量版本：")],-1),_=e("div",{class:"language-podman"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"podman"),e("pre",null,[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"var(--shiki-token-function)"}},"podman"),e("span",{style:{color:"var(--shiki-token-text)"}}," "),e("span",{style:{color:"var(--shiki-token-string)"}},"run"),e("span",{style:{color:"var(--shiki-token-text)"}}," "),e("span",{style:{color:"var(--shiki-token-number)"}},"-p"),e("span",{style:{color:"var(--shiki-token-text)"}}," "),e("span",{style:{color:"var(--shiki-token-number)"}},"5140"),e("span",{style:{color:"var(--shiki-token-string)"}},":5140"),e("span",{style:{color:"var(--shiki-token-text)"}}," "),e("span",{style:{color:"var(--shiki-token-string)"}},"koishijs/koishi:latest-lite")])])])],-1),m=e("div",{class:"language-docker"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"docker"),e("pre",null,[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"var(--shiki-token-function)"}},"docker"),e("span",{style:{color:"var(--shiki-token-text)"}}," "),e("span",{style:{color:"var(--shiki-token-string)"}},"run"),e("span",{style:{color:"var(--shiki-token-text)"}}," "),e("span",{style:{color:"var(--shiki-token-number)"}},"-p"),e("span",{style:{color:"var(--shiki-token-text)"}}," "),e("span",{style:{color:"var(--shiki-token-number)"}},"5140"),e("span",{style:{color:"var(--shiki-token-string)"}},":5140"),e("span",{style:{color:"var(--shiki-token-text)"}}," "),e("span",{style:{color:"var(--shiki-token-string)"}},"koishijs/koishi:latest-lite")])])])],-1),v=n('<p>启动后将会绑定 Koishi 控制台到 5140 端口。</p><p>如果你需要持久化，请使用 <code>-v /some/place:/koishi</code> 来映射 Koishi 的文件。</p><p>如果需要更正时区，请使用 <code>-e TZ=Asia/Shanghai</code> 来设置时区。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Koishi 本体及其插件都可以控制台完成更新。在持久化文件过后更新容器仅会更新 Chromium 和 Node.js 等的版本。</p></div><h2 id="installation-de-plugins" tabindex="-1">Installation de plugins <a class="header-anchor" href="#installation-de-plugins" aria-label="Permalink to &quot;Installation de plugins&quot;">​</a></h2><p>在容器正常运行时，可以通过在浏览器中访问 <code>http://宿主机地址:5140</code> 在控制台中安装和启用插件。若无法访问请检查你的防火墙配置是否正确。</p>',6);function y(g,b,f,x,C,T){const o=i("tab-select");return c(),l("div",null,[k,t(o,{class:"code"},{"tab-podman":s(()=>[h]),"tab-docker":s(()=>[d]),_:1}),u,t(o,{class:"code"},{"tab-podman":s(()=>[_]),"tab-docker":s(()=>[m]),_:1}),v])}const S=r(p,[["render",y]]);export{P as __pageData,S as default};
