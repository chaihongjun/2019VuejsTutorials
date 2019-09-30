/*
 * @Author: ChaiHongJun
 * @Date: 2019-09-30 09:10:07
 * @LastEditTime: 2019-09-30 09:39:33
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
 */
console.log("这是入口文件index.js");

import Vue from "vue";

// 子组件
import children from "./js/children.js";
new Vue({
  el: "#app",
  template: `<children></children>`,
  components: {
    children
  }
});
