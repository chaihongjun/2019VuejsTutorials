/*
 * @Author: ChaiHongJun
 * @Date: 2019-09-29 17:19:38
 * @LastEditTime: 2019-09-29 17:59:41
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
 */
console.log("Hello World from your main file!");
import infos from "./js/data.js";
import Vue from "vue";

const app = new Vue({
  el: "#app",
  data: {
    infos
  },
  components: {
    msg: {
      template: "#msg"
    }
  }
});
