/*
 * @Author: ChaiHongJun
 * @Date: 2019-10-14 17:20:43
 * @LastEditTime: 2019-10-15 15:09:31
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { request } from "@/network/request";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

/* 创建 axios 实例 */
// const instance1 = axios.create({
//   baseURL: "http://192.168.0.222:7300/mock/5d98362bb601f70efc7c1d7b/example",
//   timeout: 3000,
//   headers: {
//     "x-headers": "chj"
//   }
// });
//请求1
// instance1({
//   url: "/mock"
// })
//   .then(res => {
//     console.log(res);
//   })
//   .catch(err => {
//     console.log(err);
//   });
//请求2
// instance1({
//   url: "/query",
//   params: {
//     name: "chj"
//   }
// })
//   .then(res => {
//     console.log(res);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// 调用网络请求
// 调用方式 一
// 传入三个参数
// 1. axios 对象
// 2. 匿名函数，axios请求响应结果
// 3. 匿名函数，axios请求错误结果
// request(
//   {
//     url: "/mock/5d98362bb601f70efc7c1d7b/example/mock"
//   },
//   res => {
//     console.log(res);
//   },
//   err => {
//     console.log(err);
//   }
// );

// 调用方式 二
// 传入1个参数 config 对象类型 包含三个属性
// 1. axios 实例对象基础配置
// 2. success函数，axios请求响应结果
// 3. failure函数，axios请求错误结果
// request({
//   baseConfig: {
//     url: "/mock/5d98362bb601f70efc7c1d7b/example/mock"
//   },
//   success: function(res) {
//     //  这里对响应对象做处理
//     console.log(res);
//   },
//   failure: function(err) {
//     //  这里对错误做处理
//     console.log(err);
//   }
// });

// 调用方式 三
request({
  url: "/mock/5d98362bb601f70efc7c1d7b/example/mock"
})
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log(err);
  });
