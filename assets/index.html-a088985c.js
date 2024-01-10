import{_ as e,r as o,o as c,c as l,a as n,e as t,w as p,b as s,d as u}from"./app-a153c100.js";const i="/MyBlog/assets/1604039987710-772b9e8b.png",r={},k=n("h1",{id:"_04-java-基础语法-数组",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_04-java-基础语法-数组","aria-hidden":"true"},"#"),s(" 04 - Java 基础语法(数组) 🍤")],-1),d={class:"table-of-contents"},v=u(`<h2 id="数组入门" tabindex="-1"><a class="header-anchor" href="#数组入门" aria-hidden="true">#</a> 数组入门</h2><h3 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h3><p>​ 数组即一组用于存储相同数据类型的<strong>数据结构</strong>；数组是一种典型的线性结构(连续)。比如将一些商品数据呈现到页面中，此时可以将所有商品存储到数组中进行传递。<strong>数组是一种引用数据类型</strong>。数组中的每一个值都称之为元素</p><h3 id="数组的声明和初始化" tabindex="-1"><a class="header-anchor" href="#数组的声明和初始化" aria-hidden="true">#</a> 数组的声明和初始化</h3><h4 id="数组声明" tabindex="-1"><a class="header-anchor" href="#数组声明" aria-hidden="true">#</a> 数组声明</h4><p>java 中对数组的声明语法如下:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>数据类型[] 数组名;
数据类型 数组名[];
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//推荐</span>
<span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> i<span class="token punctuation">;</span>
<span class="token comment">//不推荐</span>
<span class="token keyword">int</span> j<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">double</span><span class="token punctuation">[</span><span class="token punctuation">]</span> d<span class="token punctuation">;</span>
<span class="token keyword">boolean</span><span class="token punctuation">[</span><span class="token punctuation">]</span> b<span class="token punctuation">;</span>
<span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> c<span class="token punctuation">;</span>
<span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> s<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="数组初始化" tabindex="-1"><a class="header-anchor" href="#数组初始化" aria-hidden="true">#</a> 数组初始化</h4><p>数组的初始化（为变量赋初始值）包含两种方式：</p><ol><li>静态初始化</li><li>动态初始化</li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//静态初始化</span>
<span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">,</span><span class="token number">30</span><span class="token punctuation">,</span><span class="token number">40</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">//动态初始化(创建一个长度为5的数组)</span>
<span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span><span class="token number">11</span><span class="token punctuation">,</span><span class="token number">12</span><span class="token punctuation">,</span><span class="token number">13</span><span class="token punctuation">,</span><span class="token number">14</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>动态初始化</strong></p><p>动态初始化即，在声明数组时只指定数组的容量，不为数组中指定位置赋值</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//声明一个长度(容量)为5的数组</span>
<span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
arr<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
arr<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">30</span><span class="token punctuation">;</span>
arr<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">40</span><span class="token punctuation">;</span>
arr<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">50</span><span class="token punctuation">;</span>

arr<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">60</span><span class="token punctuation">;</span>

<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="操作数组" tabindex="-1"><a class="header-anchor" href="#操作数组" aria-hidden="true">#</a> 操作数组</h3><p>​ 数组中每一个元素都有一个独一无二的索引(下标)，通过语法<code>数组名[索引]</code>可以获取数组中指定位置的元素；<strong>数组的索引从 0 开始</strong>；比如一个数组中有 10 个元素则索引从 0~9；<strong>任何一个数组都包含一个 length 属性用于获取数组中元素的个数</strong>;</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">,</span><span class="token number">30</span><span class="token punctuation">,</span><span class="token number">40</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">//获取数组中第4个元素</span>
<span class="token keyword">int</span> i <span class="token operator">=</span> arr<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注意事项:</p><p>在对数组操作时如果下标(索引)使用不当，则会导致一个异常出现:</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span></span>ArrayIndexOutOfBoundsException</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>数组索引越界</strong></p></blockquote><h4 id="jdk1-5-增强-for-循环-foreach" tabindex="-1"><a class="header-anchor" href="#jdk1-5-增强-for-循环-foreach" aria-hidden="true">#</a> JDK1.5 增强 for 循环-forEach</h4><p><img src="`+i+`" alt="1604039987710"></p><p>语法:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>for(数据类型 变量名:数组名){
    //循环体
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>以上循环中的数据类型表示的是数组中每个元素对应的数据类型</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">,</span><span class="token number">11</span><span class="token punctuation">,</span><span class="token number">13</span><span class="token punctuation">,</span><span class="token number">19</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">//增强for循环（forEach:迭代器-Iterator）</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token operator">:</span>arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> names <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&quot;德玛西亚&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;瑞兹&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;易大师&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;墨菲特&quot;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token operator">:</span>names<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="多维数组-二维数组" tabindex="-1"><a class="header-anchor" href="#多维数组-二维数组" aria-hidden="true">#</a> 多维数组(二维数组)</h3><p>​ <strong>多维数组即数组中的数组</strong>。在实际的应用中多维数组的使用也很常见（比如二维数组），电影院座位布局，教室座位布局，游戏开发中游戏元素的坐标。</p><h4 id="声明语法" tabindex="-1"><a class="header-anchor" href="#声明语法" aria-hidden="true">#</a> 声明语法</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>数据类型[][] 数组名
数据类型 数组名[][]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> i<span class="token punctuation">;</span>
<span class="token comment">//不推荐</span>
<span class="token keyword">int</span> i<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 二维数组</span>
<span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> i <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token punctuation">{</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">12</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 数组长度一旦定义则无法改变（动态数组）</span>
<span class="token comment">// i = {};</span>

<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>i<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>i<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> n <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> n <span class="token operator">&lt;</span> i<span class="token punctuation">.</span>length<span class="token punctuation">;</span> n<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> m <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> m <span class="token operator">&lt;</span> i<span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span> m<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>i<span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">[</span>m<span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token string">&quot; &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,31);function m(b,h){const a=o("router-link");return c(),l("div",null,[k,n("nav",d,[n("ul",null,[n("li",null,[t(a,{to:"#数组入门"},{default:p(()=>[s("数组入门")]),_:1}),n("ul",null,[n("li",null,[t(a,{to:"#概述"},{default:p(()=>[s("概述")]),_:1})]),n("li",null,[t(a,{to:"#数组的声明和初始化"},{default:p(()=>[s("数组的声明和初始化")]),_:1})]),n("li",null,[t(a,{to:"#操作数组"},{default:p(()=>[s("操作数组")]),_:1})]),n("li",null,[t(a,{to:"#多维数组-二维数组"},{default:p(()=>[s("多维数组(二维数组)")]),_:1})])])])])]),v])}const f=e(r,[["render",m],["__file","index.html.vue"]]);export{f as default};
