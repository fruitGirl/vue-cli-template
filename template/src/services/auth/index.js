import api from '@/utils/axios';

export default {
  apiLogin: param => api.post('login接口url', param),
  apiLoginOut: param => api.post('loginout接口url', param)
};
