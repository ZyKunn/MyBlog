import{_ as l,r as v,o as a,c as r,a as n,e as d,w as s,b as i,d as m}from"./app-a153c100.js";const c="/MyBlog/assets/1607332521437-6daa8293.png",u="/MyBlog/assets/1607332539137-be357ea2.png",b={},E=n("h1",{id:"_05-补充笔记-加餐",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_05-补充笔记-加餐","aria-hidden":"true"},"#"),i(" 05 - 补充笔记(加餐) 🥠")],-1),t={class:"table-of-contents"},p=m(`<h2 id="主键" tabindex="-1"><a class="header-anchor" href="#主键" aria-hidden="true">#</a> 主键</h2><p>数据库对表的约束</p><p>保证数据库中数据的完整性，唯一性，不能为 null;</p><h2 id="外键" tabindex="-1"><a class="header-anchor" href="#外键" aria-hidden="true">#</a> 外键</h2><p>A 表与 B 表之间的关联字段，A 表中的某一个字段通过 B 表中的主键进行关联</p><p>外键可以重复，也可以为 null</p><h2 id="函数额外补充" tabindex="-1"><a class="header-anchor" href="#函数额外补充" aria-hidden="true">#</a> 函数额外补充</h2><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>一、数学函数
　　数学函数主要用于处理数字，包括整型、浮点数等。

**ABS(x)**
返回x的绝对值　　不区分大小写

**SELECT ABS(-1)** -- 返回1

**CEIL(x),CEILING(x)**
返回大于或等于x的最小整数　　

**SELECT CEIL(1.5)** -- 返回2

**FLOOR(x)**
返回小于或等于x的最大整数　　

**SELECT FLOOR(1.5)** -- 返回1

**RAND()**
返回0-&gt;1的随机数　　

**SELECT RAND() --0.93099315644334**

**RAND(x)**
返回0-&gt;1的随机数，x值相同时返回的随机数相同　　

**SELECT RAND(2) --1.5865798029924**

**PI()**
返回圆周率(3.141593）　　

**SELECT PI() --3.141593**

**TRUNCATE(x,y)**
返回数值x保留到小数点后y位的值（与ROUND最大的区别是不会进行四舍五入）　　

**SELECT TRUNCATE(1.23456,3) -- 1.234**

**ROUND(x,y)**
保留x小数点后y位的值，但截断时要进行四舍五入　　

**SELECT ROUND(1.23456,3) -- 1.235**

**POW(x,y).POWER(x,y)**
返回x的y次方　　

**SELECT POW(2,3) -- 8**

**SQRT(x)**
返回x的平方根　　

**SELECT SQRT(25) -- 5**

**EXP(x)**
返回e的x次方　　

**SELECT EXP(3) -- 20.085536923188**

**MOD(x,y)**
返回x除以y以后的余数　　

**SELECT MOD(5,2) -- 1**



二、字符串函数
　　字符串函数是MySQL中最常用的一类函数，字符串函数主要用于处理表中的字符串。

函数 说明

**CHAR_LENGTH(s)**
返回字符串s的字符数

**SELECT CHAR_LENGTH(&#39;你好123&#39;) -- 5**

**CONCAT(s1,s2,...)**
将字符串s1,s2等多个字符串合并为一个字符串

**SELECT CONCAT(&#39;12&#39;,&#39;34&#39;) -- 1234**

**CONCAT_WS(x,s1,s2,...)**
同CONCAT(s1,s2,...)函数，但是每个字符串直接要加上x

**SELECT CONCAT_WS(&#39;@&#39;,&#39;12&#39;,&#39;34&#39;) -- 12@34**

**INSERT(s1,x,len,s2)**
将字符串s2替换s1的x位置开始长度为len的字符串 x从1开始

**SELECT INSERT(&#39;12345&#39;,1,3,&#39;abc&#39;) -- abc45**

**UPPER(s),UCAASE(S)**
将字符串s的所有字母变成大写字母

**SELECT UPPER(&#39;abc&#39;) -- ABC**

**LOWER(s),LCASE(s)**
将字符串s的所有字母变成小写字母

**SELECT LOWER(&#39;ABC&#39;) -- abc**

**LEFT(s,n)**
返回字符串s的前n个字符

**SELECT LEFT(&#39;abcde&#39;,2) -- ab**

**RIGHT(s,n)**
返回字符串s的后n个字符

**SELECT RIGHT(&#39;abcde&#39;,2) -- de**

**LTRIM(s)** 去掉字符串s开始处的空格
**RTRIM(s)** 去掉字符串s结尾处的空格
**TRIM(s)** 去掉字符串s开始和结尾处的空格
**SELECT TRIM(&#39;@&#39; FROM &#39;@@abc@@&#39;) -- abc**

**REPEAT(s,n)**
将字符串s重复n次

**SELECT REPEAT(&#39;ab&#39;,3) -- ababab**

**SPACE(n)** 返回n个空格

**REPLACE(s,s1,s2)**
将字符串s2替代字符串s中的字符串s1

**SELECT REPLACE(&#39;abca&#39;,&#39;a&#39;,&#39;x&#39;) --xbcx**

**STRCMP(s1,s2)** 比较字符串s1和s2

**SUBSTRING(s,n,len)** 获取从字符串s中的第n个位置开始长度为len的字符串

**LOCATE(s1,s),POSITION(s1 IN s)**
从字符串s中获取s1的开始位置

**SELECT LOCATE(&#39;b&#39;, &#39;abc&#39;) -- 2**

**REVERSE(s)**
将字符串s的顺序反过来

**SELECT REVERSE(&#39;abc&#39;) -- cba**

**FIELD(s,s1,s2...)**
返回第一个与字符串s匹配的字符串位置

**SELECT FIELD(&#39;c&#39;,&#39;a&#39;,&#39;b&#39;,&#39;c&#39;) -- 3**

 --replace(源字符,需要替换的字符，替换的字符)
SELECT REPLACE(&quot;abcd        &quot;,&#39; &#39;,&#39;#&#39;)


三、日期时间函数
　　MySQL的日期和时间函数主要用于处理日期时间。

函数 说明

**CURDATE(),CURRENT_DATE()**
返回当前日期

**SELECT CURDATE()**
**-&gt;2014-12-17**

**CURTIME(),CURRENT_TIME**
返回当前时间

**SELECT CURTIME()**
**-&gt;15:59:02**


**NOW(),CURRENT_TIMESTAMP(),LOCALTIME(),**

**SYSDATE(),LOCALTIMESTAMP()**

返回当前日期和时间

**SELECT NOW()**
**-&gt;2014-12-17 15:59:02**

**YEAR(d),**
**MONTH(d)**
**DAY(d)**
返回日期d中的月份值，1-&gt;12

**SELECT MONTH(&#39;2011-11-11 11:11:11&#39;)**
**-&gt;11**

**MONTHNAME(d)**
返回日期当中的月份名称，如Janyary

**SELECT MONTHNAME(&#39;2011-11-11 11:11:11&#39;)**
**-&gt;November**

**DAYNAME(d)**
返回日期d是星期几，如Monday,Tuesday

**SELECT DAYNAME(&#39;2011-11-11 11:11:11&#39;)**
**-&gt;Friday**

**DAYOFWEEK(d)**
日期d今天是星期几，1星期日，2星期一

**SELECT DAYOFWEEK(&#39;2011-11-11 11:11:11&#39;)**
**-&gt;6**

**WEEKDAY(d)**
日期d今天是星期几，

0表示星期一，1表示星期二

**WEEK(d)，WEEKOFYEAR(d)**
计算日期d是本年的第几个星期，范围是0-&gt;53

**SELECT WEEK(&#39;2011-11-11 11:11:11&#39;)**
**-&gt;45**

**DAYOFYEAR(d)**
计算日期d是本年的第几天

**SELECT DAYOFYEAR(&#39;2011-11-11 11:11:11&#39;)**
**-&gt;315**

DAYOFMONTH(d)
计算日期d是本月的第几天

**SELECT DAYOFMONTH(&#39;2011-11-11 11:11:11&#39;)**
**-&gt;11**

**QUARTER(d)**
返回日期d是第几季节，返回1-&gt;4

**SELECT QUARTER(&#39;2011-11-11 11:11:11&#39;)**
**-&gt;4**

**HOUR(t)**
返回t中的小时值

**SELECT HOUR(&#39;1:2:3&#39;)**
**-&gt;1**

**MINUTE(t)**
返回t中的分钟值

**SELECT MINUTE(&#39;1:2:3&#39;)**
**-&gt;2**

**SECOND(t)**
返回t中的秒钟值

**SELECT SECOND(&#39;1:2:3&#39;)**
**-&gt;3**
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="联表查询-having" tabindex="-1"><a class="header-anchor" href="#联表查询-having" aria-hidden="true">#</a> 联表查询 having</h2><p>等值连接</p><p>查询两张表或者两张以上的表时，为了消除可能存在的数据重复（笛卡尔积）所以在语句的后面加上了等值条件</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>-- 获取员工信息和员工的部门信息
SELECT * from emp,dept where emp.dno = dept.dno

--内连接

SELECT * from emp INNER JOIN dept on emp.dno = dept.dno

内连接和等值连接的查询结果是一样的，只是在语法上有些区别


-- 左连接
SELECT * from emp LEFT JOIN dept on emp.dno = dept.dno


左连接以左边的表为主表：emp    dept表为副表
当主表在副表中没有找到对应的数据时，副表中的字段将默认填充为null


-- 右连接
SELECT * from emp RIGHT JOIN dept on emp.dno = dept.dno

右连接以右边的表为主表：dept    emp表为副表
当主表在副表中没有找到对应的数据时，副表中的字段将默认填充为null
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三大范式-数据库设计的基本规则" tabindex="-1"><a class="header-anchor" href="#三大范式-数据库设计的基本规则" aria-hidden="true">#</a> 三大范式：数据库设计的基本规则</h2><p>表与表之间的关系：</p><p>学生信息表和学生档案表 一对一</p><p>A 表中的一条信息只对应 B 表中的一条信息</p><p>设计一种学生表，和一张学生档案表，这两张表中通过外键档案 id 进行关联</p><p>学生信息表和学生寝室表 一对多</p><p>一条寝室信息对应多个学生信息</p><p>设计一张学生表，一张班级表，学生和班级通过班级的编号进行关联</p><p>学生信息表和老师表 多对多</p><p>一个老师可有多个学生，一个学生可以有多个老师</p><p>一个商品在多条订单中，同一个订单可以存着多个商品</p><h3 id="第一范式" tabindex="-1"><a class="header-anchor" href="#第一范式" aria-hidden="true">#</a> 第一范式：</h3><p>​ 数据库表中，每一列都遵循原子性，就是每一列都不可再拆分</p><h2 id="第二范式" tabindex="-1"><a class="header-anchor" href="#第二范式" aria-hidden="true">#</a> 第二范式：</h2><p>​ 表中的每一列都和主键有直接相关，而不是和主键的部分信息相关</p><p>解决的问题主要是：</p><p>​ 1.如果将成绩信息和科目信息放在同一张表中：那么当对科目进行新添科目和删除科目是，会出现科目数据的异常问题，这个异常问题就是科目没有办法和成绩表的主键进行对应</p><p>​ 2.解决数据冗余（重复）</p><h2 id="第三范式" tabindex="-1"><a class="header-anchor" href="#第三范式" aria-hidden="true">#</a> 第三范式：</h2><p>​ 表中没一个字段，都比较和主键有之间关系而不是间接或者关系转移</p><p>比如成绩表要和学生表关联，然后学生表再和学院表关联，这样成绩才能和学院进行关联</p><p>a&gt;b,b&gt;c a 和 c 就通过 b 进行了依赖传递</p><h2 id="正则" tabindex="-1"><a class="header-anchor" href="#正则" aria-hidden="true">#</a> 正则</h2><p>模糊查询</p><p>使用 like 关键字对 sql 语句中的查询条件做限制</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>SELECT * FROM emp where ename like &#39;%卡%&#39;
只要ename中，包含的有&#39;卡&#39;这个字段，全部都符合查询调教



SELECT * FROM emp where ename like &#39;卡%&#39;
查询所有名字以‘卡’开头的名字

SELECT * FROM emp where ename like &#39;%卡&#39;
查询所有名字以‘卡’结尾的字符

SELECT * from emp where ename like &#39;卡__&#39;
查询所有以‘卡’字符开始，并且卡后面只有两个字符的名字

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>^</th><th>匹配输入字符串的开始位置</th></tr></thead><tbody><tr><td>$</td><td>匹配输入字符串的结束位置</td></tr><tr><td>.</td><td>匹配除 &quot;\\n&quot; 之外的任何单个字符</td></tr><tr><td>[...]</td><td>字符集合。匹配所包含的任意一个字符。例如， &#39;[abc]&#39; 可以匹配 &quot;plain&quot; 中的 &#39;a&#39;。</td></tr><tr><td>[^...]</td><td>负值字符集合。匹配未包含的任意字符。例如， &#39;[^admin]&#39; 可以匹配 &quot;plain&quot; 中的&#39;p&#39;。</td></tr><tr><td>p1|p2|p3</td><td>匹配 p1 或 p2 或 p3。例如，&#39;z|food&#39; 能匹配 &quot;z&quot; 或 &quot;food&quot;。&#39;(z|f)ood&#39; 则匹配 &quot;zood&quot; 或 &quot;food&quot;。</td></tr><tr><td>*</td><td>匹配前面的子表达式零次或多次。例如，a*匹配 0 个或多个 a,包括空</td></tr><tr><td>+</td><td>匹配前面的子表达式一次或多次。例如，a+匹配一个或多个 a,不包括空</td></tr><tr><td>{n}</td><td>n 是一个非负整数。匹配确定的 n 次。例如，&#39;a{2}&#39; 配备连续出现 aa, [a-z]{1}匹配出现 a-z 任意一处</td></tr><tr><td>{n,m}</td><td>m 和 n 均为非负整数，其中 n &lt;= m。最少匹配 n 次且最多匹配 m 次。比如匹配 a{1,2}匹配至少一处最多两次的 a</td></tr></tbody></table><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>SELECT * from emp where ename regexp &#39;^天&#39;
查询所有以‘天’字开头的名字


SELECT * from emp where ename REGEXP &#39;师$&#39;
查询所有以&#39;师&#39;字结尾的名字

SELECT * from emp where ename REGEXP &#39;.&#39;
匹配出&#39;\\n&#39;以外的所有字符，就理解为没有加任何匹配条件的查询

SELECT * from emp where ename REGEXP &#39;[ab]&#39;
名字里包含的有a或者b的，都满足查询条件


SELECT * from emp where ename REGEXP &#39;[^李白]&#39;
名字里面没有‘李白’

SELECT * from emp where ename REGEXP &#39;a|b|天&#39;
名字里面包含的有a或者b或者天，满足任意一个条件即可

SELECT * from  emp where ename REGEXP &#39;a+&#39;
名字里面包含有一个a或者是多个a，但是最少要有一个a，不包括空值(Null)

SELECT * from  emp where ename REGEXP &#39;a*&#39;
名字里面包好0个或者多个a，包括空值，包括空值

SELECT * from emp where ename REGEXP &#39;a{2}&#39;
名字里面连续出现了两个a的字符，比如‘aabdsds’就满足，但是&#39;afdfafds&#39;只包含了2个a，所以不满足查询条件

SELECT * from emp where ename REGEXP &#39;e{1,3}&#39;
名字里至少出现1次e，最多出现3次e





100.用正则表达式在学生信息表中找出手机号有11位数字的学生的所有信息。
SELECT * from emp where tel REGEXP &#39;[0-9]{11}&#39;

101----，用正则表达式在学生信息表中找出手机号以12开头以34结尾的学生的姓名和手机号。
SELECT * from emp where tel REGEXP &#39;^12.*34$&#39;
&#39;.*&#39;表示不管匹配次数和内容

SELECT * from emp where tel REGEXP &#39;^12[0-9]{7}34$&#39;
[0-9]{7} 内容在0-9这些自然数中，并且出现了7次，也就是7位

102，用正则表达式在学生信息表中找出英文名字不含有l-p之间字母的学生的姓名和英文名字，并按照分数的降序排列。
select * from emp where ename not REGEXP&#39;[l-p]&#39; order by sal desc

103，用正则表达式在学生信息表中找出手机号含有三个3且含有2个5的学生的姓名和手机号。
SELECT * FROM emp where LENGTH(tel) - length(REPLACE(tel,&#39;3&#39;,&#39;&#39;)) = 3 and LENGTH(tel) - length(REPLACE(tel,&#39;5&#39;,&#39;&#39;))=2
使用的技巧是：length()是获取字符串的长度
			replace()是字符串中某个字符的替换
	思路是：将原字符串的长度减去通过replace()替换后的字符串的长度，就得到所包含的特定字符串的个数
正则：


104，用正则表达式在学生信息表中找出英文名字中含有特殊字符的学生。
SELECT * from  emp where ename REGEXP &#39;[^a-zA-Z0-9]&#39;

105，用正则表达式在学生信息表中找出英文名字中含有空格的学生。
SELECT * FROM emp WHERE ename REGEXP &#39; &#39;

106，用正则表达式在学生信息表中找出英文名字中含有“.”或“\\”的学生。
SELECT * from  emp where ename REGEXP &#39;[a-z.\\\\\\]&#39;

107，用正则表达式在学生信息表中找英文名中含有连续的2个“a”或者连续的3个“e”的学生。
select * from emp where tel REGEXP &#39;a{2}|e{3}&#39;

108，用正则表达式在学生信息表中找出英文名字以“A”开头的学生的姓名和学号。
select * from emp where ename &#39;^A&#39;

109，用正则表达式在学生信息表中找出英文名字以“e”结尾的学生的信息。
select * from emp where ename &#39;e$&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数据库原型设计" tabindex="-1"><a class="header-anchor" href="#数据库原型设计" aria-hidden="true">#</a> 数据库原型设计</h2><p>ER 图</p><p><img src="`+c+'" alt="1607332521437"></p><p>物理模型图：</p><p><img src="'+u+'" alt="1607332539137"></p>',45);function o(T,h){const e=v("router-link");return a(),r("div",null,[E,n("nav",t,[n("ul",null,[n("li",null,[d(e,{to:"#主键"},{default:s(()=>[i("主键")]),_:1})]),n("li",null,[d(e,{to:"#外键"},{default:s(()=>[i("外键")]),_:1})]),n("li",null,[d(e,{to:"#函数额外补充"},{default:s(()=>[i("函数额外补充")]),_:1})]),n("li",null,[d(e,{to:"#联表查询-having"},{default:s(()=>[i("联表查询 having")]),_:1})]),n("li",null,[d(e,{to:"#三大范式-数据库设计的基本规则"},{default:s(()=>[i("三大范式：数据库设计的基本规则")]),_:1}),n("ul",null,[n("li",null,[d(e,{to:"#第一范式"},{default:s(()=>[i("第一范式：")]),_:1})])])]),n("li",null,[d(e,{to:"#第二范式"},{default:s(()=>[i("第二范式：")]),_:1})]),n("li",null,[d(e,{to:"#第三范式"},{default:s(()=>[i("第三范式：")]),_:1})]),n("li",null,[d(e,{to:"#正则"},{default:s(()=>[i("正则")]),_:1})]),n("li",null,[d(e,{to:"#数据库原型设计"},{default:s(()=>[i("数据库原型设计")]),_:1})])])]),p])}const L=l(b,[["render",o],["__file","index.html.vue"]]);export{L as default};
