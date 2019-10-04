/*
 * @Author: ChaiHongJun
 * @Date: 2019-10-04 14:29:00
 * @LastEditTime: 2019-10-04 15:08:52
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";

//import "bootstrap"; //引入JS
// 引入bootstrap CSS
import "bootstrap/dist/css/bootstrap.css";

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
