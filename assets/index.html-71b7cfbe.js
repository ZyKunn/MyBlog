import{_ as e,o as t,c as o,d as c}from"./app-a153c100.js";const d={},p=c('<h1 id="_06-js-单引号与双引号的区别" tabindex="-1"><a class="header-anchor" href="#_06-js-单引号与双引号的区别" aria-hidden="true">#</a> 06 - JS 单引号与双引号的区别！ 🌼</h1><p>首先要说明，在 JS 中单引号与双引号可以同时使用，但是要有规则。</p><p><code>一:</code>外面用了双引号，里面就不可以在用双引号了；外面用了单引号，里面也就不可以用单引号了。</p><p><code>==:</code>二`不同类型引号之间可以嵌套，最多两层（用转义可以套多层，但是可读性差，不建议这么用！）；比如单引号中套双引号，或者双引号中套单引号。</p><p><code>三:</code>单引号转义为&#39;；双引号转义为&quot;；</p><p><code>四:</code>单引号与双引号之间的字符串是可以连接的；例如：&#39;a&#39;+&quot;b&quot;+&quot;c&quot;+&#39;d&#39; = &quot;abcd&quot;</p><p><code>五:</code> <code>&lt;div class=&#39;con&quot;+&quot;tent&#39;&gt;&lt;/div&gt;</code> 相当于 <code>&lt;div class=&#39;content&#39;&gt;&lt;/div&gt;</code>这里就是单引号套双引号的例子；</p><p><code>六:</code>从编译速度上来看，单引号在浏览器中被编译的速度更快；</p><p><code>七:</code>单引号与双引号在各自单独使用时，基本没有区别；例如：</p><p>var exm = &#39;案例&#39;；var exe = &quot;案例&quot;；变量 exm 与 exe 的内容都是字符串 案例；</p><p>console.info(exe == exe) ；//输出 true；</p><p><code>八:</code>单引号和双引号混合使用时，需要注意：</p><p>一般出现在 JS 拼接字符串里面，或者 html 元素的属性里面，单引号和双引号必须成双成对的出现，可以单引号在外面，也可以双引号在外面；</p><p>var exm = &quot;&#39;案例&#39;&quot;；//这里变量 exm 的内容是字符串&#39;案例&#39;，这里单引号也是字符串的一部分；</p><p>var exe = &#39;&quot;案例&quot;&#39;；//这里变量 exe 的内容是字符串&quot;案例&quot;，这里的双引号也是字符串的一部分；</p><p>console.info(exe == exe) ；//输出 false；他们是不一样的字符串；</p><p><code>九:</code>字符串拼接：</p><p>var html = <code>&quot;&lt;div class = &#39;content&#39;&gt;&lt;/div&gt;&quot;</code>；//这里外面是双引号，里面就不能在用双引号了，引号必须成双成对，所以这里里面用了单引号；</p><p>同理，var html = <code>&#39;&lt;div class = &quot;content&quot;&gt;&lt;/div&gt;&#39;</code>；//也是可以的；</p><p>那么只用一种引号能不能实现呢，也是可以的；但是必须对引号进行转义，告诉浏览器这里的引号只是字符串，而不是引号结束符。例如：</p><p>var html = <code>&#39;&lt;div class = \\&#39;content\\&#39;&gt;&lt;/div&gt;&#39;</code>或者 var htm = <code>&quot;&lt;div class = \\&quot;content\\&quot;&gt;&lt;/div&gt;&quot;</code>；</p>',21),a=[p];function l(n,s){return t(),o("div",null,a)}const i=e(d,[["render",l],["__file","index.html.vue"]]);export{i as default};