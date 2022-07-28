import{_ as s,c as a,o as n,a as l}from"./app.4357929b.js";const D=JSON.parse('{"title":"\u540E\u7AEF\u5F00\u59CB","description":"","frontmatter":{},"headers":[{"level":2,"title":"1. \u57FA\u672C\u4ECB\u7ECD","slug":"_1-\u57FA\u672C\u4ECB\u7ECD"},{"level":3,"title":"1.1 \u9879\u76EE\u4ECB\u7ECD","slug":"_1-1-\u9879\u76EE\u4ECB\u7ECD"},{"level":2,"title":"2. \u6280\u672F\u6808","slug":"_2-\u6280\u672F\u6808"},{"level":2,"title":"3. \u4F7F\u7528\u8BF4\u660E","slug":"_3-\u4F7F\u7528\u8BF4\u660E"},{"level":3,"title":"\u5F00\u59CB","slug":"\u5F00\u59CB"},{"level":2,"title":"4. \u76EE\u5F55\u7ED3\u6784","slug":"_4-\u76EE\u5F55\u7ED3\u6784"},{"level":2,"title":"5 \u6CE8\u610F\u4E8B\u9879","slug":"_5-\u6CE8\u610F\u4E8B\u9879"},{"level":3,"title":"5.1 \u6570\u636E\u5E93\u654F\u611F\u5B57\u6BB5\u52A0\u5BC6\u5B58\u50A8","slug":"_5-1-\u6570\u636E\u5E93\u654F\u611F\u5B57\u6BB5\u52A0\u5BC6\u5B58\u50A8"}],"relativePath":"backend/index.md"}'),e={name:"backend/index.md"},p=l(`<h1 id="\u540E\u7AEF\u5F00\u59CB" tabindex="-1">\u540E\u7AEF\u5F00\u59CB <a class="header-anchor" href="#\u540E\u7AEF\u5F00\u59CB" aria-hidden="true">#</a></h1><h2 id="_1-\u57FA\u672C\u4ECB\u7ECD" tabindex="-1">1. \u57FA\u672C\u4ECB\u7ECD <a class="header-anchor" href="#_1-\u57FA\u672C\u4ECB\u7ECD" aria-hidden="true">#</a></h2><h3 id="_1-1-\u9879\u76EE\u4ECB\u7ECD" tabindex="-1">1.1 \u9879\u76EE\u4ECB\u7ECD <a class="header-anchor" href="#_1-1-\u9879\u76EE\u4ECB\u7ECD" aria-hidden="true">#</a></h3><blockquote><p>Laravel-vue-admin\u662F\u4E00\u4E2A\u57FA\u4E8E <a href="https://vuejs.org" target="_blank" rel="noopener noreferrer">vue</a> \u548C [laravel8] \u5F00\u53D1\u7684\u5168\u6808\u524D\u540E\u7AEF\u5206\u79BB\u7684\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF\uFF0C\u96C6\u6210jwt\u9274\u6743\uFF0C\u52A8\u6001\u8DEF\u7531\uFF0C\u52A8\u6001\u83DC\u5355\u3002 \u5BF9\u6570\u636E\u5E93\u654F\u611F\u5B57\u6BB5\u8FDB\u884C\u53EF\u9006\u52A0\u5BC6\uFF0C\u52A0\u5BC6\u4F9D\u8D56\u5305 <code>JoyceZ\\LaravelLib</code>\uFF0C\u5730\u5740<code>https://github.com/Joycezhangw/laravel-lib</code></p></blockquote><h2 id="_2-\u6280\u672F\u6808" tabindex="-1">2. \u6280\u672F\u6808 <a class="header-anchor" href="#_2-\u6280\u672F\u6808" aria-hidden="true">#</a></h2><p><strong><code>laravel 8</code> <code>mysql</code> <code>jwt</code></strong></p><h2 id="_3-\u4F7F\u7528\u8BF4\u660E" tabindex="-1">3. \u4F7F\u7528\u8BF4\u660E <a class="header-anchor" href="#_3-\u4F7F\u7528\u8BF4\u660E" aria-hidden="true">#</a></h2><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">- php\u7248\u672C &gt;= v7.3</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="\u5F00\u59CB" tabindex="-1">\u5F00\u59CB <a class="header-anchor" href="#\u5F00\u59CB" aria-hidden="true">#</a></h3><div class="language-bash"><span class="copy"></span><pre><code><span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u514B\u9686\u9879\u76EE</span></span>
<span class="line"><span style="color:#A6ACCD;">git clone https://gitee.com/qilindao/landao-server</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u8FDB\u5165server\u6587\u4EF6\u5939</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> server</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u4F7F\u7528 composer \u5E76\u5B89\u88C5php\u4F9D\u8D56\u5305</span></span>
<span class="line"><span style="color:#A6ACCD;">composer install</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#\u624B\u52A8\u91CD\u547D\u540D .env \u6587\u4EF6\uFF0C\u5E76\u914D\u7F6E\u4E0A\u60A8\u7684\u6570\u636E\u5E93\u7B49\u4FE1\u606F</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#\u751F\u6210\u9879\u76EE\u5BC6\u94A5</span></span>
<span class="line"><span style="color:#A6ACCD;">php artisan key:generate</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#\u751F\u6210jwt\u5BC6\u94A5</span></span>
<span class="line"><span style="color:#A6ACCD;">php artisan jwt:secret</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#\u6570\u636E\u5E93\u8FC1\u79FB</span></span>
<span class="line"><span style="color:#A6ACCD;">php artisan migrate</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#\u6570\u636E\u586B\u5145</span></span>
<span class="line"><span style="color:#A6ACCD;">php artisan db:seed</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#\u6587\u4EF6\u5B58\u50A8\uFF0C\u8F6F\u94FE\u63A5</span></span>
<span class="line"><span style="color:#A6ACCD;">php artisan storage:link</span></span>
<span class="line"></span></code></pre></div><h2 id="_4-\u76EE\u5F55\u7ED3\u6784" tabindex="-1">4. \u76EE\u5F55\u7ED3\u6784 <a class="header-anchor" href="#_4-\u76EE\u5F55\u7ED3\u6784" aria-hidden="true">#</a></h2><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">    \u251C\u2500\u2500 landao-server</span></span>
<span class="line"><span style="color:#A6ACCD;">        \u251C\u2500\u2500 app    </span></span>
<span class="line"><span style="color:#A6ACCD;">        \u2502   \u251C\u2500\u2500 Http  \uFF08\u63A7\u5236\u5668\u3001\u4E2D\u95F4\u4EF6\uFF09   </span></span>
<span class="line"><span style="color:#A6ACCD;">        \u2502   \u2502    \u251C\u2500\u2500Controllers  \uFF08\u63A7\u5236\u5668\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">        \u2502   \u2502    \u2502   \u251C\u2500\u2500 Manage  \uFF08\u540E\u53F0\u63A7\u5236\u5668\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">        \u2502   \u2502    \u2502   \u2502   \u251C\u2500\u2500 v1  \uFF08\u63A5\u53E3\u7248\u672C\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">        \u2502   \u2502    \u2502   \u2502   \u2514\u2500\u2500 vX  \uFF08\u63A5\u53E3\u7B2CX\u4E2A\u7248\u672C\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">        \u2502   \u2502    \u2502   \u251C\u2500\u2500 Member  \uFF08\u5176\u4ED6\u63A7\u5236\u5668\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">        \u2502   \u2502    \u2502   \u2514\u2500\u2500 xxxx  \uFF08\u5176\u4ED6\u63A7\u5236\u5668\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">        \u2502   \u2502    \u2514\u2500\u2500Middleware   \uFF08\u4E2D\u95F4\u4EF6\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">        \u2502   \u2514\u2500\u2500 Services        \uFF08\u670D\u52A1\uFF09     </span></span>
<span class="line"><span style="color:#A6ACCD;">        \u2502       \u251C\u2500\u2500Captcha      \uFF08\u56FE\u5F62\u9A8C\u8BC1\u7801\uFF09 //\u5F03\u7528\uFF0C\u79FB\u52A8\u5230 JoyceZ\\LaravelLib \u6269\u5C55\u5305\u4E0B</span></span>
<span class="line"><span style="color:#A6ACCD;">        \u2502       \u251C\u2500\u2500Contracts    \uFF08\u5DE5\u5177\u7C7B\u670D\u52A1\u63A5\u53E3\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">        \u2502       \u251C\u2500\u2500Models       \uFF08Eloquent \u6A21\u578B\u7C7B\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">        \u2502       \u251C\u2500\u2500Enums        \uFF08\u72B6\u6001\u679A\u4E3E\uFF09     </span></span>
<span class="line"><span style="color:#A6ACCD;">        \u2502       \u251C\u2500\u2500Repositories \uFF08\u4E1A\u52A1\u903B\u8F91\u670D\u52A1\u63A5\u53E3\uFF09 </span></span>
<span class="line"><span style="color:#A6ACCD;">        \u2502       \u2502   \u251C\u2500\u2500Manage \uFF08\u4E1A\u52A1\u903B\u8F91\u670D\u52A1\u63A5\u53E3\uFF09 </span></span>
<span class="line"><span style="color:#A6ACCD;">        \u2502       \u2502   \u2502    \u251C\u2500\u2500Interfaces \uFF08\u63A5\u53E3\uFF09 </span></span>
<span class="line"><span style="color:#A6ACCD;">        \u2502       \u2502   \u2502    \u2514\u2500\u2500Providers  \uFF08\u670D\u52A1\u6CE8\u518C\uFF09 </span></span>
<span class="line"><span style="color:#A6ACCD;">        \u2502       \u2502   \u2514\u2500\u2500\u5176\u4ED6\u4E1A\u52A1\u4ED3</span></span>
<span class="line"><span style="color:#A6ACCD;">        \u2502       \u251C\u2500\u2500Support           </span></span>
<span class="line"><span style="color:#A6ACCD;">        \u2502       \u251C\u2500\u2500Traits           </span></span>
<span class="line"><span style="color:#A6ACCD;">        \u2502       \u2514\u2500\u2500Validators       \uFF08\u8868\u5355\u9A8C\u8BC1\u89C4\u5219\uFF09 </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="_5-\u6CE8\u610F\u4E8B\u9879" tabindex="-1">5 \u6CE8\u610F\u4E8B\u9879 <a class="header-anchor" href="#_5-\u6CE8\u610F\u4E8B\u9879" aria-hidden="true">#</a></h2><p>\u51FA\u73B0 <code>Auth guard[api] is not defined </code> \u60C5\u51B5\uFF0C\u8BF7\u91CD\u65B0 <code>composer require tymon/jwt-auth</code><a href="https://jwt-auth.readthedocs.io/en/develop/laravel-installation/" target="_blank" rel="noopener noreferrer">https://jwt-auth.readthedocs.io/en/develop/laravel-installation/</a></p><h3 id="_5-1-\u6570\u636E\u5E93\u654F\u611F\u5B57\u6BB5\u52A0\u5BC6\u5B58\u50A8" tabindex="-1">5.1 \u6570\u636E\u5E93\u654F\u611F\u5B57\u6BB5\u52A0\u5BC6\u5B58\u50A8 <a class="header-anchor" href="#_5-1-\u6570\u636E\u5E93\u654F\u611F\u5B57\u6BB5\u52A0\u5BC6\u5B58\u50A8" aria-hidden="true">#</a></h3><ul><li>EncryptTableDbAttribute Eloquent \u6A21\u578B\u5C5E\u6027\u52A0\u5BC6\u548C\u89E3\u5BC6</li><li>\u4E0D\u652F\u6301\u6A21\u7CCA\u641C\u7D22\uFF0C\u53EA\u652F\u6301\u7CBE\u51C6\u641C\u7D22</li><li>\u52A0\u89E3\u5BC6\u5728 <code>config(&#39;laraveladmin.crypt.screct_key&#39;)</code> \u8FDB\u884C\u914D\u7F6E</li><li>\u4F9D\u8D56 <code>JoyceZ\\LaravelLib\\Aop\\AopCrypt</code> \u52A0\u5BC6\u5DE5\u5177</li></ul><div class="language-php"><span class="copy"></span><pre><code><span class="line"><span style="color:#F78C6C;">use</span><span style="color:#FFCB6B;"> </span><span style="color:#A6ACCD;">JoyceZ</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">LaravelLib</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">Traits</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">EncryptTableDbAttribute</span><span style="color:#89DDFF;">;</span></span>
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
<span class="line"></span></code></pre></div>`,17),o=[p];function t(c,r,i,y,C,A){return n(),a("div",null,o)}var h=s(e,[["render",t]]);export{D as __pageData,h as default};
