---
title: 项目展示
icon: repo
index: false
sidebar: false
comment: false
pageInfo: false
article: false
---

## 通用后台管理系统

<SiteInfo 
name="通用后台管理系统" 
url="https://w-junhui.gitee.io/backstage" 
desc="基于 Vite + Vue3 构建的纯前端静态 Web 应用" 
preview="/projects/backstage/homePage.webp" 
logo="/logo.svg" 
repo="https://github.com/Wu-JunHui/backstage" />

<!-- 图片路径基于public/下 -->

<Swiper :imgUrl="['projects/backstage/loginPage.webp','projects/backstage/homePage.webp','projects/backstage/userPage.webp']"></Swiper>

<script setup lang="ts">
import Swiper from "@Swiper";
</script>

基于 Vite + Vue3 构建的**纯前端静态 Web 应用**，使用 [Mock.js](http://mockjs.com/) 在本地模拟项目中请求后端的各类数据，同时可根据不同用户的登录权限，显示不同的侧边栏菜单

当前管理系统中：

- 默认**管理员**账号：`admin`，密码：`123456`
- 默认**成员**账号：`Apple`，密码：`123456`

部署于 GitHub pages: https://outofforbit.com/backstage

部署于 Gitee pages: https://w-junhui.gitee.io/backstage

### 技术栈

1. 使用 [Element Plus](https://element-plus.gitee.io/zh-CN/) 构建项目 UI 界面：

   > 使用 [Vue 3](https://www.javascriptc.com/vue3js/) 的 `setup` 语法构建项目的`普通组件`和`路由组件`

2. 使用 [Vue Router 4](https://router.vuejs.org/zh/) 构建项目的前端路由系统：

   > - 使用 **Hash** 路由模式，在路由配置的 `component` 属性中使用 `() = > import()` 组件导入语法实现**路由懒加载**
   > - 在用户登录后返回的侧边栏菜单对象中，包含了设置**动态子路由**的 `path`、`name`、`component`的相关属性，因此在管理菜单数据的 `mutation` 中，通过全局路由对象提供的 `addRoute()` 方法**动态**添加子路由，同时使用 [Vite](https://vitejs.cn/) 的动态导入模块语法 `import.meta.glob` 实现**动态路由懒加载**
   > - 设置**全局前置守卫**，处理登录前通过修改路径的非法访问，以及处理登录后访问不存在路径

3. 使用 [Mock.js](http://mockjs.com/) 模拟后端的各类数据：

   > - 封装 `Mock.js` 模块，使用**正则表达式**匹配请求路径并拦截项目中的 Ajax 请求
   > - 根据项目的不同功能模块，封装不同的数据请求函数，在拦截请求后进行调用以返回正确的数据

4. 使用 [Axios](http://axios-js.com/) 发起 Ajax 请求，并对 Axios 进行**二次封装**：

   > - 通过`请求/响应拦截器`**统一**处理项目中所有请求的**重复步骤**，包括在请求前自定义携带 header、处理请求失败的反馈信息、解构赋值请求成功的参数对象以简化嵌套，方便赋值
   > - 根据请求携带参数中定义的 `mock` 布尔值，可选择是否使用 [fastmock](https://www.fastmock.site/) 的模拟数据
   > - 根据已封装好的 Ajax 请求环境配置文件，判断在`开发环境`、`测试环境`、`生产环境`下应使用的**请求根路径**，防止`生产环境`使用 fastmock
   > - 将项目中的所有 Ajax 请求函数封装为**统一**的接口模块 `api.js`，在该模块导入已二次封装的 `request` 函数，实现**统一管理**项目所有的请求接口

5. 使用 [Vuex 4](https://vuex.vuejs.org/zh/) 管理项目数据，实现不同组件间的**数据通讯**：

   > - 在用户登录后会返回一个的侧边栏菜单对象，通过提交 mutation 将其存储至 Vuex 中，以供侧边栏动态设置菜单项以及面包屑动态设置路径名
   > - 在点击侧边栏菜单后会返回一个`激活菜单栏对象`，通过提交 mutation 将其存储至 Vuex 中，供路由组件显示区顶部的 `tag` 标签使用
   > - 通过 `localStorage` 持久化登录后的侧边栏菜单对象、激活菜单对象，并在 `main.js` 中提交对应的 mutation 以防止页面刷新后 Vuex 数据丢失引起的侧边栏、面包屑、tag 标签数据丢失

6. 使用 [Echarts.js](https://echarts.apache.org/zh/index.html) 构建首页中的数据展示：

   > - 对首页中具有 X/Y 轴的图表（折线图、柱状图）进行基础的通用对象配置，对饼状图单独定义配置对象
   > - 处理请求返回的 Mock 图表源数据，并将其与每个图表的配置对象结合以渲染图表

7. 使用 **vue-cookies** 存储或移除浏览器 cookie 的登录认证 `token`

8. 使用 **vue3-lottie** 加载 `JSON` 格式的 lottie 动画，实现展示页面**低消耗**的 Web 网页动画

&nbsp;

---

&nbsp;

## 中国天气预报

<SiteInfo 
name="中国天气预报" 
url="https://w-junhui.gitee.io/weather-forecast" 
desc="提供全国城市当天往后一周的天气预报" 
preview="/projects/weather/weather.webp" 
logo="/logo.svg" 
repo="https://github.com/Wu-JunHui/Weather-Forecast" />

### 技术栈

1. 使用 [Vite](https://cn.vitejs.dev/) 构建的 Vue 3 Web 应用
2. 基于 [Element Plus](https://element-plus.gitee.io/zh-CN/) 构建项目 UI 界面，并将界面进行组件化拆分，封装了 `CityPanel.vue`、`Days.vue`、`Footer.vue` 三个组件，同时通过**媒体查询**设置不同视口的页面布局，实现**响应式布局**
3. 通过比对城市后缀（'市', '县', '自治州', '岛'），判断出合法城市名后，将 `Axios` 设置为全局属性 `$http` 以方便发起数据请求，通过 `$nextTick` 保证在每次查询时能正常渲染出数据，设置**请求/响应拦截器**以应用加载效果  
4. 使用 Vue 3 的函数模板引用获取 `v-for` 后的 DOM 数组，循环渲染每一天的天气精灵图图标
5. 项目中使用 `Less` 编写样式，同时使用了 [阿里巴巴矢量图标库](https://www.iconfont.cn/)

部署于 Gitee pages: https://w-junhui.gitee.io/weather-forecast
