import{_ as p,r as i,o as l,c,a as n,e,w as t,b as s,d as o}from"./app-a153c100.js";const u="/MyBlog/assets/1604470287016-f94c85cb.png",d="/MyBlog/assets/1604470402787-46a6e75d.png",r="/MyBlog/assets/1604476884605-3cc2fb3e.png",k={},v=n("h1",{id:"_02-面向对象程序设计",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_02-面向对象程序设计","aria-hidden":"true"},"#"),s(" 02 - 面向对象程序设计 🍰")],-1),m={class:"table-of-contents"},b=o(`<h2 id="类的成分" tabindex="-1"><a class="header-anchor" href="#类的成分" aria-hidden="true">#</a> 类的成分</h2><p>一个类由属性和行为构成：</p><p>属性：描述指定类型的数据（名词）</p><p>行为：描述指定类型的一种动作（动词）</p><h3 id="属性详解-field" tabindex="-1"><a class="header-anchor" href="#属性详解-field" aria-hidden="true">#</a> 属性详解（Field）</h3><p>属性用于描述类的一些静态信息(数据)，属性在代码中的呈现方式为变量，java 中的变量根据出现的位置不同，又分为两种：</p><ul><li><p><strong>全局变量（global variable）</strong></p><p>也称之成员变量、实例(对象)变量；直接在类结构中定义与方法同一级别，成员变量可以出现在类中的任意<strong>非静态</strong>方法中，成员变量在类加载时编译器会自动为期设置初始值（即便不手动赋值都存在默认值）</p><p>案例:</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">People</span> <span class="token punctuation">{</span>

	<span class="token comment">// 成员变量</span>
	<span class="token class-name">String</span> name<span class="token punctuation">;</span>
	<span class="token keyword">int</span> age<span class="token punctuation">;</span>
	<span class="token class-name">String</span> sex<span class="token punctuation">;</span>
	<span class="token keyword">double</span> height<span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>各种类型成员变量的默认值</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>byte     0
short    0
int      0
long     0
float    0.0
double   0.0
char     &lt;空格&gt;
boolean  false

引用类型   null
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>局部变量（local variable）</strong></p><p>也称之为临时变量;局部变量一般位于方法内部声明，方法的参数也是局部变量，局部变量的作用范围仅限于声明的区域；<strong>局部变量没有初始化前不能使用</strong></p><p>案例:</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">speak</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>name <span class="token operator">+</span> <span class="token string">&quot;说:&quot;</span> <span class="token operator">+</span> s<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">//游离块</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">//静态游离块</span>
<span class="token keyword">static</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="构造器详解" tabindex="-1"><a class="header-anchor" href="#构造器详解" aria-hidden="true">#</a> 构造器详解</h3><p>​ 构造器也称之为构造方法，构造函数，构建器；作用于对象创建时完成对于对象的相关属性初始化操作，减少方法对于参数依赖，可以直接在方法中使用由构造器赋值的成员变量；构造器是一种特殊的方法，语法规范：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[&lt;修饰符&gt;] 类名称([&lt;参数列表&gt;]){
   //执行体
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>案例</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">Goods</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token class-name">People</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="构造器的定义规范" tabindex="-1"><a class="header-anchor" href="#构造器的定义规范" aria-hidden="true">#</a> 构造器的定义规范</h4><ol><li>构造器的名称必须跟类名称一致</li><li>构造器不能包含任何类型的返回值(包括 void)</li></ol><h4 id="构造器注意事项" tabindex="-1"><a class="header-anchor" href="#构造器注意事项" aria-hidden="true">#</a> 构造器注意事项</h4><ol><li>任何一个 Java 类都存在一个默认的无参构造器(编译器自动添加)</li><li>如果一旦定义自定义的构造器，则默认无参构造器会被覆盖</li><li>一个类可以存在多个构造器，但是构造器中的参数个数，类型，顺序任意有一项不一致（方法的重载）</li></ol><h4 id="构造器使用" tabindex="-1"><a class="header-anchor" href="#构造器使用" aria-hidden="true">#</a> 构造器使用</h4><p>构造器的调用一般通过<code>new</code>关键字进行调用，一旦执行，就完成了对象的创建以及初始化。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>new 构造器();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>案例</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">People</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">People</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Goods</span> g <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Goods</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="package-import" tabindex="-1"><a class="header-anchor" href="#package-import" aria-hidden="true">#</a> package &amp; import</h2><p>在声明一个类时，在类结构的上方可以包含另外两种语句：</p><ul><li>包定义</li><li>导包</li></ul><h3 id="pacakge-包" tabindex="-1"><a class="header-anchor" href="#pacakge-包" aria-hidden="true">#</a> pacakge（包）</h3><p>包的作用，在开发中用于对不同模块的 java 文件进行分门别类的存储，主要用于模块区分。在文件系统中的表现方式就是目录的不同层级组合，包的定义语法：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package 包名称
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>包名称的命名一般为小写的英文单词，采用域名倒置的写法,比如:</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>softeem<span class="token punctuation">.</span>b2c<span class="token punctuation">.</span>service</span><span class="token punctuation">;</span>

<span class="token keyword">package</span> <span class="token namespace">cn<span class="token punctuation">.</span>sina<span class="token punctuation">.</span>xxx</span><span class="token punctuation">;</span>

<span class="token keyword">package</span> <span class="token namespace">net<span class="token punctuation">.</span>csdn<span class="token punctuation">.</span></span><span class="token constant">XXX</span><span class="token punctuation">;</span>

<span class="token keyword">package</span> <span class="token namespace">edu<span class="token punctuation">.</span>softeem<span class="token punctuation">.</span>xxx</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="import-导包" tabindex="-1"><a class="header-anchor" href="#import-导包" aria-hidden="true">#</a> import（导包）</h3><p>​ 在实际的应用中，一个软件项目通常会由很多包构成，在对于类的使用过程中大概率会涉及到跨包之间类相互调用，因此，在一个类中使用另一个包中的类时，就需要将目标类所在的完整类路径(完全限定名)导入到当前类中，这个过程就称之导包。</p><p>语法：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import 指定类(或接口，枚举)的完全限定名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>例如:</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Scanner</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>softeem<span class="token punctuation">.</span>entity<span class="token punctuation">.</span></span><span class="token class-name">User</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>softeem<span class="token punctuation">.</span>service<span class="token punctuation">.</span></span><span class="token class-name">UserService</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注意事项:</p><p><strong>一个类只能存在于一个 package</strong></p><p><strong>一个类可以 import 多个其他的类</strong></p><p><strong>完全限定名使用方式：</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>softeem<span class="token punctuation">.</span>lesson07<span class="token punctuation">.</span>oop<span class="token punctuation">.</span></span><span class="token class-name">User</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestUser</span> <span class="token punctuation">{</span>

	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>

		<span class="token class-name">User</span> u <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token string">&quot;softeem&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;123&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		u<span class="token punctuation">.</span>username <span class="token operator">=</span> <span class="token string">&quot;admin&quot;</span><span class="token punctuation">;</span>
		u<span class="token punctuation">.</span><span class="token function">login</span><span class="token punctuation">(</span><span class="token string">&quot;admin&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;123456&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


		<span class="token doc-comment comment">/**
		 * 如果对于一个类中需要使用两个位于不同包中的同名类时，
		 * 此时只能够显式的import其中一个类，对于另一个类的
		 * 使用必须使用完全限定名的声明方式，如下：
		 */</span>
		<span class="token class-name"><span class="token namespace">com<span class="token punctuation">.</span>softeem<span class="token punctuation">.</span>lesson07<span class="token punctuation">.</span>entity<span class="token punctuation">.</span></span>User</span> u2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token namespace">com<span class="token punctuation">.</span>softeem<span class="token punctuation">.</span>lesson07<span class="token punctuation">.</span>entity<span class="token punctuation">.</span></span>User</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		u2<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h2 id="访问修饰符" tabindex="-1"><a class="header-anchor" href="#访问修饰符" aria-hidden="true">#</a> 访问修饰符</h2><p>Java 中的访问修饰符分为 4 个</p><ul><li><p><em>defualt</em>（空白）</p><p>不使用任何访问修饰符时，目标元素只能在同一个类或者同一个包的其他类被访问</p></li><li><p><strong>private</strong></p><p>被 private 修饰的元素，只能够在当前类中被访问</p></li><li><p>protected</p><p>被 protected 修饰的元素，只能在同一个包中，或者跨包的子类中被访问</p></li><li><p><strong>public</strong></p><p>被 public 修饰的元素可以在同一个项目中的任意包被访问</p></li></ul><p><img src="`+u+'" alt="1604470287016"></p><p><strong>各种访问修饰符的访问范围图</strong></p><p><img src="'+d+`" alt="1604470402787"></p><blockquote><p>使用原则：</p><ul><li><strong>类一般使用 public 修饰</strong>（普通的类无法使用 private 和 protected 修饰）</li><li>属性一般使用 private 修饰</li><li>方法一般使用 public</li></ul></blockquote><h2 id="封装" tabindex="-1"><a class="header-anchor" href="#封装" aria-hidden="true">#</a> 封装</h2><p>面向对象语言包含三大核心特征：</p><ul><li>封装</li><li>继承</li><li>多态</li></ul><h3 id="信息隐藏" tabindex="-1"><a class="header-anchor" href="#信息隐藏" aria-hidden="true">#</a> 信息隐藏</h3><p>​ 信息隐藏是 java 中对类的一种保护机制，将一个类的具体实现细节隐藏起来，隐藏通常指的是使用 private 修饰符对属性或者方法修饰，使得外界无法随意访问该类中的成分。</p><p>​ 对于一些属性来说，如果对外公开，则外界一旦获取到该类的实例(对象)，即可对该公开的属性进行随意访问甚至修改，从而会造成一些不要的安全问题。</p><h3 id="setter-getter-方法" tabindex="-1"><a class="header-anchor" href="#setter-getter-方法" aria-hidden="true">#</a> Setter&amp;Getter 方法</h3><p>​ 将类中的属性设置为 private 之后，外界无法访问，但是可以通过提供公开的方法对这些私有的属性进行访问。让外界访问方法的可控性要远远高于直接让外界访问属性；对于上述的操作，Java 中提供了两种用于对属性操作的方法：</p><ul><li>setter</li><li>getter</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">People</span> <span class="token punctuation">{</span>

	<span class="token keyword">private</span> <span class="token class-name">String</span> idCard<span class="token punctuation">;</span>
	<span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
	<span class="token keyword">private</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>
	<span class="token keyword">private</span> <span class="token class-name">String</span> sex<span class="token punctuation">;</span>
	<span class="token keyword">private</span> <span class="token keyword">boolean</span> marry<span class="token punctuation">;</span>

	<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getIdCard</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> idCard<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setIdCard</span><span class="token punctuation">(</span><span class="token class-name">String</span> idCard<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>idCard <span class="token operator">=</span> idCard<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> name<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setName</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>age <span class="token operator">&gt;</span> <span class="token number">18</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			age <span class="token operator">=</span> <span class="token number">18</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> age<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setAge</span><span class="token punctuation">(</span><span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getSex</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> sex<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setSex</span><span class="token punctuation">(</span><span class="token class-name">String</span> sex<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>sex <span class="token operator">=</span> sex<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token doc-comment comment">/**
	 * boolean类型属性的get方法叫isXXX
	 * <span class="token keyword">@return</span>
	 */</span>
	<span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isMarry</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> marry<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setMarry</span><span class="token punctuation">(</span><span class="token keyword">boolean</span> marry<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>marry <span class="token operator">=</span> marry<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="this-关键字" tabindex="-1"><a class="header-anchor" href="#this-关键字" aria-hidden="true">#</a> this 关键字</h3><p>this 关键字在一个类中用于表示&quot;当前对象”；this 一般用于一个类的成员方法、构造器或者游离块中，作用于<strong>调用当前类的构造器，属性和其他方法</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Dog</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">int</span> id<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//		构造器中如果调用了其他构造器，则调用代码必须位于最前端</span>
        <span class="token comment">//		System.out.println(&quot;---&quot;);</span>
        <span class="token comment">//调用包含String类型参数的构造器</span>
        <span class="token keyword">this</span><span class="token punctuation">(</span><span class="token string">&quot;来福&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;执行带参数构造器。。。。&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> id<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setId</span><span class="token punctuation">(</span><span class="token keyword">int</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>id <span class="token operator">=</span> id<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setName</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>name<span class="token operator">+</span><span class="token string">&quot;吃肉肉&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">drink</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>name<span class="token operator">+</span><span class="token string">&quot;和奶茶&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">sleep</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>name<span class="token operator">+</span><span class="token string">&quot;碎觉觉&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">oneDay</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">drink</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Dog</span> d <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;$$$$&quot;</span><span class="token operator">+</span>d<span class="token punctuation">)</span><span class="token punctuation">;</span>
        d<span class="token punctuation">.</span><span class="token function">oneDay</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+r+`" alt="1604476884605"></p><h2 id="练习" tabindex="-1"><a class="header-anchor" href="#练习" aria-hidden="true">#</a> 练习</h2><ol><li><p>根据 LOL，创建一个英雄类（Hero）,包含以下属性：</p><ul><li>编号(int)</li><li>昵称（String）</li><li>名称（String）</li><li>类型（法师，射手，战士，坦克，辅助，打野）</li><li>攻击力（int）</li><li>防御力(int)</li><li>血量（int）</li><li>魔法值(int)</li></ul><p>英雄包含两个构造方法</p><ol><li>无参数</li><li>所有参数</li></ol><p>英雄包含三个方法：</p><ol><li>攻击<code>attack(Hero h)</code></li><li>死亡</li><li>重生</li><li>移动</li></ol><p>要求完成如下功能:</p><ol><li><p>分别创建两个不同类型的英雄</p></li><li><p>实现攻击的功能(轮流攻击)</p></li><li><p>血量先归零的英雄死亡</p></li></ol></li><li><p>基于面向对象实现：猫抓老鼠小游戏有一只猫和一只老鼠，当猫的体重是小老鼠体重的 5 倍时，猫可以抓到老鼠，猫每吃掉一只老鼠，体重增加老鼠的体重的 0.5 倍，但是当猫的体重超过了老鼠体重的 5 倍，猫无法抓到老鼠，老鼠逃脱并对猫发出嘲讽</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Mouse</span><span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">double</span> weight<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//todo</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">haha</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//todo</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Cat</span><span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">double</span> weight<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token keyword">catch</span><span class="token punctuation">(</span><span class="token class-name">Mouse</span> m<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>基于数组+面向对象完成一个学生信息管理系统，初始化一个长度为 100 的学生数组，学生信息包含如下：</p><ul><li>学号（int）</li><li>姓名（String）</li><li>性别（String）</li><li>年龄（int）</li><li>专业（String）</li><li>学分（double）</li></ul><p>要求实现以下功能</p><ol><li>完成学生添加的功能</li><li>根据指定的学号，删除学生</li><li>根据学号，修改指定学生的学分</li><li>显示所有学生的信息</li><li>查询所有学分超过 80 的学生信息</li></ol><blockquote><p>创建两个类：</p><ol><li>学生类（属性，setter/getter，构造器）</li><li>学生管理类（对学生操作的所有方法）</li></ol></blockquote></li><li><p>基于面向对象，模拟 ArrayList 的实现,类名叫<code>MyArrayList</code>，要求包含以下功能：</p><ol><li>数组中只能存储 int 类型数据</li><li>提供一个初始数组长度为 10 的构造器<code>MyArrayList(int capacity)</code>，以及一个默认无参构造器<code>MyArrayList()</code></li><li>提供一个能够向数组中添加元素的方法 <code>add(int i)</code></li><li>当数组容量超出时要求能自动扩容，扩充为元素组的 1.5 倍</li><li>提供一个能够返回数组真实长度的方法 <code>size()</code></li><li>提供一个能够返回指定位置元素的方法 <code>get(int index)</code></li></ol></li></ol>`,58);function g(y,h){const a=i("router-link");return l(),c("div",null,[v,n("nav",m,[n("ul",null,[n("li",null,[e(a,{to:"#类的成分"},{default:t(()=>[s("类的成分")]),_:1}),n("ul",null,[n("li",null,[e(a,{to:"#属性详解-field"},{default:t(()=>[s("属性详解（Field）")]),_:1})]),n("li",null,[e(a,{to:"#构造器详解"},{default:t(()=>[s("构造器详解")]),_:1})])])]),n("li",null,[e(a,{to:"#package-import"},{default:t(()=>[s("package & import")]),_:1}),n("ul",null,[n("li",null,[e(a,{to:"#pacakge-包"},{default:t(()=>[s("pacakge（包）")]),_:1})]),n("li",null,[e(a,{to:"#import-导包"},{default:t(()=>[s("import（导包）")]),_:1})])])]),n("li",null,[e(a,{to:"#访问修饰符"},{default:t(()=>[s("访问修饰符")]),_:1})]),n("li",null,[e(a,{to:"#封装"},{default:t(()=>[s("封装")]),_:1}),n("ul",null,[n("li",null,[e(a,{to:"#信息隐藏"},{default:t(()=>[s("信息隐藏")]),_:1})]),n("li",null,[e(a,{to:"#setter-getter-方法"},{default:t(()=>[s("Setter&Getter 方法")]),_:1})]),n("li",null,[e(a,{to:"#this-关键字"},{default:t(()=>[s("this 关键字")]),_:1})])])]),n("li",null,[e(a,{to:"#练习"},{default:t(()=>[s("练习")]),_:1})])])]),b])}const f=p(k,[["render",g],["__file","index.html.vue"]]);export{f as default};
