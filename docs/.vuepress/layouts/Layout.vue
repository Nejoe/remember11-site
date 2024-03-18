<script setup>
import ParentLayout from "@vuepress/theme-default/layouts/Layout.vue";
</script>

<template>
  <ParentLayout>
    <template #page-bottom>
      <div class="my-footer">
        <em>由于数据库限制，评论功能需要科学上网使用。</em>
      </div>
      <CommentService />
    </template>
  </ParentLayout>
</template>

<style lang="css">
.my-footer {
  text-align: center;
}
</style>
