import{_ as a,W as n,X as s,a2 as e}from"./framework-3c1374b9.js";const t={},i=e(`<h1 id="java基础-面向对象" tabindex="-1"><a class="header-anchor" href="#java基础-面向对象" aria-hidden="true">#</a> Java基础 - 面向对象</h1><h2 id="解释下什么是面向对象" tabindex="-1"><a class="header-anchor" href="#解释下什么是面向对象" aria-hidden="true">#</a> 解释下什么是面向对象</h2><p>面向对象（Object Oriented，OO）是一种程序设计的思想和方法，强调将系统中的各个组成部分看作对象，通过对象之间的交互来完成系统功能。每个对象都是具有特定属性和行为的实体，可以封装数据和方法，继承其他对象的特性，以及与其他对象进行通信和协作。面向对象的程序设计将问题看作是由许多相互协作的对象所组成的，通过分析问题域中的对象、关系和交互来进行抽象和建模，最终实现一个面向对象的程序系统</p><h2 id="面向对象和面向过程的区别" tabindex="-1"><a class="header-anchor" href="#面向对象和面向过程的区别" aria-hidden="true">#</a> 面向对象和面向过程的区别</h2><ul><li>抽象程度不同：面向过程更注重流程和算法，面向对象更注重抽象和模型化。</li><li>数据封装性不同：面向过程的数据封装性较弱，数据和操作之间的联系较紧密；面向对象的数据封装性较强，数据和操作之间的联系较松散，对外部的访问只能通过对象的接口进行。</li><li>继承和多态性不同：面向过程没有继承和多态的概念，面向对象支持继承和多态，可以通过继承和多态来实现代码重用和扩展性。</li><li>设计思想不同：面向过程更注重过程和算法的设计，面向对象更注重问题的建模和设计，强调的是问题域中的对象、关系和交互。</li></ul><h2 id="创建对象的几种方式" tabindex="-1"><a class="header-anchor" href="#创建对象的几种方式" aria-hidden="true">#</a> 创建对象的几种方式</h2><ul><li>使用 new 关键字：使用 new 关键字可以在堆内存中为一个类创建一个新的对象实例。例如，下面的代码创建了一个String类的对象</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">String</span> str <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">&quot;abc&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>使用 Class 类的 newInstance() 方法：使用 Class 类的 newInstance() 方法可以动态地创建一个类的对象，该方法调用的是类的默认构造方法。例如，下面的代码创建了一个String类的对象</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">String</span> str <span class="token operator">=</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">newInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>使用 Constructor 类的 newInstance() 方法：使用 Constructor 类的 newInstance() 方法可以根据传入的参数创建一个类的对象，该方法可以调用指定的构造方法。例如，下面的代码创建了一个String类的对象</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Constructor</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> constructor <span class="token operator">=</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">getConstructor</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> str <span class="token operator">=</span> constructor<span class="token punctuation">.</span><span class="token function">newInstance</span><span class="token punctuation">(</span><span class="token string">&quot;Hello World&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>使用 clone() 方法：使用 clone() 方法可以复制一个已有的对象，创建一个新的对象。要使用该方法，需要保证被复制的对象实现了 Cloneable 接口。例如，下面的代码创建了一个String类的对象：</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">String</span> str <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">&quot;Hello World&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> str2 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">)</span> str<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>使用反序列化：使用反序列化可以从文件或网络中读取一个对象的二进制表示，并转换成一个对象。要使用该方法，需要保证被读取的类实现了 Serializable 接口。例如，下面的代码创建了一个String类的对象</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">String</span> str <span class="token operator">=</span> <span class="token string">&quot;Hello World&quot;</span><span class="token punctuation">;</span>
<span class="token class-name">ObjectOutputStream</span> out <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ObjectOutputStream</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FileOutputStream</span><span class="token punctuation">(</span><span class="token string">&quot;test.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
out<span class="token punctuation">.</span><span class="token function">writeObject</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">ObjectInputStream</span> in <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ObjectInputStream</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FileInputStream</span><span class="token punctuation">(</span><span class="token string">&quot;test.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> str2 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">)</span> in<span class="token punctuation">.</span><span class="token function">readObject</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="类与对象的关系" tabindex="-1"><a class="header-anchor" href="#类与对象的关系" aria-hidden="true">#</a> 类与对象的关系</h2><p><strong>类</strong>：对事物的描述，需要体现属性和行为</p><p><strong>对象</strong>：该类事物创建的实体，通过该对象调用具有的属性和行为</p><h2 id="成员变量和局部变量的区别" tabindex="-1"><a class="header-anchor" href="#成员变量和局部变量的区别" aria-hidden="true">#</a> 成员变量和局部变量的区别</h2><ul><li><strong>定义的位置不同</strong> 成员变量定义在类中，局部变量定义在方法以及语句里</li><li><strong>在内存中的位置不同</strong> 成员变量储存在堆内存的对象中，局部变量储存在栈内存的方法中</li><li><strong>生命周期不同</strong> 成员变量随着对象的出现而出现，随着对象消失而消失；局部变量随着方法的出现而出现，随着方法的弹栈而消失</li><li><strong>初始化不同</strong> 成员变量因为在堆内存中，所以有默认初始化值；局部变量没有默认初始化值，必须初始化后才可以使用<div class="hint-container tip"><p class="hint-container-title">成员变量初始化几次？</p><p>两次，一次默认初始化，一次显示初始化</p></div></li></ul><h2 id="封装的好处" tabindex="-1"><a class="header-anchor" href="#封装的好处" aria-hidden="true">#</a> 封装的好处</h2><p>提高了代码的复用性，隐藏了实现细节，提高了安全性</p><h2 id="构造函数在代码中的体现" tabindex="-1"><a class="header-anchor" href="#构造函数在代码中的体现" aria-hidden="true">#</a> 构造函数在代码中的体现</h2><p>1：没有返回值类型，因为构造对象，创建完就结束，不需要结果，void也不写，因为要有区别于一般函数</p><p>2：构造函数的名称和类名一致</p><p>3：没有具体的返回值</p><h2 id="构造函数的细节" tabindex="-1"><a class="header-anchor" href="#构造函数的细节" aria-hidden="true">#</a> 构造函数的细节</h2><p>1：一个类中可以有多个构造函数。他们的存在形式是以重载形式体现</p><p>2：构造函数也是有return语句的，用来结束初始化动作</p><p>3：构造函数能被private修饰，其他程序无法创建该类对象（找不到合适的构造器）</p><h2 id="构造函数与一般函数区别" tabindex="-1"><a class="header-anchor" href="#构造函数与一般函数区别" aria-hidden="true">#</a> 构造函数与一般函数区别</h2><p>1：返回值差距，构造函数没有返回值类型，没有具体的返回值</p><p>2：运行上有差别，对象一创建就会调用对应的构造函数。一般方法是对象创建后，才会调用所需要的一般函数</p><p>3：构造函数在对象创建时，仅调用一次（初始化动作只做一次，而且先执行），一般方法可以被对象调用多次</p><h2 id="构造函数之前如何互相调用" tabindex="-1"><a class="header-anchor" href="#构造函数之前如何互相调用" aria-hidden="true">#</a> 构造函数之前如何互相调用</h2><p>利用this关键字调用(至多调用一次)，this(实参列表)就会调用对应的构造函数<strong>必须定义在函数第一行，否则有可能引起冲突</strong></p><h2 id="this到底代表什么" tabindex="-1"><a class="header-anchor" href="#this到底代表什么" aria-hidden="true">#</a> this到底代表什么</h2><p>this代表对象，哪个对象调用了this所在函数，this就代表哪个对象。</p><p>可以用this来标识哪个变量是成员变量（这个标识也可以省略不写）但是，当局部变量和成员变量同名时，必须用this来标识成员变量</p><h2 id="什么时候定义静态方法" tabindex="-1"><a class="header-anchor" href="#什么时候定义静态方法" aria-hidden="true">#</a> 什么时候定义静态方法</h2><p>定义功能时，如果功能不需要访问类中的成员变量（非静态）时，该功能就需要静态修饰（<strong>实际开发中工具类一般定义静态</strong>）</p><h3 id="静态方法注意事项" tabindex="-1"><a class="header-anchor" href="#静态方法注意事项" aria-hidden="true">#</a> 静态方法注意事项</h3><p>1：静态方法不能访问非静态的成员，但是非静态可以访问静态成员（静态的弊端在于访问出现局限性，好处是可以直接被类名调用）</p><p>2：静态方法中不允许出现this，super关键字</p><div class="hint-container tip"><p class="hint-container-title">为啥不允许出现this,super关键字?</p><p>1：静态是随着类的加载就加载，随着类的消失就消失</p><p>2：静态优先于对象存在，被对象共享</p><p>3：因为静态先存在与内存中，无法访问后来的对象中的数据，所以静态方法无法访问非静态。而且内部无法写this，因为这时候可能对象不存在，this没有任何指向。</p></div><h2 id="什么时候定义静态变量呢" tabindex="-1"><a class="header-anchor" href="#什么时候定义静态变量呢" aria-hidden="true">#</a> 什么时候定义静态变量呢</h2><p>当该成员变量的值，每一个对象都一致时，就对该成员变量静态修饰</p><h2 id="静态变量和成员变量的区别" tabindex="-1"><a class="header-anchor" href="#静态变量和成员变量的区别" aria-hidden="true">#</a> 静态变量和成员变量的区别</h2><h4 id="_1-所属的范围不同" tabindex="-1"><a class="header-anchor" href="#_1-所属的范围不同" aria-hidden="true">#</a> 1：所属的范围不同</h4><p>静态变量所属于类，成员变量所属于对象，静态变量也成为：类变量；成员变量也称为实例变量。</p><h4 id="_2-调用不同" tabindex="-1"><a class="header-anchor" href="#_2-调用不同" aria-hidden="true">#</a> 2：调用不同</h4><p>静态变量可以被类和对象调用（一般都是用类名调用）成员变量只能被对象调用</p><h4 id="_3-加载时期不同" tabindex="-1"><a class="header-anchor" href="#_3-加载时期不同" aria-hidden="true">#</a> 3：加载时期不同</h4><p>静态变量随着类的加载而加载，成员变量随着对象的加载而加载</p><h4 id="_4-内存储存区域不同" tabindex="-1"><a class="header-anchor" href="#_4-内存储存区域不同" aria-hidden="true">#</a> 4：内存储存区域不同</h4><p>静态变量储存在方法区中，成员变量储存在堆内存中</p><h2 id="什么是构造代码块" tabindex="-1"><a class="header-anchor" href="#什么是构造代码块" aria-hidden="true">#</a> 什么是构造代码块</h2><p>只要创建对象就会被调用，会给所有对象初始化，构造函数只给对应的对象真对应的初始化， 这里面可以定义不同构造函数的共性代码(放到类里面的叫做构造代码块）</p><h2 id="局部代码块的作用" tabindex="-1"><a class="header-anchor" href="#局部代码块的作用" aria-hidden="true">#</a> 局部代码块的作用</h2><p>控制局部变量的生命周期</p><h2 id="继承的好处" tabindex="-1"><a class="header-anchor" href="#继承的好处" aria-hidden="true">#</a> 继承的好处</h2><p>提高代码复用性，让类与类之间产生关系，给另一个特征多态提供了前提</p><h2 id="什么时候定义继承" tabindex="-1"><a class="header-anchor" href="#什么时候定义继承" aria-hidden="true">#</a> 什么时候定义继承</h2><p>必须保证类与类之间有所属关系(is a)关系。xxx是yyy中的一种<br> 苹果是水果的一种，狗是犬的一种。</p><h2 id="在java中继承的体现" tabindex="-1"><a class="header-anchor" href="#在java中继承的体现" aria-hidden="true">#</a> 在java中继承的体现</h2><p>java允许单继承，不直接支持多继承<br> 单继承：一个子类只能有一个父类<br> 多继承：一个子类可以有多个父类<br> 允许多重继承。C继承B，B继承A，那么C就间接继承A<strong>java所有对象都间接或直接继承Object</strong><br></p><div class="hint-container tip"><p class="hint-container-title">如果多继承会出现什么问题</p><p>多个父类定义了同一个方法，但是方法实现不同，调用就会产生不确定性，所以java保留了多继承的好处，改良弊端，用多实现来体现</p></div><h2 id="重写的注意事项" tabindex="-1"><a class="header-anchor" href="#重写的注意事项" aria-hidden="true">#</a> 重写的注意事项</h2><p>1：子类重写父类，必须要保证权限大于或者等于父类的权限<br> 2：静态重写静态<br> 3：函数名和参数列表返回值都要一样<br> 4：子类不能刨除比父类更多的异常<br> 5：方法定义为final时不能重写</p><h2 id="super-关键字的作用" tabindex="-1"><a class="header-anchor" href="#super-关键字的作用" aria-hidden="true">#</a> super 关键字的作用</h2><p>super 是Java语言中的一个关键字，用于引用父类的成员变量和方法，或调用父类的构造方法。在一个子类中，可以使用 super 关键字来访问父类的实例变量和实例方法。</p><p>以下是一些使用 super 关键字的例子</p><ul><li>访问父类的实例变量在上面的例子中，子类 Child 继承了父类 Parent 的实例变量 x，在子类中使用 super.x 可以访问父类的 x 变量并进行赋值。</li><li>调用父类的构造方法在上面的例子中，子类 Child 继承了父类 Parent 的构造方法，并在自己的构造方法中使用 super(x) 调用了父类的构造方法进行初始化。</li><li>调用父类的实例方法在上面的例子中，子类 Child 继承了父类 Parent 的方法 doSomething()，在子类中使用 super.doSomething() 可以调用父类的方法并执行其逻辑。同时，子类也可以在自己的方法中添加自己的逻辑。</li></ul><h2 id="super和this区别" tabindex="-1"><a class="header-anchor" href="#super和this区别" aria-hidden="true">#</a> super和this区别</h2><p>this：代表本类对象的引用<br> super：代表父类的内存空间</p><div class="hint-container tip"><p class="hint-container-title">子类中的构造函数为什么有一句隐式的super()呢？</p><p>子类会继承父类中的内容，所以在子类初始化的时候，必须去父类中执行父类初始化动作，可以更方便的时候父类中的内容，当父类没有空参数构造函数时，子类的构造函数必须在第一行显式调用super来访问父类的其他的构造函数</p></div><h2 id="子类构造函数实例化过程" tabindex="-1"><a class="header-anchor" href="#子类构造函数实例化过程" aria-hidden="true">#</a> 子类构造函数实例化过程</h2><h4 id="细节" tabindex="-1"><a class="header-anchor" href="#细节" aria-hidden="true">#</a> 细节</h4><p>1：如果子类的构造函数第一行写了this调用本类的其他构造函数，那么super调用父类的语句还有吗？ 没有的，因为this()或者super()，只能定义在构造函数的第一行，因为初始化动作要先执行。 2：父类构造函数是否有隐式的super呢？ 也是有的，只要是构造函数，默认第一行都是super() 3：父类的父类是谁？super调用的到底是谁的构造函数呢？ Java体系在设计时，定义一个所有对象的父类Object。</p><h4 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h4><p>类中的构造函数默认第一行都有隐式的super语句，在访问父类的构造函数，所以子类的构造函数既可以给自己的对象初始化，也可以给自己的父类对象初始化，如果默认的隐式super语句没有对应的构造函数，必须在构造函数中显示声明所调用的构造函数(通过this或者super)。</p><h2 id="final关键字" tabindex="-1"><a class="header-anchor" href="#final关键字" aria-hidden="true">#</a> final关键字</h2><p>final是一个修饰符，可以修饰类，方法，变量（成员变量，局部变量，静态变量）</p><h3 id="特点" tabindex="-1"><a class="header-anchor" href="#特点" aria-hidden="true">#</a> 特点</h3><p>1：final修饰的类，是一个最终类，不能再派生子类（无法被继承）<br> 2：final修饰的方法，是一个最终方法，不可以被重写。<br> 3：final修饰的变量是一个常量，只能被赋值一次。</p><h3 id="什么时候会在程序中定义final常量呢" tabindex="-1"><a class="header-anchor" href="#什么时候会在程序中定义final常量呢" aria-hidden="true">#</a> 什么时候会在程序中定义final常量呢？</h3><p>当程序中一个数据使用时是固定不变的，这时候为了增加阅读性，可以给该数据起一个名字，这就是变量，为了保证变量的值不被修改 加上final修饰，这就是一个阅读性很强的常量<strong>书写规范</strong>被final修饰的常量名所有字母都是大写的，如果由多个单词组成，单词间用&quot;_&quot;连接。</p><h2 id="抽象类的特点" tabindex="-1"><a class="header-anchor" href="#抽象类的特点" aria-hidden="true">#</a> 抽象类的特点</h2><p>1：抽象类和抽象方法都需要被abstract修饰</p><p>2：抽象方法一定要定义在抽象类中</p><p>3：抽象类不可以创建实例，原因：调用抽象方法没有意义。</p><p>3：只有覆盖了抽象类中所有的抽象方法后，其子类才可以实例化，否则，该子类还是一个抽象类。</p><p>4：如果一个类中有抽象方法，那么这个类一定是抽象类</p><p>5：抽象类中不一定有抽象方法</p><p>6：抽象类中可以存在抽象方法</p><p>7：抽象类中可以存在构造方法</p><p>8：抽象类中可以存在普通属性、方法、静态属性和静态方法</p><p>9：抽象类中的抽象方法需要有子类实现，如果子类不实现，则子类也需要定义为抽象的</p><div class="hint-container tip"><p class="hint-container-title">抽象类一定是一个父类吗？</p><p>是，因为不断抽取而来的</p></div><div class="hint-container tip"><p class="hint-container-title">抽象类是否有构造函数？</p><p>有，虽然不能给自己的对象初始化，但是可以给自己的子类对象初始化。</p></div><h2 id="抽象类和一般类的异同点" tabindex="-1"><a class="header-anchor" href="#抽象类和一般类的异同点" aria-hidden="true">#</a> 抽象类和一般类的异同点</h2><h3 id="相同点" tabindex="-1"><a class="header-anchor" href="#相同点" aria-hidden="true">#</a> 相同点</h3><p>1：他们都是用来描述事物的。 2：他们之中都可以定义属性和行为。</p><h3 id="不同点" tabindex="-1"><a class="header-anchor" href="#不同点" aria-hidden="true">#</a> 不同点</h3><p>1：一般类可以具体的描述事物，抽象类描述事物不具体。 2：抽象类中可以多定义一个成员：抽象函数 3：一般类可以创建对象，而抽象类不能创建对象</p><h2 id="抽象类是否可以不定义抽象方法" tabindex="-1"><a class="header-anchor" href="#抽象类是否可以不定义抽象方法" aria-hidden="true">#</a> 抽象类是否可以不定义抽象方法</h2><p>是可以的，那这个抽象类存在有什么意义呢？仅仅是不让该类创建对象</p><h2 id="抽象关键字abstract不可以和哪些关键字共存" tabindex="-1"><a class="header-anchor" href="#抽象关键字abstract不可以和哪些关键字共存" aria-hidden="true">#</a> 抽象关键字abstract不可以和哪些关键字共存</h2><ul><li><strong>private</strong>: 因为一个abstract方法需要被重写，所以不能修饰为private;</li><li><strong>final</strong>: 因为一个abstract方法需要被重写。被final修饰的方法是不能被重写的，所以不能同final共存；</li><li><strong>static</strong>: 因为一个abstract方法没有方法体。静态方法需要对方法体执行内容分配空间，所以不能同static共存(因为我写抽象方法的目的就是为了继承和重写，而 static 关键字修饰的算不上被重写。)；</li></ul><h2 id="接口的特点" tabindex="-1"><a class="header-anchor" href="#接口的特点" aria-hidden="true">#</a> 接口的特点</h2><ul><li>1: 接口不可以创建对象</li><li>2：子类必须覆盖接口中所有的抽象方法后，子类次啊可以实例化，否则字类是一个抽象类</li><li>3：解决类多继承的弊端，将多继承这种机制在Java中通过多实现完成了。</li><li>4：类与类之间是继承(is a)关系，类与接口之间是实现关系(like a),接口与接口之间是继承关系</li><li>5：接口支持多继承。</li></ul><h2 id="接口和抽象类的区别" tabindex="-1"><a class="header-anchor" href="#接口和抽象类的区别" aria-hidden="true">#</a> 接口和抽象类的区别</h2><ul><li><code>1.实现方式</code>：抽象类是一个类，可以包含成员变量、成员方法、构造方法等，而接口是一种纯抽象的定义，只包含常量和抽象方法的定义，没有具体实现。</li><li><code>2.继承</code>：子类只能继承一个抽象类，而接口可以被一个类实现多个。由于Java中不支持多重继承，因此接口提供了一种实现多个行为的方式。</li><li><code>3.构造方法</code>：抽象类可以有构造方法，而接口不能有构造方法。</li><li><code>4.访问修饰符</code>：抽象类中的成员变量和成员方法可以使用任何访问修饰符，而接口中的成员变量和成员方法默认都是 public 的。</li><li><code>5.变量类型</code>：抽象类中可以有普通成员变量，而接口中只能定义常量。</li><li><code>6.默认实现</code>：抽象类中可以包含实现方法，子类可以直接继承这些实现方法，而接口中的方法只能是抽象方法，子类必须实现这些方法。</li><li><code>7.设计目的</code>：抽象类的设计目的是为了代码复用和扩展，而接口的设计目的是为了实现多态性和解耦。</li></ul><h2 id="重载和重写的区别" tabindex="-1"><a class="header-anchor" href="#重载和重写的区别" aria-hidden="true">#</a> 重载和重写的区别</h2><p><strong>1：方法重载（Overloading）</strong>：是指在一个类中定义了多个同名的方法，但它们的参数类型、个数或顺序不同。编译器根据方法调用时传入的实参类型和个数，在所有符合条件的方法中，选择一个最为匹配的方法进行调用。</p><p>方法重载的特点是：同一个类中出现方法名相同、参数列表不同的多个方法，返回值类型可以相同也可以不同，调用方法时，编译器根据实参的个数、类型、顺序等信息确定调用哪个方法。</p><p><strong>2：方法重写（Overriding）</strong>：是指在子类中定义一个与父类中同名、同参数列表、同返回类型的方法，并且该方法的访问修饰符和抛出的异常类型都不能比父类中的方法更严格。当子类对象调用该方法时，会覆盖父类中的同名方法，执行子类中的方法。</p><p>方法重写的特点是：子类中定义了一个与父类中同名、同参数列表、同返回类型的方法，子类中的方法覆盖了父类中的方法，调用方法时，实际上调用的是子类中的方法。</p><p><code>总的来说，方法重载是在同一个类中，方法名相同，参数列表不同，返回值类型可以相同也可以不同，用于提高代码的复用性；方法重写是在子类中对父类中已有的方法进行重新定义，用于实现多态性</code></p><h2 id="如何理解没有抽象方法的抽象类" tabindex="-1"><a class="header-anchor" href="#如何理解没有抽象方法的抽象类" aria-hidden="true">#</a> 如何理解没有抽象方法的抽象类</h2><p>有抽象方法的抽象类的作用：</p><p>1.抽象类不能new实例化</p><p>2.抽象类可以有构造方法，但是构造方法不能是抽象方法</p><p>3.通过子类继承，可以调用抽象类的构造方法</p><h2 id="多态" tabindex="-1"><a class="header-anchor" href="#多态" aria-hidden="true">#</a> 多态</h2><p>所谓多态，表示一个对象具有多种形态<br> 多态是继封装、继承之后，面向对象的第三大特性。最终多态体现为父类引用变量可以指向子类对象。 多态的定义格式：就是父类的引用变量指向子类对象</p><p>父类类型 变量名 = new 子类类型();<br> 变量名.方法名();</p><p>多态分为编译时多态和运行时多态:</p><ul><li>编译时多态主要指方法的重载</li><li>运行时多态指程序中定义的对象引用所指向的具体类型在运行期间才确定 运行时多态有三个条件:</li><li>继承</li><li>覆盖(重写)</li><li>向上转型</li></ul><h2 id="面向对象的特点" tabindex="-1"><a class="header-anchor" href="#面向对象的特点" aria-hidden="true">#</a> 面向对象的特点</h2><h3 id="封装" tabindex="-1"><a class="header-anchor" href="#封装" aria-hidden="true">#</a> 封装</h3><p>封装是将数据以及对数据的操作组合起来构成类，类是一个不可分割的独立单位。类中提供与外部联系的方法，又尽可能隐藏类的实现细 节。</p><p>封装性提供一种软件模块化的设计思想，像组装硬件一样。类的设计者提供标准化的软件模块，使用者根据实际需求选择所需要的类模块，</p><p>集成为软件系统，各模块之间通过传递参数等方式进行工作。设计者需要考虑类的定义、类中数据和方法的访问权限以及方法如何实现等问题；</p><p>使用者需知道有哪些类，每个类的特点，每个类提供了哪些常量、成员变量和成员方法等，而不需知道方法实现的细节。</p><p>而要实现类的封装性，我们要先为类及类中成员变量和成员方法分别设置必要的访问权限，使所有类，子类，同一包中的类，本类等不同</p><p>关系的类之间具有不同的访问权限。Java语言中为类成员设置了4种访问权限，为类（内部类有3种）设置了两种访问权限</p><h3 id="继承" tabindex="-1"><a class="header-anchor" href="#继承" aria-hidden="true">#</a> 继承</h3><p>当程序员创建类时，可以指定新类从现有类中继承某些成员，而不需要完全从头开始声明新的成员。这个现有类称为超类或父类，新创建的类称为子类。子类也可以成为其他类的超类或父类</p><p>通常子类会添加自己的变量和方法，因此子类比其超类或父类更详细，表示更为特定的对象，典型的情况是，子类既有父类的功能，又有其专门的性能。</p><p>继承性在父类和子类之间建立起联系，子类自动拥有父类的全部成员，包括成员变量和成员方法，使父类成员得以传承和延续；子类可以改父类的成员，使父类成员适应新的需求；子类也可以增加自己的成员，使类的功能得以扩充。但是，子类不能删除父类的成员！！</p><p>Java语言只支持单重继承，可以通过接口实现多重继承。在单重继承中父类与子类是一对多的关系。一个子类只有一个父类；一个父类可以有多个子类，每个父类又可以作为父类再定义自己的子类。</p><h3 id="多态-1" tabindex="-1"><a class="header-anchor" href="#多态-1" aria-hidden="true">#</a> 多态</h3><p>在面向对象语言中，多态性是指一个方法可以有多种实现版本，即“一种定义，多种实现”。对于一个方法的多种实现，在程序运行</p><p>时，系统会根据方法的参数或调用方法的对象自动选择一个方法执行，不会产生混淆和混乱。例如，算数运算中不同类型的数据的混合</p><p>运算就是一个典型的多态运用。</p><p>类的多态性表现为方法的多态性，下面主要讨论在不同层次的类中以及在同一个类中多个同名方法之间的关系问题。方法的多态性</p><p>主要有方法的重写和重载</p>`,149),p=[i];function r(c,l){return n(),s("div",null,p)}const o=a(t,[["render",r],["__file","java-basic-oop.html.vue"]]);export{o as default};
