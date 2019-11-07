/* ============
 * Vuex Store
 * ============
 *
 * The store of the application.
 *
 * http://vuex.vuejs.org/en/index.html
 */

import Vue from 'vue';
import Vuex from 'vuex';

// Modules
import auth from './auth';

Vue.use(Vuex);

export default new Vuex.Store({
  /**
   * Assign the modules to the store
   */
  modules: {
    auth
  },

  /**
   * If strict mode should be enabled
   */
  strict: false
});
