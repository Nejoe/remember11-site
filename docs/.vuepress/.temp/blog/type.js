      export const typesMap = {"article":{"/":{"path":"/article/","indexes":[1,0,5,8,7,4,2,9,6,3]}},"timeline":{"/":{"path":"/timeline/","indexes":[1,0,5,8,7,4,2,9,6,3]}}};
      
if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
  });

      