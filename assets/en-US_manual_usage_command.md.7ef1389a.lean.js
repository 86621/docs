import{_ as c,p as l,s as d,D as a,I as t,v as e,L as o,S as i,q as r}from"./chunks/framework.3f494197.js";const se=JSON.parse('{"title":"Command System","description":"","frontmatter":{},"headers":[],"relativePath":"en-US/manual/usage/command.md","filePath":"en-US/manual/usage/command.md"}'),h={name:"en-US/manual/usage/command.md"},m=e("h1",{id:"command-system",tabindex:"-1"},[o("Command System "),e("a",{class:"header-anchor",href:"#command-system","aria-label":'Permalink to "Command System"'},"​")],-1),p=e("p",null,"After learning the basic usage of the Koishi Console, we can now talk about how to talk with bots! Let's start with the example from the previous section:",-1),u=e("p",null,"Available commands:",-1),f=e("p",{class:"indent-1"},"echo Send messages",-1),_=e("p",{class:"indent-1"},"help Show help",-1),g=e("p",null,'Type "help <command>" to see syntax and examples for a specific command.',-1),b=i("",5),w=e("p",null,"Command: echo <message...>",-1),k=e("p",null,"Send messages",-1),y=e("p",null,"Available options:",-1),v=e("p",{class:"indent-1"},"-e, --escape Escape characters in message",-1),x=e("p",{class:"indent-1"},"-E, --unescape Unescape characters in message",-1),T=e("p",null,"You might find that the help itself is a command as well, so is it possible to use help to show the help message of help itself? The answer is positive:",-1),A=e("p",null,"Command: help [command]",-1),S=e("p",null,"Show help",-1),q=e("p",null,"Available options:",-1),C=e("p",{class:"indent-1"},"-a, --authority show authority requirements",-1),P=e("p",{class:"indent-1"},"-H, --show-hidden show hidden options and commands",-1),I=i("",4),K=e("p",null,"Please type to send",-1),V=e("p",null,[o("The behavior would be affected by the options as well. An option usually starts with "),e("code",null,"-"),o(" or "),e("code",null,"--"),o(", followed by a fixed word without any spaces, the word is the name of the option. There are no order requirements between options, but generally we should put options before parameters. Let's try out!")],-1),E=e("img",{src:"https://koishi.chat/logo.png",width:"100"},null,-1),M=e("p",null,[o("In the example above, the option "),e("code",null,"-E"),o(" that we used changed the outputs. We will talk about it in detail in the next section.")],-1),N=e("p",null,[o("In addition to being required and optional, the arguments can be divided into fixed and variable length. A variable-length argument would be fed all characters including whitespace characters, while a fixed-length one stops feeding when it reads whitespace characters. The variable-length argument is defined by "),e("code",null,"..."),o(" follows the parameter name. For example, the argument of "),e("code",null,"echo"),o(" is variable-length. If it is required to pass whitespace characters into a fixed-length argument, you can wrap the whole argument into quotes, just like:")],-1),D=e("p",null,"Additionally, options might require parameters as well. You should see a help information as below when you have any translate plugin installed.",-1),z=e("p",null,"Command: translate <text...>",-1),L=e("p",null,"Translate Text",-1),U=e("p",null,"Available options:",-1),W=e("p",{class:"indent-1"},"-s, --source <lang> Source Language (Auto-detect by default)",-1),B=e("p",{class:"indent-1"},"-t, --target <lang> Target Language (Chinese by default)",-1),F=i("",10),H=e("p",null,"Command: user",-1),O=e("p",null,"User Management",-1),R=e("p",null,"Available subcommands:",-1),Y=e("p",{class:"indent-1"},"authorize Permission Management",-1),j=e("p",{class:"indent-1"},"user.locale Language Preference",-1),$=i("",2),G=e("p",null,[o("If the parent command didn't have a feature itself, then the effect of "),e("code",null,"user"),o(" and "),e("code",null,"user -h"),o(" are the same.In that situation, we can use spaces instead of dots to call derivative subcommands:")],-1),J=i("",14);function Q(X,Z,ee,ae,te,oe){const n=l("chat-message"),s=l("chat-panel");return r(),d("div",null,[m,p,a(s,null,{default:t(()=>[a(n,{nickname:"Alice"},{default:t(()=>[o("help")]),_:1}),a(n,{nickname:"Koishi"},{default:t(()=>[u,f,_,g]),_:1})]),_:1}),b,a(s,null,{default:t(()=>[a(n,{nickname:"Alice"},{default:t(()=>[o("help echo")]),_:1}),a(n,{nickname:"Koishi"},{default:t(()=>[w,k,y,v,x]),_:1})]),_:1}),T,a(s,null,{default:t(()=>[a(n,{nickname:"Alice"},{default:t(()=>[o("help help")]),_:1}),a(n,{nickname:"Koishi"},{default:t(()=>[A,S,q,C,P]),_:1})]),_:1}),I,a(s,null,{default:t(()=>[a(n,{nickname:"Alice"},{default:t(()=>[o("echo")]),_:1}),a(n,{nickname:"Koishi"},{default:t(()=>[K]),_:1})]),_:1}),V,a(s,null,{default:t(()=>[a(n,{nickname:"Alice"},{default:t(()=>[o('echo <image url="https://koishi.chat/logo.png"/>')]),_:1}),a(n,{nickname:"Koishi"},{default:t(()=>[o('<image url="https://koishi.chat/logo.png"/>')]),_:1}),a(n,{nickname:"Alice"},{default:t(()=>[o('echo -E <image url="https://koishi.chat/logo.png"/>')]),_:1}),a(n,{nickname:"Koishi"},{default:t(()=>[E]),_:1})]),_:1}),M,N,a(s,null,{default:t(()=>[a(n,{nickname:"Alice"},{default:t(()=>[o('help "foo bar"')]),_:1})]),_:1}),D,a(s,null,{default:t(()=>[a(n,{nickname:"Alice"},{default:t(()=>[o("help translate")]),_:1}),a(n,{nickname:"Koishi"},{default:t(()=>[z,L,U,W,B]),_:1}),a(n,{nickname:"Alice"},{default:t(()=>[o("translate -t ja Hello, world")]),_:1}),a(n,{nickname:"Koishi"},{default:t(()=>[o("こんにちは世界")]),_:1})]),_:1}),F,a(s,null,{default:t(()=>[a(n,{nickname:"Alice"},{default:t(()=>[o("user")]),_:1}),a(n,{nickname:"Koishi"},{default:t(()=>[H,O,R,Y,j]),_:1})]),_:1}),$,a(s,null,{default:t(()=>[a(n,{nickname:"Alice"},{default:t(()=>[o("user.locale en")]),_:1}),a(n,{nickname:"Koishi"},{default:t(()=>[o("User data updated.")]),_:1})]),_:1}),G,a(s,null,{default:t(()=>[a(n,{nickname:"Alice"},{default:t(()=>[o("user locale zh ")]),_:1}),a(n,{nickname:"Koishi"},{default:t(()=>[o("User data has been changed.")]),_:1})]),_:1}),J])}const ie=c(h,[["render",Q]]);export{se as __pageData,ie as default};
