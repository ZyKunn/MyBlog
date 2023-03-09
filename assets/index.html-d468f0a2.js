import{_ as p,M as c,p as o,q as l,R as n,N as t,V as e,t as s,a1 as i}from"./framework-bcfb0e46.js";const u="/MyBlog/assets/1604368894969-4f2c1cc9.png",d="/MyBlog/assets/1604392610610-96d611c3.png",r="/MyBlog/assets/1604393851665-9eccb00d.png",k={},v=n("h1",{id:"_01-面向对象入门",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_01-面向对象入门","aria-hidden":"true"},"#"),s(" 01 - 面向对象入门 🍻")],-1),m={class:"table-of-contents"},b=i('<h2 id="面向对象程序设计概述" tabindex="-1"><a class="header-anchor" href="#面向对象程序设计概述" aria-hidden="true">#</a> 面向对象程序设计概述</h2><h3 id="程序设计语言发展史" tabindex="-1"><a class="header-anchor" href="#程序设计语言发展史" aria-hidden="true">#</a> 程序设计语言发展史</h3><p><img src="'+u+`" alt="1604368894969"></p><h3 id="面向对象程序设计" tabindex="-1"><a class="header-anchor" href="#面向对象程序设计" aria-hidden="true">#</a> 面向对象程序设计</h3><p>Java 中万事万物皆对象，面向对象编程即：将现实生活的事物以计算机的语言进行描述</p><h2 id="类和对象" tabindex="-1"><a class="header-anchor" href="#类和对象" aria-hidden="true">#</a> 类和对象</h2><p>面向对象中的两个核心概念：</p><ol><li><p>类：对一类具备相同特征（<strong>属性</strong>，<strong>行为</strong>）事物的抽象描述;例如:学生类</p></li><li><p>对象：类的一个实例；例如:学号是 123 的学生</p></li></ol><h3 id="类的成分" tabindex="-1"><a class="header-anchor" href="#类的成分" aria-hidden="true">#</a> 类的成分</h3><p>由于类中包含一类事物的属性和行为，因此类的成主要由属性和行为构成，对于以上两个特征 Java 中以如下的方式呈现:</p><ul><li>属性--&gt;变量</li><li>行为--&gt;方法(函数)</li></ul><p><strong>类的声明语法:</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[&lt;修饰符&gt;] class 类名称 {
    //属性的定义
    //行为的定义
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例如:</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token punctuation">{</span>

	<span class="token comment">//属性：成员变量、全局变量、实例(对象)变量</span>
	<span class="token class-name">String</span> sno<span class="token punctuation">;</span>
	<span class="token class-name">String</span> sname<span class="token punctuation">;</span>
	<span class="token keyword">int</span> age<span class="token punctuation">;</span>
	<span class="token keyword">char</span> sex<span class="token punctuation">;</span>
	<span class="token doc-comment comment">/**学分*/</span>
	<span class="token keyword">double</span> score<span class="token punctuation">;</span>
	<span class="token doc-comment comment">/**学校*/</span>
	<span class="token class-name">String</span> school <span class="token operator">=</span> <span class="token string">&quot;软帝大学&quot;</span><span class="token punctuation">;</span>
	<span class="token doc-comment comment">/**专业*/</span>
	<span class="token class-name">String</span> major<span class="token punctuation">;</span>

	<span class="token comment">//行为：方法（函数 function）  f(x)</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">study</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;good good study,day day up!!!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">play</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;一起来玩有游戏吧！！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h4><p>属性用于描述类的静态信息，表示类的数据；语法</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[&lt;修饰符&gt;] 数据类型 变量名 = [&lt;默认值&gt;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>例如:</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">String</span> sno<span class="token punctuation">;</span>
<span class="token class-name">String</span> sname<span class="token punctuation">;</span>
<span class="token keyword">int</span> age<span class="token punctuation">;</span>
<span class="token keyword">char</span> sex<span class="token punctuation">;</span>
<span class="token doc-comment comment">/**学分*/</span>
<span class="token keyword">double</span> score<span class="token punctuation">;</span>
<span class="token doc-comment comment">/**学校*/</span>
<span class="token class-name">String</span> school <span class="token operator">=</span> <span class="token string">&quot;软帝大学&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="方法" tabindex="-1"><a class="header-anchor" href="#方法" aria-hidden="true">#</a> 方法</h4><p>类中另一个组成部分称之为行为，行为在 java 中的呈现方式以方法(函数)的形式存在，语法:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[&lt;修饰符&gt;] 返回值类型 方法名([&lt;参数列表&gt;]) {
    //执行体
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例如:</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">study</span><span class="token punctuation">(</span><span class="token class-name">String</span> kecheng<span class="token punctuation">,</span><span class="token keyword">int</span> hours<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;good good study,day day up!!!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">play</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;一起来玩有游戏吧！！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="对象创建与使用" tabindex="-1"><a class="header-anchor" href="#对象创建与使用" aria-hidden="true">#</a> 对象创建与使用</h3><p>对象即对类的具象化，即类的一个实例</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//对象创建（实例化对象）</span>
<span class="token class-name">Student</span> stu <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="方法详解" tabindex="-1"><a class="header-anchor" href="#方法详解" aria-hidden="true">#</a> 方法详解</h2><p>​ 方法(Method)是由一些表达式组成的代码片段，通常用于完成某些特定的功能，实际开发中可以将一些反复需要使用到的代码编写到方法中，只需要对方法进行调用，即可执行这些代码片段，从而提高的代码的可复用性。</p><h3 id="方法的分类" tabindex="-1"><a class="header-anchor" href="#方法的分类" aria-hidden="true">#</a> 方法的分类</h3><p>根据方法的声明语法：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[&lt;修饰符&gt;] 返回值类型 方法名([&lt;参数列表&gt;]) {

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由于方法结构中包<strong>含返回值类型</strong>和<strong>参数</strong>成分，根据这两个成分的组合，方法可以分为 4 中类别：</p><ul><li>无参数无返回值</li><li>无参数有返回值</li><li>有参数无返回值</li><li>有参数有返回值</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Tools</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
	 * 有参有返回值
	 * <span class="token keyword">@param</span> <span class="token parameter">a</span>  数值1
	 * <span class="token keyword">@param</span> <span class="token parameter">b</span>  数值2
	 * <span class="token keyword">@return</span> 返回两个数值中较大的一个
	 */</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">max</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span><span class="token keyword">int</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> a <span class="token operator">&gt;</span> b <span class="token operator">?</span> a <span class="token operator">:</span> b<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
	 * 无参有返回值
	 * 返回字符串时间
	 * <span class="token keyword">@return</span>
	 */</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">nowTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span>  <span class="token string">&quot;2020年11月3日 10:46:22&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
	 * 有参无返回值
	 * 打印输出参数内容
	 * <span class="token keyword">@param</span> <span class="token parameter">msg</span>
	 */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">log</span><span class="token punctuation">(</span><span class="token class-name">String</span> msg<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
	 * 无参无返回值
	 */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">tips</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;天气冷了，多穿衣服，多喝开水!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> voi	d <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Tools</span> t <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Tools</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//调用包含返回值的方法，并且使用对应的数据类型变量接收返回值</span>
        <span class="token keyword">int</span> i <span class="token operator">=</span> t<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">String</span> time <span class="token operator">=</span> t<span class="token punctuation">.</span><span class="token function">nowTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>time<span class="token punctuation">)</span><span class="token punctuation">;</span>

        t<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;helloworld，你好，世界&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        t<span class="token punctuation">.</span><span class="token function">tips</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 创建一个方法，要求提供一个年份，返回该年份是否是闰年</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>参数(Parameter):<strong>在执行方法时需要传递到方法中使用的一些数据，参数的类型可以是任意的，数量可以是任意多个，参数顺序也可以任意的，在声明方法时定义的参数，称之</strong>形式参数（形参）</strong>；在对象方法进行调用时传入的参数称之<strong>实际参数(实参)</strong>。</p><p>**返回值(returns)😗*在方法执行完毕之后，传递到方法之外的数据；返回值的类型可以是任意，返回的具体值(或者变量)必须要跟方法定义的返回类型匹配。</p></blockquote><h3 id="方法调用" tabindex="-1"><a class="header-anchor" href="#方法调用" aria-hidden="true">#</a> 方法调用</h3><p>java 中方法的调用需要通过对象完成，语法如下:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>引用对象.方法名(实参)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//对象创建（实例化对象）</span>
<span class="token class-name">Student</span> stu <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//调用方法</span>
stu<span class="token punctuation">.</span><span class="token function">play</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="值传递问题" tabindex="-1"><a class="header-anchor" href="#值传递问题" aria-hidden="true">#</a> 值传递问题</h3><h4 id="基本类型传递问题" tabindex="-1"><a class="header-anchor" href="#基本类型传递问题" aria-hidden="true">#</a> 基本类型传递问题</h4><p>观察以下代码，给出程序运行结果:</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token punctuation">{</span>

	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">change</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		i <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;change---&gt;&quot;</span> <span class="token operator">+</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 10;</span>
	<span class="token punctuation">}</span>


	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>

		<span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;change前：&quot;</span> <span class="token operator">+</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//5</span>
		<span class="token class-name">Test</span> t <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		t<span class="token punctuation">.</span><span class="token function">change</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;change后：&quot;</span> <span class="token operator">+</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ?</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>change前：5
change---&gt;10
change后：5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>分析以上程序，可以看出 java 中参数的传递为值传递，不存在引用传递的问题，change 方法中改变的只是内部定义的局部变量 i，不会影响 main 方法中的局部变量，内存模型如下：</p><p><img src="`+d+`" alt="1604392610610"></p><p>注意事项:</p><p><strong>java 中局部变量的存储位置位于方法帧栈中</strong>，<strong>成员变量的存储位于堆内存中</strong></p></blockquote><h4 id="引用类型参数传递问题" tabindex="-1"><a class="header-anchor" href="#引用类型参数传递问题" aria-hidden="true">#</a> 引用类型参数传递问题</h4><p>以上实例修改之后，观察执行结果</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestDog</span> <span class="token punctuation">{</span>

	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">change</span><span class="token punctuation">(</span><span class="token class-name">Dog</span> d<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;change:&quot;</span><span class="token operator">+</span>d<span class="token punctuation">)</span><span class="token punctuation">;</span>
		d<span class="token punctuation">.</span>nickname <span class="token operator">=</span> <span class="token string">&quot;旺财&quot;</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>

		<span class="token class-name">Dog</span> d <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span><span class="token punctuation">;</span>
		d<span class="token punctuation">.</span>nickname <span class="token operator">=</span> <span class="token string">&quot;来福&quot;</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;change前：&quot;</span> <span class="token operator">+</span> d<span class="token punctuation">.</span>nickname<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">TestDog</span> td <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TestDog</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		td<span class="token punctuation">.</span><span class="token function">change</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;change后：&quot;</span> <span class="token operator">+</span> d<span class="token punctuation">.</span>nickname<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Dog</span><span class="token punctuation">{</span>
    <span class="token class-name">String</span> nickname<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>以上程序执行的内存模型:</p><p><img src="`+r+`" alt="1604393851665"></p></blockquote><h3 id="递归-recursion" tabindex="-1"><a class="header-anchor" href="#递归-recursion" aria-hidden="true">#</a> 递归（Recursion）</h3><p>​ 递归即在一个方法内部对方法自身调用，递归可以以简单的代码解决复杂的算法问题，对文件夹的遍历，树形菜单遍历等等；递归操作不当将会导致栈溢出错误<code>StackOverflowError</code></p><p>递归实例:</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//5！</span>
<span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">m</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>n <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> n <span class="token operator">*</span> <span class="token function">m</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//1+2+...+100</span>
<span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>n <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> n <span class="token operator">+</span> <span class="token function">add</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//斐波拉契数列</span>
<span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">fib</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>n <span class="token operator">==</span> <span class="token number">1</span> <span class="token operator">||</span> n <span class="token operator">==</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">fib</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">fib</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="作业" tabindex="-1"><a class="header-anchor" href="#作业" aria-hidden="true">#</a> 作业</h2><ol><li>要求递归解决问题：设计一个 ATM 机的程序，当对方正确的输入卡号(int)和密码(int)时，显示 come in，错误时要求重新输入（3 次机会），如果第三次还输入错误，则提示 today is more，please next！（控制台）</li></ol>`,58);function g(h,y){const a=c("router-link");return o(),l("div",null,[v,n("nav",m,[n("ul",null,[n("li",null,[t(a,{to:"#面向对象程序设计概述"},{default:e(()=>[s("面向对象程序设计概述")]),_:1}),n("ul",null,[n("li",null,[t(a,{to:"#程序设计语言发展史"},{default:e(()=>[s("程序设计语言发展史")]),_:1})]),n("li",null,[t(a,{to:"#面向对象程序设计"},{default:e(()=>[s("面向对象程序设计")]),_:1})])])]),n("li",null,[t(a,{to:"#类和对象"},{default:e(()=>[s("类和对象")]),_:1}),n("ul",null,[n("li",null,[t(a,{to:"#类的成分"},{default:e(()=>[s("类的成分")]),_:1})]),n("li",null,[t(a,{to:"#对象创建与使用"},{default:e(()=>[s("对象创建与使用")]),_:1})])])]),n("li",null,[t(a,{to:"#方法详解"},{default:e(()=>[s("方法详解")]),_:1}),n("ul",null,[n("li",null,[t(a,{to:"#方法的分类"},{default:e(()=>[s("方法的分类")]),_:1})]),n("li",null,[t(a,{to:"#方法调用"},{default:e(()=>[s("方法调用")]),_:1})]),n("li",null,[t(a,{to:"#值传递问题"},{default:e(()=>[s("值传递问题")]),_:1})]),n("li",null,[t(a,{to:"#递归-recursion"},{default:e(()=>[s("递归（Recursion）")]),_:1})])])]),n("li",null,[t(a,{to:"#作业"},{default:e(()=>[s("作业")]),_:1})])])]),b])}const f=p(k,[["render",g],["__file","index.html.vue"]]);export{f as default};
