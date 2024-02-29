---
title: 个人简历
icon: profile
index: false
sidebar: false
comment: false
pageInfo: false
article: false
lastUpdated: false
contributors: false
---

<Circle></Circle>

<script setup lang="ts">
import Circle from "@Circle";
</script>

## 基本信息

### 个人信息

  <div class="person">
    <div>姓名：<span>吴俊辉</span></div>
     <div>出生日期：<span>1996-04</span></div>
    <div>性别：<span>男</span></div>
    <div>籍贯：<span>广东梅州</span></div>
    <div>学历：<span>本科</span></div>
  </div>

### 求职意向

  <div class="person">
    <div>应聘岗位：<span>前端开发</span></div>
     <div>期望薪资：<span>面议</span></div>
    <div>工作地点：<span>深圳、广州</span></div>
    <div>工作性质：<span>全职</span></div>
  </div>

### 联系方式

  <div class="person contact">
    <div>手机：<span>13631649711</span></div>
     <div>邮箱：<a href="mailto:wu-junhui@foxmail.com" target="_black">wu-junhui@foxmail.com</a></div>
    <div>个人博客：<a href="https://w-junhui.gitee.io" target="_black">https://w-junhui.gitee.io</a></div>
  </div>

## 教育背景

  <div class="education">
    <span>2017/09 - 2020/01</span>
    <span>西南科技大学</span>
    <span>本科</span>
  </div>

  <div class="education">
    <span>2014/09 - 2017/06</span>
    <span>广州铁路职业技术学院</span>
    <span>大专</span>
  </div>

## 专业技能

<i></i>

- 熟练使用 <i>HTML</i> 、<i>CSS</i> 快速构建页面，熟悉 <i>rem</i>、<i>flex</i> 等响应式布局方式以及 <i>HTML5</i>、<i>CSS3</i> 新特性  
  熟练使用 <i>CSS</i> 预处理器：<i>Less</i>、<i>Sass</i>
- 熟练使用 <i>JavaScript</i> 构建页面交互功能，熟悉 JS 闭包、原型、作用域链等基本概念  
  熟悉 <i>ES6</i> 新特性，了解 <i>TypeScript</i>
- 熟练运用 <i>Vue</i> 生态系统（<i>Vite</i>、<i>Vue-CLI</i>、<i>Vue Router</i>、<i>Vuex</i>）
- 熟悉常见 <i>UI</i> 组件库：<i>Element-Plus</i>、<i>Element-UI</i>、<i>Vant</i>、<i>Ant-design</i> 等
- 熟练使用 <i>uni-app</i> 开发微信小程序，熟悉发布小程序的基本流程
- 熟练使用 <i>Git</i>，熟悉团队协作流程，熟练使用 <i>GitHub Actions</i> 进行自动化部署

## 工作经历

  <div class="person work">
    <div>2017/07 - 2021/07</div>
     <div>深圳市地铁集团有限公司 | 地铁车辆检修</div>
  </div>
 
  在职期间负责深圳 11 号线地铁车辆的日常维护保养、正线抢险工作，攻克列车各种疑难故障，获得上级领导表扬，积极参与各项技术比武并名列前茅，因表现优秀荣获地铁集团公司年度 “优秀团员” 称号以及年度 “未来之星” 称号


  <div class="person work">
    <div>2021/09 - 2023/01</div>
     <div>广州迅发科技有限公司 | 前端开发</div>
  </div>

1. 负责公司项目的 Web 前端开发及移动端开发，解决主流浏览器兼容性问题<br/> 
2. 与各个部门成员协同完成项目版本迭代，协助 UI 设计师完成部分页面设计<br/> 
3. 与后端开发工程师协作，完成前端数据绑定，操作交互<br/> 
4. 协助项目经理完成对项目前端界面的设计，提升项目的用户体验及项目后期的优化改造

## 项目经验

### 一、通用后台管理系统

**项目介绍**：提供基于用户权限的数据可视化以及数据管理  
**技术栈**：<i>Vite、Vue3、Element-Plus、Scss、Vue Router4、Vuex4、Axios、Mock、Echarts</i>

1. 基于用户登录后返回的数据对象，动态渲染该用户权限的侧边栏菜单，通过 `addRouter()` 添加动态路由
2. 使用 Vuex4 实现组件间的数据通讯，并通过 `localStorage` 持久化登录后的数据对象，防止刷新页面后丢失
3. 二次封装 Axios，通过请求/响应拦截器统一处理项目中所有请求的重复步骤，并将项目中所有的 Ajax 请求函数封装为统一的接口模块，以方便统一管理
4. 设置全局前置守卫，处理登录前通过修改路径的非法访问，以及处理登录后访问不存在路径

**在线演示**：https://w-junhui.gitee.io/backstage （已默认填入管理员账号，默认成员账号： Apple，密码都是：123456）

### 二、中国城市天气预报

**项目介绍**：提供全国城市当天往后一周的天气预报  
**技术栈**：<i>Vite、Vue3、Element-Plus、Less、Axios</i> 

1. 秉承组件化思想构建项目 UI 界面，同时通过媒体查询设置不同视口的页面布局，实现响应式布局
2. 通过比对城市后缀（'市', '县', '自治州', '岛'），判断出合法城市名后，使用被设置为全局属性 `$http` 的 Axios 发起 Ajax 请求，通过 `$nextTick` 保证在每次查询时能正常渲染出数据，设置请求/响应拦截器以应用加载效果
3. 使用 Vue 3 的函数模板引用获取 `v-for` 后的 DOM 数组，循环渲染每一天的天气精灵图图标

**在线演示**：https://w-junhui.gitee.io/backstage 

## 自我评价

- 秉承<i>终身学习</i>的思想，借助软件 mindmaster 构建自身知识网络，目前正在准备雅思考试及学习 TypeScript
- 能流畅阅读英文文档，积极参与 GitHub 开源项目的维护，例如为 [vuepress-theme-hope](https://github.com/vuepress-theme-hope/vuepress-theme-hope) 提出移动端样式 bug 的[建议](https://github.com/vuepress-theme-hope/vuepress-theme-hope/issues/2031)
- 个人博客：
  - https://outofforbit.com（部署于 GitHub Pages）
  - https://w-junhui.gitee.io（部署于 Gitee Pages）

<style lang="scss">
.person {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  div {
    margin-bottom: 8px;
     span{
        color:#2cb2c2;
      }
  }
}
.education {
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  flex-wrap: wrap;
}
.work{
  margin-top:15px;
  font-weight:600;
}
@media (max-width: 719px) {
  .education {
    span:first-child {
      width: 100%;
    }
  }
  .person {
    div {
      width: 50%;

    }
    div:nth-child(even){
      text-align:right;
    }
  }
  .contact,.work{
    div {
      width: 100%;

    }
    div:nth-child(even){
      text-align:left;
    }
  }

}
i{
  font-style:normal;
  color:#2cb2c2;
}
</style>
