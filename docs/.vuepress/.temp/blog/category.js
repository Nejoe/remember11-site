export const categoriesMap = {"category":{"/":{"path":"/category/","map":{"CategoryC":{"path":"/category/categoryc/","indexes":[0,1]},"中文":{"path":"/category/中文/","indexes":[2]}}}},"tag":{"/":{"path":"/tag/","map":{"tag E":{"path":"/tag/tag-e/","indexes":[0,1]},"标签 A":{"path":"/tag/标签-a/","indexes":[2]},"tag B":{"path":"/tag/tag-b/","indexes":[2]},"DID":{"path":"/tag/did/","indexes":[3]},"凉荫穗鸟":{"path":"/tag/凉荫穗鸟/","indexes":[3]},"转移现象":{"path":"/tag/转移现象/","indexes":[4]}}}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogCategory)
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ categoriesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
  });

