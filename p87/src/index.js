/*
 * @Author: ChaiHongJun
 * @Date: 2019-09-30 10:29:33
 * @LastEditTime: 2019-09-30 11:05:51
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
 */
import Vue from "vue";
import movies from "./js/children";
new Vue({
  el: "#app",
  components: {
    movies
  },
  template: "<movies></movies>"
});
