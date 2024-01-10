import{_ as o,r as l,o as i,c,a as n,e as t,w as e,b as a,d as p}from"./app-a153c100.js";const u="/MyBlog/assets/image-20230918153112631-ba70ec6d.png",r="/MyBlog/assets/image-20230918153141913-23f90b8e.png",d="/MyBlog/assets/image-20230918153232517-b461bad4.png",m="/MyBlog/assets/image-20230918153315604-a6ca20de.png",v={},k=n("h1",{id:"👻-参数校验注解不生效解决方案",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#👻-参数校验注解不生效解决方案","aria-hidden":"true"},"#"),a(" 👻 参数校验注解不生效解决方案")],-1),b=n("hr",null,null,-1),g={class:"table-of-contents"},h=p('<blockquote><p>在日常开发过程中，我们会写一些注解⽤于加在 java 的<strong>实体类</strong>属性字段上，或者放到 controller 层的方法参数中，在进⾏请求或请求的时候会根据字段的注解进⾏对应的校验，简化校验相关的代码。 当校验不通过时，会返回对应的 message 描述</p></blockquote><h3 id="例-1-注解写在-controller-层的接口参数中" tabindex="-1"><a class="header-anchor" href="#例-1-注解写在-controller-层的接口参数中" aria-hidden="true">#</a> <strong>例 1：注解写在 Controller 层的接口参数中</strong></h3><p><img src="'+u+'" alt="image-20230918153112631"></p><h3 id="例-2-注解写在实体中" tabindex="-1"><a class="header-anchor" href="#例-2-注解写在实体中" aria-hidden="true">#</a> <strong>例 2：注解写在实体中</strong></h3><p><img src="'+r+'" alt="image-20230918153141913"></p><blockquote><p>当这些注解不生效时，解决方案如下：</p></blockquote><p><strong>1、当@NotNull 等注解写在实体类中时，需要在 Controller 接口的方法参数加入@Valid 注解，如下图所示：</strong></p><p><img src="'+d+'" alt="image-20230918153232517"></p><p><strong>2、当@NotNull 等注解写在 Controller 层的接口参数中时，需要在该方法的 Controller 类上添加@Validated，如下图所示：</strong></p><p><img src="'+m+`" alt="image-20230918153315604"></p><h3 id="补充-除-notnull-之外的其他校验相关的注解" tabindex="-1"><a class="header-anchor" href="#补充-除-notnull-之外的其他校验相关的注解" aria-hidden="true">#</a> 补充：除@NotNull 之外的其他校验相关的注解</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//被注释的元素必须为null</span>
<span class="token annotation punctuation">@Null</span>
<span class="token comment">//被注释的元素不能为null</span>
<span class="token annotation punctuation">@NotNull</span>
<span class="token comment">//被注释的元素必须为true</span>
<span class="token annotation punctuation">@AssertTrue</span>
<span class="token comment">//被注释的元素必须为false</span>
<span class="token annotation punctuation">@AssertFalse</span>
<span class="token comment">//被注释的元素必须是⼀个数字，其值必须⼤于等于指定的最⼩值</span>
<span class="token annotation punctuation">@Min</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
<span class="token comment">//被注释的元素必须是⼀个数字，其值必须⼩于等于指定的最⼤值</span>
<span class="token annotation punctuation">@Max</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
<span class="token comment">//被注释的元素必须是⼀个数字，其值必须⼤于等于指定的最⼩值</span>
<span class="token annotation punctuation">@DecimalMin</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
<span class="token comment">//被注释的元素必须是⼀个数字，其值必须⼩于等于指定的最⼤值</span>
<span class="token annotation punctuation">@DecimalMax</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
<span class="token comment">//被注释的元素的⼤⼩必须在指定的范围内。</span>
<span class="token annotation punctuation">@Size</span><span class="token punctuation">(</span>max<span class="token punctuation">,</span>min<span class="token punctuation">)</span>
<span class="token comment">//被注释的元素必须是⼀个数字，其值必须在可接受的范围内</span>
<span class="token annotation punctuation">@Digits</span><span class="token punctuation">(</span>integer<span class="token punctuation">,</span>fraction<span class="token punctuation">)</span>
<span class="token comment">//被注释的元素必须是⼀个过去的⽇期</span>
<span class="token annotation punctuation">@Past</span>
<span class="token comment">//被注释的元素必须是⼀个将来的⽇期</span>
<span class="token annotation punctuation">@Future</span>
<span class="token comment">//被注释的元素必须符合指定的正则表达式。</span>
<span class="token annotation punctuation">@Pattern</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
<span class="token comment">//被注释的元素必须是电⼦邮件地址</span>
<span class="token annotation punctuation">@Email</span>
<span class="token comment">//被注释的字符串的⼤⼩必须在指定的范围内</span>
<span class="token annotation punctuation">@Length</span>
<span class="token comment">//被注释的字符串必须⾮空</span>
<span class="token annotation punctuation">@NotEmpty</span>
<span class="token comment">//被注释的元素必须在合适的范围内</span>
<span class="token annotation punctuation">@Range</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12);function _(f,N){const s=l("router-link");return i(),c("div",null,[k,b,n("nav",g,[n("ul",null,[n("li",null,[t(s,{to:"#例-1-注解写在-controller-层的接口参数中"},{default:e(()=>[a("例 1：注解写在 Controller 层的接口参数中")]),_:1})]),n("li",null,[t(s,{to:"#例-2-注解写在实体中"},{default:e(()=>[a("例 2：注解写在实体中")]),_:1})]),n("li",null,[t(s,{to:"#补充-除-notnull-之外的其他校验相关的注解"},{default:e(()=>[a("补充：除@NotNull 之外的其他校验相关的注解")]),_:1})])])]),h])}const M=o(v,[["render",_],["__file","index.html.vue"]]);export{M as default};
