/*
 * @Author: ChaiHongJun
 * @Date: 2019-10-07 18:05:57
 * @LastEditTime: 2019-10-08 15:44:53
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
