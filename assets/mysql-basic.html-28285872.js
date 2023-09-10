import{_ as a,W as n,X as s,a2 as e}from"./framework-3c1374b9.js";const i={},t=e(`<h1 id="mysql-基础-理论基础" tabindex="-1"><a class="header-anchor" href="#mysql-基础-理论基础" aria-hidden="true">#</a> Mysql 基础 - 理论基础</h1><h2 id="mysql的储存引擎" tabindex="-1"><a class="header-anchor" href="#mysql的储存引擎" aria-hidden="true">#</a> Mysql的储存引擎</h2><h3 id="innodb存储引擎" tabindex="-1"><a class="header-anchor" href="#innodb存储引擎" aria-hidden="true">#</a> InnoDB存储引擎</h3><p>在 MySQL 5.5 及以后版本后，MySQL 选择使用 InnoDB为默认存储引擎。在创建数据库表时，不指定存储引擎时，使用的就是 InnoDB。如需使用其他存储引擎，可以手动来指定</p><h4 id="特点" tabindex="-1"><a class="header-anchor" href="#特点" aria-hidden="true">#</a> 特点</h4><ul><li>InnoDB 支持事务操作；（每一条SQL都默认封装成事务，自动提交，会影响速度）</li><li>InnoDB 支持外键；</li><li>InnoDB 是聚集索引（聚簇索引）；</li><li>InnoDB 不保存表的总条数；</li><li>InnoDB 5.7版本之前不支持全文检索；</li><li>InnoDB 支持表级锁、行级锁，默认为行级锁；</li><li>InnoDB 表必须有主键（如果我们没有明确去指定创建主键索引。它会帮我们隐藏的生成一个 6 byte 的 int 型的索引作为主键索引）；</li><li>InnoDB 文件存储方式为.frm文件存储表结构，ibd文件存储数据内容。</li></ul><h3 id="myisam存储引擎" tabindex="-1"><a class="header-anchor" href="#myisam存储引擎" aria-hidden="true">#</a> MyISAM存储引擎</h3><p>MyISAM 作为 MySQL 中 B+Tree 索引的另一种重要体现形式。</p><h4 id="特点-1" tabindex="-1"><a class="header-anchor" href="#特点-1" aria-hidden="true">#</a> 特点</h4><ul><li>MyISAM 是非聚集索引；</li><li>MyISAM 有一个变量专门来保存整个表的行数，查询count很快(注意不能加任何 where 条件)</li><li>MyISAM 支持全文索引；</li><li>MyISAM 可以被压缩后进行查询操作，节省空间容量；</li><li>MyISAM 支持表级锁，不支持行级锁；</li><li>MyISAM 中主键不是必须的；</li><li>MyISAM 文件存储方式为.frm文件存储表结构，.MYD文件存储数据内容，.MYI文件存储索引文件。</li></ul><h2 id="数据库中事务的四大特性-acid" tabindex="-1"><a class="header-anchor" href="#数据库中事务的四大特性-acid" aria-hidden="true">#</a> 数据库中事务的四大特性(ACID)</h2><p>事务由单独单元的一个或多个 SQL 语句组成，在这个单元中，每个 SQL 语句是相互依赖的。而整个单独单元作为一个不可分割的整体，如果单元中某条 SQL 语句一旦执行失败或产生错误，整个单元将会回滚。所有受到影响的数据将返回到事物开始以前的状态；如果单元中的所有 SQL 语句均执行成功，则事物被顺利执行</p><h3 id="_1-原子性-atomicity" tabindex="-1"><a class="header-anchor" href="#_1-原子性-atomicity" aria-hidden="true">#</a> 1：原子性 (Atomicity）</h3><p>原子性是指事务包含的所有操作要么全部成功，要么全部失败回滚</p><div class="hint-container tip"><p class="hint-container-title">如果无法保证原子性会怎么样？</p><p>会出现数据不一致的情形，A 账户减去 50 元，而 B 账户增加 50 元操作失败。系统将无故丢失 50 元</p></div><h3 id="_2-一致性-consistency" tabindex="-1"><a class="header-anchor" href="#_2-一致性-consistency" aria-hidden="true">#</a> 2：一致性（Consistency）</h3><p>一致性是指事务必须使数据库从一个一致性状态变换到另一个一致性状态，也就是说一个事务执行之前和执行之后都必须处于一致性状态</p><div class="hint-container tip"><p class="hint-container-title">如果无法保证一致性会怎么样？</p><p>例一 : A账户有 200 元，转账 300 元出去，此时A账户余额为 -100 元。你自然就发现了此时数据是不一致的，为什么呢？因为你定义了一个状态，余额这列必须大于 0。</p><p>例二 : A 账户 200 元，转账 50 元给 B 账户，A 账户的钱扣了，但是 B 账户因为各种意外，余额并没有增加。你也知道此时数据是不一致的，为什么呢？因为你定义了一个状态，要求A+B的余额必须不变。</p></div><h3 id="_3-隔离性-isolation" tabindex="-1"><a class="header-anchor" href="#_3-隔离性-isolation" aria-hidden="true">#</a> 3：隔离性（Isolation）</h3><p>隔离性是当多个用户并发访问数据库时，比如操作同一张表时，数据库为每一个用户开启的事务，不能被其他事务的操作所干扰，多个并发事务之间要相互隔离。</p><p>即要达到这么一种效果：对于任意两个并发的事务 T1 和 T2，在事务 T1 看来，T2 要么在 T1 开始之前就已经结束，要么在 T1 结束之后才开始，这样每个事务都感觉不到有其他事务在并发地执行</p><h3 id="_4-持久性-durability" tabindex="-1"><a class="header-anchor" href="#_4-持久性-durability" aria-hidden="true">#</a> 4：持久性（Durability）</h3><p>持久性是指一个事务一旦被提交了，那么对数据库中的数据的改变就是永久性的，即便是在数据库系统遇到故障的情况下也不会丢失提交事务的操作</p><h2 id="什么是关系型数据库" tabindex="-1"><a class="header-anchor" href="#什么是关系型数据库" aria-hidden="true">#</a> 什么是关系型数据库</h2><p>关系型数据库，是指采用了关系模型来组织数据的数据库，其以行和列的形式存储数据，以便于用户理解，关系型数据库这一系列的行和列被称为表，一组表组成了数据库。用户通过查询来检索数据库中的数据，而查询是一个用于限定数据库中某些区域的执行代码。</p><div class="hint-container tip"><p class="hint-container-title">什么是 SQL？</p><p>结构化查询语言 (Structured Query Language) 简称 SQL，是一种特殊目的的编程语言，是一种数据库查询和程序设计语言程序设计语言，用于存取数据以及查询、更新和管理关系数据库系统。</p></div><p><strong>什么是 MYSQL？</strong> MySQL 是一个关系型数据库管理系统，MySQL 是最流行的关系型数据库管理系统之一，常见的关系型数据库还有 Oracle 、SQL Server、Access 等等。 MySQL在过去由于性能高、成本低、可靠性好，已经成为最流行的开源数据库，广泛地应用在 Internet 上的中小型网站中</p><h2 id="mysql有哪些数据类型" tabindex="-1"><a class="header-anchor" href="#mysql有哪些数据类型" aria-hidden="true">#</a> Mysql有哪些数据类型</h2><p>MySQL 数据类型非常丰富，常用类型简单介绍如下：</p><p>整数类型：BIT、BOOL、TINY INT、SMALL INT、MEDIUM INT、 INT、 BIG INT。</p><p>浮点数类型：FLOAT、DOUBLE、DECIMAL。</p><p>字符串类型：CHAR、VARCHAR、TINY TEXT、TEXT、MEDIUM TEXT、LONGTEXT、TINY BLOB、BLOB、MEDIUM BLOB、LONG BLOB。</p><p>日期类型：Date、DateTime、TimeStamp、Time、Year。</p><p>其他数据类型：BINARY、VARBINARY、ENUM、SET...</p><h2 id="sql-约束有哪几种" tabindex="-1"><a class="header-anchor" href="#sql-约束有哪几种" aria-hidden="true">#</a> SQL 约束有哪几种</h2><ul><li><strong>NOT NULL(非空)</strong>: 用于控制字段的内容一定不能为空（NULL）。</li><li><strong>UNIQUE(唯一约束)</strong>: 控件字段内容不能重复，一个表允许有多个 Unique 约束</li><li><strong>PRIMARY KEY(主键)</strong>: 也是用于控件字段内容不能重复，但它在一个表只允许出现一个</li><li><strong>FOREIGN KEY(外键)</strong>: 用于预防破坏表之间连接的动作，也能防止非法数据插入外键列，因为它必须是它指向的那个表中的值之一</li><li><strong>CHECK</strong>:用于控制字段的值范围</li></ul><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> test1<span class="token punctuation">(</span>
uid <span class="token keyword">INT</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token punctuation">,</span>
<span class="token identifier"><span class="token punctuation">\`</span>name<span class="token punctuation">\`</span></span> <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span> <span class="token punctuation">,</span>
<span class="token identifier"><span class="token punctuation">\`</span>password<span class="token punctuation">\`</span></span> <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token string">&#39;0&#39;</span><span class="token punctuation">,</span>
class_id <span class="token keyword">INT</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
<span class="token keyword">UNIQUE</span><span class="token punctuation">(</span>uid<span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span><span class="token punctuation">(</span>uid<span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token keyword">FOREIGN</span> <span class="token keyword">KEY</span><span class="token punctuation">(</span>class_id<span class="token punctuation">)</span> <span class="token keyword">REFERENCES</span> class_table<span class="token punctuation">(</span>class_id<span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token keyword">CHECK</span> <span class="token punctuation">(</span>class_id <span class="token operator">&lt;</span> <span class="token number">1000</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mysql的四种隔离级别" tabindex="-1"><a class="header-anchor" href="#mysql的四种隔离级别" aria-hidden="true">#</a> MySQL的四种隔离级别</h2><h3 id="_1-未提交读-read-uncommitted" tabindex="-1"><a class="header-anchor" href="#_1-未提交读-read-uncommitted" aria-hidden="true">#</a> 1：未提交读(READ UNCOMMITTED)</h3><p>这就是上面所说的例外情况了,这个隔离级别下,其他事务可以看到本事务没有提交的部分修改.因此会造成<strong>脏读</strong>的问题(读取到了其他事务未提交的部分,而之后该事务进行了回滚).</p><p>这个级别的性能没有足够大的优势,但是又有很多的问题,因此很少使用.</p><h3 id="_2-已提交读-read-committed" tabindex="-1"><a class="header-anchor" href="#_2-已提交读-read-committed" aria-hidden="true">#</a> 2：已提交读(READ COMMITTED)</h3><p>其他事务只能读取到本事务已经提交的部分.这个隔离级别有<strong>不可重复读</strong>的问题,在同一个事务内的两次读取,拿到的结果竟然不一样,因为另外一个事务对数据进行了修改.</p><h3 id="_3-repeatable-read-可重复读" tabindex="-1"><a class="header-anchor" href="#_3-repeatable-read-可重复读" aria-hidden="true">#</a> 3：REPEATABLE READ(可重复读)</h3><p>可重复读隔离级别解决了上面不可重复读的问题(看名字也知道),但是仍然有一个新问题,就是<strong>幻读</strong>,当你读取 id&gt; 10 的数据行时,对涉及到的所有行加上了读锁,此时例外一个事务新插入了一条 id=11 的数据,因为是新插入的,所以不会触发上面的锁的排斥,那么进行本事务进行下一次的查询时会发现有一条id=11的数据,而上次的查询操作并没有获取到,再进行插入就会有主键冲突的问题</p><h3 id="_4-serializable-可串行化" tabindex="-1"><a class="header-anchor" href="#_4-serializable-可串行化" aria-hidden="true">#</a> 4：SERIALIZABLE(可串行化)</h3><p>这是最高的隔离级别,可以解决上面提到的所有问题,因为他强制将所以的操作串行执行,这会导致并发性能极速下降,因此也不是很常用.</p><div class="hint-container tip"><p class="hint-container-title">同时有多个事务在进行会怎么样呢?</p><ul><li><strong>脏读</strong>: A事务读取到了B事务未提交的内容,而B事务后面进行了回滚.</li><li><strong>不可重复读</strong>: 当设置A事务只能读取B事务已经提交的部分,会造成在A事务内的两次查询,结果竟然不一样,因为在此期间B事务进行了提交操作.</li><li><strong>幻读</strong>: A事务读取了一个范围的内容,而同时B事务在此期间插入了一条数据.造成&quot;幻觉&quot;.</li></ul></div><h2 id="float和double的区别是什么" tabindex="-1"><a class="header-anchor" href="#float和double的区别是什么" aria-hidden="true">#</a> FLOAT和DOUBLE的区别是什么</h2><p>float数值类型用于表示单精度浮点数值，而double数值类型用于表示双精度浮点数值，float和double都是浮点型，而decimal是定点型；</p><p>MySQL 浮点型和定点型可以用类型名称后加（M，D）来表示，M表示该值的总共长度，D表示小数点后面的长度，M和D又称为精度和标度，如float(7,4)的 可显示为-999.9999，MySQL保存值时进行四舍五入，如果插入999.00009，则结果为999.0001。</p><p>FLOAT和DOUBLE在不指 定精度时，默认会按照实际的精度来显示，而DECIMAL在不指定精度时，默认整数为10，小数为0。</p><h2 id="drop、truncate、-delete区别" tabindex="-1"><a class="header-anchor" href="#drop、truncate、-delete区别" aria-hidden="true">#</a> drop、truncate、 delete区别</h2><h3 id="相同点" tabindex="-1"><a class="header-anchor" href="#相同点" aria-hidden="true">#</a> 相同点</h3><p>truncate和不带where子句的delete,以及drop都会删除表内的数据</p><h3 id="不同点" tabindex="-1"><a class="header-anchor" href="#不同点" aria-hidden="true">#</a> 不同点</h3><ul><li>truncate会清除表数据并重置id从1开始,delete就只删除记录,drop可以用来删除表或数据库并且将表所占用的空间全部释放</li><li>truncate和delete只删除数据不删除表的结构。drop语句将删除表的结构被依赖的约(constrain),触发器(trigger),依赖于该表的存储过程/函数将保留,但是变为 invalid 状态。</li><li>速度上一般来说: drop&gt; truncate &gt; delete</li><li>使用上,想删除部分数据行用 delete，想删除表用 drop,想保留表而将所有数据删除，如果和事务无关，用truncate即可。如果和事务有关,或者想触发trigger,还是用delete。</li><li>delete是DML语句,不会自动提交。drop/truncate都是DDL语句,执行后会自动提交。</li></ul><h2 id="数据库三大范式" tabindex="-1"><a class="header-anchor" href="#数据库三大范式" aria-hidden="true">#</a> 数据库三大范式</h2><div class="hint-container tip"><p class="hint-container-title">第一范式</p><p>要求每列都是最小的数据单元，不可分割。</p></div><p>比如学生表（学号、姓名、性别、出生年月），出生年月还可以分为（出生年、出生月、出生日），那么它就不符合第一范式了。</p><div class="hint-container tip"><p class="hint-container-title">第二范式</p><p>在第一范式的基础上，要求每列都和主键相关。</p></div><p>比如学生表（学号、姓名、课程号、学分），这里姓名依赖学号、学分依赖课程号，第二范式强调非主键字段必须依赖主键，所以不符合第二范式。</p><p>可能会存在的问题： （1）数据冗余：每条记录都含有相同的信息，比如所有学生都选了同一门课程。 （2）删除异常：删除学生，则对应的课程也被删除了。 （3）插入异常：学生未选课，则无法插入数据库。 （4）更新异常：调整课程学分，可能所有行都要更新。</p><p>正确的设计应该如下： 学生表（学号、姓名） 课程表（课程号、学分） 学生选课表（学号、课程号、成绩）</p><div class="hint-container tip"><p class="hint-container-title">第三范式</p><p>在第二范式的基础上，要求每列都和主键直接相关，而不是间接相关。</p></div><p>比如学生表（学号、姓名、年龄、学院名称、学院电话）</p><p>因为存在依赖关系：学号-&gt;学生-&gt;所在学院-&gt;学院电话，而第三范式要求任何字段都不能由其他字段派生出来，它要求字段没有冗余，即不存在传递依赖。</p><p>可能存在的问题： （1）数据冗余：重复保存学院信息 （2）更新异常：更新学院信息时，可能需要更新多条记录，不然会出现数据不一致的情况。</p><p>正确的设计应该如下： 学生表（学号、姓名、年龄、所在学院） 学院表（学院名称、学院电话）</p><h2 id="mysql中-in-和-exists-区别" tabindex="-1"><a class="header-anchor" href="#mysql中-in-和-exists-区别" aria-hidden="true">#</a> mysql中 in 和 exists 区别</h2><p>mysql中的in语句是把外表和内表作hash 连接，而exists语句是对外表作loop循环，每次loop循环再对内表进行查询。一直大家都认为exists比in语句的效率要高，这种说法其实是不准确的。这个是要区分环境的。</p><ul><li>如果查询的两个表大小相当，那么用in和exists差别不大。</li><li>如果两个表中一个较小，一个是大表，则子查询表大的用exists，子查询表小的用in。</li><li>not in 和not exists：如果查询语句使用了not in，那么内外表都进行全表扫描，没有用到索引；而not extsts的子查询依然能用到表上的索引。所以无论那个表大，用not exists都比not in要快</li></ul><h2 id="char、varchar的区别是什么" tabindex="-1"><a class="header-anchor" href="#char、varchar的区别是什么" aria-hidden="true">#</a> char、varchar的区别是什么</h2><h3 id="_1-最大长度" tabindex="-1"><a class="header-anchor" href="#_1-最大长度" aria-hidden="true">#</a> 1：最大长度</h3><p>char最大长度是255字节，varchar最大长度是65535个字节</p><h3 id="_2-定长" tabindex="-1"><a class="header-anchor" href="#_2-定长" aria-hidden="true">#</a> 2：定长</h3><p><strong>char的长度是不可变的，而varchar的长度是可变的</strong> 如果分别建立长度为10的char字段和varchar字段，如果存进去&quot;hello&quot;，那么char占用长度依然是10，除了&quot;hello&quot;外，后面跟5个空格；而varchar所占用的空间为6(原数据长度+1，最后一个字符存储使用了多长的空间)，取数据的时候，char类型的要用trim()去掉多余的空格，而varchar是不需要的</p><h3 id="_3-存储方式不同" tabindex="-1"><a class="header-anchor" href="#_3-存储方式不同" aria-hidden="true">#</a> 3：存储方式不同</h3><p>CHAR对英文字符（ASCII）占用1个字节，对一个汉字占用两个字节； 而varchar的存储方式是，对每个英文字符占用2个字节，汉字也占用2个字节。 CHAR 适合存储很短的字符串，或所有值都接近同一个长度，例如存储密码的 MD5 值。对于经常变更的数据，CHAR 也比 VARCHAR 更好，因为定长的 CHAR 不容易产生碎片。对于非常短的列，CHAR 在存储空间上也更有效率，例如用 CHAR 来存储只有 Y 和 N 的值只需要一个字节，但是 VARCHAR 需要两个字节，因为还有一个记录长度的额外字节</p><h3 id="_4-检索效率不同" tabindex="-1"><a class="header-anchor" href="#_4-检索效率不同" aria-hidden="true">#</a> 4：检索效率不同</h3><p>在检索效率上来讲，CHAR &gt; VARCHAR，因此在使用中，如果确定某个字段的值的长度，可以使用CHAR，否则应该尽量使用 VARCHAR.例如存储用户 MD5 加密后的密码,则应该使用 CHAR</p>`,81),r=[t];function l(p,d){return n(),s("div",null,r)}const c=a(i,[["render",l],["__file","mysql-basic.html.vue"]]);export{c as default};
