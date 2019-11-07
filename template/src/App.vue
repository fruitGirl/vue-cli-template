<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
/* ============
   * Entry Point
   * ============
   *
   * The entry point of the application
   */

import store from './store';
import router from './router';

export default {
  name: 'App',
  /**
   * The Vuex store
   */
  store,

  /**
   * The router
   */
  router,

  /**
   * Fires when the app has been mounted
   */
  mounted () {
  }
};
</script>
