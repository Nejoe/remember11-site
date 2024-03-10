<script setup lang="ts">
import { Article } from "@vuepress/plugin-blog/client";
import { computed } from "vue";

type Item = Article<Record<string, any>>;

const props = defineProps<{
  items: Item[];
  isTimeline?: boolean;
}>();

const fullPath = import.meta.url;
const baseUrl = computed(() => {
  // the path between the host and the rest of the url
  // e.g. https://example.com/base/path => /base
  const base = fullPath.match(/(http[s]?:\/\/[^/]+)(\/[^/]+)\/.*/)?.[2];
  return base;
});
// add the base ahead of the '/images'
const addBaseToImg = (src: string) => {
  return src.startsWith("/images") ? `${baseUrl.value}${src}` : src;
};
// modeify the items' info's excerpt's img src,except is string
// e.g. <img src="path" ...> => <img src="/base/path" ...>
const modifyImgSrc = (excerpt: string) => {
  return excerpt.replace(/<img src="([^"]+)"(.*?)>/g, (match, p1, p2) => {
    return `<img src="${addBaseToImg(p1)}"${p2}>`;
  });
};
// modify all the items' info's excerpt's img src
const itemsAfterModify = computed<Item[]>(() => {
  return props.items.map((item) => {
    return {
      info: {
        ...item.info,
        excerpt: modifyImgSrc(item.info.excerpt),
      },
      path: item.path,
    };
  });
});
</script>

<template>
  <div class="article-wrapper">
    <div v-if="!itemsAfterModify.length">Nothing in here.</div>

    <article
      v-for="{ info, path } in itemsAfterModify"
      :key="path"
      class="article"
      @click="$router.push(path)"
    >
      <header class="title">
        {{
          (isTimeline ? `${new Date(info.date).toLocaleDateString()}: ` : "") +
          info.title
        }}
      </header>

      <hr />

      <div class="article-info">
        <span v-if="info.author" class="author">Author: {{ info.author }}</span>

        <span v-if="info.date && !isTimeline" class="date"
          >Date: {{ new Date(info.date).toLocaleDateString() }}</span
        >

        <span v-if="info.category" class="category"
          >Category: {{ info.category.join(", ") }}</span
        >

        <span v-if="info.tag" class="tag">Tag: {{ info.tag.join(", ") }}</span>
      </div>

      <div v-if="info.excerpt" class="excerpt" v-html="info.excerpt"></div>
    </article>
  </div>
</template>

<style lang="scss">
@use "@vuepress/theme-default/styles/mixins";

.article-wrapper {
  @include mixins.content_wrapper;
  text-align: center;
}

.article {
  position: relative;

  box-sizing: border-box;

  width: 100%;
  margin: 0 auto 1.25rem;
  padding: 1rem 1.25rem;
  border: 1px solid var(--c-border);
  border-radius: 0.4rem;
  color: var(--c-text);

  text-align: start;

  @media (max-width: 419px) {
    border-radius: 0;
  }

  &:hover {
    cursor: pointer;
  }

  .title {
    position: relative;

    display: inline-block;

    font-size: 1.28rem;
    line-height: 2rem;

    &::after {
      content: "";

      position: absolute;
      bottom: 0;
      inset-inline-start: 0;

      width: 100%;
      height: 2px;

      background: var(--c-brand);

      visibility: hidden;

      transition: transform 0.3s ease-in-out;
      transform: scaleX(0);
    }

    &:hover {
      &::after {
        visibility: visible;
        transform: scaleX(1);
      }
    }

    a {
      color: inherit;
    }
  }

  .article-info {
    display: flex;
    flex-shrink: 0;

    > span {
      margin-inline-end: 0.5em;
      line-height: 1.8;
    }
  }

  .excerpt {
    h1 {
      display: none;
    }

    h2 {
      font-size: 1.2em;
    }

    h3 {
      font-size: 1.15em;
    }
  }
}
</style>
