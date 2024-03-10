export const themeData = JSON.parse("{\"logo\":\"/images/icon.ico\",\"navbar\":[{\"text\":\"文章\",\"link\":\"/article/\"},{\"text\":\"分类\",\"link\":\"/category/\"},{\"text\":\"标签\",\"link\":\"/tag/\"},{\"text\":\"时间线\",\"link\":\"/timeline/\"}],\"sidebar\":{\"/guide\":[{\"text\":\"流程指南\",\"children\":[\"/guide/介绍.md\",\"/guide/游戏资源.md\"]}],\"/posts/\":\"heading\"},\"repo\":\"Nejoe/remember11-site\",\"docsDir\":\"docs\",\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
