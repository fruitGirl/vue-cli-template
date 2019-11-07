const PageNo = () => import(/* webpackChunkName: "base" */ '@/pages/base/404.vue');
const PageError = () => import(/* webpackChunkName: "base" */ '@/pages/base/error.vue');

const arr = [
  {
    path: '/404',
    name: '404',
    component: PageNo,
    // If the user needs to be authenticated to view this page
    meta: {
      auth: false
    }
  },
  {
    path: '/error',
    name: 'error',
    component: PageError,
    // If the user needs to be authenticated to view this page
    meta: {
      auth: false
    }
  }
];

export default arr;
