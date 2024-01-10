import{_ as p,r as l,o,c as i,a as n,e as t,w as e,b as s,d as c}from"./app-a153c100.js";const u="/MyBlog/assets/1612057263869-e8e32564.png",d="/MyBlog/assets/1612058175710-0d368e69.png",r="/MyBlog/assets/1612058368559-5b810fdd.png",k="/MyBlog/assets/1612061127620-5bd7f2f8.png",v="/MyBlog/assets/1612060874141-9620024c.png",m="/MyBlog/assets/1612058810737-3c664f43.png",b={},g=n("h1",{id:"_10-mvc",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_10-mvc","aria-hidden":"true"},"#"),s(" 10 - MVC 🚀")],-1),h={class:"table-of-contents"},w=c('<h2 id="从-model1-到-model2-mvc" tabindex="-1"><a class="header-anchor" href="#从-model1-到-model2-mvc" aria-hidden="true">#</a> 从 Model1 到 Model2(MVC)</h2><p>软件架构编年史</p><p>Servlet---&gt;JSP</p><h3 id="model1-模式" tabindex="-1"><a class="header-anchor" href="#model1-模式" aria-hidden="true">#</a> Model1 模式</h3><p>model1 是早期 javaweb 软件开发中最为流行的一种技术，整个项目的开发只需要：JSP+JavaBean 即可完成</p><p><img src="'+u+'" alt="1612057263869"></p><p><strong>Model1 模式的优缺点:</strong></p><ul><li>优点： <ul><li>开发效率很高</li><li>架构简单</li><li>适合小型的项目开发</li></ul></li><li>缺点： <ul><li>JSP 的职责过重</li><li>表现层和逻辑混杂</li><li>代码的可重用性低</li><li>不利于维护</li></ul></li></ul><h3 id="model2-模式-mvc" tabindex="-1"><a class="header-anchor" href="#model2-模式-mvc" aria-hidden="true">#</a> Model2 模式（MVC）</h3><p>通过对 model1 模式的了解，会发现随着互联网的发展，model1 模式已经不适用于当前的环境，因此在 model1 的基础上，软件架构继续发展出现了 Model2(MVC)模式，Model2 模式的架构如下:</p><p><img src="'+d+'" alt="1612058175710"></p><p>Model2 模式的优缺点</p><ul><li>优点 <ul><li>职责清晰，每层各司其责</li><li>代码的可重用性高</li><li>维护方便</li><li>适合大型的软件项目</li></ul></li><li>缺点 <ul><li>不适合小型项目</li><li>对于开发人员要求高</li></ul></li></ul><p><img src="'+r+'" alt="1612058368559"></p><h3 id="三层架构和-mvc-区别" tabindex="-1"><a class="header-anchor" href="#三层架构和-mvc-区别" aria-hidden="true">#</a> 三层架构和 MVC 区别</h3><p><img src="'+k+'" alt="1612061127620"></p><p><img src="'+v+'" alt="1612060874141"></p><p>三层架构:</p><ul><li>表现层（UI）</li><li>业务逻辑层（BL）</li><li>持久层（DL）</li></ul><p>MVC：</p><ul><li>视图层（View）</li><li>控制层（Controller）</li><li>模型层（Model）</li></ul><p>三层架构是一种软件架构技术，MVC 是一种设计模式；三层架构中的表现层即 MVC</p><blockquote><p>MVC 框架目前市面上有很多：</p><ol><li>struts1</li><li>struts2</li><li>WebWork</li><li><strong>springMVC</strong></li></ol></blockquote><p>分层开发的最终目的是：</p><p>降低耦合度（<strong>高内聚低耦合</strong>）</p><h2 id="baseservlet" tabindex="-1"><a class="header-anchor" href="#baseservlet" aria-hidden="true">#</a> BaseServlet</h2><p><img src="'+m+`" alt="1612058810737"></p><p>实现代码：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BaseServlet</span> <span class="token keyword">extends</span> <span class="token class-name">HttpServlet</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">service</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> req<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> resp<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ServletException</span><span class="token punctuation">,</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token comment">//获取请求参数（需要执行的方法名称）</span>
        <span class="token class-name">String</span> methodName <span class="token operator">=</span> req<span class="token punctuation">.</span><span class="token function">getParameter</span><span class="token punctuation">(</span><span class="token string">&quot;method&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token comment">//根据提供的方法名以及方法中的参数类型创建方法对象</span>
            <span class="token class-name">Method</span> method <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getMethod</span><span class="token punctuation">(</span>methodName<span class="token punctuation">,</span> <span class="token class-name">HttpServletRequest</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//执行方法,并获取返回值（跳转的目标位置）</span>
            <span class="token class-name">Object</span> returnVal <span class="token operator">=</span> method<span class="token punctuation">.</span><span class="token function">invoke</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span>req<span class="token punctuation">,</span>resp<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//如果返回值不为空，则说明servlet需要进行跳转（为空则说明方法响应json数据）</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token class-name">Objects</span><span class="token punctuation">.</span><span class="token function">nonNull</span><span class="token punctuation">(</span>returnVal<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token comment">//将返回值转换为字符串</span>
                <span class="token class-name">String</span> path <span class="token operator">=</span> returnVal<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">&quot;redirect:&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                    <span class="token comment">//重定向</span>
                    path <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;redirect:&quot;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
                    resp<span class="token punctuation">.</span><span class="token function">sendRedirect</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
                    <span class="token comment">//转发</span>
                    req<span class="token punctuation">.</span><span class="token function">getRequestDispatcher</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forward</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span>resp<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">NoSuchMethodException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IllegalAccessException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InvocationTargetException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="分页技术" tabindex="-1"><a class="header-anchor" href="#分页技术" aria-hidden="true">#</a> 分页技术</h2><h3 id="通用分页工具类" tabindex="-1"><a class="header-anchor" href="#通用分页工具类" aria-hidden="true">#</a> 通用分页工具类</h3><ol><li><p>编写分页模型类(PageModel)</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PageModel</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**当前页*/</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> pageNow<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**每页数据行数*/</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> pageSize<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**首页*/</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> first <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**上一页*/</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> prev<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**下一页*/</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> next<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**尾页*/</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> last<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**总数据行数*/</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> totalNum<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**总页数*/</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> totalPage<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**查询记录的偏移值*/</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> offset<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**记录开始的序号位置*/</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> startNum<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**设置最大显示的页码数*/</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> limitPage <span class="token operator">=</span> <span class="token number">6</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**开始显示的页码位置*/</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> begin<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**结束显示的页码*/</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> end<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**存储当前页码的数据*/</span>
    <span class="token keyword">private</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> dataList <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**设置目标跳转地址*/</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> url<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">PageModel</span><span class="token punctuation">(</span><span class="token keyword">int</span> pageNow<span class="token punctuation">,</span><span class="token keyword">int</span> pageSize<span class="token punctuation">,</span><span class="token keyword">int</span> totalNum<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>pageNow <span class="token operator">=</span> pageNow<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>pageSize <span class="token operator">=</span> pageSize<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>totalNum <span class="token operator">=</span> totalNum<span class="token punctuation">;</span>

        <span class="token comment">//计算获取总页数（尾页）</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>last <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>totalPage <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">ceil</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">double</span><span class="token punctuation">)</span>totalNum<span class="token operator">/</span>pageSize<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//防止当前页小于1</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>pageNow <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>pageNow<span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//防止当前页大于总页数</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>pageNow <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>pageNow<span class="token punctuation">,</span> totalPage<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//防止上一页小于1</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>prev <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>pageNow <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//防止下一页大于总页数</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>pageNow <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span>totalPage<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//计算sql查询的偏移值</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>startNum <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>offset <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>pageNow <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">*</span> pageSize<span class="token punctuation">;</span>

        <span class="token comment">//计算开始显示的页码</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>begin <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token keyword">this</span><span class="token punctuation">.</span>pageNow <span class="token operator">-</span> <span class="token keyword">this</span><span class="token punctuation">.</span>limitPage<span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//计算结束显示的页码</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>end <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>totalPage<span class="token punctuation">,</span><span class="token keyword">this</span><span class="token punctuation">.</span>begin <span class="token operator">+</span> limitPage <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//setter/getter</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>业务逻辑层调用</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">EmpService</span> <span class="token keyword">implements</span> <span class="token class-name">IEmpService</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">EmpDAO</span> empDAO<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">PageModel</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Emp</span><span class="token punctuation">&gt;</span></span> <span class="token function">queryAllEmps</span><span class="token punctuation">(</span><span class="token keyword">int</span> pageNow<span class="token punctuation">,</span> <span class="token keyword">int</span> pageSize<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        empDAO <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">EmpDAO</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//获取总记录数</span>
        <span class="token keyword">int</span> totalNum <span class="token operator">=</span> empDAO<span class="token punctuation">.</span><span class="token function">getTotalNum</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//根据提供的数据创建通用的分页工具对象</span>
        <span class="token class-name">PageModel</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Emp</span><span class="token punctuation">&gt;</span></span> model <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PageModel</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span>pageNow<span class="token punctuation">,</span>pageSize<span class="token punctuation">,</span>totalNum<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//使用分页对象中处理完的属性查询数据</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Emp</span><span class="token punctuation">&gt;</span></span> emps <span class="token operator">=</span> empDAO<span class="token punctuation">.</span><span class="token function">selectByPage</span><span class="token punctuation">(</span>model<span class="token punctuation">.</span><span class="token function">getOffset</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> model<span class="token punctuation">.</span><span class="token function">getPageSize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//将数据存入PageModel</span>
        model<span class="token punctuation">.</span><span class="token function">setDataList</span><span class="token punctuation">(</span>emps<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> model<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>控制层的请求处理</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@WebServlet</span><span class="token punctuation">(</span><span class="token string">&quot;/emp&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">EmpServlet</span> <span class="token keyword">extends</span> <span class="token class-name">BaseServlet</span><span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">queryList</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> req<span class="token punctuation">,</span><span class="token class-name">HttpServletResponse</span> resp<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//获取客户端提交的页码数</span>
        <span class="token class-name">String</span> page <span class="token operator">=</span> req<span class="token punctuation">.</span><span class="token function">getParameter</span><span class="token punctuation">(</span><span class="token string">&quot;page&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//获取客户端提交的每页大小数</span>
        <span class="token class-name">String</span> limit <span class="token operator">=</span> req<span class="token punctuation">.</span><span class="token function">getParameter</span><span class="token punctuation">(</span><span class="token string">&quot;limit&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//初始化当前页码数和每页数据条数</span>
        <span class="token keyword">int</span> pageNow <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> pageSize <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>page <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            pageNow <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span>page<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>limit <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            pageSize <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span>limit<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//执行分页的业务逻辑</span>
        <span class="token class-name">IEmpService</span> service <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">EmpService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">PageModel</span> model <span class="token operator">=</span> service<span class="token punctuation">.</span><span class="token function">queryAllEmps</span><span class="token punctuation">(</span>pageNow<span class="token punctuation">,</span> pageSize<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//设置跳转目标</span>
        model<span class="token punctuation">.</span><span class="token function">setUrl</span><span class="token punctuation">(</span><span class="token string">&quot;emp?method=queryList&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//将model数据通过request对象传递到下一个servlet中</span>
        req<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;model&quot;</span><span class="token punctuation">,</span>model<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token string">&quot;list.jsp&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>页面数据列表展示（list.jsp）</p><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
&lt;%@ include file=&quot;tags.jsp&quot;%&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;base href=&quot;\${pageContext.request.contextPath}/&quot;&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;title&gt;Title&lt;/title&gt;
    &lt;style&gt;
        table{
            width: 1000px;
            border: 1px solid rgba(0,0,0,0.2);
            border-collapse: collapse;
        }
        th,
        td{
            padding: 5px 10px;
            border: 1px solid rgba(0,0,0,0.2);
        }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;

    &lt;h1&gt;员工信息表&lt;/h1&gt;
    &lt;table&gt;
        &lt;tr&gt;
            &lt;th&gt;序号&lt;/th&gt;
            &lt;th&gt;工号&lt;/th&gt;
            &lt;th&gt;头像&lt;/th&gt;
            &lt;th&gt;姓名&lt;/th&gt;
            &lt;th&gt;性别&lt;/th&gt;
            &lt;th&gt;入职时间&lt;/th&gt;
            &lt;th&gt;生日&lt;/th&gt;
            &lt;th&gt;月薪&lt;/th&gt;
            &lt;th&gt;职位&lt;/th&gt;
            &lt;th&gt;部门号&lt;/th&gt;
        &lt;/tr&gt;
        &lt;c:if test=&quot;\${not empty model.dataList}&quot;&gt;
            &lt;c:forEach items=&quot;\${model.dataList}&quot; var=&quot;e&quot; varStatus=&quot;stat&quot;&gt;
            &lt;tr&gt;
                &lt;td&gt;\${stat.count + model.startNum}&lt;/td&gt;
                &lt;td&gt;\${e.eno}&lt;/td&gt;
                &lt;td&gt;\${e.pic}&lt;/td&gt;
                &lt;td&gt;\${e.ename}&lt;/td&gt;
                &lt;td&gt;\${e.sex}&lt;/td&gt;
                &lt;td&gt;\${e.hiredate}&lt;/td&gt;
                &lt;td&gt;\${e.birth}&lt;/td&gt;
                &lt;td&gt;\${e.sal}&lt;/td&gt;
                &lt;td&gt;\${e.job}&lt;/td&gt;
                &lt;td&gt;\${e.dno}&lt;/td&gt;
            &lt;/tr&gt;
            &lt;/c:forEach&gt;
        &lt;/c:if&gt;
    &lt;/table&gt;
    &lt;%--导入分页工具--%&gt;
    &lt;%@ include file=&quot;pagination.jsp&quot;%&gt;
&lt;/body&gt;
&lt;/html&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>分页工具（pagenation.jsp）</p><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
&lt;style&gt;
    .pages{
        padding:0;
        margin:20px 0;
        list-style: none;
    }
    .pages&gt;li{
        float:left;
        margin-right: 20px;
        width: 80px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        border:1px solid rgba(0,0,0,0.1);
    }
    a{
        display: block;
        text-decoration: none;
        color: #666;
    }
    a:hover{
        background: #666;
        color:#fff;
    }
    .page{
        width: 40px !important;
    }
    .active{
        background: #666;
        color:#fff;
    }
&lt;/style&gt;
&lt;ul class=&quot;pages&quot;&gt;
    &lt;li&gt;&lt;a href=&quot;\${model.url}&amp;page=1&quot;&gt;首页&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href=&quot;\${model.url}&amp;page=\${model.prev}&quot;&gt;上一页&lt;/a&gt;&lt;/li&gt;

    &lt;c:forEach var=&quot;page&quot; begin=&quot;\${model.begin}&quot; end=&quot;\${model.end}&quot;&gt;
        &lt;c:choose&gt;
            &lt;c:when test=&quot;\${page == model.pageNow}&quot;&gt;
                &lt;%--将当前页高亮显示，同时不能被点击--%&gt;
                &lt;li class=&quot;page&quot;&gt;&lt;a class=&quot;active&quot; href=&quot;javasript:;&quot;&gt;\${page}&lt;/a&gt;&lt;/li&gt;
            &lt;/c:when&gt;
            &lt;c:otherwise&gt;
                &lt;li class=&quot;page&quot;&gt;&lt;a href=&quot;\${model.url}&amp;page=\${page}&quot;&gt;\${page}&lt;/a&gt;&lt;/li&gt;
            &lt;/c:otherwise&gt;
        &lt;/c:choose&gt;
    &lt;/c:forEach&gt;

    &lt;li&gt;&lt;a href=&quot;\${model.url}&amp;page=\${model.next}&quot;&gt;下一页&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href=&quot;\${model.url}&amp;page=\${model.last}&quot;&gt;尾页&lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="基于-mvc-的-web-开发案例" tabindex="-1"><a class="header-anchor" href="#基于-mvc-的-web-开发案例" aria-hidden="true">#</a> 基于 MVC 的 web 开发案例</h2>`,33);function y(f,q){const a=l("router-link");return o(),i("div",null,[g,n("nav",h,[n("ul",null,[n("li",null,[t(a,{to:"#从-model1-到-model2-mvc"},{default:e(()=>[s("从 Model1 到 Model2(MVC)")]),_:1}),n("ul",null,[n("li",null,[t(a,{to:"#model1-模式"},{default:e(()=>[s("Model1 模式")]),_:1})]),n("li",null,[t(a,{to:"#model2-模式-mvc"},{default:e(()=>[s("Model2 模式（MVC）")]),_:1})]),n("li",null,[t(a,{to:"#三层架构和-mvc-区别"},{default:e(()=>[s("三层架构和 MVC 区别")]),_:1})])])]),n("li",null,[t(a,{to:"#baseservlet"},{default:e(()=>[s("BaseServlet")]),_:1})]),n("li",null,[t(a,{to:"#分页技术"},{default:e(()=>[s("分页技术")]),_:1}),n("ul",null,[n("li",null,[t(a,{to:"#通用分页工具类"},{default:e(()=>[s("通用分页工具类")]),_:1})])])]),n("li",null,[t(a,{to:"#基于-mvc-的-web-开发案例"},{default:e(()=>[s("基于 MVC 的 web 开发案例")]),_:1})])])]),w])}const M=p(b,[["render",y],["__file","index.html.vue"]]);export{M as default};
