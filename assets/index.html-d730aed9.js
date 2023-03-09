import{_ as l,M as i,p as d,q as r,R as t,N as s,V as a,t as e,a1 as u}from"./framework-bcfb0e46.js";const o="/MyBlog/assets/1611974711457-0f75f41d.png",c="/MyBlog/assets/1611976166350-f16210cb.png",p="/MyBlog/assets/1611977088559-7db94abb.png",v={},g=t("h1",{id:"_09-el-表达式与-jstl",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_09-el-表达式与-jstl","aria-hidden":"true"},"#"),e(" 09 - EL 表达式与 JSTL 🚂")],-1),m={class:"table-of-contents"},b=u('<h2 id="传统-jsp-脚本存在的问题" tabindex="-1"><a class="header-anchor" href="#传统-jsp-脚本存在的问题" aria-hidden="true">#</a> 传统 JSP 脚本存在的问题</h2><p>由于 JSP 是一种动态网页技术，实际就是在 html 中编写 java 代码（相当于以脚本形式存在），因此在页面中既有 java 代码又有 html 代码，编写的时候比较复杂，而且代码的可读性不高</p><ul><li>编写复杂</li><li>可读性差</li></ul><h2 id="el-表达式" tabindex="-1"><a class="header-anchor" href="#el-表达式" aria-hidden="true">#</a> EL 表达式</h2><h3 id="引入" tabindex="-1"><a class="header-anchor" href="#引入" aria-hidden="true">#</a> 引入</h3><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>&lt;!--传统jsp写法--&gt;\n&lt;h1&gt;&lt;%=request.getAttribute(&quot;msg&quot;) == null ? &quot;&quot; : request.getAttribute(&quot;msg&quot;) %&gt;&lt;/h1&gt;\n\n&lt;!--EL表达式--&gt;\n&lt;h1&gt;${msg}&lt;/h1&gt;\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h3><p>EL(Expression Language)表达式语言，是 JSP2.0 规范中引入一种新特性，灵感来自于 ECMAScript 中 XPath(快速节点检索技术)语法；允许使用<code>${}</code>操作 jsp 各个作用域中的数据，另外 EL 表达式还引入了一些内置对象，也支持一些基本的运算操作。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><p>EL 表达式通过<code>$</code>符号作为定界符，在<code>{}</code>之间编写表达式(一行输出语句)内容，如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>${表达式内容}\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>例如:</p><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>${sessionScope.msg}\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>以上代码等同于：</p><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>&lt;%=session.getAttribute(&quot;msg&quot;)%&gt;\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote><h3 id="运算符" tabindex="-1"><a class="header-anchor" href="#运算符" aria-hidden="true">#</a> 运算符</h3><table><thead><tr><th>分类</th><th>运算符</th><th>案例</th></tr></thead><tbody><tr><td>算术运算符</td><td>+、-、*、/或 div、%或 mod</td><td>${2+3}<br>${3-2}<br>${3*4}<br>${6/3}或${6 div3 }<br>${10 % 3}或${10 mod 3}</td></tr><tr><td>关系运算符</td><td>==或 eq、!=或 ne、&lt;或 lt、&gt;或 gt、&lt;=或 le、&gt;=或 ge</td><td>${ 5 == 5}或${5 eq 5}<br>${2 != 3}或​${2 ne 3}<br>${5 &lt; 6}或​${5 lt 6}<br>${ 7 &gt; 6}或​${7 gt 6}<br>${8 &lt;= 9}或​${8 le 9}<br>${8 &gt;= 7}或​${8 ge 7}</td></tr><tr><td>布尔逻辑运算符</td><td>&amp;&amp;或 and、||或 or、!或 not</td><td>{true &amp;&amp; true}或{true and true}<br>{true || false}或{true or false}<br>{!true}或{not true}</td></tr><tr><td>其他</td><td>Empty 运算符、三目运算符、()运算符</td><td>${empty [&#39;a&#39;,&#39;b&#39;,&#39;c&#39;]}<br>${a &gt; b ? a : b} <br>${10 &gt; 6 ? 10 : 10 &gt; 11 ? 10 : 11}</td></tr></tbody></table><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>&lt;h1&gt;\n    &lt;%--            &lt;%= request.getAttribute(&quot;msg&quot;) == null ? &quot;&quot; : request.getAttribute(&quot;msg&quot;)  %&gt;--%&gt;\n    &lt;h1&gt;${msg}&lt;/h1&gt;\n    &lt;p&gt;${3+5}&lt;/p&gt;\n    &lt;p&gt;${3/5}或者${3 div 5}&lt;/p&gt;\n    &lt;p&gt;${3%2}或者${3 mod 2}&lt;/p&gt;\n    &lt;p&gt;${3&gt;2}或者${3 gt 2}&lt;/p&gt;\n    &lt;p&gt;${3&lt;2}或者${3 lt 2}&lt;/p&gt;\n    &lt;p&gt;${3 == 2}或者${3 eq 2}&lt;/p&gt;\n    &lt;p&gt;${3 &gt;= 2}或者${3 ge 2}&lt;/p&gt;\n    &lt;p&gt;${3 &lt;= 2}或者${3 le 2}&lt;/p&gt;\n\n    &lt;p&gt;${true &amp;&amp; false}或者${true and false}&lt;/p&gt;\n    &lt;p&gt;${true || false}或者${true or false}&lt;/p&gt;\n    &lt;p&gt;${!true}或者${not true}&lt;/p&gt;\n\n    &lt;p&gt;${empty list}&lt;/p&gt;\n    &lt;p&gt;${5 &gt; 6 ? 1 : 2}&lt;/p&gt;\n&lt;/h1&gt;\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="内置对象" tabindex="-1"><a class="header-anchor" href="#内置对象" aria-hidden="true">#</a> 内置对象</h3><p>EL 表达式内置了一系列对象，方便进行关于 jsp 的操作：</p><ul><li>作用域对象</li><li>请求参数对象</li><li>请求头对象</li><li>上下文对象</li><li>全局初始化参数</li><li>cookie 对象</li></ul><h4 id="作用域对象-重要" tabindex="-1"><a class="header-anchor" href="#作用域对象-重要" aria-hidden="true">#</a> 作用域对象（重要）</h4><p>jsp 中提供了四大作用域（page、request、session、application），因此在 EL 表达式中为了方便的访问这四个作用域，提供了 4 个内置对象操作这些作用域中的数据：</p><ul><li>pageScope</li><li>requestScope</li><li>sessionScope</li><li>applicationScope</li></ul><p>使用方式：</p><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>${pageScope.XXX}\n${requestScope.XXX}\n${sessionScope.XXX}\n${applicationScope.XXX}\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>XXX</code>表示是各自范围中存储的元素的键：<code>requst.setAttribute(&quot;XXX&quot;,&quot;request的数据&quot;)</code></p><blockquote><p>注意事项：</p><p>不使用任何作用域对象访问数据时**(${msg})**，默认搜索范围从小到大<code>pageScope&gt;requestScope&gt;sessionScope&gt;applicationScope</code></p></blockquote><h4 id="请求参数对象-次重要" tabindex="-1"><a class="header-anchor" href="#请求参数对象-次重要" aria-hidden="true">#</a> 请求参数对象（次重要）</h4><p><img src="'+o+`" alt="1611974711457"></p><p>EL 表达式中提供的请求参数对象，可以实现获取表单(URL)提交的数据，EL 中提供的请求参数对象包含两个:</p><ul><li>param</li><li>paramValues</li></ul><p>使用方式：</p><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>\${param.username}===\${param.password}
\${paramValues.fav}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>等同于：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token operator">&lt;</span><span class="token operator">%=</span>request<span class="token punctuation">.</span><span class="token function">getParameter</span><span class="token punctuation">(</span><span class="token string">&quot;username&quot;</span><span class="token punctuation">)</span><span class="token operator">%</span><span class="token operator">&gt;=</span><span class="token operator">==</span><span class="token operator">&lt;</span><span class="token operator">%=</span>request<span class="token punctuation">.</span><span class="token function">getParameter</span><span class="token punctuation">(</span><span class="token string">&quot;password&quot;</span><span class="token punctuation">)</span><span class="token operator">%</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">%=</span>request<span class="token punctuation">.</span><span class="token function">getParameterValues</span><span class="token punctuation">(</span><span class="token string">&quot;fav&quot;</span><span class="token punctuation">)</span><span class="token operator">%</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="其他对象" tabindex="-1"><a class="header-anchor" href="#其他对象" aria-hidden="true">#</a> 其他对象</h4><h5 id="请求头对象" tabindex="-1"><a class="header-anchor" href="#请求头对象" aria-hidden="true">#</a> 请求头对象</h5><p>获取请求头中的信息</p><ul><li>header</li></ul><h5 id="上下文对象-熟悉" tabindex="-1"><a class="header-anchor" href="#上下文对象-熟悉" aria-hidden="true">#</a> 上下文对象（熟悉）</h5><p>EL 中提供了一个 JSP 上下文的对象，可以通过该对象获取当前页面的上下文信息（获取 page,request,session---&gt;jsp 运行环境）,对象名称：</p><ul><li>pageContext</li></ul><p>使用方式</p><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>\${pageContext.request.contextPath}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>以上代码表示获取当前应用所在的根地址。</p><h5 id="全局初始化参数对象" tabindex="-1"><a class="header-anchor" href="#全局初始化参数对象" aria-hidden="true">#</a> 全局初始化参数对象</h5><p>EL 中提供了一个用于获取全局初始化参数的内置对象<code>initParam</code>；所谓全局初始化参数，即指的是在 web.xml 中配置<code>&lt;context-param&gt;</code>，使用方式如下：</p><p><img src="`+c+`" alt="1611976166350"></p><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>\${initParam.basePath}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>等同于如下代码：</p><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>//jap写法
&lt;%=request.getServletContext().getInitParameter(&quot;basePath&quot;)%&gt;

//servlet写法
String basepath = req.getServletContext().getInitParameter(&quot;basepath&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="cookie-对象" tabindex="-1"><a class="header-anchor" href="#cookie-对象" aria-hidden="true">#</a> cookie 对象</h5><p>EL 中对于 cookie 的操作也提供了一个内置对象：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token operator">&lt;</span><span class="token operator">%</span>
    <span class="token class-name">Cookie</span> c <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cookie</span><span class="token punctuation">(</span><span class="token string">&quot;age&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;18&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	c<span class="token punctuation">.</span><span class="token function">setMaxAge</span><span class="token punctuation">(</span><span class="token number">60</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">24</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	c<span class="token punctuation">.</span><span class="token function">setPath</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	response<span class="token punctuation">.</span><span class="token function">addCookie</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">%</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>cookie</li></ul><p><img src="`+p+`" alt="1611977088559"></p><h2 id="jstl" tabindex="-1"><a class="header-anchor" href="#jstl" aria-hidden="true">#</a> JSTL</h2><h3 id="概述-1" tabindex="-1"><a class="header-anchor" href="#概述-1" aria-hidden="true">#</a> 概述</h3><p>JSTL（JavaServer Pages Standard Tag Library）jsp 标准标签库，由一系列<strong>内置的标签构成</strong>，提供了简化的业务操作，比如条件判断，循环语句，输出等操作；作用于完全替代原始的 jsp 的脚本；</p><h4 id="传统的-jsp-代码" tabindex="-1"><a class="header-anchor" href="#传统的-jsp-代码" aria-hidden="true">#</a> 传统的 jsp 代码：</h4><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>&lt;table&gt;
    &lt;tr&gt;
        &lt;th&gt;工号&lt;/th&gt;
        &lt;th&gt;姓名&lt;/th&gt;
        &lt;th&gt;职位&lt;/th&gt;
        &lt;th&gt;生日&lt;/th&gt;
        &lt;th&gt;月薪&lt;/th&gt;
        &lt;th&gt;部门&lt;/th&gt;
        &lt;th&gt;操作&lt;/th&gt;
    &lt;/tr&gt;
    &lt;%
    Object obj = request.getAttribute(&quot;list&quot;);
    if(obj != null){
        List&lt;Emp&gt; list = (List&lt;Emp&gt;) obj;
        for(Emp e:list){
            %&gt;
    &lt;tr&gt;
        &lt;td&gt;&lt;%=e.getEno()%&gt;&lt;/td&gt;
        &lt;td&gt;&lt;%=e.getEname()%&gt;&lt;/td&gt;
        &lt;td&gt;&lt;%=e.getJob().equals(&quot;2&quot;) ? &quot;部门经理&quot; : &quot;普通员工&quot; %&gt;&lt;/td&gt;
        &lt;td&gt;
            &lt;%
            DateFormat fmt = DateFormat.getDateInstance(); //yyyy-mm-dd
            String birth = fmt.format(e.getBirth());
            out.write(birth);
            %&gt;
        &lt;/td&gt;
        &lt;td&gt;
            &lt;%
            NumberFormat numberFormat = NumberFormat.getNumberInstance();
            String sal = numberFormat.format(e.getSal());
            out.write(sal);
            %&gt;
        &lt;/td&gt;
        &lt;td&gt;&lt;%=e.getDept().getDname()%&gt;&lt;/td&gt;
        &lt;td&gt;
            &lt;a href=&quot;&quot;&gt;详情&lt;/a&gt;&amp;nbsp;&amp;nbsp;
            &lt;a href=&quot;&quot;&gt;操作&lt;/a&gt;
        &lt;/td&gt;
    &lt;/tr&gt;
    &lt;%
    }
    }else{
        out.write(&quot;&lt;tr&gt;&lt;th colspan=&#39;7&#39; style=&#39;color:#f00&#39;&gt;暂无数据!&lt;/th&gt;&lt;/tr&gt;&quot;);
    }
    %&gt;
&lt;/table&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上的代码表现形式比较复杂，而且可读性差，使用 JSTL 优化之后，代码可编写为如下方式:</p><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>&lt;table&gt;
    &lt;tr&gt;
        &lt;th&gt;工号&lt;/th&gt;
        &lt;th&gt;姓名&lt;/th&gt;
        &lt;th&gt;职位&lt;/th&gt;
        &lt;th&gt;生日&lt;/th&gt;
        &lt;th&gt;月薪&lt;/th&gt;
        &lt;th&gt;部门&lt;/th&gt;
        &lt;th&gt;操作&lt;/th&gt;
    &lt;/tr&gt;
    &lt;c:if test=&quot;\${empty list || list.size() &lt; 1}&quot;&gt;
        &lt;tr&gt;&lt;th style=&quot;color: #ff0000;&quot;&gt;暂无数据!&lt;/th&gt;&lt;/tr&gt;
    &lt;/c:if&gt;
    &lt;c:if test=&quot;\${not empty list}&quot;&gt;
        &lt;c:forEach items=&quot;\${list}&quot; var=&quot;e&quot;&gt;
            &lt;tr&gt;
                &lt;td&gt;\${e.eno}&lt;/td&gt;
                &lt;td&gt;\${e.ename}&lt;/td&gt;
                &lt;td&gt;\${e.job eq &quot;2&quot; ? &quot;部门经理&quot;:&quot;普通员工&quot;}&lt;/td&gt;
                &lt;td&gt;&lt;fmt:formatDate value=&quot;\${e.birth}&quot; pattern=&quot;yyyy-MM-dd&quot;/&gt;&lt;/td&gt;
                &lt;td&gt;&lt;fmt:formatNumber value=&quot;\${e.sal}&quot; pattern=&quot;###.##&quot;/&gt;&lt;/td&gt;
                &lt;td&gt;\${e.dept.dname}&lt;/td&gt;
                &lt;td&gt;
                    &lt;a href=&quot;&quot;&gt;详情&lt;/a&gt;&amp;nbsp;&amp;nbsp;
                    &lt;a href=&quot;&quot;&gt;操作&lt;/a&gt;
                &lt;/td&gt;
            &lt;/tr&gt;
        &lt;/c:forEach&gt;
    &lt;/c:if&gt;
&lt;/table&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="jstl-的分类" tabindex="-1"><a class="header-anchor" href="#jstl-的分类" aria-hidden="true">#</a> JSTL 的分类</h4><p>JSTL 提供的内置标签包含：</p><ul><li><strong>核心标签库（c 标签）</strong></li><li><strong>格式化标签库（fmt）</strong></li><li>xml 标签库（xml）</li><li>sql 标签库（sql）</li><li>函数标签库（fn）</li></ul><p>以上标签库的 url 和前缀名：</p><table><thead><tr><th>标签库</th><th>标签库的 URI</th><th>前缀</th></tr></thead><tbody><tr><td><strong>Core</strong></td><td><strong>http://java.sun.com/jsp/jstl/core</strong></td><td><strong>c</strong></td></tr><tr><td><strong>Format</strong></td><td><strong>http://java.sun.com/jsp/jstl/fmt</strong></td><td><strong>fmt</strong></td></tr><tr><td>XML</td><td>http://java.sun.com/jsp/jstl/xml</td><td>xml</td></tr><tr><td>SQL</td><td>http://java.sun.com/jsp/jstl/sql</td><td>sql</td></tr><tr><td>Functions</td><td>http://java.sun.com/jsp/jstl/functions</td><td>fn</td></tr></tbody></table><h3 id="使用方式" tabindex="-1"><a class="header-anchor" href="#使用方式" aria-hidden="true">#</a> 使用方式</h3><p>标签库是 servlet2.3 之后引入的新特性，需要使用 JSTL 必须导入相关的依赖：</p><p><code>jstl.jar</code></p><p><code>standard.jar</code></p><p>使用方式分为两步:</p><ol><li><p>导入依赖</p></li><li><p>在需要使用 jstl 页面中添加 taglib 指令</p><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>&lt;%--引入标签库--%&gt;
&lt;%@ taglib prefix=&quot;c&quot; uri=&quot;http://java.sun.com/jsp/jstl/core&quot;%&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h3 id="核心标签库" tabindex="-1"><a class="header-anchor" href="#核心标签库" aria-hidden="true">#</a> 核心标签库</h3><p>C 标签也称之核心标签，也是 jstl 使用率最高的一种标签，c 标签分为以下常用标签：</p><table><thead><tr><th>标签名</th><th>说明</th><th>示例</th></tr></thead><tbody><tr><td>&lt;c:out&gt;</td><td>输出标签，value 是必须的属性</td><td><code>&lt;c:out value=&quot;\${msg}&quot;&gt;</code></td></tr><tr><td>&lt;c:set&gt;</td><td>向指定的作用域中存放数据 参数：var:键值 values:值 scope:作用范围 page/request/session/application</td><td><code>&lt;c:set var=&quot;msg&quot; value=&quot;\${msg}&quot; scope=&quot;session&quot;&gt;</code></td></tr><tr><td>&lt;c:if&gt;</td><td>条件判断标签，test 是必须的属性</td><td><code>&lt;c:if test=&quot;\${user ne null}&quot;&gt; 欢迎你,\${user} &lt;/c:if&gt;</code></td></tr><tr><td>&lt;c:choose&gt;</td><td>选择标签，结构标签，不包含任何属性，类似 switch</td><td></td></tr><tr><td>&lt;c:when&gt;</td><td>结合 choose 标签使用，类似 switch 中的 case</td><td></td></tr><tr><td>&lt;c:otherwise&gt;</td><td>结合 choose 标签使用，类似 switch 中的 default</td><td></td></tr><tr><td>&lt;c:foreach&gt;</td><td>迭代标签，用于对集合遍历或者执行循环逻辑</td><td></td></tr></tbody></table><h4 id="c-if-标签" tabindex="-1"><a class="header-anchor" href="#c-if-标签" aria-hidden="true">#</a> c:if 标签</h4><p>用于执行逻辑判断，内部包含的属性：test(必须)</p><p>使用方法:</p><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>&lt;c:if test=&quot;\${user ne null}&quot;&gt;
    欢迎你,\${user}
&lt;/c:if&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="c-choose-c-when-c-otherwise-标签" tabindex="-1"><a class="header-anchor" href="#c-choose-c-when-c-otherwise-标签" aria-hidden="true">#</a> c:choose/c:when/c:otherwise 标签</h4><p>c:choose/when/otherwise 是一套组合标签，通常情况是结合到一起同时使用，唯独 when 标签中有一个必须的属性：test,其余标签都是结构标签（只存在结构，无属性与属性值）</p><p>使用方式：</p><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>&lt;c:choose&gt;
    &lt;c:when test=&quot;\${param.role eq &#39;1&#39;}&quot;&gt;
        &lt;ul&gt;
            &lt;li&gt;&lt;a href=&quot;&quot;&gt;查看成绩&lt;/a&gt;&lt;/li&gt;
            &lt;li&gt;&lt;a href=&quot;&quot;&gt;修改密码&lt;/a&gt;&lt;/li&gt;
        &lt;/ul&gt;
    &lt;/c:when&gt;
    &lt;c:when test=&quot;\${param.role eq &#39;2&#39;}&quot;&gt;
        &lt;ul&gt;
            &lt;li&gt;&lt;a href=&quot;&quot;&gt;成绩录入&lt;/a&gt;&lt;/li&gt;
            &lt;li&gt;&lt;a href=&quot;&quot;&gt;学生查看&lt;/a&gt;&lt;/li&gt;
            &lt;li&gt;&lt;a href=&quot;&quot;&gt;课表查看&lt;/a&gt;&lt;/li&gt;
            &lt;li&gt;&lt;a href=&quot;&quot;&gt;密码修改&lt;/a&gt;&lt;/li&gt;
        &lt;/ul&gt;
    &lt;/c:when&gt;
    &lt;c:when test=&quot;\${param.role eq &#39;3&#39;}&quot;&gt;
        &lt;ul&gt;
            &lt;li&gt;学生管理&lt;/li&gt;
            &lt;li&gt;老师管理&lt;/li&gt;
            &lt;li&gt;平台功能设置&lt;/li&gt;
            &lt;li&gt;教辅材料管理&lt;/li&gt;
            &lt;li&gt;系统设置&lt;/li&gt;
        &lt;/ul&gt;
    &lt;/c:when&gt;
    &lt;c:otherwise&gt;
        &lt;c:set var=&quot;msg&quot; value=&quot;请亮明身份&quot; scope=&quot;request&quot;/&gt;
        &lt;jsp:forward page=&quot;login.jsp&quot;/&gt;
    &lt;/c:otherwise&gt;
&lt;/c:choose&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="c-foreach-标签-重要" tabindex="-1"><a class="header-anchor" href="#c-foreach-标签-重要" aria-hidden="true">#</a> c:forEach 标签(重要)</h4><p>用于进行数据迭代的标签，常见属性：</p><ul><li>items：需要遍历的集合对象</li><li>var：标签当前遍历的一个对象引用名</li><li>begin：需要显示的数据列表项的开始索引</li><li>end：需要显示的数据列表项的结束索引</li><li>step：步进值（每次增长指定位，默认：1）</li><li>varStatus：表示当前遍历集合中元素的状态，包含一些子属性 <ul><li>index：当前元素的索引，从 0 开始</li><li>count：当前元素的总个数，从 1 开始</li><li>last：是否是最后一个元素</li><li>first：是否是第一个元素</li></ul></li></ul><p>使用方式</p><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>&lt;table&gt;
    &lt;tr&gt;
        &lt;th&gt;序号&lt;/th&gt;
        &lt;th&gt;工号&lt;/th&gt;
        &lt;th&gt;姓名&lt;/th&gt;
        &lt;th&gt;职位&lt;/th&gt;
        &lt;th&gt;月薪&lt;/th&gt;
        &lt;th&gt;部门&lt;/th&gt;
        &lt;th&gt;是否第一个&lt;/th&gt;
        &lt;th&gt;是否最后一个&lt;/th&gt;
    &lt;/tr&gt;
    &lt;c:forEach items=&quot;\${requestScope.list}&quot; var=&quot;emp&quot; varStatus=&quot;stat&quot; begin=&quot;0&quot; end=&quot;20&quot;&gt;
        &lt;tr&gt;
            &lt;td&gt;\${stat.index + 1}&lt;/td&gt;
            &lt;td&gt;\${emp.eno}&lt;/td&gt;
            &lt;td&gt;\${emp.ename}&lt;/td&gt;
            &lt;td&gt;\${emp.job}&lt;/td&gt;
            &lt;td&gt;\${emp.sal}&lt;/td&gt;
            &lt;td&gt;\${emp.dept.dname ne null ? emp.dept.dname : &quot;没有部门&quot;}&lt;/td&gt;
            &lt;td&gt;\${stat.first}&lt;/td&gt;
            &lt;td&gt;\${stat.last}&lt;/td&gt;
        &lt;/tr&gt;
    &lt;/c:forEach&gt;
&lt;/table&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="c-fortokens-标签" tabindex="-1"><a class="header-anchor" href="#c-fortokens-标签" aria-hidden="true">#</a> c:forTokens 标签</h4><p>用于按照执行的分隔符对字符串文本进行切割，并转换为数组进行遍历</p><p>使用方式：</p><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>&lt;!--向page范围存储数据--&gt;
&lt;c:set var=&quot;data&quot; value=&quot;lily|lucy|lilei|hanmeimei|tom&quot; scope=&quot;page&quot;&gt;&lt;/c:set&gt;
&lt;!--分割遍历--&gt;
&lt;c:forTokens items=&quot;\${pageScope.data}&quot; delims=&quot;|&quot; var=&quot;name&quot; &gt;
    &lt;p&gt;\${name}&lt;/p&gt;
&lt;/c:forTokens&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果:</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>lily<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>lucy<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>lilei<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>hanmeimei<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>tom<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="格式化标签库-fmt-标签" tabindex="-1"><a class="header-anchor" href="#格式化标签库-fmt-标签" aria-hidden="true">#</a> 格式化标签库（fmt 标签）</h3><p>格式化标签主要用于对数值，日期等常见的数据类型进行格式化处理，格式化标签的前缀是<code>fmt</code>,因此使用前需要将标签指令引入到 jsp 页面中：</p><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>&lt;%@ taglib prefix=&quot;fmt&quot; uri=&quot;http://java.sun.com/jsp/jstl/fmt&quot; %&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>如果频繁需要在每一个页面都引入相同的标签库，则可以将这些标签库集中到一个 jsp 文件中，然后将改文件静态引入到其他页面中</p><p>tag.jsp</p><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>&lt;%@ taglib prefix=&quot;fmt&quot; uri=&quot;http://java.sun.com/jsp/jstl/fmt&quot; %&gt;
&lt;%@ taglib prefix=&quot;c&quot; uri=&quot;http://java.sun.com/jsp/jstl/core&quot;%&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>页面引入</p><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>&lt;%@ include page=&quot;tag.jsp&quot;%&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote><p>JSTL 中提供的格式化标签库主要包含以下两个:</p><ul><li>fmt:formatDate</li><li>fmt:formatNumber</li></ul><p>使用方式：</p><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
&lt;%@ include file=&quot;tag.jsp&quot;%&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;base href=&quot;\${pageContext.request.contextPath}/&quot;&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;title&gt;Title&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;%
        pageContext.setAttribute(&quot;now&quot;,new Date());
        pageContext.setAttribute(&quot;money&quot;,&quot;1564782.4567&quot;);
    %&gt;

    现在时间(将Date格式化为String):
    &lt;fmt:formatDate value=&quot;\${now}&quot; pattern=&quot;yyyy-MM-dd HH:mm:ss&quot;/&gt;
    &lt;br&gt;
    解析字符串为Date对象：
    &lt;fmt:parseDate value=&quot;2021/12/12 10:12:12&quot; pattern=&quot;yyyy/MM/dd HH:mm:ss&quot; scope=&quot;session&quot; var=&quot;nowTime&quot;/&gt;
    现在时间：\${sessionScope.nowTime}

    &lt;hr&gt;
    数字格式化：&lt;fmt:formatNumber value=&quot;\${money}&quot; pattern=&quot;##,###.##&quot;/&gt; &lt;br&gt;
    解析字符串为number类型: &lt;fmt:parseNumber value=&quot;74,598.2&quot; pattern=&quot;##,###.#&quot; var=&quot;m&quot; scope=&quot;session&quot;/&gt;
    \${sessionScope.m + 2}
&lt;/body&gt;
&lt;/html&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,104);function h(q,f){const n=i("router-link");return d(),r("div",null,[g,t("nav",m,[t("ul",null,[t("li",null,[s(n,{to:"#传统-jsp-脚本存在的问题"},{default:a(()=>[e("传统 JSP 脚本存在的问题")]),_:1})]),t("li",null,[s(n,{to:"#el-表达式"},{default:a(()=>[e("EL 表达式")]),_:1}),t("ul",null,[t("li",null,[s(n,{to:"#引入"},{default:a(()=>[e("引入")]),_:1})]),t("li",null,[s(n,{to:"#概述"},{default:a(()=>[e("概述")]),_:1})]),t("li",null,[s(n,{to:"#语法"},{default:a(()=>[e("语法")]),_:1})]),t("li",null,[s(n,{to:"#运算符"},{default:a(()=>[e("运算符")]),_:1})]),t("li",null,[s(n,{to:"#内置对象"},{default:a(()=>[e("内置对象")]),_:1})])])]),t("li",null,[s(n,{to:"#jstl"},{default:a(()=>[e("JSTL")]),_:1}),t("ul",null,[t("li",null,[s(n,{to:"#概述-1"},{default:a(()=>[e("概述")]),_:1})]),t("li",null,[s(n,{to:"#使用方式"},{default:a(()=>[e("使用方式")]),_:1})]),t("li",null,[s(n,{to:"#核心标签库"},{default:a(()=>[e("核心标签库")]),_:1})]),t("li",null,[s(n,{to:"#格式化标签库-fmt-标签"},{default:a(()=>[e("格式化标签库（fmt 标签）")]),_:1})])])])])]),b])}const k=l(v,[["render",h],["__file","index.html.vue"]]);export{k as default};
