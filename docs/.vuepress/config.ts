import { blogPlugin } from "@vuepress/plugin-blog";
import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";
import { baseUrl } from "./utils";
import { commentPlugin } from "vuepress-plugin-comment2";

export default defineUserConfig({
  base: baseUrl,
  lang: "zh-CN",

  title: "Remember11中文站",
  description: "Remember11非官方中文站点",
  head: [["link", { rel: "icon", href: "/remember11-site/images/icon.ico" }]],

  theme: defaultTheme({
    logo: "/images/icon.ico",

    navbar: [
      {
        text: "流程指南",
        children: [
          "/guide/介绍.md",
          "/guide/游戏资源.md",
          "/guide/游戏流程.md",
        ],
      },
      {
        text: "剧情解析",
        link: "/posts/转移现象/第三人格和第三地点.md",
        children: [
          {
            text: "转移现象",
            children: [
              "/posts/转移现象/第三人格和第三地点.md",
              "/posts/转移现象/犬伏景子和凉荫穗鸟.md",
              "/posts/转移现象/阿尔法和欧米茄.md",
              "/posts/转移现象/7日之中交错的轨迹.md",
            ],
          },
          {
            text: "隐藏故事",
            children: [
              "/posts/隐藏故事/悟，榎本，以及“我”.md",
              "/posts/隐藏故事/Self在哪里.md",
              "/posts/隐藏故事/优希堂沙也香.md",
              "/posts/隐藏故事/优希堂计划.md",
            ],
          },
          {
            text: "未完篇章",
            children: [
              "/posts/未完篇章/Self的心理学隐喻.md",
              "/posts/未完篇章/丢失的Self篇.md",
            ],
          },
          {
            text: "其他细节",
            children: ["/posts/其他细节/钟楼上的影子.md"],
          },
        ],
      },
      {
        text: "文章",
        link: "/article/",
      },
      {
        text: "分类",
        link: "/category/",
      },
      {
        text: "标签",
        link: "/tag/",
      },
      {
        text: "时间线",
        link: "/timeline/",
      },
    ],
    sidebar: {
      "/guide": [
        {
          text: "流程指南",
          children: [
            "/guide/介绍.md",
            "/guide/游戏资源.md",
            "/guide/游戏流程.md",
          ],
        },
      ],
      "/guide/strategy/": "heading",
      "/posts": [
        {
          text: "剧情解析",
          children: [
            {
              text: "转移现象",
              children: [
                "/posts/转移现象/第三人格和第三地点.md",
                "/posts/转移现象/犬伏景子和凉荫穗鸟.md",
                "/posts/转移现象/阿尔法和欧米茄.md",
                "/posts/转移现象/7日之中交错的轨迹.md",
              ],
            },
            {
              text: "隐藏故事",
              children: [
                "/posts/隐藏故事/悟，榎本，以及“我”.md",
                "/posts/隐藏故事/Self在哪里.md",
                "/posts/隐藏故事/优希堂沙也香.md",
                "/posts/隐藏故事/优希堂计划.md",
              ],
            },
            {
              text: "未完篇章",
              children: [
                "/posts/未完篇章/Self的心理学隐喻.md",
                "/posts/未完篇章/丢失的Self篇.md",
              ],
            },
            {
              text: "其他细节",
              children: ["/posts/其他细节/钟楼上的影子.md"],
            },
          ],
        },
      ],
      // "post/转移现象/": "heading",
    },
    repo: "Nejoe/remember11-site",
    docsDir: "docs",
  }),

  plugins: [
    blogPlugin({
      // Only files under posts are articles
      filter: ({ filePathRelative }) =>
        filePathRelative ? filePathRelative.startsWith("posts/") : false,

      // Getting article info
      getInfo: ({ frontmatter, title, data }) => ({
        title,
        author: frontmatter.author || "",
        date: frontmatter.date || null,
        category: frontmatter.category || [],
        tag: frontmatter.tag || [],
        excerpt:
          // Support manually set excerpt through frontmatter
          typeof frontmatter.excerpt === "string"
            ? frontmatter.excerpt
            : data?.excerpt || "",
      }),

      // Generate excerpt for all pages excerpt those users choose to disable
      excerptFilter: ({ frontmatter }) =>
        !frontmatter.home &&
        frontmatter.excerpt !== false &&
        typeof frontmatter.excerpt !== "string",

      category: [
        {
          key: "category",
          getter: (page) => (page.frontmatter.category || []) as string[],
          layout: "Category",
          itemLayout: "Category",
          frontmatter: () => ({
            title: "Categories",
            sidebar: false,
          }),
          itemFrontmatter: (name) => ({
            title: `Category ${name}`,
            sidebar: false,
          }),
        },
        {
          key: "tag",
          getter: (page) => (page.frontmatter.tag || []) as string[],
          layout: "Tag",
          itemLayout: "Tag",
          frontmatter: () => ({
            title: "Tags",
            sidebar: false,
          }),
          itemFrontmatter: (name) => ({
            title: `Tag ${name}`,
            sidebar: false,
          }),
        },
      ],

      type: [
        {
          key: "article",
          // Remove archive articles
          filter: (page) => !page.frontmatter.archive,
          layout: "Article",
          frontmatter: () => ({
            title: "Articles",
            sidebar: false,
          }),
          // Sort pages with time and sticky
          sorter: (pageA, pageB) => {
            if (pageA.frontmatter.sticky && pageB.frontmatter.sticky) {
              return (
                Number(pageB.frontmatter.sticky) -
                Number(pageA.frontmatter.sticky)
              );
            }

            if (pageA.frontmatter.sticky && !pageB.frontmatter.sticky)
              return -1;

            if (!pageA.frontmatter.sticky && pageB.frontmatter.sticky) return 1;

            if (!pageB.frontmatter.date) return 1;
            if (!pageA.frontmatter.date) return -1;

            return (
              new Date(pageB.frontmatter.date).getTime() -
              new Date(pageA.frontmatter.date).getTime()
            );
          },
        },
        {
          key: "timeline",
          // Only article with date should be added to timeline
          filter: (page) => page.frontmatter.date instanceof Date,
          // Sort pages with time
          sorter: (pageA, pageB) =>
            new Date(pageB.frontmatter.date).getTime() -
            new Date(pageA.frontmatter.date).getTime(),
          layout: "Timeline",
          frontmatter: () => ({
            title: "Timeline",
            sidebar: false,
          }),
        },
      ],
      hotReload: true,
    }),
    commentPlugin({
      provider: "Waline",
      serverURL: "https://remember11-site-comment-nejoes-projects.vercel.app/",
    }),
  ],

  bundler: viteBundler(),
});
