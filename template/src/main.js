// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App.vue';
import '@/styles/reset.less';

Vue.config.productionTip = false;

require('./App.js');

/* eslint-disable no-new */
const app = new Vue(App).$mount('#app');
export default app;
