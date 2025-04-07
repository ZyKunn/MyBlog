import{_ as i,r as p,o as l,c as u,a as n,e as a,w as e,b as s,d as o}from"./app-116bd22d.js";const d={},k=n("h1",{id:"📛java-自定义注解",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#📛java-自定义注解","aria-hidden":"true"},"#"),s(" 📛Java 自定义注解")],-1),r=n("hr",null,null,-1),v={class:"table-of-contents"},m=o('<h2 id="一、注解的概念" tabindex="-1"><a class="header-anchor" href="#一、注解的概念" aria-hidden="true">#</a> 一、注解的概念</h2><h4 id="_1-注解的概念" tabindex="-1"><a class="header-anchor" href="#_1-注解的概念" aria-hidden="true">#</a> 1.注解的概念</h4><ol><li>注解是一种元数据形式。即注解是属于 java 的一种数据类型，和类、接口、数组、枚举类似。</li><li>注解用来修饰，类、方法、变量、参数、包。</li><li>注解不会对所修饰的代码产生直接的影响。</li></ol><h4 id="_2-注解的使用范围" tabindex="-1"><a class="header-anchor" href="#_2-注解的使用范围" aria-hidden="true">#</a> 2.注解的使用范围</h4><blockquote><p>注解又许多用法，其中有：<strong>为编译器提供信息</strong> - 注解能被编译器检测到错误或抑制警告。<strong>编译时和部署时的处理</strong> - 软件工具能处理注解信息从而生成代码，XML 文件等等。<strong>运行时的处理</strong> - 有些注解在运行时能被检测到。</p></blockquote><h2 id="二、如何自定义注解" tabindex="-1"><a class="header-anchor" href="#二、如何自定义注解" aria-hidden="true">#</a> 二、如何自定义注解</h2><p><strong>注解其实就是一种标记，可以在程序代码中的关键节点（类、方法、变量、参数、包）上打上这些标记，然后程序在编译时或运行时可以检测到这些标记从而执行一些特殊操作。因此可以得出自定义注解使用的基本流程：</strong></p><p>第一步，定义注解——相当于定义标记； 第二步，配置注解——把标记打在需要用到的程序代码中； 第三步，解析注解——在编译期或运行时检测到标记，并进行特殊操作。</p><h4 id="_1-注解的基本语法" tabindex="-1"><a class="header-anchor" href="#_1-注解的基本语法" aria-hidden="true">#</a> 1.注解的基本语法</h4><p><strong>注解类型的声明部分：</strong></p>',10),b={href:"https://so.csdn.net/so/search?q=%E6%9E%9A%E4%B8%BE%E7%B1%BB&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"},g=n("strong",null,[s("注解使用"),n("code",null,"@interface关键字来声明")],-1),h=n("strong",null,"在底层实现上，所有定义的注解都会自动继承 java.lang.annotation.Annotation 接口",-1),f=o(`<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">Information</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注解类型的实现部分：</strong></p><p>根据我们日常定义类或接口的经验，在类中无非是要定义构造方法、属性或一般方法。但是，在自定义注解中，其实现部分<strong>只能定义</strong>一个东西：<strong>注解类型元素（annotation type element）</strong>。基本语法如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">Information</span> <span class="token punctuation">{</span>

    <span class="token class-name">String</span> <span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">int</span> <span class="token function">age</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">hobbies</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">String</span> <span class="token function">address</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>根据上面定义的属性，我们可以发现这种定义的内容类似抽象方法，实际上这是一种规定的<strong>注解类型元素</strong>。</p><p><strong>注解类型元素允许我们设置默认值，如果不设置则在后续使用注解时候，必须填写对应的属性值。</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">Information</span> <span class="token punctuation">{</span>

    <span class="token class-name">String</span> <span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">int</span> <span class="token function">age</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">hobbies</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">String</span> <span class="token function">address</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token string">&quot;中国&quot;</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><h4 id="定义注解类型元素时需要注意如下几点" tabindex="-1"><a class="header-anchor" href="#定义注解类型元素时需要注意如下几点" aria-hidden="true">#</a> 定义注解类型元素时需要注意如下几点：</h4><p><strong>1.访问修饰符必须为 public，不写默认为 public；</strong></p><p><strong>2.该元素的类型只能是基本数据类型、String、Class、枚举类型、注解类型（体现了注解的嵌套效果）以及上述类型的一位数组；</strong></p><p><strong>3.该元素的名称一般定义为名词，如果注解中只有一个元素，请把名字起为 value（后面使用会带来便利操作）；</strong></p><p><strong>4.()不是定义方法参数的地方，也不能在括号中定义任何参数，仅仅只是一个特殊的语法；</strong></p><p><strong>5.default 代表默认值，值必须和第 2 点定义的类型一致；</strong></p><p><strong>6.如果没有默认值，代表后续使用注解时必须给该类型元素赋值。</strong></p></blockquote><p>可以看出，注解类型元素的语法非常奇怪，即又有属性的特征（可以赋值）,又有方法的特征（打上了一对括号）。但是这么设计是有道理的，<strong>在后续的代码示例中我们可以看到：注解在定义好了以后，使用的时候操作元素类型像在操作属性，解析的时候操作元素类型像在操作方法。</strong></p><h4 id="_2-元注解" tabindex="-1"><a class="header-anchor" href="#_2-元注解" aria-hidden="true">#</a> 2.元注解</h4><p>一个最基本的注解定义就只包括了上面的两部分内容：1、注解的名字；2、注解包含的类型元素。但是，我们在使用 JDK 自带注解的时候发现，有些注解只能写在方法上面（比如@Override）；有些却可以写在类的上面（比如@Deprecated）。当然除此以外还有很多细节性的定义，那么这些定义该如何做呢？这些限定就是通过元注解来实现的。 <strong>元注解：专门修饰注解的注解。它们都是为了更好的设计自定义注解的细节而专门设计的。</strong></p><h4 id="_1-target" tabindex="-1"><a class="header-anchor" href="#_1-target" aria-hidden="true">#</a> <strong>（1）</strong>@Target</h4><p>@Target 注解，是专门用来限定某个自定义注解能够被应用在哪些 Java 元素上面的。它使用一个枚举类型定义如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">enum</span> <span class="token class-name">ElementType</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/** Class, interface (including annotation type), or enum declaration */</span>
    <span class="token constant">TYPE</span><span class="token punctuation">,</span>

    <span class="token doc-comment comment">/** Field declaration (includes enum constants) */</span>
    <span class="token constant">FIELD</span><span class="token punctuation">,</span>

    <span class="token doc-comment comment">/** Method declaration */</span>
    <span class="token constant">METHOD</span><span class="token punctuation">,</span>

    <span class="token doc-comment comment">/** Formal parameter declaration */</span>
    <span class="token constant">PARAMETER</span><span class="token punctuation">,</span>

    <span class="token doc-comment comment">/** Constructor declaration */</span>
    <span class="token constant">CONSTRUCTOR</span><span class="token punctuation">,</span>

    <span class="token doc-comment comment">/** Local variable declaration */</span>
    <span class="token constant">LOCAL_VARIABLE</span><span class="token punctuation">,</span>

    <span class="token doc-comment comment">/** Annotation type declaration */</span>
    <span class="token constant">ANNOTATION_TYPE</span><span class="token punctuation">,</span>

    <span class="token doc-comment comment">/** Package declaration */</span>
    <span class="token constant">PACKAGE</span><span class="token punctuation">,</span>

    <span class="token doc-comment comment">/**
     * Type parameter declaration
     *
     * <span class="token keyword">@since</span> 1.8
     */</span>
    <span class="token constant">TYPE_PARAMETER</span><span class="token punctuation">,</span>

    <span class="token doc-comment comment">/**
     * Use of a type
     *
     * <span class="token keyword">@since</span> 1.8
     */</span>
    <span class="token constant">TYPE_USE</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//限定@Information注解只能使用在类、接口或方法上面。</span>
<span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">TYPE</span><span class="token punctuation">,</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">METHOD</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">Information</span> <span class="token punctuation">{</span>

    <span class="token class-name">String</span> <span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">int</span> <span class="token function">age</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">hobbies</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">String</span> <span class="token function">address</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token string">&quot;中国&quot;</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-retention" tabindex="-1"><a class="header-anchor" href="#_2-retention" aria-hidden="true">#</a> （2）@Retention</h4><p>@Retention 注解，翻译为持久力、保持力。即用来修饰自定义注解的生命力。 注解的生命周期有三个阶段：</p><ol><li><strong>Java 源文件阶段。</strong></li><li><strong>编译到 class 文件阶段。</strong></li><li><strong>运行期阶段。</strong></li></ol><p><strong>注：只有注解信息在运行时保留，我们才能在运行时通过反射操作获取到注解信息。</strong></p><p>同样使用了 RetentionPolicy 枚举类型定义了三个阶段：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">enum</span> <span class="token class-name">RetentionPolicy</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * Annotations are to be discarded by the compiler.
     * （注解将被编译器忽略掉）
     */</span>
    <span class="token constant">SOURCE</span><span class="token punctuation">,</span>

    <span class="token doc-comment comment">/**
     * Annotations are to be recorded in the class file by the compiler
     * but need not be retained by the VM at run time.  This is the default
     * behavior.
     * （注解将被编译器记录在class文件中，但在运行时不会被虚拟机保留，这是一个默认的行为）
     */</span>
    <span class="token constant">CLASS</span><span class="token punctuation">,</span>


    <span class="token doc-comment comment">/**
     * Annotations are to be recorded in the class file by the compiler and
     * retained by the VM at run time, so they may be read reflectively.
     * （注解将被编译器记录在class文件中，而且在运行时会被虚拟机保留，因此它们能通过反射被读取到）
     * <span class="token keyword">@see</span> <span class="token reference"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>reflect<span class="token punctuation">.</span></span><span class="token class-name">AnnotatedElement</span></span>
     */</span>
    <span class="token constant">RUNTIME</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>我们再详解一下四种 Retention 的配置：</strong></p><p>1.如果一个注解被定义为 RetentionPolicy.SOURCE，则它将被限定在 Java 源文件中，那么这个注解即不会参与编译也不会在运行期起任何作用，这个注解就和一个注释是一样的效果，只能被阅读 Java 文件的人看到；</p><p>2.如果一个注解被定义为 RetentionPolicy.CLASS，则它将被编译到 Class 文件中，那么编译器可以在编译时根据注解做一些处理动作，但是运行时 JVM（Java 虚拟机）会忽略它，我们在运行期也不能读取到；</p><p>3.如果一个注解被定义为 RetentionPolicy.RUNTIME，那么这个注解可以在运行期的加载阶段被加载到 Class 对象中。那么在程序运行阶段，我们可以通过反射得到这个注解，并通过判断是否有这个注解或这个注解中属性的值，从而执行不同的程序代码段。</p><p>我们实际开发中的自定义注解几乎都是使用的 RetentionPolicy.RUNTIME； 4.在默认的情况下，自定义注解是使用的 RetentionPolicy.CLASS。</p></blockquote><h4 id="_3-documented" tabindex="-1"><a class="header-anchor" href="#_3-documented" aria-hidden="true">#</a> （3）@Documented</h4><p>@Documented 注解，是被用来指定自定义注解是否能随着被定义的 java 文件生成到 JavaDoc 文档当中。</p><h4 id="_4-inherited" tabindex="-1"><a class="header-anchor" href="#_4-inherited" aria-hidden="true">#</a> （4）@Inherited</h4><p>@Inherited 注解，是指定某个自定义注解如果写在了父类的声明部分，那么子类的声明部分也能自动拥有该注解，类似继承。@Inherited 注解只对那些@Target 被定义为 ElementType.TYPE 的自定义注解起作用。</p><p><strong>注：类并不从它所实现的接口继承 annotation，方法并不从它所重载的方法继承 annotation。</strong></p><h2 id="三、自定义注解的特殊语法" tabindex="-1"><a class="header-anchor" href="#三、自定义注解的特殊语法" aria-hidden="true">#</a> 三、自定义注解的特殊语法</h2><h4 id="_1-特殊语法一" tabindex="-1"><a class="header-anchor" href="#_1-特殊语法一" aria-hidden="true">#</a> 1.特殊语法一：</h4><p><strong>如果注解本身没有注解类型元素，那么在使用注解的时候可以省略()，直接写为：@注解名，它和标准语法@注解名()等效！</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span><span class="token constant">RUNTIME</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">TYPE</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Documented</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">FirstAnnotation</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//等效于@FirstAnnotation()</span>
<span class="token annotation punctuation">@FirstAnnotation</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DemoClass</span><span class="token punctuation">{</span>
	<span class="token comment">//省略实现部分</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-特殊语法二" tabindex="-1"><a class="header-anchor" href="#_2-特殊语法二" aria-hidden="true">#</a> 2. 特殊语法二：</h4><p><strong>如果注解本本身只有一个注解类型元素，而且命名为 value，那么在使用注解的时候可以直接使用：@注解名(注解值)，其等效于：@注解名(value = 注解值)。</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span><span class="token constant">RUNTIME</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">TYPE</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Documented</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">SecondAnnotation</span> <span class="token punctuation">{</span>
	<span class="token class-name">String</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//等效于@ SecondAnnotation(value = &quot;this is second annotation&quot;)</span>
<span class="token annotation punctuation">@SecondAnnotation</span><span class="token punctuation">(</span><span class="token string">&quot;this is annotation&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DemoClass</span><span class="token punctuation">{</span>
	<span class="token comment">//省略实现部分</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="特殊用法三" tabindex="-1"><a class="header-anchor" href="#特殊用法三" aria-hidden="true">#</a> 特殊用法三：</h4><p><strong>如果注解中的某个注解类型元素是一个数组类型，在使用时又出现只需要填入一个值的情况，那么在使用注解时可以直接写为：@注解名(类型名 = 类型值)，它和标准写法：@注解名(类型名 = {类型值})等效！</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span><span class="token constant">RUNTIME</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">TYPE</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Documented</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">ThirdAnnotation</span> <span class="token punctuation">{</span>
	<span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//等效于@ ThirdAnnotation(name = {&quot;this is third annotation&quot;})</span>
@ <span class="token class-name">ThirdAnnotation</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;this is third annotation&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DemoClass</span><span class="token punctuation">{</span>
	<span class="token comment">//省略实现部分</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="特殊用法四" tabindex="-1"><a class="header-anchor" href="#特殊用法四" aria-hidden="true">#</a> 特殊用法四：</h4><p><strong>如果一个注解的@Target 是定义为 Element.PACKAGE，那么这个注解是配置在 package-info.java 中的，而不能直接在某个类的 package 代码上面配置。</strong></p><h2 id="四、使用和操作注解" tabindex="-1"><a class="header-anchor" href="#四、使用和操作注解" aria-hidden="true">#</a> 四、使用和操作注解</h2><blockquote><p><strong>**先说下需求：**定义一个自定义注解，在注解上配置相关信息，用该注解标记一个方法，然后在测试类中，检测当前方法是否标记了我们自定义的注解，如果标记了，打印标记的注解内配置信息，如果没有标记，打印&quot;该方法没有使用 xxx 注解&quot;。</strong></p></blockquote><p>明确我们的需求后，前面我们说过，只有将注解的生命周期配置成运行时，即在 Runntime 时保留,才能获取注解中的相关信息。</p><p><strong>操作和使用注解 要用到 Java 中的核心技术——反射。</strong></p><p>废话少说，下面直接上代码。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * @ClassName Information
 * @Description 信息注解
 * @Author EvanWang
 * @Version 1.0.0
 * @Date 2019/11/6 14:49
 */</span>
<span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">METHOD</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span><span class="token constant">RUNTIME</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">Information</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span> <span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">int</span> <span class="token function">age</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">hobbies</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">String</span> <span class="token function">address</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token string">&quot;中国&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * @ClassName Person
 * @Description Person Pojo
 * @Author EvanWang
 * @Version 1.0.0
 * @Date 2019/11/6 17:06
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span> name<span class="token punctuation">;</span>

    <span class="token keyword">int</span> age<span class="token punctuation">;</span>

    <span class="token class-name">String</span> hobbies<span class="token punctuation">;</span>

    <span class="token class-name">String</span> address<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setName</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setAge</span><span class="token punctuation">(</span><span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getHobbies</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> hobbies<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setHobbies</span><span class="token punctuation">(</span><span class="token class-name">String</span> hobbies<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>hobbies <span class="token operator">=</span> hobbies<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getAddress</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> address<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setAddress</span><span class="token punctuation">(</span><span class="token class-name">String</span> address<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>address <span class="token operator">=</span> address<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * @ClassName PersonService
 * @Description
 * @Author EvanWang
 * @Version 1.0.0
 * @Date 2019/11/6 16:55
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PersonService</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Information</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;Evan&quot;</span><span class="token punctuation">,</span> age <span class="token operator">=</span> <span class="token number">18</span><span class="token punctuation">,</span> hobbies <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&quot;编程&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;看电影&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;踢足球&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">outputPersonInfo</span><span class="token punctuation">(</span><span class="token class-name">Person</span> person<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> outputStr <span class="token operator">=</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&quot;我是%s,我来自%s,今年%s岁，我的爱好是%s。&quot;</span><span class="token punctuation">,</span>
                person<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                person<span class="token punctuation">.</span><span class="token function">getAddress</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                person<span class="token punctuation">.</span><span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                person<span class="token punctuation">.</span><span class="token function">getHobbies</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>outputStr<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * @ClassName AnnotationTest
 * @Description 自定义注解测试类
 * @Author EvanWang
 * @Version 1.0.0
 * @Date 2019/11/6 16:18
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AnnotationTest</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> clazz <span class="token operator">=</span> <span class="token class-name">PersonService</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">;</span>
        <span class="token class-name">Method</span> method <span class="token operator">=</span> clazz<span class="token punctuation">.</span><span class="token function">getMethod</span><span class="token punctuation">(</span><span class="token string">&quot;outputPersonInfo&quot;</span><span class="token punctuation">,</span> <span class="token class-name">Person</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>method<span class="token punctuation">.</span><span class="token function">isAnnotationPresent</span><span class="token punctuation">(</span><span class="token class-name">Information</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>method<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">&quot;方法没有标注@Information注解！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">Person</span> person <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Information</span> information <span class="token operator">=</span> method<span class="token punctuation">.</span><span class="token function">getAnnotation</span><span class="token punctuation">(</span><span class="token class-name">Information</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        person<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span>information<span class="token punctuation">.</span><span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        person<span class="token punctuation">.</span><span class="token function">setAddress</span><span class="token punctuation">(</span>information<span class="token punctuation">.</span><span class="token function">address</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        person<span class="token punctuation">.</span><span class="token function">setAge</span><span class="token punctuation">(</span>information<span class="token punctuation">.</span><span class="token function">age</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        person<span class="token punctuation">.</span><span class="token function">setHobbies</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span>information<span class="token punctuation">.</span><span class="token function">hobbies</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">PersonService</span> personService<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">PersonService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        method<span class="token punctuation">.</span><span class="token function">invoke</span><span class="token punctuation">(</span>personService<span class="token punctuation">,</span>person<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="运行结果" tabindex="-1"><a class="header-anchor" href="#运行结果" aria-hidden="true">#</a> <strong>运行结果：</strong></h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>标注注解：
我是<span class="token class-name">Evan</span><span class="token punctuation">,</span>我来自中国<span class="token punctuation">,</span>今年<span class="token number">18</span>岁，我的爱好是<span class="token punctuation">[</span>编程<span class="token punctuation">,</span> 看电影<span class="token punctuation">,</span> 踢足球<span class="token punctuation">]</span>。


未标注注解：
outputPersonInfo方法没有标注<span class="token annotation punctuation">@Information</span>注解！
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="五、注解结合-springbootaop" tabindex="-1"><a class="header-anchor" href="#五、注解结合-springbootaop" aria-hidden="true">#</a> 五、注解结合 SpringBootAOP</h2><p>参考：<code>ruoyi-vue-plus</code>中<code>@RepeatSubmit() 自定义注解防止表单重复提交</code>用法</p><p>这里贴出部分代码供参考</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 自定义注解防止表单重复提交
 *
 * <span class="token keyword">@author</span> Lion Li
 */</span>
<span class="token annotation punctuation">@Inherited</span>
<span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">METHOD</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span><span class="token constant">RUNTIME</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Documented</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">RepeatSubmit</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * 间隔时间(ms)，小于此时间视为重复提交
     */</span>
    <span class="token keyword">int</span> <span class="token function">interval</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token number">5000</span><span class="token punctuation">;</span>

    <span class="token class-name">TimeUnit</span> <span class="token function">timeUnit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token class-name">TimeUnit</span><span class="token punctuation">.</span><span class="token constant">MILLISECONDS</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 提示消息 支持国际化 格式为 <span class="token punctuation">{</span>code<span class="token punctuation">}</span>
     */</span>
    <span class="token class-name">String</span> <span class="token function">message</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token string">&quot;{repeat.submit.message}&quot;</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 防止重复提交(参考美团GTIS防重系统)
 *
 * <span class="token keyword">@author</span> Lion Li
 */</span>
<span class="token annotation punctuation">@Aspect</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RepeatSubmitAspect</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">ThreadLocal</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> <span class="token constant">KEY_CACHE</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ThreadLocal</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Before</span><span class="token punctuation">(</span><span class="token string">&quot;@annotation(repeatSubmit)&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">doBefore</span><span class="token punctuation">(</span><span class="token class-name">JoinPoint</span> point<span class="token punctuation">,</span> <span class="token class-name">RepeatSubmit</span> repeatSubmit<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Throwable</span> <span class="token punctuation">{</span>
        <span class="token comment">// 如果注解不为0 则使用注解数值</span>
        <span class="token keyword">long</span> interval <span class="token operator">=</span> repeatSubmit<span class="token punctuation">.</span><span class="token function">timeUnit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toMillis</span><span class="token punctuation">(</span>repeatSubmit<span class="token punctuation">.</span><span class="token function">interval</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>interval <span class="token operator">&lt;</span> <span class="token number">1000</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">ServiceException</span><span class="token punctuation">(</span><span class="token string">&quot;重复提交间隔时间不能小于&#39;1&#39;秒&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">HttpServletRequest</span> request <span class="token operator">=</span> <span class="token class-name">ServletUtils</span><span class="token punctuation">.</span><span class="token function">getRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> nowParams <span class="token operator">=</span> <span class="token function">argsArrayToString</span><span class="token punctuation">(</span>point<span class="token punctuation">.</span><span class="token function">getArgs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 请求地址（作为存放cache的key值）</span>
        <span class="token class-name">String</span> url <span class="token operator">=</span> request<span class="token punctuation">.</span><span class="token function">getRequestURI</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 唯一值（没有消息头则使用请求地址）</span>
        <span class="token class-name">String</span> submitKey <span class="token operator">=</span> <span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">trimToEmpty</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span><span class="token function">getHeader</span><span class="token punctuation">(</span><span class="token class-name">SaManager</span><span class="token punctuation">.</span><span class="token function">getConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTokenName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        submitKey <span class="token operator">=</span> <span class="token class-name">SecureUtil</span><span class="token punctuation">.</span><span class="token function">md5</span><span class="token punctuation">(</span>submitKey <span class="token operator">+</span> <span class="token string">&quot;:&quot;</span> <span class="token operator">+</span> nowParams<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 唯一标识（指定key + url + 消息头）</span>
        <span class="token class-name">String</span> cacheRepeatKey <span class="token operator">=</span> <span class="token class-name">GlobalConstants</span><span class="token punctuation">.</span><span class="token constant">REPEAT_SUBMIT_KEY</span> <span class="token operator">+</span> url <span class="token operator">+</span> submitKey<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">RedisUtils</span><span class="token punctuation">.</span><span class="token function">setObjectIfAbsent</span><span class="token punctuation">(</span>cacheRepeatKey<span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token class-name">Duration</span><span class="token punctuation">.</span><span class="token function">ofMillis</span><span class="token punctuation">(</span>interval<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token constant">KEY_CACHE</span><span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>cacheRepeatKey<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token class-name">String</span> message <span class="token operator">=</span> repeatSubmit<span class="token punctuation">.</span><span class="token function">message</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span>message<span class="token punctuation">,</span> <span class="token string">&quot;{&quot;</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">endsWith</span><span class="token punctuation">(</span>message<span class="token punctuation">,</span> <span class="token string">&quot;}&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                message <span class="token operator">=</span> <span class="token class-name">MessageUtils</span><span class="token punctuation">.</span><span class="token function">message</span><span class="token punctuation">(</span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span>message<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> message<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">ServiceException</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 处理完请求后执行
     *
     * <span class="token keyword">@param</span> <span class="token parameter">joinPoint</span> 切点
     */</span>
    <span class="token annotation punctuation">@AfterReturning</span><span class="token punctuation">(</span>pointcut <span class="token operator">=</span> <span class="token string">&quot;@annotation(repeatSubmit)&quot;</span><span class="token punctuation">,</span> returning <span class="token operator">=</span> <span class="token string">&quot;jsonResult&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">doAfterReturning</span><span class="token punctuation">(</span><span class="token class-name">JoinPoint</span> joinPoint<span class="token punctuation">,</span> <span class="token class-name">RepeatSubmit</span> repeatSubmit<span class="token punctuation">,</span> <span class="token class-name">Object</span> jsonResult<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>jsonResult <span class="token keyword">instanceof</span> <span class="token class-name">R</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> r<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
                <span class="token comment">// 成功则不删除redis数据 保证在有效时间内无法重复提交</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>r<span class="token punctuation">.</span><span class="token function">getCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token class-name">R</span><span class="token punctuation">.</span><span class="token constant">SUCCESS</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">return</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token class-name">RedisUtils</span><span class="token punctuation">.</span><span class="token function">deleteObject</span><span class="token punctuation">(</span><span class="token constant">KEY_CACHE</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
                <span class="token constant">KEY_CACHE</span><span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 拦截异常操作
     *
     * <span class="token keyword">@param</span> <span class="token parameter">joinPoint</span> 切点
     * <span class="token keyword">@param</span> <span class="token parameter">e</span>         异常
     */</span>
    <span class="token annotation punctuation">@AfterThrowing</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;@annotation(repeatSubmit)&quot;</span><span class="token punctuation">,</span> throwing <span class="token operator">=</span> <span class="token string">&quot;e&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">doAfterThrowing</span><span class="token punctuation">(</span><span class="token class-name">JoinPoint</span> joinPoint<span class="token punctuation">,</span> <span class="token class-name">RepeatSubmit</span> repeatSubmit<span class="token punctuation">,</span> <span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">RedisUtils</span><span class="token punctuation">.</span><span class="token function">deleteObject</span><span class="token punctuation">(</span><span class="token constant">KEY_CACHE</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token constant">KEY_CACHE</span><span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 参数拼装
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> <span class="token function">argsArrayToString</span><span class="token punctuation">(</span><span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> paramsArray<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">StringJoiner</span> params <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringJoiner</span><span class="token punctuation">(</span><span class="token string">&quot; &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">ArrayUtil</span><span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span>paramsArray<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> params<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Object</span> o <span class="token operator">:</span> paramsArray<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">ObjectUtil</span><span class="token punctuation">.</span><span class="token function">isNotNull</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token function">isFilterObject</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                params<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token class-name">JsonUtils</span><span class="token punctuation">.</span><span class="token function">toJsonString</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> params<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 判断是否需要过滤的对象。
     *
     * <span class="token keyword">@param</span> <span class="token parameter">o</span> 对象信息。
     * <span class="token keyword">@return</span> 如果是需要过滤的对象，则返回true；否则返回false。
     */</span>
    <span class="token annotation punctuation">@SuppressWarnings</span><span class="token punctuation">(</span><span class="token string">&quot;rawtypes&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isFilterObject</span><span class="token punctuation">(</span><span class="token keyword">final</span> <span class="token class-name">Object</span> o<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> clazz <span class="token operator">=</span> o<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>clazz<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> clazz<span class="token punctuation">.</span><span class="token function">getComponentType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">isAssignableFrom</span><span class="token punctuation">(</span><span class="token class-name">MultipartFile</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">Collection</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">isAssignableFrom</span><span class="token punctuation">(</span>clazz<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">Collection</span> collection <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Collection</span><span class="token punctuation">)</span> o<span class="token punctuation">;</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Object</span> value <span class="token operator">:</span> collection<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> value <span class="token keyword">instanceof</span> <span class="token class-name">MultipartFile</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">Map</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">isAssignableFrom</span><span class="token punctuation">(</span>clazz<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">Map</span> map <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Map</span><span class="token punctuation">)</span> o<span class="token punctuation">;</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Object</span> value <span class="token operator">:</span> map<span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> value <span class="token keyword">instanceof</span> <span class="token class-name">MultipartFile</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> o <span class="token keyword">instanceof</span> <span class="token class-name">MultipartFile</span> <span class="token operator">||</span> o <span class="token keyword">instanceof</span> <span class="token class-name">HttpServletRequest</span> <span class="token operator">||</span> o <span class="token keyword">instanceof</span> <span class="token class-name">HttpServletResponse</span>
               <span class="token operator">||</span> o <span class="token keyword">instanceof</span> <span class="token class-name">BindingResult</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,58);function y(w,S){const t=p("router-link"),c=p("ExternalLinkIcon");return l(),u("div",null,[k,r,n("nav",v,[n("ul",null,[n("li",null,[a(t,{to:"#一、注解的概念"},{default:e(()=>[s("一、注解的概念")]),_:1})]),n("li",null,[a(t,{to:"#二、如何自定义注解"},{default:e(()=>[s("二、如何自定义注解")]),_:1})]),n("li",null,[a(t,{to:"#三、自定义注解的特殊语法"},{default:e(()=>[s("三、自定义注解的特殊语法")]),_:1})]),n("li",null,[a(t,{to:"#四、使用和操作注解"},{default:e(()=>[s("四、使用和操作注解")]),_:1})]),n("li",null,[a(t,{to:"#五、注解结合-springbootaop"},{default:e(()=>[s("五、注解结合 SpringBootAOP")]),_:1})])])]),m,n("p",null,[s("注解在 Java 中，与类、接口、"),n("a",b,[s("枚举类"),a(c)]),s("似，因此其声明语法基本一致，只是所使用的关键字有所不同，"),g,s("。"),h,s("。")]),f])}const E=i(d,[["render",y],["__file","index.html.vue"]]);export{E as default};
