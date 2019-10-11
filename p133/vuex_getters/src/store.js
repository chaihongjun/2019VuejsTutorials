/*
 * @Author: ChaiHongJun
 * @Date: 2019-10-11 16:39:30
 * @LastEditTime: 2019-10-11 17:32:55
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
 */
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    counter: 0,
    students: [
      { id: 110, name: "chj", age: 30 },
      { id: 111, name: "puff", age: 16 },
      { id: 112, name: "darkchild", age: 18 }
    ]
  },
  mutations: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    }
  },
  actions: {},
  getters: {
    power(state) {
      return state.counter * state.counter;
    }
  }
});
