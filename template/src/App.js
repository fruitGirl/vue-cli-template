import Vue from 'vue';
import VuexRouterSync from 'vuex-router-sync';
import store from './store';
import router from './router';
// 引入公共样式
import '@/styles/reset.less';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

VuexRouterSync.sync(store, router);
