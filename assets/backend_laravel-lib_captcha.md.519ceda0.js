import{_ as s,c as a,o as n,a as l}from"./app.aacc8cde.js";const i=JSON.parse('{"title":"\u56FE\u5F62\u9A8C\u8BC1\u7801","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4F7F\u7528","slug":"\u4F7F\u7528"}],"relativePath":"backend/laravel-lib/captcha.md"}'),p={name:"backend/laravel-lib/captcha.md"},o=l(`<h1 id="\u56FE\u5F62\u9A8C\u8BC1\u7801" tabindex="-1">\u56FE\u5F62\u9A8C\u8BC1\u7801 <a class="header-anchor" href="#\u56FE\u5F62\u9A8C\u8BC1\u7801" aria-hidden="true">#</a></h1><h2 id="\u4F7F\u7528" tabindex="-1">\u4F7F\u7528 <a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a></h2><div class="language-php"><span class="copy"></span><pre><code><span class="line"></span>
<span class="line"><span style="color:#F78C6C;">use</span><span style="color:#FFCB6B;"> </span><span style="color:#A6ACCD;">JoyceZ</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">LaravelLib</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">Helpers</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">ResultHelper</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F78C6C;">use</span><span style="color:#FFCB6B;"> </span><span style="color:#A6ACCD;">JoyceZ</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">LaravelLib</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">Contracts</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">Captcha</span><span style="color:#FFCB6B;"> </span><span style="color:#F78C6C;">as</span><span style="color:#FFCB6B;"> CaptchaInterface</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Passport</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Controller</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         * \u83B7\u53D6\u56FE\u5F62\u9A8C\u8BC1\u7801</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         * </span><span style="color:#F78C6C;font-style:italic;">@param</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#FFCB6B;font-style:italic;">CaptchaInterface</span><span style="color:#676E95;font-style:italic;"> $captchaRepo</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         * </span><span style="color:#F78C6C;font-style:italic;">@return</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#F78C6C;font-style:italic;">array</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         */</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">captcha</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">CaptchaInterface</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">captchaRepo</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">captcha </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">captchaRepo</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">makeCode</span><span style="color:#89DDFF;">()-&gt;</span><span style="color:#82AAFF;">get</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">captchaImg </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Arr</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">get</span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">captcha</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">image</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">captchaUniqid </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Arr</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">get</span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">captcha</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">uniq</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ResultHelper</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">returnFormat</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">success</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ResponseCode</span><span style="color:#89DDFF;">::</span><span style="color:#A6ACCD;">SUCCESS</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">captcha</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">captchaImg</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#82AAFF;">config</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">laraveladmin.passport.check_captcha_cache_key</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">captchaUniqid</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">]);</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div>`,3),e=[o];function t(c,r,D,y,F,C){return n(),a("div",null,e)}var h=s(p,[["render",t]]);export{i as __pageData,h as default};
