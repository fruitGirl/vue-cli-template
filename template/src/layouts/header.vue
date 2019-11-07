<template>
  <div class="header">
    <p>{{title}}</p>
  </div>
</template>

<script>

export default {
  props: {
    title: {
      type: String,
      default: '标题'
    }
  }
};
</script>

<style lang="less" scoped>
  .header {
    p {
      color: white;
      text-align: center;
      background: gray;
      height: 50px;
      line-height: 50px;
    }
  };

</style>
