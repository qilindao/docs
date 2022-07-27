import{_ as s,c as n,o as a,a as l}from"./app.3956bf50.js";const C=JSON.parse('{"title":"Table \u8868\u683C","description":"","frontmatter":{},"headers":[{"level":2,"title":"Table \u5C5E\u6027","slug":"table-\u5C5E\u6027"},{"level":2,"title":"Table-column \u5C5E\u6027","slug":"table-column-\u5C5E\u6027"},{"level":3,"title":"TableAction \u7EC4\u4EF6","slug":"tableaction-\u7EC4\u4EF6"}],"relativePath":"frontend/components/LdTable.md"}'),o={name:"frontend/components/LdTable.md"},p=l(`<h1 id="table-\u8868\u683C" tabindex="-1">Table \u8868\u683C <a class="header-anchor" href="#table-\u8868\u683C">\xB6</a></h1><p>\u5BF9 <code>element-plus</code> \u7684 <code>el-table</code> \u7EC4\u4EF6\u8FDB\u884C\u5C01\u88C5</p><h2 id="table-\u5C5E\u6027" tabindex="-1">Table \u5C5E\u6027 <a class="header-anchor" href="#table-\u5C5E\u6027">\xB6</a></h2><h2 id="table-column-\u5C5E\u6027" tabindex="-1">Table-column \u5C5E\u6027 <a class="header-anchor" href="#table-column-\u5C5E\u6027">\xB6</a></h2><blockquote><p><code>Table-column \u5C5E\u6027</code>\u5168\u90E8\u7EE7\u627F\u4E8E<code>el-table column\u5C5E\u6027</code> \u89C1<a href="https://element-plus.gitee.io/zh-CN/component/table.html#table-column-%E5%B1%9E%E6%80%A7" target="_blank" rel="noopener noreferrer">Table-column \u5C5E\u6027</a></p></blockquote><p><strong>Table-column \u989D\u5916\u5C5E\u6027</strong></p><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u53EF\u9009\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>slot</td><td><code>string</code></td><td>-</td><td>-</td><td>\u81EA\u5B9A\u4E49\u63D2\u69FD</td></tr><tr><td>visible</td><td><code>boolean</code></td><td><code>true</code></td><td><code>&#39;false&#39;, &#39;true&#39;</code></td><td>\u662F\u5426\u663E\u793A</td></tr><tr><td>ifShow</td><td>\`boolean</td><td>((action) =&gt; boolean)\`</td><td>-</td><td>-</td></tr><tr><td>customRender</td><td><code>Function({text, row, index, column}) {}</code></td><td>-</td><td>-</td><td>\u751F\u6210\u590D\u6742\u6570\u636E\u7684\u6E32\u67D3\u51FD\u6570\uFF0C\u53C2\u6570\u5206\u522B\u4E3A\u5F53\u524D\u884C\u7684\u503C\uFF0C\u5F53\u524D\u884C\u6570\u636E\uFF0C\u884C\u7D22\u5F15\u884C\u914D\u7F6E</td></tr></tbody></table><h3 id="tableaction-\u7EC4\u4EF6" tabindex="-1">TableAction \u7EC4\u4EF6 <a class="header-anchor" href="#tableaction-\u7EC4\u4EF6">\xB6</a></h3><p>\u7528\u4E8E\u8868\u683C\u53F3\u4FA7\u64CD\u4F5C\u5217\u6E32\u67D3</p><p><strong>Props\u5C5E\u6027</strong></p><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u53EF\u9009\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>actions</td><td><code>Array</code></td><td>-</td><td>-</td><td>\u53F3\u4FA7\u64CD\u4F5C\u5217\u6309\u94AE\u5217\u8868</td></tr><tr><td>dropDownActions</td><td><code>Object</code></td><td>-</td><td>-</td><td>\u4E0B\u62C9\u83DC\u5355</td></tr></tbody></table><p><strong>actions \u5C5E\u6027</strong></p><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u53EF\u9009\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>label</td><td><code>String</code></td><td>-</td><td>-</td><td>\u540D\u79F0</td></tr><tr><td>auth</td><td>\`String</td><td>Array\`</td><td>-</td><td>-</td></tr><tr><td>icon</td><td><code>String</code></td><td>-</td><td>-</td><td>\u6309\u94AE\u56FE\u6807\uFF0C\u8BE6\u89C1<code>icon-svg</code></td></tr><tr><td>type</td><td><code>String</code></td><td>-</td><td>-</td><td>\u6309\u94AE\u7C7B\u578B\uFF0C\u8BE6\u89C1<code>el-button</code></td></tr><tr><td>ifShow</td><td>\`boolean</td><td>((action) =&gt; boolean)\`</td><td>-</td><td>-</td></tr><tr><td>tooltip</td><td>\`String</td><td>ElTooltipProps\`</td><td>-</td><td>-</td></tr><tr><td>onClick</td><td><code>Fn</code></td><td>-</td><td>-</td><td>\u6309\u94AE\u4E8B\u4EF6</td></tr></tbody></table><p><strong>dropDownActions \u4E0B\u62C9\u83DC\u5355\u5C5E\u6027</strong></p><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u53EF\u9009\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>label</td><td><code>String</code></td><td>-</td><td>-</td><td>\u4E0B\u62C9\u83DC\u5355\u540D\uFF0C\u6709\u4F20\uFF0C\u6587\u5B57\u540E\u9762\u81EA\u52A8\u52A0\u4E0A<code>ArrayDown</code>\u56FE\u6807\uFF0C\u6CA1\u6709\u4F20\u3002\u663E\u793A\u4E09\u4E2A\u539F\u70B9\u56FE\u6807</td></tr><tr><td>buttons</td><td><code>Array</code></td><td>-</td><td>-</td><td><code>dropDownItem</code></td></tr></tbody></table><p><strong>dropDownActions buttons \u5C5E\u6027</strong></p><blockquote><p>\u6CE8\u610F<code>command</code> \u6307\u4EE4\u8981\u4F20\u9012\u5BF9\u8C61\uFF0C\u8981\u544A\u8BC9<code>@command</code>\u56DE\u4F20\u7684\u5F53\u524D\u64CD\u4F5C\u7684\u8868\u683C\u6570\u636E\uFF0C\u548C\u64CD\u4F5C\u7C7B\u578B\u3002</p></blockquote><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">label</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u7F16\u8F91</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">auth</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">manage.menu.update</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">icon</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Plus</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">command</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">action</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">edit</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> row </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">label</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u5220\u9664</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">auth</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">manage.menu.delete</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">icon</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">CircleCheck</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">command</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">action</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">delete</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> row </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span></span>
<span class="line"></span></code></pre></div><p><strong>dropDownActions \u4E8B\u4EF6</strong></p><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>command</td><td>\u70B9\u51FB\u83DC\u5355\u9879\u89E6\u53D1\u7684\u4E8B\u4EF6\u56DE\u8C03</td><td>dropdown-item \u7684\u6307\u4EE4</td></tr></tbody></table><p><strong>\u4F7F\u7528</strong></p><div class="language-vue"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">LdTable</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-slot</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">handleSlot</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">{ </span><span style="color:#A6ACCD;">row</span><span style="color:#89DDFF;"> }</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">TableAction</span></span>
<span class="line"><span style="color:#89DDFF;">          :</span><span style="color:#C792EA;">actions</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#89DDFF;">            {</span></span>
<span class="line"><span style="color:#89DDFF;">              </span><span style="color:#F07178;">label</span><span style="color:#89DDFF;">: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u7F16\u8F91</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">              </span><span style="color:#F07178;">auth</span><span style="color:#89DDFF;">: [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">manage.menu.update</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#89DDFF;">              </span><span style="color:#F07178;">onClick</span><span style="color:#89DDFF;">: </span><span style="color:#A6ACCD;">handleEdit</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">bind</span><span style="color:#89DDFF;">(null, </span><span style="color:#A6ACCD;">row</span><span style="color:#89DDFF;">),</span></span>
<span class="line"><span style="color:#89DDFF;">            },</span></span>
<span class="line"><span style="color:#89DDFF;">            {</span></span>
<span class="line"><span style="color:#89DDFF;">              </span><span style="color:#F07178;">label</span><span style="color:#89DDFF;">: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u5220\u9664</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">              </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">danger</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">              </span><span style="color:#F07178;">ifShow</span><span style="color:#89DDFF;">: </span><span style="color:#A6ACCD;">row</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">children</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#89DDFF;"> === </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">              </span><span style="color:#F07178;">onClick</span><span style="color:#89DDFF;">: </span><span style="color:#A6ACCD;">handleDel</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">bind</span><span style="color:#89DDFF;">(null, </span><span style="color:#A6ACCD;">row</span><span style="color:#89DDFF;">),</span></span>
<span class="line"><span style="color:#89DDFF;">            },</span></span>
<span class="line"><span style="color:#89DDFF;">          ]</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">          :</span><span style="color:#C792EA;">dropDownActions</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#F07178;">label</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u66F4\u591A</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#F07178;">buttons</span><span style="color:#89DDFF;">: [</span></span>
<span class="line"><span style="color:#89DDFF;">              {</span></span>
<span class="line"><span style="color:#89DDFF;">                </span><span style="color:#F07178;">label</span><span style="color:#89DDFF;">: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">action1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">                </span><span style="color:#F07178;">auth</span><span style="color:#89DDFF;">: [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">manage.menu.update</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#89DDFF;">                </span><span style="color:#F07178;">icon</span><span style="color:#89DDFF;">: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Plus</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">                </span><span style="color:#F07178;">command</span><span style="color:#89DDFF;">: { </span><span style="color:#F07178;">action</span><span style="color:#89DDFF;">: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">action1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">, </span><span style="color:#A6ACCD;">row</span><span style="color:#89DDFF;"> },</span></span>
<span class="line"><span style="color:#89DDFF;">              },</span></span>
<span class="line"><span style="color:#89DDFF;">              {</span></span>
<span class="line"><span style="color:#89DDFF;">                </span><span style="color:#F07178;">label</span><span style="color:#89DDFF;">: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">action2</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">                </span><span style="color:#F07178;">auth</span><span style="color:#89DDFF;">: [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">manage.menu.update</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#89DDFF;">                </span><span style="color:#F07178;">icon</span><span style="color:#89DDFF;">: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">CircleCheck</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">                </span><span style="color:#F07178;">command</span><span style="color:#89DDFF;">: { </span><span style="color:#F07178;">action</span><span style="color:#89DDFF;">: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">action2</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">, </span><span style="color:#A6ACCD;">row</span><span style="color:#89DDFF;"> },</span></span>
<span class="line"><span style="color:#89DDFF;">              },</span></span>
<span class="line"><span style="color:#89DDFF;">            ],</span></span>
<span class="line"><span style="color:#89DDFF;">          }</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">          @</span><span style="color:#C792EA;">command</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">handleCommand</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">        &gt;&lt;/</span><span style="color:#FFCB6B;">TableAction</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">LdTable</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">TableAction</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@/components/LdTable</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">setup</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">handleCommand</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">action</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">action</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">handleCommand</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div>`,22),t=[p];function e(c,r,D,F,y,d){return a(),n("div",null,t)}var A=s(o,[["render",e]]);export{C as __pageData,A as default};
