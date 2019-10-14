/*
 * @Author: ChaiHongJun
 * @Date: 2019-10-14 08:58:11
 * @LastEditTime: 2019-10-14 10:56:11
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
