import{_ as p,M as c,p as o,q as l,R as n,N as t,V as e,t as s,a1 as i}from"./framework-bcfb0e46.js";const u="/MyBlog/assets/1605232071468-7ccfa262.png",d="/MyBlog/assets/1605237740759-44c0eae4.png",k={},r=n("h1",{id:"_08-面向对象程序设计-内部类",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_08-面向对象程序设计-内部类","aria-hidden":"true"},"#"),s(" 08 - 面向对象程序设计(内部类)🎂")],-1),v={class:"table-of-contents"},m=i(`<h2 id="内部类" tabindex="-1"><a class="header-anchor" href="#内部类" aria-hidden="true">#</a> 内部类</h2><p>通常一个 java 文件中只能包含一个 public class，但是可以在一个 java 类的内部中嵌套其他的 java 类，这种类称之为内部类，也叫嵌套类，或者类属类，比如：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">People</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">m</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

    <span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>

	<span class="token punctuation">}</span>

	<span class="token comment">//内部类</span>
	<span class="token keyword">class</span> <span class="token class-name">Body</span><span class="token punctuation">{</span>

	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//它不是内部类，它和People是平级的关系</span>
<span class="token comment">//class Head{</span>
<span class="token comment">//}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>以上就是一个典型的内部类,生成的字节码文件如下:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>People$Body.class
People.class
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p>java 中的内部类包含以下几种定义方式：</p><ol><li>成员内部类</li><li>局部内部类</li><li>静态内部类</li><li>匿名内部类</li></ol><h3 id="内部类的好处" tabindex="-1"><a class="header-anchor" href="#内部类的好处" aria-hidden="true">#</a> 内部类的好处</h3><ul><li>提供了比方法更好的封装性</li><li>提高类多继承的可能性</li></ul><h3 id="成员内部类" tabindex="-1"><a class="header-anchor" href="#成员内部类" aria-hidden="true">#</a> 成员内部类</h3><p>成员内部类即在类结构中直接定义的与属性，方法，构造器同一级别的类。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">People</span> <span class="token keyword">extends</span> <span class="token class-name">JFrame</span><span class="token punctuation">{</span>

	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">m1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;外部类方法&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//		new Body().m3();</span>
	<span class="token punctuation">}</span>

	<span class="token comment">//内部类</span>
	<span class="token keyword">private</span> <span class="token keyword">class</span> <span class="token class-name">Body</span> <span class="token keyword">extends</span> <span class="token class-name">ArrayList</span><span class="token punctuation">{</span>

		<span class="token class-name">String</span> name<span class="token punctuation">;</span>

		<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">m2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;内部类方法&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>

		<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">m3</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>成员内部类的使用场景：在 JDK 中有很多类使用到了成员内部类，例如: ArrayList：</p><p><img src="`+u+`" alt="1605232071468"></p><blockquote><p>成员内部类注意事项:</p><p>成员内部类类似成员方法，允许被任意的访问修饰符修饰（<em>default</em>,public,private,protected）</p></blockquote><h3 id="局部内部类" tabindex="-1"><a class="header-anchor" href="#局部内部类" aria-hidden="true">#</a> 局部内部类</h3><p>所谓局部内部类即在一个类的方法或者其他成员的(构造器，游离块)语句块中定义，不太常见：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>

    <span class="token keyword">int</span> n<span class="token punctuation">;</span>

	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">login</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">//jdk1.8之后无需显式定义final（编译器自动添加）</span>
		<span class="token keyword">final</span> <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
		<span class="token keyword">class</span> <span class="token class-name">Validate</span><span class="token punctuation">{</span>
			<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">//成员变量在局部内部类中允许修改</span>
                n <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
                <span class="token comment">//变量i在局部内部类只能使用不能修改</span>
				<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;=======&quot;</span><span class="token operator">+</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
		<span class="token class-name">Validate</span> v <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Validate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		v<span class="token punctuation">.</span><span class="token function">t</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">reg</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">//编译错误：找不到类</span>
<span class="token comment">//		Validate v = new Validate();</span>
<span class="token comment">//		v.t();</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">User</span> u <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		u<span class="token punctuation">.</span><span class="token function">login</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>局部内部类注意事项:</p><ol><li>不能使用任何的访问修饰符(除了 default 外)修饰，原理参考局部变量的定义</li><li>局部内部类中不能对方法中的局部变量进行修改，如果局部内部类中需要使用为外部方法的局部变量时，该变量必须定义为 final（<strong>java8 无需显式定义 final，编译器默认添加</strong>）</li><li>使用 final 修饰局部变量的作用在于延长局部变量的生命周期，避免因为方法的结束而被清理（可能局部内部类在使用该变量）</li></ol></blockquote><h3 id="静态内部类" tabindex="-1"><a class="header-anchor" href="#静态内部类" aria-hidden="true">#</a> 静态内部类</h3><p>静态内部类即使用 static 修饰的成员内部类；静态内部类与外部类的对象无关，一般用于数据缓存，比如 Integer 中的静态内部类：<code>IntegerCache</code></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
     * Cache to support the object identity semantics of autoboxing for values between
     * -128 and 127 (inclusive) as required by JLS.
     *
     * The cache is initialized on first usage.  The size of the cache
     * may be controlled by the <span class="token punctuation">{</span><span class="token keyword">@code</span> <span class="token code-section"><span class="token code language-java"><span class="token operator">-</span><span class="token constant">XX</span><span class="token operator">:</span><span class="token class-name">AutoBoxCacheMax</span><span class="token operator">=</span><span class="token generics"><span class="token punctuation">&lt;</span>size<span class="token punctuation">&gt;</span></span></span></span><span class="token punctuation">}</span> option.
     * During VM initialization, java.lang.Integer.IntegerCache.high property
     * may be set and saved in the private system properties in the
     * sun.misc.VM class.
     */</span>

<span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">IntegerCache</span> <span class="token punctuation">{</span>
    <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> low <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">128</span><span class="token punctuation">;</span>
    <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> high<span class="token punctuation">;</span>
    <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Integer</span> cache<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token keyword">static</span> <span class="token punctuation">{</span>
        <span class="token comment">// high value may be configured by property</span>
        <span class="token keyword">int</span> h <span class="token operator">=</span> <span class="token number">127</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> integerCacheHighPropValue <span class="token operator">=</span>
            sun<span class="token punctuation">.</span>misc<span class="token punctuation">.</span><span class="token constant">VM</span><span class="token punctuation">.</span><span class="token function">getSavedProperty</span><span class="token punctuation">(</span><span class="token string">&quot;java.lang.Integer.IntegerCache.high&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>integerCacheHighPropValue <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
                <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>integerCacheHighPropValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
                i <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> <span class="token number">127</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token comment">// Maximum array size is Integer.MAX_VALUE</span>
                h <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token constant">MAX_VALUE</span> <span class="token operator">-</span> <span class="token punctuation">(</span><span class="token operator">-</span>low<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span><span class="token punctuation">(</span> <span class="token class-name">NumberFormatException</span> nfe<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// If the property cannot be parsed into an int, ignore it.</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        high <span class="token operator">=</span> h<span class="token punctuation">;</span>

        cache <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Integer</span><span class="token punctuation">[</span><span class="token punctuation">(</span>high <span class="token operator">-</span> low<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> j <span class="token operator">=</span> low<span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> k <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> k <span class="token operator">&lt;</span> cache<span class="token punctuation">.</span>length<span class="token punctuation">;</span> k<span class="token operator">++</span><span class="token punctuation">)</span>
            cache<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Integer</span><span class="token punctuation">(</span>j<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// range [-128, 127] must be interned (JLS7 5.1.7)</span>
        <span class="token keyword">assert</span> <span class="token class-name">IntegerCache</span><span class="token punctuation">.</span>high <span class="token operator">&gt;=</span> <span class="token number">127</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token class-name">IntegerCache</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>自定义静态内部类:</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">StaticClass</span> <span class="token punctuation">{</span>

	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">m</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;外部类方法&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">MyCache</span><span class="token punctuation">{</span>

		<span class="token keyword">static</span> <span class="token class-name">String</span> msg <span class="token operator">=</span> <span class="token string">&quot;天干物燥，小心火烛&quot;</span><span class="token punctuation">;</span>

		<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;静态内部类的方法&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>

		<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">m2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;静态内部类的普通方法&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>

	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>静态内部类的对象创建与方法调用:</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//创建静态内部类的对象</span>
<span class="token class-name">StaticClass<span class="token punctuation">.</span>MyCache</span> cache <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StaticClass<span class="token punctuation">.</span>MyCache</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//调用静态内部类的静态方法</span>
<span class="token class-name">StaticClass<span class="token punctuation">.</span>MyCache</span><span class="token punctuation">.</span><span class="token function">t</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//调用静态内部类的成员方法</span>
cache<span class="token punctuation">.</span><span class="token function">m2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="匿名内部类" tabindex="-1"><a class="header-anchor" href="#匿名内部类" aria-hidden="true">#</a> 匿名内部类</h3><p>匿名内部类即没有名字的内部类，通常用于事件监听机制，回调机制中</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>

	<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>匿名内部类实例:</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//匿名内部类</span>
    <span class="token class-name">Animal</span> a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Animal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            i <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;吃狗肉&quot;</span><span class="token operator">+</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token function">m</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//由于匿名内部类没有名称</span>
        <span class="token comment">//则内部定义的方法外界无法访问</span>
        <span class="token comment">//通常方法使用private修饰</span>
        <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">m</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;----&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    a<span class="token punctuation">.</span><span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+d+`" alt="1605237740759"></p><h3 id="接口的匿名内部类使用" tabindex="-1"><a class="header-anchor" href="#接口的匿名内部类使用" aria-hidden="true">#</a> 接口的匿名内部类使用</h3><p>接口的声明:</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Flyable</span> <span class="token punctuation">{</span>

	<span class="token keyword">void</span> <span class="token function">fly</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接口匿名内部类使用:</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Flyable</span> f <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Flyable</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">fly</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;fly。。。。&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
f<span class="token punctuation">.</span><span class="token function">fly</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="timer-timertask" tabindex="-1"><a class="header-anchor" href="#timer-timertask" aria-hidden="true">#</a> Timer&amp;TimerTask</h2><p>Timer 类是 JDK 中，java.util 包中提供的用于执行定时任务的定时器类；Timer 通常与 TimerTask 结合使用，以达到定时任务执行的功能，比如定时消息推送，闹钟应用的实现等。</p><p>TimerTask 是一个抽象类，内部的 run 方法是一个抽象方法，因此通过对 TimerTask 扩展可以创建自定义的定时任务，只需要实现 run 方法即可：</p><p><strong>定时任务类:</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyTask</span> <span class="token keyword">extends</span> <span class="token class-name">TimerTask</span><span class="token punctuation">{</span>

	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;任务执行。。。&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>测试类：</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestTimer</span> <span class="token punctuation">{</span>

	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>

		<span class="token comment">//1秒 = 1000毫秒</span>
		<span class="token comment">//创建一个定时器</span>
		<span class="token class-name">Timer</span> t <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Timer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//多态</span>
		t<span class="token punctuation">.</span><span class="token function">schedule</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">MyTask</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">5000</span><span class="token punctuation">,</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另外如果定时任务只在某个固定的位置使用，可以无需创建具体类进行继承；此时可以考虑使用<strong>匿名内部类</strong>实现：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Timer</span> t <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Timer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

t<span class="token punctuation">.</span><span class="token function">schedule</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">TimerTask</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">LocalDateTime</span><span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">3000</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>以上代码表示等待 3 秒执行任务，之后每隔 0.5 秒执行一次</p></blockquote>`,46);function b(y,g){const a=c("router-link");return o(),l("div",null,[r,n("nav",v,[n("ul",null,[n("li",null,[t(a,{to:"#内部类"},{default:e(()=>[s("内部类")]),_:1}),n("ul",null,[n("li",null,[t(a,{to:"#内部类的好处"},{default:e(()=>[s("内部类的好处")]),_:1})]),n("li",null,[t(a,{to:"#成员内部类"},{default:e(()=>[s("成员内部类")]),_:1})]),n("li",null,[t(a,{to:"#局部内部类"},{default:e(()=>[s("局部内部类")]),_:1})]),n("li",null,[t(a,{to:"#静态内部类"},{default:e(()=>[s("静态内部类")]),_:1})]),n("li",null,[t(a,{to:"#匿名内部类"},{default:e(()=>[s("匿名内部类")]),_:1})]),n("li",null,[t(a,{to:"#接口的匿名内部类使用"},{default:e(()=>[s("接口的匿名内部类使用")]),_:1})])])]),n("li",null,[t(a,{to:"#timer-timertask"},{default:e(()=>[s("Timer&TimerTask")]),_:1})])])]),m])}const h=p(k,[["render",b],["__file","index.html.vue"]]);export{h as default};
