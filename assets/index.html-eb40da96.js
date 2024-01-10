import{_ as p,r as o,o as i,c as r,a as s,e as t,w as e,b as n,d as c}from"./app-a153c100.js";const l="/MyBlog/assets/image-20230608191044290-f38aa58d.png",u="/MyBlog/assets/image-20230608191050756-57aa30e4.png",d="/MyBlog/assets/image-20230608191057422-4ec61dc4.png",k={},m=s("h1",{id:"微信扫码登录配置",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#微信扫码登录配置","aria-hidden":"true"},"#"),n(),s("strong",null,"微信扫码登录配置")],-1),h={class:"table-of-contents"},_=c(`<h3 id="_1、修改前端工程-xc-ui-pc-static-portal-目录下的-wxsign-html" tabindex="-1"><a class="header-anchor" href="#_1、修改前端工程-xc-ui-pc-static-portal-目录下的-wxsign-html" aria-hidden="true">#</a> 1、修改前端工程 xc-ui-pc-static-portal 目录下的 wxsign.html</h3><p>屏蔽代码行：redirect_uri: &quot;http://tjxt-user-t.itheima.net/xuecheng/auth/wxLogin&quot;</p><p>改为如下方式：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//请用微信生成二维码</span>
<span class="token keyword">function</span> <span class="token function">generateWxQrcode</span><span class="token punctuation">(</span><span class="token parameter">token</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> wxObj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WxLogin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">self_redirect</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;login_container&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">appid</span><span class="token operator">:</span> <span class="token string">&#39;wx17655f8047b85150&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">scope</span><span class="token operator">:</span> <span class="token string">&#39;snsapi_login&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">//redirect_uri: &quot;http://tjxt-user-t.itheima.net/xuecheng/auth/wxLogin&quot;,</span>
    <span class="token literal-property property">redirect_uri</span><span class="token operator">:</span> <span class="token string">&#39;http://tjxt-user-t.itheima.net/api/auth/wxLogin&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">state</span><span class="token operator">:</span> token<span class="token punctuation">,</span>
    <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">href</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、在 nginx.conf 配置 tjxt-user-t.itheima.net 域名</p><p>在 http 下添加 server_names_hash_bucket_size 64;如下：</p><p><img src="`+l+'" alt="image-20230608191044290"></p><p>配置 tjxt-user-t.itheima.net 虚拟主机，如下：</p><p><img src="'+u+'" alt="image-20230608191050756"></p><p>重新加载 nginx 的配置文件：nginx.exe -s reload</p><h3 id="_3、配置-hosts-文件" tabindex="-1"><a class="header-anchor" href="#_3、配置-hosts-文件" aria-hidden="true">#</a> 3、配置 hosts 文件</h3><p>修改 hosts 文件，配置 tjxt-user-t.itheima.net 如下：</p><p><img src="'+d+'" alt="image-20230608191057422"></p>',13);function g(v,x){const a=o("router-link");return i(),r("div",null,[m,s("nav",h,[s("ul",null,[s("li",null,[t(a,{to:"#_1、修改前端工程-xc-ui-pc-static-portal-目录下的-wxsign-html"},{default:e(()=>[n("1、修改前端工程 xc-ui-pc-static-portal 目录下的 wxsign.html")]),_:1})]),s("li",null,[t(a,{to:"#_3、配置-hosts-文件"},{default:e(()=>[n("3、配置 hosts 文件")]),_:1})])])]),_])}const y=p(k,[["render",g],["__file","index.html.vue"]]);export{y as default};