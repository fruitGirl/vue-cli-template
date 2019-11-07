<template>
  <div class="search">
    {{name}}
    搜索组件
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: 'HelloWorld'
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .search {
    text-align: center;
  }
</style>
