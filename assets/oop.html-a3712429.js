import{_ as s,W as i,X as d,Y as a,Z as n,$ as r,a2 as t,C as c}from"./framework-3c1374b9.js";const o={},h=t(`<h1 id="进阶" tabindex="-1"><a class="header-anchor" href="#进阶" aria-hidden="true">#</a> 进阶</h1><h2 id="创建对象过程" tabindex="-1"><a class="header-anchor" href="#创建对象过程" aria-hidden="true">#</a> 创建对象过程</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span>args<span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token class-name">Demo</span> d <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Demo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 1：加载Demo.class文件进方法区，
 * 2：如果有静态变量，先默认初始化，再显示初始化
 * 3：如果有静态代码块，要执行，仅仅执行一次
 * 4：通过new在堆内存中开启空间，并明确其地址
 * 5：对对象中的属性进行默认初始化
 * 6：调用对应的构造函数进行初始化
 * 7：构造函数内部
 *   7.1：调用父类构造函数super()
 *   7.2：成员变量的显示初始化
 *   7.3：构造代码块初始化
 *   7.4：构造函数内容自定义内容初始化
 * 8：对象初始化完毕后，将地址赋值给d引用变量
 */</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="创建对象的内存图解" tabindex="-1"><a class="header-anchor" href="#创建对象的内存图解" aria-hidden="true">#</a> 创建对象的内存图解</h2><h3 id="_1-加载含main类的字节码文件" tabindex="-1"><a class="header-anchor" href="#_1-加载含main类的字节码文件" aria-hidden="true">#</a> 1：加载含main类的字节码文件</h3><p>因为main() 函数是程序的唯一入口，因此，包含main函数的Phone类的字节码文件会优先加载到方法区。如下图所示</p><h3 id="_2-main进栈" tabindex="-1"><a class="header-anchor" href="#_2-main进栈" aria-hidden="true">#</a> 2：main进栈</h3><h3 id="_3-执行main中代码" tabindex="-1"><a class="header-anchor" href="#_3-执行main中代码" aria-hidden="true">#</a> 3：执行main中代码</h3><p>开始执行main方法的第一行代码，从右向左执行，首先便遇到了new关键字，因为new关键字后面出现了Phone类，表示要实例化的是Phone类，而Phone类的字节码文件还没有加载到方法区，jvm不认识Phone，因此下一步是将Phone类的字节码文件加载到方法区（假设Phone类成员方法在方法区中的地址值为0x0088），如下图所示</p><h3 id="_4-new关键字开始" tabindex="-1"><a class="header-anchor" href="#_4-new关键字开始" aria-hidden="true">#</a> 4：new关键字开始</h3><p>Phone类的字节码文件加载到方法区之后，new关键字会在堆内存开辟空间给新的Phone类对象，假设Phone类对象在内存中的地址值为0x0011。如下图所示 :</p><h3 id="_5-在堆中开辟空间" tabindex="-1"><a class="header-anchor" href="#_5-在堆中开辟空间" aria-hidden="true">#</a> 5：在堆中开辟空间</h3><p>根据Phone类的字节码文件，在堆中分配的这块内存空间会被分成三部分，分别是属性值year，brand，和Phone类的成员方法，Phone类的成员方法部分其实是成员方法在方法区中的地址值，将来如果对象调用成员方法，可以通过这个地址值找到方法区中的成员方法。如下图所示 :</p><h3 id="_6-默认初始化" tabindex="-1"><a class="header-anchor" href="#_6-默认初始化" aria-hidden="true">#</a> 6：默认初始化</h3><p>对对象的属性值进行第一次初始化 : 默认初始化。对应于Phone类中，year是int类型默认值0；brand是String类型默认值null，如下图</p><h3 id="_7-显式初始化" tabindex="-1"><a class="header-anchor" href="#_7-显式初始化" aria-hidden="true">#</a> 7：显式初始化</h3><p>因为我们在定义Phone类时，对year和brand分别赋了初值，因此默认初始化之后，要进行第二次初始化 : 显式初始化。（如果类中没有对属性赋初值，没有这一步骤），如下图所示：</p><h3 id="_8-构造器初始化" tabindex="-1"><a class="header-anchor" href="#_8-构造器初始化" aria-hidden="true">#</a> 8：构造器初始化</h3><p>创建一个对象，需要构造器来进行构造器初始化，因为我们调用的是Phone类的带参构造，因此要进行第三次初始化 : 构造器初始化。即将属性值更改为调用带参构造时传入的形参。</p><h3 id="_9-常量池" tabindex="-1"><a class="header-anchor" href="#_9-常量池" aria-hidden="true">#</a> 9：常量池</h3><p>这里的字符串常量&quot;Huawei&quot;，在常量池中，也有自己的地址，调用模式类似于成员方法。brand属性这里其实保存的是&quot;Huawei&quot;在常量池中的地址值，如下图所示 :</p><h3 id="_10-new关键字结束" tabindex="-1"><a class="header-anchor" href="#_10-new关键字结束" aria-hidden="true">#</a> 10：new关键字结束</h3><p>最后，把对象的地址值返回给pDemo引用就可以了，如下图所示 到这里new关键字的任务就算是完成了，当我们通过&quot;对象.&quot; 的形式来调用时，实质就是通过引用pDemo指向的堆内存中对象的地址，进一步找到对象的成员变量或者成员方法。</p><h3 id="_11-成员方法的使用细节1" tabindex="-1"><a class="header-anchor" href="#_11-成员方法的使用细节1" aria-hidden="true">#</a> 11：成员方法的使用细节1</h3><p>续执行main方法中的代码，下一行是一条输出语句，但是输出内容中调用了pDemo对象的成员方法，因此，JVM会先通过pDemo这个引用找到堆内存中的对象，然后，再通过对象中成员方法的地址，找到方法区中的成员方法，进行调用。如下图所示</p><h3 id="_12-成员方法的使用细节2" tabindex="-1"><a class="header-anchor" href="#_12-成员方法的使用细节2" aria-hidden="true">#</a> 12：成员方法的使用细节2</h3><p>调用成员方法时，成员方法也要进栈，如下图所示 : 下一行调用getYear成员方法也是同理</p><div class="hint-container tip"><p class="hint-container-title">注意</p><p>栈中调用成员方法时，会根据创建的对象的地址，找到堆中成员方法的地址，继而找到方法区中的成员方法，接着，成员方法进栈。</p><p>栈中调用字符串常量等常量时，会根据创建的对象的地址，找到堆中成员变量的地址，继而找到方法区里面常量池中常量的地址。</p></div>`,28),l={href:"https://blog.csdn.net/TYRA9/article/details/128508466",target:"_blank",rel:"noopener noreferrer"};function p(u,m){const e=c("ExternalLinkIcon");return i(),d("div",null,[h,a("p",null,[n("参考"),a("a",l,[n("https://blog.csdn.net/TYRA9/article/details/128508466"),r(e)])])])}const b=s(o,[["render",p],["__file","oop.html.vue"]]);export{b as default};