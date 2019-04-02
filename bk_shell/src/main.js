// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false


/* eslint-disable no-new */

router.beforeEach((to, from, next) => {
  if (to.matched.some(res => res.meta.requireAuth)) { // 验证是否需要登陆
    if (sessionStorage.getItem('sid')) { // 查询本地存储信息是否已经登陆
      next();
    } else {
      next({
        path: '/Login', // 未登录则跳转至login页面
      });
    }
  } else {
    next();
  }
});

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
