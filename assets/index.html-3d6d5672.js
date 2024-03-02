import{C as t}from"./Circle-b40b8cb3.js";import{c as n,V as o,W as d,X as a,u as l,Z as e,$ as i,a0 as r,B as h,_ as c}from"./framework-73f3449e.js";const p=r('<h2 id="基本信息" tabindex="-1"><a class="header-anchor" href="#基本信息" aria-hidden="true">#</a> 基本信息</h2><h3 id="个人信息" tabindex="-1"><a class="header-anchor" href="#个人信息" aria-hidden="true">#</a> 个人信息</h3><div class="person"><div>姓名：<span>吴俊辉</span></div><div>出生日期：<span>1996-04</span></div><div>性别：<span>男</span></div><div>籍贯：<span>广东梅州</span></div><div>学历：<span>本科</span></div></div><h3 id="求职意向" tabindex="-1"><a class="header-anchor" href="#求职意向" aria-hidden="true">#</a> 求职意向</h3><div class="person"><div>应聘岗位：<span>大数据讲师</span></div><div>期望薪资：<span>面议</span></div><div>工作地点：<span>北京</span></div><div>工作性质：<span>全职</span></div></div><h3 id="联系方式" tabindex="-1"><a class="header-anchor" href="#联系方式" aria-hidden="true">#</a> 联系方式</h3><div class="person contact"><div>手机：<span>18610862223</span></div><div>邮箱：<a href="mailto:asoar@163.com" target="_black">asoar@163.com</a></div><div>个人博客：<a href="https://asoar.gitee.io" target="_black">https://asoar.gitee.io</a></div></div><h2 id="教育背景" tabindex="-1"><a class="header-anchor" href="#教育背景" aria-hidden="true">#</a> 教育背景</h2><div class="education"><span>2017/09 - 2020/01</span><span>西南科技大学</span><span>本科</span></div><div class="education"><span>2014/09 - 2017/06</span><span>广州铁路职业技术学院</span><span>大专</span></div><h2 id="专业技能" tabindex="-1"><a class="header-anchor" href="#专业技能" aria-hidden="true">#</a> 专业技能</h2><p><i></i></p><ul><li>熟练使用 <i>HTML</i> 、<i>CSS</i> 快速构建页面，熟悉 <i>rem</i>、<i>flex</i> 等响应式布局方式以及 <i>HTML5</i>、<i>CSS3</i> 新特性<br> 熟练使用 <i>CSS</i> 预处理器：<i>Less</i>、<i>Sass</i></li><li>熟练使用 <i>JavaScript</i> 构建页面交互功能，熟悉 JS 闭包、原型、作用域链等基本概念<br> 熟悉 <i>ES6</i> 新特性，了解 <i>TypeScript</i></li><li>熟练运用 <i>Vue</i> 生态系统（<i>Vite</i>、<i>Vue-CLI</i>、<i>Vue Router</i>、<i>Vuex</i>）</li><li>熟悉常见 <i>UI</i> 组件库：<i>Element-Plus</i>、<i>Element-UI</i>、<i>Vant</i>、<i>Ant-design</i> 等</li><li>熟练使用 <i>uni-app</i> 开发微信小程序，熟悉发布小程序的基本流程</li><li>熟练使用 <i>Git</i>，熟悉团队协作流程，熟练使用 <i>GitHub Actions</i> 进行自动化部署</li></ul><h2 id="工作经历" tabindex="-1"><a class="header-anchor" href="#工作经历" aria-hidden="true">#</a> 工作经历</h2><div class="person work"><div>2017/07 - 2021/07</div><div>深圳市地铁集团有限公司 | 地铁车辆检修</div></div><p>在职期间负责深圳 11 号线地铁车辆的日常维护保养、正线抢险工作，攻克列车各种疑难故障，获得上级领导表扬，积极参与各项技术比武并名列前茅，因表现优秀荣获地铁集团公司年度 “优秀团员” 称号以及年度 “未来之星” 称号</p><div class="person work"><div>2021/09 - 2023/01</div><div>广州迅发科技有限公司 | 前端开发</div></div><ol><li>负责公司项目的 Web 前端开发及移动端开发，解决主流浏览器兼容性问题<br></li><li>与各个部门成员协同完成项目版本迭代，协助 UI 设计师完成部分页面设计<br></li><li>与后端开发工程师协作，完成前端数据绑定，操作交互<br></li><li>协助项目经理完成对项目前端界面的设计，提升项目的用户体验及项目后期的优化改造</li></ol><h2 id="项目经验" tabindex="-1"><a class="header-anchor" href="#项目经验" aria-hidden="true">#</a> 项目经验</h2><h3 id="一、通用后台管理系统" tabindex="-1"><a class="header-anchor" href="#一、通用后台管理系统" aria-hidden="true">#</a> 一、通用后台管理系统</h3><p><strong>项目介绍</strong>：提供基于用户权限的数据可视化以及数据管理<br><strong>技术栈</strong>：<i>Vite、Vue3、Element-Plus、Scss、Vue Router4、Vuex4、Axios、Mock、Echarts</i></p><ol><li>基于用户登录后返回的数据对象，动态渲染该用户权限的侧边栏菜单，通过 <code>addRouter()</code> 添加动态路由</li><li>使用 Vuex4 实现组件间的数据通讯，并通过 <code>localStorage</code> 持久化登录后的数据对象，防止刷新页面后丢失</li><li>二次封装 Axios，通过请求/响应拦截器统一处理项目中所有请求的重复步骤，并将项目中所有的 Ajax 请求函数封装为统一的接口模块，以方便统一管理</li><li>设置全局前置守卫，处理登录前通过修改路径的非法访问，以及处理登录后访问不存在路径</li></ol>',22),u=e("strong",null,"在线演示",-1),v={href:"https://asoar.gitee.io/backstage",target:"_blank",rel:"noopener noreferrer"},_=r('<h3 id="二、中国城市天气预报" tabindex="-1"><a class="header-anchor" href="#二、中国城市天气预报" aria-hidden="true">#</a> 二、中国城市天气预报</h3><p><strong>项目介绍</strong>：提供全国城市当天往后一周的天气预报<br><strong>技术栈</strong>：<i>Vite、Vue3、Element-Plus、Less、Axios</i></p><ol><li>秉承组件化思想构建项目 UI 界面，同时通过媒体查询设置不同视口的页面布局，实现响应式布局</li><li>通过比对城市后缀（&#39;市&#39;, &#39;县&#39;, &#39;自治州&#39;, &#39;岛&#39;），判断出合法城市名后，使用被设置为全局属性 <code>$http</code> 的 Axios 发起 Ajax 请求，通过 <code>$nextTick</code> 保证在每次查询时能正常渲染出数据，设置请求/响应拦截器以应用加载效果</li><li>使用 Vue 3 的函数模板引用获取 <code>v-for</code> 后的 DOM 数组，循环渲染每一天的天气精灵图图标</li></ol>',3),g=e("strong",null,"在线演示",-1),b={href:"https://asoar.gitee.io/backstage",target:"_blank",rel:"noopener noreferrer"},f=e("h2",{id:"自我评价",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#自我评价","aria-hidden":"true"},"#"),i(" 自我评价")],-1),m=e("li",null,[i("秉承"),e("i",null,"终身学习"),i("的思想，借助软件 mindmaster 构建自身知识网络，目前正在准备雅思考试及学习 TypeScript")],-1),x={href:"https://github.com/vuepress-theme-hope/vuepress-theme-hope",target:"_blank",rel:"noopener noreferrer"},k={href:"https://github.com/vuepress-theme-hope/vuepress-theme-hope/issues/2031",target:"_blank",rel:"noopener noreferrer"},V={href:"https://asoaro.com",target:"_blank",rel:"noopener noreferrer"},S={href:"https://asoar.gitee.io",target:"_blank",rel:"noopener noreferrer"},A=n({__name:"index.html",setup(E){return(C,I)=>{const s=h("ExternalLinkIcon");return o(),d("div",null,[a(l(t)),p,e("p",null,[u,i("："),e("a",v,[i("https://asoar.gitee.io/backstage"),a(s)]),i(" （已默认填入管理员账号，默认成员账号： Apple，密码都是：123456）")]),_,e("p",null,[g,i("："),e("a",b,[i("https://asoar.gitee.io/backstage"),a(s)])]),f,e("ul",null,[m,e("li",null,[i("能流畅阅读英文文档，积极参与 GitHub 开源项目的维护，例如为 "),e("a",x,[i("vuepress-theme-hope"),a(s)]),i(" 提出移动端样式 bug 的"),e("a",k,[i("建议"),a(s)])]),e("li",null,[i("个人博客： "),e("ul",null,[e("li",null,[e("a",V,[i("https://asoaro.com"),a(s)]),i("（部署于 GitHub Pages）")]),e("li",null,[e("a",S,[i("https://asoar.gitee.io"),a(s)]),i("（部署于 Gitee Pages）")])])])])])}}});const G=c(A,[["__file","index.html.vue"]]);export{G as default};
