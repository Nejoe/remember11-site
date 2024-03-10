<script setup lang="ts">
import { useBlogCategory } from "@vuepress/plugin-blog/client";
import ParentLayout from "@vuepress/theme-default/layouts/Layout.vue";
import { RouteLink, useRoute } from "vuepress/client";
import ArticleList from "../components/ArticleList.vue";
import { computed } from "vue";
import { encodeURI } from "../utils";

const route = useRoute();
const categoryMap = useBlogCategory("category");

// 提取categoryMap.value.map中当前分类的items
const currentItems = computed(() => {
  // 获取当前分类的items
  for (const [name, { items }] of Object.entries(categoryMap.value.map)) {
    if (route.path === encodeURI(categoryMap.value.map[name].path)) {
      return items;
    }
  }
});
</script>

<template>
  <ParentLayout>
    <template #page>
      <main class="page">
        <div class="category-wrapper">
          <RouteLink
            v-for="({ items, path }, name) in categoryMap.map"
            :key="name"
            :to="path"
            :active="route.path === encodeURI(path)"
            class="category"
          >
            {{ name }}
            <span class="category-num">
              {{ items.length }}
            </span>
          </RouteLink>
        </div>

        <ArticleList :items="currentItems ?? []" />
      </main>
    </template>
  </ParentLayout>
</template>

<style lang="scss">
@use "@vuepress/theme-default/styles/mixins";

.category-wrapper {
  @include mixins.content_wrapper;

  padding-top: 1rem !important;
  padding-bottom: 0 !important;

  font-size: 14px;

  a {
    color: inherit;
  }

  .category {
    display: inline-block;
    vertical-align: middle;

    overflow: hidden;

    margin: 0.3rem 0.6rem 0.8rem;
    padding: 0.4rem 0.8rem;
    border-radius: 0.25rem;

    cursor: pointer;

    transition: background 0.3s, color 0.3s;

    @media (max-width: 419px) {
      font-size: 0.9rem;
    }

    .category-num {
      display: inline-block;

      min-width: 1rem;
      height: 1.2rem;
      margin-inline-start: 0.2em;
      padding: 0 0.1rem;
      border-radius: 0.6rem;

      font-size: 0.7rem;
      line-height: 1.2rem;
      text-align: center;
    }

    &.route-link-active {
      background: var(--c-brand);
      color: var(--c-bg);

      .category-num {
        color: var(--c-bg);
      }
    }
  }
}
</style>
