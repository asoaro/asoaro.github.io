import { sidebar } from 'vuepress-theme-hope'

export const enSidebar = sidebar({
  '/en/': [
    {
      text: 'HTML',
      icon: 'html',
      prefix: 'blogs/HTML/',
      children: 'structure',
      collapsible: true
    },
    {
      text: 'CSS',
      icon: 'css',
      prefix: 'blogs/CSS/',
      children: 'structure',
      collapsible: true
    },
    {
      text: 'JavaScript',
      icon: 'javascript',
      prefix: 'blogs/JavaScript/',
      children: 'structure',
      collapsible: true
    },
    {
      text: 'Vue',
      icon: 'vue',
      prefix: 'blogs/Vue/',
      children: 'structure',
      collapsible: true
    },
    {
      text: 'Browser',
      icon: 'chrome',
      prefix: 'blogs/browser/',
      children: 'structure',
      collapsible: true
    },
    {
      text: 'Git',
      icon: 'git',
      prefix: 'blogs/Git/',
      children: 'structure',
      collapsible: true
    },
    {
      text: 'VuePress',
      icon: 'valine',
      prefix: 'blogs/VuePress/',
      children: 'structure',
      collapsible: true
    },
  ]
})
