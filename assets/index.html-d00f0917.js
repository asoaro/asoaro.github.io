import{S as c}from"./Swiper-e95e315a.js";import{c as a,V as i,W as u,X as t,Y as d,u as _,Z as e,$ as o,a0 as l,B as r,_ as h}from"./framework-73f3449e.js";const p=e("h2",{id:"通用后台管理系统",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#通用后台管理系统","aria-hidden":"true"},"#"),o(" 通用后台管理系统")],-1),g=e("strong",null,"纯前端静态 Web 应用",-1),f={href:"http://mockjs.com/",target:"_blank",rel:"noopener noreferrer"},m=l("<p>当前管理系统中：</p><ul><li>默认<strong>管理员</strong>账号：<code>admin</code>，密码：<code>123456</code></li><li>默认<strong>成员</strong>账号：<code>Apple</code>，密码：<code>123456</code></li></ul>",2),b={href:"https://asoaro.com/backstage",target:"_blank",rel:"noopener noreferrer"},k={href:"https://asoar.gitee.io/backstage",target:"_blank",rel:"noopener noreferrer"},x=e("h3",{id:"技术栈",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#技术栈","aria-hidden":"true"},"#"),o(" 技术栈")],-1),j={href:"https://element-plus.gitee.io/zh-CN/",target:"_blank",rel:"noopener noreferrer"},w={href:"https://www.javascriptc.com/vue3js/",target:"_blank",rel:"noopener noreferrer"},v=e("code",null,"setup",-1),V=e("code",null,"普通组件",-1),q=e("code",null,"路由组件",-1),A={href:"https://router.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"},N=e("li",null,[o("使用 "),e("strong",null,"Hash"),o(" 路由模式，在路由配置的 "),e("code",null,"component"),o(" 属性中使用 "),e("code",null,"() = > import()"),o(" 组件导入语法实现"),e("strong",null,"路由懒加载")],-1),P=e("strong",null,"动态子路由",-1),S=e("code",null,"path",-1),C=e("code",null,"name",-1),E=e("code",null,"component",-1),I=e("code",null,"mutation",-1),W=e("code",null,"addRoute()",-1),z=e("strong",null,"动态",-1),M={href:"https://vitejs.cn/",target:"_blank",rel:"noopener noreferrer"},B=e("code",null,[o("i"),e("wbr"),o("mport.meta.glob")],-1),U=e("strong",null,"动态路由懒加载",-1),G=e("li",null,[o("设置"),e("strong",null,"全局前置守卫"),o("，处理登录前通过修改路径的非法访问，以及处理登录后访问不存在路径")],-1),L={href:"http://mockjs.com/",target:"_blank",rel:"noopener noreferrer"},$=e("blockquote",null,[e("ul",null,[e("li",null,[o("封装 "),e("code",null,"Mock.js"),o(" 模块，使用"),e("strong",null,"正则表达式"),o("匹配请求路径并拦截项目中的 Ajax 请求")]),e("li",null,"根据项目的不同功能模块，封装不同的数据请求函数，在拦截请求后进行调用以返回正确的数据")])],-1),y={href:"http://axios-js.com/",target:"_blank",rel:"noopener noreferrer"},D=e("strong",null,"二次封装",-1),F=e("li",null,[o("通过"),e("code",null,"请求/响应拦截器"),e("strong",null,"统一"),o("处理项目中所有请求的"),e("strong",null,"重复步骤"),o("，包括在请求前自定义携带 header、处理请求失败的反馈信息、解构赋值请求成功的参数对象以简化嵌套，方便赋值")],-1),H=e("code",null,"mock",-1),O={href:"https://www.fastmock.site/",target:"_blank",rel:"noopener noreferrer"},R=l("<li>根据已封装好的 Ajax 请求环境配置文件，判断在<code>开发环境</code>、<code>测试环境</code>、<code>生产环境</code>下应使用的<strong>请求根路径</strong>，防止<code>生产环境</code>使用 fastmock</li><li>将项目中的所有 Ajax 请求函数封装为<strong>统一</strong>的接口模块 <code>api.js</code>，在该模块导入已二次封装的 <code>request</code> 函数，实现<strong>统一管理</strong>项目所有的请求接口</li>",2),T={href:"https://vuex.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"},X=e("strong",null,"数据通讯",-1),Y=l("<blockquote><ul><li>在用户登录后会返回一个的侧边栏菜单对象，通过提交 mutation 将其存储至 Vuex 中，以供侧边栏动态设置菜单项以及面包屑动态设置路径名</li><li>在点击侧边栏菜单后会返回一个<code>激活菜单栏对象</code>，通过提交 mutation 将其存储至 Vuex 中，供路由组件显示区顶部的 <code>tag</code> 标签使用</li><li>通过 <code>localStorage</code> 持久化登录后的侧边栏菜单对象、激活菜单对象，并在 <code>main.js</code> 中提交对应的 mutation 以防止页面刷新后 Vuex 数据丢失引起的侧边栏、面包屑、tag 标签数据丢失</li></ul></blockquote>",1),J={href:"https://echarts.apache.org/zh/index.html",target:"_blank",rel:"noopener noreferrer"},Z=e("blockquote",null,[e("ul",null,[e("li",null,"对首页中具有 X/Y 轴的图表（折线图、柱状图）进行基础的通用对象配置，对饼状图单独定义配置对象"),e("li",null,"处理请求返回的 Mock 图表源数据，并将其与每个图表的配置对象结合以渲染图表")])],-1),K=l("<li><p>使用 <strong>vue-cookies</strong> 存储或移除浏览器 cookie 的登录认证 <code>token</code></p></li><li><p>使用 <strong>vue3-lottie</strong> 加载 <code>JSON</code> 格式的 lottie 动画，实现展示页面<strong>低消耗</strong>的 Web 网页动画</p></li>",2),Q=e("p",null," ",-1),ee=e("hr",null,null,-1),oe=e("p",null," ",-1),te=e("h2",{id:"中国天气预报",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#中国天气预报","aria-hidden":"true"},"#"),o(" 中国天气预报")],-1),ne=e("h3",{id:"技术栈-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#技术栈-1","aria-hidden":"true"},"#"),o(" 技术栈")],-1),le={href:"https://cn.vitejs.dev/",target:"_blank",rel:"noopener noreferrer"},se={href:"https://element-plus.gitee.io/zh-CN/",target:"_blank",rel:"noopener noreferrer"},re=e("code",null,"CityPanel.vue",-1),ce=e("code",null,"Days.vue",-1),ae=e("code",null,"Footer.vue",-1),ie=e("strong",null,"媒体查询",-1),ue=e("strong",null,"响应式布局",-1),de=e("li",null,[o("通过比对城市后缀（'市', '县', '自治州', '岛'），判断出合法城市名后，将 "),e("code",null,"Axios"),o(" 设置为全局属性 "),e("code",null,"$http"),o(" 以方便发起数据请求，通过 "),e("code",null,"$nextTick"),o(" 保证在每次查询时能正常渲染出数据，设置"),e("strong",null,"请求/响应拦截器"),o("以应用加载效果")],-1),_e=e("li",null,[o("使用 Vue 3 的函数模板引用获取 "),e("code",null,"v-for"),o(" 后的 DOM 数组，循环渲染每一天的天气精灵图图标")],-1),he=e("code",null,"Less",-1),pe={href:"https://www.iconfont.cn/",target:"_blank",rel:"noopener noreferrer"},ge={href:"https://asoar.gitee.io/weather-forecast",target:"_blank",rel:"noopener noreferrer"},fe=a({__name:"index.html",setup(me){return(be,ke)=>{const s=r("SiteInfo"),n=r("ExternalLinkIcon");return i(),u("div",null,[p,t(s,{name:"通用后台管理系统",url:"https://asoar.gitee.io/backstage",desc:"基于 Vite + Vue3 构建的纯前端静态 Web 应用",preview:"/projects/backstage/homePage.webp",logo:"/logo.svg",repo:"https://github.com/asoaro/backstage"}),d(" 图片路径基于public/下 "),t(_(c),{imgUrl:["projects/backstage/loginPage.webp","projects/backstage/homePage.webp","projects/backstage/userPage.webp"]},null,8,["imgUrl"]),e("p",null,[o("基于 Vite + Vue3 构建的"),g,o("，使用 "),e("a",f,[o("Mock.js"),t(n)]),o(" 在本地模拟项目中请求后端的各类数据，同时可根据不同用户的登录权限，显示不同的侧边栏菜单")]),m,e("p",null,[o("部署于 GitHub pages: "),e("a",b,[o("https://asoaro.com/backstage"),t(n)])]),e("p",null,[o("部署于 Gitee pages: "),e("a",k,[o("https://asoar.gitee.io/backstage"),t(n)])]),x,e("ol",null,[e("li",null,[e("p",null,[o("使用 "),e("a",j,[o("Element Plus"),t(n)]),o(" 构建项目 UI 界面：")]),e("blockquote",null,[e("p",null,[o("使用 "),e("a",w,[o("Vue 3"),t(n)]),o(" 的 "),v,o(" 语法构建项目的"),V,o("和"),q])])]),e("li",null,[e("p",null,[o("使用 "),e("a",A,[o("Vue Router 4"),t(n)]),o(" 构建项目的前端路由系统：")]),e("blockquote",null,[e("ul",null,[N,e("li",null,[o("在用户登录后返回的侧边栏菜单对象中，包含了设置"),P,o("的 "),S,o("、"),C,o("、"),E,o("的相关属性，因此在管理菜单数据的 "),I,o(" 中，通过全局路由对象提供的 "),W,o(" 方法"),z,o("添加子路由，同时使用 "),e("a",M,[o("Vite"),t(n)]),o(" 的动态导入模块语法 "),B,o(" 实现"),U]),G])])]),e("li",null,[e("p",null,[o("使用 "),e("a",L,[o("Mock.js"),t(n)]),o(" 模拟后端的各类数据：")]),$]),e("li",null,[e("p",null,[o("使用 "),e("a",y,[o("Axios"),t(n)]),o(" 发起 Ajax 请求，并对 Axios 进行"),D,o("：")]),e("blockquote",null,[e("ul",null,[F,e("li",null,[o("根据请求携带参数中定义的 "),H,o(" 布尔值，可选择是否使用 "),e("a",O,[o("fastmock"),t(n)]),o(" 的模拟数据")]),R])])]),e("li",null,[e("p",null,[o("使用 "),e("a",T,[o("Vuex 4"),t(n)]),o(" 管理项目数据，实现不同组件间的"),X,o("：")]),Y]),e("li",null,[e("p",null,[o("使用 "),e("a",J,[o("Echarts.js"),t(n)]),o(" 构建首页中的数据展示：")]),Z]),K]),Q,ee,oe,te,t(s,{name:"中国天气预报",url:"https://asoar.gitee.io/weather-forecast",desc:"提供全国城市当天往后一周的天气预报",preview:"/projects/weather/weather.webp",logo:"/logo.svg",repo:"https://github.com/asoaro/Weather-Forecast"}),ne,e("ol",null,[e("li",null,[o("使用 "),e("a",le,[o("Vite"),t(n)]),o(" 构建的 Vue 3 Web 应用")]),e("li",null,[o("基于 "),e("a",se,[o("Element Plus"),t(n)]),o(" 构建项目 UI 界面，并将界面进行组件化拆分，封装了 "),re,o("、"),ce,o("、"),ae,o(" 三个组件，同时通过"),ie,o("设置不同视口的页面布局，实现"),ue]),de,_e,e("li",null,[o("项目中使用 "),he,o(" 编写样式，同时使用了 "),e("a",pe,[o("阿里巴巴矢量图标库"),t(n)])])]),e("p",null,[o("部署于 Gitee pages: "),e("a",ge,[o("https://asoar.gitee.io/weather-forecast"),t(n)])])])}}}),we=h(fe,[["__file","index.html.vue"]]);export{we as default};
