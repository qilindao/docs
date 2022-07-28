import{_ as s,c as a,o as n,a as l}from"./app.4357929b.js";const A=JSON.parse('{"title":"\u5B89\u5168\u52A0\u5BC6","description":"","frontmatter":{},"headers":[{"level":2,"title":"AopCrypt \u5B57\u7B26\u4E32\u53EF\u9006\u52A0\u5BC6","slug":"aopcrypt-\u5B57\u7B26\u4E32\u53EF\u9006\u52A0\u5BC6"},{"level":2,"title":"\u6570\u636E\u5E93\u654F\u611F\u5B57\u6BB5\u53EF\u9006\u5B58\u50A8","slug":"\u6570\u636E\u5E93\u654F\u611F\u5B57\u6BB5\u53EF\u9006\u5B58\u50A8"}],"relativePath":"backend/laravel-lib/encrypt.md"}'),p={name:"backend/laravel-lib/encrypt.md"},o=l(`<h1 id="\u5B89\u5168\u52A0\u5BC6" tabindex="-1">\u5B89\u5168\u52A0\u5BC6 <a class="header-anchor" href="#\u5B89\u5168\u52A0\u5BC6" aria-hidden="true">#</a></h1><h2 id="aopcrypt-\u5B57\u7B26\u4E32\u53EF\u9006\u52A0\u5BC6" tabindex="-1">AopCrypt \u5B57\u7B26\u4E32\u53EF\u9006\u52A0\u5BC6 <a class="header-anchor" href="#aopcrypt-\u5B57\u7B26\u4E32\u53EF\u9006\u52A0\u5BC6" aria-hidden="true">#</a></h2><blockquote><p>\u4F7F\u7528\u7684\u662F\u652F\u4ED8\u5B9D\u652F\u4ED8\u5305\u91CC\u9762\u7684\u52A0\u5BC6</p></blockquote><div class="language-php"><span class="copy"></span><pre><code><span class="line"></span>
<span class="line"><span style="color:#F78C6C;">use</span><span style="color:#FFCB6B;"> </span><span style="color:#A6ACCD;">JoyceZ</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">LaravelLib</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">Aop</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">AopCrypt</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">your string</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// withScrectKey \u8BBE\u7F6E\u52A0\u5BC6\u5BC6\u94A5\uFF0C\u9ED8\u8BA4\u4E3A\u7A7A\u5B57\u7B26\u4E32</span></span>
<span class="line"><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">AopCrypt</span><span style="color:#89DDFF;">())-&gt;</span><span style="color:#82AAFF;">withScrectKey</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">env</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">APP_KEY</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">))-&gt;</span><span style="color:#82AAFF;">decrypt</span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//\u4F7F\u7528\u914D\u7F6E\u6587\u4EF6\u4E2D\u52A0\u5BC6\u5BC6\u94A5</span></span>
<span class="line"><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">AopCrypt</span><span style="color:#89DDFF;">())-&gt;</span><span style="color:#82AAFF;">withScrectKey</span><span style="color:#89DDFF;">()-&gt;</span><span style="color:#82AAFF;">decrypt</span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//\u81EA\u5B9A\u4E49\u52A0\u5BC6\u5BC6\u94A5</span></span>
<span class="line"><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">AopCrypt</span><span style="color:#89DDFF;">())-&gt;</span><span style="color:#82AAFF;">withScrectKey</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">config</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">laraveladmin.crypt.screct_key</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">))-&gt;</span><span style="color:#82AAFF;">decrypt</span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span></code></pre></div><h2 id="\u6570\u636E\u5E93\u654F\u611F\u5B57\u6BB5\u53EF\u9006\u5B58\u50A8" tabindex="-1">\u6570\u636E\u5E93\u654F\u611F\u5B57\u6BB5\u53EF\u9006\u5B58\u50A8 <a class="header-anchor" href="#\u6570\u636E\u5E93\u654F\u611F\u5B57\u6BB5\u53EF\u9006\u5B58\u50A8" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>EncryptTableDbAttribute Eloquent \u6A21\u578B\u5C5E\u6027\u52A0\u5BC6\u548C\u89E3\u5BC6</p><ul><li>\u4E0D\u652F\u6301\u6A21\u7CCA\u641C\u7D22\uFF0C\u53EA\u652F\u6301\u7CBE\u51C6\u641C\u7D22</li><li>\u52A0\u89E3\u5BC6\u662F\u5728 <code>config(&#39;laraveladmin.crypt.screct_key&#39;)</code> \u8FDB\u884C\u914D\u7F6E</li><li>\u4F9D\u8D56 <code>JoyceZ\\LaravelLib\\Aop\\AopCrypt</code> \u52A0\u5BC6\u5DE5\u5177</li></ul></div><div class="language-php"><span class="copy"></span><pre><code><span class="line"><span style="color:#F78C6C;">use</span><span style="color:#FFCB6B;"> </span><span style="color:#A6ACCD;">JoyceZ</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">LaravelLib</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">Traits</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">EncryptTableDbAttribute</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Client</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Model</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">use</span><span style="color:#FFCB6B;"> </span><span style="color:#A6ACCD;">EncryptTableDbAttribute</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * </span><span style="color:#F78C6C;font-style:italic;">@var</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#F78C6C;font-style:italic;">array</span><span style="color:#676E95;font-style:italic;">  \u9700\u8981\u52A0\u5BC6\u89E3\u5BC6\u7684\u5B57\u6BB5</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">protected</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">encryptTable </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">id_number</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">email</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">];</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div>`,7),e=[o];function t(c,r,y,D,F,i){return n(),a("div",null,e)}var d=s(p,[["render",t]]);export{A as __pageData,d as default};
