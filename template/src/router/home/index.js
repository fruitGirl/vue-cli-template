const Home = () => import(/* webpackChunkName: "home" */ '@/pages/home/index.vue');

const arr = [
  {
    path: '/home',
    name: 'home',
    component: Home,

    // If the user needs to be a guest to view this page
    meta: {
      guest: true
    }
  }
];
// Home
export default arr;
