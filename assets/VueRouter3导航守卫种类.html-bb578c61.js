import{_ as r,V as i,W as l,Y as n,Z as s,X as e,a0 as u,a4 as o,$ as a,B as p}from"./framework-df2899ef.js";const d={},k=a('<h1 id="vue-router3-导航守卫种类" tabindex="-1"><a class="header-anchor" href="#vue-router3-导航守卫种类" aria-hidden="true">#</a> Vue Router3 导航守卫种类</h1><h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2><p>在实例应用中，诸如限制用户在登录后才能访问的需求十分常见，因此，对于项目中的<strong>导航</strong>（路由链接），可使用<strong>导航守卫</strong>控制每个路由的<strong>访问权限</strong></p><p><strong>Vue Router</strong> 提供的导航守卫，主要通过<strong>跳转</strong>或<strong>取消</strong>的方式守卫导航，要实现导航守卫功能，需使用路由实例 <code>router</code> 提供的实例方法</p>',4),v={href:"https://v3.router.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"},g=n("strong",null,"种类",-1),h=n("h2",{id:"导航守卫本质",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#导航守卫本质","aria-hidden":"true"},"#"),s(" 导航守卫本质")],-1),b=n("p",null,[s("一个 Vue 实例从"),n("strong",null,"创建、运行、销毁"),s("的每一个时期，都对应各自的生命周期函数，也称为钩子函数，随组件的生命周期"),n("strong",null,"自动按序"),s("执行")],-1),m={class:"hint-container tip"},f=n("p",{class:"hint-container-title"},"组件生命周期",-1),x=a(`<p>相应地，一个完整的导航解析流程，可近似看作是一个导航的生命周期，在每个流程中都设有相应的钩子函数，因此本质上，<strong>每种守卫都是一种生命周期函数</strong></p><h2 id="导航守卫分类" tabindex="-1"><a class="header-anchor" href="#导航守卫分类" aria-hidden="true">#</a> 导航守卫分类</h2><p>按照导航守卫的使用时机与场景，可分为 <i>4 类导航守卫</i>与 <i>1 个钩子函数</i></p><h3 id="一、全局前置守卫-beforeeach" tabindex="-1"><a class="header-anchor" href="#一、全局前置守卫-beforeeach" aria-hidden="true">#</a> <i>一、全局前置守卫（beforeEach）</i></h3><p>当一个导航触发时，全局前置守卫按照所有守卫的<strong>创建顺序</strong>被调用</p><p>守卫是<strong>异步解析执行</strong>，此时导航在所有守卫 resolve 完之前一直处于<strong>等待</strong>中</p><h4 id="调用语法" tabindex="-1"><a class="header-anchor" href="#调用语法" aria-hidden="true">#</a> <strong>调用语法</strong></h4><p>在已创建好的路由模块 <code>index.js</code> 中，在创建 <code>router</code> 实例后，调用其提供的实例方法 <code>beforeEach()</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 路由模块</span>
<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VueRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
router<span class="token punctuation">.</span><span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> form<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>router.beforeEach()</code> 为<strong>异步任务</strong>，接收一个<strong>异步回调函数</strong>，项目全局下只要有导航被触发，<strong>必然</strong>会触发该异步回调函数，它可接收以下三个形参（<strong>顺序不可乱</strong>）：</p>`,10),y=a("<li><p><i><strong>to</strong></i></p><ul><li>在导航被触发后，接收所访问路径（即将进入）对应的<strong>路由信息对象</strong></li><li>等同于<strong>将要访问</strong>的页面路径对应的 <code>this.$route</code></li></ul></li><li><p><i><strong>from</strong></i></p><ul><li>在导航被触发后，接收触发前页面路径（当前离开）所对应<strong>的路由信息对象</strong></li><li>等同于<strong>将要离开</strong>的页面路径对应的 <code>this.$route</code></li></ul></li>",2),_=n("p",null,[n("i",null,[n("strong",null,"next")])],-1),E=n("li",null,[n("p",null,[s("该参数为一个"),n("strong",null,"函数"),s("，在守卫中"),n("strong",null,"必须"),s("要调用该方法来 resolve 每个守卫，每个守卫的执行效果完全依赖 "),n("code",null,"next"),s(" 方法的调用参数，守卫中若省略该方法，则页面所有导航都"),n("strong",null,"失去"),s("导航功能")])],-1),R=n("code",null,"next",-1),w=a("<li><p>依据不同的调用参数，导航守卫可实现 4 种执行效果：</p><ul><li><p>（1）直接调用，无需传参：<code>next()</code><br> 表示<strong>直接通过</strong>当前导航守卫，可进入下一个导航钩子函数，若全部钩子执行完毕，则该导航的状态就是 <code>confirmed</code>（导航成功）</p></li><li><p>（2）传入布尔值 <code>false</code>：<code>next(false)</code><br> 表示<strong>中断</strong>当前的导航，<strong>不允许跳转</strong>至任何页面，用户手动修改页面 URL 或点击浏览器历史后退按钮，页面 URL 会被重置到形参 <code>from</code> 路由对应的地址</p></li><li><p>（3）传入参数：<code>next(参数)</code><br> 表示<strong>中断</strong>当前导航的同时，<strong>开启新的导航</strong>跳转到参数指定的地址：</p><blockquote><ol><li>传入<strong>字符串</strong>：<br> 表示匹配路径的字符串，可携带查询参数，由 <code>？</code> 开始作引导</li><li>传入<strong>对象</strong>： <ul><li>可传入<strong>描述地址的对象</strong>，如 <code>{ path: &#39;/home&#39; }</code></li><li>可传入<strong>命名路由对象</strong>，如 <code>{ name: &#39;user&#39;, params: { userId: &#39;123&#39; }}</code></li><li>对象中允许设置诸如 <code>replace: true</code> 之类的选项以及任何用在 <code>router-link</code> 的 <code>to</code> 属性值，或 <code>router.push()</code> 方法的第一个参数（两者使用基本一致）</li></ul></li></ol></blockquote></li><li><p>（4）传入一个 <code>Error</code> 实例：<code>next(error)</code><br> 表示当前导航会被<strong>终止</strong>且该错误会被传递给 <code>router.onErroe()</code> 注册过的回调函数</p></li></ul></li>",1),V=a(`<div class="hint-container info"><p class="hint-container-title">守卫触发时机</p><ul><li>页面初始渲染时</li><li>全局任何<strong>声明式</strong>或<strong>编程式</strong>导航被触发后，在路由信息对象中进行路径匹配，解析渲染映射组件之前，执行守卫逻辑</li></ul></div><h4 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> <strong>示例</strong></h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 要求必须有访问权限才可访问后台系统主页，否则跳转至登录页</span>
router<span class="token punctuation">.</span><span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// 获取localStorage中的token值</span>
  <span class="token keyword">const</span> token <span class="token operator">=</span> localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">&#39;token&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>to<span class="token punctuation">.</span>path <span class="token operator">!==</span> <span class="token string">&#39;/login&#39;</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>token<span class="token punctuation">)</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token string">&#39;login&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">else</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="二、全局解析守卫-beforeresolve" tabindex="-1"><a class="header-anchor" href="#二、全局解析守卫-beforeresolve" aria-hidden="true">#</a> <i>二、全局解析守卫（beforeResolve ）</i></h3><p>与全局前置守卫类似，由全局<strong>任意导航</strong>触发，不同的是，全局解析守卫的触发时机是导航解析完毕（确认）<strong>之前</strong>，正如其使用到的方法名 <code>beforeResolve</code></p><p><code>router.beforeResolve</code> 是获取数据或执行任何其他操作（如果用户无法进入页面时你希望避免执行的操作）的理想位置</p><h4 id="调用语法-1" tabindex="-1"><a class="header-anchor" href="#调用语法-1" aria-hidden="true">#</a> <strong>调用语法</strong></h4><p>在已创建好的路由模块 <code>index.js</code> 中，在创建 <code>router</code> 实例后，调用其提供的实例方法 <code>beforeResolve()</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 路由模块</span>
<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VueRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
router<span class="token punctuation">.</span><span class="token function">beforeResolve</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> form<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>router.beforeResolve()</code> 同样接收一个<strong>回调函数</strong>，形参的使用与<a href="#%E8%B0%83%E7%94%A8%E8%AF%AD%E6%B3%95">全局前置守卫</a>中的一致，此处不再重复</p><div class="hint-container info"><p class="hint-container-title">守卫触发时机</p><p>在导航被确认之前，同时在所有组件内守卫以及异步路由组件被解析之后</p></div><h3 id="三、全局后置钩子-aftereach" tabindex="-1"><a class="header-anchor" href="#三、全局后置钩子-aftereach" aria-hidden="true">#</a> <i>三、全局后置钩子（afterEach）</i></h3><p>在导航结束后，即页面<strong>已显示</strong>出导航映射的组件时所调用的<strong>钩子函数</strong></p><p>和导航守卫不同的是，全局后置钩子<strong>不会接受</strong> <code>next</code> 函数，同时也<strong>不会改变</strong>导航本身</p><h4 id="调用语法-2" tabindex="-1"><a class="header-anchor" href="#调用语法-2" aria-hidden="true">#</a> <strong>调用语法</strong></h4><p>在已创建好的路由模块 <code>index.js</code> 中，在创建 <code>router</code> 实例后，调用其提供的实例方法 <code>afterEach()</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 路由模块</span>
<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VueRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// 注意回调函数形参没有next</span>
router<span class="token punctuation">.</span><span class="token function">afterEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> form</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container info"><p class="hint-container-title">守卫触发时机</p><p>在导航被确认（导航成功）后会被调用</p></div><h3 id="四、路由独享守卫-beforeenter" tabindex="-1"><a class="header-anchor" href="#四、路由独享守卫-beforeenter" aria-hidden="true">#</a> <i>四、路由独享守卫（beforeEnter）</i></h3><p>可单独为某个路由配置（路由信息对象）定义守卫，在路由配置中直接使用 <code>beforeEnter</code> 方法，该守卫声明时所使用的方法参数与<a href="#%E8%B0%83%E7%94%A8%E8%AF%AD%E6%B3%95">全局前置守卫</a>一致</p><h4 id="调用语法-3" tabindex="-1"><a class="header-anchor" href="#调用语法-3" aria-hidden="true">#</a> <strong>调用语法</strong></h4><p>在已创建好的路由模块 <code>index.js</code> 中，选择需要设置路由独享守卫的<strong>路由配置对象</strong>，在该对象中使用 <code>router</code> 提供的实例方法 <code>beforeEnter</code> 作为属性</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 路由模块的某个路由配置对象</span>
 <span class="token punctuation">{</span>
      <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/foo&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">component</span><span class="token operator">:</span> Foo<span class="token punctuation">,</span>
      <span class="token function-variable function">beforeEnter</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token comment">// ...</span>
      <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container info"><p class="hint-container-title">守卫触发时机</p><p>当导航进入到设有路由独享守卫的路由配置时</p></div><h4 id="示例-1" tabindex="-1"><a class="header-anchor" href="#示例-1" aria-hidden="true">#</a> <strong>示例</strong></h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 可将一个函数数组传递给 beforeEnter，这在为不同的路由重用守卫时很有用</span>
<span class="token keyword">function</span> <span class="token function">removeHash</span><span class="token punctuation">(</span><span class="token parameter">to</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>to<span class="token punctuation">.</span>hash<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> to<span class="token punctuation">.</span>path<span class="token punctuation">,</span> <span class="token literal-property property">query</span><span class="token operator">:</span> to<span class="token punctuation">.</span>query<span class="token punctuation">,</span> <span class="token literal-property property">hash</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/users/:id&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span> UserDetails<span class="token punctuation">,</span>
    <span class="token literal-property property">beforeEnter</span><span class="token operator">:</span> <span class="token punctuation">[</span>removeHash<span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VueRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  routes
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>路由独享守卫只在进入路由时触发，不会在 params、query 或 hash 改变时触发</p></div><h3 id="五、组件内守卫" tabindex="-1"><a class="header-anchor" href="#五、组件内守卫" aria-hidden="true">#</a> <i>五、组件内守卫</i></h3><p>除了在全局以及路由配置中设置守卫，还可在组件切换渲染时设置导航守卫</p><p>根据<strong>进入组件</strong>、<strong>复用组件</strong>、<strong>离开组件</strong>可分为 <strong>3</strong> 类导航守卫：</p><h4 id="_1-进入组件-beforerouteenter" tabindex="-1"><a class="header-anchor" href="#_1-进入组件-beforerouteenter" aria-hidden="true">#</a> <i>1. 进入组件（beforeRouteEnter）</i></h4><p>当进入一个组件时，会根据相关数据渲染出组件，其中包括该组件<strong>对应的路由配置</strong>，因此可在该路由配置被渲染完毕（确认）<strong>之前</strong>设置组件进入守卫</p><h5 id="调用语法-4" tabindex="-1"><a class="header-anchor" href="#调用语法-4" aria-hidden="true">#</a> <strong>调用语法</strong></h5><p>在 Vue2 中，在组件默认导出对象中（与 <code>data</code> 选项平级）调用 <code>beforeRouteEnter</code> 函数</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>// Vue2选项式API
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">beforeRouteEnter</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="访问-this" tabindex="-1"><a class="header-anchor" href="#访问-this" aria-hidden="true">#</a> <strong>访问 this</strong></h5><p>在 <code>beforeRouteEnter</code> 方法中<strong>无法</strong>获取组件实例 <code>this</code>，因为当该守卫执行前，组件实例<strong>还未创建</strong></p><p>而在该守卫的 <code>next</code> 函数中，可传入一个回调函数，该回调的第一个形参即用于<strong>接收当前组件实例</strong></p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">beforeRouteEnter</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">next</span><span class="token punctuation">(</span><span class="token parameter">vm</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// vm是自定义的形参名，函数内可通过vm访问组件实例</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p><code>beforeRouteEnter</code> 是支持给 <code>next</code> 传递回调的<strong>唯一守卫</strong>，而其他两个组件内守卫，由于可直接使用 this 访问组件实例，因此不支持传递回调</p></div><h4 id="_2-复用组件-beforerouteupdate" tabindex="-1"><a class="header-anchor" href="#_2-复用组件-beforerouteupdate" aria-hidden="true">#</a> <i>2. 复用组件（beforeRouteUpdate）</i></h4><p>在当前路由改变，但组件实例被<strong>复用</strong>时，会触发该导航守卫</p><p>例如，具有动态路径参数的某路径 <code>/a/:num</code>，从 <code>/a/1</code> 跳转到 <code>/a/2</code> 时，是路径 <code>/a</code> 映射的组件被复用，而不是路径 <code>/a/1</code> 或 <code>/a/2</code> 的组件被复用，因此 <code>beforeRouteUpdate</code> 应设置在 <code>/a</code> 映射的组件内</p><h5 id="调用语法-5" tabindex="-1"><a class="header-anchor" href="#调用语法-5" aria-hidden="true">#</a> <strong>调用语法</strong></h5><p>在 Vue2 中，在<strong>被复用</strong>的组件的默认导出对象（与 <code>data</code> 选项平级）中调用 <code>beforeRouteUpdate</code> 函数</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>// Vue2选项式API
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">beforeRouteUpdate</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="访问-this-1" tabindex="-1"><a class="header-anchor" href="#访问-this-1" aria-hidden="true">#</a> <strong>访问 this</strong></h5><p>当前守卫内部可直接访问组件实例 this</p><h4 id="_3-离开组件-beforerouteleave" tabindex="-1"><a class="header-anchor" href="#_3-离开组件-beforerouteleave" aria-hidden="true">#</a> <i>3. 离开组件（beforeRouteLeave）</i></h4><p>当导航<strong>离开</strong>该组件对应的路由配置时，触发组件离开守卫</p><h5 id="调用语法-6" tabindex="-1"><a class="header-anchor" href="#调用语法-6" aria-hidden="true">#</a> <strong>调用语法</strong></h5><p>在 Vue2 中，在组件的默认导出对象（与 <code>data</code> 选项平级）中调用 <code>beforeRouteLeave</code> 函数</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>// Vue2选项式API
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">beforeRouteLeave</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="访问-this-2" tabindex="-1"><a class="header-anchor" href="#访问-this-2" aria-hidden="true">#</a> <strong>访问 this</strong></h5><p>当前守卫内部可直接访问组件实例 this</p><h5 id="示例-2" tabindex="-1"><a class="header-anchor" href="#示例-2" aria-hidden="true">#</a> 示例</h5><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>// Vue2选项式API
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token comment">// 这个离开守卫通常用来禁止用户在还未保存修改前突然离开，该导航可以通过 next(false) 来取消</span>
  <span class="token function">beforeRouteLeave</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> answer <span class="token operator">=</span> window<span class="token punctuation">.</span><span class="token function">confirm</span><span class="token punctuation">(</span><span class="token string">&#39;Do you really want to leave? You have unsaved changes!&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>answer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token function">next</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">路由组件</p><p>组件内守卫生效的<strong>前提</strong>，是该组件必须是通过 <strong>Vue Router</strong> 的路由进行展示的</p></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><ul><li>守卫方法中（除全局后置钩子）必须要调用 <code>next</code> 函数以让导航进入到下一个守卫，当导航流程中最后一个 <code>next</code> 被调用了，意味着该导航状态为已确认</li><li>未正确调用 <code>next</code> 函数时，如全局类的守卫会影响其他种类的守卫的执行以及全局导航，组件类会影响该组件所有导航</li><li>导航守卫都是中间件模式（Middleware），可以<strong>定义多个</strong>，按照创建顺序调用</li></ul><table><thead><tr><th style="text-align:center;"></th><th style="text-align:center;">全局类守卫</th><th style="text-align:center;">路由独享守卫</th><th style="text-align:center;">组件内守卫</th></tr></thead><tbody><tr><td style="text-align:center;">具体守卫</td><td style="text-align:center;">beforeEach<br>beforeResolve<br>afterEach</td><td style="text-align:center;">beforeEnter</td><td style="text-align:center;">beforeRouteEnter<br>beforeRouteUpdate<br>beforeRouteLeave</td></tr><tr><td style="text-align:center;">定义位置</td><td style="text-align:center;">路由模块</td><td style="text-align:center;">路由配置</td><td style="text-align:center;">组件默认导入对象</td></tr><tr><td style="text-align:center;">触发对象</td><td style="text-align:center;">全局所有导航</td><td style="text-align:center;">导航至该路由配置</td><td style="text-align:center;">导航至组件所属路由<br>（进入、复用、离开）</td></tr><tr><td style="text-align:center;">访问组件实例</td><td style="text-align:center;">无法访问</td><td style="text-align:center;">无法访问</td><td style="text-align:center;">除了 beforeRouteEnter<br> 需通过 next 回调（唯一<br>支持守卫）获取组件实例，<br>其余可直接通过 this 访问</td></tr></tbody></table>`,61);function j(A,B){const c=p("ExternalLinkIcon"),t=p("RouterLink");return i(),l("div",null,[k,n("p",null,[s("下面将以 "),n("a",v,[s("Vue Router3"),e(c)]),s("（对应 Vue2） 的导航守卫为例，详细介绍导航守卫的"),g]),u(" more "),h,b,n("div",m,[f,n("p",null,[s("若你不了解组件生命周期，可参考这篇文章："),e(t,{to:"/%E6%8A%80%E6%9C%AF%E5%8D%9A%E6%96%87/Vue/%E8%AF%A6%E8%A7%A3Vue2%E7%BB%84%E4%BB%B6%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html"},{default:o(()=>[s("详解 Vue2 组件生命周期")]),_:1})])]),x,n("ol",null,[y,n("li",null,[_,n("ul",null,[E,n("li",null,[n("p",null,[R,s(" 函数在完整的导航解析流程的每一步中，充当允许进入下一步的角色，详情参考 "),e(t,{to:"/%E6%8A%80%E6%9C%AF%E5%8D%9A%E6%96%87/Vue/VueRouter3%E5%AF%BC%E8%88%AA%E8%A7%A3%E6%9E%90%E6%B5%81%E7%A8%8B.html"},{default:o(()=>[s("Vue Router3 导航解析流程")]),_:1})])]),w])])]),V])}const F=r(d,[["render",j],["__file","VueRouter3导航守卫种类.html.vue"]]);export{F as default};
