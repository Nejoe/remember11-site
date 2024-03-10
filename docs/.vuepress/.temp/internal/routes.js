export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "v-0a2bba05" */"C:/Users/98159/Documents/Code/vuepress-starter/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"Get Started"} }],
  ["/", { loader: () => import(/* webpackChunkName: "v-4ec95bbd" */"C:/Users/98159/Documents/Code/vuepress-starter/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"首页"} }],
  ["/posts/sticky.html", { loader: () => import(/* webpackChunkName: "v-39c1ab1e" */"C:/Users/98159/Documents/Code/vuepress-starter/docs/.vuepress/.temp/pages/posts/sticky.html.js"), meta: {"_blog":{"title":"Sticky Article","author":"","date":"2021-01-01T00:00:00.000Z","category":["CategoryC"],"tag":["tag E"],"excerpt":"<p>A sticky article demo.</p>"},"title":"Sticky Article"} }],
  ["/posts/sticky2.html", { loader: () => import(/* webpackChunkName: "v-02106e42" */"C:/Users/98159/Documents/Code/vuepress-starter/docs/.vuepress/.temp/pages/posts/sticky2.html.js"), meta: {"_blog":{"title":"Sticky Article with Higher Priority","author":"","date":"2020-01-01T00:00:00.000Z","category":["CategoryC"],"tag":["tag E"],"excerpt":"\n<p>Excerpt information which is added manually.</p>\n"},"title":"Sticky Article with Higher Priority"} }],
  ["/posts/%E4%B8%AD%E6%96%87%E6%B5%8B%E8%AF%95.html", { loader: () => import(/* webpackChunkName: "v-04c36f03" */"C:/Users/98159/Documents/Code/vuepress-starter/docs/.vuepress/.temp/pages/posts/中文测试.html.js"), meta: {"_blog":{"title":"中文 MD 测试","author":"","date":"2024-03-09T00:00:00.000Z","category":["中文"],"tag":["标签 A","tag B"],"excerpt":"\n<h2>Heading 2</h2>\n<p>Here is the content.</p>\n<h3>Heading 3</h3>\n<p>Here is the content.</p>\n"},"title":"中文 MD 测试"} }],
  ["/posts/%E7%8A%AC%E4%BC%8F%E6%99%AF%E5%AD%90%E5%92%8C%E5%87%89%E8%8D%AB%E7%A9%97%E9%B8%9F.html", { loader: () => import(/* webpackChunkName: "v-d74dde8e" */"C:/Users/98159/Documents/Code/vuepress-starter/docs/.vuepress/.temp/pages/posts/犬伏景子和凉荫穗鸟.html.js"), meta: {"_blog":{"title":"犬伏景子和凉荫穗鸟","author":"","date":"2024-03-10T00:00:00.000Z","category":[],"tag":["DID","凉荫穗鸟"],"excerpt":"\n<p>在上一篇文章中，我们确认了第三人格 α 是内海未出生的双胞胎之一，但这并不是唯一奇怪的人格。让我们看看另一个神秘人，犬伏景子，或者她喜欢的那个自称，“凉荫穗鸟”。</p>\n<h2>穗鸟是 DID 人格吗</h2>\n<p>在 SPHIA 的那位黑发女子的行为相当古怪，但有一件事是可以确定的：她在心篇中是平静和沉默的，在悟篇中则是轻浮和健谈的。由于犬伏患有 DID，我们最初假设穗鸟只是犬伏体内其中的一个 DID 人格。</p>\n<p><img src=\"/images/穗鸟-雪地.png\" alt=\"穗鸟-雪地\"></p>\n<p><img src=\"/images/穗鸟-驾照.png\" alt=\"穗鸟-驾照\"></p>"},"title":"犬伏景子和凉荫穗鸟"} }],
  ["/posts/%E8%BD%AC%E7%A7%BB%E7%8E%B0%E8%B1%A1.html", { loader: () => import(/* webpackChunkName: "v-8319c032" */"C:/Users/98159/Documents/Code/vuepress-starter/docs/.vuepress/.temp/pages/posts/转移现象.html.js"), meta: {"_blog":{"title":"第三人格和第三地点","author":"","date":"2024-03-09T00:00:00.000Z","category":[],"tag":["转移现象"],"excerpt":"\n<p>悟认为，有他称之为<code>α</code>的第三种人格在控制着他的身体，你在游戏流程中也会意识到，实际上时空转移现象是在三个地点中进行的。</p>\n<p>那么，这三个人格和三个地点，是如何结合到一起的呢？</p>\n<h2>交换现象详解</h2>\n<p>好，先让我们将时间点整理成表格。</p>\n<blockquote>\n<p>1 月 12 日的转移</p>\n</blockquote>\n<table>\n<thead>\n<tr>\n<th style=\"text-align:center\">时间</th>\n<th style=\"text-align:center\">避难小屋</th>\n<th style=\"text-align:center\">SPHIA</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td style=\"text-align:center\">01:07 PM</td>\n<td style=\"text-align:center\">悟</td>\n<td style=\"text-align:center\">心</td>\n</tr>\n<tr>\n<td style=\"text-align:center\">01:40 PM</td>\n<td style=\"text-align:center\">心</td>\n<td style=\"text-align:center\">悟</td>\n</tr>\n<tr>\n<td style=\"text-align:center\">06:03 PM</td>\n<td style=\"text-align:center\">悟</td>\n<td style=\"text-align:center\">心</td>\n</tr>\n<tr>\n<td style=\"text-align:center\">06:36 PM</td>\n<td style=\"text-align:center\">心</td>\n<td style=\"text-align:center\">悟</td>\n</tr>\n<tr>\n<td style=\"text-align:center\">07:33 PM</td>\n<td style=\"text-align:center\">悟</td>\n<td style=\"text-align:center\">心</td>\n</tr>\n<tr>\n<td style=\"text-align:center\">08:06 PM</td>\n<td style=\"text-align:center\">心</td>\n<td style=\"text-align:center\">悟</td>\n</tr>\n</tbody>\n</table>"},"title":"第三人格和第三地点"} }],
  ["/posts/%E9%98%BF%E5%B0%94%E6%B3%95%E5%92%8C%E6%AC%A7%E7%B1%B3%E8%8C%84.html", { loader: () => import(/* webpackChunkName: "v-2b0b8f7f" */"C:/Users/98159/Documents/Code/vuepress-starter/docs/.vuepress/.temp/pages/posts/阿尔法和欧米茄.html.js"), meta: {"_blog":{"title":"阿尔法和欧米茄","author":"","date":"2024-03-10T00:00:00.000Z","category":[],"tag":[],"excerpt":"\n<p>到目前为止，我们已经发现，内海未出生的双胞胎参与了两组交换。雄性双胞胎 α 正在与心和悟交换，而雌性双胞胎<code>Ω</code>则与犬伏和穗鸟交换。</p>\n<p>悟确信有人在追杀他，这很好理解。他从钟楼上摔下来，差点淹死，在停电时被刺伤，榎本也试图用刀杀死他。那么这是否意味着，榎本要对所有这些事情负责？</p>\n<h2>溺水</h2>\n<p>让我们先从溺水未遂开始。有两种可能的结果：</p>\n<ol>\n<li>\n<p>如果心不吃药，悟就会被淹死。灯熄灭后，心感觉到有人进入了浴室，而悟则感觉有人在紧紧按着他的头部，直到他被活活淹死。</p>\n</li>\n<li>\n<p>如果心吃了安眠药，悟就会活下来。灯还是熄灭了，但她并未感觉有人进来过。</p>\n</li>\n</ol>"},"title":"阿尔法和欧米茄"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "v-8fe89ed2" */"C:/Users/98159/Documents/Code/vuepress-starter/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/category/", { loader: () => import(/* webpackChunkName: "v-4a79ed7c" */"C:/Users/98159/Documents/Code/vuepress-starter/docs/.vuepress/.temp/pages/category/index.html.js"), meta: {"title":"Categories"} }],
  ["/category/categoryc/", { loader: () => import(/* webpackChunkName: "v-0d8f00ac" */"C:/Users/98159/Documents/Code/vuepress-starter/docs/.vuepress/.temp/pages/category/categoryc/index.html.js"), meta: {"title":"Category CategoryC"} }],
  ["/category/%E4%B8%AD%E6%96%87/", { loader: () => import(/* webpackChunkName: "v-288f08be" */"C:/Users/98159/Documents/Code/vuepress-starter/docs/.vuepress/.temp/pages/category/中文/index.html.js"), meta: {"title":"Category 中文"} }],
  ["/tag/", { loader: () => import(/* webpackChunkName: "v-2d1b5e52" */"C:/Users/98159/Documents/Code/vuepress-starter/docs/.vuepress/.temp/pages/tag/index.html.js"), meta: {"title":"Tags"} }],
  ["/tag/tag-e/", { loader: () => import(/* webpackChunkName: "v-13ce6d62" */"C:/Users/98159/Documents/Code/vuepress-starter/docs/.vuepress/.temp/pages/tag/tag-e/index.html.js"), meta: {"title":"Tag tag E"} }],
  ["/tag/%E6%A0%87%E7%AD%BE-a/", { loader: () => import(/* webpackChunkName: "v-1076f740" */"C:/Users/98159/Documents/Code/vuepress-starter/docs/.vuepress/.temp/pages/tag/标签-a/index.html.js"), meta: {"title":"Tag 标签 A"} }],
  ["/tag/tag-b/", { loader: () => import(/* webpackChunkName: "v-41f84d9c" */"C:/Users/98159/Documents/Code/vuepress-starter/docs/.vuepress/.temp/pages/tag/tag-b/index.html.js"), meta: {"title":"Tag tag B"} }],
  ["/tag/did/", { loader: () => import(/* webpackChunkName: "v-14128f3c" */"C:/Users/98159/Documents/Code/vuepress-starter/docs/.vuepress/.temp/pages/tag/did/index.html.js"), meta: {"title":"Tag DID"} }],
  ["/tag/%E5%87%89%E8%8D%AB%E7%A9%97%E9%B8%9F/", { loader: () => import(/* webpackChunkName: "v-50359d3e" */"C:/Users/98159/Documents/Code/vuepress-starter/docs/.vuepress/.temp/pages/tag/凉荫穗鸟/index.html.js"), meta: {"title":"Tag 凉荫穗鸟"} }],
  ["/tag/%E8%BD%AC%E7%A7%BB%E7%8E%B0%E8%B1%A1/", { loader: () => import(/* webpackChunkName: "v-e34f8cea" */"C:/Users/98159/Documents/Code/vuepress-starter/docs/.vuepress/.temp/pages/tag/转移现象/index.html.js"), meta: {"title":"Tag 转移现象"} }],
  ["/article/", { loader: () => import(/* webpackChunkName: "v-7be5f476" */"C:/Users/98159/Documents/Code/vuepress-starter/docs/.vuepress/.temp/pages/article/index.html.js"), meta: {"title":"Articles"} }],
  ["/timeline/", { loader: () => import(/* webpackChunkName: "v-d5b24bc2" */"C:/Users/98159/Documents/Code/vuepress-starter/docs/.vuepress/.temp/pages/timeline/index.html.js"), meta: {"title":"Timeline"} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
