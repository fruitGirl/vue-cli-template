/* ============
 * Actions for the auth module
 * ============
 *
 * The actions that are available on the
 * auth module.
 */

// 调用services接口
// import service from '@/services/auth';

import app from '@/main';
import type from './type';

export default {
  login ({ commit }, params) {
    // 接口调用的真实逻辑
    // const promise = new Promise((resolve, reject) => {
    //   service.apiLogin(params).then((data) => {
    //     resolve(data);
    //     commit(types.LOGIN, data);
    //     app.$router.push('/home');
    //   }).catch((e) => reject(e));
    // });
    // return promise;

    commit(type.LOGIN, params);
    app.$router.push('/home');
  },

  logout ({ commit }) {
    commit(types.LOGOUT);
  }
};
