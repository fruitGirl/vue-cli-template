# vue-base-spa vue单页面框架
### 1.简介
> 项目案例是一个简单的vue单页面案例,

> vue单页面案例是基于@vue/cli 3.x 版本

> 通过vue-router 对于路由做权限控制,

> 页面之间的的状态管理全部通过vuex进行管理

 

##### 项目用到的技术栈:
> * vue

> * vue-router

> * vuex

> * webpack

> * axios

> * eslint

> * less

**基础环境**
> node : v10.15.3

> npm : 6.4.1

**注:如果项目install有问题,可把对应环境配置成上面相关的环境在尝试**


**项目运行**
```
$ npm install
$ npm run serve
$ npm run lint // 代码校验，自动修正
```

**启动服务** 
```
npm run serve  开发环境构建
npm run build 发布环境构建
```

### 2.目录结构
```
├── public                             
│   ├── index.html                      入口页面
├── src                             源码目录  
│   ├── main.js                         入口文件
│   ├── App.js                          入口相关配置文件
│   ├── App.vue                         根组件
│   ├── common.js                       公共文件入口
│   ├── assets                          图片文件目录
│   ├── components                      公共组件目录
│   ├── layouts                         布局组件  
│   ├── pages                           页面目录
│   │   └── auth                          验证模块
│   │       └── index.vue                       验证入口文件
│   ├── router                          路由目录
│   │   └── auth                          验证模块
│   │       └── index.js                    验证模块入口
│   │   └── index.js                         所有模块汇总
│   ├── services                        接口服务 接口api定义
│   │   └── auth                          验证模块接口
│   │       └── index.js                    验证模块接口入口
│   ├── store                           应用级数据（state）
│   │   └── index.js                      所有模块数据汇总
│   │   └── auth                          验证相关数据模块
│   │       └── index.js                    验证模块入口
│   │       └── actions.js                  actions
│   │       └── mutations.js                mutations
│   │       └── getters.js                  getters
│   │       └── state.js                    state默认状态
│   │       └── type.js                     类型模块
│   ├── styles                          样式资源
│   │   └── reset.less                    重置样式  
│   │   └── common.less                   公共样式
│   ├── utils                           公共方法文件
│   │   └── axios.js                    接口拦截以及配置公共方法  
│   │   └── utils.js                    公共方法
├── package.json                    依赖入口以及eslint规则配置
├── README.md                       项目介绍
├── vue.config.js                   webpack配置                   
```

**大概解释一下目录结构**

> 项目是以**模块化**去划分页面,

> 建议在拿到需求的时候,根据**模块**划分好页面,

> **定义好模块名称,建议`pages`,`assets`,`router`,`services`,
`store`, `utils`, `layouts`, `styles`目录,模块名保持一致**

> **pages**目录里面是模块文件,模块文件里面是页面文件

> **assets**目录里面放置图片，个人建议也是按模块划分，公共的放置在一个文件夹（emmm...只是建议）

> **router**目录里面是路由文件,路由文件里面按照模块划分

> **styles**目录里面放一些公共样式,在入口文件引入

> **store**目录里面重要用于数据管理

> **utils**主要用于公共方法的放置

> **layouts**这个目录主要放入布局组件

>**components**目录里面放公共组件







### 3.配置文件

**package.json里面的配置**
```
"serve": "vue-cli-service serve --open", // 开发环境构建
"build": "vue-cli-service build", // 发布环境构建

"eslintConfig": {}, eslint配置入口
```
**vue.config.js里面的配置**


详情见vue.config.js源码


### 4.路由的实现
**使用[vue-router](https://router.vuejs.org/zh-cn/)进行单页面路由的控制**

**vue-router的相关概念介绍,就不一一介绍的,这边直接讲解vue-router在项目中的实现**

**路由的使用在router->index.js文件中**


```
export const router = new VueRouter({
  mode: 'history',
  routes,
});
```
#### mode为history表示使用h5 history模式,这样就不会出现#符号

不过history模式下面也有一些坑,具体可以参考
[HTML5 History 模式](https://router.vuejs.org/zh-cn/essentials/history-mode.html)

**路由目录如下:**
```
│   ├── router                          路由目录
│   │   └── auth                          验证模块
│   │       └── index.js                    验证模块入口
│   │   └── index.js                        所有模块汇总
```
**路由模块按照页面模块同步,如验证模块,保持跟页面模块一致,

一个模块下面放一个模块入口,里面的配置如下**


```
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
```

```
const Login = () => import(/* webpackChunkName: "auth" */ '@/pages/auth/index.vue');
```


> 这边结合 Vue 的异步组件和 Webpack 的[代码分割功能](https://doc.webpack-china.org//guides/code-splitting-async/#require-ensure-/), 轻松实现路由组件的懒加载。

> 有时候我们想把某个路由下的所有组件都打包在同个异步块 (chunk) 中,用特殊的注释语法来提供 chunk name (需要 Webpack > 2.4)

### 5.Vuex状态管理
##### 项目使用[vuex](https://vuex.vuejs.org/zh-cn/intro.html)进行状态管理,把一些公共行为,api交互相关的状态都封装在vuex中进行统一管理

**vuex的相关概念介绍,就不一一介绍的,这边直接讲解vuex在项目中的实现**

**vuex目录实现:**

```
│   ├── store                           应用级数据（state）
│   │   └── index.js                      所有模块数据汇总
│   │   └── type.js                      类型定义汇总
│   │   └── auth                          验证相关数据模块
│   │       └── index.js                    验证模块入口
│   │       └── actions.js                  actions
│   │       └── mutations.js                mutations
│   │       └── getters.js                  getters
│   │       └── state.js                    默认状态
│   │       └── type.js                     type
```


> vuex按照**页面目录结构**进行划分


#### 这边简单介绍一下自己对于vuex流程的理解

##### 1.首先就是我们在页面上必须通过action（行为）去改变数据状态,那么我们就需要定义action

```
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
    commit(type.LOGIN, params);
    app.$router.push('/home');
  },

  logout ({ commit }) {
    commit(types.LOGOUT);
  }
};



```
##### 2.更改 Vuex 的 store 中的状态的唯一方法是提交 mutation (变化)

**每个 mutation 都有一个字符串的 事件类型 (type) 和 一个 回调函数 (handler)**

```
/* ============
 * Mutations for the auth module
 * ============
 *
 * The mutations that are available on the
 * account module.
 */

// import Vue from 'vue';
import types from './type';
import Axios from '@/utils/axios';

export default {
  [types.LOGIN] (state, token) {
    localStorage.setItem('id_token', token);
    Axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },

  [types.LOGOUT] (state) {
    localStorage.removeItem('id_token');
    Axios.defaults.headers.common.Authorization = '';
  }
};


```

##### 3.mutation需要事件类型,那么我们就需要定义一个不可变的类型,这样可以避免类型冲突

```
export default {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT'
};

```
##### 4.那么前面的数据变更都完成了,如何获取数据的变更了,这时候我们就需要getters了
```
/* ============
 * Getters for the auth module
 * ============
 *
 * The getters that are available on the
 * auth module.
 */

export default {
  authenticated: state => state.authenticated
};

```

##### 5.数据初始化的时候都为空,这时候我们要定义一些默认的状态,就需要state了

```
/* ============
 * State of the auth module
 * ============
 *
 * The initial state of the auth module.
 */

export default {
  authenticated: false,
};

```

##### 6.最后就是把当前模块导出了,在index里面实现

```
/* ============
 * Auth Module
 * ============
 */

import actions from './actions';
import getters from './getters';
import mutations from './mutations';
import state from './state';

export default {
  namespaced: true,
  actions,
  getters,
  mutations,
  state,
};

```
##### 7.在页面上如何绑定action还有获取getter呢？
```
import { mapActions, mapGetters } from 'vuex';
...
computed: {
      ...mapActions({
        login: 'auth/login', // 映射 this.login() 为 this.$store.dispatch('auth/login')
      }),
      // 使用对象展开运算符将 getters 混入 computed 对象中
      ...mapGetters({
        // 映射 this.auth/authenticated 为 store.getters.auth/authenticated
        authenticated: 'auth/authenticated',
      }),
    },
```

我们通过**mapGetters**,**mapActions**, **mapStates**,辅助函数去实现



***
（具体搭建可详见[@vue/cli地址](https://cli.vuejs.org/zh/)）,

