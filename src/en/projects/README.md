---
title: Projects
icon: repo
index: false
sidebar: false
comment: false
pageInfo: false
article: false
---

## General Backstage Management System

<SiteInfo 
name="General Backstage Management System" 
url="https://w-junhui.gitee.io/backstage" 
desc="A pure static front-end Web application based on Vite + Vue3" 
preview="/projects/backstage/homePage.webp" 
logo="/logo.svg" 
repo="https://github.com/Wu-JunHui/backstage" />

<!-- 图片路径基于public/下 -->
<Swiper :imgUrl="['projects/backstage/loginPage.webp','projects/backstage/homePage.webp','projects/backstage/userPage.webp']" />

<script setup lang="ts">
import Swiper from "@Swiper";
</script>

This is a **pure static front-end Web application** based on Vite + Vue3. It relies on [Mock.js](http://mockjs.com/) to simulate all kind of data from the back end locally. Corresponding sidebar menus will be show when the user log in with different permissoin.

In the current system:

- Default **administrator** account: `admin`, password:`123456`
- Default **member** account: `Apple`，密码：`123456`

Deploy in GitHub pages: https://outofforbit.com/backstage

Deploy in Gitee pages: https://w-junhui.gitee.io/backstage

### Technology stack

1. Build the UI interface by using [Element Plus](https://element-plus.gitee.io/zh-CN/):

   > 使用 [Vue 3](https://www.javascriptc.com/vue3js/) 的 `setup` 语法构建项目的`普通组件`和`路由组件`

2. Build the front-end router system by using [Vue Router 4](https://router.vuejs.org/zh/):

   > - 使用 **Hash** 路由模式，在路由配置的 `component` 属性中使用 `() = > import()` 组件导入语法实现**路由懒加载**
   > - 在用户登录后返回的侧边栏菜单对象中，包含了设置**动态子路由**的 `path`、`name`、`component`的相关属性，因此在管理菜单数据的 `mutation` 中，通过全局路由对象提供的 `addRoute()` 方法**动态**添加子路由，同时使用 [Vite](https://vitejs.cn/) 的动态导入模块语法 `import.meta.glob` 实现**动态路由懒加载**
   > - 设置**全局前置守卫**，处理登录前通过修改路径的非法访问，以及处理登录后访问不存在路径

3. Simulate data from the back end locally by using [Mock.js](http://mockjs.com/):

   > - 封装 `Mock.js` 模块，使用**正则表达式**匹配请求路径并拦截项目中的 Ajax 请求
   > - 根据项目的不同功能模块，封装不同的数据请求函数，在拦截请求后进行调用以返回正确的数据

4. Send Ajax requests by using [Axios](http://axios-js.com/), and encapsulate Axios as a module:

   > - 通过`请求/响应拦截器`**统一**处理项目中所有请求的**重复步骤**，包括在请求前自定义携带 header、处理请求失败的反馈信息、解构赋值请求成功的参数对象以简化嵌套，方便赋值
   > - 根据请求携带参数中定义的 `mock` 布尔值，可选择是否使用 [fastmock](https://www.fastmock.site/) 的模拟数据
   > - 根据已封装好的 Ajax 请求环境配置文件，判断在`开发环境`、`测试环境`、`生产环境`下应使用的**请求根路径**，防止`生产环境`使用 fastmock
   > - 将项目中的所有 Ajax 请求函数封装为**统一**的接口模块 `api.js`，在该模块导入已二次封装的 `request` 函数，实现**统一管理**项目所有的请求接口

5. Manage the data by using [Vuex 4](https://vuex.vuejs.org/zh/), establish the data communitation among different components.

   > - 在用户登录后会返回一个的侧边栏菜单对象，通过提交 mutation 将其存储至 Vuex 中，以供侧边栏动态设置菜单项以及面包屑动态设置路径名
   > - 在点击侧边栏菜单后会返回一个`激活菜单栏对象`，通过提交 mutation 将其存储至 Vuex 中，供路由组件显示区顶部的 `tag` 标签使用
   > - 通过 `localStorage` 持久化登录后的侧边栏菜单对象、激活菜单对象，并在 `main.js` 中提交对应的 mutation 以防止页面刷新后 Vuex 数据丢失引起的侧边栏、面包屑、tag 标签数据丢失

6. Render homepage's data charts by using [Echarts.js](https://echarts.apache.org/zh/index.html):

   > - 对首页中具有 X/Y 轴的图表（折线图、柱状图）进行基础的通用对象配置，对饼状图单独定义配置对象
   > - 处理请求返回的 Mock 图表源数据，并将其与每个图表的配置对象结合以渲染图表

7. Save/remove login credentials `token` to/from the browser cookie by using **vue-cookies**

8. Load the lottie animation in the format of `JSON` by using **vue3-lottie**, which can play the Web page animation in a good performance.

&nbsp;

---

&nbsp;

## Urban Weather Forecast in China

<SiteInfo 
name="Urban Weather Forecast in China" 
url="https://w-junhui.gitee.io/weather-forecast" 
desc="Provides a one-week weather forecasts for cities in China" 
preview="/projects/weather/weather.webp" 
logo="/logo.svg" 
repo="https://github.com/Wu-JunHui/Weather-Forecast" />

### Technology stack

1. A Vue 3 Web application built by [Vite](https://cn.vitejs.dev/).
2. Organized the UI interface by using [Element Plus](https://element-plus.gitee.io/zh-CN/) and deconstructed it by three components: `CityPanel.vue`、`Days.vue`、`Footer.vue`. Enable the `responsive layout` by using `media query`.
3. By comparing the city suffixes ('市', '县', '自治州', '岛'), the legal city name is determined to be a request parameter. To make the request easier, I set the `Axios` as the Vue global property `$http`，and request/response interceptor is also set at the same time.
4. Used the `Less` to write the styles and applyed some icons from [阿里巴巴矢量图标库](https://www.iconfont.cn/)

Deploy in Gitee pages: https://w-junhui.gitee.io/weather-forecast
