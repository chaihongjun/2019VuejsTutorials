/*
 * @Author: ChaiHongJun
 * @Date: 2019-10-05 23:02:47
 * @LastEditTime: 2019-10-06 16:59:31
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
Vue.config.productionTip = false;
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
//全局 前置守卫
router.beforeEach((to, from, next) => {
  // to 表示即将前往的路由对象
  // from 表示即将离开的路由对象
  //改每个组件页面的标题
  document.title = to.meta.title;
  console.log("全局 前置守卫 --- 导航触发");
  next();
});
//全局 后置钩子
router.afterEach((to, from) => {
  console.log("全局 后置钩子");
});
