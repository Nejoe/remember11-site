      export const typesMap = {"article":{"/":{"path":"/article/","indexes":[0,4,7,6,3,1,8,5,2]}},"timeline":{"/":{"path":"/timeline/","indexes":[0,4,7,6,3,1,8,5,2]}}};
      
if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
  });

      