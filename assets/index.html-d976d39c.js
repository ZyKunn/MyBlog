import{_ as p,r as l,o as i,c,a as n,e,w as t,b as s,d as o}from"./app-a153c100.js";const u="/MyBlog/assets/1604558621975-b681586c.png",d={},r=n("h1",{id:"_03-面向对象程序设计-继承",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_03-面向对象程序设计-继承","aria-hidden":"true"},"#"),s(" 03 - 面向对象程序设计-继承 🍩")],-1),k={class:"table-of-contents"},v=o(`<h2 id="类之间关系-软件工程与统一建模语言-uml" tabindex="-1"><a class="header-anchor" href="#类之间关系-软件工程与统一建模语言-uml" aria-hidden="true">#</a> 类之间关系(软件工程与统一建模语言 UML)</h2><p>面向对象设计语言中，类和类之间是存在一定关系的，从关系角度考虑，分为两种：</p><ul><li>横向关系（平级）</li><li>纵向关系（上下级）</li></ul><h3 id="横向关系" tabindex="-1"><a class="header-anchor" href="#横向关系" aria-hidden="true">#</a> 横向关系</h3><p>横向关系一般表示为多个类之间是同一级别，横向关系又分为以下几类</p><ol><li><p><strong>依赖关系</strong></p><p>依赖关系表示为一个类的方法中需要另一个类型对象作为参数</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Cat</span><span class="token punctuation">{</span>

    <span class="token comment">//依赖关系的代码表现方式</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">catchMouse</span><span class="token punctuation">(</span><span class="token class-name">Mouse</span> m<span class="token punctuation">)</span> <span class="token punctuation">{</span>

       <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>关联关系</strong></p></li><li><p><strong>聚合关系</strong></p></li><li><p><strong>组合关系</strong></p><p>关联，聚合，组合三种关系在代码的表现形式上是相同，只是存在语义上的区别，主要区别为类和类之间的紧密程度；代码层面的表现方式是在一个类中将另一个类型对象作为属性定义。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Dept</span><span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">int</span> dno<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> dname<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> tel<span class="token punctuation">;</span>

    <span class="token comment">//setter/getter ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Emp</span><span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">int</span> eno<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> ename<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">double</span> sal<span class="token punctuation">;</span>
    <span class="token comment">//员工关联部门</span>
    <span class="token keyword">private</span> <span class="token class-name">Dept</span> dept<span class="token punctuation">;</span>

    <span class="token comment">//setter/getter ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>典型的关联关系实例:</strong></p><ul><li>学生选课系统类设计</li></ul><p><img src="`+u+`" alt="1604558621975"></p></li></ol><h3 id="纵向关系" tabindex="-1"><a class="header-anchor" href="#纵向关系" aria-hidden="true">#</a> 纵向关系</h3><p>纵向关系是一种上下级的关系，表现方式在 java 中通常以以下两种形式呈现：</p><ol><li><strong>继承（extends）</strong></li><li>实现（implements）</li></ol><h2 id="继承-extends" tabindex="-1"><a class="header-anchor" href="#继承-extends" aria-hidden="true">#</a> 继承（extends）</h2><p>​ 继承是面向对象程序设计中另一个重要的特征，继承即由一个类从另一个通过 extends 关键字继承，被继承的类称之为父类(也叫超类)，继承的类称之为子类（扩展类）；继承可以使得类的<strong>扩展性提高</strong>，<strong>减少重复代码</strong>的编写。</p><p>语法：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[&lt;修饰符&gt;] class 子类 extends 父类 {

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实例:</p><p><strong>父类 Father：</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Father</span> <span class="token punctuation">{</span>

	<span class="token keyword">public</span> <span class="token class-name">String</span> name <span class="token punctuation">;</span>
	<span class="token keyword">public</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>

	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">coding</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>name <span class="token operator">+</span> <span class="token string">&quot;超级会写代码&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">love</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;情场高手!!!!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>子类 Son:</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Son</span> <span class="token keyword">extends</span> <span class="token class-name">Father</span><span class="token punctuation">{</span>


	<span class="token comment">//通过代码表现：动物 猫 老鼠之间的关系</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">Son</span> s <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Son</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		s<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;刘德华&quot;</span><span class="token punctuation">;</span>
		s<span class="token punctuation">.</span><span class="token function">coding</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		s<span class="token punctuation">.</span><span class="token function">love</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="继承优点" tabindex="-1"><a class="header-anchor" href="#继承优点" aria-hidden="true">#</a> 继承优点</h3><ol><li>子类可以直接通过对象调用父类中的非私有元素</li><li>子类还可以在父类的基础上扩展新的功能</li></ol><h3 id="继承注意事项" tabindex="-1"><a class="header-anchor" href="#继承注意事项" aria-hidden="true">#</a> 继承注意事项</h3><ul><li>子类只能继承父类的属性和方法，不能继承构造器</li><li>子类对象构造之前会先执行父类的构造器（<code>如果存在多重继承，则从最顶层父类构造器开始执行</code>）</li><li>一个父类可以存在多个子类，但是一个子类只能存在一个父类</li><li>Java 不允许多继承，但是支持多重继承</li><li>被 protected 修饰的元素可以在子类中被访问（即便父类和子类不在同一个包）</li></ul><h2 id="super-关键字" tabindex="-1"><a class="header-anchor" href="#super-关键字" aria-hidden="true">#</a> super 关键字</h2><p>super 关键字用于在子类中调用父类的元素:</p><ul><li>构造器</li><li>属性</li><li>方法</li></ul><p>使用案例:</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>

    <span class="token class-name">String</span> name <span class="token operator">=</span> <span class="token string">&quot;旺财&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">double</span> weight <span class="token operator">=</span> <span class="token number">10</span> <span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Animal</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//		this.name = name;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;动物进食&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">bark</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;咆哮&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Dog</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span><span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//调用父类构造器</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">play</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//调用父类方法</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">bark</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">//调用父类属性</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;我叫：&quot;</span> <span class="token operator">+</span> <span class="token keyword">super</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Dog</span> d <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token string">&quot;来福&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        d<span class="token punctuation">.</span><span class="token function">play</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="练习" tabindex="-1"><a class="header-anchor" href="#练习" aria-hidden="true">#</a> 练习</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/*
* 完成一个电商系统的商品库存管理，包含两个类：
* 1. 商品类（编号，名称，类别，单价，库存量，生产地）
* 2. 商品管理类
*  要求在管理类中完成如下功能:
*  1. 商品添加
*  2. 查询指定价格范围的商品并显示
*  3. 根据编号查询商品信息并显示
*  4. 根据编号修改商品的单价和库存
*  5. 显示所有商品信息
*  6. 查询所有库存量低于指定数的商品信息
*  7. 将指定id商品删除
*  8. 删除所有库存为0的商品
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,30);function m(b,g){const a=l("router-link");return i(),c("div",null,[r,n("nav",k,[n("ul",null,[n("li",null,[e(a,{to:"#类之间关系-软件工程与统一建模语言-uml"},{default:t(()=>[s("类之间关系(软件工程与统一建模语言 UML)")]),_:1}),n("ul",null,[n("li",null,[e(a,{to:"#横向关系"},{default:t(()=>[s("横向关系")]),_:1})]),n("li",null,[e(a,{to:"#纵向关系"},{default:t(()=>[s("纵向关系")]),_:1})])])]),n("li",null,[e(a,{to:"#继承-extends"},{default:t(()=>[s("继承（extends）")]),_:1}),n("ul",null,[n("li",null,[e(a,{to:"#继承优点"},{default:t(()=>[s("继承优点")]),_:1})]),n("li",null,[e(a,{to:"#继承注意事项"},{default:t(()=>[s("继承注意事项")]),_:1})])])]),n("li",null,[e(a,{to:"#super-关键字"},{default:t(()=>[s("super 关键字")]),_:1})]),n("li",null,[e(a,{to:"#练习"},{default:t(()=>[s("练习")]),_:1})])])]),v])}const y=p(d,[["render",m],["__file","index.html.vue"]]);export{y as default};
