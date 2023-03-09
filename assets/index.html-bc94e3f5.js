import{_ as p,M as c,p as o,q as l,R as n,N as t,V as e,t as s,a1 as i}from"./framework-bcfb0e46.js";const u="/MyBlog/assets/1604827494121-ef2e37e9.png",d={},r=n("h1",{id:"_04-面向对象程序设计-继承-2",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_04-面向对象程序设计-继承-2","aria-hidden":"true"},"#"),s(" 04 - 面向对象程序设计 - 继承 2 🍯")],-1),k={class:"table-of-contents"},v=i(`<h2 id="继承知识点汇总" tabindex="-1"><a class="header-anchor" href="#继承知识点汇总" aria-hidden="true">#</a> 继承知识点汇总</h2><ul><li>继承使用 extends 关键字</li><li>子类继承父类之后，子类可以直接使用父类中非私有的元素，并且子类中也能定义自己的元素</li><li>一个类只能继承一个父类</li><li>一个类可以存在多个子类</li><li>继承关系的构造中，创建子类对象时先调用父类的构造器</li><li>Java 中允许多重继承</li></ul><h2 id="模拟-arraylist-实现-动态数组" tabindex="-1"><a class="header-anchor" href="#模拟-arraylist-实现-动态数组" aria-hidden="true">#</a> 模拟 ArrayList 实现（动态数组）</h2><p>Java 中 ArrayList 的实现是基于数组+数组拷贝完成</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyArrayList</span> <span class="token punctuation">{</span>

	<span class="token doc-comment comment">/**用于存储数据的真实数组*/</span>
	<span class="token keyword">private</span> <span class="token class-name">Goods</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr<span class="token punctuation">;</span>
	<span class="token doc-comment comment">/**数组中元素目前的索引位置*/</span>
	<span class="token keyword">private</span> <span class="token keyword">int</span> index<span class="token punctuation">;</span>

	<span class="token doc-comment comment">/**
	 * 构造一个初始容量为5的数组
	 */</span>
	<span class="token keyword">public</span> <span class="token class-name">MyArrayList</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		arr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Goods</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token doc-comment comment">/**
	 * 构造一个指定长度的数组
	 * <span class="token keyword">@param</span> <span class="token parameter">capacity</span>
	 */</span>
	<span class="token keyword">public</span> <span class="token class-name">MyArrayList</span><span class="token punctuation">(</span><span class="token keyword">int</span> capacity<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		arr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Goods</span><span class="token punctuation">[</span>capacity<span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token doc-comment comment">/**
	 * 添加元素
	 * <span class="token keyword">@param</span> <span class="token parameter">g</span>
	 */</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token class-name">Goods</span> g<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">//检测容量是否足够</span>
		<span class="token function">ensureCapacity</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		arr<span class="token punctuation">[</span>index<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> g<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token doc-comment comment">/**
	 * 确认容量是否足够
	 */</span>
	<span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">ensureCapacity</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>index <span class="token operator">&gt;=</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">//容量超出</span>
			<span class="token function">grow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token doc-comment comment">/**
	 * 容量增长
	 */</span>

	<span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">grow</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">//获取原数组的长度</span>
		<span class="token keyword">int</span> len <span class="token operator">=</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
		<span class="token comment">//创建临时的数长度为原始数组的1.5倍</span>
		<span class="token class-name">Goods</span><span class="token punctuation">[</span><span class="token punctuation">]</span> temp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Goods</span><span class="token punctuation">[</span>len <span class="token operator">+</span> <span class="token punctuation">(</span>len <span class="token operator">&gt;&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token comment">//数组拷贝</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">arraycopy</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> temp<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> len<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">//将原数组的指针指向新数组地址</span>
		arr <span class="token operator">=</span> temp<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>


	<span class="token doc-comment comment">/**
	 * 获取指定位置的元素
	 * <span class="token keyword">@param</span> <span class="token parameter">i</span>
	 * <span class="token keyword">@return</span>
	 */</span>
	<span class="token keyword">public</span> <span class="token class-name">Goods</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token doc-comment comment">/**
	 * 返回元素的总个数
	 * <span class="token keyword">@return</span>
	 */</span>
	<span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> index<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token doc-comment comment">/**
	 * 移除元素
	 * <span class="token keyword">@param</span> <span class="token parameter">i</span>
	 */</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">remove</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">arraycopy</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span> arr<span class="token punctuation">,</span> i<span class="token punctuation">,</span> arr<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		index<span class="token operator">--</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="重写-override-与重载-overload" tabindex="-1"><a class="header-anchor" href="#重写-override-与重载-overload" aria-hidden="true">#</a> 重写(override)与重载(overload)</h2><p>Java 中允许方法的重写和重载，重写和重载是<strong>多态</strong>的一种实现策略：</p><ul><li>重载（overload）：一个类中存在多个同名的方法</li><li>重写（override）：一个子类对父类的方法覆盖</li></ul><h3 id="重写" tabindex="-1"><a class="header-anchor" href="#重写" aria-hidden="true">#</a> 重写</h3><p>​ 当父类中的方法实现满足不了子类需求时，此时子类中可以编写一个与父类方法一模一样的方法，对父类的方法进行覆盖，该过程称之为方法的重写（Override）.</p><p>案例：</p><p><strong>Animal 类</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>

	<span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>

	<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> name<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setName</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

    <span class="token comment">//动物咆哮（不同的动物发出的叫声一样，因此无法一概而论）</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">bark</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>name <span class="token operator">+</span> <span class="token string">&quot;哇哇哇哇啊啊...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Dog 类</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Dog</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span><span class="token punctuation">{</span>
	<span class="token comment">//对bark方法重写</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">bark</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;汪汪汪。。。&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Cat 类</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Cat</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span><span class="token punctuation">{</span>
	<span class="token comment">//对bark方法重写</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">bark</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;喵喵喵。。。&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>方法重写注意事项：</p><ol><li>重写必须存在继承关系，一般是由子类重写父类方法</li><li>被重写的方法名称，返回值类型，参数列表必须跟父类方法一模一样</li><li>子类重写的方法访问权限不能低于父类</li></ol></blockquote><h3 id="重载" tabindex="-1"><a class="header-anchor" href="#重载" aria-hidden="true">#</a> 重载</h3><p>​ 重载指的是在同一个类中，或者存在继承关系的多个类中，存在同名的方法，这些方法的名称一模一样，但是方法的参数个数 ，类型，顺序任意有一项不一致，具备以上特点的方法统一称之为重载方法。</p><p><strong>重载的条件:</strong></p><ol><li>方法名称必须一致</li><li>参数的个数、顺序和类型任意有一项不一致</li><li>重载与返回值无关</li></ol><p>案例：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;helloworld&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token char">&#39;a&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token number">3.14</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>自定义重载方法：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Driver</span> <span class="token punctuation">{</span>

	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">driven</span><span class="token punctuation">(</span><span class="token class-name">Car</span> c<span class="token punctuation">)</span> <span class="token punctuation">{</span>

	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">driven</span><span class="token punctuation">(</span><span class="token class-name">Bus</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>

	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">driven</span><span class="token punctuation">(</span><span class="token class-name">Bike</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>

	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">driven</span><span class="token punctuation">(</span><span class="token class-name">Plane</span> p<span class="token punctuation">)</span> <span class="token punctuation">{</span>

	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>关于方法的重载和重写的区别？</strong></p><ol><li>重写必须存在继承关系，由子类重写父类的方法，重载无要求</li><li>重写的方法名称，参数类型必须和父类一致；重载必须要保证方法的参数列表任意有一项不一致</li><li>重载与返回值无关</li></ol></blockquote><h4 id="object-类-祖宗类" tabindex="-1"><a class="header-anchor" href="#object-类-祖宗类" aria-hidden="true">#</a> Object 类(祖宗类)</h4><h5 id="object-类" tabindex="-1"><a class="header-anchor" href="#object-类" aria-hidden="true">#</a> Object 类</h5><p>Object 类在 Java 中作为所有类的顶层父类，Java 中的继承允许多重继承，即一个类可以存在多个间接的父类，最终会从 java.lang.Object 继承</p><h4 id="tostring" tabindex="-1"><a class="header-anchor" href="#tostring" aria-hidden="true">#</a> toString</h4><p>toString 是 Object 类中的一个方法，默认的实现如下:</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;@&quot;</span> <span class="token operator">+</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">toHexString</span><span class="token punctuation">(</span><span class="token function">hashCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过对 toString 的重写可以实现对象的不同输出信息:</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Override</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&quot;User [name=&quot;</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token string">&quot;, pwd=&quot;</span> <span class="token operator">+</span> pwd <span class="token operator">+</span> <span class="token string">&quot;]&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="equals" tabindex="-1"><a class="header-anchor" href="#equals" aria-hidden="true">#</a> == &amp; equals</h4><p>==在 Java 中一般用于对基本类型数据进行值的比较，如果两个值一致的结果为 true，反之为 false;但是，==在比较引用类型数据时比较的是对象的内存地址（不是对象中的具体数据），如下图:</p><p><img src="`+u+`" alt="1604827494121"></p><p>通过以上的图形展示，明显能够发现，new 的两个对象地址是不一样的，因此使用<code>==</code>判断结果必然是 false;</p><p>另外 Java 中的 Object 类提供一个用于进行对象比较的方法<code>equals</code>，但是 equals 的默认实现是直接使用的<code>==</code>判断；不过可以通过对 equals 方法进行重写，达到对象数据比较的目的，比如：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">equals</span><span class="token punctuation">(</span><span class="token class-name">Object</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token operator">==</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>obj <span class="token keyword">instanceof</span> <span class="token class-name">User</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">User</span> u <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">User</span><span class="token punctuation">)</span>obj<span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>u<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>pwd<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>u<span class="token punctuation">.</span><span class="token function">getPwd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上程序是对 equals 方法的重写，通过比较对象中的属性值来确定是否为同一个对象。</p><blockquote><p>关于重写 equals 的注意事项：</p><p>通常在 <strong>重写 equals 的时候也要求必须对 hashcode 重写</strong>；如果只是重写 equals 只能从逻辑上认为对象一致，实际上在内存中对象的地址依然是不同的，因此在后续比如集合排序，对象比较的时候可能造成错误结果。</p></blockquote><h4 id="instanceof-运算符" tabindex="-1"><a class="header-anchor" href="#instanceof-运算符" aria-hidden="true">#</a> instanceof 运算符</h4><p>instanceof 运算符用于对目标对象判断，判断是否为指定的类型，用法如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>引用变量 instanceof 引用数据类型
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>案例</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//判断obj 是否是一个User类型</span>
<span class="token keyword">if</span><span class="token punctuation">(</span>obj <span class="token keyword">instanceof</span> <span class="token class-name">User</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>instanceof 运算符的运算结果为 boolean 类型</p>`,49);function m(b,y){const a=c("router-link");return o(),l("div",null,[r,n("nav",k,[n("ul",null,[n("li",null,[t(a,{to:"#继承知识点汇总"},{default:e(()=>[s("继承知识点汇总")]),_:1})]),n("li",null,[t(a,{to:"#模拟-arraylist-实现-动态数组"},{default:e(()=>[s("模拟 ArrayList 实现（动态数组）")]),_:1})]),n("li",null,[t(a,{to:"#重写-override-与重载-overload"},{default:e(()=>[s("重写(override)与重载(overload)")]),_:1}),n("ul",null,[n("li",null,[t(a,{to:"#重写"},{default:e(()=>[s("重写")]),_:1})]),n("li",null,[t(a,{to:"#重载"},{default:e(()=>[s("重载")]),_:1})])])])])]),v])}const w=p(d,[["render",m],["__file","index.html.vue"]]);export{w as default};
