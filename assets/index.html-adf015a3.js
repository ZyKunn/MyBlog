import{_ as p,r as o,o as l,c,a as n,e,w as t,b as s,d as i}from"./app-a153c100.js";const d={},r=n("h1",{id:"_02-mysql-之-sql-查询",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_02-mysql-之-sql-查询","aria-hidden":"true"},"#"),s(" 02 - Mysql 之 SQL 查询 🤓")],-1),u={class:"table-of-contents"},k=i(`<h2 id="mysql-图形界面工具使用" tabindex="-1"><a class="header-anchor" href="#mysql-图形界面工具使用" aria-hidden="true">#</a> Mysql 图形界面工具使用</h2><p>mysql 的第三方图形界面工具非常多，比如:</p><ul><li><strong>Sqlyog</strong></li><li><strong>Navicat for Mysql</strong></li><li><strong>Navicat Premium</strong></li><li>Mysql Front</li><li>PhpMyAdmin</li></ul><h2 id="运算符" tabindex="-1"><a class="header-anchor" href="#运算符" aria-hidden="true">#</a> 运算符</h2><h3 id="算术运算" tabindex="-1"><a class="header-anchor" href="#算术运算" aria-hidden="true">#</a> 算术运算</h3><table><thead><tr><th>运算符</th><th>操作方式</th><th>说明</th></tr></thead><tbody><tr><td>+</td><td>a + b</td><td>实现两数相加</td></tr><tr><td>-</td><td>a - b</td><td>两数相减</td></tr><tr><td>-</td><td>-a</td><td>一元减号，取负值</td></tr><tr><td>*</td><td>a * b</td><td>两数相乘</td></tr><tr><td>/</td><td>a / b</td><td>两数相除</td></tr><tr><td>%</td><td>a % b</td><td>两数取余</td></tr></tbody></table><h3 id="关系运算" tabindex="-1"><a class="header-anchor" href="#关系运算" aria-hidden="true">#</a> 关系运算</h3><table><thead><tr><th>运算符</th><th>操作方式</th><th>说明</th></tr></thead><tbody><tr><td>=</td><td>a=b</td><td>如果两操作数相等则为 true</td></tr><tr><td>!=,&lt;&gt;</td><td>a != b,a&lt;&gt;b</td><td>如果两操作数不相等则为 true</td></tr><tr><td>&gt;</td><td>a &gt; b</td><td>如果 a 大于 b,为 true</td></tr><tr><td>&gt;=</td><td>a &gt;= b</td><td>如果 a 大于等于 b,为 true</td></tr><tr><td>&lt;</td><td>a &lt; b</td><td>如果 a 小于 b,为 true</td></tr><tr><td>&lt;=</td><td>a &lt;= b</td><td>如果 a 小于等于 b,为 true</td></tr><tr><td>in</td><td>a in(b1,b2,b3...)</td><td>判断 a 是否是 b1,b2,b3...中的一个</td></tr><tr><td>between...and</td><td>a between b1 and b2</td><td>判断 a 是否在 b1,b2 之间</td></tr><tr><td>like</td><td>a like b</td><td>如果 a 与 b 匹配，则为 true</td></tr><tr><td>not like</td><td>a not like b</td><td>如果 a 与 b 不匹配，则为 true</td></tr><tr><td>is null</td><td>a is null</td><td>如果操作数为 null，则为 true</td></tr><tr><td>is not null</td><td>a is not null</td><td>如果操作数不为 null，则为 true</td></tr></tbody></table><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>SELECT * FROM emp where NAME &lt;&gt; &#39;张三&#39;
SELECT * FROM emp where sal &gt; 7000
SELECT * FROM emp where age in (21,22,23,29)
SELECT *  FROM emp where sal&gt;=7500 &amp;&amp; sal&lt;=8000
SELECT * FROM emp where sal BETWEEN 7500 and 8000
SELECT * from emp where name like &quot;%张%&quot;
SELECT * FROM emp where name is not null
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="逻辑运算" tabindex="-1"><a class="header-anchor" href="#逻辑运算" aria-hidden="true">#</a> 逻辑运算</h3><table><thead><tr><th>运算符</th><th>操作方式</th><th>说明</th></tr></thead><tbody><tr><td>and,&amp;&amp;</td><td>a and b,a &amp;&amp; b</td><td>逻辑与，两操作数都为 true 则为 true</td></tr><tr><td>or，||</td><td>a or b,a||b</td><td>逻辑或，两操作数任意一个为 true，则为 true</td></tr><tr><td>not,!</td><td>not a,!a</td><td>逻辑非，如果操作数为 false，则结果为 true</td></tr></tbody></table><blockquote><p>运算数左右需为 boolean 结果</p></blockquote><h2 id="sql-查询" tabindex="-1"><a class="header-anchor" href="#sql-查询" aria-hidden="true">#</a> SQL 查询</h2><p>​ SQL 查询在数据库中是非常重要的组成，因为未来开发场景下，大多数的功能都集中在查询上，而且查询可以简单，也可以复杂，复杂到很多表之间的联合查询。</p><p>SQL 查询的语法：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span>
<span class="token keyword">distinct</span>
	查询列
<span class="token keyword">from</span>
	表名称
连接表（<span class="token keyword">inner</span> <span class="token keyword">join</span><span class="token operator">/</span><span class="token keyword">left</span> <span class="token keyword">join</span><span class="token operator">/</span><span class="token keyword">right</span> <span class="token keyword">join</span>）
<span class="token keyword">where</span>
	查询条件
<span class="token keyword">group</span> <span class="token keyword">by</span>
	分组依据
<span class="token keyword">having</span>
	分组的查询条件
<span class="token keyword">order</span> <span class="token keyword">by</span>
	排序字段
<span class="token keyword">limit</span>
	结果限制
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="基础查询" tabindex="-1"><a class="header-anchor" href="#基础查询" aria-hidden="true">#</a> 基础查询</h3><ol><li><p>查询所有列</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> emp<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>查询部分列信息（查询员工的姓名，职位，薪资）</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> ename<span class="token punctuation">,</span>job<span class="token punctuation">,</span>sal <span class="token keyword">from</span> emp<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">insert</span> <span class="token keyword">into</span> emp<span class="token punctuation">(</span>eno<span class="token punctuation">,</span>ename<span class="token punctuation">,</span>job<span class="token punctuation">,</span>age<span class="token punctuation">)</span> <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token number">23</span><span class="token punctuation">,</span><span class="token string">&#39;卡牌大师&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;骨干员工&#39;</span><span class="token punctuation">,</span><span class="token number">33</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- 查询指定列</span>
<span class="token keyword">select</span> ename<span class="token punctuation">,</span>job<span class="token punctuation">,</span>IFNULL<span class="token punctuation">(</span>sal<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">from</span> emp<span class="token punctuation">;</span>
IFnull<span class="token punctuation">(</span>exp1<span class="token punctuation">,</span>exp2<span class="token punctuation">)</span>
解释:当exp1字段为<span class="token boolean">null</span>时，默认该这个<span class="token boolean">null</span>值赋值为exp2

<span class="token comment">--查询时使用运算操作</span>
<span class="token keyword">select</span> ename<span class="token punctuation">,</span>ifnull<span class="token punctuation">(</span>sal<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1000</span> <span class="token keyword">from</span> emp<span class="token punctuation">;</span>

<span class="token comment">--显示所有的职位，不能重复</span>
<span class="token keyword">select</span> <span class="token keyword">distinct</span> job <span class="token keyword">from</span> emp<span class="token punctuation">;</span>

<span class="token keyword">distinct</span> 去重的语法，去除重复出现字段值

<span class="token comment">/*
	mysql聚合函数查询
	count  统计函数
	sum	求和
	avg	求平均值
	max 求最大值
	min 求最小值
*/</span>
<span class="token comment">--查询表中一共有多少员工</span>
<span class="token keyword">select</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token keyword">from</span> emp<span class="token punctuation">;</span>

<span class="token comment">--查询所有员工的总薪资</span>
<span class="token keyword">select</span> <span class="token function">sum</span><span class="token punctuation">(</span>sal<span class="token punctuation">)</span> <span class="token keyword">from</span> emp<span class="token punctuation">;</span>

<span class="token comment">--查询所有员工的月薪平均值</span>
<span class="token keyword">select</span> <span class="token function">avg</span><span class="token punctuation">(</span>sal<span class="token punctuation">)</span> <span class="token keyword">from</span> emp<span class="token punctuation">;</span>

<span class="token comment">--查询工资最低的员工薪资</span>
<span class="token keyword">select</span> <span class="token function">min</span><span class="token punctuation">(</span>sal<span class="token punctuation">)</span> <span class="token keyword">from</span> emp<span class="token punctuation">;</span>

<span class="token comment">--查询工资最高的员工薪资</span>
<span class="token keyword">select</span> <span class="token function">max</span><span class="token punctuation">(</span>sal<span class="token punctuation">)</span> <span class="token keyword">from</span> emp<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="条件查询" tabindex="-1"><a class="header-anchor" href="#条件查询" aria-hidden="true">#</a> 条件查询</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">/* 条件查询 */</span>
<span class="token comment">-- 查询年龄超过30的员工</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> emp <span class="token keyword">where</span> age<span class="token operator">&gt;=</span><span class="token number">30</span><span class="token punctuation">;</span>

<span class="token comment">-- 查询所有薪资超过3500 小于10000的员工信息</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> emp <span class="token keyword">where</span> sal <span class="token operator">&gt;=</span> <span class="token number">3500</span> <span class="token operator">&amp;&amp;</span> sal <span class="token operator">&lt;</span> <span class="token number">10000</span><span class="token punctuation">;</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> emp <span class="token keyword">where</span> sal <span class="token operator">between</span> <span class="token number">3500</span> <span class="token operator">and</span> <span class="token number">10000</span><span class="token punctuation">;</span>

<span class="token comment">-- 查询所有在3，5，6三个部门的员工</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> emp <span class="token keyword">where</span>  dno<span class="token operator">=</span><span class="token number">3</span> <span class="token operator">or</span> dno<span class="token operator">=</span><span class="token number">5</span> <span class="token operator">or</span> dno<span class="token operator">=</span><span class="token number">6</span><span class="token punctuation">;</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> emp <span class="token keyword">where</span>  dno<span class="token operator">=</span><span class="token number">3</span> <span class="token operator">||</span> dno<span class="token operator">=</span><span class="token number">5</span> <span class="token operator">||</span> dno<span class="token operator">=</span><span class="token number">6</span><span class="token punctuation">;</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> emp <span class="token keyword">where</span> dno <span class="token operator">in</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- 查询所有不是经理的员工</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> emp <span class="token keyword">where</span> job <span class="token operator">!=</span> <span class="token string">&#39;经理&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> emp <span class="token keyword">where</span> job <span class="token operator">&lt;&gt;</span> <span class="token string">&#39;经理&#39;</span><span class="token punctuation">;</span>

<span class="token comment">/* 模糊查询 */</span>
<span class="token comment">-- 查询名字中带有“卡”的员工（模糊查询）</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> emp <span class="token keyword">where</span> ename <span class="token operator">like</span> <span class="token string">&#39;%卡%&#39;</span><span class="token punctuation">;</span>

<span class="token comment">-- 查询姓“卡”的所有员工</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> emp <span class="token keyword">where</span> ename <span class="token operator">like</span> <span class="token string">&#39;卡%&#39;</span><span class="token punctuation">;</span>

<span class="token comment">-- 查询只有三个字姓“卡”的员工</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> emp <span class="token keyword">where</span> ename <span class="token operator">like</span> <span class="token string">&#39;卡__&#39;</span><span class="token punctuation">;</span>

<span class="token comment">/*
	&quot;%&quot;和&quot;_&quot;：都是占位符，%用于匹配多个字符,“_”用于匹配一个字符
*/</span>
<span class="token comment">-- 查询名字只包含两个字的员工</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> emp <span class="token keyword">where</span> ename <span class="token operator">like</span> <span class="token string">&#39;__&#39;</span><span class="token punctuation">;</span>
<span class="token comment">-- 查询所有员工中不是姓李的员工</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> emp <span class="token keyword">where</span> ename <span class="token operator">not</span> <span class="token operator">like</span> <span class="token string">&#39;李%&#39;</span><span class="token punctuation">;</span>

<span class="token comment">/*
 分组查询：group by
 查询目标必须是分组依据或者分组函数（聚合函数）
*/</span>
<span class="token comment">-- 统计每一种职位的员工各有多少人？</span>
<span class="token keyword">select</span> job<span class="token punctuation">,</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token keyword">from</span> emp <span class="token keyword">group</span> <span class="token keyword">by</span> job<span class="token punctuation">;</span>

<span class="token comment">-- 统计每个部门分别有多少人</span>
<span class="token keyword">select</span> dno<span class="token punctuation">,</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token keyword">from</span> emp <span class="token keyword">group</span> <span class="token keyword">by</span> dno<span class="token punctuation">;</span>

<span class="token comment">-- 查询每个部门月薪超过3500员工有多少人？</span>
<span class="token keyword">select</span> dno<span class="token punctuation">,</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token keyword">from</span> emp <span class="token keyword">where</span> sal <span class="token operator">&gt;</span> <span class="token number">3500</span> <span class="token keyword">group</span> <span class="token keyword">by</span> dno<span class="token punctuation">;</span>

<span class="token comment">-- 查询每个部门月薪超过3500员工有多少人,要求显示部门号，人数以及平均薪资？</span>
<span class="token keyword">select</span> dno<span class="token punctuation">,</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token string">&#39;总人数&#39;</span><span class="token punctuation">,</span><span class="token function">avg</span><span class="token punctuation">(</span>sal<span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token string">&#39;平均薪资&#39;</span> <span class="token keyword">from</span> emp <span class="token keyword">where</span> sal <span class="token operator">&gt;</span> <span class="token number">3500</span> <span class="token keyword">group</span> <span class="token keyword">by</span> dno<span class="token punctuation">;</span>
<span class="token comment">-- 查询每个工作岗位员工数量，并且要求员工的薪资大于5000</span>
<span class="token keyword">SELECT</span> job<span class="token punctuation">,</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token keyword">from</span> emp <span class="token keyword">GROUP</span> <span class="token keyword">BY</span> job <span class="token keyword">HAVING</span> <span class="token function">MIN</span><span class="token punctuation">(</span>sal<span class="token punctuation">)</span><span class="token operator">&gt;</span><span class="token number">5000</span>
<span class="token comment">-- 使用别名</span>
<span class="token keyword">select</span> e<span class="token punctuation">.</span>ename n<span class="token punctuation">,</span>e<span class="token punctuation">.</span>sal s<span class="token punctuation">,</span>e<span class="token punctuation">.</span>hiredate h <span class="token keyword">from</span> emp e<span class="token punctuation">;</span>

<span class="token comment">/*
	排序：order by
			  ASC 升序 (默认)
				DESC 降序
*/</span>
<span class="token comment">-- 查询所有员工信息，并且按照月薪从高到低排序显示</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> emp <span class="token keyword">order</span> <span class="token keyword">by</span> sal <span class="token keyword">desc</span>

<span class="token comment">-- 查询每个部门的平均薪资，并且按照平均薪资从高到低排序（显示：部门号，平均薪资）</span>
<span class="token keyword">select</span> dno<span class="token punctuation">,</span><span class="token function">avg</span><span class="token punctuation">(</span>sal<span class="token punctuation">)</span> <span class="token keyword">from</span> emp <span class="token keyword">group</span> <span class="token keyword">by</span> dno <span class="token keyword">order</span> <span class="token keyword">by</span> <span class="token function">avg</span><span class="token punctuation">(</span>sal<span class="token punctuation">)</span>

<span class="token comment">/*
	分页：分页需求一般分为假分页(逻辑分页)和真分页(物理分页)
		这里主要使用真分页，可以节省内存空间，直接在数据库里面对数据分页
		limit
		limit一般后面带两个整数参数
		1：起始的查询位置
		2：本次查询的数据行数
*/</span>
<span class="token comment">-- 显示结果中的前五条数据</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> emp <span class="token keyword">limit</span> <span class="token number">5</span><span class="token punctuation">;</span>

<span class="token comment">-- 以上操作等同</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> emp <span class="token keyword">limit</span> <span class="token number">20</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="多表联合查询" tabindex="-1"><a class="header-anchor" href="#多表联合查询" aria-hidden="true">#</a> 多表联合查询</h3><h5 id="笛卡尔沉积" tabindex="-1"><a class="header-anchor" href="#笛卡尔沉积" aria-hidden="true">#</a> 笛卡尔沉积：</h5><ol><li>先确定数据要用到哪些表。</li><li>将多个表先通过笛卡尔积变成一个表。</li><li>然后去除不符合逻辑的数据（根据两个表的关系去掉）。</li><li>最后当做是一个虚拟表一样来加上条件即可。</li></ol><p>如果 A 表有 20 条记录，B 表有 30 条记录，则二者关联后的笛卡尔积工 20*30=600 条记实录。也就是说 A 表中的每条记录都会于 B 表的所有记录关联一次，三种关联方式实际上就是对“笛卡尔积”的处理方式不同。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">/*
	多表联合查询
	1.等值连接 （查询条件数至少等于 表数-1）
	2.内连接
	3.左外连接
	4.右外连接
	5.自连接
*/</span>
<span class="token comment">-- 等值连接</span>
<span class="token comment">-- 为避免笛卡尔积出现，应该在查询时加入等值连接条件</span>
<span class="token comment">-- 显示所有员工和所在部门的信息（emp,dept）</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> emp<span class="token punctuation">,</span>dept <span class="token keyword">where</span> emp<span class="token punctuation">.</span>dno<span class="token operator">=</span>dept<span class="token punctuation">.</span>dno<span class="token punctuation">;</span>

<span class="token comment">-- 查询所有员工的工号，姓名，职位，月薪和所在部门名称</span>
<span class="token keyword">select</span>
	e<span class="token punctuation">.</span>eno<span class="token punctuation">,</span>e<span class="token punctuation">.</span>ename<span class="token punctuation">,</span>e<span class="token punctuation">.</span>job<span class="token punctuation">,</span>e<span class="token punctuation">.</span>sal<span class="token punctuation">,</span>d<span class="token punctuation">.</span>dname
<span class="token keyword">from</span>
	emp e<span class="token punctuation">,</span>dept d
<span class="token keyword">where</span>
	e<span class="token punctuation">.</span>dno<span class="token operator">=</span>d<span class="token punctuation">.</span>dno<span class="token punctuation">;</span>

<span class="token comment">-- 在以上基础上再显示员工的薪资等级</span>
<span class="token keyword">select</span>
	e<span class="token punctuation">.</span>eno<span class="token punctuation">,</span>e<span class="token punctuation">.</span>ename<span class="token punctuation">,</span>e<span class="token punctuation">.</span>job<span class="token punctuation">,</span>e<span class="token punctuation">.</span>sal<span class="token punctuation">,</span>d<span class="token punctuation">.</span>dname<span class="token punctuation">,</span>s<span class="token punctuation">.</span><span class="token keyword">level</span>
<span class="token keyword">from</span>
	emp e<span class="token punctuation">,</span>dept d<span class="token punctuation">,</span>sallevel s
<span class="token keyword">where</span>
	e<span class="token punctuation">.</span>dno<span class="token operator">=</span>d<span class="token punctuation">.</span>dno <span class="token operator">and</span>
	e<span class="token punctuation">.</span>sal <span class="token operator">between</span> s<span class="token punctuation">.</span>lowsal <span class="token operator">and</span> s<span class="token punctuation">.</span>hisal<span class="token punctuation">;</span>

<span class="token comment">-- 查询所有T8等级薪资的员工来自哪些部门，显示部门名和员工姓名，薪资</span>
<span class="token keyword">select</span>
	e<span class="token punctuation">.</span>ename<span class="token punctuation">,</span>e<span class="token punctuation">.</span>sal<span class="token punctuation">,</span>d<span class="token punctuation">.</span>dname
<span class="token keyword">from</span>
	emp e<span class="token punctuation">,</span>dept d<span class="token punctuation">,</span>sallevel s
<span class="token keyword">where</span>
	e<span class="token punctuation">.</span>dno<span class="token operator">=</span>d<span class="token punctuation">.</span>dno <span class="token operator">and</span>
	e<span class="token punctuation">.</span>sal <span class="token operator">between</span> s<span class="token punctuation">.</span>lowsal <span class="token operator">and</span> s<span class="token punctuation">.</span>hisal <span class="token operator">and</span>
	s<span class="token punctuation">.</span><span class="token keyword">level</span><span class="token operator">=</span><span class="token string">&#39;T8&#39;</span><span class="token punctuation">;</span>

<span class="token comment">-- 内连接(根据连接条件获取相交的部分，与等值连接结果一致)</span>
<span class="token comment">-- 显示所有员工的基本信息包含部门信息</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> emp e <span class="token keyword">inner</span> <span class="token keyword">join</span> dept d <span class="token keyword">on</span> e<span class="token punctuation">.</span>dno<span class="token operator">=</span>d<span class="token punctuation">.</span>dno<span class="token punctuation">;</span>

<span class="token comment">-- 左外连接(左连接)</span>
<span class="token comment">-- 左连接以左表为基准连接右表，不论左表是否存在与右表关联的数据，左表始终完全显示</span>
<span class="token comment">-- 查询出所有员工信息包括部门信息，同时要求显示不属于任何部门的员工</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> emp e <span class="token keyword">LEFT</span> <span class="token keyword">JOIN</span> dept d <span class="token keyword">on</span> e<span class="token punctuation">.</span>dno <span class="token operator">=</span> d<span class="token punctuation">.</span>dno<span class="token punctuation">;</span>

<span class="token comment">-- 查询出所有员工和部门的信息，要求显示没有员工的部门信息</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> dept d <span class="token keyword">LEFT</span> <span class="token keyword">JOIN</span> emp e <span class="token keyword">on</span> e<span class="token punctuation">.</span>dno <span class="token operator">=</span> d<span class="token punctuation">.</span>dno<span class="token punctuation">;</span>
<span class="token comment">-- 右外连接(右连接)</span>
<span class="token comment">-- 右连接以右表为基准连接左表，不论右表是否存在与左表关联的数据，右表始终完全显示</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> emp e <span class="token keyword">RIGHT</span> <span class="token keyword">JOIN</span> dept d <span class="token keyword">on</span> e<span class="token punctuation">.</span>dno <span class="token operator">=</span> d<span class="token punctuation">.</span>dno<span class="token punctuation">;</span>

<span class="token comment">/*
	子查询：将一个查询的查询结果当做另一个查询的条件使用;或者将一个查询的结果当做一张临时表使用
	单行子查询
	多行子查询
	多列子查询（临时表）
*/</span>
<span class="token comment">-- 查询与猪八戒同一个部门的其他员工信息(子查询)</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> emp <span class="token keyword">where</span> dno<span class="token operator">=</span><span class="token punctuation">(</span><span class="token keyword">select</span> dno <span class="token keyword">from</span> emp <span class="token keyword">where</span> ename<span class="token operator">=</span><span class="token string">&#39;猪八戒&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- 自连接</span>
<span class="token keyword">select</span> e2<span class="token punctuation">.</span><span class="token operator">*</span> <span class="token keyword">from</span> emp e1<span class="token punctuation">,</span>emp e2 <span class="token keyword">where</span> e1<span class="token punctuation">.</span>dno <span class="token operator">=</span> e2<span class="token punctuation">.</span>dno <span class="token operator">and</span> e1<span class="token punctuation">.</span>ename<span class="token operator">=</span><span class="token string">&#39;猪八戒&#39;</span><span class="token punctuation">;</span>

<span class="token comment">-- 使用内连接实现以上需求？</span>
<span class="token keyword">select</span> e2<span class="token punctuation">.</span><span class="token operator">*</span> <span class="token keyword">from</span> emp e1 <span class="token keyword">INNER</span> <span class="token keyword">JOIN</span> emp e2 <span class="token keyword">on</span> e1<span class="token punctuation">.</span>dno<span class="token operator">=</span>e2<span class="token punctuation">.</span>dno <span class="token operator">and</span> e1<span class="token punctuation">.</span>ename<span class="token operator">=</span><span class="token string">&#39;猪八戒&#39;</span>

<span class="token comment">-- 查询在研发部和行政部的所有员工？</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> emp <span class="token keyword">where</span> dno <span class="token operator">in</span>
<span class="token punctuation">(</span><span class="token keyword">select</span> dno <span class="token keyword">from</span> dept <span class="token keyword">where</span> dname <span class="token operator">in</span><span class="token punctuation">(</span><span class="token string">&#39;研发部&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;行政部&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- 查询与猪八戒同一个部门并且同一个职位的员工信息</span>
<span class="token keyword">select</span> e<span class="token punctuation">.</span><span class="token operator">*</span> <span class="token keyword">from</span> emp e<span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token keyword">select</span> dno<span class="token punctuation">,</span>job <span class="token keyword">from</span> emp <span class="token keyword">where</span> ename<span class="token operator">=</span><span class="token string">&#39;猪八戒&#39;</span><span class="token punctuation">)</span> t
<span class="token keyword">where</span> e<span class="token punctuation">.</span>dno<span class="token operator">=</span>t<span class="token punctuation">.</span>dno <span class="token operator">and</span> e<span class="token punctuation">.</span>job<span class="token operator">=</span>t<span class="token punctuation">.</span>job <span class="token operator">and</span> e<span class="token punctuation">.</span>ename <span class="token operator">!=</span> <span class="token string">&#39;猪八戒&#39;</span><span class="token punctuation">;</span>

<span class="token comment">-- 查询行政部中比研发部中任何一个员工工资都高的员工信息</span>
<span class="token keyword">select</span> e<span class="token punctuation">.</span><span class="token operator">*</span> <span class="token keyword">from</span> emp e<span class="token punctuation">,</span>dept d <span class="token keyword">where</span> e<span class="token punctuation">.</span>sal <span class="token operator">&gt;</span>
<span class="token punctuation">(</span><span class="token keyword">select</span> <span class="token function">max</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>sal<span class="token punctuation">)</span> <span class="token keyword">from</span> emp e<span class="token punctuation">,</span>dept d <span class="token keyword">where</span> e<span class="token punctuation">.</span>dno<span class="token operator">=</span>d<span class="token punctuation">.</span>dno <span class="token operator">and</span> d<span class="token punctuation">.</span>dname<span class="token operator">=</span><span class="token string">&#39;研发部&#39;</span><span class="token punctuation">)</span>
<span class="token operator">and</span> d<span class="token punctuation">.</span>dname<span class="token operator">=</span><span class="token string">&#39;行政部&#39;</span> <span class="token operator">and</span> e<span class="token punctuation">.</span>dno<span class="token operator">=</span>d<span class="token punctuation">.</span>dno<span class="token punctuation">;</span>

<span class="token comment">-- 找出部门10中所有经理，部门20中所有普通员工以及既不是经理又不是普通员工</span>
<span class="token comment">-- 但其薪金大于或等6000的所有雇员的详细资料。</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> emp <span class="token keyword">where</span> dno<span class="token operator">=</span><span class="token number">20</span> <span class="token operator">and</span> job<span class="token operator">=</span><span class="token string">&#39;普通员工&#39;</span>
<span class="token keyword">UNION</span>  <span class="token comment">-- 联合其他查询结果</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> emp <span class="token keyword">where</span> dno<span class="token operator">=</span><span class="token number">10</span> <span class="token operator">and</span> job<span class="token operator">=</span><span class="token string">&#39;经理&#39;</span>
<span class="token keyword">union</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> emp <span class="token keyword">where</span> job <span class="token operator">not</span> <span class="token operator">in</span> <span class="token punctuation">(</span><span class="token string">&#39;普通员工&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;经理&#39;</span><span class="token punctuation">)</span> <span class="token operator">and</span> sal <span class="token operator">&gt;</span> <span class="token number">6000</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>查询注意事项:</p><ol><li><p>对于任何查询，明确几个目标：</p></li><li><p><strong>查询列</strong></p></li><li><p><strong>查询目标表</strong></p></li><li><p><strong>查询条件</strong></p></li><li><p>查询方式：</p></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>多表查询:
等值连接
内连接
自连接
外连接(左外连接，右外连接)

子查询
单行子查询
多行子查询
多列子查询（虚拟表）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>对于同一个查询需求可以使用多种手段实现，但是需要考虑效率</li><li>查询语句优化：</li><li>尽量避免子查询</li><li>避免使用“*”</li><li>对查询结果尽量使用 limit 显示</li><li>单条 sql 尽量少用或者不用 like</li><li>在 sql 语句中尽量使用等值作为条件</li><li>使用函数的时候，尽量使用系统函数，少使用自定义函数</li><li>对某些经常使用或者经常被查询的字段添加索引</li></ol></blockquote><h2 id="维护数据完整性之约束" tabindex="-1"><a class="header-anchor" href="#维护数据完整性之约束" aria-hidden="true">#</a> 维护数据完整性之约束</h2><p>在数据库中维护<strong>数据完整性</strong>的解决方案有两种：</p><ol><li>约束（constraint）</li><li>触发器（trigger）</li></ol><h3 id="约束-constraint" tabindex="-1"><a class="header-anchor" href="#约束-constraint" aria-hidden="true">#</a> 约束（Constraint）</h3><p>约束是通过对数据表中的字段使用以一些特殊用途的关键字进行限定，从而使得该列的数据不能随意填写，以此来保障数据的完整性；数据库中一共包含以下 5 种约束：</p><ol><li><strong>主键约束（primary key）</strong></li><li>外键约束（foreign key）</li><li>唯一约束（unique）</li><li>检查约束（check） <strong>Mysql 暂时不生效</strong></li><li>不为空约束（not null）</li></ol><h4 id="主键约束-primary-key" tabindex="-1"><a class="header-anchor" href="#主键约束-primary-key" aria-hidden="true">#</a> 主键约束（primary key）</h4><p>主键约束一般用于一张表中的标识列（该列数据唯一且不为空）；每一张表都应该存在一个主键，主键可以用于一个列，也可以应用于多个列</p><p>如果主键类型为 int 的时候：</p><p>建议主键设置成自增长，如果主键设置成自增长的时候，在添加数据时，可以不用给主键赋值</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>INSERT into emp (eno,ename) VALUES (null,&#39;沙和尚2&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果主键类型为字符串：</p><p>可以使用类似于 UUID 这样的一个 32 位或者 18 位的一个字符串：比如 eb077943-0b49-43ba-a7be-22c443e1b7b8</p><p>作为 varchar 类型的 id 的值</p><ol><li>注意事项：</li></ol><blockquote><ol><li>主键列一般用于标识列（不能重复，且不为空）</li><li>尽量避免使用联合主键（设置多个列同时为主键）</li><li>任何表都应该存在主键列</li></ol></blockquote><h4 id="外键约束-foreign-key" tabindex="-1"><a class="header-anchor" href="#外键约束-foreign-key" aria-hidden="true">#</a> 外键约束（foreign key）</h4><p>外键约束一般用于对一个表与另一个表进行关 联时的依据，通常会在表中使用 foreign key 建立外键；外键必然是另一张表的主键，而另一张就称之为主表，添加外键的表称之为从表。</p><h4 id="唯一约束-unique" tabindex="-1"><a class="header-anchor" href="#唯一约束-unique" aria-hidden="true">#</a> 唯一约束（unique）</h4><p>唯一约束用于设置表中指定列是唯一的（不可重复）；常见于用于表中的用户名列，分类表中类别名列等，使用方式：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>username <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span> <span class="token keyword">unique</span> <span class="token operator">not</span> <span class="token boolean">null</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果报错值，后面偷偷跟了一个空格这样会导致数据重复</p><p>解决这种问题：</p><p>​ 先后台对这个数据去空格在数据库中查询一边，再做保存</p><h4 id="不为空约束-not-null" tabindex="-1"><a class="header-anchor" href="#不为空约束-not-null" aria-hidden="true">#</a> 不为空约束（not null）</h4><p>设置表中指定列必须给定值，不允许为 null</p><h4 id="检查约束-check" tabindex="-1"><a class="header-anchor" href="#检查约束-check" aria-hidden="true">#</a> 检查约束（check）</h4><p>检查约束在 mysql 中还未生效，如果需要对字段进行检查约束，可以考虑使用 enum 类型。</p><h3 id="触发器" tabindex="-1"><a class="header-anchor" href="#触发器" aria-hidden="true">#</a> 触发器：</h3><p>触发器是与表有关的数据库对象，在满足定义条件时触发，并执行触发器中定义的语句集合。</p><p>确定它是非常高效的：触发器是针对每一行的；对增删改非常频繁的表上切记不要使用触发器，因为它会非常消耗资源。</p><h4 id="练习" tabindex="-1"><a class="header-anchor" href="#练习" aria-hidden="true">#</a> 练习：</h4><p><em>1.列出同部门下所有员工的姓名及其直接上级的名字(根据 deptno 划分部门)</em></p><p>2.列出受雇日期早于直接上级的所有员工的编号、姓名、部门名称</p><p>3.列出部门名称和这些部门的员工信息</p><p>4.列出在销售部工作的员工的姓名，假定不知道销售部的部门编号</p><p>5.列出与庞统从事相同工作的所有员工及部门名称</p><p>6.列出最低薪金大于 15000 的各种工作以及从事此工作的员工人数</p>`,65);function m(v,b){const a=o("router-link");return l(),c("div",null,[r,n("nav",u,[n("ul",null,[n("li",null,[e(a,{to:"#mysql-图形界面工具使用"},{default:t(()=>[s("Mysql 图形界面工具使用")]),_:1})]),n("li",null,[e(a,{to:"#运算符"},{default:t(()=>[s("运算符")]),_:1}),n("ul",null,[n("li",null,[e(a,{to:"#算术运算"},{default:t(()=>[s("算术运算")]),_:1})]),n("li",null,[e(a,{to:"#关系运算"},{default:t(()=>[s("关系运算")]),_:1})]),n("li",null,[e(a,{to:"#逻辑运算"},{default:t(()=>[s("逻辑运算")]),_:1})])])]),n("li",null,[e(a,{to:"#sql-查询"},{default:t(()=>[s("SQL 查询")]),_:1}),n("ul",null,[n("li",null,[e(a,{to:"#基础查询"},{default:t(()=>[s("基础查询")]),_:1})]),n("li",null,[e(a,{to:"#条件查询"},{default:t(()=>[s("条件查询")]),_:1})]),n("li",null,[e(a,{to:"#多表联合查询"},{default:t(()=>[s("多表联合查询")]),_:1})])])]),n("li",null,[e(a,{to:"#维护数据完整性之约束"},{default:t(()=>[s("维护数据完整性之约束")]),_:1}),n("ul",null,[n("li",null,[e(a,{to:"#约束-constraint"},{default:t(()=>[s("约束（Constraint）")]),_:1})]),n("li",null,[e(a,{to:"#触发器"},{default:t(()=>[s("触发器：")]),_:1})])])])])]),k])}const w=p(d,[["render",m],["__file","index.html.vue"]]);export{w as default};
