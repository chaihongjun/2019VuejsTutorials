/*
 * @Author: ChaiHongJun
 * @Date: 2019-10-07 18:05:57
 * @LastEditTime: 2019-10-10 17:51:19
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// import axios from "axios";
// Vue.prototype.axios = axios;
Vue.config.productionTip = false;
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
// let axiosConf = {
//   baseURL: "http://192.168.0.222:7300/",
//   url: "/mock/5d98362bb601f70efc7c1d7b/example/query",
//   method: "get",
//   headers: { "X-Requested-With": "CHJ" }
// };
/* 一般的请求  */
// axios(axiosConf)
//   .then(res => {
//     // console.log(res);
//     console.log(res.config);
//     console.log(res.data);
//     console.log(res.headers);
//     console.log(res.requests);
//     console.log(res.status);
//     console.log(res.statusText);
//   })
//   .catch(err => {
//     console.log(err);
//   });
/* 并发请求 */
// let mockUrl =
//   "http://192.168.0.222:7300/mock/5d98362bb601f70efc7c1d7b/example/mock";
// function getEmail() {
//   console.log("getEmail");

//   return axios.get(mockUrl, {
//     method: "get",
//     params: {
//       address: "湖北省 鄂州市 鄂城区"
//     }
//   });
// }
// function getAddress() {}
// function getUrl() {}

// axios
//   .all([getEmail()])
//   .then(response => {
//     console.log(response[0].data.data);
//   })
//   .catch(err => {
//     console.log(err);
//   });
