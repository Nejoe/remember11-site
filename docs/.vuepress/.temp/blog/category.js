export const categoriesMap = {"category":{"/":{"path":"/category/","map":{"Markdown":{"path":"/category/markdown/","indexes":[0]},"示例":{"path":"/category/示例/","indexes":[0]},"隐藏故事":{"path":"/category/隐藏故事/","indexes":[1]},"转移现象":{"path":"/category/转移现象/","indexes":[2,3,4]}}}},"tag":{"/":{"path":"/tag/","map":{"Self":{"path":"/tag/self/","indexes":[5]},"优希堂悟":{"path":"/tag/优希堂悟/","indexes":[2,3,1,5]},"榎本":{"path":"/tag/榎本/","indexes":[2,1,5]},"我":{"path":"/tag/我/","indexes":[1,5]},"DID":{"path":"/tag/did/","indexes":[4]},"凉荫穗鸟":{"path":"/tag/凉荫穗鸟/","indexes":[3,4]},"犬伏景子":{"path":"/tag/犬伏景子/","indexes":[3,4]},"α":{"path":"/tag/α/","indexes":[2,3,4]},"Ω":{"path":"/tag/ω/","indexes":[2,4]},"Shadow":{"path":"/tag/shadow/","indexes":[4]},"Trickster":{"path":"/tag/trickster/","indexes":[4]},"转移现象":{"path":"/tag/转移现象/","indexes":[3]},"第三人格":{"path":"/tag/第三人格/","indexes":[3]},"第三地点":{"path":"/tag/第三地点/","indexes":[3]},"冬川心":{"path":"/tag/冬川心/","indexes":[2,3]},"内海卡莉":{"path":"/tag/内海卡莉/","indexes":[2,3]}}}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogCategory)
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ categoriesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
  });

