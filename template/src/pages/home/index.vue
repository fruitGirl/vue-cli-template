<template>
  <div class="home">
    <we-header title='home'></we-header>
    home页面
  </div>
</template>

<script>
import WeHeader from '@/layouts/header.vue';

export default {
  components: {
    WeHeader
  }
};
</script>

<style lang="less" scoped>
  .home {
    text-align: center;
  };
</style>
