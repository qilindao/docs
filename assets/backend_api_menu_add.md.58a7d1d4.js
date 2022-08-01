import{_ as t,c as d,o as e,a}from"./app.5ff6bdf4.js";const y=JSON.parse('{"title":"\u65B0\u5EFA\u6743\u9650\u83DC\u5355 API","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u672C\u4FE1\u606F","slug":"\u57FA\u672C\u4FE1\u606F"},{"level":2,"title":"\u8BF7\u6C42\u53C2\u6570","slug":"\u8BF7\u6C42\u53C2\u6570"},{"level":3,"title":"Header \u53C2\u6570\u53CA\u8BF4\u660E","slug":"header-\u53C2\u6570\u53CA\u8BF4\u660E"},{"level":3,"title":"Query \u53C2\u6570\u53CA\u8BF4\u660E","slug":"query-\u53C2\u6570\u53CA\u8BF4\u660E"},{"level":2,"title":"\u54CD\u5E94\u793A\u4F8B","slug":"\u54CD\u5E94\u793A\u4F8B"}],"relativePath":"backend/api/menu/add.md"}'),s={name:"backend/api/menu/add.md"},n=a('<h1 id="\u65B0\u5EFA\u6743\u9650\u83DC\u5355-api" tabindex="-1">\u65B0\u5EFA\u6743\u9650\u83DC\u5355 API <a class="header-anchor" href="#\u65B0\u5EFA\u6743\u9650\u83DC\u5355-api" aria-hidden="true">#</a></h1><h2 id="\u57FA\u672C\u4FE1\u606F" tabindex="-1">\u57FA\u672C\u4FE1\u606F <a class="header-anchor" href="#\u57FA\u672C\u4FE1\u606F" aria-hidden="true">#</a></h2><p>\u63A5\u53E3URL\uFF1A<code>/manage/v1/menu/store</code></p><p>\u8BF7\u6C42\u65B9\u5F0F\uFF1A<code>POST</code></p><p>Content-Type\uFF1A<code>application/json</code></p><h2 id="\u8BF7\u6C42\u53C2\u6570" tabindex="-1">\u8BF7\u6C42\u53C2\u6570 <a class="header-anchor" href="#\u8BF7\u6C42\u53C2\u6570" aria-hidden="true">#</a></h2><h3 id="header-\u53C2\u6570\u53CA\u8BF4\u660E" tabindex="-1">Header \u53C2\u6570\u53CA\u8BF4\u660E <a class="header-anchor" href="#header-\u53C2\u6570\u53CA\u8BF4\u660E" aria-hidden="true">#</a></h3><table><thead><tr><th>\u53C2\u6570\u540D</th><th>\u7C7B\u578B</th><th>\u793A\u4F8B\u503C</th><th>\u662F\u5426\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>Authorization</td><td><code>string</code></td><td><code>bearer token</code></td><td>\u662F</td><td>token</td></tr></tbody></table><h3 id="query-\u53C2\u6570\u53CA\u8BF4\u660E" tabindex="-1">Query \u53C2\u6570\u53CA\u8BF4\u660E <a class="header-anchor" href="#query-\u53C2\u6570\u53CA\u8BF4\u660E" aria-hidden="true">#</a></h3><table><thead><tr><th>\u53C2\u6570\u540D</th><th>\u7C7B\u578B</th><th>\u793A\u4F8B\u503C</th><th>\u662F\u5426\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>menu_type</td><td><code>number</code></td><td><code>[0:\u76EE\u5F55;1:\u83DC\u5355;2:\u6743\u9650]</code></td><td>\u662F</td><td>\u83DC\u5355\u7C7B\u578B</td></tr><tr><td>menu_title</td><td><code>string</code></td><td>``</td><td>\u662F</td><td>\u83DC\u5355\u4E2D\u6587\u540D\u79F0</td></tr><tr><td>parent_id</td><td>`number</td><td>string`</td><td><code>0</code></td><td>\u662F</td></tr><tr><td>menu_name</td><td><code>string</code></td><td>-</td><td>\u662F</td><td>\u552F\u4E00\u82F1\u6587\u6807\u8BC6\uFF0C\u524D\u7AEF\u8DEF\u7531 name</td></tr><tr><td>is_show</td><td><code>Boolean</code></td><td>`true</td><td>false`</td><td>\u662F</td></tr><tr><td>keep_alive</td><td><code>Boolean</code></td><td>`true</td><td>false`</td><td>\u662F</td></tr><tr><td>menu_order</td><td><code>number</code></td><td><code>0</code></td><td>\u5426</td><td>\u6392\u5E8F</td></tr><tr><td>menu_router</td><td><code>string</code></td><td>-</td><td>\u5426</td><td>\u524D\u7AEF\u8DEF\u7531 path</td></tr><tr><td>menu_icon</td><td><code>string</code></td><td>-</td><td>\u5426</td><td>\u56FE\u6807</td></tr><tr><td>menu_component</td><td><code>string</code></td><td>-</td><td>\u5426</td><td>\u524D\u7AEF\u6587\u4EF6\u8DEF\u5F84</td></tr><tr><td>api_path</td><td><code>string</code></td><td>-</td><td>\u5426</td><td>api_path</td></tr></tbody></table><h2 id="\u54CD\u5E94\u793A\u4F8B" tabindex="-1">\u54CD\u5E94\u793A\u4F8B <a class="header-anchor" href="#\u54CD\u5E94\u793A\u4F8B" aria-hidden="true">#</a></h2><div class="language-json"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">code</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">200</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">message</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u65B0\u5EFA\u6210\u529F</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">data</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div>',12),o=[n];function r(l,c,p,h,i,u){return e(),d("div",null,o)}var _=t(s,[["render",r]]);export{y as __pageData,_ as default};
