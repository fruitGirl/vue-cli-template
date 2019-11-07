import Vue from 'vue';
import Router from 'vue-router';

import Auth from './auth';
import Home from './home';
import Base from './base';

Vue.use(Router);

const routes = [...Base, ...Auth, ...Home];

const router = new Router({
  mode: 'history',
  routes
});

router.beforeEach((to, from, next) => {
  const matched = router.getMatchedComponents(to); // 是否有匹配组件
  console.log('matched=', matched);
  if (matched.length > 0) {
    // 路由逻辑
    next();
  } else {
    // 配置404页面
    next({
      name: '404'
    });
  }
});

export default router;
