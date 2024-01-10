import{_ as p,r as o,o as l,c,a as n,e as t,w as e,b as a,d as i}from"./app-a153c100.js";const u="/MyBlog/assets/1608884499827-b05bea3d.png",r="/MyBlog/assets/1608881486883-5ce73e12.png",d="/MyBlog/assets/1608883652374-59a1699d.png",k={},m=n("h1",{id:"_04-javascript-四",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_04-javascript-四","aria-hidden":"true"},"#"),a(" 04 - JavaScript（四） 🌹")],-1),h={class:"table-of-contents"},v=i(`<h2 id="dom-编程" tabindex="-1"><a class="header-anchor" href="#dom-编程" aria-hidden="true">#</a> DOM 编程</h2><h3 id="插入-dom" tabindex="-1"><a class="header-anchor" href="#插入-dom" aria-hidden="true">#</a> 插入 DOM</h3><p>js-dom 中向指定节点插入元素的方法主要包含以下几类：</p><ol><li>appendChild(node)：向当前节点中插入子元素（子元素必须是一个 dom 对象）</li><li>insertBefore(newNode,refNode)：向当前节点中的 refNode 之前插入 newNode</li><li>innerHTML：向当前节点插入 html 代码（覆盖原有的内容）</li></ol><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>dom插入演示<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>button<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>insert1<span class="token punctuation">&quot;</span></span> <span class="token attr-name">data-list</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[1,2,3,4,5]<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>插入元素<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>button<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>insert2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>插入输入框<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
      <span class="token comment">//获取目标节点</span>
      <span class="token keyword">var</span> box1 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;#box1&#39;</span><span class="token punctuation">)</span>
      document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;insert1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//创建节点</span>
        <span class="token keyword">var</span> hr <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;hr&#39;</span><span class="token punctuation">)</span>
        <span class="token comment">//将指定节点插入到目标节点</span>
        <span class="token comment">// let e = box1.appendChild(hr);</span>
        <span class="token keyword">let</span> h1 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;h1&#39;</span><span class="token punctuation">)</span>
        <span class="token comment">//向指定节点中的某一个子节点之前插入元素</span>
        box1<span class="token punctuation">.</span><span class="token function">insertBefore</span><span class="token punctuation">(</span>hr<span class="token punctuation">,</span> h1<span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>

      document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;insert2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//创建节点</span>
        <span class="token keyword">var</span> input <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;input&#39;</span><span class="token punctuation">)</span>
        input<span class="token punctuation">.</span>type <span class="token operator">=</span> <span class="token string">&#39;text&#39;</span>
        input<span class="token punctuation">.</span>textContent <span class="token operator">=</span> <span class="token string">&#39;123123123&#39;</span>
        input<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">&#39;softeem&#39;</span>
        input<span class="token punctuation">.</span>className <span class="token operator">=</span> <span class="token string">&#39;input-box&#39;</span>
        input<span class="token punctuation">.</span>id <span class="token operator">=</span> <span class="token string">&#39;username&#39;</span>
        <span class="token comment">//setAttribute用于向元素中添加属性和属性值（即便属性不存在该元素上）</span>
        <span class="token comment">//data-*   data-msg    data-user-name</span>
        input<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;data-msg&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;helloworld&#39;</span><span class="token punctuation">)</span>
        box1<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>input<span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="修改-dom" tabindex="-1"><a class="header-anchor" href="#修改-dom" aria-hidden="true">#</a> 修改 DOM</h3><ul><li>innerText：将文本内容插入到指定节点（会覆盖原先的内容）</li><li>innerHTML：将 html 代码插入到指定节点（会覆盖原先的内容）</li></ul><h3 id="删除-dom" tabindex="-1"><a class="header-anchor" href="#删除-dom" aria-hidden="true">#</a> 删除 DOM</h3><ul><li>removeChild(childNode)：删除当前节点下指定的子节点</li><li>remove()：删除当前节点对象</li></ul><h3 id="dom-补充" tabindex="-1"><a class="header-anchor" href="#dom-补充" aria-hidden="true">#</a> DOM 补充</h3><ul><li>children: dom 元素通过该属性可以获取当前节点下的所有的子节点（集合）</li><li>parentNode：dom 元素通过该属性可以获取当前节点的父节点(唯一)</li></ul><h2 id="bom" tabindex="-1"><a class="header-anchor" href="#bom" aria-hidden="true">#</a> BOM</h2><h3 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h3><p>BOM:Brower Object Model(浏览器对象模型)；即 js 中将有关浏览器的操作的顶层元素都是来自 window 对象；对外界提供了一个用于操作浏览器的访问接口，通过 bom 可以获取 window 相关信息，比如屏幕的尺寸，浏览器的详细信息（版本，内核，配置等），页面跳转，历史记录，定位，本地存储等，对于移动设备来说还可以获取与本机设备交互的硬件接口(位置信息，蓝牙，摄像头，陀螺仪)</p><h3 id="window" tabindex="-1"><a class="header-anchor" href="#window" aria-hidden="true">#</a> window</h3><p>window 对象是 BOM 的顶层对象，bom 中的一些核心对象都是源自于 window，全局函数的 this 指针一般都是指向 window</p><p><strong>window 的常见属性：</strong></p><ul><li>innerWidth：当前窗口可用区域的宽度</li><li>innerHeight：当前窗口可用区域的高度</li><li>outerWidth：浏览器窗口开启的实际宽度</li><li>outerHeight：浏览器开启的实际高度</li></ul><p><img src="`+u+'" alt="1608884499827"></p><p><strong>基于 window 对象的弹窗组件</strong></p><ul><li>alert()：警告框</li><li>confirm()：确认框</li><li>prompt()：消息输入框</li><li>open()：自定义窗口</li></ul><h3 id="navigator" tabindex="-1"><a class="header-anchor" href="#navigator" aria-hidden="true">#</a> navigator</h3><h3 id="screen" tabindex="-1"><a class="header-anchor" href="#screen" aria-hidden="true">#</a> screen</h3><h3 id="location" tabindex="-1"><a class="header-anchor" href="#location" aria-hidden="true">#</a> location</h3><h3 id="history" tabindex="-1"><a class="header-anchor" href="#history" aria-hidden="true">#</a> history</h3><h3 id="localstorage-sessionstorage" tabindex="-1"><a class="header-anchor" href="#localstorage-sessionstorage" aria-hidden="true">#</a> localStorage&amp;sessionStorage</h3><h2 id="练习" tabindex="-1"><a class="header-anchor" href="#练习" aria-hidden="true">#</a> 练习</h2><ol><li><p>表单验证，有如下表单：</p><p><img src="'+r+'" alt="1608881486883"></p><p>要求完成验证功能：</p><ol><li>用户名必须填写</li><li>密码长度 8-16 之间</li><li>邮箱地址，手机号必须符合正确格式</li><li>必须同意（勾选复选框）才能提交</li></ol><blockquote><p>要求所有错误提示同时显示</p></blockquote></li><li><p>完成一个选项卡效果</p><p><img src="'+d+'" alt="1608883652374"></p></li></ol>',28);function g(b,f){const s=o("router-link");return l(),c("div",null,[m,n("nav",h,[n("ul",null,[n("li",null,[t(s,{to:"#dom-编程"},{default:e(()=>[a("DOM 编程")]),_:1}),n("ul",null,[n("li",null,[t(s,{to:"#插入-dom"},{default:e(()=>[a("插入 DOM")]),_:1})]),n("li",null,[t(s,{to:"#修改-dom"},{default:e(()=>[a("修改 DOM")]),_:1})]),n("li",null,[t(s,{to:"#删除-dom"},{default:e(()=>[a("删除 DOM")]),_:1})]),n("li",null,[t(s,{to:"#dom-补充"},{default:e(()=>[a("DOM 补充")]),_:1})])])]),n("li",null,[t(s,{to:"#bom"},{default:e(()=>[a("BOM")]),_:1}),n("ul",null,[n("li",null,[t(s,{to:"#概述"},{default:e(()=>[a("概述")]),_:1})]),n("li",null,[t(s,{to:"#window"},{default:e(()=>[a("window")]),_:1})]),n("li",null,[t(s,{to:"#navigator"},{default:e(()=>[a("navigator")]),_:1})]),n("li",null,[t(s,{to:"#screen"},{default:e(()=>[a("screen")]),_:1})]),n("li",null,[t(s,{to:"#location"},{default:e(()=>[a("location")]),_:1})]),n("li",null,[t(s,{to:"#history"},{default:e(()=>[a("history")]),_:1})]),n("li",null,[t(s,{to:"#localstorage-sessionstorage"},{default:e(()=>[a("localStorage&sessionStorage")]),_:1})])])]),n("li",null,[t(s,{to:"#练习"},{default:e(()=>[a("练习")]),_:1})])])]),v])}const w=p(k,[["render",g],["__file","index.html.vue"]]);export{w as default};
