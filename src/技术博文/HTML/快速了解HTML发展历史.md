---
icon: edit
date: 2022-07-10
category:
  - HTML
tag:
  - HTML发展历史
star: true
---

# 快速了解 HTML 发展历史

## 前言

HTML 对于前端开发者来说是再熟悉不过的一种标记语言，但它的起源与发展大家可能并不太了解。本文将以 HTML 每个**大版本号**的发布时间分隔**时间线**，以快速了解 HTML 的发展历史

<!-- more -->

## 一、HTML 1.0（无正式版本）

### 1990 年：HTML 诞生

万维网发明者、万维网联盟（W3C）创建者 [Tim.Berners-Lee](https://baike.baidu.com/item/%E8%92%82%E5%A7%86%C2%B7%E4%BC%AF%E7%BA%B3%E6%96%AF%C2%B7%E6%9D%8E/8868412?fr=aladdin) 与其同事一起创立了一种**标记语言 HTML**，它专门用于万维网的信息表示语言，且需通过 web 浏览器显示出效果

### 1993 年 6 月：HTML 第一版工作草案

由 **IETF** 发布的 HTML **工作草案**，此版本并**不是**正式的 HTML 1.0，因为当时有很多版本的 HTML，没有形成统一的标准版本

::: info IETF
[国际互联网工程任务组](https://baike.baidu.com/item/%E4%BA%92%E8%81%94%E7%BD%91%E5%B7%A5%E7%A8%8B%E4%BB%BB%E5%8A%A1%E7%BB%84/707674?fromtitle=IETF&fromid=2800318&fr=aladdin#7)（The Internet Engineering Task Force），是一个公开性质的大型民间国际团体，也是全球互联网最具权威的**技术标准化组织**
:::

## 二、HTML 2.0

### 1995 年 11 月：HTML 2.0

由 **IETF** 的 **HTML 工作组**作为 `RFC1866` 发布的**第一个官方版本**，HTML 首次被大众认可

HTML 2.0 实际上是各个版本的**超集**，当时各大浏览器厂商都有自己独特的标准，这些标准互不兼容，**IETF** 将一些优秀的标准集合在一起，希望让大家一起遵守。虽然顶级厂商依然不理会，可却得到了二三梯级的浏览器厂商的支持并拥护

::: info RFC1866
Request For Comments，表示一系列以编号排定的文件
:::

## 三、HTML 3.0

### 1997 年 1 月 14 日：HTML 3.2

**W3C** 组织取代 **IETF** 成为 **HTML** 标准化组织，其发布的 HTML 3.2 标准是 HTML 文档第一个被**广泛使用**的 W3C 推荐标准

HTML 3.2 向 HTML 2.0 标准添加了被广泛运用的特性，诸如字体、表格、applets、围绕图像的文本流，上标和下标，但其中的 `<font>` 标签，为 HTML 内容和呈现的分离这个重要的任务带来了不必要的麻烦

::: info W3C
[万维网联盟](https://baike.baidu.com/item/%E4%B8%87%E7%BB%B4%E7%BD%91%E8%81%94%E7%9B%9F/1458269?fromtitle=W3C%E7%BB%84%E7%BB%87&fromid=11005671&fr=aladdin)（World Wide Web Consortium），是国际最著名的**标准化组织**。1994 年成立后，已发布近百项相关万维网的标准，对万维网发展做出了杰出的贡献。[W3C 官网](https://www.w3.org/)，[W3C 中国官网](https://www.chinaw3c.org/)
:::

## 四、HTML 4.0

### 1997 年 12 月 18 日：HTML 4.0

由 W3C 组织发布，是 HTML 文档另一个重要的、广泛使用的 W3C 推荐标准

最重要的特性是引入了样式表（CSS）

### 1998 年 4 月 24 日：HTML 4.0 修正版

仅仅进行了一些编辑修正的第二个版本

### 1999 年 12 月 24 日：HTML 4.01

由 W3C 组织发布，是 HTML 文档另一个重要的、广泛使用的 W3C 推荐标准，是对 HTML 4.0 的一次较小的更新（进行了修正和漏洞修复）

### **转折点**：W3C 组织转换研究方向

此时 W3C 组织停止发展 HTML，转向研究 XHTML

W3C 组织接手 HTML 规范制定较晚，HTML 的语法规则松散，能自动包容错误，不能称为严格的规范，当时的 XML 语法规则严谨，且能实现与 HTML 一样的功能，于是 W3C 组织便放弃 HTML 转而发展 XHTML

::: tip XHTML
[XHTML](https://baike.baidu.com/item/XHTML/316621?fr=aladdin)：基于 XML 的等价物，可扩展超文本标记语言（e**X**tensible **H**yper**T**ext **M**arkup **L**anguage），同样是一种标记语言，表现方式与 HTML 类似，不过语法上更加严格
:::

### 2000 年 1 月 26 日：XHTML 1.0

由 W3C 组织发布的推荐标准，后经修订于 2002 年 8 月 重新发布

W3C 组织希望使用 XML 代替 HTML，但为了让各浏览器厂商及开发人员对 XML 严谨的语法规则有个过渡，所以发布了此过渡版本，之后再向 XML 转变

XHTML 1.0 是**基于 HTML 4.01** 的，并没有引入任何新标签或属性，唯一的区别是语法：HTML 可使用松散的语法，而 XHTML 则要求使用 XML 的严格语法

XHTML 1.0 的推出刚好碰上了 CSS 的崛起，此时 Web 开发设计者们开始意识到 **Web 标准**问题，基于 XHTML 的严格语法规范被视为编写 HTML 代码的最佳实践，因此使用严格的语法规范并非坏事

比如，HTML 4.01 允许你使用大写或小写字母标识标记元素和属性，XHTML 则只允许小写字母

### 2001 年 5 月 31 日：XHTML 1.1

XHTML **最后的独立标准**，2.0 止于草案阶段，XHTML5 则是属于 HTML 5 标准的一部分，且名称已改为 “以 XML 系列化的 HTML 5” ，而非 “可扩展的 HTML”

如果说 XHTML 1.0 是 XML 风格的 HTML，XHTML 1.1 则是货真价实的 XML
这意味着 XHTML 1.1 无法使用 `text/htmlmime-type` 直接输出  
然而，如果 Web 开发者使用 `XMLmime-type`，当时的主流浏览器中，IE 则压根不支持（:smile:没错，又是我）

::: tip MIME type
[MIME](https://baike.baidu.com/item/MIME/2900607?fromModule=lemma_search-box)(Multipurpose Internet Mail Extensions)：描述消息内容类型的互联网标准  
[MIME type](https://developer.mozilla.org/zh-CN/docs/Glossary/MIME_type)：表示指示文件类型的字符串，用于 Web 服务器告知浏览器所请求的资源的媒体类型，例如 Content-Type：text/HTML，表示内容是 text/HTML 类型
:::

## 五、HTML 5.0

### 2004 年：WHATWG 组织成立

2004 年 W3C 研讨会上，W3C 组织驳回了由 Mozilla 和 Opera 联合推出的应重新开放 HTML 的提案，并决定继续开发基于 XML 的替代品

因为改用 XHTML 标准将导致互联网 99% 的网页需要重写，增加开发难度，
所以 **Opera**、 **Mozilla 基金会**和 **Apple** 这些浏览器厂商成立了 WHATWG 组织，并**否决**了 W3C 组织制定的 Web 标准，提出了 `Web Applications 1.0`（后于 2007 年被 W3C 接纳并作为 HTML 5 第一部草案）

WHATWG 组织提议：

- 在 HTML 基础上进行**扩展**以适应新的 Web 应用
- 希望标准应当具备**向后兼容性**，能够跟随市场及技术的发展而**动态**调整，所有的改动或改善都可基于 HTML 宽松的语法
- 不希望是 W3C 组织制定一个死的标准，颁布之后再也不能修改，添加功能只能通过发布新版本 5.1、5.2 等，且严格的语法无疑增加开发人员的负担

::: info WHATWG 组织
[网页超文本应用技术工作小组](https://baike.baidu.com/item/WHATWG/5803339?fr=aladdin)（Web Hypertext Application Technology Working Group），一个以推动 HTML 5 标准为目的而成立的组织
:::

### 2006 年：Adobe 的 Flash 崛起，两组织合作

互联网格局不断变化，人们不再满足于看新闻和发邮件，更多是看视频和玩网页游戏，W3C 组织为了尽快夺回被 **Adobe** 抢占的市场，与此时在 HTML 上取得突破性进展的 WHATWG 组织**合作**：一边推行以 WHATWG 的成果为基础的 HTML 5，另一边则推行自家 XHTML 2.0

W3C 一路执着发展的 XHTML 2，虽然听上去和 XHTML 1 类似，但它们却有很多差别：XHTML 2 不向前兼容，甚至不兼容之前的 HTML，它是一种全新的语言

### 2007 年：HTML 工作组成立

W3C 组织创建了专门与 WHATWG 组织合作开发 HTML 规范的工作组

### 2008 年 1 月 22 日：第一个 HTML 5 草案

由 W3C 组织正式发布，HTML 5 技术结合了 HTML 4.01 的相关标准并革新，符合现代网络发展要求

IE、Chrome、FireFox、Safar，几大浏览器巨头都开始相继支持 HTML 5

### 2009 年：终止 XHTML 2.0 项目

W3C 组织宣布终止 XHTML 2.0 的项目，解散了 XHTML 团队

而 HTML 5 既支持松散语法，也支持 XHTML 1 规范的严格语法，这使得使用 XTML 1 规范的人松了一口气

### 2011 年：工作组的不同目标

在此之前数年，两方一同工作，但最终他们发现，各自有着不同的工作目标：

- **W3C 组织**希望为 HTML 5.0 推荐的功能划清界限，发布一个 "完成的" HTML5 版本

- **WHATWG 组织**希望继续致力于 HTML 的生活标准，不断维护规范和添加新功能，希望持续地维护一个 `HTML Living Standard`， 持续地维护该标准而不是锁定在一个带着已知问题的状态， 同时按照需求增加新的特性来发展整个平台

此后，WHATWG 一直在（与其他组织一同）开发 HTML 5 标准， W3C 则复制 WHATWG 的修复工作到他们所在的文档分支（也有其他的一些改动）

### 2012 年中期：新的编辑团队

W3C 组织推出了一个新的编辑团队，负责创建 HTML 5.0 **推荐标准**，并为下一个 HTML 版本准备工作草案

### 2014 年 10 月 28 日：定稿 HTML 5.0

作为稳定推荐版本，由 W3C 组织发布

::: info HTML 5 工作组
HTML 5 工作组包括：AOL, Apple, Google, IBM, Microsoft, Mozilla, Nokia, Opera, 以及数百个其他的供应商
:::

### 2015 年 1 月：Flash 过渡至 HTML 5

YouTube 彻底抛弃了 Flash，实现向 HTML 5 的全面过渡

随后，各个网站都开始从 Flash 转向 HTML 5

### 2016 年 11 月 1 日：HTML 5.1

由 W3C 组织发布的推荐标准，属于 HTML 5 版本的第一次更新

### 2017 年 12 月 14 日：HTML 5.2

由 W3C 组织发布的推荐标准，属于 HTML 5 版本的第二次更新

此次更新增加了 `<dialog>` 标签等新功能，弃用了 HTML 插件系统等原有功能，并整合了其他 W3C 委员会的进展，如对支付请求 API（Payment Request API）和演示 API（Presentation API）的支持

### 2019 年 5 月 28 日：W3C 与 WHATWG 签署合作备忘录

W3C 与 WHATWG 经过协商现最终签署了一份[《合作备忘录》](https://www.w3.org/2019/04/WHATWG-W3C-MOU.html)作为双方认可合作模式，继而共同开发**统一版本**的 HTML 与 DOM 规范

::: info 了解更多

- [W3C 官网新闻](https://www.w3.org/blog/2019/05/w3c-and-whatwg-to-work-together-to-advance-the-open-web-platform/)，[W3C 中国官网新闻](https://www.chinaw3c.org/blog-w3c-and-whatwg-to-work-together-to-advance-the-open-web-platform.html)
- W3C 组织的 GitHub 仓库：[whatwg-coord](https://github.com/w3c/whatwg-coord)，了解两个组织更多的合作内容
  :::

### 2021 年 1 月 28 日：蜕变！新的 HTML 标准

早在 2011 年 1 月 19 日，Google 工程师兼 HTML 5 标准编辑的 Ian Hickson 就通过 WHATWG 组织官网的博客向外发布了一篇文章 [HTML is the new HTML5](https://blog.whatwg.org/html-is-the-new-html5)

文中他提到，在最初制定 HTML 5 草案接近尾声时，就认识到人们对于增加 HTML 新功能的需求一直在高涨，因此他们那时就决定，在 HTML 5 发展至能真正称为 HTML 5 时，转换 HTML 的发展模式：

- 不再遵循规范的发展模式，即不再发布版本号，而是征求意见、征求实现等等
- HTML 标准将只被称为 **“HTML”**，且通过该网址随时维护：https://html.spec.whatwg.org/multipage/

经过多年发展，HTML 终于开始实施上述的发展模式，这意味着 HTML 语言成为一个**活的标准**

这也解释了当你到 W3C 官网[查询 HTML 5](https://www.w3.org/TR/?title=html) 相关标准时，会发现无论是先前发布的 HTML 5.2 推荐标准还是一直处于草案阶段的 HTML 5.3，都在 `2021-01-28` 这天被设置为 `Retired`，只能查询到一个正在使用的 HTML 标准（无版本号）

### 广义的 HTML 5

广义的 HTML 5 表示一系列的现代 Web 技术：HTMl 5 + CSS 3 + JavaScript，这个集合有时称为 HTML 5 和朋友，通常缩写为 HTML 5

## 总结

在 HTML 3.2 之前，HTML 的发展极为混乱，各软件厂商经常自行增加 HTML 标记，而各浏览器厂商为了保持最好的兼容性总是尽力支持各种 HTML 标记

在 HTML 发展历史中，最广为人知的就是 HTML 3.2 和 HTML 4.01。而沿用至今的 HTML 5 将 Web 带入一个成熟的应用平台，在这个平台上，视频、音频、图像、动画以及与设备的交互都进行了规范，虽然 HTML 5 的一些特性仍然不被某些浏览器支持，但它依然是一种 Web 未来的**发展趋势**

![HTML 发展历史](/articles/html/HTML历史.webp)

## 参考

[W3C：HTML 5 简介](https://www.w3school.com.cn/html/html5_intro.asp)  
[W3C：HTML 5 规范发布活动](https://www.w3school.com.cn/w3c/w3c_html.asp)  
[HTML 活规范（英文版）](https://html.spec.whatwg.org/multipage/)  
[HTML 活规范（中文版）](https://whatwg-cn.github.io/html/)（中文译版暂未与英文原版同步，建议查阅英文原版）  
[查找 W3C 制定的所有规范](https://www.w3.org/TR/)  
[MDN：HTML 参考](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Reference)（通常与最新的 HTML 5 规范同步更新）  
[菜鸟教程 HTML 5 元素参考手册](https://www.runoob.com/tags/html-reference.html)
