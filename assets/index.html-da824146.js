import{_ as p,r,o as n,c as o,a as e,e as s,w as i,b as a,d as l}from"./app-a153c100.js";const c="/MyBlog/assets/image-20210715193149837-f3cd42e6.png",g="/MyBlog/assets/image-20210715193224094-f5b1feef.png",m="/MyBlog/assets/image-20210715193334367-e6583fb2.png",d="/MyBlog/assets/image-20210715193414601-8d862c19.png",_="/MyBlog/assets/image-20210715193730096-a5a9c3aa.png",h="/MyBlog/assets/image-20210715193838719-ec6fa1ed.png",u="/MyBlog/assets/image-20210715193914039-a3bb460c.png",f="/MyBlog/assets/image-20210715194137982-6dc77ffa.png",b="/MyBlog/assets/image-20210715194413178-2eb2758c.png",B="/MyBlog/assets/image-20210715195053807-9e9b3bb8.png",y="/MyBlog/assets/image-20210715195144130-07fa4efd.png",x="/MyBlog/assets/image-20210715195410764-b982144e.png",M="/MyBlog/assets/image-20210715195844978-81eb2e46.png",k="/MyBlog/assets/image-20210715200155537-1f774397.png",v="/MyBlog/assets/image-20210715200243194-5dab1cf4.png",J="/MyBlog/assets/image-20210715200336526-c063762f.png",j={},N=e("h1",{id:"jmeter-快速入门-🧙",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#jmeter-快速入门-🧙","aria-hidden":"true"},"#"),a(" Jmeter 快速入门 🧙")],-1),q={class:"table-of-contents"},V=l('<h1 id="_1-安装-jmeter" tabindex="-1"><a class="header-anchor" href="#_1-安装-jmeter" aria-hidden="true">#</a> 1.安装 Jmeter</h1><p>Jmeter 依赖于 JDK，所以必须确保当前计算机上已经安装了 JDK，并且配置了环境变量。</p><h2 id="_1-1-下载" tabindex="-1"><a class="header-anchor" href="#_1-1-下载" aria-hidden="true">#</a> 1.1.下载</h2><p>可以 Apache Jmeter 官网下载，地址：http://jmeter.apache.org/download_jmeter.cgi</p><p><img src="'+c+'" alt="image-20210715193149837"></p><p>当然，我们课前资料也提供了下载好的安装包：</p><p><img src="'+g+'" alt="image-20210715193224094"></p><h2 id="_1-2-解压" tabindex="-1"><a class="header-anchor" href="#_1-2-解压" aria-hidden="true">#</a> 1.2.解压</h2><p>因为下载的是 zip 包，解压缩即可使用，目录结构如下：</p><p><img src="'+m+'" alt="image-20210715193334367"></p><p>其中的 bin 目录就是执行的脚本，其中包含启动脚本：</p><p><img src="'+d+'" alt="image-20210715193414601"></p><h3 id="_1-3-运行" tabindex="-1"><a class="header-anchor" href="#_1-3-运行" aria-hidden="true">#</a> 1.3.运行</h3><p>双击即可运行，但是有两点注意：</p><ul><li>启动速度比较慢，要耐心等待</li><li>启动后黑窗口不能关闭，否则 Jmeter 也跟着关闭了</li></ul><p><img src="'+_+'" alt="image-20210715193730096"></p><h1 id="_2-快速入门" tabindex="-1"><a class="header-anchor" href="#_2-快速入门" aria-hidden="true">#</a> 2.快速入门</h1><h2 id="_2-1-设置中文语言" tabindex="-1"><a class="header-anchor" href="#_2-1-设置中文语言" aria-hidden="true">#</a> 2.1.设置中文语言</h2><p>默认 Jmeter 的语言是英文，需要设置：</p><p><img src="'+h+'" alt="image-20210715193838719"></p><p>效果：</p><p><img src="'+u+`" alt="image-20210715193914039"></p><blockquote><p><strong>注意</strong>：上面的配置只能保证本次运行是中文，如果要永久中文，需要修改 Jmeter 的配置文件</p></blockquote><p>打开 jmeter 文件夹，在 bin 目录中找到 <strong>jmeter.properties</strong>，添加下面配置：</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">language</span><span class="token punctuation">=</span><span class="token value attr-value">zh_CN</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+f+'" alt="image-20210715194137982"></p><blockquote><p>注意：前面不要出现#，#代表注释，另外这里是下划线，不是中划线</p></blockquote><h2 id="_2-2-基本用法" tabindex="-1"><a class="header-anchor" href="#_2-2-基本用法" aria-hidden="true">#</a> 2.2.基本用法</h2><p>在测试计划上点鼠标右键，选择添加 &gt; 线程（用户） &gt; 线程组：</p><p><img src="'+b+'" alt="image-20210715194413178"></p><p>在新增的线程组中，填写线程信息：</p><p><img src="'+B+'" alt="image-20210715195053807"></p><p>给线程组点鼠标右键，添加 http 取样器：</p><p><img src="'+y+'" alt="image-20210715195144130"></p><p>编写取样器内容：</p><p><img src="'+x+'" alt="image-20210715195410764"></p><p>添加监听报告：</p><p><img src="'+M+'" alt="image-20210715195844978"></p><p>添加监听结果树：</p><p><img src="'+k+'" alt="image-20210715200155537"></p><p>汇总报告结果：</p><p><img src="'+v+'" alt="image-20210715200243194"></p><p>结果树：</p><p><img src="'+J+'" alt="image-20210715200336526"></p>',44);function w(C,z){const t=r("router-link");return n(),o("div",null,[N,e("nav",q,[e("ul",null,[e("li",null,[s(t,{to:"#_1-1-下载"},{default:i(()=>[a("1.1.下载")]),_:1})]),e("li",null,[s(t,{to:"#_1-2-解压"},{default:i(()=>[a("1.2.解压")]),_:1}),e("ul",null,[e("li",null,[s(t,{to:"#_1-3-运行"},{default:i(()=>[a("1.3.运行")]),_:1})])])]),e("li",null,[s(t,{to:"#_2-1-设置中文语言"},{default:i(()=>[a("2.1.设置中文语言")]),_:1})]),e("li",null,[s(t,{to:"#_2-2-基本用法"},{default:i(()=>[a("2.2.基本用法")]),_:1})])])]),V])}const K=p(j,[["render",w],["__file","index.html.vue"]]);export{K as default};
