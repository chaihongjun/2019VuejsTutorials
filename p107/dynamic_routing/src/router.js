/*
 * @Author: ChaiHongJun
 * @Date: 2019-10-04 16:06:38
 * @LastEditTime: 2019-10-04 17:12:42
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
 */
import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import User from "@/components/User";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      //动态URL
      path: "/user/:id",
      name: "user",
      component: User
    },
    {
      path: "/user",
      name: "user",
      component: User
    }
  ]
});
