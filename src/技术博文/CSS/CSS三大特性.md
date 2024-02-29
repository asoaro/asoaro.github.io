---
icon: edit
date: 2022-08-02
category:
  - CSS
tag:
  - CSS特性
star: true
---

# CSS 三大特性

## 前言

CSS 即层叠样式表，从字面理解就是设置的 CSS 规则可以被层叠掉，引申出当 CSS 规则发生冲突或与期望样式不符时，CSS 内部是使用何种机制去解决的，这种处理机制，与 CSS 的三大特性紧密联系

<!-- more -->

## 一、层叠性（Cascade）

### **样式冲突的情形**

1. 两者为**完全相同**的选择器
2. 两者为**权重相同**的选择器

### **基于层叠性的处理**

根据从上往下的执行顺序，上述两种情形都会执行写在后面的 CSS 规则，即前面的样式被后面的层叠**覆盖**掉，如果以内部样式表为准，则可理解为执行离 HTML 结构近的，即**就近原则**

## 二、继承性（Inheritance）

### **简述**

在 CSS 中，每个 CSS 属性定义的概述都指出了这个属性是默认继承的 ("Inherited: Yes") 还是默认不继承的 ("Inherited: no")，这决定了在没有为元素的属性指定值时该如何计算值

::: tip CSS 参考
MDN 网站中的 [CSS 参考](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference#%E7%B4%A2%E5%BC%95)页面中，按**字母索引**的顺序整理了所有标准 CSS 属性，可查询每个属性的形式定义内容，其中就包括是否默认继承，例如字体颜色属性 [color](https://developer.mozilla.org/zh-CN/docs/Web/CSS/color#%E5%BD%A2%E5%BC%8F%E5%AE%9A%E4%B9%89)
:::

因此，子元素会继承父元素的某些样式（规则），如与文本相关的，text-, font-, line-, color，继承性的目的，即是为了简化代码

### **控制继承**

CSS 为控制继承提供了四个特殊的**通用属性值**，每一个 CSS 属性都接收这些值

::: warning
属性值 revert 属于 CSS4，只有很少浏览器支持，固此处不列举该属性值
:::

#### 1. CSS 属性: inherit

表示继承父元素中对应 CSS 属性的值

::: tip

1. 对于继承属性，inherit 关键字只是增强了属性的默认行为，通常只在覆盖原有的值的时候使用
2. 继承始终来自 DOM 树中的父元素，即使父元素不是包含块
3. inherit 可应用于任何 CSS 属性
   :::

#### 2. CSS 属性: initial

表示设置此属性为它的初始（或默认）值

::: tip

1. IE 浏览器不支持此关键字
2. 不应将初始值与浏览器样式表指定的值混淆
3. initial 可应用于任何 CSS 属性
   :::

#### 3. CSS 属性: unset

表示将属性重置为自然值，即属性若具有继承性且父元素有定义值，则与 inherit 类似，否则和 initial 一样

::: tip

1. IE 浏览器不支持此关键字
2. initial 可应用于任何 CSS 属性
   :::

### **重设所有属性值**

CSS 属性 all 将除了 unicode-bidi 与 direction 之外的所有属性重设至其初始值，或继承值

CSS 属性 all 的合法取值有： inherit / initial / unset / revert

::: tip unicode-bidi 与 direction
这两个属性决定如何处理文档中的双书写方向文本（bidirectional text），[了解更多](https://developer.mozilla.org/zh-CN/docs/Web/CSS/unicode-bidi)
:::

### **继承性的应用**

此处以行高的继承举例，当为 body 设置了如下样式后：

```css
body {
  font: 12px/1.5 'microsoft yehei';
}
```

若子元素未设定行高，则会继承父元素的行高：1.5 \* 子元素 font-size = 子元素行高，这样的优势是子元素可根据自身文字大小自动调整行高

## 三、优先级（Specificity）

### **简述**

浏览器会根据优先级来决定当**多个规则**有**不同选择器**对应**相同**的元素时，需要使用哪个规则

### **同一元素被多个选择器选中时**

1.若选择器完全相同，则执行层叠性

2.若选择器不同，则按选择器的权重执行

| 选择器                           | 权重    |
| -------------------------------- | ------- |
| 继承性、通配符选择器( \* )       | 0.0.0.0 |
| 元素选择器、伪元素选择器         | 0.0.0.1 |
| 类选择器、伪类选择器、属性选择器 | 0.0.1.0 |
| id 选择器                        | 0.1.0.0 |
| 行内样式（style 属性）           | 1.0.0.0 |
| !important                       | ∞       |

::: tip

1. 通用选择器 ( \* )，组合符 (+, >, ~, ' ')，和否定伪类 (:not) **不会影响**优先级
2. 若元素没有被直接选出来，则无论父元素权重多高，子元素继承父元素样式的权重都是 0
3. 权重叠加计算在复合选择器会用到，**不会有进位**，即便有 20 个相加也是 0.0.0.20。权重叠加例子：.nav li = 0.0.1.0 + 0.0.0.1 = 0.0.1.1
4. 覆盖 !important 唯一的办法就是使用另一个 !important 且具有**相同优先级**而且顺序靠后，或者更高优先级。建议除了非常情况不要使用它，因为它改变了层叠的常规工作方式，会使调试 CSS 问题非常困难，特别是在大型样式表中
   :::

### **样式表的优先级**

样式表种类:

1. 用户代理样式表（User Agent Style Sheets），例如浏览器的默认样式  
2. 作者样式表（Author Style Sheets），Web 开发人员创建的样式表  
3. 用户样式表（User Style Sheets），浏览网页的用户自定义的样式表，如视力受损的用户可自定义放大字体的样式表

| 样式表优先级（从上往下由低到高）       |
| -------------------------------------- |
| **用户代理**样式表中的声明             |
| **用户** 样式表中的常规声明            |
| **作者** 样式表中的常规声明            |
| **作者** 样式表中的 !important 声明     |
| **用户** 样式表中的 !important 声明     |
| **用户代理** 样式表中的 !important 声明 |

## **参考**

- [MDN：CSS 层叠性](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Cascade)
- [MDN：CSS 继承性](https://developer.mozilla.org/zh-CN/docs/Web/CSS/inheritance)
- [MDN：CSS 优先级](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Specificity)
