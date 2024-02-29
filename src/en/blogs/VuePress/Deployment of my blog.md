---
icon: edit
date: 2023-02-03
category:
  - VuePress
tag:
  - Deployment
  - GitHub Pages
  - Gitee Pages
star: true
---

# Deployment of my blog

## 概述

在尝试使用 [Hexo](https://hexo.io/zh-cn/)、[VuePress](https://v2.vuepress.vuejs.org/zh/) 构建博客后，我最终选定了更为熟悉的 VuePress （Vue 语法）构建我的第一个博客  
在使用 [VuePress Theme Hope](https://theme-hope.vuejs.press/zh/) 主题完成自定义的博客开发后，我迫不及待地开始部署博客，秉着提高访问速度的原则，我开始寻找部署到除 [GitHub Pages](https://docs.github.com/zh/Pages) 外的方法，可这一路似乎没有我想象中那么顺利

<!-- more -->

## 部署至 GitHub Pages

### **基本步骤**

如果你是通过 [vuepress-theme-hope](https://theme-hope.vuejs.press/zh/cookbook/tutorial/create.html) 主题创建的 VuePress 项目，那么部署博客至 GitHub Pages 将会非常容易：

#### 1. 确保在创建项目时**勾选**了创建自动部署文档的 GitHub 工作流

::: tip
没勾选也没关系，该步骤只是在**项目根目录**下创建一个用于 GitHub Actions 的工作流 `.yml` 文件： `.github/workflow/deploy-docs.yml` ，你完全可以手动创建这个目录，只要确保是在项目根目录下开始创建即可

若对上述名词感到陌生，可跳至[部署基本原理](#部署基本原理)
::: details 默认的 deploy-docs.yml

```yml
name: 部署文档

on:
  push:
    branches:
      # 确保这是你正在使用的分支名称
      - main

jobs:
  deploy-gh-pages:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
        with:
          fetch-depth: 0
          # 如果你文档需要 Git 子模块，取消注释下一行
          # submodules: true

      - name: 设置 Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 18
          cache: npm

      - name: 安装依赖
        run: npm ci

      - name: 构建文档
        env:
          NODE_OPTIONS: --max_old_space_size=8192
        run: |-
          npm run docs:build
          > src/.vuepress/dist/.nojekyll
      - name: 部署文档
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          # 这是文档部署到的分支名称
          branch: gh-pages
          folder: src/.vuepress/dist
```

:::

#### 2. 选择 GitHub Pages

[GitHub Pages](https://docs.github.com/zh/pages) 分为个人页面与项目页面：

- 个人页面：

  1. 必须将整个项目上传至如下仓库：  
     `https://github.com/GitHub用户名/GitHub用户名.github.io`  
     这意味着你在创建仓库时，仓库名必须为如下形式：  
     `GitHub用户名.github.io`
  2. 部署成功后的网址为 `https://GitHub用户名.github.io/`
  3. 每个 GitHub 账号只能部署**一个**个人页面

* 项目页面：

  1. 仓库命名没有限制，例如 `myproject`
  2. 部署成功后的网址为 `https://GitHub用户名.github.io/GitHub仓库名/`
  3. 不同于个人页面，项目页面没有数量限制

则按个人需求创建 GitHub 仓库后，配置部署站点的基础路径 [base 选项](https://v2.vuepress.vuejs.org/zh/reference/config.html)：

- 如果你选择部署至个人页面，那么你无需配置 `base` ，因为其默认值就是 `/`
- 如果你选择部署至项目页面，则必须在 `config.ts` 中配置 `base`：

```ts
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  // 必须以 `/` 开头和结束，且路径名必须与GitHub仓库名一致，包括大小写
  base: '/myproject/'
})
```

::: warning
部署至 Gitee Pages 的**项目页面**时，倘若你的 Gitee 仓库名中使用了大写字母，则配置 `base` 时必须转换为**小写字母**，因为 Gitee Pages 在部署时会默认将部署仓库名转换为小写  
例如 Gitee 仓库名为 `My-Project`，则该项目中的 `base` 就应为 `/my-project/`  
:::

#### 3. 触发工作流

（1） 使用 Git 管理项目后，确保当前处于主分支 `main`，因为项目默认的 `deploy-docs.yml` 文件中，是通过 `push` 指定分支（默认 `main`）的事件来触发工作流

无论你是修改 `.yml` 文件的分支名还是修改 Git 当前的分支名，都必须符合如下两点才能正确触发工作流并部署成功：

- 你所 `push` 的分支与 `.yml` 文件中的分支一样
- 该分支包含项目所有文件（例如主分支）

```yml
# 项目默认的 deploy-docs.yml
on:
  push:
    branches:
      # 确保这是你正在使用的分支名称
      - main
```

（2） 提交代码至 GitHub 仓库

执行 `git push` 将项目代码上传至你创建好的 GitHub 仓库中，上传成功后便可点开仓库选项卡中的 `Actions` 选项

如果前面都配置正确，此时你会在左侧菜单栏 `All workflows` 列表中看到一个名为 `部署文档` （项目默认工作流名字）的工作流正在运行，它正是你在 `push` 分支 `main` 时触发的工作流，等待一两分钟便可知道运行结果，也可点击该工作流，进入实时的**可视化运行图表**来查看具体的工作流进度

![](/articles/vuepress/actions.webp)

如果你是**第一次**使用 GitHub Actions，那么上述的工作流大概率会运行失败  
因为每个 GitHub 仓库都**默认**只让 GitHub Actions 读取仓库内容，**不允许读写**，因此需为 GitHub Actions **开放**当前仓库的读写权限，否则无法正常构建 GitHub Pages

点击仓库选项卡 `Settings`→`Actions`→`General`，在 `Workflow permissions`中选择读写权限 `Read and write permissions`后，点击保存即可

![](/articles/vuepress/workflowPermissions.webp)

::: tip
当然你也可以在第一次 `push` 前就修改当前仓库的 GitHub Actions 权限
:::

修改权限后，你可以选择再次执行 `git push` 以触发工作流（无任何修改的 push 将无法触发），或者点开 `Actions` 选项卡，点击之前失败的工作流后，选择重新运行所有任务即可，例如：

![](/articles/vuepress/rerun.webp)

由于当前工作流比较简单，因此在等待两分钟左右即可看到工作流运行成功的绿色箭头，同时你会看到一个由 GitHub Pages 触发的工作流 `pages build and deployment` 在运行，当它也运行成功后，离部署成功就近在咫尺了

#### 4. 设置部署分支

vuepress-theme-hope 主题默认的工作流中，是将构建后的 `src/.vuepress/dist/` 目录 push 到 GitHub 仓库中的 `gh-pages` 分支（本地仓库没有该分支），因此需要设置部署目录的分支来源

点击仓库选项卡 `Settings`-`Pages` 后，进行如下操作：

![](/articles/vuepress/deploy.webp)

选择后不要急着点击上方的部署网址（点了也只是 404 页面），因为 GitHub Pages 会**再次**触发新的 `pages build and deployment` 工作流，你可以切换到 `Actions` 选项中去查看，通常只要等待一两分钟就运行成功，此时再去点击部署网址就会发现，成功啦:smile:！

### **部署基本原理**

上面讲了一大堆 GitHub Actions，那它到底是什么呢？为什么只要在 push 指定分支时就能自动部署博客呢？

GitHub Actions 是一个实现持续集成（Continuous integration）和持续交付（Continuous delivery）的平台，你可粗略地理解为一个执行脚本命令的平台

当你为项目创建了一个工作流，即一系列的脚本命令后，工作流中设置在发生 `git push main` 这一特定动作时，就开始执行这个工作流，即开始在 GitHub Actions 的虚拟机运行器（runner）上执行一系列的脚本命令

举个例子，在每次修改博文后，你都需要手动构建，上传代码进行部署，在其他 Web 应用中可能还需要测试，这些每次部署都会重复执行的动作，便可理解为 Actions，只不过现在由 GitHub Actions 自动为我们在虚拟运行器通过脚本命令执行

::: tip 深入学习
如果想深入了解 GitHub Actions，可参考[这篇文章](https://github.com/mqyqingfeng/Blog/issues/237)或 [GitHub Actions 官方中文文档](https://docs.github.com/zh/actions/learn-github-actions/understanding-github-actions)
:::

不同的 Actions 可执行不同的任务，因此我们可以使用别人创建好的 Actions（不用造轮子），你可以到 GitHub 的 [Actions 市场](https://github.com/marketplace?type=actions) 搜索你需要的

::: tip Actions 命名
浏览 GitHub 官方的 Actions 市场会发现，所有 Actions 的命名都是基于以下格式：  
`Github用户名/Actions名`
:::

回到部署博客中，你可参考我博客中的[工作流代码](https://github.com/Wu-JunHui/Wu-JunHui.github.io/blob/main/.github/workflows/deploy-docs.yml)，每一步我都编写了详细的注释，因此我只列出博客 Actions 的步骤流程：

1. 检查仓库代码
2. 安装 Node.js
3. 安装项目依赖
4. 构建文档，即 build
5. 复制用于被百度收录的认证文件到构建目录
6. 部署文档至 GitHub Pages
7. 同步当前仓库代码到 Gitee
8. 部署文档至 Gitee Pages

## 部署至 Gitee Pages

虽然博客已成功地部署到了 GitHub Pages，但由于不可抗力因素，我必须想办法提高博客的访问速度，于是乎想到了 Gitee Pages

这里的部署也十分简单，只要在原先项目的工作流上增加任务步骤即可，也就是说同样需要借助 GitHub Actions，我使用的是 [yanglbme/gitee-pages-action](https://github.com/yanglbme/gitee-pages-action)，该 Actions 仓库下的 [README.md](https://github.com/yanglbme/gitee-pages-action#gitee-pages-action) 已有详细的使用教程，此处不再重复

::: tip
Gitee Pages 与 GitHub Pages 类似，也分为个人页面和项目页面，使用限制大致相同  
若你需要部署至 Gitee Pages 的个人页面，所创建的仓库名应为 `Gitee 用户名`，部署成功后的网址为 `https://Gitee用户名.gitee.io/`
:::

### 基本原理

`yanglbme/gitee-pages-action` 使用 Python 语言编写，可大致分为两步：

（1） 将 GitHub 仓库的代码同步至 Gitee 的仓库，这一步该 Actions 作者使用的是他人的 [wearerequired/git-mirror-action](https://github.com/wearerequired/git-mirror-action)（将 GitHub 仓库同步至任何平台）

::: tip
如果你有其他方法实现同步仓库的话，你可以忽略 `name` 为 `Sync to Gitee` 的任务步骤，即不使用这个任务步骤
:::

（2） 第二步就是该 Actions 作者自己编写的，基于同步后的 Gitee 仓库，构建 Gitee Pages

我们都知道通过 SSH 协议上传代码到远程仓库的配对原则：只有配置在远程仓库的 **SSH 公钥**与本地设备的 **SSH 私钥**配对才允许连接

因此在该 Actions 中：

- GitHub 仓库和 Gitee 仓库与本地设备需配置**同一套** SSH 公私秘钥
- 将本地设备的 **SSH 私钥**配置为 GitHub 仓库专属的**密匙**（secret，或叫令牌）后，GitHub Actions 就有访问该 GitHub 仓库以及 Gitee 仓库的权限，从而实现 Gitee Pages 自动部署

## 自定义域名

解决了网站的访问速度问题，接下来自然就是让网站的域名变得美观，因此我注册了 `outofforbit.com` 域名并完成了实名认证

由于是第一次接触域名之类的网络配置，因而并未购置任何服务器，以下是我不断踩坑总结出的两个结论：

一、无论是部署在 Gitee Pages、腾讯云或其他提供**静态网页托管服务**的平台，只要是在**国内**的服务器，使用自定义域名前，该域名**必须已完成备案**

::: tip In other words
只要域名解析指向的 IP 地址是国内，就需要进行备案
:::

二、正规流程的域名备案需提供该域名指向的服务器所提供的 **ICP 备案服务码**，这意味着你需要拥有一台服务器

::: tip

1. ICP 备案服务码虽然可以随意购买地到，但为了规避不必要的风险，我还是选择以后自己配置服务器时才进行备案
2. 阿里云提供的单独购买 ICP 备案服务码（一百大洋），也是需要绑定阿里云相关云产品才能使用，例如云服务器
   :::

另外，在前面寻找加快博客访问速度的方法时，我还了解到可通过 [CDN（内容分发网络）](https://baike.baidu.com/item/%E5%86%85%E5%AE%B9%E5%88%86%E5%8F%91%E7%BD%91%E7%BB%9C/4034265?fromtitle=CDN&fromid=420951&fr=aladdin) 进行加速，当我兴高采烈地购买了阿里云的 CDN 加速资源包并进行配置时，才发现如果要在国内加速，所加速的域名也**必须经过备案**，幸好未使用的 CDN 加速资源包可以五天无理由退款

## 国内各平台的静态网页托管服务

### [Gitee Pages](https://gitee.com/help/articles/4136#article-header0)

- 提供**免费**的静态网页托管服务，国内的访问速度也还可以，使用该服务前必须进行**实名认证**（手持身份证的那种）
- 暂时**不支持**自定义域名， 虽然开通 Gitee Pages Pro 服务即可自定义域名（同样需要备案），但 [Gitee 帮助中心](https://gitee.com/help/articles/4228#article-header0) 已表示：暂时关闭个人用户购买入口

### [Coding](https://coding.net/)

- 腾讯云旗下一站式 DevOps 研发管理平台，同样可以托管代码，创建代码仓库等
- 在我咨询腾讯云官方客服后得知，现在已经**不再支持**静态网页托管，必须通过腾讯云的云开发 Webify 部署新站点，参考 [Coding 网站托管](https://coding.net/help/docs/pages/operating.html)

### [腾讯云 Webify](https://webify.cloudbase.net/)

- 专为 Web 开发者打造的 Web 应用托管平台，按照官方文档可快速部署静态网页，可直接从 GitHub、GitLab、Gitee、Coding 四个平台导入仓库以快速部署 Web 应用，通过 Webify 平台创建的 Web 应用会自动部署到同一账号下的 [腾讯云 Serverless](https://serverless.cloud.tencent.com/try?c=sf)
- 支持使用**已备案**的自定义域名，默认生成的域名是一大串字符
- 部署 Web 应用**必须**开通创建一个对应的**云开发按量计费环境**，官网给出的计费参考：每日 PV 1000 的网站，每日产生的费用大约在 0.01~0.1 元左右（具体将根据应用实际使用资源情况而定）。[官方计费详情](https://webify.cloudbase.net/docs/faq/pricing/)
  ::: tip PV
  [PV（Page Views）](https://baike.baidu.com/item/%E9%A1%B5%E9%9D%A2%E6%B5%8F%E8%A7%88%E9%87%8F/4239489) 指页面浏览量，Page 一般是指普通的 HTML 网页，也包含 php、jsp 等动态产生的 HTML 内容  
  来自浏览器的一次 HTML 内容请求会被看作一个 PV，逐渐累计成为 PV 总数
  :::

### [阿里云 Codeup](https://www.aliyun.com/product/yunxiao/codeup)

- 基于 Git 的代码管理平台，提供代码托管、代码评审、代码扫描、质量检测、持续集成等功能
- 在搜集资料时了解到 Codeup 似乎更适合企业应用 [DevOps 开发模式](https://baike.baidu.com/item/devops/2613029?fromModule=lemma_search-box)，在咨询阿里云客服后得知，Codeup **不提供**静态网页部署服务

## 总结

以上就是我的博客部署之路，虽然不太顺利，但一路下来也学习了不少东西，例如 GitHub Actions，如果你对本篇文章有任何疑问或发现任何错误，欢迎评论区留言或 e-mail 我：wu-junhui@foxmail.com

## 参考

[vuepress-theme-hope/部署项目](https://theme-hope.vuejs.press/zh/cookbook/tutorial/deploy.html)  
[GitHub Actions 官方中文文档](https://docs.github.com/zh/actions/learn-github-actions/understanding-github-actions)
