const Login = () => import(/* webpackChunkName: "auth" */ '@/pages/auth/index.vue');

const arr = [
  {
    path: '/',
    name: 'login',
    component: Login,

    // If the user needs to be a guest to view this page
    meta: {
      guest: true
    }
  }
];
// Auth
export default arr;
