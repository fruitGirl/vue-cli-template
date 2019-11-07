<template>
  <div class="login">
    <we-header title='登录'></we-header>
    <p>{{container}}</p>
    <div class="footer">
      <el-button @click="handleLogin">登录</el-button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import WeHeader from '@/layouts/header';

export default {
  data () {
    return {
      container: '登陆表单内容部分'
    };
  },
  components: {
    WeHeader
  },
  methods: {
    ...mapActions({
      login: 'auth/login' // 映射 this.login() 为 this.$store.dispatch('auth/login')
    }),
    handleLogin () {
      this.login({id: 123456});
      // this.$router.push('/home');
    }
  }
};
</script>

<style lang="less" scoped>
  .login{
    width: 100%;
    p {
      width: 100%;
      height: 500px;
      line-height: 500px;
      color: red;
      text-align: center;
    }
    .footer {
      width: 80px;
      margin: auto;
      button{
        width: 80px;
      }
    }
};
</style>
