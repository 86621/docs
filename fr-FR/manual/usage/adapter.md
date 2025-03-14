# La première conversation

安装完了 Koishi 并体验了插件市场，想必你已经等不及体验 Koishi 的功能了。现在就让我们立即开始与机器人的第一次对话吧！

## 在沙盒中模拟对话

在控制台中前往「沙盒」页面，在这里我们可以模拟与机器人的对话。

首先点击屏幕左上角的「添加用户」来创建一个虚拟用户 (我们可以看到新用户叫 Alice)，此时屏幕右侧会出现空白的聊天界面。点击屏幕下方的对话框，输入「help」，并按回车键发送。你会立即在聊天界面中看到机器人的回复。help 是一个内置指令，它的功能是列出当前所有可用的指令。因此，我们在回复中可以看到 echo 和 help。

这里的 echo 就是我们刚刚安装的插件，它的功能是将用户的输入原样返回。让我们现在尝试一下：输入「echo 你好」，并按回车键发送。你会看到机器人的回复是「你好」。

![sandbox](/manual/console/sandbox.light.webp) {.light-only}

![sandbox](/manual/console/sandbox.dark.webp) {.dark-only}

如果我们想要模拟群聊，那我们可以再次点击「添加用户」以创建更多的用户。随后，在顶部切换到「群聊模式」。这样，你就可以控制多个虚拟用户与机器人聊天了。如果你要体验的插件是下棋一类的多人交互插件，这会非常有用。

除此以外，如果某些指令需要一定的 [权限等级](../usage/customize.md#权限管理)，你也可以切换到「用户设置」中进行调整。

## 接入真实聊天平台

仅仅是在沙盒中对话是远远不够的。我们需要将机器人接入到真实的聊天平台中，才能让它真正地为我们服务。Koishi 使用适配器插件来支持各种聊天平台。下面是官方维护的适配器列表：

- [DingTalk](../../plugins/adapter/dingtalk.md)
- [Discord](../../plugins/adapter/discord.md)
- [KOOK](../../plugins/adapter/kook.md)
- [Lark](../../plugins/adapter/lark.md)
- [LINE](../../plugins/adapter/line.md)
- [邮件](../../plugins/adapter/mail.md)
- [Matrix](../../plugins/adapter/matrix.md)
- [OneBot](../../plugins/adapter/onebot.md)
- [QQ](../../plugins/adapter/qq.md)
- [Slack](../../plugins/adapter/slack.md)
- [Telegram](../../plugins/adapter/telegram.md)
- [微信公众号](../../plugins/adapter/wechat-official.md)
- [企业微信](../../plugins/adapter/wecom.md)
- [WhatsApp](../../plugins/adapter/whatsapp.md)

其中，常用的适配器插件已经预装在了 Koishi 中，你可以在插件配置中的 adapter 分组中找到它们。如果没有看到你想要的平台，你也可以在插件市场中搜索并安装更多适配器插件。

一个 Koishi 应用可以同时接入多个聊天平台的多个账号。每个账号对应一份插件配置，你可以参考 [添加更多插件](./market.md#添加更多插件) 中的方法添加新的插件配置。由于同一平台内接入的多个机器人共享了相同的用户数据。因此，你可以非常方便地在多个机器人之间切换以实现负载均衡。

不同平台的接入方式与难度存在较大的差异。对于不同的平台，你需要做好相应的准备工作。这些工作可能包括在平台内注册开发者账号、准备一台部署到公网的服务器等等。你可以在各个适配器插件的文档中找到详细的指引。

好消息是，Koishi 的大部分功能都不依赖特定的聊天平台。因此在进行准备工作的同时，你完全可以阅读本文档的后续部分，并在沙盒中体验并学习 Koishi 的功能。

## 对比沙盒与真实环境

事实上，大多数机器人框架都没有提供沙盒功能，或是倾向于用户在真实环境中进行体验。你可能会有疑惑：为什么 Koishi 要推荐使用沙盒功能呢？因此我们列出了沙盒的几点优势。

首先，沙盒可以让你快速地了解插件的效果，而不需要在真实环境中进行大量的测试。想象一下，你刚刚安装了一个陌生的插件，你并不知道应该如何使用它，也不知道它的效果是什么。最糟糕的情况下，一旦插件的某些功能触发了机器人的敏感行为，你的真实账号还存在被封禁的风险。而沙盒则可以让你在不用担心这些问题的情况下，快速地了解插件的功能。

其次，如果你是插件的开发者而非使用者，沙盒功能的意义则更大了：得益于 Koishi 的热重载机制，每次修改插件源码后，你只需要按下保存，即可立即在沙盒中体验修改后的效果。这允许你在任何设备上进行快速的迭代开发，而根本不需要准备真实环境的账号。

当然，沙盒并不能代替真实的聊天环境，有些插件的效果可能无法在沙盒中体验。因此，我们推荐你在沙盒中体验插件的基础功能，而在真实环境中进行更加深入的测试。
