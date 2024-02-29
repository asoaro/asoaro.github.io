import { navbar } from 'vuepress-theme-hope'

export const zhNavbar = navbar([
  '/',
  { text: '个人简历', icon: 'profile', link: '/resume/' },
  { text: '项目展示', icon: 'repo', link: '/projects/' },
  {
    text: '技术博文',
    icon: 'advance',
    link: '/article/'
    // children: [
    //   {
    //     text: 'HTML',
    //     icon: 'html',
    //     link: '/category/html/'
    //   },
    //   {
    //     text: 'CSS',
    //     icon: 'css',
    //     link: '/category/css/'
    //   },
    //   {
    //     text: 'JavaScript',
    //     icon: 'javascript',
    //     link: '/category/javascript/'
    //   },
    //   {
    //     text: 'Vue',
    //     icon: 'vue',
    //     link: '/category/vue/'
    //   },
    //   {
    //     text: '浏览器',
    //     icon: 'chrome',
    //     link: '/category/browser/'
    //   },
    //   {
    //     text: 'Git',
    //     icon: 'git',
    //     link: '/category/git/'
    //   },
    //   {
    //     text: 'VuePress',
    //     icon: 'valine',
    //     link: '/category/vuepress/'
    //   },
    //   {
    //     text: '查看所有',
    //     icon: 'storage',
    //     link: '/article/'
    //   },
    // ]
  }
])
