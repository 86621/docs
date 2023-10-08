import{_ as r,p as s,s as l,D as a,I as t,S as c,v as n,L as e,q as d}from"./chunks/framework.3f494197.js";const q=JSON.parse('{"title":"Advanced Command Tricks","description":"","frontmatter":{},"headers":[],"relativePath":"en-US/manual/recipe/execution.md","filePath":"en-US/manual/recipe/execution.md"}'),h={name:"en-US/manual/recipe/execution.md"},u=c('<h1 id="advanced-command-tricks" tabindex="-1">Advanced Command Tricks <a class="header-anchor" href="#advanced-command-tricks" aria-label="Permalink to &quot;Advanced Command Tricks&quot;">​</a></h1><h2 id="quotes" tabindex="-1">Quotes <a class="header-anchor" href="#quotes" aria-label="Permalink to &quot;Quotes&quot;">​</a></h2><p>Koishi would regard the content in quotes (whatever full-width or half-width) as a single parameter. This would be useful in many cases, for example:</p><ul><li>Passing parameters with spaces, otherwise spaces would be treated as delimiters between parameters.</li><li>Passing parameters that start with <code>-</code>, otherwise they would be treated as options.</li><li>Passing an empty string as the parameter, otherwise it would be treated as <code>true</code>.</li><li>Passing numbers as string, otherwise they would be treated as <code>number</code> type.</li></ul><h2 id="interpolation" tabindex="-1">Interpolation <a class="header-anchor" href="#interpolation" aria-label="Permalink to &quot;Interpolation&quot;">​</a></h2><p>You could use <code>$()</code> to inject the results from other commands into your current command:</p>',6),m=n("p",null,"By default, text in single quotes would not be escaped. So it can be used when you don't want the parameter to be escaped:",-1),p=n("p",null,[e("Lastly, there is another interpolation approach in the "),n("a",{href:"https://eval.koishi.chat",target:"_blank",rel:"noreferrer"},"koishi-plugin-eval"),e(" plugin.")],-1),_=n("h2",{id:"fuzzy-matching",tabindex:"-1"},[e("Fuzzy Matching "),n("a",{class:"header-anchor",href:"#fuzzy-matching","aria-label":'Permalink to "Fuzzy Matching"'},"​")],-1),f=n("p",null,"In the daily use, it is not surprise that you make typos. In this case, Koishi would show hints based on similar commands:",-1),b=n("p",null,[e("You could also change the value of "),n("a",{href:"./../../api/core/app.html#options-minsimilarity"},"minSimilarity"),e(" in the global configuration to adjust the threshold of the fuzzy matching. Very convenient, isn't it?")],-1);function g(k,w,y,x,v,P){const o=s("chat-message"),i=s("chat-panel");return d(),l("div",null,[u,a(i,null,{default:t(()=>[a(o,{nickname:"Alice"},{default:t(()=>[e("echo foo$(echo bar)")]),_:1}),a(o,{nickname:"Koishi"},{default:t(()=>[e("foobar")]),_:1})]),_:1}),m,a(i,null,{default:t(()=>[a(o,{nickname:"Alice"},{default:t(()=>[e("echo 'foo$(echo bar)'")]),_:1}),a(o,{nickname:"Koishi"},{default:t(()=>[e("foo$(echo bar)")]),_:1})]),_:1}),p,_,f,a(i,null,{default:t(()=>[a(o,{nickname:"Alice"},{default:t(()=>[e("ecko hello")]),_:1}),a(o,{nickname:"Koishi"},{default:t(()=>[e("Command not found.Do you mean echo?Send a period to apply the suggestion.")]),_:1}),a(o,{nickname:"Alice"},{default:t(()=>[e(".")]),_:1}),a(o,{nickname:"Koishi"},{default:t(()=>[e("hello")]),_:1})]),_:1}),b])}const T=r(h,[["render",g]]);export{q as __pageData,T as default};
