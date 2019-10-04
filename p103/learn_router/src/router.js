/*
 * @Author: ChaiHongJun
 * @Date: 2019-10-04 08:50:22
 * @LastEditTime: 2019-10-04 09:27:38
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
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/how2use",
      name: "how2use",
      component: () => import("@/components/HowtoUseRouter.vue")
    }
  ]
});
