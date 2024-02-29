import { defineUserConfig } from 'vuepress'
import theme from './theme.js'
import { getDirname, path } from '@vuepress/utils'
const __dirname = getDirname(import.meta.url)

export default defineUserConfig({
  base: '/',

  locales: {
    '/': {
      lang: 'zh-CN',
      title: '景秀大数据',
      description: '大数据技术经验分享、目标识别、大模型前沿技术分享'
    },
    '/en/': {
      lang: 'en-US',
      title: 'Kingshow Big Data',
      description: 'A blog about my life and front-end'
    }
  },

  theme,

  shouldPrefetch: false,
  // 为自定义组件创建别名
  alias: {
    '@Swiper': path.resolve(__dirname, 'components/Swiper.vue'),
    '@Circle': path.resolve(__dirname, 'components/Circle.vue'),
  }
})
