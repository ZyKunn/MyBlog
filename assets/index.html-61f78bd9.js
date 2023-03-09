import{_ as a,M as t,p as d,q as r,R as e,N as s,V as n,t as i,a1 as o}from"./framework-bcfb0e46.js";const u="/MyBlog/assets/1611802178267-7f8f91cc.png",c="/MyBlog/assets/1611802108470-25a8176a.png",p="/MyBlog/assets/1611802217765-7398d298.png",v="/MyBlog/assets/1611812424757-c84092f4.png",g="/MyBlog/assets/1611812799747-8e5d52ad.png",m="/MyBlog/assets/1611814491861-cac212aa.png",b="/MyBlog/assets/1611815542120-064dd58b.png",h="/MyBlog/assets/1611815446758-de8edcc9.png",j="/MyBlog/assets/1611815373186-e069151c.png",f="/MyBlog/assets/1611820789068-94c11755.png",q={},_=e("h1",{id:"_07-jsp-快速入门",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_07-jsp-快速入门","aria-hidden":"true"},"#"),i(" 07 - JSP 快速入门 🚠")],-1),x={class:"table-of-contents"},S=o(`<h2 id="jsp-概述" tabindex="-1"><a class="header-anchor" href="#jsp-概述" aria-hidden="true">#</a> JSP 概述</h2><p>JSP（Java Server <strong>Pages</strong>）：java 服务页面，是一项动态网页技术；允许开发人员<strong>在 html 页面中编写 java 代码</strong>，从而快速构建 web 应用；在 jsp 还未出现之前，网页的动态效果实现是由 Servlet 技术完成，在 servlet 时代需要将网页代码直接在 servlet 类中编写（<strong>在 java 代码中写 html</strong>），并且通过 HttpServletReponse 对象对外输出，这种方式对于后端开发员人员要求极高.</p><p><strong>JSP：在 html 页面中编写 java 代码</strong></p><p>Servlet：在 java 中编写 html</p><p><strong>运行原理:</strong></p><p>JSP 实际上就是一个轻量级的 Servlet.JSP 的运行原理：</p><ol><li>web 容器启动后，当请求第一次到达指定的 JSP 时，web 容器会启动 JSP 引擎对 jsp 文件进行转换操作</li><li>web 容器将 jsp 文件转换成一个 java 类（Servlet）</li><li>再通过 Java 编译器对 Servlet 编译，</li><li>执行 servlet 的初始化与请求处理，向客户端响应数据（将数据内容以网页的形式向客户端输出）</li></ol><p><strong>jsp 核心内容：</strong></p><ol><li><strong>两种跳转方式（转发，重定向）</strong></li><li>三种脚本</li><li>三大指令</li><li><strong>四大作用域（page,request,session,application）</strong></li><li>七大动作</li><li><strong>九大内置对象</strong></li></ol><h3 id="基本语法-三种脚本" tabindex="-1"><a class="header-anchor" href="#基本语法-三种脚本" aria-hidden="true">#</a> 基本语法（三种脚本）</h3><p>一个常规的 JSP 页面必须在页面头部包含以下声明</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>并且文件名的后缀必须是<code>.jsp</code></p><p>JSP 的编写语法分为三种类型的脚本：</p><ol><li>声明脚本（几乎不用）</li><li>表达式脚本（输出）</li><li>代码脚本（编写逻辑）</li></ol><h4 id="声明脚本" tabindex="-1"><a class="header-anchor" href="#声明脚本" aria-hidden="true">#</a> 声明脚本</h4><p>jsp 声明脚本：在类结构中能够直接定义的元素(属性，方法，内部类等)都可以在声明部分编写</p><p>语法：</p><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>&lt;%!
	//编写java代码
%&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>案例:</p><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>&lt;%!
    private int age;

    public class Test{
        public int id;
        public String name;
    }

    public void a(){
		//System.out.println(&quot;但是这里可以写&quot;);
    }
//声明中不允许写逻辑代码
//       System.out.println();
%&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在服务器中编译之后，在代码中出现的位置：</p><p><img src="`+u+`" alt="1611802178267"></p><h4 id="表达式脚本" tabindex="-1"><a class="header-anchor" href="#表达式脚本" aria-hidden="true">#</a> 表达式脚本</h4><p>表达式脚本用于在页面上输出数据</p><p>语法：</p><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>&lt;%=输出内容 %&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>案例：</p><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>&lt;%=DateFormat.getDateTimeInstance().format(new Date())%&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+c+'" alt="1611802108470"></p><p>在服务器经过编译之后出现的位置：</p><p><img src="'+p+`" alt="1611802217765"></p><h4 id="代码脚本" tabindex="-1"><a class="header-anchor" href="#代码脚本" aria-hidden="true">#</a> 代码脚本</h4><p>代码脚本即项目的业务逻辑代码编写区域，<strong>在方法中可以写什么内容在代码脚本中就可以写什么</strong>！</p><p>语法：</p><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>&lt;%
	//编写java代码
%&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>案例：</p><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>&lt;%
for (int i = 1; i &lt; 10; i++) {
    for (int j = 1; j &lt;= i; j++) {
        System.out.print(j + &quot;*&quot; + i + &quot;=&quot; + (i * j)+&quot;&quot;)

    }
    System.out.println()
}
%&gt;
------------------------------------------------------------------
&lt;%
for (int i = 0; i &lt; 10; i++) {
    for (int j = 0; j &lt; i; j++) {
        %&gt;
&lt;%=(j + &quot;*&quot; + i + &quot;=&quot; + (j * i) + &quot;&amp;nbsp;&amp;nbsp;&quot;)%&gt;
&lt;%
}
%&gt;
&lt;br&gt;
&lt;%
}
%&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>经过服务器处理之后的内容:</p><p><img src="`+v+`" alt="1611812424757"></p><h4 id="jsp-注释" tabindex="-1"><a class="header-anchor" href="#jsp-注释" aria-hidden="true">#</a> JSP 注释</h4><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>&lt;%--
    // 单行

    /*
    * 多行注释
    **/

--%&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注意 <code>&lt;%</code>没有作用域 即 他的作用只是作区分(区分 Java 代码和 HTML 代码)</p></blockquote><h2 id="三大指令" tabindex="-1"><a class="header-anchor" href="#三大指令" aria-hidden="true">#</a> 三大指令</h2><p>jsp 中包含三大指令，指令与业务无关，指令的语法：</p><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>&lt;%@ %&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>三大指令分为别：</p><ol><li>page：jsp 页面的声明指令</li><li>include：静态包含指令</li><li>taglib：标签库指令(重要)</li></ol><h3 id="page-指令" tabindex="-1"><a class="header-anchor" href="#page-指令" aria-hidden="true">#</a> page 指令</h3><p>page 指令用于对 jsp 页面进行配置，比如编码，错误页面等常规配置,</p><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>page 指令常用的属性：</p><ol><li>contentType：设置服务端响应内容的类型以及内容的编码方式</li><li>language：页面采用的服务端语言（默认:java）</li><li><strong>pageEncoding</strong>：设置页面文件的编码方式</li><li><strong>import</strong>：用于导包，等同 java 类中的<code>import com.XXX.XXX</code></li><li>session：是否启用 session，若为 false 则页面中不允许使用 session 对象，默认为 true</li><li><strong>errorPage</strong>：错误页面，当 jsp 页面中出现异常时，此时转发(并不是从定向)到目标的错误页面</li><li>isErrorPage：是否启用异常处理，默认值是 false,其中之后 jsp 页面中支持 exception 对象</li><li>buffer：页面缓冲区大小，默认 8kb</li><li><strong>isELIgnored</strong>：是否忽略页面中的<strong>EL 表达式</strong>，默认是：false(自动识别 el 表达式并正常取值)</li></ol><h3 id="include-指令" tabindex="-1"><a class="header-anchor" href="#include-指令" aria-hidden="true">#</a> include 指令</h3><p>include 称之为静态包含（引入），作用于将另一个页面包含到当前页面中；经常见到类似以下需求：</p><p><img src="`+g+`" alt="1611812799747"></p><p>语法：</p><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>&lt;%@ include file=&quot;nav.jsp&quot;%&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>案例:</p><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;title&gt;Title&lt;/title&gt;
    &lt;link rel=&quot;stylesheet&quot; href=&quot;../static/css/reset.css&quot;&gt;
    &lt;style&gt;
        .nav{
            background: #ff6700 !important;
        }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;%@ include file=&quot;nav.jsp&quot;%&gt;
    &lt;%@ include file=&quot;banner.jsp&quot;%&gt;
    &lt;h1&gt;这里是首页&lt;/h1&gt;
&lt;/body&gt;
&lt;/html&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果:</p><p><img src="`+m+'" alt="1611814491861"></p><p>静态包含的实现原理：</p><p>所有被包含的 jsp 文件不会单独编译产生 java 文件，而是组合到目标的 jsp 页面中统一编译，即只产生一个 java 文件，生成的代码如下：</p><p><img src="'+b+'" alt="1611815542120"></p><p>例如:home 页面中包含其他两个页面：<code>nav.jsp</code>、<code>banner.jsp</code>,但是 web 容器不会针对这两个页面单独产生 java 文件，而是合并到 home.jsp 中，只对 home.jsp 单独转换以及编译,若访问其他页面主要页面也不会单独对组件页面编译：</p><p><img src="'+h+`" alt="1611815446758"></p><h3 id="taglib-指令-el-表达式-jstl-标准标记库" tabindex="-1"><a class="header-anchor" href="#taglib-指令-el-表达式-jstl-标准标记库" aria-hidden="true">#</a> taglib 指令（EL 表达式&amp;JSTL 标准标记库）</h3><p>taglib 指令用于在 jsp 中引入标记库，通常为 JSTL（jsp 标准标签库）</p><h2 id="jsp-常用标签-jsp-动作" tabindex="-1"><a class="header-anchor" href="#jsp-常用标签-jsp-动作" aria-hidden="true">#</a> JSP 常用标签（JSP 动作）</h2><p>jsp 页面除了支持<code>&lt;% %&gt;</code>表达式外，另外也提供了一些常用动作指令标签，通常 jsp 中包含七大动作：</p><ul><li><strong>include：动态包含</strong></li><li>useBean：在 jsp 中表示一个 javabean</li><li>getProperty：用于获取 bean 中的属性,结合 useBean 使用</li><li>setProperty：用于设置 bean 中的属性，结合 useBean 使用</li><li>param：参数传递</li><li><strong>forward：服务端请求转发</strong></li><li>plugin：用于指定在客户端运行的一些插件</li></ul><h3 id="include" tabindex="-1"><a class="header-anchor" href="#include" aria-hidden="true">#</a> include</h3><p>是 jsp 中的一个动作，用于动态包含其他 jsp 页面，语法如下：</p><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>&lt;jsp:include page=&quot;nav.jsp&quot; /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>案例代码:</p><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;title&gt;Title&lt;/title&gt;
    &lt;link rel=&quot;stylesheet&quot; href=&quot;../static/css/reset.css&quot;&gt;
    &lt;style&gt;
        .nav{
            background: #ff6700 !important;
        }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;jsp:include page=&quot;nav.jsp&quot; flush=&quot;true&quot;/&gt;
    &lt;jsp:include page=&quot;banner.jsp&quot; flush=&quot;true&quot;/&gt;
    &lt;h1&gt;这里是首页&lt;/h1&gt;
&lt;/body&gt;
&lt;/html&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>动态包含的页面会单独的被容器转换以及编译，然后再引入到主页面中，生成 java 代码如下：</p><p><img src="`+j+`" alt="1611815373186"></p><h3 id="forward" tabindex="-1"><a class="header-anchor" href="#forward" aria-hidden="true">#</a> forward</h3><p>forward 动作用于在 jsp 中将请求转发到其他目标，使用如下：</p><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code> &lt;jsp:forward page=&quot;pages2/home.jsp&quot;/&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="内置对象-九大内置对象" tabindex="-1"><a class="header-anchor" href="#内置对象-九大内置对象" aria-hidden="true">#</a> 内置对象(九大内置对象)</h2><p>所谓内置对象，即在 JSP 中预先定义好的一些对象，在使用时无需重复声明，可以直接拿来即用；JSP 中一共包含九大内置对象：</p><ul><li><strong>request</strong>：是 HttpServletRequest 接口的实例</li><li><strong>response</strong>：是 HttpServletResponse 接口的实例</li><li><strong>session</strong>：是 HttpSession 实例</li><li><strong>application</strong>：是 ServletContext 实例</li><li><strong>out：是一个基于 response 的输出流实例</strong></li><li>page：是当前 jsp/servlet 对象本身</li><li>pageContext：当前页面的上下文对象</li><li>config：是 ServletConfig 实例</li><li>exception：是 Throwable 实例</li></ul><h2 id="四大作用域" tabindex="-1"><a class="header-anchor" href="#四大作用域" aria-hidden="true">#</a> 四大作用域</h2><p>在 jsp 中存在四个作用域对象：</p><ul><li><strong>pageContext</strong>：当前页面上下文，存储在该区域的数据只能在<code>当前页面生效</code></li><li><strong>request</strong>：在一次请求范围内生效</li><li><strong>session</strong>：在一次会话中生效</li><li><strong>application</strong>：在整个 web 容器实例运行期间都生效(单例)</li></ul><p><img src="`+f+'" alt="1611820789068"></p><h2 id="练习" tabindex="-1"><a class="header-anchor" href="#练习" aria-hidden="true">#</a> 练习</h2><ol><li>完成一个企业员工管理系统（servlet+JSP），要求包含两个模块：员工，部门，核心功能： <ol><li>员工管理 <ol><li>员工新增</li><li>修改员工信息</li><li>检索员工（根据工号，姓名，部门）</li><li>员工删除</li><li>员工列表显示</li></ol></li><li>部门管理 <ol><li>部门新增</li><li>部门列表显示</li><li>部门删除（删除之前先将员工的所在部门置空）</li></ol></li></ol></li></ol>',91);function y(J,P){const l=t("router-link");return d(),r("div",null,[_,e("nav",x,[e("ul",null,[e("li",null,[s(l,{to:"#jsp-概述"},{default:n(()=>[i("JSP 概述")]),_:1}),e("ul",null,[e("li",null,[s(l,{to:"#基本语法-三种脚本"},{default:n(()=>[i("基本语法（三种脚本）")]),_:1})])])]),e("li",null,[s(l,{to:"#三大指令"},{default:n(()=>[i("三大指令")]),_:1}),e("ul",null,[e("li",null,[s(l,{to:"#page-指令"},{default:n(()=>[i("page 指令")]),_:1})]),e("li",null,[s(l,{to:"#include-指令"},{default:n(()=>[i("include 指令")]),_:1})]),e("li",null,[s(l,{to:"#taglib-指令-el-表达式-jstl-标准标记库"},{default:n(()=>[i("taglib 指令（EL 表达式&JSTL 标准标记库）")]),_:1})])])]),e("li",null,[s(l,{to:"#jsp-常用标签-jsp-动作"},{default:n(()=>[i("JSP 常用标签（JSP 动作）")]),_:1}),e("ul",null,[e("li",null,[s(l,{to:"#include"},{default:n(()=>[i("include")]),_:1})]),e("li",null,[s(l,{to:"#forward"},{default:n(()=>[i("forward")]),_:1})])])]),e("li",null,[s(l,{to:"#内置对象-九大内置对象"},{default:n(()=>[i("内置对象(九大内置对象)")]),_:1})]),e("li",null,[s(l,{to:"#四大作用域"},{default:n(()=>[i("四大作用域")]),_:1})]),e("li",null,[s(l,{to:"#练习"},{default:n(()=>[i("练习")]),_:1})])])]),S])}const w=a(q,[["render",y],["__file","index.html.vue"]]);export{w as default};
