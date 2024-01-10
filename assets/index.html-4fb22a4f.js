import{_ as t,r as l,o as d,c as o,a as n,e,w as i,b as s,d as r}from"./app-a153c100.js";const c={},p=n("h1",{id:"🌈elasticsearch-模糊查询-是-match、fuzzy-还是-wildcard",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#🌈elasticsearch-模糊查询-是-match、fuzzy-还是-wildcard","aria-hidden":"true"},"#"),s(" 🌈ElasticSearch：模糊查询，是 match、fuzzy 还是 wildcard?")],-1),u=n("hr",null,null,-1),v={class:"table-of-contents"},h=r(`<h2 id="引言-dsl-和-sql-中模糊查询一样吗" tabindex="-1"><a class="header-anchor" href="#引言-dsl-和-sql-中模糊查询一样吗" aria-hidden="true">#</a> 引言：DSL 和 SQL 中模糊查询一样吗</h2><p>今天来说一下模糊查询的事，我们使用<strong>关系型数据库</strong>时，模糊查询使用的就是 like，加上通配符</p><table><thead><tr><th>通配符</th><th>说明</th></tr></thead><tbody><tr><td>%</td><td>包含 0 个或多个字符的任意字符</td></tr><tr><td>_（下划线）</td><td>任意 1 个字符</td></tr></tbody></table><p>那 ElasticSearch 中模糊查询是什么呢，我们知道 term 是精确查询，有的地方说 match 是模糊，有的地方说 wildcard 是模糊，甚至还有 fuzzy 等，字面意思就是‘模糊’的语句，他们有什么区别呢</p><h2 id="elasticsearch-中的模糊查询" tabindex="-1"><a class="header-anchor" href="#elasticsearch-中的模糊查询" aria-hidden="true">#</a> ElasticSearch 中的模糊查询</h2><p>举个例子，我们有个人物名单索引 listofhistoricalfigures 里面 name 字段内容如下</p><ol><li>张三</li><li>张三丰</li><li>张飞</li><li>三德子</li><li>张二丰</li><li>孙权</li><li>马三丰</li></ol><p>结构是下面这样，text 支持分词查询，keyword 支持精确查询</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>
<span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;fields&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;keyword&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;keyword&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
     <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="match-分词匹配检索" tabindex="-1"><a class="header-anchor" href="#match-分词匹配检索" aria-hidden="true">#</a> match 分词匹配检索</h3><blockquote><p>match 英 [mætʃ] 美 [mætʃ] n. 火柴;比赛;竞赛;敌手;旗鼓相当的人 v.般配;相配;相同;相似;相一致;找相称(或相关)的人(或物);配对</p></blockquote><p>match 字面意思是 <strong>相似;相一致;找相称(或相关)的人(或物);配对</strong></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>GET listofhistoricalfigures/_search
&#39;<span class="token punctuation">{</span>
    <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;match&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;张三&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们使用 match 和默认分词器，会把张三进行分词，分成张、三、张三进行检索 会匹配到的结果有</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>张三
张三丰
张飞
三德子
张二丰
马三丰
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="wildcard-通配符检索" tabindex="-1"><a class="header-anchor" href="#wildcard-通配符检索" aria-hidden="true">#</a> wildcard 通配符检索</h3><blockquote><p>wildcard 美 [ˈwaɪldˌkɑrd] n.未知数;未知因素;(给予没有正常参赛资格的选手准其参加比赛的)“外卡”;“外卡”选手; (用于代替任何字符或字符串的)通配符</p></blockquote><p>wildcard 字面意思是 <strong>通配符</strong></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>GET listofhistoricalfigures/_search
&#39;<span class="token punctuation">{</span>
    <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;wildcard&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;name.keyword&quot;</span><span class="token operator">:</span> <span class="token string">&quot;张三*&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 wildcard 相当于 SQL 的 like，前后都可以拼接*，表示匹配 0 到多个任意字符 加.keyword 是要匹配完整的词 会匹配到的结果有</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>张三
张三丰
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fuzzy-模糊-纠错检索" tabindex="-1"><a class="header-anchor" href="#fuzzy-模糊-纠错检索" aria-hidden="true">#</a> fuzzy 模糊/纠错检索</h3><blockquote><p>fuzzy 英 [ˈfʌzi] 美 [ˈfʌzi] adj. 覆有绒毛的;毛茸茸的;紧鬈的;拳曲的;(形状或声音)模糊不清的</p></blockquote><p>fuzzy 字面意思是 <strong>模糊</strong></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>GET listofhistoricalfigures/_search
&#39;<span class="token punctuation">{</span>
    <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;fuzzy&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;name.keyword&quot;</span><span class="token operator">:</span> <span class="token string">&quot;张三&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 fuzzy 就行百度一样，你输入个“邓子棋”，也能把“邓紫棋”查出来，有一定的纠错能力 加.keyword 是要匹配完整的词 会匹配到的结果有</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>张三
张三丰
张飞
张二丰
马三丰
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="结论" tabindex="-1"><a class="header-anchor" href="#结论" aria-hidden="true">#</a> 结论</h2><p>1.match 分词匹配检索，可以对查询条件分词，查到更多匹配的内容，结合不同的分词器，可以得到不同的效果</p><p>2.wildcard 通配符检索功能就像传统的 SQL like 一样，如果数据在 es，你又想得到传统的“模糊查询”结构时，用 wildcard</p><p>3.fuzzy 纠错检索，让输入条件有容错性</p>`,31);function m(b,k){const a=l("router-link");return d(),o("div",null,[p,u,n("nav",v,[n("ul",null,[n("li",null,[e(a,{to:"#引言-dsl-和-sql-中模糊查询一样吗"},{default:i(()=>[s("引言：DSL 和 SQL 中模糊查询一样吗")]),_:1})]),n("li",null,[e(a,{to:"#elasticsearch-中的模糊查询"},{default:i(()=>[s("ElasticSearch 中的模糊查询")]),_:1}),n("ul",null,[n("li",null,[e(a,{to:"#match-分词匹配检索"},{default:i(()=>[s("match 分词匹配检索")]),_:1})]),n("li",null,[e(a,{to:"#wildcard-通配符检索"},{default:i(()=>[s("wildcard 通配符检索")]),_:1})]),n("li",null,[e(a,{to:"#fuzzy-模糊-纠错检索"},{default:i(()=>[s("fuzzy 模糊/纠错检索")]),_:1})])])]),n("li",null,[e(a,{to:"#结论"},{default:i(()=>[s("结论")]),_:1})])])]),h])}const f=t(c,[["render",m],["__file","index.html.vue"]]);export{f as default};
