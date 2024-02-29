---
icon: edit
date: 2023-01-02
category:
  - Git
tag:
  - 版本控制
star: true
---

# 基于 Git 的版本控制基本流程

## 前言

本文介绍基于 Git 进行基本的版本控制，阅读本文前请确保已对**版本控制**和 [Git 软件](https://git-scm.com/)有一定的了解

<!-- more -->

## 概述

版本控制贯穿整个前端项目的开发，基于**分布式版本控制系统**的运行模式，使用 Git 进行版本控制时，可基本分为在**客户端**（本地电脑）以及**服务器**（GitHub 等开源项目托管平台）的不同操作

## 一、本地管理项目

本地管理意味着只在开发者的本地电脑中进行操作，不涉及任何联网操作

本地管理的**核心思想**就是将当前的前端项目保存至一个本地仓库，可基本分为以下四个步骤

### 1. 创建 .gitignore 配置文件

在**项目根目录**下创建 **.gitignore** 配置文件，它用于忽略当前项目中无需使用 Git 进行管理的文件，该文件没有后缀名

#### 1.1 编辑 .gitignore 文件

在 .gitignore 文件中，不仅可忽略单独的某个文件，还可忽略某个文件夹及其目录下的所有文件，参考示例：

```.gitignore
# .gitignore 文件格式规范：
# 以 # 开头的是注释
# 以 / 结尾的是目录
# 以 / 开头防止递归
# 以 ! 开头表示取反

# 忽略任何目录下名为 node_modules 的文件夹
node_modules/

# 只忽略当前目录（项目根目录）下名为 example 的文件
/exmaple

# 忽略所有文件名（包含后缀名）包含 .abc 的文件
*.abc

# 但不忽略 example.abc 文件，即使上一步忽略了.abc 文件
!example.abc

# 只忽略 abc 目录下的 .txt 文件，诸如 abc/example/a.txt 的不会忽略
abc/*.txt

# 忽略 abc 目录及其所有子目录下的 .txt 文件
abc/**/*.txt
```

上述示例中，部分使用了 **glob 模式** 进行文件和文件夹的匹配，它是简化了的正则表达式，常用匹配规则：

（1） <code>**\***</code> 表示匹配 0 个或多个任何字符  
（2） <code>**[]**</code> 表示匹配任何一个列在**方括号**中的字符，例如 `[git]` 则匹配 `g` 或 `i` 或 `t`  
（3）在方括号中使用**短横线 <code> -</code>** 分隔两个字符时，表示匹配这两个字符范围内的所有字符，例如 `[0-9]` 表示匹配所有 0-9 的数字  
（4） <code>**？**</code> 表示只匹配一个任意字符  
（5） <code>**\*\***</code> 表示匹配任意中间目录，例如 `a/\*\*/z` 可匹配 `a/z`、`a/b/z`、`a/b/c/z` 等

::: tip

1. 被加入到 .gitignore 配置文件的文件，不会出现在未跟踪（untracked）文件列表
2. 已跟踪的文件无法进行忽略，因此需在初始化本地仓库前创建好 .gitignore 配置文件
   :::

#### 1.2 使用 .gitkeep 配置文件

当某个目录下只有**唯一一个**文件或文件夹且**被加入**到忽略文件中，例如目录 <code>abc/efg/xyz</code>，Git 就不会追踪该目录

而后续开发过程中，若需在目录 <code> abc/efg/</code> 下生成一个新的文件或文件夹，同时需要使用 Git 进行跟踪，此时就可在该目录下创建一个 **.gitkeep** 配置文件，表示让 Git 正常跟踪该目录，**.gitkeep** 配置文件无需编辑任何内容，无文件后缀名

### 2. 初始化本地仓库

打开终端（命令行窗口），确保终端运行目录为**项目根目录**，运行以下终端命令，表示将以当前项目根目录创建一个空的 Git 本地仓库：

```sh
git init
```

::: warning
必须安装 [Git 软件](https://git-scm.com/)才能运行 git 命令
:::

::: tip windows 系统终端打开方法

1. 打开项目根目录，例如桌面上名为 `music` 的项目文件夹，打开的路径应为： `C:\Users\Administrator\Desktop\music`
2. 在上一步打开的窗口中，**单击**菜单中的地址栏，输入 `cmd` 后按回车即可打开命令行窗口

PS：  
当然你也可以通过 `win + R` 调出运行窗口，输入 `cmd` 后按回车调出命令行窗口，但此时终端运行目录在默认的 `C:\Users\Administrator`，因此你需要通过 `cd` 命令来手动切换到项目根目录

或者使用 **Git** 软件提供的命令行窗口，只需右键本地的项目根目录，点击鼠标右键菜单栏中的 `Git Bash Here` 即可

若你正在使用 **VSCode** 进行开发，可在打开项目后直接通过快捷键 <code>ctrl + `</code> 来使用 **VSCode** 的集成终端

:::

执行命令后，终端会提示 <code>Initialized empty Git repository in "本地项目完整目录"</code> ，同时项目根目录下会自动创建一个名为 `.git` 的**隐藏文件夹**，它就是当前项目的 Git 本地仓库，里面包含了初始化仓库的必要文件，是 Git 仓库的必要组成部分，**不可删除**

::: tip
**git init** 命令只需执行一次，若再次执行终端会提示重复初始化已存在仓库：<code>Reinitialized existing Git repository in "本地项目完整目录"</code>
:::

### 3. 跟踪文件并加入暂存区

运行以下终端命令：

```sh
git status
```

执行命令后的结果一般可称为**状态报告**，在本次状态报告中：  
（1）当前在 master 主分支（最新版 Git 为 main 主分支）  
（2）未有任何提交  
（3）当前未被 Git 跟踪的文件列表（Untracked files）  
（4）提示当前暂存区未有任何文件可提交

![](/articles/git/statusReport1.webp)

由于是刚初始化的仓库，因此所有文件都是**未跟踪**状态（<span style="color:#d42c2a">文件名为红色</span>），在确认文件无误后即可执行以下终端命令，表示跟踪**所有文件**并加入暂存区

```sh
git add .
```

::: info 命令说明
<code>git add .</code>（英文句号）是开发中常用的命令，它表示一次性将所有新增的和修改过的文件加入暂存区，适用于工作区中需被暂存的文件个数较多的时候  
你也可以单独将某个文件加入暂存区，例如 `git add index.html`
:::

执行完命令后终端不会有任何提示信息，此时再次执行终端命令 <code>git status</code>，会发现所有文件都已加入至暂存区（<span style="color:#109100">文件名为绿色</span>）

![](/articles/git/statusReport2.webp)

### 4. 提交至本地仓库

前面完成初始化的本地空仓库 “嗷嗷待哺”，此时就可执行以下终端命令，将暂存区内的所有文件提交至本地仓库进行保存

```sh
git commit -m "init project"
```

::: info 命令说明
<code>git commit</code> 命令表示进行提交操作，<code>-m</code> 选项后是本次的提交消息，用于对本次提交的内容进行描述，如初始化项目（init project）
:::

执行命令成功后，终端会报告本次提交中：

- `数字 file changed`：被改动的文件数量（添加或修改的文件数量）
- `数字 insertions`：表示在上述文件内插入新内容的行数

此时再次执行终端命令 <code>git status</code>，终端会提示当前处于 master 主分支，<code>Nothing to commit, working tree clean</code>，表明工作区中所有的文件都处于`“未修改”`的状态，即没有对工作区的任何文件进行任何修改，没有任何文件需要被提交

::: tip 查看提交日志
在进行一次本地提交后，可运行终端命令 `git log` 来查看所有的本地提交记录
:::

## 二、托管项目

在本地管理项目后，即可将项目托管至 [GitHub](https://github.com/) 或 [Gitee](https://gitee.com/)，两者上传步骤基本一致

### 1. 生成 SSH key

**SSH** 是 <code>Secure Shell Protocol</code> 的首字母缩写，安全外壳协议，是一种网络安全协议，通过对网络数据的**加密**，提供了不安全网络环境下的**安全远程登录**和其他**安全网络服务**

而 SSH key 则是用于**本地仓库**和 GitHub 或 Gitee 之间免登录的**加密数据传输**，它由公钥和私钥组成：  
（1）公钥，public key，需要配置到 GitHub 或 Gitee 中  
（2）私钥，private key，存放于客户端的电脑中

#### 1.1 检查已生成的密匙对

**每台设备**只需配置一对 **SSH 公私密匙** 即可，若之前已生成过则**无需重复生成**，可直接复用  
因此在生成**新**的 SSH 密匙对之前，可以先**检查**所用设备是否已生成，**否则**在生成新的 SSH 密匙对时会要求重写另一个密钥，即将其保存至其他地方

在任意位置打开 <code>Git Bash</code>，执行以下终端命令：

```bash
ls -al ~/.ssh
```

若在本地的默认密匙保存目录下存在密匙文件，此时 `Git Bash` 会显示列表，否则显示无法获取列表

#### 1.2 生成密匙对

在确认自己的设备没有可用的 SSH 密匙后，在任意位置打开 <code>Git Bash</code>，执行以下终端命令：

```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
```

::: info 命令说明

1. Ed25519 是一种算法，若当前设备系统不支持该算法，应使用以下命令创建：  
   <code>ssh-keygen -t rsa -b 4096 -C"用户邮箱地址"</code>（rsa 算法）
2. 命令最后的邮箱地址会被加入到生成的 SSH 密匙中，最初是为了便于辨识，原则上只是一个标识符，并不强制使用具体的邮箱（为方便辨识使用 Github 或 Gitee 账户绑定的邮箱）
   :::

该命令执行分为**三个步骤**：  
（1）`第一次`回车运行命令，终端提示键入将要保存的密匙文件名，可**直接回车**使用默认名字：<code>c/Users/Administrator/.ssh/id_ed25519</code>

::: tip
若之前已生成过 SSH 密匙，再次生成**相同算法**的密匙时，直接回车使用默认密匙名会提示是否覆盖已有的密匙文件：键入 `y` 即表示覆盖，键入 `n` 则直接退出生成命令  
因此若需要生成**多个** SSH 密匙，必须在当前步骤命名密匙文件
:::

（2）`第二次`回车选择保存路径后，终端提示键入使用 SSH 密匙的安全密码，可**直接回车**表示不使用

（3）`第三次`回车终端提示再次键入上一步的安全密码以确认，由于上一步未使用所以可**直接按回车**，至此生成 SSH 密匙流程结束

::: warning
只能使用 **Git** 提供的 **Git Bash** 命令行终端执行上述命令

由于是配置当前电脑设备的密匙，因此无需在项目根目录下打开 Git Bash，在任意地方打开都可

无论是配置到 GitHub 还是 Gitee，SSH 密匙生成的步骤都是**一样的**

:::

### 2. 配置 SSH key

#### 2.1 获取公钥

获取公钥的目的是为了将其配置到 GitHub 或 Gitee 上

在成功生成 SSH 密钥后，默认密匙保存路径 `C:\Users\Administrator\.ssh` 下就有 <code>id_ed25519</code> （私钥文件）和 <code>id_ed25519.pub</code> （公钥文件）

:::tip
若是使用 rsa 算法，则生成的两个文件就是 <code>id_rsa</code> 和 <code>id_rsa.pub</code>
:::

因此，可通过以下两种方法获取 <code>SSH 公钥</code>：

（1）在 SSH 密匙默认保存路径 `C:\Users\Administrator\.ssh` 下，通过**记事本**或 **VSCode** 打开 <code>id_ed25519.pub</code> 公钥文件，复制公钥内容

::: tip
Windows 系统**推荐使用 VSCode** 打开秘钥文件，无论是直接拖拉到 VSCode 还是右键 `通过 code 打开`，都不会被系统设置为默认打开程序

如果通过**记事本**打开秘钥文件，可能会将记事本设置为该类型文件的**默认打开程序**，如果你希望恢复原样，可尝试以下方法：  
（1）桌面上新建一个文本文档后，重命名为 `.exe` 的程序文件，忽视系统 "更改后缀不可用" 的提示  
（2）右键秘钥文件，`打开方式` → `选择默认程序`，接着选择你刚刚创建的 `.exe` 文件即可，此时秘钥文件会因该 `.exe` 文件不可用而恢复默认的图标
（3）删除所创建的 `.exe` 文件即可
:::

（2）打开 <code>Git Bash</code> 终端，执行如下命令来直接查看和复制公钥内容：

```bash
cat ~/.ssh/id_ed25519.pub
```

#### 2.2 添加公钥

**GitHub**：

1. 点击头像下拉菜单中的 <code>Settings</code> → 页面左侧菜单栏 <code>Access</code> 中的 <code>SSH and GPG Keys</code> → 点击 <code>New SSH key</code> 按钮创建新的 SSh key
2. 在 SSH key 添加页面中：  
   （1）在 <code>Title</code> 文本框中自定义 Key 的名称，来标识这个 key 从何而来  
   （2）将上一步复制的 **SSH 公钥** 粘贴到 <code>Key</code> 文本框后，即可点击 <code>Add SSH key</code>按钮添加 SSH 密匙

:::info 命名 key
假如你有命名困难症，可参考如下命名规则：**平台名\_算法名\_key 类型**  
 例如：`GITHUB_ED25519_PUBLIC`、`GITEE_RSA_PUBLIC`
:::  
3. 此时页面跳转至 GitHub 账号密码输入页面，以确保操作安全性，输入后则成功添加公钥

**Gitee**：

1. 点击头像下拉菜单中的 <code>设置</code> → 页面左侧菜单栏 <code>安全设置</code> 中的 <code>SSH 公钥</code>，直接进入添加 SSH key 页面
2. 在 SSH key 添加页面中，将上一步复制的 **SSH 公钥** 直接复制到 `公匙` 文本框中后，其标题将自动生成（默认为公钥中的邮箱地址）
3. 点击确定后，再通过登录密码验证后即成功添加公钥

#### 2.3 添加主机

在 GitHub 或 Gitee 中添加公钥后，**首次使用**该公钥连接 GitHub 或 Gitee 的远程仓库前，需要在本地将 host（主机），GitHub 为 `github.com`，Gitee 为 `gitee.com` 添加到本机 **SSH 可信任列表**中并确认进行连接

打开 Git Bash 终端，执行如下终端命令：

::: code-tabs#shell

@tab GitHub

```bash
ssh -T git@github.com
```

@tab Gitee

```bash
ssh -T git@gitee.com
```

:::

回车执行命令后，终端提示是否继续建立与 GitHub/Gitee 的连接，输入 `yes` 后若显示以 `You've successfully` 开头的相关信息则表示 SSH 公钥配置成功，此时即可通过 **SSH 协议**将本地仓库的项目代码推送到 GitHub 或 Gitee 的远程仓库上

添加 host 成功后，在存放公钥的 `.ssh/` 目录下，文件 `known_hosts` 就会记录已被本地识别的**主机信息**及对应的公钥

:::tip

1. 配置 SSH 公钥来访问远程仓库是开发**推荐**的方式，当然你也可以不配置，使用 **HTTPS** 协议的方式访问 GitHub 或 Gitee 的远程仓库，只不过每次上传或拉取代码都需要输入账号及密码以进行安全验证
2. 由于配置 SSH 公钥是在**本地设备**与**服务器**之间进行操作，因此可直接使用本地的 **Git Bash** 终端执行相关命令，而在本地仓库管理项目的 **Git Bash** 则必须在项目根目录下
   :::

### 3. 创建远程仓库

登录 [GitHub](https://github.com/) 或 [Gitee](https://gitee.com/)，创建新的仓库，该步骤比较简单，需要注意的是 Gitee 中无法在创建仓库时选择开源，只能在创建仓库后通过 `仓库设置` 修改为公开

### 4. 上传项目

#### 4.1 切换至 SSH 协议

把本地项目上传到 GitHub 或 Gitee 所创建的空白仓库前，需先在空白仓库的**代码选项卡**中，将远程仓库的访问形式由 `HTTPS 协议`切换到 `SSH 协议`

::: tabs

@tab GitHub

![](/articles/git/github.webp)

@tab Gitee
![](/articles/git/gitee.webp)

:::

#### 4.2 关联远程仓库

打开终端（命令行窗口），确保终端运行目录为**项目根目录**，运行以下终端命令：

::: code-tabs#shell

@tab GitHub

```bash
git remote add origin git@github.com:github用户名/test.git
```

@tab Gitee

```bash
git remote add origin git@gitee.com:gitee用户名/test.git
```

:::

::: info 命令说明
该命令表示在项目中添加名为 **origin** 的远程仓库，**origin** 命令后面就是**远程仓库地址**，可直接复制 4.1 步骤中切换至 SSH 协议后的`地址栏`，该命令旨在让本地仓库与码云仓库进行关联
:::

在键入该命令中的远程仓库名时，若**输入有误**且已回车执行，将直接添加错误的远程来源，此时需要**先删除**已添加的远程仓库，才能再次添加正确的远程仓库：

```sh
# 查看当前本地仓库已关联的 origin 远程仓库，确认是否键入错误
git remote -v

# 删除关联的 origin 远程仓库
git remote rm origin

# 此时就可重新关联 origin 远程仓库
```

#### 4.3 上传项目

打开终端（命令行窗口），确保终端运行目录为**项目根目录**，运行以下终端命令：

```sh
git push -u origin master
```

::: info 命令说明
该命令表示将本地仓库主分支 master 的项目文件上传到远程仓库，刷新 GitHub 或 Gitee 仓库页面，即可看到上传的项目文件
:::

## 三、开发分支

完成上述基本的版本控制流程后，在后续每个单独的页面或功能开发中，都是需要先创建一个**本地子分支**，在该分支下进行开发工作。当开发完毕后，该本地子分支会被**提交、合并、删除**

下面将以开发搜索功能为例

### 1. 创建分支

打开终端（命令行窗口），确保终端运行目录为**项目根目录**，运行以下终端命令：

```sh
git checkout -b search
```

::: info 命令说明

1. 该命令表示基于 master 主分支，在本地创建子分支 search，**同时切换**到子分支 search，用于开发搜索功能
2. `git branch search` 命令同样可创建 search 分支，只不过不会切换到该分支
3. `git branch` 可查看当前所有分支，会看到当前处于子分支 search(\*)
   :::

### 2. 提交分支

当完成搜索功能的开发后，即可将本地的 search 分支进行本地的提交  
打开终端（命令行窗口），确保终端运行目录为**项目根目录**，运行以下终端命令：

**本地提交**

```sh
# 确认当前文件状态，文件状态一般都是未跟踪或已修改
git status
# 提交当前的更新，即添加至暂存区
git add .
# 确认待提交的新增加的项目文件
git status
# 提交至本地仓库
git commit -m "完成搜索功能开发"
```

**上传分支**

```sh
# 将本地的 search 分支上传到远程仓库进行保存
git push -u origin search
# 命令中的 search 表示在远程仓库也创建名为 search 的分支
```

### 3. 合并分支

上传 search 分支到远程仓库后，可随时拉取该分支的代码，因此可将本地的 search 分支代码合并到本地的 master 分支，然后删除 search 分支

**合并子分支**

```sh
# 查看当前所处分支（子分支 search）
git branch
# 切换到 master 主分支
git checkout master
# 将子分支 search 的代码合并到主分支
git merge search
# 将合并后的主分支上传到远程仓库进行更新
git push
```

**删除子分支**

本地仓库中已将 search 分支代码合并至主分支，合并之前的代码也已上传至远程仓库，随时可查看

```sh
# 确认当前处于主分支 master，否则无法删除子分支
git branch
# 删除本地分支 search
git branch -d search
# 确认当前已无本地分支 search
git branch
```

## 参考

[Git 软件教程](https://mrhope.site/software/git/)（由 vuepress-theme-hope 主题作者编写）  
[Git 官网指南](https://git-scm.com/docs)
