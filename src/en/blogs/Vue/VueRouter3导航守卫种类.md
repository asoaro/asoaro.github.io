---
icon: edit
date: 2022-11-10
category:
  - Vue
tag:
  - Vue Router3
  - 导航守卫
star: true
---

# Vue Router3 导航守卫种类

## 概述

在实例应用中，诸如限制用户在登录后才能访问的需求十分常见，因此，对于项目中的**导航**（路由链接），可使用**导航守卫**控制每个路由的**访问权限**

**Vue Router** 提供的导航守卫，主要通过**跳转**或**取消**的方式守卫导航，要实现导航守卫功能，需使用路由实例 `router` 提供的实例方法

下面将以 [Vue Router3](https://v3.router.vuejs.org/zh/)（对应 Vue2） 的导航守卫为例，详细介绍导航守卫的**种类**

<!-- more -->

## 导航守卫本质

一个 Vue 实例从**创建、运行、销毁**的每一个时期，都对应各自的生命周期函数，也称为钩子函数，随组件的生命周期**自动按序**执行
:::tip 组件生命周期
若你不了解组件生命周期，可参考这篇文章：[详解 Vue2 组件生命周期](/技术博文/Vue/详解Vue2组件生命周期.html)
:::

相应地，一个完整的导航解析流程，可近似看作是一个导航的生命周期，在每个流程中都设有相应的钩子函数，因此本质上，**每种守卫都是一种生命周期函数**

## 导航守卫分类

按照导航守卫的使用时机与场景，可分为 <i>4 类导航守卫</i>与 <i>1 个钩子函数</i>

### <i>一、全局前置守卫（beforeEach）</i>

当一个导航触发时，全局前置守卫按照所有守卫的**创建顺序**被调用

守卫是**异步解析执行**，此时导航在所有守卫 resolve 完之前一直处于**等待**中

#### **调用语法**

在已创建好的路由模块 `index.js` 中，在创建 `router` 实例后，调用其提供的实例方法 `beforeEach()`

```js
// 路由模块
const router = new VueRouter({...})
router.beforeEach((to, form, next) => {})
```

`router.beforeEach()` 为**异步任务**，接收一个**异步回调函数**，项目全局下只要有导航被触发，**必然**会触发该异步回调函数，它可接收以下三个形参（**顺序不可乱**）：

1.  <i>**to**</i>
    - 在导航被触发后，接收所访问路径（即将进入）对应的**路由信息对象**
    - 等同于**将要访问**的页面路径对应的 `this.$route`
2.  <i>**from**</i>
    - 在导航被触发后，接收触发前页面路径（当前离开）所对应**的路由信息对象**
    - 等同于**将要离开**的页面路径对应的 `this.$route`
3.  <i>**next**</i>

    - 该参数为一个**函数**，在守卫中**必须**要调用该方法来 resolve 每个守卫，每个守卫的执行效果完全依赖 `next` 方法的调用参数，守卫中若省略该方法，则页面所有导航都**失去**导航功能
    - `next` 函数在完整的导航解析流程的每一步中，充当允许进入下一步的角色，详情参考 [Vue Router3 导航解析流程](/技术博文/Vue/VueRouter3导航解析流程.html)
    - 依据不同的调用参数，导航守卫可实现 4 种执行效果：

      - （1）直接调用，无需传参：`next()`  
        表示**直接通过**当前导航守卫，可进入下一个导航钩子函数，若全部钩子执行完毕，则该导航的状态就是 `confirmed`（导航成功）
      - （2）传入布尔值 `false`：`next(false)`  
        表示**中断**当前的导航，**不允许跳转**至任何页面，用户手动修改页面 URL 或点击浏览器历史后退按钮，页面 URL 会被重置到形参 `from` 路由对应的地址
      - （3）传入参数：`next(参数)`  
        表示**中断**当前导航的同时，**开启新的导航**跳转到参数指定的地址：

        > 1. 传入**字符串**：  
        >    表示匹配路径的字符串，可携带查询参数，由 `？` 开始作引导
        > 2. 传入**对象**：
        >    - 可传入**描述地址的对象**，如 `{ path: '/home' }`
        >    - 可传入**命名路由对象**，如 `{ name: 'user', params: { userId: '123' }}`
        >    - 对象中允许设置诸如 `replace: true` 之类的选项以及任何用在 `router-link` 的 `to` 属性值，或 `router.push()` 方法的第一个参数（两者使用基本一致）

      - （4）传入一个 `Error` 实例：`next(error)`  
        表示当前导航会被**终止**且该错误会被传递给 `router.onErroe()` 注册过的回调函数

:::info 守卫触发时机

- 页面初始渲染时
- 全局任何**声明式**或**编程式**导航被触发后，在路由信息对象中进行路径匹配，解析渲染映射组件之前，执行守卫逻辑
  :::

#### **示例**

```js
// 要求必须有访问权限才可访问后台系统主页，否则跳转至登录页
router.beforeEach((to, from, next) => {
  // 获取localStorage中的token值
  const token = localStorage.getItem('token')
  if (to.path !== '/login' && !token) next('login')
  else next()
})
```

### <i>二、全局解析守卫（beforeResolve ）</i>

与全局前置守卫类似，由全局**任意导航**触发，不同的是，全局解析守卫的触发时机是导航解析完毕（确认）**之前**，正如其使用到的方法名 `beforeResolve`

`router.beforeResolve` 是获取数据或执行任何其他操作（如果用户无法进入页面时你希望避免执行的操作）的理想位置

#### **调用语法**

在已创建好的路由模块 `index.js` 中，在创建 `router` 实例后，调用其提供的实例方法 `beforeResolve()`

```js
// 路由模块
const router = new VueRouter({...})
router.beforeResolve((to, form, next) => {})
```

`router.beforeResolve()` 同样接收一个**回调函数**，形参的使用与[全局前置守卫](#调用语法)中的一致，此处不再重复

:::info 守卫触发时机
在导航被确认之前，同时在所有组件内守卫以及异步路由组件被解析之后
:::

### <i>三、全局后置钩子（afterEach）</i>

在导航结束后，即页面**已显示**出导航映射的组件时所调用的**钩子函数**

和导航守卫不同的是，全局后置钩子**不会接受** `next` 函数，同时也**不会改变**导航本身

#### **调用语法**

在已创建好的路由模块 `index.js` 中，在创建 `router` 实例后，调用其提供的实例方法 `afterEach()`

```js
// 路由模块
const router = new VueRouter({...})
// 注意回调函数形参没有next
router.afterEach((to, form) => {})
```

:::info 守卫触发时机
在导航被确认（导航成功）后会被调用
:::

### <i>四、路由独享守卫（beforeEnter）</i>

可单独为某个路由配置（路由信息对象）定义守卫，在路由配置中直接使用 `beforeEnter` 方法，该守卫声明时所使用的方法参数与[全局前置守卫](#调用语法)一致

#### **调用语法**

在已创建好的路由模块 `index.js` 中，选择需要设置路由独享守卫的**路由配置对象**，在该对象中使用 `router` 提供的实例方法 `beforeEnter` 作为属性

```js
// 路由模块的某个路由配置对象
 {
      path: '/foo',
      component: Foo,
      beforeEnter: (to, from, next) => {
        // ...
      }
  }
```

:::info 守卫触发时机
当导航进入到设有路由独享守卫的路由配置时
:::

#### **示例**

```js
// 可将一个函数数组传递给 beforeEnter，这在为不同的路由重用守卫时很有用
function removeHash(to) {
  if (to.hash) return { path: to.path, query: to.query, hash: '' }
}
const routes = [
  {
    path: '/users/:id',
    component: UserDetails,
    beforeEnter: [removeHash]
  }
]
const router = new VueRouter({
  routes
})
```

:::tip
路由独享守卫只在进入路由时触发，不会在 params、query 或 hash 改变时触发
:::

### <i>五、组件内守卫</i>

除了在全局以及路由配置中设置守卫，还可在组件切换渲染时设置导航守卫

根据**进入组件**、**复用组件**、**离开组件**可分为 **3** 类导航守卫：

#### <i>1. 进入组件（beforeRouteEnter）</i>

当进入一个组件时，会根据相关数据渲染出组件，其中包括该组件**对应的路由配置**，因此可在该路由配置被渲染完毕（确认）**之前**设置组件进入守卫

##### **调用语法**

在 Vue2 中，在组件默认导出对象中（与 `data` 选项平级）调用 `beforeRouteEnter` 函数

```vue
// Vue2选项式API
<script>
export default {
  beforeRouteEnter(to, from, next) {}
}
</script>
```

##### **访问 this**

在 `beforeRouteEnter` 方法中**无法**获取组件实例 `this`，因为当该守卫执行前，组件实例**还未创建**

而在该守卫的 `next` 函数中，可传入一个回调函数，该回调的第一个形参即用于**接收当前组件实例**

```vue
<script>
export default {
  beforeRouteEnter(to, from, next) {
    next(vm => {
      // vm是自定义的形参名，函数内可通过vm访问组件实例
    })
  }
}
</script>
```

:::warning
`beforeRouteEnter` 是支持给 `next` 传递回调的**唯一守卫**，而其他两个组件内守卫，由于可直接使用 this 访问组件实例，因此不支持传递回调
:::

#### <i>2. 复用组件（beforeRouteUpdate）</i>

在当前路由改变，但组件实例被**复用**时，会触发该导航守卫

例如，具有动态路径参数的某路径 `/a/:num`，从 `/a/1` 跳转到 `/a/2` 时，是路径 `/a` 映射的组件被复用，而不是路径 `/a/1` 或 `/a/2` 的组件被复用，因此 `beforeRouteUpdate` 应设置在 `/a` 映射的组件内

##### **调用语法**

在 Vue2 中，在**被复用**的组件的默认导出对象（与 `data` 选项平级）中调用 `beforeRouteUpdate` 函数

```vue
// Vue2选项式API
<script>
export default {
  beforeRouteUpdate(to, from, next) {}
}
</script>
```

##### **访问 this**

当前守卫内部可直接访问组件实例 this

#### <i>3. 离开组件（beforeRouteLeave）</i>

当导航**离开**该组件对应的路由配置时，触发组件离开守卫

##### **调用语法**

在 Vue2 中，在组件的默认导出对象（与 `data` 选项平级）中调用 `beforeRouteLeave` 函数

```vue
// Vue2选项式API
<script>
export default {
  beforeRouteLeave(to, from, next) {}
}
</script>
```

##### **访问 this**

当前守卫内部可直接访问组件实例 this

##### 示例

```vue
// Vue2选项式API
<script>
export default {
  // 这个离开守卫通常用来禁止用户在还未保存修改前突然离开，该导航可以通过 next(false) 来取消
  beforeRouteLeave(to, from, next) {
    const answer = window.confirm('Do you really want to leave? You have unsaved changes!')
    if (answer) {
      next()
    } else {
      next(false)
    }
  }
}
</script>
```

:::tip 路由组件
组件内守卫生效的**前提**，是该组件必须是通过 **Vue Router** 的路由进行展示的
:::

## 总结

- 守卫方法中（除全局后置钩子）必须要调用 `next` 函数以让导航进入到下一个守卫，当导航流程中最后一个 `next` 被调用了，意味着该导航状态为已确认
- 未正确调用 `next` 函数时，如全局类的守卫会影响其他种类的守卫的执行以及全局导航，组件类会影响该组件所有导航
- 导航守卫都是中间件模式（Middleware），可以**定义多个**，按照创建顺序调用

|              |                 全局类守卫                 |   路由独享守卫   |                                                 组件内守卫                                                  |
| :----------: | :----------------------------------------: | :--------------: | :---------------------------------------------------------------------------------------------------------: |
|   具体守卫   | beforeEach<br/>beforeResolve<br/>afterEach |   beforeEnter    |                         beforeRouteEnter<br/>beforeRouteUpdate<br/>beforeRouteLeave                         |
|   定义位置   |                  路由模块                  |     路由配置     |                                              组件默认导入对象                                               |
|   触发对象   |                全局所有导航                | 导航至该路由配置 |                                 导航至组件所属路由<br/>（进入、复用、离开）                                 |
| 访问组件实例 |                  无法访问                  |     无法访问     | 除了 beforeRouteEnter<br/> 需通过 next 回调（唯一<br/>支持守卫）获取组件实例，<br/>其余可直接通过 this 访问 |

<style lang="scss">
i {
  color: #2cb2c2;
  font-style:normal;
}
</style>
