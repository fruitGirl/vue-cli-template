// 数组去重
export function unique (array, key) {
  if (!key) {
    array = [...new Set(array)];
  } else {
    const hash = {};
    array = array.reduce((item, next) => {
      if (!hash[next[key]]) hash[next[key]] = true && item.push(next);
      return item;
    }, []);
  }
  return array;
}

// 对象深复制，简单粗暴
export function cloneObject (obj) {
  const newObj = JSON.stringify(obj);
  return JSON.parse(newObj);
}

/**
 * debounce
 * 简易防抖
 * @param {delay} 间隔时间
 * @param {targetFuntion} 目标函数
 */
export function debounce (delay, targetFuntion, ...args) {
  let timer;
  return function debounceFunc () {
    const ctx = this;
    // 首次立即执行
    if (timer === undefined) {
      targetFuntion.apply(ctx, args);
      timer = 'isApplyed';
      return;
    }
    clearTimeout(timer);
    timer = setTimeout(() => {
      targetFuntion.apply(ctx, args);
    }, delay);
  };
}
/**
 * debounce
 * 简易节流
 * @param {delay} 延时
 * @param {targetFuntion} 目标函数
 * @param {duration} 最大执行间隔
 */
export function throttle (delay, targetFuntion, duration, ...argument) {
  let timer;
  let begin = new Date();
  return function debounceFunc () {
    const context = this;
    const args = argument;
    const current = new Date();
    if (timer === undefined) {
      targetFuntion.apply(context, args);
      timer = 'isApplyed';
      return;
    }
    clearTimeout(timer);
    if (current - begin >= duration) {
      targetFuntion.apply(context, args);
      begin = current;
    } else {
      timer = setTimeout(() => {
        targetFuntion.apply(context, args);
      }, delay);
    }
  };
}

/**
 * 获取错误信息
 *
 * @param {object} data
 * @returns
 */
const getError = (data) => {
  if (!data) return '';
  if (typeof data !== 'object') {
    return data;
  }
  if (data['detailMessage']) {
    return data['detailMessage'];
  }
  if (data['errorMessage']) {
    if (typeof data['errorMessage'] === 'object') {
      return data['errorMessage']['message'];
    }
    return data['errorMessage'];
  } else if (typeof data['errorEnum'] === 'object') {
    return data['errorEnum']['message'];
  } else if (data['errorCode']) {
    return data['errorCode'];
  } else if (data['error']) {
    if (typeof data['error'] === 'object') {
      return data['error']['message'] || data['error']['code'];
    }
    return data['error'];
  } else if (data['fieldErrors']) {
    return data['fieldErrors'];
  } else {
    this.$message.error(data);
    return '系统错误';
  }
};

/**
 * 获取错误信息(主要针对的是没有请求到后端接口的情况)[提前拦截了，用不上]
 *
 * @param {object} data
 * @returns
 */
const showCatchError = (error) => {
  T.logError('catchError:', error);
  this.$message.error('系统错误');
};

/**
 * 获取错误代码
 *
 * @param {object} data
 * @returns
 */
const getErrorCode = (data) => {
  if (data['errorCode']) {
    return data['errorCode'];
  } else if (data['error'] && typeof data['error'] === 'object') {
    return data['error']['code'];
  } else if (data['errorEnum'] && typeof data['error'] === 'object') {
    return data['errorEnum']['name'] || data['errorEnum']['message'];
  } else if (data['target']) {
    // window.location = data['target'];
  } else {
    return null;
  }
};
