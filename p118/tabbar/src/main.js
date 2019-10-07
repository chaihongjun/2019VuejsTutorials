/*
 * @Author: ChaiHongJun
 * @Date: 2019-10-07 09:40:20
 * @LastEditTime: 2019-10-07 17:12:53
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

import "./assets/css/base.css";
import "./assets/css/tabbar.css";
import "./assets/css/iconfont/iconfont.css";
