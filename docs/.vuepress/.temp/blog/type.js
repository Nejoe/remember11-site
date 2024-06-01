      export const typesMap = {"article":{"/":{"path":"/article/","indexes":[0,2,1,6,9,8,5,3,10,7,4]}},"timeline":{"/":{"path":"/timeline/","indexes":[0,2,1,6,9,8,5,3,10,7,4]}}};
      
if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
  });

      