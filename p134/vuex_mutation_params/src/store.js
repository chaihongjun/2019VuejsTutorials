/*
 * @Author: ChaiHongJun
 * @Date: 2019-10-12 09:23:23
 * @LastEditTime: 2019-10-12 11:25:06
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
 */
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    counter: 0,
    players: [
      { id: 110, name: "Tmac", age: 25 },
      { id: 111, name: "Kobe", age: 24 },
      { id: 112, name: "Carter", age: 30 },
      { id: 113, name: "Harden", age: 29 }
    ]
  },
  mutations: {
    // mutation 包含量事件类型和回调函数handler
    //handler 第一个参数就是 state
    add(state) {
      state.counter++;
    },
    sub(state) {
      state.counter--;
    },

    plus(state, count) {
      state.counter = state.counter + count;
    },
    // mutation 的第二个参数可以是一个数据对象
    addPlayerOne(state, player) {
      state.players.push(player);
    },
    // mutation 的第二个参数可以是一个对象payload包含事件类型和数据
    // payload == { type: "addPlayerTwo", player }
    addPlayerTwo(state, payload) {
      state.players.push(payload.player);
    }
  },
  actions: {}
});
