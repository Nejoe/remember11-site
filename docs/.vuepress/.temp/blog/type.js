      export const typesMap = {"article":{"/":{"path":"/article/","indexes":[3,6,5,2,0,7,4,1]}},"timeline":{"/":{"path":"/timeline/","indexes":[3,6,5,2,0,7,4,1]}}};
      
if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
  });

      