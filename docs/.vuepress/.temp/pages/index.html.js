import comp from "H:/remember11-site/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"首页\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"title\":\"首页\",\"heroImage\":\"/images/hero.png\",\"actions\":[{\"text\":\"开始\",\"link\":\"/begin/概述.html\",\"type\":\"primary\"}],\"features\":[{\"title\":\"全新出发\",\"details\":\"我们把网站重写了，省得你以为这是个三十多年历史的玩意\"},{\"title\":\"官方交流群\",\"details\":807734293},{\"title\":\"友情交流\",\"details\":\"鹿鸣市立超心理学研究所-872370465\"}],\"footer\":\"当项目迁移到服务器上时，记得在这里填上备案号\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"README.md\"}")
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
