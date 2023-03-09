import{_ as p,M as i,p as l,q as c,R as n,N as e,V as t,t as s,a1 as o}from"./framework-bcfb0e46.js";const u={},d=n("h1",{id:"_07-面向对象程序设计-抽象类-接口",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_07-面向对象程序设计-抽象类-接口","aria-hidden":"true"},"#"),s(" 07 - 面向对象程序设计(抽象类&接口)🦑")],-1),r={class:"table-of-contents"},k=o(`<h2 id="抽象类-abstract-class" tabindex="-1"><a class="header-anchor" href="#抽象类-abstract-class" aria-hidden="true">#</a> 抽象类（abstract class）</h2><p>java 中凡是普通类都具备实例化对象的能力，因为一个类具备了实例化对象的一些必要信息，比如属性，比如行为；但是有些时候，当一个类中信息不足以描述一个具体对象时，此时该类就应该考虑定义为抽象类。</p><p>java 中的抽象类中所包含的信息，不足以描述一个具体对象，抽象类的内部成分由以下信息构成:</p><ul><li>属性</li><li>构造器</li><li>行为 <ul><li>已实现</li><li>未实现（抽象方法）</li></ul></li></ul><h3 id="抽象类基本案例" tabindex="-1"><a class="header-anchor" href="#抽象类基本案例" aria-hidden="true">#</a> 抽象类基本案例</h3><h4 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public abstract class 类名称{

    //属性定义
    //方法定义

    //抽象方法定义
    public abstract 返回值类型 方法名(参数列表);

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>案例:</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 	抽象类
 * <span class="token keyword">@author</span> mrchai
 */</span>
<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>

	<span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>

	<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> name<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setName</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">//抽象方法</span>
	<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">sleep</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Dog 类:</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Dog</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span><span class="token punctuation">{</span>

    <span class="token comment">//实现方法</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;吃骨头&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token comment">//实现方法</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">sleep</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;睡狗屋&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="特点" tabindex="-1"><a class="header-anchor" href="#特点" aria-hidden="true">#</a> 特点</h4><ol><li>抽象类必须使用 abstract 修饰</li><li>抽象类存在构造器，但是无法实例化（可以使用匿名内部类创建子类对象）</li><li>抽象类中通常会包含抽象方法</li><li>抽象类的存在一般是需要由子类继承，子类一旦继承了抽象类，则子类必须实现父类中的抽象方法（除非子类也是抽象类）</li><li>抽象类允许继承其他抽象类，但是也只能单继承，可以通过多重继承的方式实现多继承</li><li>abstract 只能修饰类和方法</li></ol><h3 id="设计模式之模板方法-template-method" tabindex="-1"><a class="header-anchor" href="#设计模式之模板方法-template-method" aria-hidden="true">#</a> 设计模式之模板方法（Template Method）</h3><p>模板方法指的是对某些方法实现，另外对于一些方法定义为抽象，在实现方法中调用未实现的方法（定义好算法的骨架，具体实现由子类完成）</p><p>例如：银行计算利息，都是利率乘以本金和存款时间，但各种存款方式计算利率的方式不同，所以，在账户这个类的相关方法里，只搭出算法的骨架，但不具体实现。具体实现由各个子类来完成。</p><p><strong>账户类(Account.java):</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Account</span> <span class="token punctuation">{</span>

    <span class="token comment">//本金</span>
    <span class="token keyword">private</span> <span class="token keyword">double</span> money<span class="token punctuation">;</span>
    <span class="token comment">//利息</span>
    <span class="token keyword">private</span> <span class="token keyword">double</span> interest<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">double</span> <span class="token function">getMoney</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> money<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setMoney</span><span class="token punctuation">(</span><span class="token keyword">double</span> money<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>money <span class="token operator">=</span> money<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//定义好算法的实现骨架</span>
    <span class="token keyword">public</span> <span class="token keyword">double</span> <span class="token function">getInterest</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> money <span class="token operator">*</span> <span class="token function">getInterestRate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setInterest</span><span class="token punctuation">(</span><span class="token keyword">double</span> interest<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>interest <span class="token operator">=</span> interest<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
	 * 	返回利率
	 * <span class="token keyword">@param</span> <span class="token parameter">time</span>
	 * <span class="token keyword">@return</span>
	 */</span>
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">double</span> <span class="token function">getInterestRate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>活期账户类（ActiveAccount.java）</strong>:</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 	活期账户
 * <span class="token keyword">@author</span> mrchai
 *
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ActiveAccount</span> <span class="token keyword">extends</span> <span class="token class-name">Account</span><span class="token punctuation">{</span>

    <span class="token comment">//总存款月数</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> month<span class="token punctuation">;</span>
    <span class="token comment">//基础利率</span>
    <span class="token keyword">private</span> <span class="token keyword">double</span> base<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">ActiveAccount</span><span class="token punctuation">(</span><span class="token keyword">int</span> month<span class="token punctuation">,</span><span class="token keyword">double</span> base<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>month <span class="token operator">=</span> month<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>base <span class="token operator">=</span> base<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">double</span> <span class="token function">getInterestRate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> month <span class="token operator">*</span> base<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>定期账户类（FixedAccount.java）:</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 	定期账户
 * <span class="token keyword">@author</span> mrchai
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FixedAccount</span> <span class="token keyword">extends</span> <span class="token class-name">Account</span><span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">int</span> year<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">double</span> base<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">FixedAccount</span><span class="token punctuation">(</span><span class="token keyword">int</span> year<span class="token punctuation">,</span> <span class="token keyword">double</span> base<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>year <span class="token operator">=</span> year<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>base <span class="token operator">=</span> base<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">double</span> <span class="token function">getInterestRate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> year <span class="token operator">*</span> base <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>测试类:</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestAccount</span> <span class="token punctuation">{</span>

	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>

		<span class="token class-name">ActiveAccount</span> a1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ActiveAccount</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">0.0001</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		a1<span class="token punctuation">.</span><span class="token function">setMoney</span><span class="token punctuation">(</span><span class="token number">50000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token class-name">FixedAccount</span> a2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FixedAccount</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">0.03</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		a2<span class="token punctuation">.</span><span class="token function">setMoney</span><span class="token punctuation">(</span><span class="token number">50000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>a1<span class="token punctuation">.</span><span class="token function">getInterest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>a2<span class="token punctuation">.</span><span class="token function">getInterest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="接口-interface" tabindex="-1"><a class="header-anchor" href="#接口-interface" aria-hidden="true">#</a> 接口（interface）</h2><p>接口是一种比抽象类更纯粹的抽象；因为内部只能够存在<strong>常量</strong>以及<strong>未实现的方法</strong>（JDK8 以前），接口通常用于定义一些<strong>未实现方法的集合</strong>，但是不对法方法具体实现，具体的实现通常是由实现类完成，接口具备以下特征：</p><ul><li>接口不存在构造器，因此无法实例化</li><li>接口允许继承接口，可以同时继承多个接口</li><li>一个类可以实现多个接口，但是必须要同时实现所有接口的方法（除非抽象类）</li><li>抽象类也实现接口</li><li><strong>JDK8 中对接口有其他新增特性（默认方法，静态方法，函数式接口）</strong></li></ul><h3 id="语法-1" tabindex="-1"><a class="header-anchor" href="#语法-1" aria-hidden="true">#</a> 语法</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public interface 接口名称{
    //常量定义

    //方法的声明（不含实现）
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 	接口即标准
 *  USB接口：只是一种标准的定义，不包含具体实现
 *  	一流的公司定义标准  做架构
 * 		二流的公司卖服务      写框架
 * 		三流的公司卖产品     写CRUD
 *
 * 	定义一个接口
 * <span class="token keyword">@author</span> mrchai
 */</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Flyable</span> <span class="token punctuation">{</span>

	<span class="token comment">//默认编译器会将以下代码完善成: public static final String msg = &quot;hello&quot;;</span>
	<span class="token class-name">String</span> msg <span class="token operator">=</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">;</span>

	<span class="token comment">//编译器会将以下代码自动完善：public abstract void fly()</span>
	<span class="token keyword">void</span> <span class="token function">fly</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="抽象类和接口区别" tabindex="-1"><a class="header-anchor" href="#抽象类和接口区别" aria-hidden="true">#</a> 抽象类和接口区别</h3><ul><li>抽象类是一种类结构，接口是一种行为准则</li><li>抽象类中包含类的所有特征，同时包含抽象方法；接口只能有常量和未实现的方法</li><li>抽象类由子类通过 extends 进行扩展；接口由实现类通过 implements 扩展</li><li>子类只能继承一个抽象类；一个类可以实现多个接口</li><li>抽象类能且只能继承一个父类；接口可以继承多个接口，接口不能继承任何类</li><li><strong>抽象类是对类(名词)的一种抽象；接口是对行为(动词，形容词)的抽象，接口是一种特殊的抽象类</strong></li></ul><h2 id="多态详解-polymorphism" tabindex="-1"><a class="header-anchor" href="#多态详解-polymorphism" aria-hidden="true">#</a> 多态详解（polymorphism）</h2><p>多态的体现包含两种层面：</p><ol><li>方法层面（重写和重载）</li><li>属性层面 <ol><li>父类引用指向子类对象</li><li>子类引用指向父类对象（原本就是子类）</li></ol></li></ol><p>多态也称之为<strong>动态绑定</strong>：在运行期间动态为引用变量绑定具体的对象数据</p>`,36);function v(m,b){const a=i("router-link");return l(),c("div",null,[d,n("nav",r,[n("ul",null,[n("li",null,[e(a,{to:"#抽象类-abstract-class"},{default:t(()=>[s("抽象类（abstract class）")]),_:1}),n("ul",null,[n("li",null,[e(a,{to:"#抽象类基本案例"},{default:t(()=>[s("抽象类基本案例")]),_:1})]),n("li",null,[e(a,{to:"#设计模式之模板方法-template-method"},{default:t(()=>[s("设计模式之模板方法（Template Method）")]),_:1})])])]),n("li",null,[e(a,{to:"#接口-interface"},{default:t(()=>[s("接口（interface）")]),_:1}),n("ul",null,[n("li",null,[e(a,{to:"#语法-1"},{default:t(()=>[s("语法")]),_:1})]),n("li",null,[e(a,{to:"#抽象类和接口区别"},{default:t(()=>[s("抽象类和接口区别")]),_:1})])])]),n("li",null,[e(a,{to:"#多态详解-polymorphism"},{default:t(()=>[s("多态详解（polymorphism）")]),_:1})])])]),k])}const h=p(u,[["render",v],["__file","index.html.vue"]]);export{h as default};
