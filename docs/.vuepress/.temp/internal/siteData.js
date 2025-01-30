export const siteData = JSON.parse("{\"base\":\"/remember11-site/\",\"lang\":\"zh-CN\",\"title\":\"新.Remember11中文站（Beta）\",\"description\":\"资源，解密，这里什么都有\",\"head\":[[\"link\",{\"rel\":\"icon\",\"href\":\"/remember11-site/images/icon.ico\"}]],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
