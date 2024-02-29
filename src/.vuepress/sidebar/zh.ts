import { sidebar } from 'vuepress-theme-hope'

export const zhSidebar = sidebar({
  '/': [
    // 空字符串表示主页链接
    // "", 
    // 侧边栏只能手动设置当前结构，读取项目目录时只能按默认字母排序
    {
      text: 'HTML',
      icon: 'html',
      prefix: '技术博文/HTML/',
      children: 'structure',
      collapsible: true
    },
    {
      text: 'CSS',
      icon: 'css',
      prefix: '技术博文/CSS/',
      children: 'structure',
      collapsible: true
    },
    {
      text: 'JavaScript',
      icon: 'javascript',
      prefix: '技术博文/JavaScript/',
      children: 'structure',
      collapsible: true
    },
    {
      text: 'Vue',
      icon: 'vue',
      prefix: '技术博文/Vue/',
      children: 'structure',
      collapsible: true
    },
    {
      text: '浏览器',
      icon: 'chrome',
      prefix: '技术博文/Browser/',
      children: 'structure',
      collapsible: true
    },
    {
      text: 'Git',
      icon: 'git',
      prefix: '技术博文/Git/',
      children: 'structure',
      collapsible: true
    },
    {
      text: 'VuePress',
      icon: 'valine',
      prefix: '技术博文/VuePress/',
      children: 'structure',
      collapsible: true
    },
  ]
})
