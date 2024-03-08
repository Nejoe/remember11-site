import comp from "C:/Users/98159/Documents/Code/vuepress-starter/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"首页\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"title\":\"首页\",\"heroImage\":\"/images/hero.png\",\"actions\":[{\"text\":\"入门\",\"link\":\"/get-started.html\",\"type\":\"primary\"},{\"text\":\"原站点\",\"link\":\"https://remember11.com\",\"type\":\"secondary\"}],\"features\":[{\"title\":\"简洁至上\",\"details\":\"以 Markdown 为中心的项目结构，以最少的配置专注于编写。\"},{\"title\":\"Vue 驱动\",\"details\":\"使用 Vue 开发，可以在 Markdown 中使用 Vue 组件，又可以使用 Vue 来开发自定义主题。\"},{\"title\":\"高性能\",\"details\":\"为每个页面预渲染生成静态的 HTML，同时，每个页面被加载的时候，将作为 SPA 运行。\"}],\"footer\":\"MIT 协议 | 版权所有 © 2024-至今 Remember11 社区\"},\"headers\":[],\"git\":{\"updatedTime\":1709929822000,\"contributors\":[{\"name\":\"Nejoe\",\"email\":\"981591613@qq.com\",\"commits\":3}]},\"filePathRelative\":\"README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
