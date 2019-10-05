/*
 * @Author: ChaiHongJun
 * @Date: 2019-10-05 15:57:33
 * @LastEditTime: 2019-10-05 16:45:29
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
      path: "/about",
      name: "about",
      component: () => import("./views/About.vue")
    },
    {
      path: "/user/:id",
      name: "user",
      component: () => import("@/components/User.vue")
    },
    {
      path: "/profile",
      name: "profile",
      component: () => import("@/components/Profile.vue")
    }
  ]
});
