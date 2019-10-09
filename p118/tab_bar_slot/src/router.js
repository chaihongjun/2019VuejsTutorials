/*
 * @Author: ChaiHongJun
 * @Date: 2019-10-07 18:05:57
 * @LastEditTime: 2019-10-09 12:08:12
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
 */
import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/category",
      name: "category",
      component: () => import("@/views/Category.vue")
    },
    {
      path: "/cart",
      name: "cart",
      component: () => import("@/views/Cart.vue")
    },
    {
      path: "/profile",
      name: "profile",
      component: () => import("@/views/Profile.vue")
    }
  ]
});
