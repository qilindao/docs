import{_ as s,c as a,o as n,a as l}from"./app.3956bf50.js";const i=JSON.parse('{"title":"\u5BC6\u7801\u9A8C\u8BC1","description":"","frontmatter":{},"headers":[],"relativePath":"backend/laravel-lib/password.md"}'),p={name:"backend/laravel-lib/password.md"},o=l(`<h1 id="\u5BC6\u7801\u9A8C\u8BC1" tabindex="-1">\u5BC6\u7801\u9A8C\u8BC1 <a class="header-anchor" href="#\u5BC6\u7801\u9A8C\u8BC1">\xB6</a></h1><div class="language-php"><span class="copy"></span><pre><code><span class="line"></span>
<span class="line"><span style="color:#F78C6C;">use</span><span style="color:#FFCB6B;"> </span><span style="color:#A6ACCD;">JoyceZ</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">LaravelLib</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">Helpers</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">ResultHelper</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F78C6C;">use</span><span style="color:#FFCB6B;"> </span><span style="color:#A6ACCD;">JoyceZ</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">LaravelLib</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">Aop</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">AopPassword</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F78C6C;">use</span><span style="color:#FFCB6B;"> </span><span style="color:#A6ACCD;">App</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">Http</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">ResponseCode</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Passport</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Controller</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         * \u767B\u5F55</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         * </span><span style="color:#F78C6C;font-style:italic;">@param</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#FFCB6B;font-style:italic;">Request</span><span style="color:#676E95;font-style:italic;"> $request</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         * </span><span style="color:#F78C6C;font-style:italic;">@return</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#F78C6C;font-style:italic;">array</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         */</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">login</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">Request</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">request</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">           </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">params </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">request</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">all</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">           </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">user</span><span style="color:#89DDFF;">=</span><span style="color:#FFCB6B;">User</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">where</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">username</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,$</span><span style="color:#A6ACCD;">params</span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">username</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">])-&gt;</span><span style="color:#82AAFF;">find</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">           </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">pwdFlag </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">AopPassword</span><span style="color:#89DDFF;">())</span></span>
<span class="line"><span style="color:#A6ACCD;">                    </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">withSalt</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">                    </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">check</span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">user</span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">password</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">],</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">params</span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">password</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">],</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">user</span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">pwd_salt</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">]);</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(!$</span><span style="color:#A6ACCD;">pwdFlag</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ResultHelper</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">returnFormat</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u8D26\u53F7\u5BC6\u7801\u9519\u8BEF</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ResponseCode</span><span style="color:#89DDFF;">::</span><span style="color:#A6ACCD;">ERROR</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">                </span><span style="color:#676E95;font-style:italic;">//\u5BC6\u7801\u52A0\u5BC6</span></span>
<span class="line"><span style="color:#89DDFF;">                </span><span style="color:#676E95;font-style:italic;">//$salt = Str::random(6);</span></span>
<span class="line"><span style="color:#89DDFF;">                </span><span style="color:#676E95;font-style:italic;">//(new AopPassword())-&gt;withSalt(config(&#39;laraveladmin.passport.password_salt&#39;))-&gt;encrypt(&#39;123456&#39;, $salt)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div>`,2),e=[o];function t(c,r,D,F,y,C){return n(),a("div",null,e)}var d=s(p,[["render",t]]);export{i as __pageData,d as default};
