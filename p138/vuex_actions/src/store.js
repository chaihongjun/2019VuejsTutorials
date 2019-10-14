/*
 * @Author: ChaiHongJun
 * @Date: 2019-10-12 15:39:06
 * @LastEditTime: 2019-10-12 18:05:35
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
 */
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    counter: 0
  },
  mutations: {
    //  同步加
    add(state) {
      state.counter++;
    },
    sub(state) {
      //  同步减
      state.counter--;
    },
    // mul(state) {
    //   setTimeout(() => {
    //     state.counter = state.counter * 2;
    //   }, 2000);
    // },

    //
    divOne(state) {
      state.counter = state.counter / 2;
    }
  },
  actions: {
    //  异步
    /*  在 mutation 里面的异步操作，
          虽然可以正常的在视图更新，
          但是在devtools里面仍然是旧的数据，
          所以，异步操作应该在action里面
      */
    div(context) {
      setTimeout(() => {
        //修改state的方法只能走mutation,
        // 所以必须调用mutations的动作
        //异步操作完再调用同步操作
        //再调用mutation
        context.commit("divOne");
      }, 1000);
    }
  }
});
