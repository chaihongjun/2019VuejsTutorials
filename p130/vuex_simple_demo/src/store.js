/*
 * @Author: ChaiHongJun
 * @Date: 2019-10-11 09:12:13
 * @LastEditTime: 2019-10-11 11:08:17
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
 */
import Vue from "vue";
import Vuex from "vuex";

/* 状态管理：组件共享的变量存储在一个对象，这个对象放置在顶层Vue
实例中，让其他组件可以使用。



*/

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    counter: 0,
    info: "多页面共享数据"
  } /*   相当于组件data   */,

  actions: {
    //先处理异步操作比如网络请求
  },
  mutations: {
    //再处理同步操作
    //  mutations 维护 store 里面的状态变化
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    }
  }
});
