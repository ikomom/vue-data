import Router from 'vue-router';
import Vue from 'vue';
Vue.use(Router)
const vueRouter = new Router({
  mode: 'history',
  routes: [
  {
    path: '/login',
    name: '登录页',
    component: () =>
      import( /* webpackChunkName: "page" */ '@/page/login')
  }, {
    path: '/index',
    name: '列表页',
    component: () =>
      import( /* webpackChunkName: "page" */ '@/page/index')
  }, {
    path: '/',
    name: '首页',
    redirect: '/login'
  },
  // {
  //   path: '/',
  //   name: '列表页',
  //   component: () =>
  //     import( /* webpackChunkName: "page" */ '@/page/index')
  // },
   {
    path: '/build/:id',
    name: 'build',
    component: () =>
      import( /* webpackChunkName: "page" */ '@/page/build')
  }, {
    path: '/view/:id',
    name: 'view',
    component: () =>
      import( /* webpackChunkName: "page" */ '@/page/view')
  }]
})
export default vueRouter;