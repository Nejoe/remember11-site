import { defineClientConfig } from "vuepress/client";
import Article from "./layouts/Article.vue";
import Category from "./layouts/Category.vue";
import Tag from "./layouts/Tag.vue";
import Timeline from "./layouts/Timeline.vue";
import Layout from "@vuepress/theme-default/layouts/Layout.vue";
import NotFound from "@vuepress/theme-default/layouts/NotFound.vue";

export default defineClientConfig({
  // we provide some blog layouts
  layouts: {
    Article,
    Category,
    Tag,
    Timeline,
    Layout: Layout,
    NotFound: NotFound,
  },
});
